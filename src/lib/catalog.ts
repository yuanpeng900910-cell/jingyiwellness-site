import records from "./products.json";

export type CatalogItem = { name: string; image?: string; note?: string; productId?: string; detailImages?: string[] };
export type CatalogSection = { title: string; items: CatalogItem[] };
export type CatalogCategory = { slug: string; title: string; eyebrow: string; intro: string; sections: CatalogSection[] };

const existing = (id: string, name?: string): CatalogItem => {
  const product = records.find((item) => item.id === id);
  if (!product) throw new Error(`Missing catalog product: ${id}`);
  return { name: name ?? product.name, image: product.cardImage, productId: id };
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "herbal-tea", title: "草本茶饮", eyebrow: "HERBAL TEA",
    intro: "从轻养小罐茶、辨体调养茶，到熟悉的国民经典饮品与御养茶礼。",
    sections: [
      { title: "轻养小罐茶", items: [
        { name: "元气茶", image: "/images/box-only/yuanqi.webp" },
        existing("qingshi"), existing("hongyan"),
        { name: "熬夜茶", image: "/images/box-only/aoye.webp" },
      ] },
      { title: "辨体调养茶", items: [
        existing("apple"), existing("gancao"), existing("baihe"), existing("shenqi"), existing("fuling"),
        existing("yiren"), existing("danggui"), existing("rose"), existing("huangqi"),
      ] },
      { title: "国民经典饮品", items: [
        { name: "姜枣茶", image: "/images/catalog/drink-ginger-jujube.jpg" },
        { name: "秋梨汤", image: "/images/catalog/drink-pear.jpg" },
        { name: "五红饮", image: "/images/catalog/drink-five-red.jpg" },
        { name: "酸梅汤", image: "/images/catalog/drink-sour-plum.webp" },
      ] },
      { title: "御养茶礼", items: [existing("gift", "参石御养"), existing("shenzhi", "参芝润颜")] },
    ],
  },
  { slug: "food-formulas", title: "药食养方", eyebrow: "FOOD & HERBS",
    intro: "以药食同源理念延伸日常轻养选择。",
    sections: [{ title: "药食养方", items: [{ name: "即食九制黄精" }, { name: "六物山楂丸" }] }],
  },
  { slug: "herbal-living", title: "草本生活", eyebrow: "HERBAL LIVING",
    intro: "把草本的气息与日常照料带进居家生活。",
    sections: [{ title: "草本生活", items: [
      existing("pillow"), existing("comb"),
      { name: "七子白洁面皂", image: "/images/catalog/soap-qizibai.webp" },
      { name: "侧柏叶养发皂", image: "/images/catalog/soap-cebaiye.webp" },
      { name: "温胆汤足浴液", image: "/images/catalog/footbath-wendan-head-v2.webp" },
      { name: "桃红四物汤足浴液", image: "/images/catalog/footbath-taohong-head-v2.webp" },
      { name: "顺时而养·二十四节气养生历", image: "/images/catalog/calendar-lifestyle.webp", detailImages: ["/images/catalog/calendar-spread.webp", "/images/catalog/calendar-solar-term-screen.webp", "/images/catalog/calendar-recipe-screen.webp"] },
    ] }],
  },
  { slug: "incense-beads", title: "合香珠系列", eyebrow: "INCENSE BEADS",
    intro: "以合香珠承载草本气息，探索配饰手串与纯药香珠手串的不同呈现。",
    sections: [
      { title: "配饰手串", items: [
        { name: "玫香纳福", image: "/images/catalog/incense-beads/rose-fortune.webp" },
        { name: "鹅梨帐中香·养气梨香玉", image: "/images/catalog/incense-beads/pear-jade.webp" },
        { name: "鹅梨帐中香·梨香绕玉", image: "/images/catalog/incense-beads/pear-jade-double.webp", note: "双圈" },
        { name: "鹅梨帐中香·青山怀玉", image: "/images/catalog/incense-beads/pear-green-jade.webp" },
        { name: "紫气东来·瑞紫流金", image: "/images/catalog/incense-beads/purple-gold.webp" },
        { name: "紫气东来·云上霜", image: "/images/catalog/incense-beads/purple-frost-double.webp", note: "双圈" },
        { name: "玲珑多宝", image: "/images/catalog/incense-beads/linglong-treasures.webp" },
        { name: "木香息肌·女款", image: "/images/catalog/incense-beads/wood-fragrance-women.webp" },
        { name: "木香息肌·男款", image: "/images/catalog/incense-beads/wood-fragrance-men.webp" },
        { name: "云泽金曜", image: "/images/catalog/incense-beads/yunze-gold.webp" },
        { name: "五行手串", image: "/images/catalog/incense-beads/five-elements.webp" },
      ] },
      { title: "纯药香珠手串", items: [
        { name: "鹅梨帐中香·纯药香珠", image: "/images/catalog/incense-beads/pear-pure.webp" },
        { name: "玫香纳福·纯药香珠", image: "/images/catalog/incense-beads/rose-pure.webp" },
        { name: "息肌丸·纯药香珠", image: "/images/catalog/incense-beads/xiji-pure.webp" },
        { name: "紫气东来·纯药香珠", image: "/images/catalog/incense-beads/purple-pure.webp" },
        { name: "栀子花香·纯药香珠", image: "/images/catalog/incense-beads/gardenia-pure.webp" },
      ] },
    ],
  },
];

export const catalogTotal = catalogCategories.reduce((sum, category) => sum + category.sections.reduce((count, section) => count + section.items.length, 0), 0);
