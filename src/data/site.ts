import { Award, CreditCard, Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/category/refrigerator" },
  { label: "Brands", href: "/brands" },
  { label: "Deals", href: "/deals" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const trustBadges = [
  { icon: ShieldCheck, title: "100% Original", text: "Brand authorized products" },
  { icon: Truck, title: "Free Delivery", text: "On selected orders above Tk 15,000" },
  { icon: RotateCcw, title: "Easy Returns", text: "7 days replacement promise" },
  { icon: Award, title: "Warranty Care", text: "Service support across Bangladesh" },
  { icon: CreditCard, title: "0% EMI", text: "Up to 12 months on cards" },
  { icon: Headphones, title: "24/7 Support", text: "Expert shopping assistance" }
];

export const faqs = [
  {
    q: "Do you provide official warranty?",
    a: "Yes. Nexora Home lists brand-authorized appliances with clearly marked warranty and service terms."
  },
  {
    q: "Can I pay with EMI?",
    a: "Eligible products support up to 12 months EMI through selected partner banks."
  },
  {
    q: "How fast is delivery?",
    a: "Dhaka metro deliveries are typically 24-72 hours, while nationwide appliance delivery depends on product size and route."
  },
  {
    q: "Is this backend-ready?",
    a: "The frontend is organized around typed services, data models, and stores so Supabase, Prisma, and PostgreSQL can be connected later."
  }
];
