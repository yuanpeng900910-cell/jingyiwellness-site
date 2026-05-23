const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sections = Array.from(document.querySelectorAll('.faq-section'));
const cards = Array.from(document.querySelectorAll('.faq-card'));
const expandAll = document.getElementById('expandAll');
const collapseAll = document.getElementById('collapseAll');

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  sections.forEach((section) => {
    const categoryMatch = category === 'all' || section.dataset.category === category;
    let hasVisibleCard = false;

    section.querySelectorAll('.faq-card').forEach((card) => {
      const text = card.innerText.toLowerCase();
      const keywordMatch = !keyword || text.includes(keyword);
      const show = categoryMatch && keywordMatch;
      card.classList.toggle('hidden', !show);
      if (show) hasVisibleCard = true;
    });

    section.classList.toggle('hidden', !hasVisibleCard && section.id !== 'compliance');
  });

  const compliance = document.getElementById('compliance');
  if (compliance) {
    const complianceVisible = category === 'all' || category === 'compliance';
    compliance.classList.toggle('hidden', !complianceVisible);
  }
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
expandAll.addEventListener('click', () => cards.forEach((c) => { c.open = !c.classList.contains('hidden'); }));
collapseAll.addEventListener('click', () => cards.forEach((c) => { c.open = false; }));

document.querySelectorAll('.copy-answer').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.parentElement.innerText.replace('复制回答', '').trim();
    await navigator.clipboard.writeText(text);
    const old = button.textContent;
    button.textContent = '已复制';
    setTimeout(() => { button.textContent = old; }, 1200);
  });
});

applyFilters();
