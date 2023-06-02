const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.b71808f6.js","app":"_app/immutable/entry/app.4d15d763.js","imports":["_app/immutable/entry/start.b71808f6.js","_app/immutable/chunks/index.88c7808c.js","_app/immutable/chunks/singletons.94bbff71.js","_app/immutable/chunks/index.b625118a.js","_app/immutable/entry/app.4d15d763.js","_app/immutable/chunks/index.88c7808c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-0f9d2bf4.js'),
			() => import('./chunks/1-f93cdae9.js'),
			() => import('./chunks/2-f4ac6058.js')
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
				endpoint: () => import('./chunks/_server.ts-00e32278.js')
			},
			{
				id: "/api/auth/[username]/verify-authentication",
				pattern: /^\/api\/auth\/([^/]+?)\/verify-authentication\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-ecc57e49.js')
			},
			{
				id: "/api/auth/[username]/verify-registration",
				pattern: /^\/api\/auth\/([^/]+?)\/verify-registration\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-1d16e28e.js')
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
