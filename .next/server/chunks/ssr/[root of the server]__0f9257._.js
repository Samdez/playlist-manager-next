module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/app/client.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "client": (()=>client)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$SpotifyApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/SpotifyApi.js [app-ssr] (ecmascript)");
;
const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];
const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$SpotifyApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotifyApi"].withUserAuthorization('0916ebedc8fe494699b4252738eb2444', 'http://localhost:3000/my-playlists', scopes);
}}),
"[project]/app/authenticate/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MyPlaylists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/client.ts [app-ssr] (ecmascript)");
'use client';
;
;
function MyPlaylists() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const authenticate = async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"].authenticate();
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"].currentUser.profile();
            console.log('🚀 ~ authenticate ~ user:', user);
        };
        authenticate();
        redirect('/my-playlists');
    }, []);
// const authorizeUrl = sdk.getAuthorizeUrl();
// return <Link href={authorizeUrl}>Login with Spotify</Link>;
// const spotifyApi = new SpotifyWebApi({
// 	clientId: '0916ebedc8fe494699b4252738eb2444',
// 	// clientSecret: 'bf470b8b094245afb8799dcfa33f2645',
// 	redirectUri: 'http://localhost:3000/my-playlists',
// });
// spotifyApi.setAccessToken('');
// const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, 'state');
// return <Link href={authorizeUrl}>Login with Spotify</Link>;
}
}}),
"[project]/app/authenticate/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EndpointsBase)
});
class EndpointsBase {
    api;
    constructor(api){
        this.api = api;
    }
    async getRequest(url) {
        return await this.api.makeRequest("GET", url);
    }
    async postRequest(url, body, contentType = undefined) {
        return await this.api.makeRequest("POST", url, body, contentType);
    }
    async putRequest(url, body, contentType = undefined) {
        return await this.api.makeRequest("PUT", url, body, contentType);
    }
    async deleteRequest(url, body) {
        return await this.api.makeRequest("DELETE", url, body);
    }
    paramsFor(args) {
        const params = new URLSearchParams();
        for (let key of Object.getOwnPropertyNames(args)){
            if (args[key] || args[key] === 0 || !args[key] && typeof args[key] === 'boolean') {
                params.append(key, args[key].toString());
            }
        }
        return [
            ...params
        ].length > 0 ? `?${params.toString()}` : "";
    }
} //# sourceMappingURL=EndpointsBase.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/AlbumsEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AlbumsEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class AlbumsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds, market) {
        if (typeof idOrIds === 'string') {
            const params = this.paramsFor({
                market
            });
            const album = await this.getRequest(`albums/${idOrIds}${params}`);
            return album;
        }
        const params = this.paramsFor({
            ids: idOrIds,
            market
        });
        // TODO: only returns top 20, validate here
        const response = await this.getRequest(`albums${params}`);
        return response.albums;
    }
    tracks(albumId, market, limit, offset) {
        const params = this.paramsFor({
            market,
            limit,
            offset
        });
        return this.getRequest(`albums/${albumId}/tracks${params}`);
    }
} //# sourceMappingURL=AlbumsEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/ArtistsEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ArtistsEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class ArtistsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds) {
        if (typeof idOrIds === "string") {
            const artist = this.getRequest(`artists/${idOrIds}`);
            return artist;
        }
        const params = this.paramsFor({
            ids: idOrIds
        });
        const response = await this.getRequest(`artists${params}`);
        return response.artists;
    }
    albums(id, includeGroups, market, limit, offset) {
        const params = this.paramsFor({
            include_groups: includeGroups,
            market,
            limit,
            offset
        });
        return this.getRequest(`artists/${id}/albums${params}`);
    }
    topTracks(id, market) {
        // BUG: market is flagged as optional in the docs, but it's actually required for this endpoint
        // otherwise you get a 400
        const params = this.paramsFor({
            market
        });
        return this.getRequest(`artists/${id}/top-tracks${params}`);
    }
    relatedArtists(id) {
        return this.getRequest(`artists/${id}/related-artists`);
    }
} //# sourceMappingURL=ArtistsEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/AudiobooksEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AudiobooksEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class AudiobooksEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds, market) {
        if (typeof idOrIds === 'string') {
            const params = this.paramsFor({
                market
            });
            return this.getRequest(`audiobooks/${idOrIds}${params}`);
        }
        const params = this.paramsFor({
            ids: idOrIds,
            market
        });
        const response = await this.getRequest(`audiobooks${params}`);
        return response.audiobooks;
    }
    getAudiobookChapters(id, market, limit, offset) {
        const params = this.paramsFor({
            market,
            limit,
            offset
        });
        return this.getRequest(`audiobooks/${id}/chapters${params}`);
    }
} //# sourceMappingURL=AudiobooksEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/BrowseEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BrowseEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class BrowseEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    getCategories(country, locale, limit, offset) {
        const params = this.paramsFor({
            country,
            locale,
            limit,
            offset
        });
        return this.getRequest(`browse/categories${params}`);
    }
    getCategory(categoryId, country, locale) {
        const params = this.paramsFor({
            country,
            locale
        });
        return this.getRequest(`browse/categories/${categoryId}${params}`);
    }
    getNewReleases(country, limit, offset) {
        const params = this.paramsFor({
            country,
            limit,
            offset
        });
        return this.getRequest(`browse/new-releases${params}`);
    }
    getFeaturedPlaylists(country, locale, timestamp, limit, offset) {
        const params = this.paramsFor({
            country,
            locale,
            timestamp,
            limit,
            offset
        });
        return this.getRequest(`browse/featured-playlists${params}`);
    }
    getPlaylistsForCategory(category_id, country, limit, offset) {
        const params = this.paramsFor({
            country,
            limit,
            offset
        });
        return this.getRequest(`browse/categories/${category_id}/playlists${params}`);
    }
} //# sourceMappingURL=BrowseEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/ChaptersEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ChaptersEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class ChaptersEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds, market) {
        if (typeof idOrIds === 'string') {
            const params = this.paramsFor({
                market
            });
            return this.getRequest(`chapters/${idOrIds}${params}`);
        }
        // TODO: Only returns top 50, validate / pre-check here
        const params = this.paramsFor({
            ids: idOrIds,
            market
        });
        const response = await this.getRequest(`chapters${params}`);
        return response.chapters;
    }
} //# sourceMappingURL=ChaptersEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EpisodesEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EpisodesEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class EpisodesEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds, market) {
        if (typeof idOrIds === 'string') {
            const params = this.paramsFor({
                market
            });
            return this.getRequest(`episodes/${idOrIds}${params}`);
        }
        const params = this.paramsFor({
            ids: idOrIds,
            market
        });
        const response = await this.getRequest(`episodes${params}`);
        return response.episodes;
    }
} //# sourceMappingURL=EpisodesEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/RecommendationsEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RecommendationsEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class RecommendationsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    get(request) {
        const params = this.paramsFor(request);
        return this.getRequest(`recommendations${params}`);
    }
    genreSeeds() {
        return this.getRequest('recommendations/available-genre-seeds');
    }
} //# sourceMappingURL=RecommendationsEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/MarketsEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MarketsEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class MarketsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    getAvailableMarkets() {
        return this.getRequest('markets');
    }
} //# sourceMappingURL=MarketsEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/PlayerEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlayerEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class PlayerEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    getPlaybackState(market, additional_types) {
        const params = this.paramsFor({
            market,
            additional_types
        });
        return this.getRequest(`me/player${params}`);
    }
    getAvailableDevices() {
        return this.getRequest('me/player/devices');
    }
    getCurrentlyPlayingTrack(market, additional_types) {
        const params = this.paramsFor({
            market,
            additional_types
        });
        return this.getRequest(`me/player/currently-playing${params}`);
    }
    getRecentlyPlayedTracks(limit, queryRange) {
        const paramObj = {
            limit
        };
        if (queryRange) {
            if (queryRange.type === "before") {
                paramObj.before = queryRange.timestamp;
            } else if (queryRange.type === "after") {
                paramObj.after = queryRange.timestamp;
            }
        }
        const params = this.paramsFor(paramObj);
        return this.getRequest(`me/player/recently-played${params}`);
    }
    getUsersQueue() {
        return this.getRequest('me/player/queue');
    }
    async transferPlayback(device_ids, play) {
        if (device_ids.length > 1) {
            throw new Error("Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return 400 Bad Request");
        }
        await this.putRequest('me/player', {
            device_ids,
            play
        });
    }
    async startResumePlayback(device_id, context_uri, uris, offset, positionMs) {
        const params = this.paramsFor({
            device_id
        });
        await this.putRequest(`me/player/play${params}`, {
            context_uri,
            uris,
            offset,
            positionMs
        });
    }
    async pausePlayback(device_id) {
        const params = this.paramsFor({
            device_id
        });
        await this.putRequest(`me/player/pause${params}`);
    }
    async skipToNext(device_id) {
        const params = this.paramsFor({
            device_id
        });
        await this.postRequest(`me/player/next${params}`);
    }
    async skipToPrevious(device_id) {
        const params = this.paramsFor({
            device_id
        });
        await this.postRequest(`me/player/previous${params}`);
    }
    async seekToPosition(position_ms, device_id) {
        const params = this.paramsFor({
            position_ms,
            device_id
        });
        await this.putRequest(`me/player/seek${params}`);
    }
    async setRepeatMode(state, device_id) {
        const params = this.paramsFor({
            state,
            device_id
        });
        await this.putRequest(`me/player/repeat${params}`);
    }
    async setPlaybackVolume(volume_percent, device_id) {
        const params = this.paramsFor({
            volume_percent,
            device_id
        });
        await this.putRequest(`me/player/volume${params}`);
    }
    async togglePlaybackShuffle(state, device_id) {
        const params = this.paramsFor({
            state,
            device_id
        });
        await this.putRequest(`me/player/shuffle${params}`);
    }
    async addItemToPlaybackQueue(uri, device_id) {
        const params = this.paramsFor({
            uri,
            device_id
        });
        await this.postRequest(`me/player/queue${params}`);
    }
} //# sourceMappingURL=PlayerEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/PlaylistsEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlaylistsEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class PlaylistsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    getPlaylist(playlist_id, market, fields, additional_types) {
        // TODO: better support for fields
        const params = this.paramsFor({
            market,
            fields,
            additional_types: additional_types?.join(',')
        });
        return this.getRequest(`playlists/${playlist_id}${params}`);
    }
    getPlaylistItems(playlist_id, market, fields, limit, offset, additional_types) {
        // TODO: better support for fields
        const params = this.paramsFor({
            market,
            fields,
            limit,
            offset,
            additional_types: additional_types?.join(',')
        });
        return this.getRequest(`playlists/${playlist_id}/tracks${params}`);
    }
    async changePlaylistDetails(playlist_id, request) {
        await this.putRequest(`playlists/${playlist_id}`, request);
    }
    movePlaylistItems(playlist_id, range_start, range_length, moveToPosition) {
        return this.updatePlaylistItems(playlist_id, {
            range_start,
            range_length,
            insert_before: moveToPosition
        });
    }
    updatePlaylistItems(playlist_id, request) {
        return this.putRequest(`playlists/${playlist_id}/tracks`, request);
    }
    async addItemsToPlaylist(playlist_id, uris, position) {
        await this.postRequest(`playlists/${playlist_id}/tracks`, {
            position,
            uris: uris
        });
    }
    async removeItemsFromPlaylist(playlist_id, request) {
        await this.deleteRequest(`playlists/${playlist_id}/tracks`, request);
    }
    getUsersPlaylists(user_id, limit, offset) {
        const params = this.paramsFor({
            limit,
            offset
        });
        return this.getRequest(`users/${user_id}/playlists${params}`);
    }
    createPlaylist(user_id, request) {
        return this.postRequest(`users/${user_id}/playlists`, request);
    }
    getPlaylistCoverImage(playlist_id) {
        return this.getRequest(`playlists/${playlist_id}/images`);
    }
    async addCustomPlaylistCoverImage(playlist_id, imageData) {
        let base64EncodedJpeg = "";
        if (imageData instanceof Buffer) {
            base64EncodedJpeg = imageData.toString("base64");
        } else if (imageData instanceof HTMLCanvasElement) {
            base64EncodedJpeg = imageData.toDataURL("image/jpeg").split(';base64,')[1];
        } else if (imageData instanceof HTMLImageElement) {
            const canvas = document.createElement("canvas");
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                throw new Error("Could not get canvas context");
            }
            ctx.drawImage(imageData, 0, 0);
            base64EncodedJpeg = canvas.toDataURL("image/jpeg").split(';base64,')[1];
        } else if (typeof imageData === "string") {
            base64EncodedJpeg = imageData;
        } else {
            throw new Error("ImageData must be a Buffer, HTMLImageElement, HTMLCanvasElement, or string containing a base64 encoded jpeg");
        }
        await this.addCustomPlaylistCoverImageFromBase64String(playlist_id, base64EncodedJpeg);
    }
    async addCustomPlaylistCoverImageFromBase64String(playlist_id, base64EncodedJpeg) {
        await this.putRequest(`playlists/${playlist_id}/images`, base64EncodedJpeg, "image/jpeg");
    }
} //# sourceMappingURL=PlaylistsEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/SearchEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SearchEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class SearchEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async execute(q, type, market, limit, offset, include_external) {
        const params = this.paramsFor({
            q,
            type,
            market,
            limit,
            offset,
            include_external
        });
        return await this.getRequest(`search${params}`);
    }
} //# sourceMappingURL=SearchEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/ShowsEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ShowsEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class ShowsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds, market) {
        if (typeof idOrIds === 'string') {
            const params = this.paramsFor({
                market
            });
            return this.getRequest(`shows/${idOrIds}${params}`);
        }
        // TODO: only returns 50, validate here
        const params = this.paramsFor({
            ids: idOrIds,
            market
        });
        const response = await this.getRequest(`shows${params}`);
        return response.shows;
    }
    episodes(id, market, limit, offset) {
        const params = this.paramsFor({
            market,
            limit,
            offset
        });
        return this.getRequest(`shows/${id}/episodes${params}`);
    }
} //# sourceMappingURL=ShowsEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/TracksEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TracksEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class TracksEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    async get(idOrIds, market) {
        if (typeof idOrIds === 'string') {
            const params = this.paramsFor({
                market
            });
            return this.getRequest(`tracks/${idOrIds}${params}`);
        }
        const params = this.paramsFor({
            ids: idOrIds,
            market
        });
        // TODO: only returns top 20, validate here
        const response = await this.getRequest(`tracks${params}`);
        return response.tracks;
    }
    async audioFeatures(idOrIds) {
        if (typeof idOrIds === 'string') {
            return this.getRequest(`audio-features/${idOrIds}`);
        }
        const params = this.paramsFor({
            ids: idOrIds
        });
        const response = await this.getRequest(`audio-features${params}`);
        return response.audio_features;
    }
    audioAnalysis(id) {
        return this.getRequest(`audio-analysis/${id}`);
    }
} //# sourceMappingURL=TracksEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/IAuthStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "emptyAccessToken": (()=>emptyAccessToken),
    "isEmptyAccessToken": (()=>isEmptyAccessToken)
});
const emptyAccessToken = {
    access_token: "emptyAccessToken",
    token_type: "",
    expires_in: 0,
    refresh_token: "",
    expires: -1
};
function isEmptyAccessToken(value) {
    return value === emptyAccessToken;
} //# sourceMappingURL=IAuthStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/UsersEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UsersEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class UsersEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    profile(userId) {
        return this.getRequest(`users/${userId}`);
    }
} //# sourceMappingURL=UsersEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/CurrentUserEndpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CurrentUserEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EndpointsBase.js [app-ssr] (ecmascript)");
;
class CurrentUserEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    albums;
    audiobooks;
    episodes;
    playlists;
    shows;
    tracks;
    constructor(api){
        super(api);
        this.albums = new CurrentUserAlbumsEndpoints(api);
        this.audiobooks = new CurrentUserAudiobooksEndpoints(api);
        this.episodes = new CurrentUserEpisodesEndpoints(api);
        this.playlists = new CurrentUserPlaylistsEndpoints(api);
        this.shows = new CurrentUserShowsEndpoints(api);
        this.tracks = new CurrentUserTracksEndpoints(api);
    }
    profile() {
        return this.getRequest('me');
    }
    topItems(type, time_range, limit, offset) {
        const params = this.paramsFor({
            time_range,
            limit,
            offset
        });
        return this.getRequest(`me/top/${type}${params}`);
    }
    followedArtists(after, limit) {
        const params = this.paramsFor({
            type: "artist",
            after,
            limit
        });
        return this.getRequest(`me/following${params}`);
    }
    async followArtistsOrUsers(ids, type) {
        const params = this.paramsFor({
            type
        });
        await this.putRequest(`me/following${params}`, {
            ids
        });
    }
    async unfollowArtistsOrUsers(ids, type) {
        const params = this.paramsFor({
            type
        });
        await this.deleteRequest(`me/following${params}`, {
            ids
        });
    }
    followsArtistsOrUsers(ids, type) {
        const params = this.paramsFor({
            ids,
            type
        });
        return this.getRequest(`me/following/contains${params}`);
    }
}
class CurrentUserAlbumsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    savedAlbums(limit, offset, market) {
        const params = this.paramsFor({
            limit,
            offset,
            market
        });
        return this.getRequest(`me/albums${params}`);
    }
    async saveAlbums(ids) {
        await this.putRequest('me/albums', ids);
    }
    async removeSavedAlbums(ids) {
        await this.deleteRequest('me/albums', ids);
    }
    hasSavedAlbums(ids) {
        const params = this.paramsFor({
            ids
        });
        return this.getRequest(`me/albums/contains${params}`);
    }
}
class CurrentUserAudiobooksEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    savedAudiobooks(limit, offset) {
        const params = this.paramsFor({
            limit,
            offset
        });
        return this.getRequest(`me/audiobooks${params}`);
    }
    async saveAudiobooks(ids) {
        await this.putRequest('me/audiobooks', ids);
    }
    async removeSavedAudiobooks(ids) {
        await this.deleteRequest('me/audiobooks', ids);
    }
    hasSavedAudiobooks(ids) {
        const params = this.paramsFor({
            ids
        });
        return this.getRequest(`me/audiobooks/contains${params}`);
    }
}
class CurrentUserEpisodesEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    savedEpisodes(market, limit, offset) {
        const params = this.paramsFor({
            market,
            limit,
            offset
        });
        return this.getRequest(`me/episodes${params}`);
    }
    async saveEpisodes(ids) {
        await this.putRequest(`me/episodes`, ids);
    }
    async removeSavedEpisodes(ids) {
        await this.deleteRequest(`me/episodes`, ids);
    }
    hasSavedEpisodes(ids) {
        const params = this.paramsFor({
            ids
        });
        return this.getRequest(`me/episodes/contains${params}`);
    }
}
class CurrentUserPlaylistsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    playlists(limit, offset) {
        const params = this.paramsFor({
            limit,
            offset
        });
        return this.getRequest(`me/playlists${params}`);
    }
    async follow(playlist_id) {
        await this.putRequest(`playlists/${playlist_id}/followers`);
    }
    async unfollow(playlist_id) {
        await this.deleteRequest(`playlists/${playlist_id}/followers`);
    }
    isFollowing(playlistId, ids) {
        const params = this.paramsFor({
            ids
        });
        return this.getRequest(`playlists/${playlistId}/followers/contains${params}`);
    }
}
class CurrentUserShowsEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    savedShows(limit, offset) {
        const params = this.paramsFor({
            limit,
            offset
        });
        return this.getRequest(`me/shows${params}`);
    }
    saveShows(ids) {
        const params = this.paramsFor({
            ids
        });
        return this.putRequest(`me/shows${params}`);
    }
    removeSavedShows(ids, market) {
        const params = this.paramsFor({
            ids,
            market
        });
        return this.deleteRequest(`me/shows${params}`);
    }
    hasSavedShow(ids) {
        const params = this.paramsFor({
            ids
        });
        return this.getRequest(`me/shows/contains${params}`);
    }
}
class CurrentUserTracksEndpoints extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EndpointsBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    savedTracks(limit, offset, market) {
        const params = this.paramsFor({
            limit,
            offset,
            market
        });
        return this.getRequest(`me/tracks${params}`);
    }
    async saveTracks(ids) {
        await this.putRequest('me/tracks', ids);
    }
    async removeSavedTracks(ids) {
        await this.deleteRequest('me/tracks', ids);
    }
    hasSavedTracks(ids) {
        const params = this.paramsFor({
            ids
        });
        return this.getRequest(`me/tracks/contains${params}`);
    }
} //# sourceMappingURL=CurrentUserEndpoints.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/Crypto.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Crypto": (()=>Crypto)
});
class Crypto {
    static get current() {
        return this.hasSubtleCrypto ? window.crypto : this.tryLoadNodeWebCrypto();
    }
    static get hasSubtleCrypto() {
        return typeof window !== 'undefined' && typeof window.crypto !== 'undefined' && typeof window.crypto.subtle !== 'undefined';
    }
    static tryLoadNodeWebCrypto() {
        try {
            // Deliberately avoid bundling for browsers depending
            // on node by doing this require during execution.
            const { webcrypto } = __turbopack_require__("[externals]/crypto [external] (crypto, cjs)");
            return webcrypto;
        } catch (e) {
            throw e;
        }
    }
} //# sourceMappingURL=Crypto.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AccessTokenHelpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AccessTokenHelpers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$Crypto$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/Crypto.js [app-ssr] (ecmascript)");
;
class AccessTokenHelpers {
    static async refreshCachedAccessToken(clientId, item) {
        const updated = await AccessTokenHelpers.refreshToken(clientId, item.refresh_token);
        return AccessTokenHelpers.toCachable(updated);
    }
    static toCachable(item) {
        if (item.expires && item.expires === -1) {
            return item;
        }
        return {
            ...item,
            expires: this.calculateExpiry(item)
        };
    }
    static calculateExpiry(item) {
        return Date.now() + item.expires_in * 1000;
    }
    static async refreshToken(clientId, refreshToken) {
        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "refresh_token");
        params.append("refresh_token", refreshToken);
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params
        });
        const text = await result.text();
        if (!result.ok) {
            throw new Error(`Failed to refresh token: ${result.statusText}, ${text}`);
        }
        const json = JSON.parse(text);
        return json;
    }
    static generateCodeVerifier(length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i = 0; i < length; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    static async generateCodeChallenge(codeVerifier) {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$Crypto$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Crypto"].current.subtle.digest('SHA-256', data);
        const digestBytes = [
            ...new Uint8Array(digest)
        ];
        const hasBuffer = typeof Buffer !== 'undefined';
        const digestAsBase64 = hasBuffer ? Buffer.from(digest).toString('base64') : btoa(String.fromCharCode.apply(null, digestBytes));
        return digestAsBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
} //# sourceMappingURL=AccessTokenHelpers.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ClientCredentialsStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ClientCredentialsStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AccessTokenHelpers.js [app-ssr] (ecmascript)");
;
class ClientCredentialsStrategy {
    clientId;
    clientSecret;
    scopes;
    static cacheKey = "spotify-sdk:ClientCredentialsStrategy:token";
    configuration = null;
    get cache() {
        return this.configuration.cachingStrategy;
    }
    constructor(clientId, clientSecret, scopes = []){
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.scopes = scopes;
    }
    setConfiguration(configuration) {
        this.configuration = configuration;
    }
    async getOrCreateAccessToken() {
        const token = await this.cache.getOrCreate(ClientCredentialsStrategy.cacheKey, async ()=>{
            const token = await this.getTokenFromApi();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toCachable(token);
        }, async (_)=>{
            const refreshed = await this.getTokenFromApi();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toCachable(refreshed);
        });
        return token;
    }
    async getAccessToken() {
        const token = await this.cache.get(ClientCredentialsStrategy.cacheKey);
        return token;
    }
    removeAccessToken() {
        this.cache.remove(ClientCredentialsStrategy.cacheKey);
    }
    async getTokenFromApi() {
        const options = {
            grant_type: 'client_credentials',
            scope: this.scopes.join(' ')
        };
        const bodyAsString = Object.keys(options).map((key)=>key + '=' + options[key]).join('&');
        const hasBuffer = typeof Buffer !== 'undefined';
        const credentials = `${this.clientId}:${this.clientSecret}`;
        const basicAuth = hasBuffer ? Buffer.from(credentials).toString('base64') : btoa(credentials);
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${basicAuth}`
            },
            body: bodyAsString
        });
        if (result.status !== 200) {
            throw new Error("Failed to get access token.");
        }
        const json = await result.json();
        return json;
    }
} //# sourceMappingURL=ClientCredentialsStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ImplicitGrantStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ImplicitGrantStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AccessTokenHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/IAuthStrategy.js [app-ssr] (ecmascript)");
;
;
class ImplicitGrantStrategy {
    clientId;
    redirectUri;
    scopes;
    static cacheKey = "spotify-sdk:ImplicitGrantStrategy:token";
    configuration = null;
    get cache() {
        return this.configuration.cachingStrategy;
    }
    constructor(clientId, redirectUri, scopes){
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.scopes = scopes;
    }
    setConfiguration(configuration) {
        this.configuration = configuration;
    }
    async getOrCreateAccessToken() {
        const token = await this.cache.getOrCreate(ImplicitGrantStrategy.cacheKey, async ()=>{
            const token = await this.redirectOrVerifyToken();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toCachable(token);
        }, async (expiring)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refreshCachedAccessToken(this.clientId, expiring);
        });
        return token;
    }
    async getAccessToken() {
        const token = await this.cache.get(ImplicitGrantStrategy.cacheKey);
        return token;
    }
    removeAccessToken() {
        this.cache.remove(ImplicitGrantStrategy.cacheKey);
    }
    async redirectOrVerifyToken() {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        if (accessToken) {
            return Promise.resolve({
                access_token: accessToken,
                token_type: hashParams.get("token_type") ?? "",
                expires_in: parseInt(hashParams.get("expires_in") ?? "0"),
                refresh_token: hashParams.get("refresh_token") ?? "",
                expires: Number(hashParams.get("expires")) || 0
            });
        }
        const scopes = this.scopes ?? [];
        var scope = scopes.join(' ');
        const params = new URLSearchParams();
        params.append("client_id", this.clientId);
        params.append("response_type", "token");
        params.append("redirect_uri", this.redirectUri);
        params.append("scope", scope);
        const authUrl = 'https://accounts.spotify.com/authorize?' + params.toString();
        this.configuration.redirectionStrategy.redirect(authUrl);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyAccessToken"];
    }
} //# sourceMappingURL=ImplicitGrantStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AuthorizationCodeWithPKCEStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AuthorizationCodeWithPKCEStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AccessTokenHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/IAuthStrategy.js [app-ssr] (ecmascript)");
;
;
class AuthorizationCodeWithPKCEStrategy {
    clientId;
    redirectUri;
    scopes;
    static cacheKey = "spotify-sdk:AuthorizationCodeWithPKCEStrategy:token";
    configuration = null;
    get cache() {
        return this.configuration.cachingStrategy;
    }
    constructor(clientId, redirectUri, scopes){
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.scopes = scopes;
    }
    setConfiguration(configuration) {
        this.configuration = configuration;
    }
    async getOrCreateAccessToken() {
        const token = await this.cache.getOrCreate(AuthorizationCodeWithPKCEStrategy.cacheKey, async ()=>{
            const token = await this.redirectOrVerifyToken();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toCachable(token);
        }, async (expiring)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refreshCachedAccessToken(this.clientId, expiring);
        });
        return token;
    }
    async getAccessToken() {
        const token = await this.cache.get(AuthorizationCodeWithPKCEStrategy.cacheKey);
        return token;
    }
    removeAccessToken() {
        this.cache.remove(AuthorizationCodeWithPKCEStrategy.cacheKey);
    }
    async redirectOrVerifyToken() {
        const hashParams = new URLSearchParams(window.location.search);
        const code = hashParams.get("code");
        if (code) {
            const token = await this.verifyAndExchangeCode(code);
            this.removeCodeFromUrl();
            return token;
        }
        this.redirectToSpotify();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyAccessToken"]; // Redirected away at this point, just make TypeScript happy :)         
    }
    async redirectToSpotify() {
        const verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].generateCodeVerifier(128);
        const challenge = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].generateCodeChallenge(verifier);
        const singleUseVerifier = {
            verifier,
            expiresOnAccess: true
        };
        this.cache.setCacheItem("spotify-sdk:verifier", singleUseVerifier);
        const redirectTarget = await this.generateRedirectUrlForUser(this.scopes, challenge);
        await this.configuration.redirectionStrategy.redirect(redirectTarget);
    }
    async verifyAndExchangeCode(code) {
        const cachedItem = await this.cache.get("spotify-sdk:verifier");
        const verifier = cachedItem?.verifier;
        if (!verifier) {
            throw new Error("No verifier found in cache - can't validate query string callback parameters.");
        }
        await this.configuration.redirectionStrategy.onReturnFromRedirect();
        return await this.exchangeCodeForToken(code, verifier);
    }
    removeCodeFromUrl() {
        const url = new URL(window.location.href);
        url.searchParams.delete("code");
        const newUrl = url.search ? url.href : url.href.replace('?', '');
        window.history.replaceState({}, document.title, newUrl);
    }
    async generateRedirectUrlForUser(scopes, challenge) {
        const scope = scopes.join(' ');
        const params = new URLSearchParams();
        params.append("client_id", this.clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", this.redirectUri);
        params.append("scope", scope);
        params.append("code_challenge_method", "S256");
        params.append("code_challenge", challenge);
        return `https://accounts.spotify.com/authorize?${params.toString()}`;
    }
    async exchangeCodeForToken(code, verifier) {
        const params = new URLSearchParams();
        params.append("client_id", this.clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", this.redirectUri);
        params.append("code_verifier", verifier);
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params
        });
        const text = await result.text();
        if (!result.ok) {
            throw new Error(`Failed to exchange code for token: ${result.statusText}, ${text}`);
        }
        const json = JSON.parse(text);
        return json;
    }
} //# sourceMappingURL=AuthorizationCodeWithPKCEStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/serialization/DefaultResponseDeserializer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DefaultResponseDeserializer)
});
class DefaultResponseDeserializer {
    async deserialize(response) {
        const text = await response.text();
        if (text.length > 0) {
            const json = JSON.parse(text);
            return json;
        }
        return null;
    }
} //# sourceMappingURL=DefaultResponseDeserializer.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/responsevalidation/DefaultResponseValidator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DefaultResponseValidator)
});
class DefaultResponseValidator {
    async validateResponse(response) {
        switch(response.status){
            case 401:
                throw new Error("Bad or expired token. This can happen if the user revoked a token or the access token has expired. You should re-authenticate the user.");
            case 403:
                const body = await response.text();
                throw new Error(`Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here. Body: ${body}`);
            case 429:
                throw new Error("The app has exceeded its rate limits.");
            default:
                if (!response.status.toString().startsWith('20')) {
                    const body = await response.text();
                    throw new Error(`Unrecognised response code: ${response.status} - ${response.statusText}. Body: ${body}`);
                }
        }
    }
} //# sourceMappingURL=DefaultResponseValidator.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/errorhandling/NoOpErrorHandler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>NoOpErrorHandler)
});
class NoOpErrorHandler {
    async handleErrors(_) {
        return false;
    }
} //# sourceMappingURL=NoOpErrorHandler.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/redirection/DocumentLocationRedirectionStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DocumentLocationRedirectionStrategy)
});
class DocumentLocationRedirectionStrategy {
    async redirect(targetUrl) {
        document.location = targetUrl.toString();
    }
    async onReturnFromRedirect() {}
} //# sourceMappingURL=DocumentLocationRedirectionStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/GenericCache.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>GenericCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/IAuthStrategy.js [app-ssr] (ecmascript)");
;
class GenericCache {
    storage;
    updateFunctions;
    autoRenewInterval;
    autoRenewWindow;
    constructor(storage, updateFunctions = new Map(), autoRenewInterval = 0, autoRenewWindow = 2 * 60 * 1000 // Two minutes
    ){
        this.storage = storage;
        this.updateFunctions = updateFunctions;
        this.autoRenewInterval = autoRenewInterval;
        this.autoRenewWindow = autoRenewWindow;
        if (this.autoRenewInterval > 0) {
            setInterval(()=>this.autoRenewRenewableItems(), this.autoRenewInterval);
        }
    }
    async getOrCreate(cacheKey, createFunction, updateFunction) {
        if (updateFunction) {
            this.updateFunctions.set(cacheKey, updateFunction);
        }
        const item = await this.get(cacheKey);
        if (item) {
            return item;
        }
        const newCacheItem = await createFunction();
        if (!newCacheItem) {
            throw new Error("Could not create cache item");
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyAccessToken"])(newCacheItem)) {
            this.setCacheItem(cacheKey, newCacheItem);
        }
        return newCacheItem;
    }
    async get(cacheKey) {
        let asString = this.storage.get(cacheKey);
        let cachedItem = asString ? JSON.parse(asString) : null;
        if (this.itemDueToExpire(cachedItem) && this.updateFunctions.has(cacheKey)) {
            const updateFunction = this.updateFunctions.get(cacheKey);
            await this.tryUpdateItem(cacheKey, cachedItem, updateFunction);
            // Ensure updated item is returned
            asString = this.storage.get(cacheKey);
            cachedItem = asString ? JSON.parse(asString) : null;
        }
        if (!cachedItem) {
            return null;
        }
        if (cachedItem.expires && (cachedItem.expires === -1 || cachedItem.expires <= Date.now())) {
            this.remove(cacheKey);
            return null;
        }
        if (cachedItem.expiresOnAccess && cachedItem.expiresOnAccess === true) {
            this.remove(cacheKey);
            return cachedItem;
        }
        return cachedItem;
    }
    set(cacheKey, value, expiresIn) {
        const expires = Date.now() + expiresIn;
        const cacheItem = {
            ...value,
            expires
        };
        this.setCacheItem(cacheKey, cacheItem);
    }
    setCacheItem(cacheKey, cacheItem) {
        const asString = JSON.stringify(cacheItem);
        this.storage.set(cacheKey, asString);
    }
    remove(cacheKey) {
        this.storage.remove(cacheKey);
    }
    itemDueToExpire(item) {
        if (!item) {
            return false;
        }
        if (!item.expires) {
            return false;
        }
        return item.expires - Date.now() < this.autoRenewWindow;
    }
    async autoRenewRenewableItems() {
        this.updateFunctions.forEach(async (updateFunction, key)=>{
            const cachedItem = await this.get(key);
            if (!cachedItem) {
                return;
            }
            if (updateFunction && this.itemDueToExpire(cachedItem)) {
                await this.tryUpdateItem(key, cachedItem, updateFunction);
            }
        });
    }
    async tryUpdateItem(key, cachedItem, updateFunction) {
        try {
            const updated = await updateFunction(cachedItem);
            if (updated) {
                this.setCacheItem(key, updated);
            }
        } catch (e) {
            console.error(e);
        }
    }
} //# sourceMappingURL=GenericCache.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/LocalStorageCachingStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LocalStorageCachingStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$GenericCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/GenericCache.js [app-ssr] (ecmascript)");
;
class LocalStorageCachingStrategy extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$GenericCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super(new LocalStorageCacheStore());
    }
}
class LocalStorageCacheStore {
    get(key) {
        return localStorage.getItem(key);
    }
    set(key, value) {
        localStorage.setItem(key, value);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
} //# sourceMappingURL=LocalStorageCachingStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/InMemoryCachingStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>InMemoryCachingStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$GenericCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/GenericCache.js [app-ssr] (ecmascript)");
;
class InMemoryCachingStrategy extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$GenericCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super(new DictionaryCacheStore());
    }
}
class DictionaryCacheStore {
    cache = new Map();
    get(key) {
        return this.cache.get(key) ?? null;
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    remove(key) {
        this.cache.delete(key);
    }
} //# sourceMappingURL=InMemoryCachingStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ProvidedAccessTokenStrategy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProvidedAccessTokenStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AccessTokenHelpers.js [app-ssr] (ecmascript)");
;
class ProvidedAccessTokenStrategy {
    clientId;
    accessToken;
    refreshTokenAction;
    constructor(clientId, accessToken, refreshTokenAction){
        this.clientId = clientId;
        this.accessToken = accessToken;
        this.refreshTokenAction = refreshTokenAction || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refreshCachedAccessToken;
        // If the raw token from the jwt response is provided here
        // Calculate an absolute `expiry` value.
        // Caveat: If this token isn't fresh, this value will be off.
        // It's the responsibility of the calling code to either set a valid
        // expires property, or ensure expires_in accounts for any lag between
        // issuing and passing here.
        if (!this.accessToken.expires) {
            this.accessToken.expires = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AccessTokenHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].calculateExpiry(this.accessToken);
        }
    }
    setConfiguration(_) {}
    async getOrCreateAccessToken() {
        if (this.accessToken.expires && this.accessToken.expires <= Date.now()) {
            const refreshed = await this.refreshTokenAction(this.clientId, this.accessToken);
            this.accessToken = refreshed;
        }
        return this.accessToken;
    }
    async getAccessToken() {
        return this.accessToken;
    }
    removeAccessToken() {
        this.accessToken = {
            access_token: "",
            token_type: "",
            expires_in: 0,
            refresh_token: "",
            expires: 0
        };
    }
} //# sourceMappingURL=ProvidedAccessTokenStrategy.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/SpotifyApi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SpotifyApi": (()=>SpotifyApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$AlbumsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/AlbumsEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$ArtistsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/ArtistsEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$AudiobooksEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/AudiobooksEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$BrowseEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/BrowseEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$ChaptersEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/ChaptersEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EpisodesEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/EpisodesEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$RecommendationsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/RecommendationsEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$MarketsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/MarketsEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$PlayerEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/PlayerEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$PlaylistsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/PlaylistsEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$SearchEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/SearchEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$ShowsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/ShowsEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$TracksEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/TracksEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/IAuthStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$UsersEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/UsersEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$CurrentUserEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/endpoints/CurrentUserEndpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ClientCredentialsStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ClientCredentialsStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ImplicitGrantStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ImplicitGrantStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AuthorizationCodeWithPKCEStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AuthorizationCodeWithPKCEStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$serialization$2f$DefaultResponseDeserializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/serialization/DefaultResponseDeserializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$responsevalidation$2f$DefaultResponseValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/responsevalidation/DefaultResponseValidator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$errorhandling$2f$NoOpErrorHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/errorhandling/NoOpErrorHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$redirection$2f$DocumentLocationRedirectionStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/redirection/DocumentLocationRedirectionStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$LocalStorageCachingStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/LocalStorageCachingStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$InMemoryCachingStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/InMemoryCachingStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ProvidedAccessTokenStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ProvidedAccessTokenStrategy.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class SpotifyApi {
    sdkConfig;
    static rootUrl = "https://api.spotify.com/v1/";
    authenticationStrategy;
    albums;
    artists;
    audiobooks;
    browse;
    chapters;
    episodes;
    recommendations;
    markets;
    player;
    playlists;
    shows;
    tracks;
    users;
    search;
    currentUser;
    constructor(authentication, config){
        this.sdkConfig = this.initializeSdk(config);
        this.albums = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$AlbumsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.artists = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$ArtistsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.audiobooks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$AudiobooksEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.browse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$BrowseEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.chapters = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$ChaptersEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.episodes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$EpisodesEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.recommendations = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$RecommendationsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.markets = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$MarketsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.player = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$PlayerEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.playlists = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$PlaylistsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.shows = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$ShowsEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$TracksEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.users = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$UsersEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.currentUser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$CurrentUserEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        const search = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$endpoints$2f$SearchEndpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this);
        this.search = search.execute.bind(search);
        this.authenticationStrategy = authentication;
        this.authenticationStrategy.setConfiguration(this.sdkConfig);
    }
    async makeRequest(method, url, body = undefined, contentType = undefined) {
        try {
            const accessToken = await this.authenticationStrategy.getOrCreateAccessToken();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyAccessToken"])(accessToken)) {
                console.warn("No access token found, authenticating now.");
                return null;
            }
            const token = accessToken?.access_token;
            const fullUrl = SpotifyApi.rootUrl + url;
            const opts = {
                method: method,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": contentType ?? "application/json"
                },
                body: body ? typeof body === "string" ? body : JSON.stringify(body) : undefined
            };
            this.sdkConfig.beforeRequest(fullUrl, opts);
            const result = await this.sdkConfig.fetch(fullUrl, opts);
            this.sdkConfig.afterRequest(fullUrl, opts, result);
            if (result.status === 204) {
                return null;
            }
            await this.sdkConfig.responseValidator.validateResponse(result);
            return this.sdkConfig.deserializer.deserialize(result);
        } catch (error) {
            const handled = await this.sdkConfig.errorHandler.handleErrors(error);
            if (!handled) {
                throw error;
            }
            return null;
        }
    }
    initializeSdk(config) {
        const isBrowser = typeof window !== 'undefined';
        const defaultConfig = {
            fetch: (req, init)=>fetch(req, init),
            beforeRequest: (_, __)=>{},
            afterRequest: (_, __, ___)=>{},
            deserializer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$serialization$2f$DefaultResponseDeserializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](),
            responseValidator: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$responsevalidation$2f$DefaultResponseValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](),
            errorHandler: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$errorhandling$2f$NoOpErrorHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](),
            redirectionStrategy: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$redirection$2f$DocumentLocationRedirectionStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](),
            cachingStrategy: isBrowser ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$LocalStorageCachingStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$InMemoryCachingStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]()
        };
        return {
            ...defaultConfig,
            ...config
        };
    }
    switchAuthenticationStrategy(authentication) {
        this.authenticationStrategy = authentication;
        this.authenticationStrategy.setConfiguration(this.sdkConfig);
        this.authenticationStrategy.getOrCreateAccessToken(); // trigger any redirects 
    }
    /**
     * Use this when you're running in a browser and you want to control when first authentication+redirect happens.
    */ async authenticate() {
        const response = await this.authenticationStrategy.getOrCreateAccessToken(); // trigger any redirects
        return {
            authenticated: response.expires > Date.now() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyAccessToken"])(response),
            accessToken: response
        };
    }
    /**
     * @returns the current access token. null implies the SpotifyApi is not yet authenticated.
     */ async getAccessToken() {
        return this.authenticationStrategy.getAccessToken();
    }
    /**
     * Removes the access token if it exists.
     */ logOut() {
        this.authenticationStrategy.removeAccessToken();
    }
    static withUserAuthorization(clientId, redirectUri, scopes = [], config) {
        const strategy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AuthorizationCodeWithPKCEStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](clientId, redirectUri, scopes);
        return new SpotifyApi(strategy, config);
    }
    static withClientCredentials(clientId, clientSecret, scopes = [], config) {
        const strategy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ClientCredentialsStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](clientId, clientSecret, scopes);
        return new SpotifyApi(strategy, config);
    }
    static withImplicitGrant(clientId, redirectUri, scopes = [], config) {
        const strategy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ImplicitGrantStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](clientId, redirectUri, scopes);
        return new SpotifyApi(strategy, config);
    }
    /**
     * Use this when you're running in a Node environment, and accepting the access token from a client-side `performUserAuthorization` call.
     * You can also use this method if you already have an access token and don't want to use the built-in authentication strategies.
     */ static withAccessToken(clientId, token, config) {
        const strategy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ProvidedAccessTokenStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](clientId, token);
        return new SpotifyApi(strategy, config);
    }
    static async performUserAuthorization(clientId, redirectUri, scopes, onAuthorizationOrUrl, config) {
        const strategy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AuthorizationCodeWithPKCEStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](clientId, redirectUri, scopes);
        const client = new SpotifyApi(strategy, config);
        const accessToken = await client.authenticationStrategy.getOrCreateAccessToken();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyAccessToken"])(accessToken)) {
            if (typeof onAuthorizationOrUrl === "string") {
                console.log("Posting access token to postback URL.");
                await fetch(onAuthorizationOrUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(accessToken)
                });
            } else {
                await onAuthorizationOrUrl(accessToken);
            }
        }
        return {
            authenticated: accessToken.expires > Date.now() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyAccessToken"])(accessToken),
            accessToken
        };
    }
} //# sourceMappingURL=SpotifyApi.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/errorhandling/ConsoleLoggingErrorHandler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConsoleLoggingErrorHandler)
});
class ConsoleLoggingErrorHandler {
    async handleErrors(error) {
        console.log(error);
        return false;
    }
} //# sourceMappingURL=ConsoleLoggingErrorHandler.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/Scopes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Scopes": (()=>Scopes)
});
class Scopes {
    static get playlist() {
        return [
            ...Scopes.playlistRead,
            ...Scopes.playlistModify
        ];
    }
    static get playlistRead() {
        return [
            "playlist-read-private",
            "playlist-read-collaborative"
        ];
    }
    static get playlistModify() {
        return [
            "playlist-modify-public",
            "playlist-modify-private",
            "ugc-image-upload"
        ];
    }
    static get userDetails() {
        return [
            "user-read-private",
            "user-read-email"
        ];
    }
    static get userLibrary() {
        return [
            ...Scopes.userLibraryRead,
            ...Scopes.userLibraryModify
        ];
    }
    static get userLibraryRead() {
        return [
            "user-library-read"
        ];
    }
    static get userLibraryModify() {
        return [
            "user-library-modify"
        ];
    }
    static get userRecents() {
        return [
            "user-top-read",
            "user-read-recently-played"
        ];
    }
    static get userFollow() {
        return [
            ...Scopes.userFollowRead,
            ...Scopes.userFollowModify
        ];
    }
    static get userFollowRead() {
        return [
            "user-follow-read"
        ];
    }
    static get userFollowModify() {
        return [
            "user-follow-modify"
        ];
    }
    static get userPlayback() {
        return [
            ...Scopes.userPlaybackRead,
            ...Scopes.userPlaybackModify
        ];
    }
    static get userPlaybackRead() {
        return [
            "user-read-playback-position",
            "user-read-playback-state",
            "user-read-currently-playing"
        ];
    }
    static get userPlaybackModify() {
        return [
            "user-modify-playback-state",
            "app-remote-control",
            "streaming"
        ];
    }
    static get all() {
        return [
            ...Scopes.userDetails,
            ...Scopes.playlist,
            ...Scopes.userLibrary,
            ...Scopes.userRecents,
            ...Scopes.userFollow,
            ...Scopes.userPlayback
        ];
    }
} //# sourceMappingURL=Scopes.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$SpotifyApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/SpotifyApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$AuthorizationCodeWithPKCEStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/AuthorizationCodeWithPKCEStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$ClientCredentialsStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/ClientCredentialsStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$InMemoryCachingStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/InMemoryCachingStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$LocalStorageCachingStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/LocalStorageCachingStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$caching$2f$GenericCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/caching/GenericCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$errorhandling$2f$ConsoleLoggingErrorHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/errorhandling/ConsoleLoggingErrorHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$errorhandling$2f$NoOpErrorHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/errorhandling/NoOpErrorHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$redirection$2f$DocumentLocationRedirectionStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/redirection/DocumentLocationRedirectionStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$responsevalidation$2f$DefaultResponseValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/responsevalidation/DefaultResponseValidator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$serialization$2f$DefaultResponseDeserializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/serialization/DefaultResponseDeserializer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$Scopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/Scopes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$auth$2f$IAuthStrategy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/auth/IAuthStrategy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$spotify$2b$web$2d$api$2d$ts$2d$sdk$40$1$2e$2$2e$0$2f$node_modules$2f40$spotify$2f$web$2d$api$2d$ts$2d$sdk$2f$dist$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@spotify+web-api-ts-sdk@1.2.0/node_modules/@spotify/web-api-ts-sdk/dist/mjs/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0f9257._.js.map