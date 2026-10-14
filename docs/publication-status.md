# 官网发布状态

2026-10-14，用户明确要求恢复正式网址的官网，同时隐藏全部价格。此要求替代 2026-10-08 的主网址 404 状态。

- 临时网址：https://preview.jingyiwellness.online/
- 正式网址：https://jingyiwellness.online/
- `wrangler.jsonc` 中 `PUBLIC_SITE_ENABLED` 当前为字符串 `"true"`。
- 正式网址恢复首页、产品列表、商品详情弹窗、品牌与合作页面；不显示原价、线上折扣价、折数、合香珠售价或待定价格提示。
- 保留商品名称、图片、规格、配料和咨询入口。
- `ProductPrice.tsx` 仅在 `preview.jingyiwellness.online` 展示价格供项目组核定；静态 HTML 默认不渲染价格，正式网址加载和交互过程都不显示价格。
- `assets.run_worker_first` 必须保持 `true`，确保正式域名上的现有页面和静态资源也经过发布状态检查。
- 临时网址返回 `X-Robots-Tag: noindex, nofollow`，`robots.txt` 禁止抓取。
- `workers_dev` 和 `preview_urls` 均为 `false`，停用包含个人信息的旧临时地址。
- 正式域名恢复公开访问与原有搜索收录配置。

后续价格更新仍可在临时站核验。收到用户明确的公开价格指令后，再调整 `ProductPrice.tsx` 的价格可见策略并构建、部署，核验首页、全部分类及详情弹窗。
