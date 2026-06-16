import type { Category, Order, Product } from "@/types/commerce";
import { brandNames } from "@/data/brands";

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;
const emiFrom = (price: number) => Math.ceil(price / 12 / 10) * 10;

export const categories: Category[] = [
  {
    slug: "refrigerator",
    name: "Refrigerator",
    description: "Energy-efficient cooling with inverter compressors, frost-free storage, and elegant finishes.",
    productCount: 32,
    image: img("photo-1571175443880-49e1d25b2bc5"),
    guide: "Choose inverter cooling, tempered shelves, and convertible space for Bangladesh summers."
  },
  {
    slug: "air-conditioner",
    name: "Air Conditioner",
    description: "Fast cooling split ACs with low-noise operation, smart modes, and strong after-sales support.",
    productCount: 24,
    image: img("photo-1621955964441-c173e01c135b"),
    guide: "Match tonnage to room size, check ISEER rating, and prioritize copper condenser builds."
  },
  {
    slug: "washing-machine",
    name: "Washing Machine",
    description: "Front-load, top-load, and washer-dryer machines for careful fabric care.",
    productCount: 28,
    image: img("photo-1626806787461-102c1bfaaea1"),
    guide: "Front-load models save water, while top-load models are easier for quick daily use."
  },
  {
    slug: "television",
    name: "Television",
    description: "4K smart TVs, OLED displays, gaming panels, and cinematic home entertainment.",
    productCount: 40,
    image: img("photo-1593359677879-a4bb92f829d1"),
    guide: "Look for HDR support, native refresh rate, panel type, and warranty coverage."
  },
  {
    slug: "microwave-oven",
    name: "Microwave Oven",
    description: "Solo, grill, and convection ovens for compact kitchens and family meals.",
    productCount: 16,
    image: img("photo-1585659722983-3a675dabf23d"),
    guide: "Convection ovens are best for baking; grill models are better for quick snacks."
  },
  {
    slug: "kitchen-appliances",
    name: "Kitchen Appliances",
    description: "Premium blenders, mixers, processors, coffee systems, and small appliances.",
    productCount: 56,
    image: img("photo-1556911220-bff31c812dba"),
    guide: "Check motor wattage, jar quality, safety locks, and service availability."
  },
  {
    slug: "water-purifier",
    name: "Water Purifier",
    description: "RO, UV, and UF purification systems for safe drinking water.",
    productCount: 18,
    image: img("photo-1606168094336-48f205c4d1d3"),
    guide: "Pick RO for high TDS water and UV/UF for lower TDS municipal supply."
  },
  {
    slug: "vacuum-cleaner",
    name: "Vacuum Cleaner",
    description: "Cordless, wet-dry, robotic, and high-suction cleaning systems.",
    productCount: 12,
    image: img("photo-1558317374-067fb5f30001"),
    guide: "Choose HEPA filtration and attachments based on floor type, carpets, and pets."
  },
  {
    slug: "rice-cooker",
    name: "Rice Cooker",
    description: "Smart cookers with keep-warm, steaming, and family-sized capacities.",
    productCount: 22,
    image: img("photo-1512058564366-18510be2db19"),
    guide: "For families, 1.8L to 2.8L models balance speed and capacity."
  },
  {
    slug: "blender",
    name: "Blender",
    description: "High-speed blending, juicing, grinding, and food preparation.",
    productCount: 34,
    image: img("photo-1570222094114-d054a817e56b"),
    guide: "Stainless blades, overload protection, and spare jars are worth prioritizing."
  },
  {
    slug: "geyser",
    name: "Geyser",
    description: "Instant and storage water heaters with durable tanks and safety controls.",
    productCount: 15,
    image: img("photo-1581092160562-40aa08e78837"),
    guide: "Use instant geysers for one point and storage geysers for family bathrooms."
  },
  {
    slug: "fan",
    name: "Fan",
    description: "Ceiling, pedestal, exhaust, and BLDC fans for efficient air movement.",
    productCount: 48,
    image: img("photo-1581091226825-a6a2a5aee158"),
    guide: "BLDC fans reduce electricity cost and work well with voltage fluctuation."
  }
];

const productImage = {
  refrigerator: "/products/pngwing.com.png",
  ac: "/products/air-conditioner-1-8-ton-singer-green-inverter-22cbr32lvsgrih-1745136952.webp",
  washer: "/products/product_beko-front-loading-washing-machine-8-0-kg-wcv8636xb0m-1752479139.webp",
  tv: "/products/W32L1CL-(Front).jpg",
  microwave: "/products/product_singer-microwave-oven-25-ltr-smw25gch-1754985762.webp",
  kitchen: "/products/philips-na231-09-official-01-228x228.webp",
  purifier: "/products/1745763342-60840688.png",
  blender: "/products/wbl-15p250-id-01-364x364.jpeg"
} as const;

export const products: Product[] = [
  {
    id: "p-001",
    slug: "walton-255l-inverter-double-door-refrigerator",
    name: "Walton 255L Inverter Double Door Refrigerator",
    brand: "Walton",
    category: "refrigerator",
    price: 40990,
    oldPrice: 52990,
    discount: 23,
    rating: 4.8,
    reviewCount: 214,
    stock: 12,
    warranty: "12 Years Compressor Warranty, 1 Year Spare Parts",
    badge: "Best Seller",
    image: productImage.refrigerator,
    gallery: [productImage.refrigerator, productImage.refrigerator, productImage.refrigerator],
    features: ["Digital inverter cooling", "Frost-free fresh storage", "Tempered glass shelves", "Low-voltage stabilizer-free operation"],
    specifications: { Capacity: "255 Litres", Type: "Double Door", Compressor: "Inverter", Finish: "Silver" },
    tags: ["cooling", "inverter", "family", "double-door"],
    isBestSeller: true,
    emiMonthly: emiFrom(40990)
  },
  {
    id: "p-002",
    slug: "beko-8kg-front-load-washing-machine-wcv8636xb0m",
    name: "Beko 8kg Front Load Washing Machine WCV8636XB0M",
    brand: "Beko",
    category: "washing-machine",
    price: 34990,
    oldPrice: 46990,
    discount: 26,
    rating: 4.7,
    reviewCount: 168,
    stock: 10,
    warranty: "12 Years Motor Warranty",
    badge: "SteamCare",
    image: productImage.washer,
    gallery: [productImage.washer, productImage.washer, productImage.washer],
    features: ["Steam hygiene wash", "Daily quick program", "Energy-efficient inverter motor", "Gentle drum care for fabrics"],
    specifications: { Capacity: "8 kg", Type: "Front Load", RPM: "1200", Programs: "15 Wash Modes" },
    tags: ["laundry", "steam", "inverter", "front-load"],
    isBestSeller: true,
    emiMonthly: emiFrom(34990)
  },
  {
    id: "p-003",
    slug: "singer-1-8-ton-green-inverter-ac-22cbr32lvsgrih",
    name: "Singer 1.8 Ton Green Inverter AC 22CBR32LVSGRIH",
    brand: "Singer",
    category: "air-conditioner",
    price: 52990,
    oldPrice: 69990,
    discount: 24,
    rating: 4.7,
    reviewCount: 132,
    stock: 18,
    warranty: "10 Years Compressor, 2 Years Spare Parts",
    badge: "Mega Cooling",
    image: productImage.ac,
    gallery: [productImage.ac, productImage.ac, productImage.ac],
    features: ["Green inverter technology", "Turbo cooling mode", "Copper condenser build", "Low-noise energy-saving operation"],
    specifications: { Capacity: "1.8 Ton", Technology: "Inverter", Condenser: "Copper", Coverage: "180-220 sq ft" },
    tags: ["cooling", "summer", "energy-save", "inverter-ac"],
    emiMonthly: emiFrom(52990)
  },
  {
    id: "p-004",
    slug: "walton-w32l1cl-32-inch-smart-led-tv",
    name: "Walton W32L1CL 32 Inch Smart LED TV",
    brand: "Walton",
    category: "television",
    price: 22990,
    oldPrice: 27990,
    discount: 18,
    rating: 4.5,
    reviewCount: 96,
    stock: 15,
    warranty: "2 Years Panel, 5 Years Service",
    badge: "Smart LED",
    image: productImage.tv,
    gallery: [productImage.tv, productImage.tv, productImage.tv],
    features: ["Smart streaming apps", "HD ready display", "Slim bezel profile", "USB and HDMI connectivity"],
    specifications: { Size: "32 inch", Resolution: "HD Ready", OS: "Smart OS", Ports: "2 HDMI, 2 USB" },
    tags: ["entertainment", "smart-tv", "led-tv"],
    emiMonthly: emiFrom(22990)
  },
  {
    id: "p-005",
    slug: "philips-na231-09-air-fryer",
    name: "Philips NA231/09 Air Fryer",
    brand: "Philips",
    category: "kitchen-appliances",
    price: 14990,
    oldPrice: 17990,
    discount: 17,
    rating: 4.8,
    reviewCount: 122,
    stock: 28,
    warranty: "2 Years Brand Warranty",
    badge: "Healthy Choice",
    image: productImage.kitchen,
    gallery: [productImage.kitchen, productImage.kitchen, productImage.kitchen],
    features: ["RapidAir crisp technology", "Digital touch presets", "Easy-clean cooking basket", "Low-oil family cooking"],
    specifications: { Capacity: "6.2 L", Power: "1700W", Controls: "Digital", Presets: "8" },
    tags: ["cooking", "healthy", "air-fryer", "premium"],
    isNew: true,
    emiMonthly: emiFrom(14990)
  },
  {
    id: "p-006",
    slug: "singer-25l-grill-microwave-oven-smw25gch",
    name: "Singer 25L Grill Microwave Oven SMW25GCH",
    brand: "Singer",
    category: "microwave-oven",
    price: 16990,
    oldPrice: 19990,
    discount: 15,
    rating: 4.6,
    reviewCount: 74,
    stock: 14,
    warranty: "1 Year Brand Warranty",
    badge: "Grill Series",
    image: productImage.microwave,
    gallery: [productImage.microwave, productImage.microwave, productImage.microwave],
    features: ["Grill heating mode", "Auto cook menus", "Quick reheat function", "Child safety lock"],
    specifications: { Capacity: "25 L", Type: "Grill Microwave", Power: "900W", Controls: "Mechanical + Touch" },
    tags: ["kitchen", "baking", "grill", "microwave"],
    emiMonthly: emiFrom(16990)
  },
  {
    id: "p-007",
    slug: "walton-wbl-15p250-blender",
    name: "Walton WBL-15P250 Blender",
    brand: "Walton",
    category: "blender",
    price: 4990,
    oldPrice: 6290,
    discount: 21,
    rating: 4.6,
    reviewCount: 64,
    stock: 31,
    warranty: "1 Year Brand Warranty",
    badge: "Daily Blend",
    image: productImage.blender,
    gallery: [productImage.blender, productImage.blender, productImage.blender],
    features: ["Multi-purpose blending jar", "Durable stainless blade set", "Pulse control operation", "Compact countertop design"],
    specifications: { Capacity: "1.5 L", Jars: "3", Blade: "Stainless Steel", Speed: "3 Levels" },
    tags: ["blend", "grind", "daily", "kitchen"],
    emiMonthly: emiFrom(4990)
  },
  {
    id: "p-008",
    slug: "pureit-ultima-pro-water-purifier",
    name: "Pureit Ultima Pro Water Purifier",
    brand: "Pureit",
    category: "water-purifier",
    price: 23990,
    oldPrice: 28990,
    discount: 17,
    rating: 4.7,
    reviewCount: 118,
    stock: 9,
    warranty: "1 Year Brand Warranty",
    badge: "RO + UV + MF",
    image: productImage.purifier,
    gallery: [productImage.purifier, productImage.purifier, productImage.purifier],
    features: ["Multi-stage advanced purification", "Smart filter life alerts", "Elegant wall-mount design", "Safe storage for family use"],
    specifications: { Purification: "RO + UV + MF", Storage: "7 L", FilterLife: "Up to 6000 L", Install: "Wall Mount" },
    tags: ["water", "health", "family", "purifier"],
    emiMonthly: emiFrom(23990)
  }
];

export const brands = brandNames;

export const orders: Order[] = [
  { id: "#ORD-10025", date: "May 20, 2026", amount: 38990, status: "Delivered" },
  { id: "#ORD-10024", date: "May 15, 2026", amount: 34990, status: "Shipped" },
  { id: "#ORD-10023", date: "May 10, 2026", amount: 8990, status: "Processing" },
  { id: "#ORD-10022", date: "May 06, 2026", amount: 44990, status: "Delivered" }
];

export const revenueData = [
  { month: "Jan", sales: 420000, orders: 92 },
  { month: "Feb", sales: 610000, orders: 120 },
  { month: "Mar", sales: 540000, orders: 108 },
  { month: "Apr", sales: 780000, orders: 151 },
  { month: "May", sales: 690000, orders: 136 },
  { month: "Jun", sales: 920000, orders: 184 }
];
