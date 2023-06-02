const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.d59dbddb.js","app":"_app/immutable/entry/app.f4d0f182.js","imports":["_app/immutable/entry/start.d59dbddb.js","_app/immutable/chunks/index.88c7808c.js","_app/immutable/chunks/singletons.edc433d9.js","_app/immutable/chunks/index.b625118a.js","_app/immutable/entry/app.f4d0f182.js","_app/immutable/chunks/index.88c7808c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-0f9d2bf4.js'),
			() => import('./chunks/1-1d4ec04e.js'),
			() => import('./chunks/2-0b64ddad.js')
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
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-9c6cceb8.js')
			},
			{
				id: "/api/auth/[username]/generate-auth-options",
				pattern: /^\/api\/auth\/([^/]+?)\/generate-auth-options\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-aac3fd5d.js')
			},
			{
				id: "/api/auth/[username]/generate-registration-options",
				pattern: /^\/api\/auth\/([^/]+?)\/generate-registration-options\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-9b41cca6.js')
			},
			{
				id: "/api/auth/[username]/verify-authentication",
				pattern: /^\/api\/auth\/([^/]+?)\/verify-authentication\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-0e25ab3a.js')
			},
			{
				id: "/api/auth/[username]/verify-registration",
				pattern: /^\/api\/auth\/([^/]+?)\/verify-registration\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-46692543.js')
			},
			{
				id: "/api/nlidb",
				pattern: /^\/api\/nlidb\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-ee281c7a.js')
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
