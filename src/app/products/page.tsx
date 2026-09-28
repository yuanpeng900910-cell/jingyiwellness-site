import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CatalogLayout, CatalogCard } from "@/components/CatalogView";
import { catalogCategories, catalogTotal } from "@/lib/catalog";

export const metadata: Metadata = { title: "产品｜京颐养方", description: "浏览京颐养方草本茶饮、药食养方、草本生活与合香珠系列。" };

export default function ProductsPage() {
  return <CatalogLayout title="全部产品" eyebrow="JINGYI COLLECTION" intro={`四类草本生活选择，现展示 ${catalogTotal} 款产品与方案。`}>
    {catalogCategories.map((category) => <section className="jy-collection-section" key={category.slug}>
      <div className="jy-collection-section__heading"><div><p>{category.eyebrow}</p><h2>{category.title}</h2></div><Link href={`/products/${category.slug}`}>查看分类 <ArrowUpRight size={17} /></Link></div>
      <div className="jy-catalog-grid">{category.sections.flatMap((section) => section.items).map((item) => <CatalogCard key={item.name} item={item} category={category.title} />)}</div>
    </section>)}
  </CatalogLayout>;
}
