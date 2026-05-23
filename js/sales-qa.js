const qaSections = [
  {
    category: "品牌Q&A",
    items: [
      ["京颐养方是什么品牌？", "京颐养方是合肥京东方医院主动健康业务下的东方草本轻养品牌，围绕中医体质调养、药食同源理念和日常健康管理场景，打造适合现代生活的产品体系。"],
      ["品牌主张如何表达？", "统一表达：京医古法，颐养东方。茶饮系列可补充：古方有味，四时有养。体质茶可补充：一人一方，辨体调养。"]
    ]
  },
  {
    category: "产品体系Q&A",
    items: [
      ["京颐养方有哪些产品体系？", "覆盖药食养方、生活养方、节气养生、定制礼赠、健康场景共建。销售沟通时可先问客户场景，再推荐对应组合。"],
      ["茶饮系列保质期与备货周期？", "茶饮系列保质期为12个月；常规备货周期约3周。团购或定制建议提前确认数量和交付时间。"]
    ]
  },
  { category: "轻养小罐茶系列", items: [["与普通花茶有什么区别？", "不是单一花茶或单一茶叶，而是围绕不同生活状态做草本复配；一罐一泡，便携即饮，适合办公室、出差和日常轻养场景。"],["首购组合怎么推荐？", "可推荐元气清润组合（红颜茶+轻湿茶）或加班续航组合（元气茶+熬夜茶）。"]] },
  { category: "辨体调养茶系列", items: [["九款茶的核心逻辑是什么？", "先辨体，再选茶。对应平和、气虚、阳虚、阴虚、痰湿、湿热、血瘀、气郁、特禀九种体质方向。"],["客户不知道体质怎么选？", "可先引导体质辨识；若暂时不明确，可先从苹果黄芪茶等基础款开始。一般建议每日1罐。"]] },
  { category: "国民经典饮系列", items: [["与体质茶有什么区别？", "体质茶更偏个性化辨体调养；国民经典饮更偏大众化、场景化饮用。"],["四款如何快速推荐？", "酸梅汤（夏天饭后清爽）、秋梨汤（秋冬清润）、五红饮（女性日常甜润）、姜枣茶（秋冬暖饮）。"]] },
  { category: "隐茶杯系列", items: [["隐茶杯的核心卖点？", "杯装便携，冲水即饮，会议/办公友好；适合会议茶歇、商务接待、企业福利。"],["与小罐茶如何区分？", "小罐茶更强调精致感；隐茶杯更强调场景效率和即泡即饮。"]] },
  { category: "鼻安梦香枕", items: [["产品定位是什么？", "草本伴眠香枕，属于日常草本香养产品，不是医疗器械或药品。"],["合规回答：能改善鼻敏感或睡眠吗？", "可表述为：作为睡眠环境和鼻部舒适感的草本陪伴产品使用，但不能替代药物或医疗治疗。"]] },
  { category: "合香珠手串", items: [["与普通手串差异？", "除佩戴外，更强调草本香气、古法合香工艺和日常香养陪伴感。"],["日常使用注意事项？", "不建议见水，避免汗液油脂长期浸染；不佩戴时密封阴凉保存。"]] },
  { category: "药香梳", items: [["能否承诺生发、治白发？", "不能。建议表达为：偏日常头皮护理与梳理按摩体验，不是治疗脱发或白发的产品。"],["使用和养护建议？", "头发干爽时轻柔梳理，忌水忌油避汗；使用后软布轻擦，阴凉干燥保存。"]] },
  { category: "购买/团购/定制", items: [["茶饮怎么起售？", "轻养小罐茶、国民经典饮、辨体调养茶均为两盒起售，两盒团购价49.9元。"],["哪些场景适合团购？", "企业员工福利、会议茶歇、团检伴手礼、商务伴手礼、院内体验区、社区活动等。"]] },
  { category: "合规销售话术", items: [["销售表达底线是什么？", "不承诺治疗、疗效、减肥、生发、治失眠、治鼻炎等医疗效果；不替代药物和医生。"],["高频异议怎么回应“是不是智商税”？", "建议表达：不是神奇功效型产品，价值在于把草本食材、体质思路和日常场景做成更方便的健康习惯产品。"]] }
];

const qaList = document.getElementById('qaList');
const qaEmpty = document.getElementById('qaEmpty');
const qaSearchInput = document.getElementById('qaSearchInput');
const qaCategoryFilters = document.getElementById('qaCategoryFilters');

let activeCategory = '全部';

function renderCategoryFilters() {
  const categories = ['全部', ...qaSections.map((section) => section.category)];
  qaCategoryFilters.innerHTML = categories.map((category) => (
    `<button class="sales-qa-chip ${category === activeCategory ? 'active' : ''}" data-category="${category}" type="button">${category}</button>`
  )).join('');
}

function renderFaq() {
  const keyword = qaSearchInput.value.trim();
  const normalizedKeyword = keyword.toLowerCase();

  const filteredSections = qaSections
    .filter((section) => activeCategory === '全部' || section.category === activeCategory)
    .map((section) => {
      const items = section.items.filter(([q, a]) => {
        if (!normalizedKeyword) return true;
        return `${q}${a}${section.category}`.toLowerCase().includes(normalizedKeyword);
      });
      return { ...section, items };
    })
    .filter((section) => section.items.length > 0);

  qaList.innerHTML = filteredSections.map((section) => `
    <article class="sales-qa-group">
      <h2 class="sales-qa-group-title">${section.category}</h2>
      ${section.items.map(([question, answer]) => `
        <details class="sales-qa-item">
          <summary>${question}</summary>
          <p class="sales-qa-answer">${answer}</p>
        </details>
      `).join('')}
    </article>
  `).join('');

  qaEmpty.hidden = filteredSections.length !== 0;
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
