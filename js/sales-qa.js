const categories = ['全部', '品牌介绍', '茶饮产品', '草本生活', '团购送礼', '合规话术', '异议处理', '场景推荐', '快速推荐'];
const shortcutMap = [
  { label: '快速介绍品牌', target: '01 品牌认知与开场介绍' },
  { label: '快速推荐产品', target: '03 茶饮产品销售Q&A' },
  { label: '处理客户异议', target: '07 高频异议处理' },
  { label: '团购送礼话术', target: '05 企业团购与送礼话术' }
];
const catKeywords = {
  '品牌介绍': ['01 '], '茶饮产品': ['03 '], '草本生活': ['04 '], '团购送礼': ['05 '],
  '合规话术': ['06 '], '异议处理': ['07 '], '场景推荐': ['09 '], '快速推荐': ['00 ', '10 ']
};

const ui = {
  list: document.getElementById('qaList'), empty: document.getElementById('qaEmpty'), search: document.getElementById('qaSearchInput'),
  filters: document.getElementById('qaCategoryFilters'), result: document.getElementById('qaResultCount'), toc: document.getElementById('toc'), shortcut: document.getElementById('shortcutLinks')
};
let active = '全部'; let dataset = [];
const slug = (t) => t.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-');

async function loadMarkdown() {
  const text = await fetch('docs/京颐养方销售Q&A与销售话术手册_合并版_Codex.md').then((r) => r.text());
  const lines = text.split('\n');
  let section = null, q = null, answer = [], fields = {};
  const push = () => {
    if (!section || !q) return;
    dataset.push({ section, q, a: answer.join('\n').trim(), fields: { ...fields } });
    q = null; answer = []; fields = {};
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (/^##\s+\d{2}/.test(line)) { push(); section = line.replace(/^##\s+/, ''); continue; }
    if (/^###\s+Q[:：]/.test(line)) { push(); q = line.replace(/^###\s+Q[:：]/, '').trim(); continue; }
    if (/^【.+】/.test(line)) {
      const m = line.match(/^【([^】]+)】\s*(.*)$/); if (m) fields[m[1]] = m[2]; continue;
    }
    if (q && line) answer.push(line.replace(/^A[:：]\s?/, ''));
  }
  push();
}

function categoryOf(item) {
  for (const [cat, keys] of Object.entries(catKeywords)) if (keys.some((k) => item.section.startsWith(k))) return cat;
  return '品牌介绍';
}
function filters() { ui.filters.innerHTML = categories.map((c) => `<button class="sales-qa-chip ${c===active?'active':''}" data-c="${c}">${c}</button>`).join(''); }
function renderToc(items) {
  const sections = [...new Set(items.map((i) => i.section))];
  ui.toc.innerHTML = sections.map((s) => `<a href="#${slug(s)}">${s}</a>`).join('');
}
function renderShortcuts() {
  ui.shortcut.innerHTML = shortcutMap.map((s)=>`<a class="shortcut-card" href="#${slug(s.target)}">${s.label}</a>`).join('');
}

function render() {
  const k = ui.search.value.trim().toLowerCase();
  const matched = dataset.filter((i) => {
    const catOk = active === '全部' || categoryOf(i) === active;
    const text = `${i.section}${i.q}${i.a}${Object.values(i.fields).join('')}`.toLowerCase();
    return catOk && (!k || text.includes(k));
  });
  ui.result.textContent = `共匹配 ${matched.length} 条内容`;
  ui.empty.hidden = matched.length !== 0;
  renderToc(matched);
  const grouped = matched.reduce((acc, i) => ((acc[i.section] ||= []).push(i), acc), {});
  let first = true;
  ui.list.innerHTML = Object.entries(grouped).map(([sec, items]) => `
  <article class="sales-qa-group" id="${slug(sec)}">
    <h2 class="sales-qa-group-title">${sec}</h2>
    ${items.map((i,idx)=>`<details class="sales-qa-item" ${(first|| (sec.includes('08 ')&&idx<3)||(sec.includes('09 ')&&idx<2))?'open':''}>
      <summary><span class="sales-qa-question">Q：${i.q}</span></summary>
      <div class="sales-qa-answer">
        <p>${i.a.replace(/\n/g,'<br>')}</p>
        ${Object.entries(i.fields).map(([k,v])=>`<p><strong>【${k}】</strong>${v} <button class="copy-btn" data-copy="${(v||'').replace(/"/g,'&quot;')}">复制话术</button></p>`).join('')}
      </div>
    </details>`).join('')}
  </article>`).join('');
  first = false;
}

ui.filters.addEventListener('click', (e)=>{ const b=e.target.closest('[data-c]'); if(!b) return; active=b.dataset.c; filters(); render(); });
ui.search.addEventListener('input', render);
ui.list.addEventListener('click', (e)=>{ const b=e.target.closest('.copy-btn'); if(!b) return; navigator.clipboard.writeText(b.dataset.copy||''); b.textContent='已复制'; setTimeout(()=>b.textContent='复制话术',1000); });

loadMarkdown().then(()=>{ renderShortcuts(); filters(); render(); });
