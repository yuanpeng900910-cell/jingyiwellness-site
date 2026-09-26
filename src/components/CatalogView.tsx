import Link from "next/link";
import { InnerHeader } from "@/components/SiteNavigation";
import { CatalogCard } from "@/components/CatalogCard";
import { catalogCategories, catalogTotal, type CatalogCategory } from "@/lib/catalog";

export { CatalogCard };

export function CatalogLayout({ title, intro, children }: { title: string; eyebrow: string; intro: string; children: React.ReactNode }) {
  const category = catalogCategories.find((entry) => entry.title === title);
  const count = category ? category.sections.reduce((sum, section) => sum + section.items.length, 0) : catalogTotal;

  return <main className="jy-collection-page jy-catalog-page"><InnerHeader />
    <div className="jy-collection-page__body jy-catalog-page__layout">
      <aside className="jy-catalog-sidebar" aria-label="产品分类">
        <h1>产品</h1>
        <nav>
          <Link className={!category ? "is-active" : ""} href="/products">全部产品</Link>
          {catalogCategories.map((entry) => <Link className={category?.slug === entry.slug ? "is-active" : ""} href={`/products/${entry.slug}`} key={entry.slug}>{entry.title}</Link>)}
        </nav>
        {category && <div className="jy-catalog-sidebar__sections"><strong>{category.title}</strong>{category.sections.map((section, index) => <a href={`#section-${index}`} key={section.title}>{section.title}</a>)}</div>}
      </aside>
      <div className="jy-catalog-main">
        <nav className="jy-catalog-filters" aria-label={category ? `${title}系列` : "产品分类"}>
          {category ? <><a className="is-active" href="#products-start">全部</a>{category.sections.map((section, index) => <a href={`#section-${index}`} key={section.title}>{section.title}</a>)}</>
            : <><Link className="is-active" href="/products">全部</Link>{catalogCategories.map((entry) => <Link href={`/products/${entry.slug}`} key={entry.slug}>{entry.title}</Link>)}</>}
        </nav>
        <div className="jy-catalog-main__count" id="products-start"><p>共 {count} 款产品</p><span>{title}</span></div>
        <p className="jy-catalog-main__intro">{intro}</p>
        {children}
      </div>
    </div>
    <footer className="jy-collection-footer"><span>京颐养方 · 京医古法，颐养东方</span><Link href="/brand-story">了解品牌故事 →</Link></footer>
  </main>;
}

export function CategorySections({ category }: { category: CatalogCategory }) {
  return <>{category.sections.map((section, index) => <section className="jy-collection-section" id={`section-${index}`} key={section.title}>
    <div className="jy-collection-section__heading"><h2>{section.title}</h2><span>{section.items.length} 款</span></div>
    <div className="jy-catalog-grid">{section.items.map((item) => <CatalogCard key={item.name} item={item} category={category.title} />)}</div>
  </section>)}</>;
}
