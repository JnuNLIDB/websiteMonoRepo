import { j as json } from './index-36410280.js';
import { p as prisma } from './prisma-68db7c66.js';
import { verifyRegistrationResponse } from '@simplewebauthn/server';
import { O as ORIGIN, R as RPID } from './private-f3ca3244.js';
import '@prisma/client';

const POST = async ({ params, request, cookies }) => {
  const user_name = params.username;
  const body = await request.json();
  if (!user_name) {
    return new Response(JSON.stringify({ error: "Invalid Request" }), { status: 400 });
  }
  const user = await prisma.user.findFirst({
    where: {
      username: user_name
    }
  });
  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid user" }), { status: 400 });
  }
  const expectedChallenge = user.currentChallenge;
  if (!expectedChallenge) {
    return new Response(JSON.stringify({ error: "Invalid challenge" }), { status: 400 });
  }
  let verification;
  try {
    verification = await verifyRegistrationResponse({
      response: body,
      expectedChallenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RPID
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error }), { status: 400 });
  }
  if (verification.registrationInfo && verification.verified) {
    const session_id = await prisma.session.create({
      data: {
        user: {
          connect: {
            id: user.id
          }
        },
        expiresAt: new Date((/* @__PURE__ */ new Date()).getTime() + 1e3 * 60 * 60 * 24 * 30)
        // 30 days
      }
    });
    cookies.set("session_id", session_id.id, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      // 30 days
      httpOnly: true,
      sameSite: "strict"
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
    });
  }
  return json(verification);
};

export { POST };
//# sourceMappingURL=_server.ts-511fb179.js.map
