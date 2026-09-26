export const siteNavigation = [
  { label: "产品", href: "/products", children: [
    { label: "草本茶饮", href: "/products/herbal-tea" },
    { label: "药食养方", href: "/products/food-formulas" },
    { label: "草本生活", href: "/products/herbal-living" },
    { label: "合香珠系列", href: "/products/incense-beads" },
  ] },
  { label: "东方养生礼", href: "/gifts", children: [
    { label: "节气定制礼", href: "/gifts#seasonal" },
    { label: "员工关爱礼", href: "/gifts#employee" },
    { label: "宋朝香氛联名款", href: "/gifts#collaboration" },
  ] },
  { label: "品牌故事", href: "/brand-story" },
  { label: "团体合作", href: "/cooperation", children: [
    { label: "员工健康共建", href: "/cooperation#employee" },
    { label: "企业健康活动", href: "/cooperation#corporate" },
    { label: "社区健康服务", href: "/cooperation#community" },
  ] },
] as const;
