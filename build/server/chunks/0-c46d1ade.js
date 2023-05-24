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
const component = async () => (await import('./_layout.svelte-15de19ec.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.18147111.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.9285d219.js","_app/immutable/chunks/Button.3204328a.js","_app/immutable/chunks/stores.a412b364.js"];
const stylesheets = ["_app/immutable/assets/0.d3a532b0.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-c46d1ade.js.map
