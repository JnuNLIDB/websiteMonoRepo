const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.3461dafc.js","app":"_app/immutable/entry/app.a3aa6cff.js","imports":["_app/immutable/entry/start.3461dafc.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.b234ec17.js","_app/immutable/entry/app.a3aa6cff.js","_app/immutable/chunks/index.dfaa5e6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-e8b9effb.js'),
			() => import('./chunks/1-f2651314.js'),
			() => import('./chunks/2-177cfa69.js')
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
