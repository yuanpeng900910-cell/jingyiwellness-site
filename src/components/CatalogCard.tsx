"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy, Phone, X } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";
import { contact, products } from "@/lib/products";

function ProductDialog({ item, category, onClose, onContact }: { item: CatalogItem; category: string; onClose: () => void; onContact: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const product = products.find((entry) => entry.id === item.productId || entry.name === item.name);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    closeButton.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  return <dialog ref={dialog} className="jy-dialog jy-product-dialog jy-catalog-dialog" aria-labelledby="jy-catalog-product-title" onClose={onClose}
    onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
    <button ref={closeButton} type="button" className="jy-dialog__close" aria-label="关闭产品卡片" onClick={() => dialog.current?.close()}><X size={22} /></button>
    <div className="jy-detail-image"><Image src={product?.image ?? item.image ?? "/images/catalog/brand-placeholder.webp"} alt={item.image ? item.name : "京颐养方品牌礼袋"} width={1000} height={1000} sizes="(max-width: 800px) 90vw, 450px" quality={90} /></div>
    <div className="jy-detail-copy">
      <p className="jy-modal-kicker">{product?.series ?? category}</p>
      <h2 id="jy-catalog-product-title">{item.name}</h2>
      {product ? <><p>{product.intro}</p><dl>
        <div><dt>产品规格</dt><dd>{product.spec}</dd></div>
        <div><dt>配料 / 组成</dt><dd>{product.formula}</dd></div>
        <div><dt>适用人群</dt><dd>{product.target}</dd></div>
      </dl></> : null}
      <button type="button" className="jy-primary-action" onClick={onContact}>咨询这款产品 <ArrowRight size={17} /></button>
      {product && <small>产品信息沿用品牌现有资料，具体以实物包装为准。</small>}
    </div>
    {item.detailImages?.length ? <div className="jy-catalog-dialog__gallery" aria-label={`${item.name}补充图片`}>
      {item.detailImages.map((src, index) => <Image key={src} src={src} alt={`${item.name}补充图片 ${index + 1}`} width={750} height={750} sizes="(max-width: 800px) 90vw, 30vw" quality={85} />)}
    </div> : null}
  </dialog>;
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    closeButton.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  async function copyPhone() {
    try { await navigator.clipboard.writeText(contact.phone); setCopied(true); } catch { setCopied(false); }
  }
  return <dialog ref={dialog} className="jy-dialog jy-contact-dialog jy-catalog-contact-dialog" aria-labelledby="jy-catalog-contact-title" onClose={onClose}
    onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
    <button ref={closeButton} type="button" className="jy-dialog__close" aria-label="关闭咨询卡片" onClick={() => dialog.current?.close()}><X size={22} /></button>
    <div className="jy-contact"><p className="jy-modal-kicker">CONTACT</p><h2 id="jy-catalog-contact-title">从一份关怀，开始聊起。</h2>
      <p>产品选购、礼赠定制与场景合作，欢迎联系京颐养方。</p><strong>{contact.name}</strong>
      <a className="jy-phone" href={`tel:${contact.phone}`}>{contact.phone}</a><span>电话与微信同号</span>
      <div className="jy-dialog__actions"><a href={`tel:${contact.phone}`}><Phone size={17} />拨打电话</a><button type="button" onClick={copyPhone}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "微信号已复制" : "复制微信号"}</button></div>
    </div>
  </dialog>;
}

export function CatalogCard({ item, category }: { item: CatalogItem; category: string }) {
  const [mode, setMode] = useState<"product" | "contact" | null>(null);
  return <article className="jy-catalog-card">
    <button type="button" className="jy-catalog-card__button" onClick={() => setMode("product")} aria-label={`查看${item.name}详情`}>
      <span className={`jy-catalog-card__visual${item.image ? "" : " jy-catalog-card__visual--placeholder"}${item.image?.startsWith("/images/box-only/") || item.image?.startsWith("/images/catalog/soap-") ? " jy-catalog-card__visual--cutout" : ""}`}><Image src={item.image ?? "/images/catalog/brand-placeholder.webp"} alt={item.image ? `${item.name}产品展示图` : "京颐养方品牌礼袋"} fill sizes="(max-width: 600px) 48vw, (max-width: 1000px) 32vw, 24vw" quality={88} /></span>
      <span className="jy-catalog-card__caption"><strong>{item.name}</strong>{item.note && <span>{item.note}</span>}</span>
    </button>
    {mode === "product" && <ProductDialog item={item} category={category} onClose={() => setMode(null)} onContact={() => setMode("contact")} />}
    {mode === "contact" && <ContactDialog onClose={() => setMode(null)} />}
  </article>;
}
