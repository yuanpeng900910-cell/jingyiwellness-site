const categories = ['全部', '品牌介绍', '茶饮产品', '草本生活', '团购送礼', '合规话术', '异议处理', '场景推荐', '快速推荐'];

const handbookSections = [
  {
    id: 'sec-brand', title: '01 品牌认知与开场介绍', category: '品牌介绍',
    items: [
      { q: '京颐养方是什么品牌？', a: '京颐养方是合肥京东方医院主动健康业务下的健康产品与服务品牌，围绕药食同源、草本生活与健康礼赠，提供更日常的东方轻养方案。', oneLine: '京医古法，颐养东方。', sell: '我们是医院主动健康背景下的东方轻养品牌，主打把养生做成可坚持的日常习惯。', scene: '首次接待、直播间自我介绍、企业客户初次沟通。', avoid: '我们能治很多问题；比医院治疗更有效。', tags: ['品牌'] },
      { q: '为什么强调轻养？', a: '轻养不是大补，也不是短期突击，而是把养生变成每天都能坚持的小习惯。', sell: '轻养就是把养生变得更轻、更日常、更容易坚持。', scene: '客户问“和普通养生有什么区别”时。', avoid: '短期见效、立竿见影。', tags: ['品牌'] }
    ]
  },
  {
    id: 'sec-product', title: '02 产品体系快速介绍', category: '快速推荐',
    items: [
      { q: '京颐养方有哪些产品体系？', a: '覆盖药食养方、生活养方、节气养生、定制礼赠、健康场景共建五大体系。', sell: '先看场景再选产品：自饮、送礼、福利、会议茶歇都能匹配。', scene: '初次咨询、企业团购沟通。', avoid: '盲推单品。', tags: ['品牌', '快速推荐'] },
      { q: '统一基础口径', a: '茶饮保质期12个月；备货约3周；轻养小罐茶/国民经典饮/辨体调养茶两盒起售，两盒团购价49.9元；小罐茶建议沸水煮泡或焖泡5分钟以上；隐茶杯10杯/桶，冲水即饮。', sell: '先讲场景价值，再补充规格与起售政策。', scene: '报价前、客服答疑。', avoid: '遗漏起售与备货信息。', tags: ['快速推荐'] }
    ]
  },
  {
    id: 'sec-tea', title: '03 茶饮产品销售Q&A', category: '茶饮产品',
    constitution: [
      ['平和', '苹果黄芪茶'], ['气虚', '参芪大枣茶'], ['阳虚', '甘草干姜茶'], ['阴虚', '百合玉竹茶'], ['痰湿', '茯苓陈皮茶'], ['湿热', '薏仁荷叶茶'], ['血瘀', '当归玫瑰茶'], ['气郁', '玫瑰佛手茶'], ['特禀', '黄芪紫苏茶']
    ],
    items: [
      { q: '茶饮系列保质期多久？', a: '轻养小罐茶、国民经典饮、辨体调养茶、隐茶杯等茶饮系列保质期统一为12个月。', tags: ['茶饮'] },
      { q: '备货周期多久？', a: '常规备货周期约3周，团购和定制建议提前沟通交付。', tags: ['茶饮', '团购'] },
      { q: '起售与团购价？', a: '轻养小罐茶、国民经典饮、辨体调养茶：两盒起售，两盒团购价49.9元。', tags: ['茶饮', '团购'] },
      { q: '小罐茶怎么冲泡？', a: '建议沸水煮泡或焖泡5分钟以上，一罐可作为当天饮用量，一般可喝一天，不建议隔夜饮用。', tags: ['茶饮'] },
      { q: '隐茶杯卖点是什么？', a: '隐茶杯10杯/桶，冲水即饮，适合会议、办公室、接待、宴请。', oneLine: '冲水即饮，把东方茶饮带进办公室。', sell: '用于会议茶歇和商务接待，省时且统一体验。', scene: '企业采购、办公室茶饮。', avoid: '疗效化表达。', tags: ['茶饮'] }
    ]
  },
  {
    id: 'sec-herbal', title: '04 草本生活产品销售Q&A', category: '草本生活',
    items: [
      { q: '鼻安梦香枕如何介绍？', a: '草本香养型生活产品，强调伴眠陪伴与东方香气，不替代药物或医疗治疗。', sell: '让睡眠环境多一点草本陪伴感。', scene: '睡眠环境优化、礼赠场景。', avoid: '治失眠、治鼻炎。', tags: ['香养'] },
      { q: '合香珠如何介绍？', a: '合香珠强调东方草本香气陪伴感，可佩戴与轻盘玩。注意忌水、忌油、避汗、阴凉干燥保存。', sell: '不是香水味，而是东方草本香气的陪伴感。', scene: '香养偏好用户、礼物推荐。', avoid: '强功效承诺。', tags: ['香养'] },
      { q: '药香梳如何介绍？', a: '把梳头这件小事做成东方香养体验。注意忌水、忌油、避汗，阴凉干燥保存。', sell: '把梳头这件小事，变成东方香养体验。', scene: '办公室放松、伴手礼。', avoid: '生发承诺、治疗白发。', tags: ['香养'] }
    ]
  },
  {
    id: 'sec-corp', title: '05 企业团购与送礼话术', category: '团购送礼',
    items: [
      { q: '团购适合哪些客户？', a: '企业员工福利、会议茶歇、客户维护、节日礼赠、试饮活动均适配。', sell: '按场景给组合：办公轻养、加班续航、商务接待、节日礼盒。', scene: '企业客户初谈。', avoid: '只报单价不讲方案。', tags: ['团购'] }
    ]
  },
  {
    id: 'sec-compliance', title: '06 合规与风险表达', category: '合规话术', compliance: true,
    items: [
      { q: '合规底线是什么？', a: '不讲治疗、不讲疗效、不讲保证，不替代药物或医疗服务。', sell: '日常轻养、草本陪伴、东方生活方式、温和调养、场景化轻养。', scene: '全场景通用。', avoid: '治疗、疗效、改善疾病、降三高、保证有效。', tags: ['合规'] }
    ]
  },
  {
    id: 'sec-objection', title: '07 高频异议处理', category: '异议处理',
    items: [
      { q: '这是智商税吗？', a: '不是神奇功效型产品，价值在于把草本食材、体质思路和日常场景做成可坚持的习惯。', sell: '我们不做“治病神器”，做的是长期可坚持的轻养方案。', avoid: '绝对有效、包治。', tags: ['异议'] },
      { q: '孕妇/小孩能不能用？', a: '特殊人群不建议自行使用功能性草本产品，建议先咨询医生或专业人士。', sell: '安全第一，先咨询专业建议。', avoid: '都能用、绝对安全。', tags: ['异议', '合规'] }
    ]
  },
  {
    id: 'sec-lines', title: '08 一句话销售话术库', category: '场景推荐', quickLines: ['京医古法，颐养东方。','把养生变成每天都能坚持的小习惯。','一人一方，辨体调养。','古方有味，四时有养。','冲水即饮，把东方茶饮带进办公室。','让睡眠环境多一点草本陪伴感。','不是香水味，而是东方草本香气的陪伴感。','把梳头这件小事，变成东方香养体验。']
  },
  {
    id: 'sec-scene', title: '09 场景化推荐模板', category: '场景推荐', scenes: [
      ['办公室下午茶','红颜茶+轻湿茶','这组口感轻、复购高，适合下午茶。','兼顾气色感与清爽感'],
      ['企业会议茶歇','隐茶杯+清和茶','冲水即饮，统一接待体验。','便捷、体面、可批量'],
      ['女性轻养','五红饮+当归玫瑰茶','偏甜润与花香，日常更易坚持。','口感友好'],
      ['秋冬暖饮','姜枣茶+五红饮','秋冬热饮接受度高。','暖感场景明确'],
      ['熬夜加班','元气茶+熬夜茶','做加班后的轻陪伴。','元气+清润'],
      ['聚餐火锅后','酸梅汤+轻湿茶','聚餐后更清爽。','饭后场景匹配'],
      ['商务伴手礼','辨体调养茶组合','有健康关怀与专属感。','礼赠表达强'],
      ['健康礼盒','国民经典饮四季组合','清爽清润甜润温暖一组配齐。','覆盖多人群']
    ]
  },
  {
    id: 'sec-logic', title: '10 销售人员快速推荐逻辑', category: '快速推荐',
    items: [{ q:'三步推荐法', a:'第一步：先问场景；第二步：再问人群；第三步：最后推荐组合。常用组合：办公室轻养（红颜茶+轻湿茶）；加班续航（元气茶+熬夜茶）；商务接待（隐茶杯+葛花解酲汤）；秋冬暖饮（姜枣茶+五红饮）。', tags:['快速推荐']}]
  }
];

const content = document.getElementById('qaContent');
const toc = document.getElementById('qaToc');
const chips = document.getElementById('qaCategoryFilters');
const searchInput = document.getElementById('qaSearchInput');
const resultCount = document.getElementById('qaResultCount');
const empty = document.getElementById('qaEmpty');
let activeCategory = '全部';

function copyBtn(text) { const safe = String(text).replaceAll("'", '&#39;'); return `<button class="copy-btn" data-copy='${safe}'>复制话术</button>`; }
function qaCard(item, open) {
  return `<details class="qa-item" ${open ? 'open' : ''}><summary><span>${item.q}</span></summary><div class="qa-body"><p>${item.a}</p>${item.oneLine ? `<p><strong>一句话介绍：</strong>${item.oneLine} ${copyBtn(item.oneLine)}</p>` : ''}${item.sell ? `<p><strong>推荐销售表达：</strong>${item.sell} ${copyBtn(item.sell)}</p>` : ''}${item.scene ? `<p><strong>适合场景：</strong>${item.scene}</p>` : ''}${item.avoid ? `<p><strong>避免表达：</strong>${item.avoid}</p>` : ''}</div></details>`;
}
function render() {
  const kw = searchInput.value.trim().toLowerCase();
  chips.innerHTML = categories.map(c => `<button class="chip ${c===activeCategory?'active':''}" data-c="${c}">${c}</button>`).join('');
  const filteredSections = handbookSections.map(sec => {
    const matchedItems = (sec.items || []).filter(i => {
      const text = `${sec.title}${i.q}${i.a}${i.sell||''}${i.scene||''}${i.avoid||''}${(i.tags||[]).join('')}`.toLowerCase();
      return (!kw || text.includes(kw)) && (activeCategory==='全部' || sec.category===activeCategory);
    });
    const passthrough = (sec.quickLines || sec.scenes || sec.constitution) && (activeCategory==='全部' || sec.category===activeCategory) && (!kw || sec.title.toLowerCase().includes(kw));
    return { ...sec, matchedItems, passthrough };
  }).filter(sec => sec.matchedItems.length || sec.passthrough);
  const total = filteredSections.reduce((n,s)=>n+s.matchedItems.length+(s.passthrough?1:0),0);
  resultCount.textContent = '';
  toc.innerHTML = filteredSections.map(s=>`<a href="#${s.id}">${s.title}</a>`).join('');
  content.innerHTML = filteredSections.map(sec => {
    const qas = sec.matchedItems.map((i)=>qaCard(i,false)).join('');
    const constitution = sec.constitution ? `<div class="table-grid">${sec.constitution.map(r=>`<div><strong>${r[0]}</strong><span>${r[1]}</span></div>`).join('')}</div>` : '';
    const compliance = sec.compliance ? `<div class="compliance"><div><h4>禁止使用</h4><ul><li>治疗</li><li>疗效</li><li>改善疾病</li><li>生发承诺</li><li>治鼻炎</li><li>治失眠</li><li>降三高</li><li>保证有效</li></ul></div><div><h4>推荐表达</h4><ul><li>日常轻养</li><li>草本陪伴</li><li>东方生活方式</li><li>温和调养</li><li>日常饮用</li><li>健康管理</li><li>场景化轻养</li></ul></div></div>` : '';
    const quickLines = sec.quickLines ? `<div class="line-cards">${sec.quickLines.map(l=>`<article><p>${l}</p>${copyBtn(l)}</article>`).join('')}</div>` : '';
    const scenes = sec.scenes ? `<div class="scene-cards">${sec.scenes.map(s=>`<article><h4>${s[0]}</h4><p><strong>推荐产品：</strong>${s[1]}</p><p><strong>推荐销售表达：</strong>${s[2]}</p><p><strong>推荐搭配理由：</strong>${s[3]}</p>${copyBtn(s[2])}</article>`).join('')}</div>` : '';
    return `<section id="${sec.id}" class="section"><h2>${sec.title}</h2>${constitution}${compliance}${quickLines}${scenes}${qas}</section>`;
  }).join('');
  empty.hidden = total !== 0;
}

chips.addEventListener('click', (e)=>{ const b = e.target.closest('[data-c]'); if(!b) return; activeCategory = b.dataset.c; render();});
searchInput.addEventListener('input', render);
document.addEventListener('click', async (e)=>{ const btn = e.target.closest('.copy-btn'); if(!btn) return; await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent='已复制'; setTimeout(()=>btn.textContent='复制话术', 1200);});
render();
