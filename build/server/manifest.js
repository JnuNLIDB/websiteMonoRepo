const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.ea23e306.js","app":"_app/immutable/entry/app.b20d43aa.js","imports":["_app/immutable/entry/start.ea23e306.js","_app/immutable/chunks/index.dfaa5e6f.js","_app/immutable/chunks/singletons.fbbcf1cf.js","_app/immutable/entry/app.b20d43aa.js","_app/immutable/chunks/index.dfaa5e6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3ef418c3.js'),
			() => import('./chunks/1-fd56d9e3.js'),
			() => import('./chunks/2-86486ad8.js')
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
