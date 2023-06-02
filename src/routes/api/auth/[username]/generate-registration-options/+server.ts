import type { RequestEvent, RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { generateRegistrationOptions } from "@simplewebauthn/server";
import { RPID } from "$env/static/private";

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
  const user_name = params.username;
  if (!user_name) {
    return new Response(JSON.stringify({ error: 'Invalid Request' }), { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: {
      username: user_name,
    },
    create: {
      username: user_name,
    },
    update: {}
  })
  const authenticators = await prisma.authenticator.findMany({
    where: {
      userID: user.id
    }
  })

  if (authenticators.length > 0) {
    return new Response(JSON.stringify({ error: 'This Account Have Already Been Registered' }), { status: 400 });
  }

  const options = generateRegistrationOptions({
    rpName: "Ming Yu",
    rpID: RPID,
    userID: user.id,
    userName: user.username,
    // Don't prompt users for additional information about the authenticator
    // (Recommended for smoother UX)
    attestationType: 'none',
    // Prevent users from re-registering existing authenticators
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    excludeCredentials: authenticators.map(authenticator => ({
      id: authenticator.credentialID,
      type: 'public-key',
    })),
  });

  await prisma.user.update({
    where: {
      username: user_name,
    },
    data: {
      currentChallenge: options.challenge
    }
  })

  return json(options);
}