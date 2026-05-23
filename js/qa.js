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
  { section: '品牌与产品', q: '京颐养方是什么品牌？', a: '京颐养方是合肥京东方医院主动健康业务下的健康产品与服务品牌。\n围绕药食同源、草本生活与健康礼赠场景，提供适合日常生活的东方轻养方案。', tag: '品牌', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '京颐养方产品是不是药品？', a: '不是药品，也不替代药物或医疗服务。\n产品定位是日常草本轻养和健康生活方式。', tag: '合规', groups: ['品牌与产品', '购买与注意事项'] },
  { section: '品牌与产品', q: '京颐养方有哪些产品系列？', a: '目前覆盖轻养小罐茶、辨体调养茶、国民经典饮、养生隐茶杯，以及草本生活类产品。', tag: '产品', groups: ['品牌与产品'] },
  { section: '茶饮怎么选', q: '不知道怎么选产品怎么办？', a: '可先按饮用场景选择：日常自饮、送礼、办公室、会议接待。\n再按偏好选择口感或体质方向，不确定时可先从基础款开始。', tag: '选购', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '轻养小罐茶、国民经典饮、辨体调养茶如何起售？', a: '轻养小罐茶、国民经典饮、辨体调养茶均为两盒起售。\n两盒团购价为49.9元。', tag: '价格', groups: ['茶饮怎么选', '购买与注意事项'] },
  { section: '茶饮怎么选', q: '小罐茶类怎么冲泡？', a: '适用于轻养小罐茶、辨体调养茶、国民经典饮。\n建议用沸水煮泡或焖泡5分钟以上。\n一罐可作为当天饮用量，可反复续水，一般可以喝一天，不建议隔夜饮用。', tag: '冲泡', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '隐茶杯和小罐茶有什么区别？', a: '小罐茶更强调一罐一泡和日常慢饮；\n隐茶杯更强调便携与效率，适合冲水即饮、即泡即饮场景。\n隐茶杯规格为10杯/桶。', tag: '对比', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '辨体调养茶九款产品对应什么体质？', a: '可按下表快速对应选择：', tag: '体质', groups: ['茶饮怎么选'], cards: teaConstitutionCards },
  { section: '草本生活', q: '鼻安梦香枕怎么使用？', a: '可枕睡使用，也可放在床头、颈侧或午休区域作草本香养陪伴。\n如对气味敏感，建议先短时体验并保持通风。', tag: '使用', groups: ['草本生活'] },
  { section: '草本生活', q: '合香珠手串是什么？', a: '合香珠手串由多种草本香材调和制作，可用于佩戴、盘玩与日常香养陪伴。\n建议避免接触香水、精油和水分。', tag: '介绍', groups: ['草本生活'] },
  { section: '草本生活', q: '药香梳怎么用？', a: '建议在头发清洁干爽时，顺着头皮轻柔梳理，每次数分钟即可。\n避免湿发、重油和潮湿环境使用。', tag: '使用', groups: ['草本生活'] },
  { section: '购买与注意事项', q: '茶饮系列保质期多久？', a: '轻养小罐茶、国民经典饮、辨体调养茶、隐茶杯等茶饮系列保质期统一为12个月。', tag: '保质期', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '常规备货周期多久？', a: '常规备货周期约3周。\n如有团购、企业定制或大批量采购，建议提前沟通交付时间。', tag: '备货', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '孕妇、儿童、慢病人群能不能使用？', a: '孕妇、哺乳期、儿童，以及正在服药或有慢病管理需求人群，建议先咨询医生或专业人士后再使用。\n产品不能替代药物或医疗方案。', tag: '人群', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '是否适合送礼或团购？', a: '适合。\n可用于节日礼赠、员工关怀、会议茶歇、活动伴手礼等场景，具体组合与数量可按需求沟通。', tag: '团购', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '如何购买？', a: '可通过京颐养方官方渠道咨询购买。\n如需团购或企业采购，可同步说明数量、组合与交付时间。', tag: '购买', groups: ['购买与注意事项'] }
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

  let firstItemOpenUsed = false;
  qaList.innerHTML = Object.entries(grouped).map(([sectionName, items]) => `
    <article class="qa-group">
      <h2 class="qa-group-title">${sectionName}</h2>
      ${items.map((item) => {
        const openAttr = !firstItemOpenUsed ? 'open' : '';
        firstItemOpenUsed = true;
        return `
          <details class="qa-item" ${openAttr}>
            <summary>
              <span class="qa-tag">${item.tag}</span>
              <span class="qa-question">${item.q}</span>
            </summary>
            <div class="qa-answer">${renderAnswer(item)}</div>
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
