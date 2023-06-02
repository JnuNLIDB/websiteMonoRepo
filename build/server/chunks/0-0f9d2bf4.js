import { p as prisma } from './prisma-68db7c66.js';
import '@prisma/client';

const load = async ({ cookies }) => {
  const session_id = cookies.get("session_id");
  if (!session_id) {
    return {
      user: null
    };
  }
  const session = await prisma.session.findFirst({
    where: {
      id: session_id,
      expiresAt: {
        gte: /* @__PURE__ */ new Date()
      }
    }
  });
  if (!session) {
    return {
      user: null
    };
  }
  const user = await prisma.user.findFirst({
    where: {
      id: session.userID
    }
  });
  if (!user) {
    return {
      user: null
    };
  }
  return {
    user
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-78885ecf.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.57d02d63.js","_app/immutable/chunks/index.88c7808c.js","_app/immutable/chunks/index.b625118a.js","_app/immutable/chunks/Input.e14acc4d.js"];
const stylesheets = ["_app/immutable/assets/0.06e7130b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-0f9d2bf4.js.map
