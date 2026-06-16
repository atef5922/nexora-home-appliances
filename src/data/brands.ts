export interface BrandLogo {
  name: string;
  slug: string;
  tagline: string;
  productCount: number;
  logoSrc?: string;
  wordmarkClass: string;
}

export const applianceBrands: BrandLogo[] = [
  { name: "Samsung", slug: "samsung", tagline: "Smart cooling", productCount: 32, logoSrc: "/brands/samsung.svg", wordmarkClass: "text-[#1428A0] tracking-[-0.03em]" },
  { name: "LG", slug: "lg", tagline: "Smart living", productCount: 24, logoSrc: "/brands/lg.svg", wordmarkClass: "text-[#A50034] tracking-[-0.02em]" },
  { name: "Walton", slug: "walton", tagline: "Local leader", productCount: 28, logoSrc: "/brands/walton.svg", wordmarkClass: "text-[#087A43]" },
  { name: "Vision", slug: "vision", tagline: "Display systems", productCount: 18, logoSrc: "/brands/vision.svg", wordmarkClass: "text-[#2046A3]" },
  { name: "Philips", slug: "philips", tagline: "Kitchen care", productCount: 22, logoSrc: "/brands/philips.svg", wordmarkClass: "text-[#0B5ED7]" },
  { name: "Miyako", slug: "miyako", tagline: "Daily kitchen", productCount: 16, logoSrc: "/brands/miyako.svg", wordmarkClass: "text-[#D36A17]" },
  { name: "Panasonic", slug: "panasonic", tagline: "Home innovation", productCount: 20, logoSrc: "/brands/panasonic.svg", wordmarkClass: "text-[#004B93]" },
  { name: "Pureit", slug: "pureit", tagline: "Water safety", productCount: 12, logoSrc: "/brands/pureit.svg", wordmarkClass: "text-[#008C95]" },
  { name: "Sony", slug: "sony", tagline: "Entertainment", productCount: 14, logoSrc: "/brands/sony.svg", wordmarkClass: "text-[#111827] tracking-[0.04em]" },
  { name: "Dyson", slug: "dyson", tagline: "Air technology", productCount: 10, logoSrc: "/brands/dyson.svg", wordmarkClass: "text-[#3F3F46] lowercase" },
  { name: "Haier", slug: "haier", tagline: "Fresh storage", productCount: 19, logoSrc: "/brands/haier.svg", wordmarkClass: "text-[#005BAA]" },
  { name: "Sharp", slug: "sharp", tagline: "Reliable care", productCount: 15, logoSrc: "/brands/sharp.svg", wordmarkClass: "text-[#D71920]" },
  { name: "Whirlpool", slug: "whirlpool", tagline: "Laundry care", productCount: 17, logoSrc: "/brands/whirlpool.svg", wordmarkClass: "text-[#6B4A13]" },
  { name: "Hitachi", slug: "hitachi", tagline: "Premium cooling", productCount: 13, logoSrc: "/brands/hitachi.svg", wordmarkClass: "text-[#C8102E]" },
  { name: "Singer", slug: "singer", tagline: "Trusted homes", productCount: 21, logoSrc: "/brands/singer.svg", wordmarkClass: "text-[#D71920]" },
  { name: "Minister", slug: "minister", tagline: "Family value", productCount: 18, logoSrc: "/brands/minister.svg", wordmarkClass: "text-[#0B6B3A]" }
];

export const brandNames = applianceBrands.map((brand) => brand.name);
