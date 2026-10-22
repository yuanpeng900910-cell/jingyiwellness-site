# 官网发布状态

2026-10-22，用户要求“先把官网隐藏起来，不可访问”。正式站及临时站均已暂停访问。此状态替代 2026-10-14 的正式站公开、临时站供核价的状态。

- 临时网址：https://preview.jingyiwellness.online/
- 正式网址：https://jingyiwellness.online/
- `wrangler.jsonc` 中 `PUBLIC_SITE_ENABLED` 和 `PREVIEW_SITE_ENABLED` 当前均为字符串 `"false"`。
- 正式站及临时站的首页、全部子页面、图片、脚本、站点地图均返回 HTTP 404；响应禁止缓存和搜索收录。
- 网站源代码、产品资料与图片保留，没有删除网站或域名。
- `ProductPrice.tsx` 仅在 `preview.jingyiwellness.online` 展示价格供项目组核定；静态 HTML 默认不渲染价格，正式网址加载和交互过程都不显示价格。
- `assets.run_worker_first` 必须保持 `true`，确保正式域名上的现有页面和静态资源也经过发布状态检查。
- 临时站恢复访问时仍返回 `X-Robots-Tag: noindex, nofollow`，`robots.txt` 禁止抓取。
- `workers_dev` 和 `preview_urls` 均为 `false`，停用包含个人信息的旧临时地址。
- 未经用户明确恢复指令，不开启正式站或临时站。

用户明确要求恢复时，按其指定范围开启 `PUBLIC_SITE_ENABLED` 或 `PREVIEW_SITE_ENABLED` 后部署并验证。恢复访问不等于公开价格：正式站仍应隐藏价格，临时站恢复后可供项目组核价；收到用户明确的公开价格指令后，再调整 `ProductPrice.tsx` 的价格可见策略。
