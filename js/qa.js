const filterTabs = ['全部', '品牌与产品', '茶饮怎么选', '饮用方式', '草本生活', '送礼与团购', '购买与注意事项'];
const sceneFilters = ['全部', '办公室下午茶', '熬夜加班', '聚餐火锅后', '秋冬热饮', '女生日常轻养', '企业会议茶歇', '伴眠放松', '东方香养'];
const featuredLinks = [
  { title: '不知道怎么选？', subtitle: '先了解自己的日常状态与饮用场景', target: '不知道体质怎么办？' },
  { title: '九种体质怎么理解？', subtitle: '不同体质，适合不同轻养方向', target: '辨体调养茶九款产品对应什么体质？' },
  { title: '第一次喝怎么开始？', subtitle: '从基础款和日常场景开始更容易', target: '第一次喝推荐哪款？' },
  { title: '京颐养方是什么品牌？', subtitle: '了解品牌理念与产品体系', target: '京颐养方是什么品牌？' }
];
const teaConstitutionCards = [
  { product: '苹果黄芪茶', constitution: '平和体质' }, { product: '参芪大枣茶', constitution: '气虚体质' },
  { product: '甘草干姜茶', constitution: '阳虚体质' }, { product: '百合玉竹茶', constitution: '阴虚体质' },
  { product: '茯苓陈皮茶', constitution: '痰湿体质' }, { product: '薏仁荷叶茶', constitution: '湿热体质' },
  { product: '当归玫瑰茶', constitution: '血瘀体质' }, { product: '玫瑰佛手茶', constitution: '气郁体质' },
  { product: '黄芪紫苏茶', constitution: '特禀体质' }
];
const qaItems = [
  { section: '品牌与产品', q: '京颐养方是什么品牌？', a: `京颐养方是合肥京东方医院主动健康业务下的健康产品与服务品牌。\n围绕药食同源、草本生活与健康礼赠场景，提供更日常的东方轻养方案。`, tag: '品牌', groups: ['品牌与产品'] },
  { section: '品牌与产品', q: '京颐养方和普通养生品牌有什么区别？', a: `核心差异是有医院场景基础、有中医科和健康管理资源，并在真实企业和社区场景落地。\n同时强调合规表达，不把产品包装成“治病神器”。`, tag: '品牌', groups: ['品牌与产品'] },
  { section: '茶饮怎么选', q: '不知道体质怎么办？', a: `可先通过体质辨识工具了解主导体质。\n若没有明显偏向，可先从苹果黄芪茶等基础款开始。`, tag: '体质', groups: ['茶饮怎么选'] },
  { section: '茶饮怎么选', q: '第一次喝推荐哪款？', a: `夏天和饭后可选酸梅汤；秋冬清润可选秋梨汤；女性日常可选五红饮；秋冬暖饮可选姜枣茶。`, tag: '推荐', groups: ['茶饮怎么选'], scenes: ['秋冬热饮', '女生日常轻养'] },
  { section: '茶饮怎么选', q: '辨体调养茶九款产品对应什么体质？', a: '可按下表快速对应选择：', tag: '体质', groups: ['茶饮怎么选'], cards: teaConstitutionCards },
  { section: '饮用方式', q: '一罐真的能喝一天吗？', a: `建议一罐作为当天饮用量，可反复续水，一般可以喝一天，不建议隔夜饮用。`, tag: '冲泡', groups: ['饮用方式'] },
  { section: '饮用方式', q: '为什么建议煮泡？', a: `建议用沸水煮泡或焖泡5分钟以上，让草本、果干、根茎类原料风味更充分释放。`, tag: '冲泡', groups: ['饮用方式'] },
  { section: '草本生活', q: '鼻安梦香枕为什么可以放床头？', a: `可枕睡使用，也可放在床头、颈侧或午休区域作草本香养陪伴。`, tag: '香养', groups: ['草本生活'], scenes: ['伴眠放松', '东方香养'] },
  { section: '草本生活', q: '合香珠为什么香味不浓？', a: `合香珠强调贴身、温和、耐闻的草本香气，注重日常陪伴感。`, tag: '香养', groups: ['草本生活'], scenes: ['东方香养'] },
  { section: '草本生活', q: '药香梳和普通梳子有什么区别？', a: `将草本香养理念与日常梳理结合，除了梳头，也强调头皮放松体验。`, tag: '对比', groups: ['草本生活'] },
  { section: '送礼与团购', q: '为什么适合企业福利？', a: `可用于员工关怀、会议茶歇、活动伴手礼等场景，具体组合可按需求沟通。`, tag: '企业', groups: ['送礼与团购'], scenes: ['企业会议茶歇'] },
  { section: '送礼与团购', q: '可以定制包装吗？', a: `支持企业团购和定制需求沟通，建议提前确认数量、周期与交付时间。`, tag: '定制', groups: ['送礼与团购'] },
  { section: '购买与注意事项', q: '孕妇能用吗？', a: `孕妇、哺乳期、儿童及慢病或服药人群，建议先咨询医生后再使用。`, tag: '人群', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '产品需要冷藏吗？', a: `常温、干燥、避光保存即可，开封后注意密封防潮。`, tag: '储存', groups: ['购买与注意事项'] },
  { section: '购买与注意事项', q: '为什么不建议隔夜喝？', a: `隔夜后风味体验下降，建议当天泡当天饮用。`, tag: '饮用', groups: ['购买与注意事项'] }
];
const qaList = document.getElementById('qaList');
const qaEmpty = document.getElementById('qaEmpty');
const qaSearchInput = document.getElementById('qaSearchInput');
const qaCategoryFilters = document.getElementById('qaCategoryFilters');
const qaSceneFilters = document.getElementById('qaSceneFilters');
const qaFeaturedLinks = document.getElementById('qaFeaturedLinks');
const qaResultCount = document.getElementById('qaResultCount');
let activeCategory = '全部'; let activeScene = '全部';
const slugify = (text) => text.replace(/\s+/g, '').replace(/[？?]/g, '');
const toParagraphs = (text) => text.split('\n').map((line) => `<p>${line}</p>`).join('');
const renderAnswer = (item) => `${toParagraphs(item.a)}${item.cards ? `<div class="tea-constitution-grid">${item.cards.map((c) => `<article class="tea-constitution-card"><h4>${c.product}</h4><p><strong>对应体质：</strong>${c.constitution}</p></article>`).join('')}</div>` : ''}`;
function getFilteredItems() { const keyword = qaSearchInput.value.trim().toLowerCase(); return qaItems.filter((item) => (activeCategory === '全部' || item.groups.includes(activeCategory)) && (activeScene === '全部' || (item.scenes || []).includes(activeScene)) && (!keyword || `${item.section}${item.q}${item.a}${item.tag}`.toLowerCase().includes(keyword))); }
function renderFaq() { const filtered = getFilteredItems(); qaResultCount.textContent = `共匹配 ${filtered.length} 条问答`; const grouped = filtered.reduce((a, i) => ((a[i.section] ||= []).push(i), a), {}); let opened = false; qaList.innerHTML = Object.entries(grouped).map(([s, items]) => `<article class="qa-group"><h2 class="qa-group-title">${s}</h2>${items.map((i) => { const o = !opened ? 'open' : ''; opened = true; return `<details class="qa-item" id="faq-${slugify(i.q)}" ${o}><summary><span class="qa-tag">${i.tag}</span><span class="qa-question">${i.q}</span></summary><div class="qa-answer">${renderAnswer(i)}</div></details>`; }).join('')}</article>`).join(''); qaEmpty.hidden = filtered.length !== 0; }
qaCategoryFilters.innerHTML = filterTabs.map((c) => `<button class="qa-chip ${c === activeCategory ? 'active' : ''}" data-category="${c}">${c}</button>`).join('');
qaSceneFilters.innerHTML = sceneFilters.map((s) => `<button class="qa-chip ${s === activeScene ? 'active' : ''}" data-scene="${s}">${s === '全部' ? '全部场景' : s}</button>`).join('');
qaFeaturedLinks.innerHTML = featuredLinks.map((f) => `<button class="qa-featured-card" type="button" data-target="${f.target}"><h3>${f.title}</h3><p>${f.subtitle}</p></button>`).join('');
qaCategoryFilters.addEventListener('click', (e) => { const b = e.target.closest('[data-category]'); if (!b) return; activeCategory = b.dataset.category; qaCategoryFilters.querySelectorAll('.qa-chip').forEach((x) => x.classList.toggle('active', x.dataset.category === activeCategory)); renderFaq(); });
qaSceneFilters.addEventListener('click', (e) => { const b = e.target.closest('[data-scene]'); if (!b) return; activeScene = b.dataset.scene; qaSceneFilters.querySelectorAll('.qa-chip').forEach((x) => x.classList.toggle('active', x.dataset.scene === activeScene)); renderFaq(); });
qaFeaturedLinks.addEventListener('click', (e) => { const b = e.target.closest('[data-target]'); if (!b) return; const target = document.getElementById(`faq-${slugify(b.dataset.target)}`); if (target) { target.open = true; target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } });
qaSearchInput.addEventListener('input', renderFaq);
renderFaq();
