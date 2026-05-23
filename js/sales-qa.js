const filterTabs = ['全部', '买前必看', '茶饮产品', '草本生活', '送礼团购', '禁忌售后'];

const qaItems = [
  { section: '品牌Q&A', q: '京颐养方是什么品牌？', a: '京颐养方是合肥京东方医院主动健康业务下的健康产品与服务品牌。\n品牌围绕药食同源、草本生活与健康礼赠场景，提供更日常的东方轻养方案。', tag: '品牌', groups: ['买前必看'] },
  { section: '品牌Q&A', q: '京颐养方做的是什么业务？', a: '不是单一卖货。\n品牌在做产品体系、企业健康场景、线下体验和礼赠方案，强调可持续的日常健康管理。', tag: '品牌', groups: ['买前必看'] },
  { section: '品牌Q&A', q: '京颐养方和普通养生品牌有什么区别？', a: '核心差异是有医院场景基础、有中医科和健康管理资源，并在真实企业和社区场景落地。\n同时强调合规表达，不把产品包装成“治病神器”。', tag: '品牌', groups: ['买前必看', '禁忌售后'] },
  { section: '品牌Q&A', q: '京颐养方的品牌主张是什么？', a: '统一表达可用：“京医古法，颐养东方。”\n茶饮场景可补充：“古方有味，四时有养。”\n体质茶可补充：“一人一方，辨体调养。”', tag: '品牌', groups: ['买前必看'] },

  { section: '产品体系Q&A', q: '京颐养方有哪些产品体系？', a: '覆盖药食养方、生活养方、节气养生、定制礼赠、健康场景共建五大体系。\n销售时建议先问客户场景，再推荐产品组合。', tag: '品牌', groups: ['买前必看'] },
  { section: '产品体系Q&A', q: '京颐养方产品是不是药品？', a: '不是药品，不替代药物或医疗服务。\n定位是日常草本轻养和健康生活方式产品。', tag: '合规', groups: ['买前必看', '禁忌售后'] },
  { section: '产品体系Q&A', q: '不知道怎么选产品时怎么做？', a: '先问场景（自饮/送礼/企业福利/会议茶歇）。\n再问人群（女性日常、加班人群、秋冬暖饮、商务客户等）。\n最后按预算和交付周期给出2-3个组合。', tag: '茶饮', groups: ['买前必看', '送礼团购'] },
  { section: '产品体系Q&A', q: '茶饮系列保质期多久？', a: '轻养小罐茶、国民经典饮、辨体调养茶、隐茶杯等茶饮系列保质期统一为12个月。', tag: '售后', groups: ['买前必看', '禁忌售后'] },
  { section: '产品体系Q&A', q: '备货周期多久？', a: '常规备货周期约3周。\n团购、企业定制、大批量采购建议提前沟通数量与交付时间。', tag: '团购', groups: ['买前必看', '送礼团购'] },

  { section: '轻养小罐茶系列Q&A', q: '这四款茶和普通花茶有什么区别？', a: '它不是单一花茶或单一茶叶，而是围绕不同生活状态做草本复配。\n一罐一泡、便携即饮，适合办公室、下午茶、出差和年轻化轻养场景。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '轻养小罐茶系列Q&A', q: '红颜茶适合什么人？', a: '适合关注气色、经常熬夜、喜欢花香口感、注重日常轻养颜的人群。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '轻养小罐茶系列Q&A', q: '轻湿茶适合什么人？', a: '适合久坐办公室、饮食偏油腻、容易感觉身体沉重、喜欢清爽谷物口感的人群。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '轻养小罐茶系列Q&A', q: '元气茶适合什么人？', a: '适合工作节奏快、容易疲惫、需要日常元气感补充、喜欢温润草本口感的人群。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '轻养小罐茶系列Q&A', q: '熬夜茶适合什么人？', a: '适合经常晚睡、加班党、夜生活较多、喜欢清润口感的人群。\n可用表达：“熬夜后的轻陪伴”。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '轻养小罐茶系列Q&A', q: '一罐可以泡几次？', a: '建议热水焖泡后饮用，可反复续水。\n通常一罐可持续饮用半天左右，按个人口感调整。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '轻养小罐茶系列Q&A', q: '需要煮吗？', a: '不需要。\n直接热水冲泡即可，适合办公室、会议、出差、居家场景。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '轻养小罐茶系列Q&A', q: '为什么包装上只有一个大字？', a: '这是系列视觉识别语言。\n“颜”代表红颜茶，“湿”代表轻湿茶，“气”代表元气茶，“熬”代表熬夜茶。', tag: '品牌', groups: ['茶饮产品'] },
  { section: '轻养小罐茶系列Q&A', q: '第一次喝推荐什么组合？', a: '可推荐“元气清润组合”：红颜茶+轻湿茶。\n也可推荐“加班续航组合”：元气茶+熬夜茶。', tag: '团购', groups: ['茶饮产品', '送礼团购'] },

  { section: '辨体调养茶系列Q&A', q: '这九款茶是什么产品？', a: '围绕中医九种体质思路开发的辨体调养茶。\n每款对应一种体质方向，帮助用户根据状态选择日常茶饮。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '辨体调养茶系列Q&A', q: '和普通养生茶有什么区别？', a: '普通养生茶多按口味或单一场景区分；\n辨体调养茶强调“先辨体，再选茶”，按体质特点设计。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '辨体调养茶系列Q&A', q: '不知道自己是什么体质，怎么选？', a: '可先通过体质辨识工具了解主导体质。\n若没有明显偏向，可先从苹果黄芪茶等基础款开始。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '辨体调养茶系列Q&A', q: '一天喝几罐合适？', a: '一般建议每日1罐即可。\n不建议一次大量饮用，也不建议一天同时喝多种体质茶。', tag: '禁忌', groups: ['茶饮产品', '禁忌售后'] },
  { section: '辨体调养茶系列Q&A', q: '能不能几款一起泡？', a: '不建议随意混泡。\n建议一次一罐、按需选择，做组合时按周期轮换。', tag: '禁忌', groups: ['茶饮产品', '禁忌售后'] },
  { section: '辨体调养茶系列Q&A', q: '适合做礼盒吗？', a: '适合。\n比普通茶礼更有“健康关怀”和“专属感”，适配企业福利、客户礼赠等。', tag: '团购', groups: ['茶饮产品', '送礼团购'] },
  { section: '辨体调养茶系列Q&A', q: '销售人员一句话怎么介绍？', a: '“京颐养方辨体调养茶依托中医体质调养思路打造，不是普通养生茶，而是根据九种体质特点，一人一方，辨体调养。”', tag: '合规', groups: ['茶饮产品', '买前必看'] },

  { section: '国民经典饮系列Q&A', q: '国民经典饮系列是什么？', a: '基于传统饮食文化打造的草本代茶饮系列。\n让大众熟悉的经典配方更方便进入现代生活。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '国民经典饮系列Q&A', q: '和九种体质茶有什么区别？', a: '九种体质茶更偏辨体调养；国民经典饮更偏经典场景饮用。\n一个更个性化，一个更大众化。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '国民经典饮系列Q&A', q: '酸梅汤主打什么？', a: '传统酸梅汤风味，酸甜清爽。\n适合饭后、夏天、火锅烧烤后、聚餐后饮用。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '国民经典饮系列Q&A', q: '秋梨汤主打什么？', a: '清润梨香，温和甘甜。\n适合秋冬、空调房、熬夜后、说话较多人群日常饮用。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '国民经典饮系列Q&A', q: '五红饮主打什么？', a: '红枣、红豆、枸杞等经典红色食材搭配，甜润温和。\n适合女性日常、下午茶、办公室和秋冬饮用。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '国民经典饮系列Q&A', q: '姜枣茶主打什么？', a: '姜香与枣甜融合，温暖顺口。\n适合秋冬、雨天、空调房、办公室热饮场景。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '国民经典饮系列Q&A', q: '第一次买怎么选？', a: '夏天和饭后选酸梅汤；秋冬清润选秋梨汤；女性日常选五红饮；秋冬暖饮选姜枣茶。', tag: '买前', groups: ['茶饮产品', '买前必看'] },
  { section: '国民经典饮系列Q&A', q: '四款组合怎么推荐？', a: '可命名“国民经典饮四季组合”。\n覆盖清爽、清润、甜润、温暖四种场景。', tag: '团购', groups: ['茶饮产品', '送礼团购'] },

  { section: '养生隐茶杯系列Q&A', q: '隐茶杯是什么？', a: '面向办公、会议、宴请、居家场景的便携式草本茶饮。\n草本配方预置杯中，冲水即饮。', tag: '茶饮', groups: ['茶饮产品'] },
  { section: '养生隐茶杯系列Q&A', q: '和小罐茶有什么区别？', a: '小罐茶强调一罐一泡与精致感；\n隐茶杯强调杯装便携、即泡即饮，更适合会议和接待。', tag: '茶饮', groups: ['茶饮产品', '买前必看'] },
  { section: '养生隐茶杯系列Q&A', q: '养元茶适合什么场景？', a: '适合办公续航、日常滋养感和会议茶饮。\n建议表达“元气感、日常轻养”，避免医疗化表述。', tag: '合规', groups: ['茶饮产品', '禁忌售后'] },
  { section: '养生隐茶杯系列Q&A', q: '清和茶适合什么场景？', a: '适合清爽轻饮、饭后、办公室和用嗓较多人群。\n建议表达“清爽、清润、饭后轻饮”。', tag: '合规', groups: ['茶饮产品', '禁忌售后'] },
  { section: '养生隐茶杯系列Q&A', q: '葛花解酲汤适合什么场景？', a: '适合商务宴请、聚餐后、企业接待后的草本轻饮。\n避免使用“解酒神器”等绝对化话术。', tag: '合规', groups: ['茶饮产品', '禁忌售后'] },
  { section: '养生隐茶杯系列Q&A', q: '隐茶杯适合企业采购吗？', a: '非常适合。\n可作为会议茶歇、办公室茶饮、活动伴手礼、员工福利和商务接待饮品。', tag: '团购', groups: ['茶饮产品', '送礼团购'] },

  { section: '鼻安梦香枕Q&A', q: '鼻安梦香枕和普通枕头有什么区别？', a: '属于草本香养型生活产品，内部填充草本合香珠。\n通过草本气味营造舒缓放松环境，不是医疗器械或药品。', tag: '香养', groups: ['草本生活', '买前必看'] },
  { section: '鼻安梦香枕Q&A', q: '一定要枕着睡吗？', a: '不一定。\n也可放床头、颈侧、沙发旁或办公午休区作为草本伴眠使用。', tag: '香养', groups: ['草本生活'] },
  { section: '鼻安梦香枕Q&A', q: '为什么有草本味？', a: '因为内部填充草本合香珠，本身会有植物气味，不是香精味。\n首次使用可先通风散味再逐步适应。', tag: '售后', groups: ['草本生活', '禁忌售后'] },
  { section: '鼻安梦香枕Q&A', q: '能改善鼻敏感或睡眠吗？', a: '建议表达：可作为睡眠环境和鼻部舒适感的草本陪伴产品。\n但不能替代药物或医疗治疗。', tag: '合规', groups: ['草本生活', '禁忌售后'] },
  { section: '鼻安梦香枕Q&A', q: '哪些人慎用？', a: '孕妇、儿童、G6PD缺乏症人群、对草本气味敏感者慎用。\n如有不适应停止使用并保持通风。', tag: '禁忌', groups: ['草本生活', '禁忌售后'] },
  { section: '鼻安梦香枕Q&A', q: '怎么保养？', a: '枕套可清洗；内胆建议每周晾晒一次；内胆不可水洗；\n避免潮湿、高温和暴晒。', tag: '售后', groups: ['草本生活', '禁忌售后'] },

  { section: '合香珠手串Q&A', q: '合香珠是什么？', a: '合香珠由多种草本香材调和制作，用于佩戴、盘玩和日常香养陪伴。\n强调东方香文化与气味美学。', tag: '香养', groups: ['草本生活', '买前必看'] },
  { section: '合香珠手串Q&A', q: '和普通手串有什么区别？', a: '普通手串多强调材质装饰；\n合香珠更强调草本香气、古法工艺和佩戴时的陪伴感。', tag: '香养', groups: ['草本生活', '买前必看'] },
  { section: '合香珠手串Q&A', q: '香味会不会很浓？', a: '香气偏温和、内敛，不是香水式强扩散。\n更适合近距离闻香与安静氛围。', tag: '香养', groups: ['草本生活'] },
  { section: '合香珠手串Q&A', q: '可以盘玩吗？', a: '可以轻度盘玩。\n建议净手后短时盘玩，避免长时间大力揉搓。', tag: '售后', groups: ['草本生活', '禁忌售后'] },
  { section: '合香珠手串Q&A', q: '能见水吗？', a: '不建议见水。\n洗手、洗澡、运动出汗时建议取下，避免受潮变形。', tag: '禁忌', groups: ['草本生活', '禁忌售后'] },
  { section: '合香珠手串Q&A', q: '怎么保存？', a: '长期不佩戴时，放入养香盒或密封袋，置于阴凉干燥处。\n避免接触香水、精油和化学品。', tag: '售后', groups: ['草本生活', '禁忌售后'] },

  { section: '药香梳Q&A', q: '药香梳和普通梳子有什么区别？', a: '将草本香养理念与日常梳理结合。\n除了梳头，也强调头皮放松和东方香养体验。', tag: '香养', groups: ['草本生活', '买前必看'] },
  { section: '药香梳Q&A', q: '能生发、治白发吗？', a: '不能这样承诺。\n应表达为日常头皮护理与梳理按摩体验，不是治疗产品。', tag: '合规', groups: ['草本生活', '禁忌售后'] },
  { section: '药香梳Q&A', q: '适合什么人？', a: '适合熬夜、压力大、头皮紧绷、久坐办公及喜欢草本香养的人群。\n也适合作为礼物与企业伴手礼。', tag: '香养', groups: ['草本生活', '送礼团购'] },
  { section: '药香梳Q&A', q: '怎么使用？', a: '建议头发清洁干爽时使用，顺着头皮轻柔梳理。\n每次几分钟即可，不要用力刮擦。', tag: '售后', groups: ['草本生活', '禁忌售后'] },
  { section: '药香梳Q&A', q: '使用时要注意什么？', a: '忌水、忌油、避汗。\n湿发和使用精油时不要用香梳，避免摔打和长期潮湿。', tag: '禁忌', groups: ['草本生活', '禁忌售后'] },
  { section: '药香梳Q&A', q: '怎么保养？', a: '使用后用干净软布轻擦，阴凉干燥保存。\n长时间不用时放回包装盒，避免受潮暴晒。', tag: '售后', groups: ['草本生活', '禁忌售后'] },

  { section: '购买/团购/定制Q&A', q: '茶饮系列怎么起售？', a: '轻养小罐茶、国民经典饮、辨体调养茶均为两盒起售。\n两盒团购价为49.9元。', tag: '团购', groups: ['送礼团购', '买前必看'] },
  { section: '购买/团购/定制Q&A', q: '为什么两盒起售？', a: '更适合组合体验和团购配送，也方便按不同场景搭配饮用。', tag: '团购', groups: ['送礼团购'] },
  { section: '购买/团购/定制Q&A', q: '可以混搭吗？', a: '建议先按常规主推组合选择。\n如需混搭，可根据库存与团购政策另行确认。', tag: '团购', groups: ['送礼团购'] },
  { section: '购买/团购/定制Q&A', q: '团购适合哪些客户？', a: '适合企业员工福利、园区活动、团检伴手礼、客户维护、会议茶歇、节日礼赠等。', tag: '团购', groups: ['送礼团购'] },
  { section: '购买/团购/定制Q&A', q: '企业定制怎么介绍？', a: '可提供健康产品组合、定制包装、企业祝福卡、试饮活动和体质辨识联动。\n按预算、人数、周期和场景定制。', tag: '团购', groups: ['送礼团购'] },
  { section: '购买/团购/定制Q&A', q: '购买前要提醒什么？', a: '付款前确认：库存、收货地址、数量、组合内容、开票需求、定制需求和预计交付时间。', tag: '售后', groups: ['送礼团购', '禁忌售后'] },

  { section: '合规话术Q&A', q: '合规销售底线是什么？', a: '不讲治疗、不讲疗效、不讲保证。\n不替代药物，不替代医生，不使用绝对化医疗承诺。', tag: '合规', groups: ['禁忌售后', '买前必看'] },
  { section: '合规话术Q&A', q: '客户说“是不是智商税”怎么回应？', a: '可回应：不是神奇功效型产品。\n价值在于把草本食材、体质思路与日常场景做成更方便的健康习惯产品。', tag: '合规', groups: ['禁忌售后'] },
  { section: '合规话术Q&A', q: '孕妇、小孩能不能用？', a: '孕妇、哺乳期、儿童属于特殊人群，不建议自行使用功能性草本产品。\n建议先咨询医生或专业人士。', tag: '禁忌', groups: ['禁忌售后'] },
  { section: '合规话术Q&A', q: '正在吃药能不能喝？', a: '正在服药或有明确疾病的人群，建议先咨询医生。\n产品不能替代药物或治疗方案。', tag: '禁忌', groups: ['禁忌售后'] },
  { section: '合规话术Q&A', q: '能不能开票、定制、团购？', a: '可以按实际采购数量和企业需求沟通。\n建议先确认组合、数量、备货周期、交付时间和开票要求。', tag: '售后', groups: ['送礼团购', '禁忌售后'] }
];

const qaList = document.getElementById('qaList');
const qaEmpty = document.getElementById('qaEmpty');
const qaSearchInput = document.getElementById('qaSearchInput');
const qaCategoryFilters = document.getElementById('qaCategoryFilters');
const qaResultCount = document.getElementById('qaResultCount');

let activeCategory = '买前必看';

function toParagraphs(text) {
  return text.split('\n').map((line) => `<p>${line}</p>`).join('');
}

function renderCategoryFilters() {
  qaCategoryFilters.innerHTML = filterTabs.map((category) => (
    `<button class="sales-qa-chip ${category === activeCategory ? 'active' : ''}" data-category="${category}" type="button">${category}</button>`
  )).join('');
}

function getFilteredItems() {
  const keyword = qaSearchInput.value.trim().toLowerCase();
  return qaItems.filter((item) => {
    const matchCategory = activeCategory === '全部' || item.groups.includes(activeCategory);
    const matchKeyword = !keyword || `${item.section}${item.q}${item.a}${item.tag}`.toLowerCase().includes(keyword);
    return matchCategory && matchKeyword;
  });
}

function renderFaq() {
  const filtered = getFilteredItems();
  qaResultCount.textContent = `共匹配 ${filtered.length} 条问答`;

  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});

  const sections = Object.entries(grouped);
  let firstItemOpenUsed = false;

  qaList.innerHTML = sections.map(([sectionName, items]) => `
    <article class="sales-qa-group">
      <h2 class="sales-qa-group-title">${sectionName}</h2>
      ${items.map((item) => {
        const openAttr = !firstItemOpenUsed ? 'open' : '';
        firstItemOpenUsed = true;
        return `
          <details class="sales-qa-item" ${openAttr}>
            <summary>
              <span class="sales-qa-tag">${item.tag}</span>
              <span class="sales-qa-question">${item.q}</span>
            </summary>
            <div class="sales-qa-answer">${toParagraphs(item.a)}</div>
          </details>
        `;
      }).join('')}
    </article>
  `).join('');

  qaEmpty.hidden = filtered.length !== 0;
}

qaCategoryFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategoryFilters();
  renderFaq();
});

qaSearchInput.addEventListener('input', renderFaq);

renderCategoryFilters();
renderFaq();
