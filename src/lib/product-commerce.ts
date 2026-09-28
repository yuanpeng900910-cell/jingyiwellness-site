import records from "./product-commerce.json";

export type ProductVariant = { label: string; price: number };
export type ProductCommerce = {
  name: string;
  aliases: string[];
  originalPrice?: number;
  onlinePrice?: number;
  unit: string;
  spec: string;
  status?: string;
  variants?: ProductVariant[];
};

const commerceByName = new Map<string, ProductCommerce>();
for (const record of records) {
  for (const name of [record.name, ...record.aliases]) commerceByName.set(name, record);
}

export function getProductCommerce(name: string) {
  return commerceByName.get(name);
}

export function formatPrice(price: number) {
  return `¥${Number(price.toFixed(2))}`;
}
