import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerHeader } from "@/components/SiteNavigation";

export const metadata: Metadata = { title: "东方养生礼｜京颐养方", description: "京颐养方节气定制礼、员工关爱礼与宋朝香氛联名款展示。" };

const gifts = [
  { id: "seasonal", eyebrow: "SEASONAL GIFTS", title: "节气定制礼", description: "以节气为灵感，结合草本茶饮与东方礼赠语言，为不同节令呈现有温度的心意。", images: [
    { src: "/images/catalog/gift-seasonal-moon.png", alt: "京颐养方中秋节礼盒方案" },
    { src: "/images/catalog/gift-seasonal-box.png", alt: "京颐养方中秋节礼盒包装展示" },
  ] },
  { id: "employee", eyebrow: "EMPLOYEE CARE", title: "员工关爱礼", description: "面向企业员工关爱场景，围绕不同节日与使用需求组合草本好物，传递日常关怀。", images: [
    { src: "/images/catalog/gift-employee-display.jpg", alt: "京颐养方食养本草员工关爱礼展示" },
    { src: "/images/catalog/gift-employee-photo.jpg", alt: "京颐养方员工关爱礼盒实拍" },
  ] },
  { id: "collaboration", eyebrow: "COLLABORATION", title: "宋朝香氛联名款", description: "东方香韵与草本生活的联名方向，更多产品资料将陆续补充。", images: [] },
] as const;

export default function GiftsPage() {
  return <main className="jy-collection-page jy-gifts-page"><InnerHeader />
    <header className="jy-gifts-hero"><div className="jy-gifts-hero__copy"><p>JINGYI WELLNESS PRESENTS</p><h1>东方养生礼</h1><span>以东方好物，赠一份关怀。</span></div><Image src="/images/catalog/gift-seasonal-box.png" alt="京颐养方节气定制礼盒" fill sizes="100vw" quality={88} priority /></header>
    <nav className="jy-gifts-tabs" aria-label="礼赠分类">{gifts.map((gift) => <a href={`#${gift.id}`} key={gift.id}>{gift.title}</a>)}</nav>
    <div className="jy-collection-page__body jy-gifts-content">
      {gifts.map((gift) => <section className="jy-editorial-section" id={gift.id} key={gift.id}>
        <div className="jy-editorial-section__copy"><p>{gift.eyebrow}</p><h2>{gift.title}</h2><span>{gift.description}</span></div>
        <div className="jy-editorial-section__gallery">{gift.images.length ? gift.images.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 90vw, 45vw" quality={88} /></figure>) : <figure className="jy-editorial-section__empty"><Image src="/images/catalog/brand-placeholder.jpg" alt="京颐养方品牌形象图，联名款图片待更新" fill sizes="(max-width: 700px) 90vw, 45vw" /><span>图片待更新</span></figure>}</div>
      </section>)}
    </div>
    <footer className="jy-collection-footer"><span>京颐养方 · 京医古法，颐养东方</span><Link href="/cooperation">了解团体合作 <ArrowUpRight size={16} /></Link></footer>
  </main>;
}
