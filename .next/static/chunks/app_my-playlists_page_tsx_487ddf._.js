(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_my-playlists_page_tsx_487ddf._.js", {

"[project]/app/my-playlists/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MyPlaylists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$spotify$2d$web$2d$api$2d$node$40$5$2e$0$2e$2$2f$node_modules$2f$spotify$2d$web$2d$api$2d$node$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/spotify-web-api-node@5.0.2/node_modules/spotify-web-api-node/src/client.js [app-client] (ecmascript)");
'use client';
;
;
const extractCodeFromUrl = (url)=>{
    const params = new URLSearchParams(url.split('?')[1]);
    return params.get('code');
};
function MyPlaylists({ searchParams }) {
    const spotifyApi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$spotify$2d$web$2d$api$2d$node$40$5$2e$0$2e$2$2f$node_modules$2f$spotify$2d$web$2d$api$2d$node$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        clientId: '0916ebedc8fe494699b4252738eb2444',
        // clientSecret: 'bf470b8b094245afb8799dcfa33f2645',
        redirectUri: 'http://localhost:3000/my-playlists'
    });
    // const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, 'state');
    // console.log('🚀 ~ MyPlaylists ~ authorizeUrl:', authorizeUrl);
    console.log(await searchParams);
    const code = extractCodeFromUrl(pathname);
    console.log('🚀 ~ MyPlaylists ~ code:', code);
    if (!code) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "No code found"
        }, void 0, false, {
            fileName: "[project]/app/my-playlists/page.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
    }
    // const token = spotifyApi.authorizationCodeGrant(code);
    // console.log('🚀 ~ MyPlaylists ~ token:', token);
    // const token = await spotifyApi.clientCredentialsGrant();
    // console.log('🚀 ~ MyPlaylists ~ token:', token);
    // const user = await spotifyApi.getUser();
    // const data = await spotifyApi.getUserPlaylists({});
    // console.log(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "My Playlists: ",
            code
        ]
    }, void 0, true, {
        fileName: "[project]/app/my-playlists/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_c = MyPlaylists;
var _c;
__turbopack_refresh__.register(_c, "MyPlaylists");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/my-playlists/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_my-playlists_page_tsx_487ddf._.js.map