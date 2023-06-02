import { j as json } from './index-36410280.js';
import { p as prisma } from './prisma-68db7c66.js';
import '@prisma/client';

const GET = async ({ cookies }) => {
  const session_id = cookies.get("session_id");
  if (!session_id) {
    return new Response(JSON.stringify({ error: "Invalid session" }), { status: 400 });
  }
  await prisma.session.delete({
    where: {
      id: session_id
    }
  });
  cookies.delete("session_id", {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });
  return json({ success: true });
};

export { GET };
//# sourceMappingURL=_server.ts-9c6cceb8.js.map
