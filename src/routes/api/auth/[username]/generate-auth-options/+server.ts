import type { RequestEvent, RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { generateAuthenticationOptions } from "@simplewebauthn/server";

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
  });

  const options = generateAuthenticationOptions({
    // Require users to use a previously-registered authenticator
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    allowCredentials: authenticators.map(authenticator => ({
      id: authenticator.credentialID,
      type: 'public-key',
    })),
    userVerification: 'preferred',
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