import Link from "next/link";
import { BadgeCheck, CreditCard, Globe2, Mail, MapPin, MessageCircle, Phone, Radio, ShieldCheck, Truck } from "lucide-react";
import { categories } from "@/data/catalog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const footerPromises = [
    { label: "Original Warranty", Icon: BadgeCheck },
    { label: "Nationwide Delivery", Icon: Truck },
    { label: "Secure EMI", Icon: CreditCard },
    { label: "Service Support", Icon: ShieldCheck }
  ];

  return (
    <footer className="relative overflow-hidden bg-[#07111F] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
      <Container className="pt-12">
        <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 md:grid-cols-4">
          {footerPromises.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg bg-white/[0.04] p-4">
              <Icon className="text-[#D4A853]" size={22} />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </Container>

      <Container className="grid gap-8 py-12 md:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr_1.25fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#F6D58B] to-[#D4A853] text-2xl font-black text-[#07111F]">N</div>
            <div>
              <div className="text-2xl font-black">NEXORA</div>
              <div className="text-xs font-bold tracking-[0.24em] text-slate-400">HOME</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Premium appliances, official warranty, expert buying help, and a shopping experience designed for modern Bangladesh homes.
          </p>
          <div className="mt-6 flex gap-3 text-[#D4A853]">
            {[Globe2, MessageCircle, Radio].map((Icon, index) => (
              <Link key={index} href={index === 0 ? "/contact" : index === 1 ? "/orders" : "/blog"} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#07111F]"><Icon size={18} /></Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[#D4A853]">Shop</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {categories.slice(0, 6).map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>{category.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[#D4A853]">Company</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {["About", "Contact", "Buying Guides", "Returns", "Warranty", "Corporate Sales"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[#D4A853]">Services</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {["Installation", "Warranty Claim", "Corporate Supply", "Store Experience", "Service Booking", "Product Compare"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[#D4A853]">Stay Updated</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">Get appliance deals, product launches, and expert guides.</p>
          <form action="/contact" className="mt-4 flex gap-2">
            <Input name="email" type="email" required placeholder="Email address" className="border-white/10 bg-white/10 text-white placeholder:text-slate-400" />
            <Button type="submit" variant="gold">Join</Button>
          </form>
          <div className="mt-5 grid gap-2 text-sm text-slate-300">
            <span className="flex items-center gap-2"><MapPin size={16} /> Gulshan, Dhaka</span>
            <span className="flex items-center gap-2"><Phone size={16} /> +880 1700-000000</span>
            <span className="flex items-center gap-2"><Mail size={16} /> care@nexorahome.com</span>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© 2026 Nexora Home. Enterprise-ready ecommerce architecture.</div>
    </footer>
  );
}
