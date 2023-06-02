import { j as json } from './index-36410280.js';
import { p as prisma } from './prisma-68db7c66.js';
import { generateRegistrationOptions } from '@simplewebauthn/server';
import { R as RPID } from './private-f3ca3244.js';
import '@prisma/client';

const GET = async ({ params }) => {
  const user_name = params.username;
  if (!user_name) {
    return new Response(JSON.stringify({ error: "Invalid Request" }), { status: 400 });
  }
  const user = await prisma.user.upsert({
    where: {
      username: user_name
    },
    create: {
      username: user_name
    },
    update: {}
  });
  const authenticators = await prisma.authenticator.findMany({
    where: {
      userID: user.id
    }
  });
  if (authenticators.length > 0) {
    return new Response(JSON.stringify({ error: "This Account Have Already Been Registered" }), { status: 400 });
  }
  const options = generateRegistrationOptions({
    rpName: "Ming Yu",
    rpID: RPID,
    userID: user.id,
    userName: user.username,
    // Don't prompt users for additional information about the authenticator
    // (Recommended for smoother UX)
    attestationType: "none",
    // Prevent users from re-registering existing authenticators
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    excludeCredentials: authenticators.map((authenticator) => ({
      id: authenticator.credentialID,
      type: "public-key"
    }))
  });
  await prisma.user.update({
    where: {
      username: user_name
    },
    data: {
      currentChallenge: options.challenge
    }
  });
  return json(options);
};

export { GET };
//# sourceMappingURL=_server.ts-f53f64a2.js.map
