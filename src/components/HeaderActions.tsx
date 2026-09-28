"use client";

import { useId, useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { catalogCategories, type CatalogItem } from "@/lib/catalog";
import { CatalogProductDialog } from "@/components/CatalogCard";
import { ContactDialog } from "@/components/ContactDialog";
import { SiteDialog } from "@/components/SiteDialog";

type SearchItem = { item: CatalogItem; category: string; section: string };
const searchItems: SearchItem[] = catalogCategories.flatMap((category) => category.sections.flatMap((section) =>
  section.items.map((item) => ({ item, category: category.title, section: section.title }))));

export function HeaderActions({ onOpen }: { onOpen?: () => void }) {
  const [mode, setMode] = useState<"search" | "contact" | "product" | null>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SearchItem | null>(null);
  const titleId = useId();
  const matches = searchItems.filter(({ item, category, section }) => `${item.name}${category}${section}`.includes(query.trim()));
  function open(next: "search" | "contact") { onOpen?.(); setMode(next); }
  function submit(event: FormEvent) { event.preventDefault(); }
  return <>
    <div className="jy-header-actions">
      <button type="button" className="jy-header-search" aria-label="搜索产品" onClick={() => open("search")}><Search size={21} strokeWidth={1.8} /></button>
      <button type="button" className="jy-header-consult" onClick={() => open("contact")}>合作咨询</button>
    </div>
    {mode === "search" && <SiteDialog titleId={titleId} onClose={() => setMode(null)} className="jy-search-dialog" closeLabel="关闭搜索">
      <h2 id={titleId}>搜索产品</h2>
      <form className="jy-site-search-form" onSubmit={submit}>
        <input data-initial-focus type="search" aria-label="搜索京颐养方产品" placeholder="搜索产品名称" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type="submit" aria-label="提交搜索"><Search size={20} /></button>
      </form>
      <p className="jy-search-count" role="status">{query.trim() ? `找到 ${matches.length} 款产品` : "全部产品"}</p>
      <ul className="jy-site-search-results">{matches.map((entry) => <li key={entry.item.name}>
        <button type="button" onClick={() => { setSelected(entry); setMode("product"); }}><strong>{entry.item.name}</strong><span>{entry.category}</span></button>
      </li>)}</ul>
      {!matches.length && <p className="jy-search-empty">暂时没有找到这款好物，试试其他名称。</p>}
    </SiteDialog>}
    {mode === "product" && selected && <CatalogProductDialog item={selected.item} category={selected.category} onClose={() => setMode(null)} onContact={() => setMode("contact")} />}
    {mode === "contact" && <ContactDialog onClose={() => setMode(null)} />}
  </>;
}
