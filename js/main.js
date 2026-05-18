// 产品图片按照“产品系列文件夹 / 产品拼音.jpg”的规则存放，后续替换图片时，只需保持文件名和路径一致即可。

const products = [
  { category: "药食养方", series: "九种体质茶系列", name: "苹果黄芪茶", target: "平和质 / 日常基础调养", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "黄芪1.5g、苹果干4g、玉竹0.5g、红枣2g、枸杞0.5g、荷叶1g、罗汉果2g、山楂3g、菊花0.5g", intro: "以黄芪、苹果、玉竹、红枣等搭配，口感清甜柔和，适合作为平和质及日常轻养人群的基础代茶饮，满足办公室、餐后和家庭常备饮用场景。", price: "", image: "images/jiuzhong-tizhi-cha/pingguo-huangqi-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "甘草干姜茶", target: "阳虚质 / 偏好温热饮用人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "生姜2g、炙甘草2g、大枣3g、砂仁0.5g、红茶1g、白扁豆3g、橘皮1.5g、炒薏米1g、万寿菊1g", intro: "以生姜、炙甘草、大枣、砂仁等温润食材搭配，茶感醇暖，适合阳虚质及偏好热饮、日常暖养的人群，适用于秋冬、空调房和办公室茶饮场景。", price: "", image: "images/jiuzhong-tizhi-cha/gancao-ganjiang-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "百合玉竹茶", target: "阴虚质 / 清润轻养人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "百合1g、玉竹1g、菊花0.5g、葛根2.3g、罗汉果3g、栀子1g、百香果3g、生地黄3g、金银花0.2g", intro: "以百合、玉竹、生地黄、罗汉果等清润食材搭配，口感甘润清爽，适合阴虚质及熬夜后、干燥季节有清润需求的人群日常饮用。", price: "", image: "images/jiuzhong-tizhi-cha/baihe-yuzhu-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "参芪大枣茶", target: "气虚质 / 元气轻养人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "人参0.5g、黄芪2g、大枣2.2g、炙甘草2g、山药1g、无花果3g、炒麦芽2g、黄精2g、茉莉花0.3g", intro: "以人参、黄芪、大枣、黄精、山药等搭配，茶感醇和，适合气虚质及工作节奏快、希望日常元气轻养的人群，适用于办公、出差和礼盒组合场景。", price: "", image: "images/jiuzhong-tizhi-cha/shenqi-dazao-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "茯苓陈皮茶", target: "痰湿质 / 轻盈饮食管理人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "茯苓3g、橘皮2.5g、荷叶0.5g、罗汉果3g、香橼1g、薄荷0.5g、炒薏米2g、山楂2g、洛神花0.5g", intro: "以茯苓、陈皮、荷叶、炒薏米、山楂等搭配，风味清爽轻盈，适合痰湿质及关注餐后轻负担、体态管理和日常清爽饮用的人群。", price: "", image: "images/jiuzhong-tizhi-cha/fuling-chenpi-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "薏仁荷叶茶", target: "湿热质 / 夏季清爽饮用人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "炒薏仁4g、荷叶1g、山楂2g、枸杞0.5g、金桔2g、罗汉果2g、炙甘草1.5g、生地黄1.5g、菊花0.5g", intro: "以炒薏仁、荷叶、山楂、金桔、菊花等搭配，茶汤清爽顺口，适合湿热质及夏季闷热、饮食偏油腻后希望清爽饮用的人群。", price: "", image: "images/jiuzhong-tizhi-cha/yiren-heye-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "当归玫瑰茶", target: "血瘀质 / 女性日常关爱人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "当归0.5g、玫瑰花0.5g、沙棘2g、大枣2g、黄芪2g、熟地黄3g、桃仁2g、山楂2g、桑葚1g", intro: "以当归、玫瑰、熟地黄、桃仁、桑葚等搭配，花果香气柔和，适合血瘀质及关注气色管理、女性日常关爱和节日礼赠场景。", price: "", image: "images/jiuzhong-tizhi-cha/danggui-meigui-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "玫瑰佛手茶", target: "气郁质 / 舒缓轻养人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "玫瑰花0.5g、佛手2g、炒麦芽3g、薄荷1g、无花果2g、乌梅2g、罗汉果2g、香橼1g、决明子1.5g", intro: "以玫瑰、佛手、香橼、薄荷、乌梅等芳香食材搭配，香气舒展，适合气郁质及节奏紧张、情绪压力较大人群的下午茶和日常轻养场景。", price: "", image: "images/jiuzhong-tizhi-cha/meigui-foshou-cha.jpg" },
  { category: "药食养方", series: "九种体质茶系列", name: "黄芪紫苏茶", target: "特禀质 / 换季养护人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "黄芪1.5g、炙甘草3g、紫苏叶0.5g、金银花0.2g、山药1g、白扁豆2g、熟地黄2.8g、大枣2g、山楂2g", intro: "以黄芪、紫苏叶、山药、白扁豆、大枣等搭配，风味温和清香，适合特禀质及换季、通勤外出、家庭常备等日常养护场景。", price: "", image: "images/jiuzhong-tizhi-cha/huangqi-zisu-cha.jpg" },
  { category: "药食养方", series: "功能小罐茶系列", name: "红颜茶", target: "女性关爱人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "阿胶、红参、桑葚、玫瑰等", intro: "女性日常轻养方向小罐茶，适合女性关爱、节日礼赠及办公室饮用场景。", price: "", image: "images/gongneng-xiaoguan-cha/hongyan-cha.jpg" },
  { category: "药食养方", series: "功能小罐茶系列", name: "轻湿茶", target: "轻负担生活方式人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "赤小豆、芡实、炒薏米等", intro: "轻湿方向小罐茶，适合夏季、办公室及轻负担生活方式场景。", price: "", image: "images/gongneng-xiaoguan-cha/qingshi-cha.jpg" },
  { category: "药食养方", series: "功能小罐茶系列", name: "元气茶", target: "加班/出差/高强度工作人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "人参、黑枸杞、桑葚等", intro: "元气补给方向小罐茶，适合加班、出差及高强度工作人群的日常饮用场景。", price: "", image: "images/gongneng-xiaoguan-cha/yuanqi-cha.jpg" },
  { category: "药食养方", series: "功能小罐茶系列", name: "熬夜茶", target: "熬夜/久坐办公人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "黑枸杞、决明子、乌梅等", intro: "面向熬夜与久坐办公人群的代茶饮，适合办公室、夜班及年轻客群沟通。", price: "", image: "images/gongneng-xiaoguan-cha/aoye-cha.jpg" },
  { category: "药食养方", series: "功能小罐茶系列", name: "醒醒茶", target: "聚餐应酬/餐后清爽人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "山楂、陈皮、葛根花、枳椇子", intro: "以山楂、陈皮、葛根花、枳椇子搭配，口感清爽，适合聚餐应酬后、餐后轻负担及日常清爽饮用场景。", price: "", image: "images/gongneng-xiaoguan-cha/xingxing-cha.jpg" },
  { category: "药食养方", series: "国民经典饮品系列", name: "酸梅汤", target: "大众化夏季饮品人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "乌梅5g、山楂3g、炙甘草1g、橘皮1g、罗汉果2.5g、洛神花1.5g、荷叶0.3g、金银花0.2g、薄荷0.5g", intro: "经典国民饮品方向，酸甜清爽，适合夏季饮用、线下试饮及大众化零售场景。", price: "", image: "images/guomin-jingdian-yinpin/suanmei-tang.jpg" },
  { category: "药食养方", series: "国民经典饮品系列", name: "五红汤", target: "女性关爱/家庭饮用人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "红枣、红豆、红皮花生、枸杞、红糖等", intro: "女性关爱及温暖养护方向饮品，适合节日礼赠、企业福利及家庭饮用。", price: "", image: "images/guomin-jingdian-yinpin/wuhong-tang.jpg" },
  { category: "药食养方", series: "国民经典饮品系列", name: "秋梨汤", target: "秋冬清润/家庭常备人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "秋梨、百合、银耳等", intro: "清润方向经典饮品，适合秋冬季、家庭常备及节令养生场景。", price: "", image: "images/guomin-jingdian-yinpin/qiuli-tang.jpg" },
  { category: "药食养方", series: "国民经典饮品系列", name: "姜枣茶", target: "秋冬暖养/家庭常备人群", spec: "代茶饮，充氮锁鲜小罐装，15g/罐×8罐", formula: "生姜、红枣、红糖等", intro: "温暖调性的经典茶饮，适合秋冬季、空调房、家庭常备及日常暖养饮用场景。", price: "", image: "images/guomin-jingdian-yinpin/jiangzao-cha.jpg" },
  { category: "药食养方", series: "养生隐茶杯系列", name: "清和茶", target: "上班族/清爽茶饮人群", spec: "一次性杯装，4.5g/杯×10杯", formula: "菊花、金银花、栀子、枸杞子、橘皮", intro: "以菊花、金银花、栀子、枸杞子、橘皮搭配，清新花草香，适合熬夜、饮食偏辛辣后及日常清爽茶饮场景。", price: "", image: "images/yangsheng-yincha-bei/qinghe-cha.jpg" },
  { category: "药食养方", series: "养生隐茶杯系列", name: "葛花解酲汤", target: "聚餐应酬/餐后清爽人群", spec: "一次性杯装，4.5g/杯×10杯", formula: "山楂、陈皮、葛根花、枳椇子", intro: "以山楂、陈皮、葛根花、枳椇子搭配，适合聚餐应酬后、餐后轻负担及办公室日常清爽饮用场景。", price: "", image: "images/yangsheng-yincha-bei/gehua-jiecheng-tang.jpg" },
  { category: "药食养方", series: "养生隐茶杯系列", name: "养元茶", target: "日常滋养/中青年轻养人群", spec: "一次性杯装，4.5g/杯×10杯", formula: "黄精、山茱萸、枸杞、桑葚", intro: "以黄精、山茱萸、枸杞、桑葚搭配，口感醇厚，适合日常滋养、工作节奏快及中青年轻养场景。", price: "", image: "images/yangsheng-yincha-bei/yangyuan-cha.jpg" },
  { category: "药食养方", series: "滋补系列", name: "九制黄精（即食）", target: "滋补伴手礼/日常轻养人群", spec: "150g×2袋", formula: "九华山有机黄精", intro: "0蔗糖，高端滋补品，甄选九华山有机黄精，采用古法九蒸九晒工艺，适合日常轻养及礼赠场景。", price: "", image: "images/zibu-xilie/jiuzhi-huangjing.jpg" },
  { category: "药食养方", series: "滋补系列", name: "茯苓糕", target: "健康零食/茶点人群", spec: "150g×2袋", formula: "粳米、茯苓粉等", intro: "0蔗糖，药食同源糕点产品，适合茶点、伴手礼及健康零食场景。", price: "", image: "images/zibu-xilie/fuling-gao.jpg" },
  { category: "药食养方", series: "滋补系列", name: "五黑丸", target: "营养轻食/办公室零食人群", spec: "150g×2袋", formula: "黑芝麻、黑豆、黑米、黑枸杞等", intro: "0蔗糖，黑色食材组合，适合日常营养补充、办公室零食及送礼。", price: "", image: "images/zibu-xilie/wuhei-wan.jpg" },
  { category: "药食养方", series: "轻养膳食系列", name: "五行馒头", target: "家庭早餐/轻养主食人群", spec: "冷冻/预包装，五种口味", formula: "面粉、中药粉、酵母等", intro: "药食同源配方思路下的日常轻养主食，适合家庭早餐、健康餐搭配及员工福利场景。", price: "", image: "images/qingyang-shanshi/wuxing-mantou.jpg" },
  { category: "药食养方", series: "轻养膳食系列", name: "铁皮石斛八珍粉", target: "早餐/代餐辅助/办公室人群", spec: "15g×12袋", formula: "铁棍山药、薏仁、茯苓、莲子、燕麦、芡实、猴头菇、白扁豆、陈皮、红枣、铁皮石斛", intro: "便携膳食补充产品，适合早餐、代餐辅助及办公室健康食品场景。", price: "", image: "images/qingyang-shanshi/tiepi-shihu-bazhen-fen.jpg" },
  { category: "生活养方", series: "草本生活用品系列", name: "鼻安梦香枕", target: "睡前放松/卧室香养人群", spec: "枕套+内胆", formula: "枕套：绸缎；填充物：非遗合香珠（艾草、薰衣草、茉莉花、苍耳子、辛夷、白芷等）", intro: "以非遗合香珠为填充特色，搭配绸缎枕套，适合睡前放松、卧室香养及礼赠场景。", price: "", image: "images/caoben-shenghuo-yongpin/bian-mengxiang-zhen.jpg" },
  { category: "生活养方", series: "草本生活用品系列", name: "草本植萃药香梳", target: "日常梳理/东方香养人群", spec: "盒装", formula: "何首乌、侧柏叶、苦参、丹参等", intro: "草本植萃香梳，以何首乌、侧柏叶等东方草本意象为特色，适合日常梳理、伴手礼及中式生活方式场景。", price: "", image: "images/caoben-shenghuo-yongpin/caoben-zhicui-yaoxiang-shu.jpg" },
  { category: "生活养方", series: "草本生活用品系列", name: "七子白洁面皂", target: "日常清洁/草本洗护人群", spec: "单块装/套装（待定）", formula: "白僵蚕、白芨、白茯苓、白芍、白蔹、白芷、白术", intro: "草本洁面皂，定位温和清洁与东方草本护肤场景，适合日常洗护、旅行便携及礼盒搭配。", price: "", image: "images/caoben-shenghuo-yongpin/qizi-bai-jiemian-zao.jpg" },
  { category: "生活养方", series: "草本生活用品系列", name: "草本合香珠", target: "香枕填充/衣柜香氛/礼赠人群", spec: "盒装", formula: "20味中草药搭配组合", intro: "以多味草本香材搭配，香气层次丰富，适合香枕填充、衣柜香氛及东方香养场景。", price: "", image: "images/caoben-shenghuo-yongpin/caoben-hexiang-zhu.jpg" },
  { category: "御养系列", series: "参石御养茶礼盒系列", name: "参石御养茶·礼盒装", target: "高端滋补茶礼/节日礼赠人群", spec: "12罐茶礼盒装", formula: "人参、石斛", intro: "人参与石斛双元素组合，定位高端滋补茶礼，适合节日礼赠、客户关怀及家庭养生场景。", price: "", image: "images/canshi-yuyang-lihe/canshi-yuyang-cha-lihe-zhuang.jpg" },
  { category: "御养系列", series: "参石御养茶礼盒系列", name: "参石御养茶·商务礼", target: "商务拜访/高端客户关怀人群", spec: "12罐茶+便携养生杯礼盒装", formula: "人参、石斛", intro: "人参与石斛双元素组合，搭配便携养生杯，适合商务拜访、重要客户关怀及企业礼赠场景。", price: "", image: "images/canshi-yuyang-lihe/canshi-yuyang-cha-shangwu-li.jpg" },
  { category: "线下合作", series: "线下体验与活动合作", name: "线下体验店合作", target: "院内专柜/商超/社区/合作门店", spec: "/", formula: "/", intro: "面向中医馆、理疗馆、药店、商超、社区等的线下合作模式，提供产品展示与购买、试饮服务、产品培训等服务。", price: "", image: "images/xianxia-hezuo/xianxia-tiyandian-hezuo.jpg" },
  { category: "线下合作", series: "线下体验与活动合作", name: "企业健康活动支持", target: "企业客户/员工健康关怀", spec: "/", formula: "/", intro: "面向企业客户提供健康活动支持，可结合体质辨识、产品试饮、专家科普及员工关怀活动。", price: "", image: "images/xianxia-hezuo/qiye-jiankang-huodong-zhichi.jpg" },
  { category: "线下合作", series: "线下体验与活动合作", name: "中医养生市集活动合作", target: "节令活动/健康市集/品牌快闪", spec: "/", formula: "/", intro: "适合节令养生、健康市集、品牌快闪等场景，强化产品体验与线下转化。", price: "", image: "images/xianxia-hezuo/zhongyi-yangsheng-shiji-huodong-hezuo.jpg" },
  { category: "企业定制产品", series: "主题定制礼盒系列", name: "企业养生礼定制", target: "企业福利/节日关怀/客户维护", spec: "礼盒装（内容可定制）", formula: "按企业福利主题搭配药食养方、生活养方及御养礼品", intro: "面向企业员工福利、节日关怀及客户维护的组合型礼盒，可根据预算和场景灵活搭配。", price: "", image: "images/qiye-dingzhi/qiye-fuli-lihe.jpg" },
  { category: "企业定制产品", series: "主题定制礼盒系列", name: "健康关爱礼定制", target: "女性关爱/睡眠舒缓/节令养生等主题", spec: "礼盒装（内容可定制）", formula: "按主题需求搭配代茶饮、草本生活用品及御养礼品", intro: "面向女性关爱、节令养生、睡眠舒缓等主题场景的定制礼盒，可结合活动主题、预算和受众灵活配置。", price: "", image: "images/qiye-dingzhi/zhuti-guanai-lihe.jpg" }
];

const categories = ["全部", "药食养方", "生活养方", "御养系列", "线下合作", "企业定制产品"];
const seriesList = ["全部", "九种体质茶系列", "功能小罐茶系列", "国民经典饮品系列", "养生隐茶杯系列", "滋补系列", "轻养膳食系列", "草本生活用品系列", "参石御养茶礼盒系列", "线下体验与活动合作", "主题定制礼盒系列"];
const visibleSeriesList = seriesList;
const sceneList = ["全部", "办公室茶饮", "家庭常备", "节令养护", "女性关爱", "餐后清爽", "商务礼赠", "睡前香养", "轻养膳食"];

const categoryIntros = {
  "药食养方": "代茶饮、经典饮品、滋补茶点与轻养膳食，覆盖办公、家庭、节令和礼赠场景。",
  "生活养方": "以草本香养、日常洗护与东方生活用品，延展中式健康生活方式。",
  "御养系列": "面向高端客户关怀、节日礼赠与商务拜访的御养茶礼方案。",
  "线下合作": "支持线下体验店、企业活动与中医养生市集，强化产品体验和品牌展示。",
  "企业定制产品": "围绕员工福利、主题关爱和客户维护，提供灵活搭配的定制礼盒。"
};

const featuredSeries = [
  { category: "全部", series: "九种体质茶系列", title: "九种体质茶", image: "images/common/series-banner-1.jpg", text: "一人一方·辨体调养" },
  { category: "全部", series: "国民经典饮品系列", title: "经典国民饮", image: "images/common/series-banner-2.jpg", text: "酸梅汤、五红汤、秋梨汤、姜枣茶，贴近日常饮用场景。" },
  { category: "企业定制产品", series: "主题定制礼盒系列", title: "企业定制礼盒", image: "images/common/series-banner-3.jpg", text: "围绕员工福利、节日关怀和客户维护灵活搭配。" }
];

const constitutionTeaOrder = [
  ["平和质", "苹果黄芪茶"],
  ["阳虚质", "甘草干姜茶"],
  ["阴虚质", "百合玉竹茶"],
  ["气虚质", "参芪大枣茶"],
  ["痰湿质", "茯苓陈皮茶"],
  ["湿热质", "薏仁荷叶茶"],
  ["血瘀质", "当归玫瑰茶"],
  ["气郁质", "玫瑰佛手茶"],
  ["特禀质", "黄芪紫苏茶"]
];

const state = {
  category: "全部",
  series: "全部",
  scene: "全部",
  keyword: ""
};

const getElement = (id) => document.getElementById(id);

function getScenes(product) {
  const text = [product.name, product.target, product.intro, product.series, product.category].join(" ");
  const scenes = [];
  if (/办公室|上班|加班|久坐|出差|工作|夜班/.test(text)) scenes.push("办公室茶饮");
  if (/家庭|常备|早餐|茶点/.test(text)) scenes.push("家庭常备");
  if (/节令|秋冬|夏季|换季|节日|端午|中秋|春节/.test(text)) scenes.push("节令养护");
  if (/女性|红颜|气色|关爱/.test(text)) scenes.push("女性关爱");
  if (/餐后|聚餐|应酬|清爽|轻负担/.test(text)) scenes.push("餐后清爽");
  if (/商务|高端|客户|礼赠|礼盒|伴手礼/.test(text)) scenes.push("商务礼赠");
  if (/睡前|卧室|香枕|香养|衣柜/.test(text)) scenes.push("睡前香养");
  if (/膳食|主食|代餐|馒头|早餐|粉/.test(text)) scenes.push("轻养膳食");
  return scenes.length ? scenes : ["日常轻养"];
}

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
  const systemCategories = ["药食养方", "生活养方", "御养系列", "线下合作", "企业定制产品"];
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
      if (card.dataset.category === "线下合作") {
        getElement("experience").scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (card.dataset.category === "企业定制产品") {
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
      <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null;this.src='images/common/product-placeholder.jpg'">
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
  const teaProducts = products.filter((product) => product.series === "九种体质茶系列");
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
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/common/product-placeholder.jpg'">
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

function getFilteredProducts() {
  const keyword = state.keyword.trim().toLowerCase();
  return products.filter((product) => {
    const categoryMatched = state.category === "全部" || product.category === state.category;
    const seriesMatched = state.series === "全部" || product.series === state.series;
    const scenes = getScenes(product);
    const sceneMatched = state.scene === "全部" || scenes.includes(state.scene);
    const keywordText = [product.name, product.spec, product.formula, product.intro, product.target, product.series, product.category, scenes.join(" ")].join(" ").toLowerCase();
    return categoryMatched && seriesMatched && sceneMatched && (!keyword || keywordText.includes(keyword));
  });
}

function sortProductsForDisplay(items) {
  const constitutionTeas = items.filter((product) => product.series === "九种体质茶系列");
  const gingerJujubeTea = items.filter((product) => product.name === "姜枣茶");
  if (!constitutionTeas.length && !gingerJujubeTea.length) return items;

  const remainingProducts = items.filter((product) => product.series !== "九种体质茶系列" && product.name !== "姜枣茶");
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
  getElement("productCount").textContent = filtered.length;
  empty.hidden = filtered.length > 0;

  grid.innerHTML = filtered.map((product) => {
    const isService = product.spec === "/" && product.formula === "/";
    const spec = product.spec && product.spec !== "/" && !isService ? `<p><b>规格：</b>${product.spec}</p>` : "";
    const hideTarget = isService || product.category === "企业定制产品";
    const target = !hideTarget ? `<p><b>推荐体质/人群：</b>${product.target}</p>` : "";
    const formula = product.formula && product.formula !== "/" && !isService ? `
      <details class="formula-line">
        <summary><b>配料：</b><span>查看详细</span></summary>
        <p>${product.formula}</p>
      </details>
    ` : "";

    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/common/product-placeholder.jpg'">
        </div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <div class="info-list">
            ${target}
            ${spec}
            ${formula}
          </div>
          <p class="intro">${product.intro}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderConstitutionCards() {
  if (!getElement("constitutionGrid")) return;
  const items = [
    ["苹果黄芪茶", "平和质"],
    ["甘草干姜茶", "阳虚质"],
    ["百合玉竹茶", "阴虚质"],
    ["参芪大枣茶", "气虚质"],
    ["茯苓陈皮茶", "痰湿质"],
    ["薏仁荷叶茶", "湿热质"],
    ["当归玫瑰茶", "血瘀质"],
    ["玫瑰佛手茶", "气郁质"],
    ["黄芪紫苏茶", "特禀质"]
  ];

  getElement("constitutionGrid").innerHTML = items.map(([name, type]) => (
    `<article class="constitution-card"><strong>${name}</strong><span>${type}</span></article>`
  )).join("");
}

function update() {
  renderChips(getElement("categoryFilters"), categories, state.category, (value) => {
    state.category = value;
    if (value === "全部") state.series = "全部";
    update();
  });

  renderChips(getElement("seriesFilters"), visibleSeriesList, state.series, (value) => {
    state.series = value;
    update();
  });

  renderChips(getElement("sceneFilters"), sceneList, state.scene, (value) => {
    state.scene = value;
    update();
  });

  renderProducts();
}

function bindEvents() {
  const protectedImageSelector = "img, .hero-slide, .series-slide, .product-image, .tea-image, .scene-banner";
  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest(protectedImageSelector)) {
      event.preventDefault();
    }
  });
  document.addEventListener("dragstart", (event) => {
    if (event.target.closest(protectedImageSelector)) {
      event.preventDefault();
    }
  });

  const filterPanel = getElement("productFilterPanel");
  const filterToggle = getElement("filterToggle");
  const searchInput = getElement("searchInput");
  const mobileSearchPlaceholder = "搜索产品、体质或场景";
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
    renderProducts();
  });

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
