import records from "./products.json";
import { getProductCommerce, type ProductCommerce } from "./product-commerce";
import { getIncenseFormula } from "./incense-formulas";

export type Category = "全部精选" | "茶饮" | "草本生活" | "御养礼赠";
export type Product = (typeof records)[number] & { purchaseUrl?: string; commerce?: ProductCommerce };
export const products: Product[] = records.map((record) => {
  const commerce = getProductCommerce(record.name);
  return { ...record, spec: commerce?.spec || record.spec, formula: getIncenseFormula(record.name) ?? record.formula, commerce };
});
export const categories: Category[] = ["全部精选", "茶饮", "草本生活", "御养礼赠"];
export const contact = { phone: "0551-66981666", phoneDisplay: "0551-66981666（转人工）" };
