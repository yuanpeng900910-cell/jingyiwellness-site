# 官网发布状态

2026-10-08，用户要求项目组核定价格前，仅通过临时网址展示官网，主网址返回 404。

- 临时网址：https://jingyiwellness-site.yuanpeng900910.workers.dev/
- 正式网址：https://jingyiwellness.online/
- `wrangler.jsonc` 中 `PUBLIC_SITE_ENABLED` 当前为字符串 `"false"`。
- `assets.run_worker_first` 必须保持 `true`，确保正式域名上的现有页面和静态资源也经过发布状态检查。
- 临时网址返回 `X-Robots-Tag: noindex, nofollow`，`robots.txt` 禁止抓取。
- 正式域名及 `www` 域名下所有请求返回 HTTP 404，不自动跳转临时站。

后续内容和价格更新继续部署到临时站。收到用户明确的正式发布指令后，将 `PUBLIC_SITE_ENABLED` 改为 `"true"` 并部署，再验证主网址、价格及搜索收录配置。
