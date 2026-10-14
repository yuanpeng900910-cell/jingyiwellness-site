"use client";

import { useState, useSyncExternalStore } from "react";
import { formatPrice, type ProductCommerce } from "@/lib/product-commerce";

// Unconfirmed prices are visible only on the project team's review domain.
// Static HTML defaults to no prices, so the public site never flashes a price.
const subscribeToPriceVisibility = () => () => {};
const getPriceVisibility = () => window.location.hostname === "preview.jingyiwellness.online";
const getServerPriceVisibility = () => false;

export function ProductPrice({ commerce, detail = false }: { commerce?: ProductCommerce; detail?: boolean }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const showPrices = useSyncExternalStore(subscribeToPriceVisibility, getPriceVisibility, getServerPriceVisibility);
  if (!commerce) return null;
  if (!showPrices) {
    // Product details already show specifications in their definition list.
    if (detail || !commerce.spec) return null;
    return <span className="jy-price"><span className="jy-price__spec">{commerce.spec}</span></span>;
  }
  if (commerce.status === "upcoming") return <span className="jy-price"><span className="jy-price__pending">待上线</span></span>;

  const variants = commerce.variants ?? [];
  const hasVariants = variants.length > 1;
  const price = commerce.onlinePrice ?? (detail ? variants[selectedVariant]?.price : Math.min(...variants.map((variant) => variant.price)));
  if (price === undefined || !Number.isFinite(price)) return null;
  const originalPrice = commerce.originalPrice;
  const discounted = originalPrice !== undefined && originalPrice > price && commerce.onlinePrice !== undefined;
  const discountLabel = discounted ? `${(price / originalPrice * 10).toFixed(1)}折` : "";
  const from = !detail && hasVariants;
  const priceLabel = commerce.onlinePrice !== undefined ? "线上折扣价" : "售价";

  return <span className={`jy-price${detail ? " jy-price--detail" : ""}`}>
    {detail && hasVariants && <span className="jy-price__variants" role="group" aria-label="选择珠径规格">
      {variants.map((variant, index) => <button type="button" key={variant.label} aria-pressed={selectedVariant === index}
        onClick={() => setSelectedVariant(index)}>{variant.label}</button>)}
    </span>}
    <span className="jy-price__values" aria-live={detail ? "polite" : undefined}>
      {discounted && <span className="jy-price__original">原价 <del>{formatPrice(originalPrice)}</del></span>}
      <span className="jy-price__line">
        {discounted && <span className="jy-price__discount" aria-label={discountLabel}>{discountLabel}</span>}
        <span className="jy-price__amount" aria-label={`${priceLabel} ${price}元${from ? "起" : ""}，每${commerce.unit}`}>
          {detail && <span className="jy-price__label">{priceLabel}</span>}
          <b>{formatPrice(price)}</b><span className="jy-price__unit">{from ? "起" : `/${commerce.unit}`}</span>
        </span>
      </span>
      <span className="jy-price__spec">{detail && variants.length ? `${variants[selectedVariant].label} · 每${commerce.unit}` : commerce.spec}</span>
    </span>
  </span>;
}
