const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.bcc14c04.js","app":"_app/immutable/entry/app.8a8f82e8.js","imports":["_app/immutable/entry/start.bcc14c04.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.06a7617a.js","_app/immutable/entry/app.8a8f82e8.js","_app/immutable/chunks/index.dfaa5e6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-5bede630.js'),
			() => import('./chunks/1-6337d6c8.js'),
			() => import('./chunks/2-eeacde0a.js')
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
				endpoint: () => import('./chunks/_server.ts-1e2db6cb.js')
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
