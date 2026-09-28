"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ArrowUp, ArrowUpRight, Check, ChevronLeft, ChevronRight, Copy, Phone, Search, X } from "lucide-react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, FreeMode, Grid, Pagination, Parallax, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { contact, products, type Category, type Product } from "@/lib/products";
import { CatalogProductDialog } from "@/components/CatalogCard";
import { DesktopNavigation, MobileNavigation } from "@/components/SiteNavigation";

type Modal = { kind: "product"; product: Product } | { kind: "contact" } | { kind: "monthly" };
type HeroSlide = { kicker: string; title: [string, string]; subtitle: string; image: string; mobileImage: string; theme: string; href: string; alt: string };

const monthlyProduct = { name: "温胆汤足浴液", image: "/images/catalog/footbath-wendan-head-v2.webp" };

const heroSlides: HeroSlide[] = [
  { kicker: "JINGYI WELLNESS", title: ["京医古法", "颐养东方"], subtitle: "让东方轻养，自然融入日常。", image: "/images/hero-baihe-desktop-v1.webp", mobileImage: "/images/hero-baihe-mobile-v1.webp", theme: "tea", href: "/products/herbal-tea", alt: "京颐养方百合玉竹茶包装与茶杯" },
  { kicker: "草本生活", title: ["一缕草本香", "日常自从容"], subtitle: "把草本的陪伴，带进生活。", image: "/images/master/hero-life-purple-desktop.webp", mobileImage: "/images/master/hero-life-purple-mobile.webp", theme: "life", href: "/products/incense-beads", alt: "紫气东来·瑞紫流金合香珠手串" },
  { kicker: "东方养生礼", title: ["以东方好物", "赠一份关怀"], subtitle: "为亲友，也为一路同行的人。", image: "/images/hero-gift-lighting-v3.webp", mobileImage: "/images/hero-gift-lighting-v3.webp", theme: "gift", href: "/gifts", alt: "京颐养方参石御养小罐茶礼盒" },
];

const mobileCategories: { label: string; category: Category }[] = [
  { label: "精选好物", category: "全部精选" },
  { label: "草本茶饮", category: "茶饮" },
  { label: "草本生活", category: "草本生活" },
  { label: "东方养生礼", category: "御养礼赠" },
];

const hasTeaPackageFocus = (product: Product) => product.series === "轻养小罐茶系列" || product.series === "辨体调养茶系列";
const braceletProductIds = new Set(["ruiziliujin", "meixiang"]);
const bestAndNewIds = ["baihe", "fuling", "shenzhi", "ruiziliujin", "meixiang", "pillow", "hongyan", "qingshi"];
const bestAndNewProducts = products.filter((product) => bestAndNewIds.includes(product.id)).sort((first, second) => bestAndNewIds.indexOf(first.id) - bestAndNewIds.indexOf(second.id));
const orderedProducts = [...bestAndNewProducts, ...products.filter((product) => !bestAndNewIds.includes(product.id))];
const wideProductIds = new Set(["pillow", "gift", "comb"]);
const squareProductIds = new Set(["qinghe", "yangyuan", "gehua"]);

function productImageSizes(product: Product, compact = false) {
  // The cards are square; a wide source needs extra pixels before object-fit crops it.
  if (wideProductIds.has(product.id)) return compact ? "(max-width: 800px) 140px, 320px" : "(max-width: 800px) 60vw, 500px";
  if (squareProductIds.has(product.id)) return compact ? "(max-width: 800px) 80px, 180px" : "(max-width: 800px) 33vw, 280px";
  return compact ? "(max-width: 800px) 110px, 235px" : "(max-width: 800px) 45vw, 375px";
}

function productDetailSizes(product: Product) {
  if (braceletProductIds.has(product.id)) return "(max-width: 800px) 90vw, 700px";
  if (wideProductIds.has(product.id)) return "(max-width: 800px) 155vw, 800px";
  if (squareProductIds.has(product.id)) return "(max-width: 800px) 88vw, 450px";
  return "(max-width: 800px) 118vw, 600px";
}

function ProductCard({ product, compact = false, onSelect }: { product: Product; compact?: boolean; onSelect: (product: Product) => void }) {
  return <article className={(compact ? "product-card product-card--compact jy-product" : "product-card jy-product") + (hasTeaPackageFocus(product) ? " jy-product--tea-package" : "")}>
    <button type="button" className="jy-product__button" onClick={() => onSelect(product)} aria-label={"查看" + product.name + "详情"}>
      <span className="product-card__image"><Image src={product.cardImage} alt={product.name} width={1000} height={1000} sizes={productImageSizes(product, compact)} quality={90} /></span>
      <span className="jy-product__copy">
        <strong className="product-card__name">{product.name}</strong>
        <span className="product-card__original">{product.series}</span>
        <span className="product-card__price">了解这款 <ArrowUpRight size={15} aria-hidden="true" /></span>
      </span>
    </button>
  </article>;
}

function BestProductSwiper({ items, onSelect }: { items: Product[]; onSelect: (product: Product) => void }) {
  const mobilePages = Array.from({ length: Math.ceil(items.length / 6) }, (_, index) => items.slice(index * 6, index * 6 + 6));
  return <div className="best-swiper-wrap">
    {items.length ? <>
      <div className="best-swiper-desktop"><Swiper key={items.map((item) => item.id).join("-")} className="best-product-swiper" modules={[Pagination, A11y]}
        slidesPerGroup={4} slidesPerView={4} spaceBetween={12}
        pagination={{ clickable: true, el: ".best-product-pagination--desktop" }}
        a11y={{ containerMessage: "京颐养方精选产品", slideLabelMessage: "第 {{index}} 款，共 {{slidesLength}} 款" }}>
        {items.map((product) => <SwiperSlide key={product.id}><ProductCard product={product} onSelect={onSelect} /></SwiperSlide>)}
      </Swiper><div className="best-product-pagination best-product-pagination--desktop" /></div>
      <div className="best-swiper-mobile"><Swiper key={items.map((item) => item.id).join("-")} className="best-product-swiper best-product-swiper--mobile-pages" modules={[Pagination, A11y]}
        slidesPerView={1} pagination={{ clickable: true, el: ".best-product-pagination--mobile" }}
        a11y={{ containerMessage: "京颐养方精选产品", slideLabelMessage: "第 {{index}} 页，共 {{slidesLength}} 页" }}>
        {mobilePages.map((page, index) => <SwiperSlide key={index}><div className="best-product-page-grid">{page.map((product) => <ProductCard key={product.id} product={product} onSelect={onSelect} />)}</div></SwiperSlide>)}
      </Swiper><div className="best-product-pagination best-product-pagination--mobile" /></div>
    </> : <div className="jy-empty"><p>暂时没有找到这款好物。</p><span>试试其他产品名称，或浏览全部精选。</span></div>}
  </div>;
}

function RecommendedProductSwiper({ items, onSelect }: { items: Product[]; onSelect: (product: Product) => void }) {
  const pages = Array.from({ length: Math.ceil(items.length / 4) }, (_, index) => items.slice(index * 4, index * 4 + 4));
  return <div className="recommended-swiper-wrap">
    <div className="recommended-desktop-swiper"><Swiper className="recommended-page-swiper" modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true, el: ".recommended-product-pagination--desktop" }}>
      {pages.map((page, index) => <SwiperSlide key={index}><div className="recommended-page-grid">{page.map((product) => <ProductCard compact key={product.id} product={product} onSelect={onSelect} />)}</div></SwiperSlide>)}
    </Swiper><div className="recommended-product-pagination recommended-product-pagination--desktop" /></div>
    <div className="recommended-mobile-swiper"><Swiper className="recommended-product-swiper" modules={[Grid, Pagination]} grid={{ rows: 3, fill: "column" }} slidesPerGroup={1} slidesPerView={1} pagination={{ clickable: true, el: ".recommended-product-pagination--mobile" }}>
      {items.map((product) => <SwiperSlide key={product.id}><ProductCard compact product={product} onSelect={onSelect} /></SwiperSlide>)}
    </Swiper><div className="recommended-product-pagination recommended-product-pagination--mobile" /></div>
  </div>;
}

function ModalShell({ titleId, onClose, children, className = "" }: { titleId: string; onClose: () => void; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const oldOverflow = document.body.style.overflow;
    dialog?.showModal();
    closeRef.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; };
  }, []);
  return <dialog ref={ref} className={"jy-dialog " + className} aria-labelledby={titleId} onClose={onClose}
    onClick={(event) => { if (event.target === event.currentTarget) ref.current?.close(); }}>
    <button ref={closeRef} type="button" className="jy-dialog__close" aria-label="关闭窗口" onClick={() => ref.current?.close()}><X size={22} /></button>{children}
  </dialog>;
}

function ContactContent() {
  const [copied, setCopied] = useState<"idle" | "ok" | "failed">("idle");
  async function copyPhone() {
    try { await navigator.clipboard.writeText(contact.phone); setCopied("ok"); }
    catch { setCopied("failed"); }
  }
  return <div className="jy-contact">
    <p className="jy-modal-kicker">联系咨询</p><h2 id="jy-contact-title">从一份关怀，开始聊起。</h2>
    <p>产品选购、礼赠定制与场景合作，欢迎联系京颐养方。</p>
    <strong>{contact.name}</strong><a className="jy-phone" href={"tel:" + contact.phone}>{contact.phoneDisplay}</a>
    <div className="jy-dialog__actions"><a href={"tel:" + contact.phone}><Phone size={17} />拨打电话</a><button type="button" onClick={copyPhone}>{copied === "ok" ? <Check size={17} /> : <Copy size={17} />}{copied === "ok" ? "电话号码已复制" : "复制电话号码"}</button></div>
    <p className="jy-copy-status" role="status">{copied === "ok" ? "电话号码已复制，可粘贴到拨号界面。" : copied === "failed" ? "复制未成功，请选中上方号码手动复制。" : "可提前告知所需产品、数量和使用场景。"}</p>
  </div>;
}

export function JingyiTemplateHome() {
  const [category, setCategory] = useState<Category>("全部精选");
  const [query, setQuery] = useState("");
  const [draftQuery, setDraftQuery] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [modal, setModal] = useState<Modal | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [animatedHero, setAnimatedHero] = useState(0);
  const hero = useRef<SwiperInstance | null>(null);
  const heroTextTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 4);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const locked = searchOpen || drawerOpen;
    const before = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = before; };
  }, [searchOpen, drawerOpen]);
  useEffect(() => {
    function onKey(event: KeyboardEvent) { if (event.key === "Escape") { setSearchOpen(false); setDrawerOpen(false); } }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { if (searchOpen) searchInput.current?.focus(); }, [searchOpen]);
  useEffect(() => () => { if (heroTextTimer.current) clearTimeout(heroTextTimer.current); }, []);

  const filteredProducts = orderedProducts.filter((product) => (category === "全部精选" || product.group === category) && (product.name + product.series + product.tagline).includes(query.trim()));
  const visibleProducts = category === "全部精选" && !query && !showAllProducts ? bestAndNewProducts : filteredProducts;
  const teaProducts = products.filter((product) => product.group === "茶饮").slice(3, 11);
  const lifestyleProducts = products.filter((product) => product.group === "草本生活");
  const searchMatches = products.filter((product) => (product.name + product.series).includes(draftQuery.trim())).slice(0, 6);

  function selectCategory(next: Category, target = "best") {
    setCategory(next); setQuery(""); setDraftQuery(""); setShowAllProducts(true); setSearchOpen(false); setDrawerOpen(false);
    window.requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }));
  }
  function submitSearch(event?: FormEvent) {
    event?.preventDefault();
    setCategory("全部精选"); setQuery(draftQuery.trim()); setShowAllProducts(true); setSearchOpen(false);
    window.requestAnimationFrame(() => document.getElementById("best")?.scrollIntoView({ behavior: "smooth" }));
  }
  return <main className="osulloc-page jingyi-template">
    <a className="jy-skip" href="#best">跳到精选产品</a>
    <header className={"site-header" + (scrolled || searchOpen ? " fixed" : "") + (searchOpen ? " open-search" : "")}>
      <div className="site-header__inner">
        <button type="button" className="open-m-nav" aria-label="打开导航菜单" onClick={() => setDrawerOpen(true)}><span className="line" /><span className="line" /><span className="line" /></button>
        <div className="site-header__logo"><a href="#top" aria-label="京颐养方首页"><Image src="/images/logo.webp" alt="京颐养方 JINGYI WELLNESS" width={184} height={63} quality={90} preload /></a></div>
        <DesktopNavigation />
        <div className="site-header__utility"><button type="button" className="utility-icon icon-search" aria-label="搜索产品" onClick={() => { setSearchOpen(true); setDrawerOpen(false); }}><Search size={21} strokeWidth={1.8} /></button><button type="button" className="jy-header-contact utility-link" onClick={() => setModal({ kind: "contact" })}>合作咨询</button></div>
      </div>
    </header>

    <aside className={"mobile-drawer" + (drawerOpen ? " active" : "")} aria-hidden={!drawerOpen}>
      <button type="button" className="btn-x mobile-drawer__close" aria-label="关闭导航菜单" onClick={() => setDrawerOpen(false)} />
      <div className="mobile-drawer__header"><span>京医古法，颐养东方</span></div>
      <div className="mobile-drawer__content"><MobileNavigation onNavigate={() => setDrawerOpen(false)} /></div>
      <div className="mobile-drawer__footer"><a href="https://jingyiwellness.online/qa" target="_blank" rel="noreferrer">常见问题</a><button type="button" onClick={() => { setDrawerOpen(false); setModal({ kind: "contact" }); }}>联系我们</button></div>
    </aside>

    <div className={"search-layer" + (searchOpen ? " active" : "")} aria-hidden={!searchOpen}>
      <div className="search-layer__inner"><div className="search-layer__header">
        <button type="button" className="btn-x search-layer__close" aria-label="关闭搜索" onClick={() => setSearchOpen(false)} />
        <form className="search-layer__inputbox" onSubmit={submitSearch}><input ref={searchInput} className="search-layer__input" type="search" aria-label="搜索京颐养方产品" placeholder="搜索京颐养方产品" value={draftQuery} onChange={(event) => setDraftQuery(event.target.value)} /><button type="submit" className="search-layer__submit" aria-label="提交搜索" /></form>
      </div><div className="search-layer__content"><section className="search-chart jy-search-chart"><div className="search-chart__header"><h3>{draftQuery ? "搜索结果" : "寻找一款好物"}</h3></div>
        {searchMatches.length ? <ol className="search-chart__list">{searchMatches.map((product, index) => <li key={product.id}><b>{index + 1}</b><button type="button" onClick={() => { setSearchOpen(false); setModal({ kind: "product", product }); }}>{product.name}</button></li>)}</ol> : <p>暂时没有找到这款好物，试试其他名称。</p>}
      </section></div></div>
    </div>

    <section className={"hero-section jingyi-hero jingyi-hero--" + heroSlides[activeHero].theme} id="top" aria-label="京颐养方品牌与产品">
      <Swiper className="hero-section__swiper" modules={[A11y, Autoplay, Parallax]} loop slidesPerView={1} speed={450} parallax watchSlidesProgress
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
        a11y={{ containerMessage: "京颐养方首页主题，可左右滑动切换", slideLabelMessage: "第 {{index}} 个主题，共 {{slidesLength}} 个主题" }}
        onSwiper={(instance) => { hero.current = instance; }}
        onSlideChange={(instance) => setActiveHero(instance.realIndex)}
        onSlideChangeTransitionStart={() => { if (heroTextTimer.current) clearTimeout(heroTextTimer.current); }}
        onSlideChangeTransitionEnd={(instance) => { heroTextTimer.current = setTimeout(() => setAnimatedHero(instance.realIndex), 50); }}>
        {heroSlides.map((slide, index) => <SwiperSlide className={"hero-slide hero-slide--" + slide.theme + (animatedHero === index ? " active_anim" : "")} key={slide.theme}>
          <picture data-swiper-parallax-x="95%"><source media="(max-width: 800px)" srcSet={slide.mobileImage} /><Image src={slide.image} alt={slide.alt} fill sizes={slide.theme === "gift" ? "(max-width: 800px) 100vw, 55vw" : "100vw"} quality={90} loading="eager" /></picture>
          <div className="hero-section__copy"><p><span><em>{slide.kicker}</em></span></p><h1><span><em>{slide.title[0]}</em></span><span><em>{slide.title[1]}</em></span></h1><strong><span><em>{slide.subtitle}</em></span></strong><Link href={slide.href} className="jy-hero-link">了解更多 <ArrowRight size={15} /></Link></div>
        </SwiperSlide>)}
      </Swiper>
      <button type="button" className="hero-section__arrow hero-section__arrow--prev" aria-label="上一张主题" onClick={() => hero.current?.slidePrev()}><ChevronLeft size={36} strokeWidth={1.2} /></button>
      <button type="button" className="hero-section__arrow hero-section__arrow--next" aria-label="下一张主题" onClick={() => hero.current?.slideNext()}><ChevronRight size={36} strokeWidth={1.2} /></button>
      <div className="hero-section__scrollbar" aria-hidden="true"><span className="hero-section__scrollbar-drag" style={{ width: `${100 / heroSlides.length}%`, left: `${activeHero * 100 / heroSlides.length}%` }} /></div>
      <span className="jy-hero-count" aria-live="polite">0{activeHero + 1} / 0{heroSlides.length}</span>
    </section>

    <nav className="mobile-category" aria-label="手机产品分类"><Swiper className="category-swiper" modules={[FreeMode]} freeMode slidesPerView="auto">
      {mobileCategories.map((item) => <SwiperSlide className={category === item.category ? "active" : ""} key={item.label}><button type="button" onClick={() => selectCategory(item.category)}>{item.label}</button></SwiperSlide>)}
    </Swiper></nav>

    <section className="content-section best-section" id="best" aria-labelledby="best-title">
      <div className="section-heading"><h2 id="best-title">精选好物</h2><Link href="/products">查看全部</Link></div>
      <BestProductSwiper items={visibleProducts} onSelect={(product) => setModal({ kind: "product", product })} />
    </section>

    <section className="content-section deal-section" id="tea" aria-labelledby="tea-title">
      <h2 id="tea-title">草本茶饮</h2>
      <div className="deal-section__grid"><button type="button" className="deal-section__image jy-tea-feature" onClick={() => setModal({ kind: "product", product: products[0] })}><Image src="/images/master/tea-yan-shi-feature.webp" alt="京颐养方红颜茶与轻湿茶双款茶饮" width={1672} height={941} sizes="(max-width: 800px) 100vw, 75vw" quality={90} /></button>
        <div className="deal-section__products"><RecommendedProductSwiper items={teaProducts} onSelect={(product) => setModal({ kind: "product", product })} /></div></div>
    </section>

    <section className="content-section split-section todays-section" id="gifts">
      <article className="todays-event todays-deal"><div className="todays-header"><h2>本周甄选</h2><p>以东方好物，赠一份日常关怀。</p></div>
        <button type="button" className="todays-link jy-feature-card jy-feature-card--issue" onClick={() => setModal({ kind: "product", product: products[3] })}><div className="issue-copy"><h3 className="issue-title">以东方好物，<br />赠一份日常关怀。</h3><p className="issue-product">参石御养小罐茶礼盒</p><strong>了解这款 <ArrowUpRight size={17} /></strong></div><div className="issue-card"><Image src="/images/master/hero-gift.webp" alt="参石御养小罐茶礼盒" width={1672} height={941} sizes="(max-width: 800px) 100vw, 50vw" quality={90} /></div></button></article>
      <article className="todays-event event-now"><div className="todays-header"><h2>本月精选</h2></div>
        <button type="button" className="todays-link jy-feature-card jy-feature-card--now" onClick={() => setModal({ kind: "monthly" })}><div className="now-copy"><h3>本月草本生活精选</h3><p>把草本的陪伴，带进生活。</p><span>温胆汤足浴液 <ArrowUpRight size={17} /></span></div><div className="jy-now-products"><span><Image src={monthlyProduct.image} alt={monthlyProduct.name} width={1000} height={1000} sizes="180px" quality={90} /><strong>{monthlyProduct.name}</strong></span><span><Image src="/images/master/hero-life-purple.webp" alt="紫气东来·瑞紫流金合香珠手串" width={1421} height={800} sizes="180px" quality={90} /><strong>瑞紫流金</strong></span></div></button></article>
    </section>

    <section className="content-section store-section" id="lifestyle" aria-labelledby="lifestyle-title"><div className="section-heading"><h2 id="lifestyle-title">草本生活</h2><Link href="/products/herbal-living">查看全部</Link></div>
      <div className="store-swiper-wrap"><Swiper className="store-swiper" modules={[Scrollbar]} breakpoints={{ 0: { centeredSlides: true, slidesPerView: 1.127, spaceBetween: 7.5 }, 801: { slidesPerView: 2, spaceBetween: 20 } }} scrollbar={{ draggable: true, dragClass: "store-scrollbar-drag", el: ".store-scrollbar" }}>
        {lifestyleProducts.map((product) => <SwiperSlide key={product.id}><button type="button" className="jy-lifestyle-card" onClick={() => setModal({ kind: "product", product })}><Image src={product.image} alt={product.name} width={1421} height={800} sizes="(max-width: 800px) 85vw, 50vw" quality={90} /><strong>{product.name}</strong></button></SwiperSlide>)}
      </Swiper><div className="store-scrollbar" /></div>
    </section>

    <section className="content-section brand-section" id="brand" aria-labelledby="brand-title"><div className="section-heading"><h2 id="brand-title">品牌故事</h2></div>
      <Link href="/brand-story" className="brand-section__banner jy-brand-banner"><Image src="/images/master/brand-story-herbal-study.webp" alt="京颐养方草本研究与东方养生场景" width={1448} height={1086} sizes="100vw" quality={90} /><p>京医古法，颐养东方<ArrowUpRight size={26} /></p></Link>
    </section>

    <footer className="footer-section" id="contact"><div className="footer-section__desktop"><div className="footer-logo"><Image src="/images/logo.webp" alt="京颐养方" width={184} height={63} quality={90} /></div><div><h3>产品与合作咨询</h3><strong>{contact.phoneDisplay}</strong><p>联系人：{contact.name}</p></div><div><h3>京颐养方</h3><p>草本茶饮 · 草本生活 · 东方养生礼</p><p>京医古法，颐养东方</p></div><div><h3>了解更多</h3><p><a href="https://jingyiwellness.online/qa" target="_blank" rel="noreferrer">常见问题</a></p><p><Link href="/brand-story">品牌故事</Link></p></div></div>
      <div className="footer-legal"><p>京颐养方 · 京医古法，颐养东方</p><p>产品用于日常轻养与健康生活方式，不替代药品及医疗服务。具体使用建议请结合个人情况咨询专业人员。</p></div>
      <div className="footer-section__mobile"><p>京颐养方 · 京医古法，颐养东方</p><div className="footer-contact"><strong>产品与合作咨询</strong><a href={"tel:" + contact.phone}>{contact.phoneDisplay}</a></div><p>产品不替代药品及医疗服务。</p></div>
    </footer>
    {scrolled && <a className="top-button" href="#top" aria-label="返回顶部"><ArrowUp size={18} /></a>}

    {modal?.kind === "product" && <ModalShell key={modal.product.id} titleId="jy-product-title" onClose={() => setModal(null)} className={"jy-product-dialog" + (hasTeaPackageFocus(modal.product) ? " jy-product-dialog--tea-package" : "") + (braceletProductIds.has(modal.product.id) ? " jy-product-dialog--bracelet" : "")}><div className="jy-detail-image"><Image src={modal.product.image} alt={modal.product.name} width={hasTeaPackageFocus(modal.product) ? 800 : 1000} height={hasTeaPackageFocus(modal.product) ? 600 : 1000} sizes={productDetailSizes(modal.product)} quality={90} loading="eager" /></div><div className="jy-detail-copy"><p className="jy-modal-kicker">{modal.product.series}</p><h2 id="jy-product-title">{modal.product.name}</h2><p>{modal.product.intro}</p><dl><div><dt>产品规格</dt><dd>{modal.product.spec}</dd></div><div><dt>配料 / 组成</dt><dd>{modal.product.formula}</dd></div><div><dt>适用人群</dt><dd>{modal.product.target}</dd></div></dl><div className="jy-dialog__actions">{modal.product.purchaseUrl && <a href={modal.product.purchaseUrl} className="jy-primary-action">前往有赞购买 <ArrowRight size={17} /></a>}<button type="button" className="jy-primary-action" onClick={() => setModal({ kind: "contact" })}>咨询这款产品 <ArrowRight size={17} /></button></div><small>产品信息沿用品牌现有资料，具体以实物包装为准。</small></div></ModalShell>}
    {modal?.kind === "monthly" && <CatalogProductDialog item={monthlyProduct} category="草本生活" onClose={() => setModal(null)} onContact={() => setModal({ kind: "contact" })} />}
    {modal?.kind === "contact" && <ModalShell key="contact" titleId="jy-contact-title" onClose={() => setModal(null)} className="jy-contact-dialog"><ContactContent /></ModalShell>}
  </main>;
}
