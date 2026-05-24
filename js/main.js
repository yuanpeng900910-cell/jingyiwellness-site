// 产品图片按照“产品系列文件夹 / 产品拼音.jpg”的规则存放，后续替换图片时，只需保持文件名和路径一致即可。

const products = [
  { category: "药食养方系列", series: "辨体调养茶系列", name: "苹果黄芪茶", target: "平和体质 / 日常轻养人群", spec: "15g/罐", formula: "黄芪1.5g、苹果干4g、玉竹0.5g、红枣2g、枸杞0.5g、荷叶1g、罗汉果2g、山楂3g、菊花0.5g", intro: "按体质推荐的日常轻养代茶饮，适合平和体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/pingguo-huangqi-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "甘草干姜茶", target: "阳虚体质 / 日常轻养人群", spec: "15g/罐", formula: "生姜2g、炙甘草2g、大枣3g、砂仁0.5g、红茶1g、白扁豆3g、橘皮1.5g、炒薏米1g、万寿菊1g", intro: "按体质推荐的日常轻养代茶饮，适合阳虚体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/gancao-ganjiang-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "百合玉竹茶", target: "阴虚体质 / 日常轻养人群", spec: "15g/罐", formula: "百合1g、玉竹1g、菊花0.5g、葛根2.3g、罗汉果3g、栀子1g、百香果3g、生地黄3g、金银花0.2g", intro: "按体质推荐的日常轻养代茶饮，适合阴虚体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/baihe-yuzhu-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "参芪大枣茶", target: "气虚体质 / 日常轻养人群", spec: "15g/罐", formula: "人参0.5g、黄芪2g、大枣2.2g、炙甘草2g、山药1g、无花果3g、炒麦芽2g、黄精2g、茉莉花0.3g", intro: "按体质推荐的日常轻养代茶饮，适合气虚体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/shenqi-dazao-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "茯苓陈皮茶", target: "痰湿体质 / 日常轻养人群", spec: "15g/罐", formula: "茯苓3g、橘皮2.5g、荷叶0.5g、罗汉果3g、香橼1g、薄荷0.5g、炒薏米2g、山楂2g、洛神花0.5g", intro: "按体质推荐的日常轻养代茶饮，适合痰湿体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/fuling-chenpi-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "薏仁荷叶茶", target: "湿热体质 / 日常轻养人群", spec: "15g/罐", formula: "炒薏仁4g、荷叶1g、山楂2g、枸杞0.5g、金桔2g、罗汉果2g、炙甘草1.5g、生地黄1.5g、菊花0.5g", intro: "按体质推荐的日常轻养代茶饮，适合湿热体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/yiren-heye-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "当归玫瑰茶", target: "血瘀体质 / 日常轻养人群", spec: "15g/罐", formula: "当归0.5g、玫瑰花0.5g、沙棘2g、大枣2g、黄芪2g、熟地黄3g、桃仁2g、山楂2g、桑葚1g", intro: "按体质推荐的日常轻养代茶饮，适合血瘀体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/danggui-meigui-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "玫瑰佛手茶", target: "气郁体质 / 日常轻养人群", spec: "15g/罐", formula: "玫瑰花0.5g、佛手2g、炒麦芽3g、薄荷1g、无花果2g、乌梅2g、罗汉果2g、香橼1g、决明子1.5g", intro: "按体质推荐的日常轻养代茶饮，适合气郁体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/meigui-foshou-cha.jpg" },
  { category: "药食养方系列", series: "辨体调养茶系列", name: "黄芪紫苏茶", target: "特禀体质 / 过敏体质 / 日常轻养人群", spec: "15g/罐", formula: "黄芪1.5g、炙甘草3g、紫苏叶0.5g、金银花0.2g、山药1g、白扁豆2g、熟地黄2.8g、大枣2g、山楂2g", intro: "按体质推荐的日常轻养代茶饮，适合特禀体质与过敏体质人群日常饮用。", price: null, priceText: "", showPrice: false, image: "images/jiuzhong-tizhi-cha/huangqi-zisu-cha.jpg" },
  { category: "药食养方系列", series: "轻养小罐茶系列", name: "元气茶", target: "日常轻养人群", spec: "15g/罐", formula: "人参、黑枸杞、桑葚等", intro: "适合日常轻养与办公场景的轻养小罐茶。", price: null, priceText: "", showPrice: false, image: "images/gongneng-xiaoguan-cha/yuanqi-cha.jpg" },
  { category: "药食养方系列", series: "轻养小罐茶系列", name: "轻湿茶", target: "日常轻养人群", spec: "15g/罐", formula: "赤小豆、芡实、炒薏米等", intro: "适合日常轻养与餐后场景的轻养小罐茶。", price: null, priceText: "", showPrice: false, image: "images/gongneng-xiaoguan-cha/qingshi-cha.jpg" },
  { category: "药食养方系列", series: "轻养小罐茶系列", name: "红颜茶", target: "日常轻养人群", spec: "15g/罐", formula: "阿胶、红参、桑葚、玫瑰等", intro: "适合日常轻养与礼赠场景的轻养小罐茶。", price: null, priceText: "", showPrice: false, image: "images/gongneng-xiaoguan-cha/hongyan-cha.jpg" },
  { category: "药食养方系列", series: "轻养小罐茶系列", name: "熬夜茶", target: "日常轻养人群", spec: "15g/罐", formula: "黑枸杞、决明子、乌梅等", intro: "适合夜间与办公场景的轻养小罐茶。", price: null, priceText: "", showPrice: false, image: "images/gongneng-xiaoguan-cha/aoye-cha.jpg" },
  { category: "药食养方系列", series: "国民经典饮系列", name: "酸梅汤", target: "大众日常饮用人群", spec: "15g/罐", formula: "乌梅5g、山楂3g、炙甘草1g、橘皮1g、罗汉果2.5g、洛神花1.5g、荷叶0.3g、金银花0.2g、薄荷0.5g", intro: "以乌梅、山楂、橘皮、洛神花等草本食材搭配，酸甜清爽，适合餐后、夏季和日常饮用场景。", price: null, priceText: "", showPrice: false, image: "images/guomin-jingdian-yinpin/suanmei-tang.jpg" },
  { category: "药食养方系列", series: "国民经典饮系列", name: "五红饮", target: "大众日常饮用人群", spec: "15g/罐", formula: "红枣、红豆、红皮花生、枸杞、红糖等", intro: "适合日常轻养与家庭场景的经典饮品。", price: null, priceText: "", showPrice: false, image: "images/guomin-jingdian-yinpin/wuhong-tang.jpg" },
  { category: "药食养方系列", series: "国民经典饮系列", name: "姜枣茶", target: "大众日常饮用人群", spec: "15g/罐", formula: "生姜、红枣、红糖等", intro: "适合秋冬与日常暖饮场景的经典饮品。", price: null, priceText: "", showPrice: false, image: "images/guomin-jingdian-yinpin/jiangzao-cha.jpg" },
  { category: "药食养方系列", series: "国民经典饮系列", name: "秋梨汤", target: "大众日常饮用人群", spec: "15g/罐", formula: "秋梨、百合、银耳等", intro: "适合季节转换与日常轻养场景的经典饮品。", price: null, priceText: "", showPrice: false, image: "images/guomin-jingdian-yinpin/qiuli-tang.jpg" },
  { category: "药食养方系列", series: "养生隐茶杯系列", name: "养元茶", target: "日常轻养人群", spec: "一次性杯装，4.5g/杯×10杯", formula: "黄精、山茱萸、枸杞、桑葚", intro: "便携杯装草本茶饮，适合日常轻养。", price: null, priceText: "", showPrice: false, image: "images/yangsheng-yincha-bei/yangyuan-cha.jpg" },
  { category: "药食养方系列", series: "养生隐茶杯系列", name: "清和茶", target: "日常轻养人群", spec: "一次性杯装，4.5g/杯×10杯", formula: "菊花、金银花、栀子、枸杞子、橘皮", intro: "便携杯装草本茶饮，适合日常轻养。", price: null, priceText: "", showPrice: false, image: "images/yangsheng-yincha-bei/qinghe-cha.jpg" },
  { category: "药食养方系列", series: "养生隐茶杯系列", name: "葛花解酲汤", target: "日常轻养人群", spec: "一次性杯装，4.5g/杯×10杯", formula: "山楂、陈皮、葛根花、枳椇子", intro: "便携杯装草本茶饮，适合日常轻养。", price: null, priceText: "", showPrice: false, image: "images/yangsheng-yincha-bei/gehua-jiecheng-tang.jpg" },
  { category: "药食养方系列", series: "滋补系列", name: "即食九制黄精", target: "日常轻养人群", spec: "150g×2袋", formula: "九华山有机黄精", intro: "草本滋补零食，适合日常轻养与礼赠场景。", price: null, priceText: "", showPrice: false, image: "images/zibu-xilie/jiuzhi-huangjing.jpg" },
  { category: "药食养方系列", series: "滋补系列", name: "茯苓糕", target: "日常轻养人群", spec: "150g×2袋", formula: "粳米、茯苓粉等", intro: "草本茶点，适合家庭与办公场景。", price: null, priceText: "", showPrice: false, image: "images/zibu-xilie/fuling-gao.jpg" },
  { category: "药食养方系列", series: "滋补系列", name: "五黑丸", target: "日常轻养人群", spec: "150g×2袋", formula: "黑芝麻、黑豆、黑米、黑枸杞等", intro: "草本轻食，适合日常轻养场景。", price: null, priceText: "", showPrice: false, image: "images/zibu-xilie/wuhei-wan.jpg" },
  { category: "药食养方系列", series: "轻养膳食系列", name: "五行馒头", target: "日常轻养人群", spec: "冷冻/预包装，五种口味", formula: "面粉、中药粉、酵母等", intro: "适合日常餐食搭配的轻养膳食产品。", price: null, priceText: "", showPrice: false, image: "images/qingyang-shanshi/wuxing-mantou.jpg" },
  { category: "药食养方系列", series: "轻养膳食系列", name: "轻养膳食粉", target: "日常轻养人群", spec: "15g×12袋", formula: "铁棍山药、薏仁、茯苓、莲子、燕麦、芡实、猴头菇、白扁豆、陈皮、红枣、铁皮石斛", intro: "便携膳食补充产品，适合早餐及日常轻养。", price: null, priceText: "", showPrice: false, image: "images/qingyang-shanshi/tiepi-shihu-bazhen-fen.jpg" },
  { category: "生活养方系列", series: "草本睡眠/香养产品", name: "鼻安梦香枕", target: "睡前香养人群", spec: "枕套+内胆", formula: "枕套：绸缎；填充物：非遗合香珠", intro: "适合卧室与睡前放松场景的草本香养产品。", price: null, priceText: "", showPrice: false, image: "images/caoben-shenghuo-yongpin/bian-mengxiang-zhen.jpg" },
  { category: "生活养方系列", series: "草本睡眠/香养产品", name: "非遗合香珠", target: "香养人群", spec: "盒装", formula: "20味中草药搭配组合", intro: "适合香枕填充与日常香养场景。", price: null, priceText: "", showPrice: false, image: "images/caoben-shenghuo-yongpin/caoben-hexiang-zhu.jpg" },
  { category: "生活养方系列", series: "草本梳理/洗护产品", name: "非遗药香梳", target: "日常梳理人群", spec: "盒装", formula: "何首乌、侧柏叶、苦参、丹参等", intro: "适合日常梳理与生活养方场景。", price: null, priceText: "", showPrice: false, image: "images/caoben-shenghuo-yongpin/caoben-zhicui-yaoxiang-shu.jpg" },
  { category: "生活养方系列", series: "草本梳理/洗护产品", name: "养发梳套装", target: "日常梳理人群", spec: "套装", formula: "药香梳组合（以实际配置为准）", intro: "适合礼赠与家庭使用的草本梳理产品。", price: null, priceText: "", showPrice: false, image: "images/common/product-placeholder.jpg" },
  { category: "生活养方系列", series: "草本梳理/洗护产品", name: "侧柏叶养发皂", target: "草本洗护人群", spec: "单块装/套装", formula: "侧柏叶等草本配方", intro: "适合日常洗护场景的草本产品。", price: null, priceText: "", showPrice: false, image: "images/common/product-placeholder.jpg" },
  { category: "生活养方系列", series: "草本梳理/洗护产品", name: "七子白洁面皂", target: "草本洗护人群", spec: "单块装/套装", formula: "白僵蚕、白芨、白茯苓、白芍、白蔹、白芷、白术", intro: "适合日常洁面场景的草本洗护产品。", price: null, priceText: "", showPrice: false, image: "images/caoben-shenghuo-yongpin/qizi-bai-jiemian-zao.jpg" },
  { category: "节气养生系列", series: "节气内容产品", name: "顺时而养 · 二十四节气养生历", target: "节气养生关注人群", spec: "印刷品内容产品", formula: "二十四节气与十二时辰内容架构", intro: "以二十四节气和十二时辰为时间骨架，结合中医体质、五音疗愈与主动健康服务内容，打造纸质/电子养生历一体化体验，让用户在日常中顺应自然节律、养护身心状态。", price: null, priceText: "", showPrice: false, image: "images/common/product-placeholder.jpg" },
  { category: "节气养生系列", series: "节气内容产品", name: "顺时而养 · Companion OS", target: "节气养生关注人群", spec: "设备绑定软件OS", formula: "节气陪伴与主动健康服务系统", intro: "以二十四节气和十二时辰为时间骨架，融合中医体质、五音疗愈和主动健康服务，构建与设备联动的智能陪伴系统，在生活全周期中顺时养生、持续关怀。", price: null, priceText: "", showPrice: false, image: "images/common/product-placeholder.jpg" },
  { category: "定制礼赠系列", series: "礼赠产品/方案", name: "企业员工健康礼", target: "企业福利与员工关怀", spec: "礼盒装（内容可定制）", formula: "按场景搭配产品组合", intro: "面向企业福利与员工关怀的礼赠方案。", price: null, priceText: "", showPrice: false, image: "images/qiye-dingzhi/qiye-fuli-lihe.jpg" },
  { category: "定制礼赠系列", series: "礼赠产品/方案", name: "商务伴手礼", target: "商务拜访与客户关怀", spec: "礼盒装（内容可定制）", formula: "按场景搭配产品组合", intro: "面向商务拜访与客户关怀的礼赠方案。", price: null, priceText: "", showPrice: false, image: "images/canshi-yuyang-lihe/canshi-yuyang-cha-shangwu-li.jpg" },
  { category: "定制礼赠系列", series: "礼赠产品/方案", name: "参石御养小罐茶礼盒", target: "节日礼赠与高端关怀", spec: "12罐茶礼盒装", formula: "人参、石斛", intro: "适合节日礼赠与高端关怀场景的礼盒产品。", price: null, priceText: "", showPrice: false, image: "images/canshi-yuyang-lihe/canshi-yuyang-cha-lihe-zhuang.jpg" },
  { category: "定制礼赠系列", series: "礼赠产品/方案", name: "主题健康礼盒", target: "主题活动与节点关怀", spec: "礼盒装（内容可定制）", formula: "按主题搭配产品组合", intro: "围绕活动主题定制的健康礼赠方案。", price: null, priceText: "", showPrice: false, image: "images/qiye-dingzhi/zhuti-guanai-lihe.jpg" },
  { category: "健康场景共建系列", series: "场景合作项目", name: "京颐养方线下体验区", target: "院内专柜/商超/社区/合作门店", spec: "项目合作", formula: "/", intro: "面向线下场景的健康体验共建项目。", price: null, priceText: "", showPrice: false, image: "images/xianxia-hezuo/xianxia-tiyandian-hezuo.jpg" },
  { category: "健康场景共建系列", series: "场景合作项目", name: "企业健康活动", target: "企业客户/员工健康关怀", spec: "项目合作", formula: "/", intro: "结合体质辨识、试饮与科普内容的健康活动共建项目。", price: null, priceText: "", showPrice: false, image: "images/xianxia-hezuo/qiye-jiankang-huodong-zhichi.jpg" },
  { category: "健康场景共建系列", series: "场景合作项目", name: "社区健康服务", target: "社区居民与健康服务场景", spec: "项目合作", formula: "/", intro: "面向社区居民的日常健康服务共建项目。", price: null, priceText: "", showPrice: false, image: "images/common/product-placeholder.jpg" },
  { category: "健康场景共建系列", series: "场景合作项目", name: "园区员工健康关爱", target: "园区企业员工", spec: "项目合作", formula: "/", intro: "面向园区员工的健康关爱服务共建项目。", price: null, priceText: "", showPrice: false, image: "images/common/product-placeholder.jpg" },
  { category: "健康场景共建系列", series: "场景合作项目", name: "中医文化展活动合作", target: "节令活动/文化展/品牌快闪", spec: "项目合作", formula: "/", intro: "适配中医文化展与线下活动的共建项目。", price: null, priceText: "", showPrice: false, image: "images/xianxia-hezuo/zhongyi-yangsheng-shiji-huodong-hezuo.jpg" }
];

const categories = ["全部", "药食养方系列", "生活养方系列", "节气养生系列", "定制礼赠系列", "健康场景共建系列"];
const seriesList = ["全部", "轻养小罐茶系列", "辨体调养茶系列", "国民经典饮系列", "养生隐茶杯系列", "滋补系列", "轻养膳食系列", "草本睡眠/香养产品", "草本梳理/洗护产品", "节气内容产品", "礼赠产品/方案", "场景合作项目"];
const visibleSeriesList = seriesList;
const sceneList = ["全部", "日常茶饮", "办公室茶饮", "体质调养", "节令养护", "餐后清爽", "睡前香养", "草本洗护", "轻养膳食", "商务礼赠", "企业关怀", "社区活动"];

const categoryIntros = {
  "药食养方系列": "代茶饮、经典饮品、滋补茶点与轻养膳食，覆盖日常轻养场景。",
  "生活养方系列": "以草本睡眠香养和梳理洗护延展东方生活方式。",
  "节气养生系列": "围绕节气节律提供轻内容、轻陪伴的养生内容产品。",
  "定制礼赠系列": "面向员工关怀、商务往来与主题节点的健康礼赠方案。",
  "健康场景共建系列": "围绕线下体验、企业活动、社区服务等场景展开共建合作。"
};

const featuredSeries = [
  { category: "药食养方系列", series: "辨体调养茶系列", title: "辨体调养茶系列", image: "images/common/series-banner-1.jpg", text: "九种体质，一茶一方，按体质选择日常轻养茶饮。" },
  { category: "药食养方系列", series: "国民经典饮系列", title: "国民经典饮系列", image: "images/common/series-banner-2.jpg", text: "酸梅汤、五红饮、秋梨汤、姜枣茶，贴近日常饮用场景。" },
  { category: "定制礼赠系列", series: "礼赠产品/方案", title: "礼赠产品/方案", image: "images/common/series-banner-3.jpg", text: "围绕员工关怀、商务伴手与主题健康礼盒灵活搭配。" }
];

const constitutionTeaOrder = [
  ["平和体质", "苹果黄芪茶"],
  ["阳虚体质", "甘草干姜茶"],
  ["阴虚体质", "百合玉竹茶"],
  ["气虚体质", "参芪大枣茶"],
  ["痰湿体质", "茯苓陈皮茶"],
  ["湿热体质", "薏仁荷叶茶"],
  ["血瘀体质", "当归玫瑰茶"],
  ["气郁体质", "玫瑰佛手茶"],
  ["特禀体质 / 过敏体质", "黄芪紫苏茶"]
];

const state = {
  category: "全部",
  series: "全部",
  scene: "全部",
  keyword: ""
};

function resetAllFilters() {
  state.category = "全部";
  state.series = "全部";
  state.scene = "全部";
  state.keyword = "";
}

const eagerProductImageNames = new Set(["苹果黄芪茶", "甘草干姜茶", "百合玉竹茶", "参芪大枣茶"]);

const getElement = (id) => document.getElementById(id);

function getImageLoadingAttrs({ eager = false, width = 800, height = 600 } = {}) {
  return `width="${width}" height="${height}" decoding="async" loading="${eager ? "eager" : "lazy"}"${eager ? " fetchpriority=\"high\"" : ""}`;
}

const productSceneMap = {
  "元气茶": ["日常茶饮", "办公室茶饮"],
  "轻湿茶": ["日常茶饮", "办公室茶饮", "餐后清爽"],
  "红颜茶": ["日常茶饮", "办公室茶饮"],
  "熬夜茶": ["日常茶饮", "办公室茶饮"],
  "苹果黄芪茶": ["体质调养", "日常茶饮", "办公室茶饮"],
  "甘草干姜茶": ["体质调养", "日常茶饮", "办公室茶饮", "节令养护"],
  "百合玉竹茶": ["体质调养", "日常茶饮", "办公室茶饮", "节令养护"],
  "参芪大枣茶": ["体质调养", "日常茶饮", "办公室茶饮"],
  "茯苓陈皮茶": ["体质调养", "日常茶饮", "办公室茶饮", "餐后清爽"],
  "薏仁荷叶茶": ["体质调养", "日常茶饮", "办公室茶饮", "餐后清爽"],
  "当归玫瑰茶": ["体质调养", "日常茶饮", "办公室茶饮"],
  "玫瑰佛手茶": ["体质调养", "日常茶饮", "办公室茶饮", "餐后清爽"],
  "黄芪紫苏茶": ["体质调养", "日常茶饮", "办公室茶饮", "节令养护"],
  "酸梅汤": ["日常茶饮", "办公室茶饮", "餐后清爽", "节令养护"],
  "五红饮": ["日常茶饮", "办公室茶饮", "节令养护"],
  "姜枣茶": ["日常茶饮", "办公室茶饮", "节令养护"],
  "秋梨汤": ["日常茶饮", "办公室茶饮", "节令养护"],
  "养元茶": ["日常茶饮", "办公室茶饮"],
  "清和茶": ["日常茶饮", "办公室茶饮"],
  "葛花解酲汤": ["日常茶饮", "办公室茶饮", "餐后清爽"],
  "即食九制黄精": ["轻养膳食", "商务礼赠"],
  "茯苓糕": ["轻养膳食", "商务礼赠"],
  "五黑丸": ["轻养膳食", "商务礼赠"],
  "五行馒头": ["轻养膳食"],
  "轻养膳食粉": ["轻养膳食"],
  "鼻安梦香枕": ["睡前香养"],
  "非遗合香珠": ["睡前香养", "商务礼赠"],
  "非遗药香梳": ["草本洗护", "商务礼赠"],
  "养发梳套装": ["草本洗护", "商务礼赠"],
  "侧柏叶养发皂": ["草本洗护"],
  "七子白洁面皂": ["草本洗护"],
  "顺时而养 · 二十四节气养生历": ["节令养护", "商务礼赠"],
  "顺时而养 · Companion OS": ["节令养护", "企业关怀"],
  "企业员工健康礼": ["商务礼赠", "企业关怀"],
  "商务伴手礼": ["商务礼赠"],
  "参石御养小罐茶礼盒": ["商务礼赠", "办公室茶饮"],
  "主题健康礼盒": ["商务礼赠", "企业关怀"],
  "京颐养方线下体验区": ["企业关怀", "社区活动"],
  "企业健康活动": ["企业关怀"],
  "社区健康服务": ["社区活动"],
  "园区员工健康关爱": ["企业关怀"],
  "中医文化展活动合作": ["社区活动", "企业关怀"]
};

function getScenes(product) {
  const mappedScenes = productSceneMap[product.name];
  const scenes = Array.isArray(product.scenes)
    ? product.scenes
    : product.scene
      ? [product.scene]
      : [];
  return (mappedScenes || scenes).length ? (mappedScenes || scenes) : ["日常茶饮"];
}

products.forEach((product) => {
  product.scenes = getScenes(product);
});

function renderChips(container, items, activeValue, onClick) {
  container.innerHTML = items.map((item) => (
    `<button class="chip${item === activeValue ? " active" : ""}" type="button" data-value="${item}">${item}</button>`
  )).join("");

  container.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => onClick(chip.dataset.value));
  });
}

function renderCategoryOverview() {
  const container = getElement("categoryOverview");
  if (!container) return;
  const systemCategories = ["药食养方系列", "生活养方系列", "节气养生系列", "定制礼赠系列", "健康场景共建系列"];
  const cards = systemCategories.map((category) => {
    return `
      <article class="system-card" data-category="${category}">
        <div>
          <h3>${category}</h3>
          <p>${categoryIntros[category]}</p>
        </div>
      </article>
    `;
  });

  container.innerHTML = cards.join("");
  container.querySelectorAll(".system-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.dataset.category === "健康场景共建系列") {
        getElement("experience").scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (card.dataset.category === "定制礼赠系列") {
        getElement("custom").scrollIntoView({ behavior: "smooth" });
        return;
      }
      state.category = card.dataset.category;
      state.series = "全部";
      state.scene = "全部";
      update();
      getElement("products").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderFeaturedSeries() {
  const track = getElement("seriesTrack");
  const dots = getElement("seriesDots");
  track.innerHTML = featuredSeries.map((item) => `
    <article class="series-slide" data-series="${item.series}">
      <img src="${item.image}" alt="${item.title}" ${getImageLoadingAttrs({ eager: false, width: 1600, height: 900 })} onerror="this.onerror=null;this.src='images/common/product-placeholder.jpg'">
      <div class="series-copy">
        <p class="eyebrow">Featured Series</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <button class="btn primary" type="button">查看系列</button>
      </div>
    </article>
  `).join("");

  dots.innerHTML = featuredSeries.map((_, index) => (
    `<button class="${index === 0 ? "active" : ""}" type="button" aria-label="切换到第 ${index + 1} 张特色产品系列" data-index="${index}"></button>`
  )).join("");

  track.querySelectorAll(".series-slide").forEach((slide) => {
    slide.addEventListener("click", () => {
      state.category = featuredSeries.find((item) => item.series === slide.dataset.series)?.category || "全部";
      state.series = slide.dataset.series;
      state.scene = "全部";
      update();
      getElement("products").scrollIntoView({ behavior: "smooth" });
    });
  });

  dots.querySelectorAll("button").forEach((dot) => {
    dot.addEventListener("click", () => scrollSeries(Number(dot.dataset.index)));
  });
}

function scrollSeries(index) {
  const track = getElement("seriesTrack");
  if (!track) return;
  track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
}

function updateSeriesDots() {
  const track = getElement("seriesTrack");
  const dots = Array.from(document.querySelectorAll("#seriesDots button"));
  if (!track || !dots.length) return;
  const activeIndex = Math.min(dots.length - 1, Math.round(track.scrollLeft / track.clientWidth));
  dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
}

function getCoreFormula(formula) {
  return formula.split("、").slice(0, 4).map((item) => item.replace(/[0-9.]+g?/g, "").trim()).join("、");
}

function getConstitutionTeas() {
  const teaProducts = products.filter((product) => product.series === "辨体调养茶系列");
  return constitutionTeaOrder.map(([constitution, name]) => {
    const product = teaProducts.find((item) => item.name === name);
    return product ? { constitution, product } : null;
  }).filter(Boolean);
}

function renderConstitutionTea() {
  const track = getElement("constitutionTrack");
  const dots = getElement("constitutionDots");
  if (!track || !dots) return;

  const teas = getConstitutionTeas();
  track.innerHTML = teas.map(({ constitution, product }, index) => `
    <article class="tea-card">
      <div class="tea-image">
        <img src="${product.image}" alt="${product.name}" ${getImageLoadingAttrs({ eager: false, width: 800, height: 600 })} onerror="this.onerror=null;this.src='images/common/product-placeholder.jpg'">
      </div>
      <div class="tea-body">
        <span class="tea-constitution">${constitution}</span>
        <h3>${product.name}</h3>
        <p class="tea-target"><b>推荐体质/人群：</b>${product.target}</p>
        <p class="tea-formula"><b>核心配方：</b>${getCoreFormula(product.formula)}</p>
        <p class="tea-intro">${product.intro}</p>
        <button class="tea-detail-button" type="button" data-index="${index}">查看详情</button>
      </div>
    </article>
  `).join("");

  track.querySelectorAll(".tea-detail-button").forEach((button) => {
    button.addEventListener("click", () => openTeaDetail(teas[Number(button.dataset.index)].product));
  });

  updateConstitutionPagination();
}

function getConstitutionScrollPositions() {
  const track = getElement("constitutionTrack");
  if (!track) return;
  const card = track.querySelector(".tea-card");
  if (!card) return [0];
  const gap = 20;
  const step = card.getBoundingClientRect().width + gap;
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  const positions = [0];

  for (let position = step; position < maxScroll; position += step) {
    positions.push(position);
  }

  if (maxScroll > 0 && positions[positions.length - 1] !== maxScroll) {
    positions.push(maxScroll);
  }

  return positions;
}

function updateConstitutionPagination() {
  const dots = getElement("constitutionDots");
  const positions = getConstitutionScrollPositions();
  if (!dots || !positions) return;

  dots.innerHTML = positions.map((_, index) => (
    `<button class="${index === 0 ? "active" : ""}" type="button" aria-label="切换到第 ${index + 1} 页体质茶" data-index="${index}"></button>`
  )).join("");

  dots.querySelectorAll("button").forEach((dot) => {
    dot.addEventListener("click", () => scrollConstitutionTea(Number(dot.dataset.index)));
  });
  updateConstitutionDots();
}

function scrollConstitutionTea(index) {
  const track = getElement("constitutionTrack");
  const positions = getConstitutionScrollPositions();
  if (!track || !positions) return;
  track.scrollTo({ left: positions[index] || 0, behavior: "smooth" });
}

function updateConstitutionDots() {
  const track = getElement("constitutionTrack");
  const dots = Array.from(document.querySelectorAll("#constitutionDots button"));
  const positions = getConstitutionScrollPositions();
  if (!track || !dots.length || !positions) return;
  const activeIndex = positions.reduce((closestIndex, position, index) => {
    return Math.abs(position - track.scrollLeft) < Math.abs(positions[closestIndex] - track.scrollLeft) ? index : closestIndex;
  }, 0);
  dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
}

function openTeaDetail(product) {
  getElement("teaModalTitle").textContent = product.name;
  getElement("teaModalTarget").textContent = product.target;
  getElement("teaModalSpec").textContent = product.spec;
  getElement("teaModalFormula").textContent = product.formula;
  getElement("teaModalIntro").textContent = product.intro;
  getElement("teaModal").hidden = false;
  getElement("teaModalClose").focus();
}


function getProductsByCategorySeries(category = state.category, series = state.series) {
  return products.filter((product) => {
    const categoryMatched = category === "全部" || product.category === category;
    const seriesMatched = series === "全部" || product.series === series;
    return categoryMatched && seriesMatched;
  });
}

function unique(items) {
  return [...new Set(items)];
}

function getSeriesOptions(category = state.category) {
  const scoped = category === "全部" ? products : products.filter((product) => product.category === category);
  return ["全部", ...unique(scoped.map((product) => product.series))];
}

function getSceneOptions(category = state.category, series = state.series) {
  const scoped = getProductsByCategorySeries(category, series);
  const sceneSet = new Set(scoped.flatMap((product) => getScenes(product)));
  return ["全部", ...sceneList.filter((scene) => scene !== "全部" && sceneSet.has(scene))];
}

function normalizeFilterState() {
  const seriesOptions = getSeriesOptions(state.category);
  if (!seriesOptions.includes(state.series)) {
    state.series = "全部";
  }

  const sceneOptions = getSceneOptions(state.category, state.series);
  if (!sceneOptions.includes(state.scene)) {
    state.scene = "全部";
  }

  if (!state.keyword.trim()) {
    const hasProducts = getProductsByCategorySeries(state.category, state.series).length > 0;
    if (!hasProducts && state.series !== "全部") {
      state.series = "全部";
      const resetSceneOptions = getSceneOptions(state.category, state.series);
      if (!resetSceneOptions.includes(state.scene)) state.scene = "全部";
    }
  }
}

function getFilteredProducts() {
  const keyword = state.keyword.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const categoryMatched = state.category === "全部" || product.category === state.category;
    const seriesMatched = state.series === "全部" || product.series === state.series;
    const scenes = getScenes(product);
    const sceneMatched = state.scene === "全部" || scenes.includes(state.scene);
    const keywordText = [product.name, product.spec, product.formula, product.intro, product.target, product.series, product.category, scenes.join(" ")].join(" ").toLowerCase();
    return categoryMatched && seriesMatched && sceneMatched && (!keyword || keywordText.includes(keyword));
  });

  if (!keyword && state.scene !== "全部" && filtered.length === 0) {
    state.scene = "全部";
    return getFilteredProducts();
  }

  return filtered;
}

function sortProductsForDisplay(items) {
  const constitutionTeas = items.filter((product) => product.series === "辨体调养茶系列");
  const gingerJujubeTea = items.filter((product) => product.name === "姜枣茶");
  if (!constitutionTeas.length && !gingerJujubeTea.length) return items;

  const remainingProducts = items.filter((product) => product.series !== "辨体调养茶系列" && product.name !== "姜枣茶");
  const autumnPearIndex = remainingProducts.findIndex((product) => product.name === "秋梨汤");
  if (autumnPearIndex === -1) return remainingProducts.concat(gingerJujubeTea, constitutionTeas);

  return [
    ...remainingProducts.slice(0, autumnPearIndex + 1),
    ...gingerJujubeTea,
    ...constitutionTeas,
    ...remainingProducts.slice(autumnPearIndex + 1)
  ];
}

function renderProducts() {
  const filtered = sortProductsForDisplay(getFilteredProducts());
  const grid = getElement("productGrid");
  const empty = getElement("emptyState");
  const productCount = getElement("productCount");
  if (!grid || !empty || !productCount) return;
  productCount.textContent = filtered.length;
  empty.hidden = filtered.length > 0;

  grid.innerHTML = filtered.map((product) => {
    const isService = product.spec === "/" && product.formula === "/";
    const spec = product.spec && product.spec !== "/" && !isService ? `<p><b>规格：</b>${product.spec}</p>` : "";
    const hideTarget = isService || product.category === "定制礼赠系列";
    const target = !hideTarget ? `<p><b>推荐体质/人群：</b>${product.target}</p>` : "";
    const formula = product.formula && product.formula !== "/" && !isService ? `
      <details class="formula-line">
        <summary><b>配料：</b><span>查看详细</span></summary>
        <p>${product.formula}</p>
      </details>
    ` : "";

    const sceneTags = getScenes(product).map((scene) => `<span class="scene-tag">${scene}</span>`).join("");

    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" ${getImageLoadingAttrs({ eager: eagerProductImageNames.has(product.name), width: 800, height: 600 })} onerror="this.onerror=null;this.src='images/common/product-placeholder.jpg'">
        </div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <div class="info-list">
            ${target}
            ${spec}
            ${formula}
          </div>
          <p class="intro">${product.intro}</p>
          <div class="scene-tags">${sceneTags}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderFilterSummary() {
  const summary = getElement("filterSummary");
  if (!summary) return;
  const parts = [];
  if (state.category !== "全部") parts.push(state.category);
  if (state.series !== "全部") parts.push(state.series);
  if (state.scene !== "全部") parts.push(state.scene);
  if (state.keyword.trim()) parts.push(`关键词：${state.keyword.trim()}`);
  summary.textContent = parts.length ? `当前筛选：${parts.join(" · ")}` : "当前显示全部产品";
}

function renderConstitutionCards() {
  if (!getElement("constitutionGrid")) return;
  const items = [
    ["苹果黄芪茶", "平和体质"],
    ["甘草干姜茶", "阳虚体质"],
    ["百合玉竹茶", "阴虚体质"],
    ["参芪大枣茶", "气虚体质"],
    ["茯苓陈皮茶", "痰湿体质"],
    ["薏仁荷叶茶", "湿热体质"],
    ["当归玫瑰茶", "血瘀体质"],
    ["玫瑰佛手茶", "气郁体质"],
    ["黄芪紫苏茶", "特禀体质 / 过敏体质"]
  ];

  getElement("constitutionGrid").innerHTML = items.map(([name, type]) => (
    `<article class="constitution-card"><strong>${name}</strong><span>${type}</span></article>`
  )).join("");
}

function update() {
  normalizeFilterState();

  const seriesOptions = getSeriesOptions(state.category);
  const sceneOptions = getSceneOptions(state.category, state.series);

  renderChips(getElement("categoryFilters"), categories, state.category, (value) => {
    state.category = value;
    normalizeFilterState();
    update();
  });

  renderChips(getElement("seriesFilters"), seriesOptions, state.series, (value) => {
    state.series = value;
    normalizeFilterState();
    update();
  });

  renderChips(getElement("sceneFilters"), sceneOptions, state.scene, (value) => {
    state.scene = value;
    normalizeFilterState();
    update();
  });

  renderProducts();
  renderFilterSummary();
}

function bindEvents() {
  const filterPanel = getElement("productFilterPanel");
  const filterToggle = getElement("filterToggle");
  const searchInput = getElement("searchInput");
  const mobileSearchPlaceholder = "搜索产品、体质、场景或配方";
  const desktopSearchPlaceholder = searchInput.placeholder;
  const mobileFilterQuery = window.matchMedia("(max-width: 768px)");

  const syncSearchPlaceholder = () => {
    searchInput.placeholder = mobileFilterQuery.matches ? mobileSearchPlaceholder : desktopSearchPlaceholder;
  };

  syncSearchPlaceholder();
  if (mobileFilterQuery.addEventListener) {
    mobileFilterQuery.addEventListener("change", syncSearchPlaceholder);
  } else {
    mobileFilterQuery.addListener(syncSearchPlaceholder);
  }

  filterToggle.addEventListener("click", () => {
    const isOpen = filterPanel.classList.toggle("is-open");
    filterToggle.setAttribute("aria-expanded", String(isOpen));
    filterToggle.querySelector("span").textContent = isOpen ? "收起筛选" : "展开筛选";
  });

  searchInput.addEventListener("input", (event) => {
    state.keyword = event.target.value;
    update();
  });

  const filterResetBtn = getElement("filterResetBtn");
  const emptyResetBtn = getElement("emptyResetBtn");
  const emptyShowAllBtn = getElement("emptyShowAllBtn");
  const resetAndRefreshProducts = () => {
    resetAllFilters();
    searchInput.value = "";
    update();
  };

  filterResetBtn?.addEventListener("click", resetAndRefreshProducts);
  emptyResetBtn?.addEventListener("click", resetAndRefreshProducts);
  emptyShowAllBtn?.addEventListener("click", resetAndRefreshProducts);

  getElement("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const contactButton = getElement("contactConsult");
  const contactModal = getElement("contactModal");
  const contactClose = getElement("contactClose");
  const teaModal = getElement("teaModal");
  const teaModalClose = getElement("teaModalClose");
  const openContact = () => {
    contactModal.hidden = false;
    contactClose.focus();
  };
  const closeContact = () => {
    contactModal.hidden = true;
    contactButton.focus();
  };

  contactButton.addEventListener("click", openContact);
  contactClose.addEventListener("click", closeContact);
  contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) closeContact();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !contactModal.hidden) closeContact();
    if (event.key === "Escape" && !teaModal.hidden) closeTeaDetail();
  });

  const closeTeaDetail = () => {
    teaModal.hidden = true;
  };
  teaModalClose.addEventListener("click", closeTeaDetail);
  teaModal.addEventListener("click", (event) => {
    if (event.target === teaModal) closeTeaDetail();
  });

  const constitutionTrack = getElement("constitutionTrack");
  const constitutionPrev = document.querySelector(".constitution-prev");
  const constitutionNext = document.querySelector(".constitution-next");
  constitutionPrev.addEventListener("click", () => {
    constitutionTrack.scrollBy({ left: -constitutionTrack.clientWidth * 0.82, behavior: "smooth" });
  });
  constitutionNext.addEventListener("click", () => {
    constitutionTrack.scrollBy({ left: constitutionTrack.clientWidth * 0.82, behavior: "smooth" });
  });
  constitutionTrack.addEventListener("scroll", updateConstitutionDots, { passive: true });
  window.addEventListener("resize", updateConstitutionPagination);

  const seriesTrack = getElement("seriesTrack");
  const seriesPrev = document.querySelector(".series-prev");
  const seriesNext = document.querySelector(".series-next");
  seriesPrev.addEventListener("click", () => {
    const activeIndex = Math.max(0, Math.round(seriesTrack.scrollLeft / seriesTrack.clientWidth) - 1);
    scrollSeries(activeIndex);
  });
  seriesNext.addEventListener("click", () => {
    const activeIndex = Math.min(featuredSeries.length - 1, Math.round(seriesTrack.scrollLeft / seriesTrack.clientWidth) + 1);
    scrollSeries(activeIndex);
  });
  seriesTrack.addEventListener("scroll", updateSeriesDots, { passive: true });

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const closeMobileNav = () => {
    if (!siteNav.classList.contains("open")) return;
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  window.addEventListener("scroll", closeMobileNav, { passive: true });

  const siteHeader = document.querySelector(".site-header");
  const updateHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-dots button"));
  const hero = document.querySelector(".hero");
  const prevButton = document.querySelector(".hero-prev");
  const nextButton = document.querySelector(".hero-next");

  if (hero && slides.length > 1) {
    let activeSlide = 0;
    let slideTimer = null;
    const showSlide = (index) => {
      activeSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === activeSlide));
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeSlide));
    };
    const nextSlide = () => showSlide(activeSlide + 1);
    const prevSlide = () => showSlide(activeSlide - 1);
    const restartTimer = () => {
      if (slideTimer) window.clearInterval(slideTimer);
      slideTimer = window.setInterval(nextSlide, 5200);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        restartTimer();
      });
    });

    prevButton?.addEventListener("click", () => {
      prevSlide();
      restartTimer();
    });

    nextButton?.addEventListener("click", () => {
      nextSlide();
      restartTimer();
    });

    let startX = 0;
    let startY = 0;
    hero.addEventListener("pointerdown", (event) => {
      startX = event.clientX;
      startY = event.clientY;
    });

    hero.addEventListener("pointerup", (event) => {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) nextSlide();
        if (deltaX > 0) prevSlide();
        restartTimer();
      }
    });

    restartTimer();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderConstitutionTea();
  renderFeaturedSeries();
  renderConstitutionCards();
  bindEvents();
  update();
});
