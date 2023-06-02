import type { RequestEvent, RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { verifyRegistrationResponse } from "@simplewebauthn/server";
import { RPID, ORIGIN } from "$env/static/private";

export const POST: RequestHandler = async ({ params, request, cookies }: RequestEvent) => {
  const user_name: string = params.username;
  const body = await request.json();
  if (!user_name) {
    return new Response(JSON.stringify({ error: 'Invalid Request' }), { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: {
      username: user_name
    }
  });
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid user' }), { status: 400 });
  }

  const expectedChallenge = user.currentChallenge;
  if (!expectedChallenge) {
    return new Response(JSON.stringify({ error: 'Invalid challenge' }), { status: 400 });
  }

  let verification;
  try {
    verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RPID,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error }), { status: 400 });
  }
  if (verification.registrationInfo && verification.verified) {
    const session_id = await prisma.session.create({
      data: {
        user: {
          connect: {
            id: user.id
          }
        },
        expiresAt: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30) // 30 days
      }
    });
    cookies.set('session_id', session_id.id, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: 'strict',
    });
    await prisma.authenticator.create({
      data: {
        credentialPublicKey: Buffer.from(verification.registrationInfo.credentialPublicKey),
        credentialID: Buffer.from(verification.registrationInfo.credentialID),
        counter: verification.registrationInfo.counter,
        credentialDeviceType: verification.registrationInfo.credentialDeviceType,
        credentialBackedUp: verification.registrationInfo.credentialBackedUp,
        userID: user.id
      }
    })
  }
  return json(verification);
}