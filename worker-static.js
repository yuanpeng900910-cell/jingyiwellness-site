const previewHostname = "preview.jingyiwellness.online";
const officialHostnames = new Set(["jingyiwellness.online", "www.jingyiwellness.online"]);

function notFound(request) {
  return new Response(request.method === "HEAD" ? null : `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>404 · 页面未找到</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fff;color:#111;font-family:Arial,"Microsoft YaHei",sans-serif;text-align:center}h1{font-size:64px;margin:0 0 16px}p{color:#666;font-size:16px;margin:0}</style></head><body><main><h1>404</h1><p>页面未找到</p></main></body></html>`, {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isPreview = url.hostname === previewHostname;
    const isPublished = officialHostnames.has(url.hostname) && env.PUBLIC_SITE_ENABLED === "true";

    if (!isPreview && !isPublished) return notFound(request);

    if (isPreview && url.pathname === "/robots.txt") {
      return new Response(request.method === "HEAD" ? null : "User-agent: *\nDisallow: /\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" },
      });
    }
    if (isPreview && url.pathname === "/sitemap.xml") return notFound(request);

    const response = await env.ASSETS.fetch(request);
    if (isPublished) return response;

    const previewResponse = new Response(response.body, response);
    previewResponse.headers.set("X-Robots-Tag", "noindex, nofollow");
    return previewResponse;
  },
};

export default worker;
