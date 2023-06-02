import type { RequestEvent, RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { verifyAuthenticationResponse, verifyRegistrationResponse } from "@simplewebauthn/server";
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

  const authenticator = await prisma.authenticator.findFirst({
    where: {
      userID: user.id,
      credentialID: Buffer.from(body.id, 'base64')
    }
  });

  if (!authenticator) {
    return new Response(JSON.stringify({ error: 'Invalid authenticator' }), { status: 400 });
  }

  let verification;
  try {
    verification = await verifyAuthenticationResponse({
      response: body,
      expectedChallenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RPID,
      authenticator: {
        credentialPublicKey: authenticator.credentialPublicKey,
        credentialID: authenticator.credentialPublicKey,
        counter: authenticator.counter
      }
    });
  } catch (error) {
    console.error(error);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Response(JSON.stringify({ error: error.toString() }), { status: 400 });
  }

  if (verification.authenticationInfo && verification.verified) {
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
    await prisma.authenticator.update({
      where: {
        credentialID: authenticator.credentialID,
      },
      data: {
        counter: verification.authenticationInfo.newCounter
      }
    })
  }
  return json(verification);
}