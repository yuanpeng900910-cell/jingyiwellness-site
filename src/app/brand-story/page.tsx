import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerHeader } from "@/components/SiteNavigation";
import styles from "./brand-story.module.css";

export const metadata: Metadata = {
  title: "品牌故事｜京颐养方",
  description: "了解京颐养方与合肥京东方医院、京东方集团的渊源，以及品牌如何把草本养生融入日常生活。",
};

export default function BrandStoryPage() {
  return <main className={styles.page}>
    <a className={styles.skip} href="#story">跳到品牌故事</a>
    <InnerHeader />

    <section className={styles.hero} aria-labelledby="brand-story-title">
      <Image className={styles.heroImage} src="/images/brand/herbal-practice.jpg" alt="合肥京东方医院中医科医师处理草本药材" fill sizes="100vw" quality={85} preload />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <p>JINGYI WELLNESS · BRAND STORY</p>
        <h1 id="brand-story-title">京医古法，<br />颐养东方</h1>
        <span>让东方轻养，自然融入日常。</span>
      </div>
    </section>

    <section className={styles.story} id="story" aria-labelledby="story-title">
      <div className={styles.storyCopy}>
        <p className={styles.eyebrow}>OUR STORY</p>
        <h2 id="story-title">把专业的关怀，<br />带到生活里。</h2>
        <p className={styles.lead}>京颐养方由合肥京东方医院中医科团队、临床药师、营养师等团队携手研发，围绕药食同源、草本生活与健康礼赠等场景，构建覆盖日常饮用、生活用品与礼赠定制的中医养生产品体系。</p>
      </div>
      <figure className={styles.storyVisual}>
        <Image src="/images/brand/herbal-study.png" alt="草本原料与配方研读场景" width={1448} height={1086} sizes="(max-width: 800px) 100vw, 53vw" quality={90} />
      </figure>
    </section>

    <section className={styles.hospital} aria-labelledby="hospital-title">
      <div className={styles.hospitalInner}>
        <figure className={styles.hospitalVisual}>
          <Image src="/images/brand/hefei-boe-hospital.jpg" alt="合肥京东方医院建筑外观" width={3898} height={1921} sizes="(max-width: 800px) 100vw, 55vw" quality={85} />
          <figcaption>合肥京东方医院</figcaption>
        </figure>
        <div className={styles.hospitalCopy}>
          <p className={styles.eyebrow}>OUR ROOTS</p>
          <h2 id="hospital-title">从京东方医院出发。</h2>
          <p>合肥京东方医院由京东方科技集团投资建设，是集医疗、教学、科研和健康管理等于一体的三级综合性医院。</p>
          <p>京东方集团将科技创新延伸至医疗健康领域。京颐养方依托医院的专业团队，把对健康的关注带入更日常的草本生活。</p>
          <div className={styles.lineage} aria-label="京颐养方品牌渊源">
            <span>京东方集团</span><span aria-hidden="true">—</span><span>合肥京东方医院</span><span aria-hidden="true">—</span><strong>京颐养方</strong>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.people} aria-labelledby="people-title">
      <div className={styles.peopleHeading}>
        <div>
          <p className={styles.eyebrow}>THE PEOPLE BEHIND JINGYI</p>
          <h2 id="people-title">来自中医科的专业团队。</h2>
        </div>
        <p>从对草本的理解，到日常饮用与礼赠场景的构思，京颐养方希望让东方养生更贴近生活。</p>
      </div>
      <figure className={styles.peopleVisual}>
        <Image src="/images/brand/tcm-team.jpg" alt="合肥京东方医院中医科团队合影" width={2200} height={1237} sizes="(max-width: 800px) 100vw, 90vw" quality={85} />
        <figcaption>合肥京东方医院中医科团队</figcaption>
      </figure>
    </section>

    <section className={styles.origin} aria-labelledby="origin-title">
      <div className={styles.originInner}>
        <div className={styles.originCopy}>
          <div>
            <p className={styles.eyebrow}>ORIGIN & QUALITY</p>
            <h2 id="origin-title">从产地开始，<br />认真对待每一味草本。</h2>
          </div>
          <p>我们相信，好的草本从生长的土地开始。京颐养方重视原料来源与生长环境，关注采收时节、原料状态和配方搭配，让自然本味与品质要求一同融入日常。</p>
        </div>
        <div className={styles.originGallery}>
          <figure className={styles.fieldVisual}>
            <Image src="/images/brand/herbal-field-edited.png" alt="草本种植田地的场景示意" width={1670} height={942} sizes="(max-width: 800px) 100vw, 54vw" quality={85} />
            <figcaption>草本种植场景示意</figcaption>
          </figure>
          <figure className={styles.harvestVisual}>
            <Image src="/images/brand/herbal-harvest-selected.png" alt="农人展示采收原料的场景示意" width={1487} height={1058} sizes="(max-width: 800px) 100vw, 36vw" quality={85} />
            <figcaption>草本采收场景示意</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className={styles.closing} aria-labelledby="closing-title">
      <p className={styles.eyebrow}>JINGYI WELLNESS</p>
      <h2 id="closing-title">一杯茶，一份日常关怀。</h2>
      <p>从医院出发，陪伴每一个平常日子。</p>
      <Link href="/products">探索京颐养方 <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </section>

    <footer className={styles.footer}><span>京颐养方 · 京医古法，颐养东方</span><Link href="/">返回首页 <ArrowUpRight size={15} aria-hidden="true" /></Link></footer>
  </main>;
}
