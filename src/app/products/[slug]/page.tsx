import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogLayout, CategorySections } from "@/components/CatalogView";
import { catalogCategories } from "@/lib/catalog";

export function generateStaticParams() { return catalogCategories.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = catalogCategories.find((item) => item.slug === slug);
  return { title: category ? `${category.title}｜京颐养方` : "产品｜京颐养方", description: category?.intro };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = catalogCategories.find((item) => item.slug === slug);
  if (!category) notFound();
  return <CatalogLayout title={category.title} eyebrow={category.eyebrow} intro={category.intro}>
    <CategorySections category={category} />
  </CatalogLayout>;
}
