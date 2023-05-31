const load = async (event) => {
  return {
    session: await event.locals.getSession()
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-cbcb849a.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.942355fe.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.a7ed2851.js","_app/immutable/chunks/Button.7f1278cf.js","_app/immutable/chunks/stores.5811fe05.js"];
const stylesheets = ["_app/immutable/assets/0.06e7130b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-fb597f71.js.map
