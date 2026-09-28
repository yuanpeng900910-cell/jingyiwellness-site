# 京颐养方新版官网

以 [OSULLOC 开源模板](https://github.com/JCodesMore/ai-website-cloner-template)为主，沿用其字体、白黑配色与橄榄绿点缀、首页模块和手机／电脑布局，替换为京颐养方真实品牌内容与产品素材。模板、旧官网项目和品牌资产库仍独立保留。

## 本地预览

需要 Node.js 24 或更新版本。

```sh
npm ci
npm run dev
```

打开 http://localhost:3100 。运行 `npm run check` 执行代码检查与生产构建。

## 网站内容

- 全宽三主题轮播，桌面左侧悬浮文案、手机上图下文。
- 模板式固定导航、手机菜单、产品分类与搜索。
- 首页精选、四类产品目录、东方养生礼、品牌故事与团体合作页面。
- 每款目录商品都有可点击的产品卡片；已核实的商品展示详情，待补资料的商品使用品牌形象占位图。
- 产品介绍和电话／微信咨询入口。

官网展示已确认的售价、线上折扣价与规格；未定价商品显示“待上线”。苹果黄芪茶保留前往有赞购买入口，官网不直接处理结算。页面暂设为禁止搜索引擎索引，正式上线前需按上线目标调整。

## 内容与维护

- `src/lib/products.json`：产品资料。
- `src/lib/product-commerce.json`：已确认价格、计价单位与可选规格。
- `src/components/JingyiTemplateHome.tsx`：模板主导的首页结构与交互。
- `src/app/globals.css`：模板原 CSS 与末尾少量京颐内容适配。
- `PRODUCT.md`：品牌事实与项目边界。
- `DESIGN.md`：当前视觉与响应式约定。
- `docs/asset-sources.json`：图片来源。
- `docs/hero-imagegen.md`：Hero 横幅的 ImageGen 参考、提示词与输出文件。
- `scripts/prepare-assets.mjs`：根据本机原始素材重新生成网页图片。

模板代码原许可保留于 `LICENSE`。品牌与产品图片仍按其原有权利归属使用。按用户要求，后续不使用 `frontend-design` 技能。
