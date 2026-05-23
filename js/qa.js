const filterTabs = ['全部', '品牌与产品', '茶饮怎么选', '草本生活', '购买与注意事项'];

const featuredReads = [
  { title: '不知道怎么选？', subtitle: '先了解自己的日常状态与饮用场景', target: '不知道自己适合哪款怎么办？' },
  { title: '九种体质怎么理解？', subtitle: '不同体质，适合不同轻养方向', target: '辨体调养茶怎么选？' },
  { title: '第一次喝怎么开始？', subtitle: '从基础款和日常场景开始更容易', target: '第一次购买推荐怎么选？' },
  { title: '京颐养方是什么品牌？', subtitle: '了解品牌理念与产品体系', target: '京颐养方是什么品牌？' }
];

const sceneShortcuts = [
  { name: '办公室下午茶', target: '轻养小罐茶适合哪些人？' },
  { name: '熬夜加班', target: '轻养小罐茶适合哪些人？' },
  { name: '聚餐火锅后', target: '国民经典饮适合什么场景？' },
  { name: '秋冬热饮', target: '国民经典饮适合什么场景？' },
  { name: '女生日常轻养', target: '轻养小罐茶适合哪些人？' },
  { name: '企业会议茶歇', target: '第一次购买推荐怎么选？' },
  { name: '伴眠放松', target: '鼻安梦香枕怎么用？' },
  { name: '东方香养', target: '合香珠手串是什么？' }
];

const qaItems = [
  { section: '品牌与产品', q: '京颐养方是什么品牌？', a: '京颐养方是依托合肥京东方医院主动健康理念打造的东方草本生活方式品牌，围绕草本茶饮、草本香养、节气养生等方向，把传统东方养生智慧融入现代日常生活。', tag: '品牌', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '京颐养方和普通养生品牌有什么区别？', a: '京颐养方更强调“医院主动健康场景 + 东方草本生活方式”。\n产品不是单纯卖茶或卖礼品，而是围绕体质、场景、节气、睡眠、香养等生活需求，提供更日常、更轻量的养生选择。', tag: '区别', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '产品是药品吗？', a: '不是。京颐养方产品主要是代茶饮、草本生活用品和日常轻养产品，不能替代药品或医疗治疗。\n如有明确疾病、正在服药或身体不适，建议先咨询医生。', tag: '合规', groups: ['品牌与产品', '购买与注意事项'] },
  { section: '品牌与产品', q: '为什么强调“轻养”？', a: '“轻养”不是大补，也不是短期突击，而是把养生变成每天都能坚持的小习惯，比如喝一杯草本茶、使用草本香枕、梳理头皮、顺应节气调整生活方式。', tag: '理念', groups: ['品牌与产品'] },

  { section: '茶饮怎么选', q: '不知道自己适合哪款怎么办？', a: '可以先按日常场景选择。\n如果想日常基础轻养，可以从苹果黄芪茶或元气茶开始；如果是办公室、饭后、熬夜、秋冬热饮等场景，可以按对应系列选择。\n也可以通过体质辨识了解自己的体质方向。', tag: '怎么选', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '轻养小罐茶适合哪些人？', a: '轻养小罐茶适合办公室、加班、下午茶、日常轻养场景。\n红颜茶偏气色感，轻湿茶偏清爽轻负担，元气茶偏日常元气感，熬夜茶偏熬夜后的轻陪伴。', tag: '小罐茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '辨体调养茶怎么选？', a: '辨体调养茶围绕九种体质设计。\n苹果黄芪茶对应平和体质，参芪大枣茶对应气虚体质，甘草干姜茶对应阳虚体质，百合玉竹茶对应阴虚体质，茯苓陈皮茶对应痰湿体质，薏仁荷叶茶对应湿热体质，当归玫瑰茶对应血瘀体质，玫瑰佛手茶对应气郁体质，黄芪紫苏茶对应特禀体质。', tag: '体质茶', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '国民经典饮适合什么场景？', a: '国民经典饮更偏大众熟悉的传统草本饮品。\n酸梅汤适合饭后、聚餐后、夏天饮用；秋梨汤适合秋冬、空调房、用嗓多的人群；五红饮适合女性日常甜润热饮；姜枣茶适合秋冬、雨天、空调房等想喝暖饮的场景。', tag: '经典饮', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '隐茶杯和小罐茶有什么区别？', a: '隐茶杯主打“冲水即饮”，适合会议、办公室、接待、宴请、居家等场景；\n小罐茶更适合煮泡或长时间焖泡，一罐可以作为当天饮用量。', tag: '产品差异', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '第一次购买推荐怎么选？', a: '如果想日常喝，推荐轻养小罐茶或苹果黄芪茶；\n如果想送礼，推荐国民经典饮组合或辨体调养茶组合；\n如果用于会议、办公室、企业茶歇，推荐隐茶杯。', tag: '首次购买', groups: ['茶饮怎么选', '购买与注意事项'] },

  { section: '草本生活', q: '鼻安梦香枕怎么用？', a: '鼻安梦香枕可以放在床头、枕边或颈侧使用，也可以作为草本伴眠产品放在睡眠环境中。\n初次使用建议先通风散味，从短时间开始逐步适应。', tag: '香枕', groups: ['草本生活'] },
  { section: '草本生活', q: '鼻安梦香枕可以替代治疗鼻炎或失眠吗？', a: '不能。它属于日常草本香养产品，主要用于营造舒缓、放松的睡眠氛围，不能替代药品或医疗治疗。', tag: '说明', groups: ['草本生活', '购买与注意事项'] },
  { section: '草本生活', q: '合香珠手串是什么？', a: '合香珠手串是以东方草本香养为核心的生活方式产品，将多种香材合制成珠，适合佩戴、盘玩和日常香气陪伴。', tag: '合香珠', groups: ['草本生活'] },
  { section: '草本生活', q: '合香珠为什么香味不浓？', a: '合香珠不是香水，也不是工业香精，香气更偏自然、温和、内敛。\n它强调的是近距离的草本香气陪伴，而不是强烈扩香。', tag: '香气', groups: ['草本生活'] },
  { section: '草本生活', q: '药香梳和普通梳子有什么区别？', a: '药香梳融合草本香养和日常梳理体验，除了梳头，也强调头部放松、头皮梳理和东方生活方式感。\n它不是生发产品，不做医疗功效承诺。', tag: '药香梳', groups: ['草本生活'] },

  { section: '购买与注意事项', q: '茶饮产品保质期多久？', a: '茶饮系列保质期统一为12个月，建议放在阴凉、干燥、避光处保存，避免高温、潮湿和阳光直晒。', tag: '保质期', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '备货周期多久？', a: '常规备货周期为3周。\n企业采购、团购或定制类需求，建议提前沟通数量、交付时间和包装需求。', tag: '备货', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '茶饮产品怎么购买？', a: '轻养小罐茶、辨体调养茶、国民经典饮均为两盒起售，两盒团购价49.9元。\n具体库存和购买方式以实际咨询为准。', tag: '购买', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '隐茶杯规格是多少？', a: '隐茶杯规格为10杯/桶，主打冲水即饮，适合办公室、会议、宴请、居家等场景。', tag: '隐茶杯', groups: ['购买与注意事项', '茶饮怎么选'] },
  { section: '购买与注意事项', q: '适合送礼或企业福利吗？', a: '适合。京颐养方产品兼具健康关怀、东方文化感和日常实用性，适合企业员工福利、客户伴手礼、会议茶歇、健康活动和节日礼赠。', tag: '送礼', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '孕妇、儿童、慢病人群可以使用吗？', a: '孕妇、哺乳期、儿童、慢病人群、正在服药人群以及对草本原料敏感的人群，建议先咨询医生或专业人士后再选择。', tag: '特殊人群', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '为什么不建议隔夜饮用？', a: '草本茶饮冲泡后放置时间过长，口感和卫生状态都会下降。\n建议当天冲泡当天饮用完，避免隔夜饮用。', tag: '饮用建议', groups: ['购买与注意事项', '茶饮怎么选'] },

  { section: '茶饮怎么选', q: '小罐茶怎么冲泡？', a: '轻养小罐茶、辨体调养茶、国民经典饮建议使用沸水煮泡或焖泡5分钟以上，让草本、果干、根茎类原料的香气和风味充分释放。', tag: '冲泡', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '一罐可以喝多久？', a: '一罐建议作为当天饮用量，可反复续水饮用，一般可以喝一天。\n味道变淡后即可更换，不建议隔夜饮用。', tag: '饮用量', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '可以冷泡吗？', a: '更建议热泡或煮泡。部分产品热泡后可以放凉饮用，但不建议直接冷泡，因为草本、果干、根茎类原料需要热水更好释放风味。', tag: '冷泡', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '可以加蜂蜜或糖吗？', a: '可以根据个人口味少量添加，但建议先喝原味。\n部分产品本身已有红枣、罗汉果、苹果干等自然清甜，不建议额外加太多糖。', tag: '口味', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '可以天天喝吗？', a: '普通健康成年人可以作为日常茶饮适量饮用，一般建议根据个人体质和饮用感受选择。\n特殊人群或正在服药人群，建议先咨询医生。', tag: '频率', groups: ['茶饮怎么选', '购买与注意事项'] }
];

const qaList = document.getElementById('qaList');
const qaEmpty = document.getElementById('qaEmpty');
const qaSearchInput = document.getElementById('qaSearchInput');
const qaCategoryFilters = document.getElementById('qaCategoryFilters');
const qaResultCount = document.getElementById('qaResultCount');
const featuredReadsContainer = document.getElementById('qaFeaturedReads');
const sceneShortcutsContainer = document.getElementById('qaSceneShortcuts');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');

let activeCategory = '全部';

function toParagraphs(text) {
  return text.split('\n').map((line) => `<p>${line}</p>`).join('');
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

  let firstItemOpenUsed = false;
  qaList.innerHTML = Object.entries(grouped).map(([sectionName, items]) => `
    <article class="qa-group">
      <h2 class="qa-group-title">${sectionName}</h2>
      ${items.map((item) => {
        const openAttr = !firstItemOpenUsed ? 'open' : '';
        firstItemOpenUsed = true;
        return `
          <details class="qa-item" ${openAttr} id="faq-${item.q}">
            <summary>
              <span class="qa-tag">${item.tag}</span>
              <span class="qa-question">${item.q}</span>
            </summary>
            <div class="qa-answer">${toParagraphs(item.a)}</div>
          </details>
        `;
      }).join('')}
    </article>
  `).join('');

  qaEmpty.hidden = filtered.length !== 0;
}

function jumpToFaq(question) {
  const safeSelector = `#faq-${CSS.escape(question)}`;
  const target = qaList.querySelector(safeSelector);
  if (!target) return;
  target.open = true;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderFeaturedReads() {
  if (!featuredReadsContainer) return;
  featuredReadsContainer.innerHTML = featuredReads.map((item) => `
    <button type="button" class="qa-read-card" data-target="${item.target}">
      <strong>${item.title}</strong>
      <span>${item.subtitle}</span>
    </button>
  `).join('');

  featuredReadsContainer.addEventListener('click', (event) => {
    const card = event.target.closest('[data-target]');
    if (!card) return;
    activeCategory = '全部';
    qaSearchInput.value = '';
    renderCategoryFilters();
    renderFaq();
    jumpToFaq(card.dataset.target);
  });
}

function renderSceneShortcuts() {
  if (!sceneShortcutsContainer) return;
  sceneShortcutsContainer.innerHTML = sceneShortcuts.map((item) => (
    `<button type="button" class="qa-scene-chip" data-target="${item.target}">${item.name}</button>`
  )).join('');

  sceneShortcutsContainer.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-target]');
    if (!chip) return;
    activeCategory = '全部';
    qaSearchInput.value = '';
    renderCategoryFilters();
    renderFaq();
    jumpToFaq(chip.dataset.target);
  });
}

function updateStickyOffset() {
  if (!siteHeader) return;
  document.documentElement.style.setProperty('--qa-header-offset', `${siteHeader.offsetHeight}px`);
}

qaCategoryFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategoryFilters();
  renderFaq();
});

qaSearchInput.addEventListener('input', renderFaq);
window.addEventListener('resize', updateStickyOffset);

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
    setTimeout(updateStickyOffset, 180);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

renderCategoryFilters();
renderFeaturedReads();
renderSceneShortcuts();
renderFaq();
updateStickyOffset();
