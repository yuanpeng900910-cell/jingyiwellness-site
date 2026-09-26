import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerHeader } from "@/components/SiteNavigation";

export const metadata: Metadata = { title: "团体合作｜京颐养方", description: "京颐养方员工健康共建、企业健康活动与社区健康服务合作方向。" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false };

const areas = [
  { id: "employee", eyebrow: "EMPLOYEE WELLNESS", title: "员工健康共建", text: "围绕员工的日常健康关怀，探索草本产品、养生内容与企业福利的组合方式。" },
  { id: "corporate", eyebrow: "CORPORATE ACTIVITIES", title: "企业健康活动", text: "结合企业活动场景，探索草本体验、健康主题内容与节令关怀的合作形式。" },
  { id: "community", eyebrow: "COMMUNITY WELLNESS", title: "社区健康服务", text: "面向社区日常生活，探索东方养生内容与草本生活体验的服务形式。" },
] as const;

export default function CooperationPage() {
  return <main className="jy-collection-page jy-cooperation-page"><InnerHeader />
    <header className="jy-cooperation-hero"><div><p>WORKING TOGETHER</p><h1>团体合作</h1><span>让日常关怀，走进更多相聚与同行的场景。</span><a href="#employee">了解合作方向 →</a></div><Image src="/images/catalog/gift-employee-display.webp" alt="京颐养方企业员工关爱礼盒" width={1376} height={768} sizes="(max-width: 700px) 100vw, 50vw" quality={88} priority /></header>
    <nav className="jy-gifts-tabs" aria-label="合作方向">{areas.map((area) => <a href={`#${area.id}`} key={area.id}>{area.title}</a>)}</nav>
    <div className="jy-collection-page__body jy-cooperation-content">
      {areas.map((area) => <section className="jy-editorial-section jy-editorial-section--cooperation" id={area.id} key={area.id}>
        <div className="jy-editorial-section__copy"><p>{area.eyebrow}</p><h2>{area.title}</h2><span>{area.text}</span></div>
        <figure className="jy-editorial-section__empty"><Image src="/images/catalog/brand-placeholder.webp" alt="京颐养方品牌礼袋" fill sizes="(max-width: 700px) 90vw, 55vw" /></figure>
      </section>)}
    </div>
    <footer className="jy-collection-footer"><span>京颐养方 · 京医古法，颐养东方</span><Link href="/gifts">查看东方养生礼 <ArrowUpRight size={16} /></Link></footer>
  </main>;
}
