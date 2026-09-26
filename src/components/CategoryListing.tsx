"use client";

import { useEffect, useState } from "react";
import { CatalogCard } from "@/components/CatalogCard";
import type { CatalogCategory } from "@/lib/catalog";

export function CategoryListing({ category }: { category: CatalogCategory }) {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  useEffect(() => {
    const updateSelection = () => {
      const match = window.location.hash.match(/^#section-(\d+)$/);
      const index = match ? Number(match[1]) : -1;
      setSelectedSection(index >= 0 && index < category.sections.length ? index : null);
    };
    updateSelection();
    window.addEventListener("hashchange", updateSelection);
    return () => window.removeEventListener("hashchange", updateSelection);
  }, [category.sections.length]);

  const items = selectedSection === null
    ? category.sections.flatMap((section) => section.items)
    : category.sections[selectedSection].items;

  return <div className="jy-catalog-listing" id="products-start">
    {category.sections.map((section, index) => <span className="jy-catalog-listing__anchor" id={`section-${index}`} key={section.title} />)}
    <div className="jy-catalog-grid">
      {items.map((item) => <CatalogCard key={item.name} item={item} category={category.title} />)}
    </div>
  </div>;
}
