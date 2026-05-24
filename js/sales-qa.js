const data = window.salesQaData;
const content = document.getElementById('qaContent');
const chips = document.getElementById('qaCategoryFilters');
const searchInput = document.getElementById('qaSearchInput');
const resultCount = document.getElementById('qaResultCount');
const empty = document.getElementById('qaEmpty');
const quickEntrances = document.getElementById('quickEntrances');
const quickGuide = document.getElementById('quickGuide');
let activeCategory = '全部';

const escape = (s='') => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const highlight = (text, kw) => !kw ? text : text.replace(new RegExp(`(${escape(kw)})`, 'gi'), '<mark>$1</mark>');
const copyBtn = (text) => `<button class="copy-btn" data-copy="${String(text).replaceAll('"','&quot;')}">复制话术</button>`;

function renderStatic() {
  document.getElementById('pageTitle').textContent = data.page.title;
  document.getElementById('pageSubtitle').textContent = data.page.subtitle;
  document.getElementById('pageIntro').textContent = data.page.intro;
  searchInput.placeholder = '搜索关键词';

  quickEntrances.innerHTML = data.quickEntrances.map(i => `<a href="#${i.id}" class="entry-card"><h3>${i.title}</h3><p>${i.desc}</p></a>`).join('');
  quickGuide.innerHTML = `<article class="base-card"><h2>00 销售人员快速使用指南</h2><div class="quick-steps">${data.quickGuide.steps.map(s=>`<p>${s}</p>`).join('<span>→</span>')}</div><h3>统一基础口径</h3><ul>${data.quickGuide.basics.map(s=>`<li>${s}</li>`).join('')}</ul></article>`;
}

function qaCard(item, kw) {
  const title = highlight(item.q, kw);
  const tags = (item.tags || []).slice(0,3).map(t=>`<span>${highlight(t, kw)}</span>`).join('');
  return `<details class="qa-card"><summary><div><h4>${title}</h4><p class="tags">${tags}</p></div><b>⌄</b></summary><div class="qa-body"><p><strong>标准答案：</strong>${highlight(item.answer||'', kw)}</p>${item.sell?`<p><strong>推荐销售表达：</strong>${highlight(item.sell, kw)} ${copyBtn(item.sell)}</p>`:''}${item.scene?`<p><strong>适合场景：</strong>${highlight(item.scene, kw)}</p>`:''}${item.avoid?`<p><strong>避免表达：</strong>${highlight(item.avoid, kw)}</p>`:''}</div></details>`;
}

function render() {
  const kw = searchInput.value.trim();
  chips.innerHTML = data.categories.map(c=>`<button class="chip ${c===activeCategory?'active':''}" data-c="${c}">${c}</button>`).join('');
  let total = 0;

  const sections = data.sections.map(sec => {
    let cards = (sec.items || []).filter(i => {
      const txt = `${sec.title}${i.q}${i.answer||''}${i.sell||''}${i.scene||''}${i.avoid||''}${(i.tags||[]).join('')}`.toLowerCase();
      return (!kw || txt.includes(kw.toLowerCase())) && (activeCategory==='全部' || sec.category===activeCategory);
    });
    const meta = `${(sec.oneLiners||[]).join('')}${(sec.scenarios||[]).map(s=>Object.values(s).join('')).join('')}${sec.compliance ? data.compliance.banned.join('')+data.compliance.recommended.join('')+data.compliance.special : ''}`.toLowerCase();
    const showMeta = (sec.oneLiners||sec.scenarios||sec.compliance||sec.key==='quick-sop'||sec.key==='product-qa') && (activeCategory==='全部' || sec.category===activeCategory) && (!kw || meta.includes(kw.toLowerCase()) || sec.title.toLowerCase().includes(kw.toLowerCase()));
    if (cards.length || showMeta) total += cards.length + (showMeta ? 1 : 0);
    return {sec,cards,showMeta};
  }).filter(x => x.cards.length || x.showMeta);

  content.innerHTML = sections.map(({sec,cards,showMeta}) => {
    let extra = '';
    if ((sec.key === 'product-qa') && (showMeta || !searchInput.value) && (activeCategory==='全部' || activeCategory==='产品问答')) {
      extra += `<article class="matrix"><h3>九种体质对应关系</h3><div>${data.constitutionMap.map(r=>`<p><strong>${r[0]}</strong><span>${r[1]}</span></p>`).join('')}</div></article>`;
    }
    if (sec.compliance && (showMeta || !searchInput.value)) {
      extra += `<article id="compliance" class="compliance"><div><h3>禁止使用</h3><p>${data.compliance.banned.join('、')}</p></div><div><h3>推荐表达</h3><p>${data.compliance.recommended.join('、')}</p></div><div><h3>特殊人群统一说法</h3><p>${data.compliance.special}</p></div></article>`;
    }
    if (sec.oneLiners && (showMeta || !searchInput.value)) {
      extra += `<article class="line-grid">${sec.oneLiners.map(l=>`<div class="line-card"><p>${highlight(l,kw)}</p>${copyBtn(l)}</div>`).join('')}</article>`;
    }
    if (sec.scenarios && (showMeta || !searchInput.value)) {
      extra += `<article class="scenario-grid">${sec.scenarios.map(s=>`<div class="scenario-card"><h4>${highlight(s.name,kw)}</h4><p><strong>推荐产品：</strong>${highlight(s.products,kw)}</p><p><strong>推荐组合：</strong>${highlight(s.combo,kw)}</p><p><strong>推荐销售表达：</strong>${highlight(s.speech,kw)}</p><p><strong>推荐搭配理由：</strong>${highlight(s.reason,kw)}</p>${copyBtn(s.speech)}</div>`).join('')}</article>`;
    }
    if (sec.key === 'corp' && (activeCategory==='全部' || activeCategory==='团购送礼')) {
      extra += `<article class="checklist"><h3>成交前确认清单</h3><ul>${data.closingChecklist.map(i=>`<li>${i}</li>`).join('')}</ul></article>`;
    }
    if (sec.key === 'quick-sop' && (showMeta || !searchInput.value) && (activeCategory==='全部' || activeCategory==='快速指南')) {
      extra += `<article id="quick-sop" class="sop">${data.sop.map(s=>`<div><h4>${s.step}</h4><p>${highlight(s.detail,kw)}</p></div>`).join('')}</article>`;
    }
    return `<section id="${sec.key}" class="qa-section"><h2>${sec.title}</h2>${extra}${cards.map(c=>qaCard(c, kw)).join('')}</section>`;
  }).join('');

  resultCount.textContent = `共找到 ${total} 条匹配内容`;
  empty.hidden = total !== 0;
}

chips.addEventListener('click', (e)=>{ const b = e.target.closest('[data-c]'); if (!b) return; activeCategory = b.dataset.c; render(); });
searchInput.addEventListener('input', render);
document.addEventListener('click', async (e)=> {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  await navigator.clipboard.writeText(btn.dataset.copy);
  btn.textContent = '已复制';
  setTimeout(()=> btn.textContent = '复制话术', 1200);
});

renderStatic();
render();
