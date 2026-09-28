import records from "./products.json";

export type Category = "全部精选" | "茶饮" | "草本生活" | "御养礼赠";
export type Product = (typeof records)[number] & { purchaseUrl?: string };
export const products: Product[] = records;
export const categories: Category[] = ["全部精选", "茶饮", "草本生活", "御养礼赠"];
export const contact = { name: "梁先生", phone: "18756067013" };
