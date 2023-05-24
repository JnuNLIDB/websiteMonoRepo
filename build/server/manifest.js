const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.b77ad0f8.js","app":"_app/immutable/entry/app.f8274070.js","imports":["_app/immutable/entry/start.b77ad0f8.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.2fea820a.js","_app/immutable/entry/app.f8274070.js","_app/immutable/chunks/index.dfaa5e6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-03f81336.js'),
			() => import('./chunks/1-95587b03.js'),
			() => import('./chunks/2-de39ee2e.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/nlidb",
				pattern: /^\/api\/nlidb\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-81b5d04d.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
