import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","cockpit_high.webp","cockpit_low.webp","dzcrane_logo.webp","favicon-16x16.png","favicon-32x32.png","favicon.ico","full_stick.webp","helping_hand.webp","off_the_ground.webp","packed.webp","rear.webp","site.webmanifest","wide_jib.webp","with_jib.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-90c74446.js","imports":["_app/immutable/start-90c74446.js","_app/immutable/chunks/index-cab46252.js","_app/immutable/chunks/singletons-8d34d236.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
