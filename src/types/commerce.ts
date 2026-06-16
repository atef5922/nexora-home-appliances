export type CategorySlug =
  | "refrigerator"
  | "air-conditioner"
  | "washing-machine"
  | "television"
  | "microwave-oven"
  | "kitchen-appliances"
  | "water-purifier"
  | "vacuum-cleaner"
  | "rice-cooker"
  | "blender"
  | "geyser"
  | "fan";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  productCount: number;
  image: string;
  guide: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  warranty: string;
  badge?: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  emiMonthly: number;
}

export interface CartLine {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  amount: number;
  status: "Delivered" | "Processing" | "Shipped" | "Returned";
}
