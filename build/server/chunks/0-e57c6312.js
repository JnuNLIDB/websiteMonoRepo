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
const component = async () => (await import('./_layout.svelte-913ef6e8.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.31901396.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.a64a5b78.js","_app/immutable/chunks/Button.3204328a.js","_app/immutable/chunks/stores.b0125f16.js"];
const stylesheets = ["_app/immutable/assets/0.d3a532b0.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-e57c6312.js.map
