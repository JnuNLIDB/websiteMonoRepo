const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.5e0927fb.js","app":"_app/immutable/entry/app.5aa59d22.js","imports":["_app/immutable/entry/start.5e0927fb.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.9285d219.js","_app/immutable/entry/app.5aa59d22.js","_app/immutable/chunks/index.dfaa5e6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-c46d1ade.js'),
			() => import('./chunks/1-e321bc30.js'),
			() => import('./chunks/2-993a0b37.js')
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
