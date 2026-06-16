import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { AnimatedSection } from "@/components/home/AnimatedSection";
import { FlashSale } from "@/components/home/FlashSale";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { BrandMarqueeSection } from "@/components/commerce/BrandMarqueeSection";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { SectionHeader } from "@/components/commerce/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { categories, products } from "@/data/catalog";
import { trustBadges } from "@/data/site";

const promoDeals = [
  {
    eyebrow: "Summer Mega Sale",
    title: "Up to 40% Off",
    description: "On ACs & cooling appliances",
    image: "/products/air-conditioner-1-8-ton-singer-green-inverter-22cbr32lvsgrih-1745136952.webp",
    href: "/deals",
    number: "01",
    gradient: "bg-[linear-gradient(135deg,#0A2342_0%,#0C3D73_38%,#0F69B4_72%,#18B7F2_100%)]",
    overlay: "bg-[radial-gradient(circle_at_78%_82%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(7,17,31,0.14),rgba(7,17,31,0.02))]",
    labelColor: "text-[#43C7FF]",
    imageWrap: "bottom-[1.1rem] right-[1rem] h-[clamp(8.5rem,28vw,12rem)] w-[clamp(13.5rem,42vw,19rem)] sm:bottom-[1.35rem] sm:right-[1.25rem] lg:right-[1.35rem]"
  },
  {
    eyebrow: "No Cost EMI",
    title: "Up to 12 Months",
    description: "On select refrigerators",
    image: "/products/pngwing.com.png",
    href: "/checkout",
    number: "02",
    gradient: "bg-[linear-gradient(135deg,#15143F_0%,#2B2A6A_40%,#5B3FD8_72%,#A96DFF_100%)]",
    overlay: "bg-[radial-gradient(circle_at_82%_78%,rgba(216,196,255,0.18),transparent_28%),linear-gradient(135deg,rgba(7,17,31,0.16),rgba(7,17,31,0.03))]",
    labelColor: "text-[#B88BFF]",
    imageWrap: "bottom-[1rem] right-[1.1rem] h-[clamp(11rem,38vw,16rem)] w-[clamp(7rem,24vw,10rem)] sm:right-[1.35rem] lg:right-[1.5rem]"
  },
  {
    eyebrow: "Exclusive Launch",
    title: "New Arrivals",
    description: "Discover the latest innovations",
    image: "/products/product_singer-microwave-oven-25-ltr-smw25gch-1754985762.webp",
    href: "/shop",
    number: "03",
    gradient: "bg-[linear-gradient(135deg,#4B1E08_0%,#8A3913_34%,#DD6B1F_70%,#FFB43A_100%)]",
    overlay: "bg-[radial-gradient(circle_at_84%_82%,rgba(255,214,143,0.17),transparent_30%),linear-gradient(135deg,rgba(7,17,31,0.18),rgba(7,17,31,0.02))]",
    labelColor: "text-[#FFCA57]",
    imageWrap: "bottom-[1.1rem] right-[1rem] h-[clamp(8.75rem,29vw,12.5rem)] w-[clamp(13rem,42vw,18.5rem)] sm:right-[1.2rem] lg:right-[1.35rem]"
  }
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <AnimatedSection className="py-16 lg:py-20">
        <Container className="max-w-[1440px]">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <div className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.24em] text-[#C8922D]">
              Limited Time Offers
            </div>
            <h2 className="mt-3 text-[2.2rem] font-black leading-[1.02] tracking-[-0.05em] text-[#07111F] sm:text-[2.8rem] lg:text-[3.25rem]">
              Exclusive Deals Just for You
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {promoDeals.map((deal) => (
              <Card
                key={deal.title}
                className={`group relative min-h-[340px] overflow-hidden rounded-[16px] border-0 p-5 text-white shadow-[0_24px_70px_rgba(7,17,31,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_84px_rgba(7,17,31,0.18)] sm:min-h-[360px] sm:p-6 ${deal.gradient}`}
              >
                <div className={`absolute inset-0 ${deal.overlay}`} />
                <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[radial-gradient(circle_at_80%_84%,rgba(255,255,255,0.11),transparent_38%)]" />
                <div className="absolute bottom-0 right-0 h-[68%] w-[68%] opacity-[0.08] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="absolute inset-x-[12%] bottom-[8%] h-[38%] opacity-[0.16] [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)]">
                  <svg viewBox="0 0 600 240" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 190 C80 150 120 220 200 180 S320 130 390 165 520 230 600 170" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-white/55" />
                    <path d="M0 210 C95 170 145 230 225 192 S345 142 420 178 535 242 600 188" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/45" />
                    <path d="M0 165 C85 125 145 190 220 158 S345 112 420 145 540 205 600 150" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-white/35" />
                  </svg>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="max-w-[12rem] sm:max-w-[13.5rem]">
                    <div className={`text-[0.82rem] font-black uppercase tracking-[0.12em] ${deal.labelColor}`}>
                      {deal.eyebrow}
                    </div>
                    <h3 className="mt-3 text-[2rem] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[2.35rem]">
                      {deal.title}
                    </h3>
                    <p className="mt-3 max-w-[10rem] text-[0.95rem] leading-7 text-white/88 sm:max-w-[11rem]">
                      {deal.description}
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="gold"
                    className="mt-6 h-11 w-fit rounded-full px-5 text-sm font-bold shadow-[0_20px_50px_rgba(212,168,83,0.34)]"
                  >
                    <Link href={deal.href}>
                      Shop Now <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>

                <div className={`absolute ${deal.imageWrap}`}>
                  <div className="relative h-full w-full">
                    <div className="absolute inset-x-[12%] bottom-[4%] h-[18%] rounded-full bg-black/20 blur-2xl" />
                    <div className="absolute inset-0">
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        fill
                        className="object-contain object-bottom-right drop-shadow-[0_26px_42px_rgba(0,0,0,0.24)] transition duration-500 group-hover:scale-[1.04]"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 92vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute right-5 top-4 text-[4rem] font-black leading-none tracking-[-0.06em] text-white/11 sm:right-6 sm:top-5 sm:text-[4.7rem]">
                  {deal.number}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <FlashSale />

      <AnimatedSection className="py-16 lg:py-20">
        <Container>
        <SectionHeader eyebrow="Best Sellers" title="Most Wanted Appliances" />
        <ProductGrid products={products.slice(0, 8)} />
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1536px] px-0">
          <div className="relative overflow-hidden">
            <Image
              src="/products/9d15f90d-c411-4f90-ad58-0eea768c3be2.png"
              alt="Premium appliance event banner"
              width={1600}
              height={620}
              className="h-auto w-full object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.2)_0%,rgba(7,17,31,0.04)_46%,rgba(7,17,31,0)_100%)]" />

            <div className="absolute inset-y-0 left-0 flex w-full items-center px-6 sm:px-8 lg:px-10">
              <div className="max-w-[540px] text-white">
                <div className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.24em] text-[#F8DEAA]">
                  Premium Appliance Event
                </div>
                <h2 className="mt-5 max-w-[520px] text-[2.45rem] font-black leading-[0.9] tracking-[-0.055em] sm:text-[3.2rem] lg:text-[4rem]">
                  Upgrade Every Room With Smarter Essentials
                </h2>
                <p className="mt-5 max-w-[480px] text-sm leading-7 text-white/82 sm:text-[1rem]">
                  Discover premium refrigerators, laundry care, entertainment, and kitchen appliances curated for modern Bangladeshi homes.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button asChild variant="gold" className="h-12 rounded-full px-6 !text-[#07111F]">
                    <Link href="/shop">Explore Collection</Link>
                  </Button>
                  <div className="inline-flex items-center rounded-full border border-white/16 bg-white/8 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/88">
                    Official warranty • Fast delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeader eyebrow="Trending Products" title="Demand Is Moving Here" />
          <ProductGrid products={[products[2], products[0], products[4], products[7]]} />
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-20">
        <Container>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-[1.12fr_0.88fr]">
          <Card className="relative min-h-[340px] overflow-hidden border-0 bg-[linear-gradient(118deg,#ff7a00_0%,#ff8e1e_48%,#0e2f4d_100%)] text-white sm:min-h-[380px] lg:min-h-[430px]">
            <Image src={categories[1].image} alt="Seasonal cooling campaign" fill className="object-cover opacity-32 object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/72 via-[#07111F]/18 to-transparent" />
            <div className="relative z-10 max-w-xl p-6 sm:p-8 lg:p-10">
              <Badge className="border-white/18 bg-white/12 text-white">Seasonal Campaign Banner</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">Cooling that handles Bangladesh summer.</h2>
              <p className="mt-4 text-base leading-7 text-white/88">Compare inverter ACs, refrigerators, and air circulators with expert guidance, installation-ready delivery, and warranty-backed confidence.</p>
              <Button asChild variant="gold" className="mt-7">
                <Link href="/category/air-conditioner">Explore Cooling <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </Card>
          <Card className="p-6 sm:p-8">
            <Badge>Smart Recommendations</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-normal sm:text-3xl">Conversion modules that feel helpful.</h2>
            <div className="mt-6 grid gap-3">
              {["Room-size match", "Recently viewed", "Top rated by verified owners", "Service-backed recommendations"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-4">
                  <ShieldCheck className="text-[#D4A853]" size={21} />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-20">
        <Container>
        <SectionHeader eyebrow="New Arrivals" title="Fresh Launches" />
        <ProductGrid products={[...products].reverse().slice(0, 4)} />
        </Container>
      </AnimatedSection>

      <BrandMarqueeSection />

      <AnimatedSection className="bg-[#07111F] py-16 lg:py-20 text-white">
        <Container className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="rounded-xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)]">
              <badge.icon className="text-[#D4A853]" size={25} />
              <div className="mt-3 font-semibold">{badge.title}</div>
              <div className="mt-1 text-xs leading-5 text-slate-400">{badge.text}</div>
            </div>
          ))}
        </Container>
      </AnimatedSection>

      <ReviewsSection />
    </>
  );
}
