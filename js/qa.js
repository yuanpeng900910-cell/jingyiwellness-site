const filterTabs = ['全部', '品牌与产品', '茶饮怎么选', '草本生活', '购买与注意事项'];

const teaConstitutionCards = [
  { product: '苹果黄芪茶', constitution: '平和体质' },
  { product: '参芪大枣茶', constitution: '气虚体质' },
  { product: '甘草干姜茶', constitution: '阳虚体质' },
  { product: '百合玉竹茶', constitution: '阴虚体质' },
  { product: '茯苓陈皮茶', constitution: '痰湿体质' },
  { product: '薏仁荷叶茶', constitution: '湿热体质' },
  { product: '当归玫瑰茶', constitution: '血瘀体质' },
  { product: '玫瑰佛手茶', constitution: '气郁体质' },
  { product: '黄芪紫苏茶', constitution: '特禀体质' }
];

const qaItems = [
  { section: '品牌与产品', q: '京颐养方是什么品牌？', a: '京颐养方是合肥京东方医院主动健康业务下的健康产品与服务品牌，围绕药食同源、草本生活、节气养生和健康礼赠等方向，提供更适合日常生活的东方轻养方案。', tag: '品牌', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '京颐养方和普通养生品牌有什么区别？', a: '京颐养方更强调医院主动健康场景、东方草本生活方式和日常可坚持。产品不是单纯卖茶或卖礼品，而是围绕体质、场景、睡眠、香养、礼赠等生活需求，提供更轻量、更日常的养生选择。', tag: '定位', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '京颐养方产品是不是药品？', a: '不是。京颐养方产品主要是代茶饮、草本生活用品和日常轻养产品，不能替代药品或医疗治疗。如果有明确疾病、正在服药或身体不适，建议先咨询医生。', tag: '说明', groups: ['品牌与产品', '购买与注意事项'] },
  { section: '品牌与产品', q: '为什么强调“轻养”？', a: '“轻养”不是大补，也不是短期突击，而是把养生变成每天都能坚持的小习惯，比如喝一杯草本茶、使用草本香枕、梳理头皮、顺应季节调整生活方式。', tag: '理念', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '京颐养方适合年轻人吗？', a: '适合。很多产品围绕办公室、熬夜、下午茶、聚餐后、伴眠、香养等真实生活场景设计，更强调轻量、便携、温和和仪式感。', tag: '人群', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '为什么包装不像传统中药？', a: '京颐养方希望把东方草本养生做得更现代、更日常，既保留东方文化感，也更符合年轻人、办公室和礼赠场景的审美。', tag: '设计', groups: ['品牌与产品'] },

  { section: '茶饮怎么选', q: '不知道怎么选产品怎么办？', a: '可以先按场景选择。日常轻养可以看轻养小罐茶；想按体质选择可以看辨体调养茶；喜欢经典草本饮品可以看国民经典饮；会议、办公室和接待场景可以选择隐茶杯。', tag: '怎么选', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '第一次购买推荐哪一类？', a: '如果是自己日常喝，可以从轻养小罐茶或苹果黄芪茶开始；如果是送礼，可以选择国民经典饮组合或辨体调养茶组合；如果用于会议、办公室、企业茶歇，可以选择隐茶杯。', tag: '首购', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '轻养小罐茶适合哪些人？', a: '轻养小罐茶适合办公室、加班、下午茶和日常轻养场景。红颜茶偏气色感，轻湿茶偏清爽轻负担，元气茶偏日常元气感，熬夜茶偏熬夜后的轻陪伴。', tag: '小罐茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '红颜茶适合什么人？', a: '适合关注气色、经常熬夜、喜欢花香口感、注重日常轻养的用户。建议作为办公室下午茶或女性日常轻养茶饮。', tag: '红颜茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '轻湿茶适合什么人？', a: '适合久坐办公室、饮食偏油腻、喜欢清爽谷物口感、想要饭后轻饮的人群。', tag: '轻湿茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '元气茶适合什么人？', a: '适合工作节奏快、容易疲惫、喜欢温润草本口感、想要日常元气感茶饮的人群。', tag: '元气茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '熬夜茶适合什么人？', a: '适合经常晚睡、加班、夜生活较多、喜欢清润口感的人群。它更适合作为熬夜后的日常轻饮陪伴，不是治疗产品。', tag: '熬夜茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '辨体调养茶怎么选？', a: '辨体调养茶围绕九种体质设计。可以先通过体质辨识了解自己的体质方向，再选择对应茶饮。如果暂时不清楚体质，可以从苹果黄芪茶等基础款开始。', tag: '体质', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '九款辨体调养茶分别对应什么体质？', a: '可按下方卡片快速对应选择：', tag: '九种体质', groups: ['茶饮怎么选'], cards: teaConstitutionCards },
  { section: '茶饮怎么选', q: '国民经典饮适合什么场景？', a: '国民经典饮更偏大众熟悉的传统草本饮品。酸梅汤适合饭后、聚餐后和夏天饮用；秋梨汤适合秋冬、空调房、用嗓多的人群；五红饮适合女性日常甜润热饮；姜枣茶适合秋冬、雨天、空调房等想喝暖饮的场景。', tag: '经典饮', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '酸梅汤适合什么场景？', a: '酸梅汤酸甜清爽，适合饭后、夏天、火锅烧烤后、聚餐后饮用，口感接受度比较高。', tag: '酸梅汤', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '秋梨汤适合什么场景？', a: '秋梨汤清润甘甜，适合秋冬、空调房、熬夜后、说话较多的人群作为日常清润茶饮。', tag: '秋梨汤', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '五红饮适合什么人？', a: '五红饮甜润温和，适合女性日常、下午茶、办公室和秋冬热饮场景。', tag: '五红饮', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '姜枣茶适合什么场景？', a: '姜枣茶有姜香和枣甜，适合秋冬、雨天、空调房和喜欢热饮的人群。', tag: '姜枣茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '隐茶杯和小罐茶有什么区别？', a: '小罐茶更适合煮泡或长时间焖泡，一罐可以作为当天饮用量；隐茶杯主打冲水即饮，更适合会议、办公室、接待、宴请和茶歇场景。', tag: '隐茶杯', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '隐茶杯有哪些产品？', a: '隐茶杯包括养元茶、清和茶、葛花解酲汤，规格为10杯/桶，适合办公、会议、宴请和居家场景。', tag: '隐茶杯', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '小罐茶怎么冲泡？', a: '轻养小罐茶、辨体调养茶、国民经典饮建议使用沸水煮泡或焖泡5分钟以上，让草本、果干、根茎类原料的香气和风味充分释放。', tag: '冲泡', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '一罐可以喝多久？', a: '一罐建议作为当天饮用量，可以反复续水饮用，一般可以喝一天。味道变淡后即可更换，不建议隔夜饮用。', tag: '饮用量', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '可以冷泡吗？', a: '更建议热泡或煮泡。部分产品热泡后可以放凉饮用，但不建议直接冷泡，因为草本、果干、根茎类原料需要热水更好释放风味。', tag: '饮用', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '可以加蜂蜜或糖吗？', a: '可以根据个人口味少量添加，但建议先喝原味。部分产品本身已有红枣、罗汉果、苹果干等自然清甜，不建议额外加太多糖。', tag: '口味', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '可以天天喝吗？', a: '普通健康成年人可以作为日常茶饮适量饮用，一般建议根据个人体质和饮用感受选择。特殊人群或正在服药人群，建议先咨询医生。', tag: '频率', groups: ['茶饮怎么选', '购买与注意事项'] },
  { section: '茶饮怎么选', q: '为什么不建议隔夜喝？', a: '草本茶饮冲泡后放置时间过长，口感和卫生状态都会下降。建议当天冲泡当天饮用完，避免隔夜饮用。', tag: '提醒', groups: ['茶饮怎么选'] },

  { section: '草本生活', q: '鼻安梦香枕怎么用？', a: '鼻安梦香枕可以放在床头、枕边或颈侧使用，也可以作为草本伴眠产品放在睡眠环境中。初次使用建议先通风散味，从短时间开始逐步适应。', tag: '香枕', groups: ['草本生活'] },
  { section: '草本生活', q: '鼻安梦香枕可以替代治疗鼻炎或失眠吗？', a: '不能。它属于日常草本香养产品，主要用于营造舒缓、放松的睡眠氛围，不能替代药品或医疗治疗。', tag: '说明', groups: ['草本生活', '购买与注意事项'] },
  { section: '草本生活', q: '合香珠手串是什么？', a: '合香珠手串是以东方草本香养为核心的生活方式产品，将多种香材合制成珠，适合佩戴、盘玩和日常香气陪伴。', tag: '合香珠', groups: ['草本生活'] },
  { section: '草本生活', q: '合香珠为什么香味不浓？', a: '合香珠不是香水，也不是工业香精，香气更偏自然、温和、内敛。它强调近距离的草本香气陪伴，而不是强烈扩香。', tag: '合香珠', groups: ['草本生活'] },
  { section: '草本生活', q: '合香珠可以碰水吗？', a: '不建议碰水。洗手、洗澡、运动出汗时建议取下，避免受潮变形。长期不佩戴时，可以放在密封袋或养香盒中保存。', tag: '合香珠', groups: ['草本生活'] },
  { section: '草本生活', q: '药香梳和普通梳子有什么区别？', a: '药香梳融合草本香养和日常梳理体验，除了梳头，也强调头部放松、头皮梳理和东方生活方式感。它不是生发产品，不做医疗功效承诺。', tag: '药香梳', groups: ['草本生活'] },
  { section: '草本生活', q: '药香梳怎么使用？', a: '建议头发清洁干爽时使用，顺着头皮轻柔梳理，每次几分钟即可，不要用力刮擦。使用后用干净软布轻擦，阴凉干燥保存。', tag: '药香梳', groups: ['草本生活'] },

  { section: '购买与注意事项', q: '茶饮产品保质期多久？', a: '茶饮系列保质期统一为12个月，建议放在阴凉、干燥、避光处保存，避免高温、潮湿和阳光直晒。', tag: '保质期', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '备货周期多久？', a: '常规备货周期约3周。企业采购、团购或定制类需求，建议提前沟通数量、交付时间和包装需求。', tag: '备货', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '茶饮产品怎么购买？', a: '轻养小罐茶、辨体调养茶、国民经典饮均为两盒起售，两盒团购价49.9元。具体库存和购买方式以实际咨询为准。', tag: '购买', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '适合送礼或企业福利吗？', a: '适合。京颐养方产品兼具健康关怀、东方文化感和日常实用性，适合企业员工福利、客户伴手礼、会议茶歇、健康活动和节日礼赠。', tag: '礼赠', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '可以做团购或定制吗？', a: '可以根据实际采购数量和企业需求沟通，建议提前确认组合、数量、备货周期、交付时间、开票和定制需求。', tag: '团购', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '孕妇、儿童、慢病人群可以使用吗？', a: '孕妇、哺乳期、儿童、慢病人群、正在服药人群以及对草本原料或气味敏感的人群，建议先咨询医生或专业人士后再选择。', tag: '人群', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '对草本气味敏感怎么办？', a: '如果对草本气味敏感，建议先短时间体验。使用香枕、合香珠、药香梳等草本生活产品时，如有不适，应停止使用并保持通风。', tag: '敏感', groups: ['购买与注意事项', '草本生活'] },
  { section: '购买与注意事项', q: '产品可以替代药物或治疗吗？', a: '不能。京颐养方产品为日常草本轻养和生活方式产品，不替代药品或医疗治疗。', tag: '提示', groups: ['购买与注意事项'] }
];

const qaList = document.getElementById('qaList');
const qaEmpty = document.getElementById('qaEmpty');
const qaSearchInput = document.getElementById('qaSearchInput');
const qaCategoryFilters = document.getElementById('qaCategoryFilters');
const qaResultCount = document.getElementById('qaResultCount');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

let activeCategory = '全部';

function renderTeaConstitutionCards(cards) {
  return `
    <div class="tea-constitution-grid" aria-label="九款辨体调养茶体质对应表">
      ${cards.map((card) => `
        <article class="tea-constitution-card">
          <h4>${card.product}</h4>
          <p><strong>对应体质：</strong>${card.constitution}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function toParagraphs(text) {
  return text.split('\n').map((line) => `<p>${line}</p>`).join('');
}

function renderAnswer(item) {
  return `${toParagraphs(item.a)}${item.cards ? renderTeaConstitutionCards(item.cards) : ''}`;
}

function renderCategoryFilters() {
  qaCategoryFilters.innerHTML = filterTabs.map((category) => (
    `<button class="qa-chip ${category === activeCategory ? 'active' : ''}" data-category="${category}" type="button">${category}</button>`
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

  qaList.innerHTML = Object.entries(grouped).map(([sectionName, items]) => `
    <article class="qa-group" id="qa-${sectionName}">
      <h2 class="qa-group-title">${sectionName}</h2>
      ${items.map((item) => `
        <details class="qa-item">
          <summary>
            <span class="qa-tag">${item.tag}</span>
            <span class="qa-question">${item.q}</span>
          </summary>
          <div class="qa-answer">${renderAnswer(item)}</div>
        </details>
      `).join('')}
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

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

renderCategoryFilters();
renderFaq();
