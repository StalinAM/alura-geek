import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.f098e0e3.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.1b92794e.mjs');
const _page1  = () => import('./chunks/all-products-admin@_@astro.092541a0.mjs');
const _page2  = () => import('./chunks/all-products@_@astro.381c8a9c.mjs');
const _page3  = () => import('./chunks/new-product@_@astro.006997a6.mjs');
const _page4  = () => import('./chunks/login@_@astro.11ee8aa8.mjs');
const _page5  = () => import('./chunks/_product_@_@astro.1ef5ae74.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/all-products-admin.astro", _page1],["src/pages/all-products.astro", _page2],["src/pages/new-product.astro", _page3],["src/pages/login.astro", _page4],["src/pages/[product].astro", _page5]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/alura-geek/_astro/hoisted.5b11af0b.js"}],"styles":[{"type":"external","src":"/alura-geek/_astro/_product_.a8313ca1.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/alura-geek/_astro/hoisted.14e45e6b.js"}],"styles":[{"type":"external","src":"/alura-geek/_astro/_product_.a8313ca1.css"}],"routeData":{"route":"/all-products-admin","type":"page","pattern":"^\\/all-products-admin\\/?$","segments":[[{"content":"all-products-admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/all-products-admin.astro","pathname":"/all-products-admin","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/alura-geek/_astro/hoisted.940e7f5c.js"}],"styles":[{"type":"external","src":"/alura-geek/_astro/_product_.a8313ca1.css"}],"routeData":{"route":"/all-products","type":"page","pattern":"^\\/all-products\\/?$","segments":[[{"content":"all-products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/all-products.astro","pathname":"/all-products","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/alura-geek/_astro/hoisted.5b11af0b.js"}],"styles":[{"type":"external","src":"/alura-geek/_astro/_product_.a8313ca1.css"}],"routeData":{"route":"/new-product","type":"page","pattern":"^\\/new-product\\/?$","segments":[[{"content":"new-product","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/new-product.astro","pathname":"/new-product","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/alura-geek/_astro/hoisted.5b11af0b.js"}],"styles":[{"type":"external","src":"/alura-geek/_astro/_product_.a8313ca1.css"}],"routeData":{"route":"/login","type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/alura-geek/_astro/hoisted.5b11af0b.js"}],"styles":[{"type":"external","src":"/alura-geek/_astro/_product_.a8313ca1.css"}],"routeData":{"route":"/[product]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"product","dynamic":true,"spread":false}]],"params":["product"],"component":"src/pages/[product].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://github.com/StalinAM","base":"/alura-geek/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["D:/Dev/alura-geek/src/pages/[product].astro",{"propagation":"none","containsHead":true}],["D:/Dev/alura-geek/src/pages/all-products-admin.astro",{"propagation":"none","containsHead":true}],["D:/Dev/alura-geek/src/pages/all-products.astro",{"propagation":"none","containsHead":true}],["D:/Dev/alura-geek/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Dev/alura-geek/src/pages/login.astro",{"propagation":"none","containsHead":true}],["D:/Dev/alura-geek/src/pages/new-product.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/all-products-admin.astro":"chunks/pages/all-products-admin.astro.2b9f38af.mjs","/src/pages/all-products.astro":"chunks/pages/all-products.astro.5524031b.mjs","/src/pages/index.astro":"chunks/pages/index.astro.91e1700c.mjs","/src/pages/login.astro":"chunks/pages/login.astro.fa99eaa1.mjs","/src/pages/new-product.astro":"chunks/pages/new-product.astro.935c258c.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.1b92794e.mjs","\u0000@astro-page:src/pages/all-products-admin@_@astro":"chunks/all-products-admin@_@astro.092541a0.mjs","\u0000@astro-page:src/pages/all-products@_@astro":"chunks/all-products@_@astro.381c8a9c.mjs","\u0000@astro-page:src/pages/new-product@_@astro":"chunks/new-product@_@astro.006997a6.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login@_@astro.11ee8aa8.mjs","\u0000@astro-page:src/pages/[product]@_@astro":"chunks/_product_@_@astro.1ef5ae74.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.14e45e6b.js","/astro/hoisted.js?q=1":"_astro/hoisted.940e7f5c.js","/astro/hoisted.js?q=2":"_astro/hoisted.5b11af0b.js","astro:scripts/before-hydration.js":""},"assets":["/alura-geek/_astro/raleway-cyrillic-ext-wght-normal.fab646c7.woff2","/alura-geek/_astro/raleway-cyrillic-wght-normal.3aaa08d1.woff2","/alura-geek/_astro/raleway-latin-ext-wght-normal.ab47b8f5.woff2","/alura-geek/_astro/raleway-latin-wght-normal.405ceee1.woff2","/alura-geek/_astro/raleway-vietnamese-wght-normal.72a61684.woff2","/alura-geek/_astro/_product_.a8313ca1.css","/alura-geek/1.webp","/alura-geek/10.webp","/alura-geek/11.webp","/alura-geek/12.webp","/alura-geek/13.webp","/alura-geek/14.webp","/alura-geek/15.webp","/alura-geek/16.webp","/alura-geek/17.webp","/alura-geek/18.webp","/alura-geek/2.webp","/alura-geek/3.webp","/alura-geek/4.webp","/alura-geek/5.webp","/alura-geek/6.webp","/alura-geek/7.webp","/alura-geek/8.webp","/alura-geek/9.webp","/alura-geek/alura-geek.webp","/alura-geek/bg.webp","/alura-geek/favicon.svg","/alura-geek/_astro/hoisted.14e45e6b.js","/alura-geek/_astro/hoisted.5b11af0b.js","/alura-geek/_astro/hoisted.940e7f5c.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };