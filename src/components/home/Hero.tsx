"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

type HeroSlide = {
  id: string;
  image: string;
  badge: string;
};

export function Hero() {
  const [active, setActive] = useState(0);

  const slides = useMemo<HeroSlide[]>(
    () => [
      {
        id: "hero-1",
        image: "/products/hero1.png",
        badge: "4K Smart TV"
      },
      {
        id: "hero-2",
        image: "/products/hero2.png",
        badge: "Cinematic Detail"
      },
      {
        id: "hero-3",
        image: "/products/hero3.png",
        badge: "Premium Display"
      }
    ],
    []
  );

  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#07111F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,rgba(255,255,255,0.08),transparent_22%)]" />

      <div className="relative">
        <div className="relative min-h-[380px] sm:min-h-[430px] md:min-h-[500px] lg:min-h-[560px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${slide.id}-image`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-hidden rounded-[18px] sm:rounded-[22px]"
            >
              <Image
                src={slide.image}
                alt="Hero banner"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.88)_0%,rgba(7,17,31,0.58)_30%,rgba(7,17,31,0.2)_56%,rgba(7,17,31,0)_80%)]" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${slide.id}-copy`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex min-h-[380px] items-center sm:min-h-[430px] md:min-h-[500px] lg:min-h-[560px]"
            >
              <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <div className="max-w-[620px] text-white">
                  <p className="hero-copy text-sm font-black uppercase tracking-[0.18em] text-[#FF756D] [text-shadow:0_8px_24px_rgba(0,0,0,0.28)] sm:text-[0.95rem]">
                    Entertainment Upgrade 15-30% Off
                  </p>
                  <h1 className="hero-copy premium-heading mt-4 text-[2.9rem] font-black leading-[0.88] tracking-[-0.06em] text-white [text-shadow:0_14px_34px_rgba(0,0,0,0.24)] sm:text-[4rem] lg:text-[4.9rem]">
                    SMART VIEW
                  </h1>
                  <p className="hero-copy mt-3 max-w-[560px] text-[1.35rem] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.05rem] lg:text-[2.55rem]">
                    Premium Samsung TVs With Cinematic Detail
                  </p>
                  <div className="hero-copy mt-8 flex flex-wrap items-center gap-3">
                    <Button asChild size="lg" variant="gold" className="h-12 rounded-full px-8 text-sm font-bold uppercase tracking-[0.08em] shadow-[0_22px_50px_rgba(212,168,83,0.34)] sm:h-14 sm:px-10">
                      <Link href="/category/television">Shop Now</Link>
                    </Button>
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-[#07111F]/38 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                      {slide.badge}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              aria-label={`Go to hero slide ${index + 1}`}
              className={`h-4 w-4 rounded-full border-2 transition ${active === index ? "border-black bg-black" : "border-black/70 bg-transparent hover:border-black hover:bg-black/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
