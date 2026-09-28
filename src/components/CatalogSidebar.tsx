"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { catalogCategories } from "@/lib/catalog";

export function CatalogSidebar({ activeSlug }: { activeSlug?: string }) {
  const [openSlug, setOpenSlug] = useState<string | null>(activeSlug ?? null);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  if (!activeSlug) return <aside className="jy-catalog-sidebar" aria-label="产品分类">
    <h1>产品</h1>
    <nav><Link className="is-active" href="/products">全部产品</Link>
      {catalogCategories.map((entry) => <Link href={`/products/${entry.slug}`} key={entry.slug}>{entry.title}</Link>)}
    </nav>
  </aside>;

  return <aside className="jy-catalog-sidebar" aria-label="产品分类">
    <h1>产品</h1>
    <nav>
      <Link className="jy-catalog-sidebar__all" href="/products">全部产品</Link>
      {catalogCategories.map((entry) => {
        const isOpen = openSlug === entry.slug;
        const isCurrent = activeSlug === entry.slug;
        return <div className="jy-catalog-sidebar__group" key={entry.slug}>
          <button type="button" className={`jy-catalog-sidebar__toggle${isOpen ? " is-open" : ""}`} aria-expanded={isOpen}
            aria-controls={`jy-catalog-subnav-${entry.slug}`} onClick={() => setOpenSlug(isOpen ? null : entry.slug)}>{entry.title}</button>
          <div className={`jy-catalog-sidebar__panel${isOpen ? " is-open" : ""}`} id={`jy-catalog-subnav-${entry.slug}`} inert={!isOpen}>
            <div className="jy-catalog-sidebar__sections">
              <a href={`/products/${entry.slug}/#products-start`} aria-current={isCurrent && (!hash || hash === "#products-start") ? "page" : undefined}>全部商品</a>
              {entry.sections.map((section, index) => <a href={`/products/${entry.slug}/#section-${index}`}
                aria-current={isCurrent && hash === `#section-${index}` ? "page" : undefined} key={section.title}>{section.title}</a>)}
            </div>
          </div>
        </div>;
      })}
    </nav>
  </aside>;
}
