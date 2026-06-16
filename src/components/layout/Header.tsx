"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe2, Heart, MapPin, Menu, PackageCheck, Search, ShoppingCart, UserRound, WalletCards, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { categories, products } from "@/data/catalog";
import { navItems } from "@/data/site";
import { useCartStore } from "@/store/cartStore";
import { CartQuantityControl } from "@/components/commerce/CartQuantityControl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatPrice } from "@/lib/utils";

const allMenuSections = [
  {
    title: "Shop by Department",
    items: [
      { label: "Refrigerators", href: "/category/refrigerator" },
      { label: "Air Conditioners", href: "/category/air-conditioner" },
      { label: "Washing Machines", href: "/category/washing-machine" },
      { label: "Televisions", href: "/category/television" },
      { label: "Microwave Ovens", href: "/category/microwave-oven" },
      { label: "Kitchen Appliances", href: "/category/kitchen-appliances" }
    ]
  },
  {
    title: "Programs & Features",
    items: [
      { label: "Flash Sale Deals", href: "/deals" },
      { label: "0% EMI Offers", href: "/checkout" },
      { label: "Official Warranty", href: "/brands" },
      { label: "Track Your Orders", href: "/orders" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Customer Support", href: "/contact" }
    ]
  },
  {
    title: "Helpful Destinations",
    items: [
      { label: "Shop All Products", href: "/shop" },
      { label: "Popular Brands", href: "/brands" },
      { label: "Latest Blog Posts", href: "/blog" },
      { label: "My Account", href: "/dashboard" }
    ]
  }
] as const;

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showPrimaryHeader, setShowPrimaryHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const lines = useCartStore((state) => state.lines);
  const wishlist = useCartStore((state) => state.wishlist);
  const cartOpen = useCartStore((state) => state.cartDrawerOpen);
  const openCartDrawer = useCartStore((state) => state.openCartDrawer);
  const closeCartDrawer = useCartStore((state) => state.closeCartDrawer);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const wishlistCount = wishlist.length;
  const trackingCount = 2;
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  const suggestions = useMemo(() => {
    if (!query.trim()) return products.slice(0, 4);
    return products
      .filter((product) =>
        [product.name, product.brand, product.category, ...product.tags].some((field) =>
          field.toLowerCase().includes(query.toLowerCase())
        )
      )
      .slice(0, 6);
  }, [query]);

  const ANNOUNCEMENT_HIDE_Y = 48;
  const ANNOUNCEMENT_SHOW_Y = 24;

  const submitSearch = () => {
    const value = query.trim();
    if (!value) {
      toast.error("Type a product, brand, or category to search.");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(value)}`);
    setSearchFocused(false);
    setMegaOpen(false);
    setUserOpen(false);
    closeCartDrawer();
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 8);
      setShowAnnouncement((prev) => {
        if (currentY <= ANNOUNCEMENT_SHOW_Y && !prev) return true;
        if (currentY >= ANNOUNCEMENT_HIDE_Y && prev) return false;
        return prev;
      });
      setShowPrimaryHeader(currentY < 56);
      if (currentY >= ANNOUNCEMENT_HIDE_Y) {
        setMegaOpen(false);
        setUserOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeCartDrawer();
    setMegaOpen(false);
    setUserOpen(false);
    setMobileOpen(false);
  }, [pathname, closeCartDrawer]);

  useEffect(() => {
    if (!cartOpen) return;

    const timer = window.setTimeout(() => {
      closeCartDrawer();
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [cartOpen, closeCartDrawer]);

  return (
    <header className="fixed inset-x-0 top-0 z-60">
      <div className={`hidden overflow-hidden border-b border-slate-200 bg-white text-[#07111F] transition-[max-height,opacity] duration-300 ease-out lg:block ${showAnnouncement ? "max-h-7 opacity-100" : "max-h-0 opacity-0"}`}>
        <Container className="flex items-center justify-center gap-6 py-1 text-[11px] font-medium">
          <span>Free delivery on orders over BDT 15,000</span>
          <span>0% EMI up to 12 months</span>
          <span>1 year warranty support</span>
          <span>24/7 premium assistance</span>
        </Container>
      </div>

      <div className={`hidden transition-[max-height,opacity,transform] duration-300 ease-out lg:block ${showPrimaryHeader ? "max-h-28 translate-y-0 opacity-100" : "max-h-0 -translate-y-4 opacity-0"}`}>
        <div className={`border-b border-[#0f1a27] ${scrolled ? "bg-[#101823]/92 backdrop-blur-2xl" : "bg-[#131A22]"}`}>
          <Container>
            <div className="grid min-h-[84px] grid-cols-[auto_auto_1fr_auto] items-center gap-4 py-3 xl:gap-5">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#F6D58B] to-[#D4A853] text-[1.5rem] font-black text-[#07111F] shadow-[0_14px_28px_rgba(212,168,83,0.22)]">N</div>
                <div className="leading-tight">
                  <div className="text-[1.05rem] font-black tracking-normal text-white">NEXORA</div>
                  <div className="text-[10px] font-bold tracking-[0.22em] text-slate-300">HOME</div>
                </div>
              </Link>

              <div className="hidden min-w-[170px] rounded-xl border border-transparent px-3 py-2.5 transition duration-300 hover:border-white/18 hover:bg-white/6 xl:block">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 text-white" size={16} />
                  <div className="leading-tight">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">Deliver to</div>
                    <div className="text-sm font-bold text-white">Bangladesh</div>
                  </div>
                </div>
              </div>

              <div className="relative min-w-0">
                <div className={`relative flex h-[48px] items-center overflow-hidden rounded-xl border bg-white transition-all duration-200 ${searchFocused ? "border-[#F3A847] shadow-[0_0_0_4px_rgba(243,168,71,0.16)]" : "border-[#f3f3f3]"}`}>
                  <Search className="pointer-events-none ml-4 mr-3 shrink-0 text-slate-500" size={18} />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => window.setTimeout(() => setSearchFocused(false), 140)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") submitSearch();
                    }}
                    placeholder="Search premium appliances, brands, services..."
                    className="h-full border-0 bg-transparent px-0 pr-3 text-[#111827] shadow-none focus:border-0 focus:ring-0"
                    aria-label="Search products"
                  />
                  <button
                    type="button"
                    aria-label="Search"
                    onClick={submitSearch}
                    className="flex h-full w-[56px] shrink-0 items-center justify-center border-l border-[#e9edf3] bg-[#F3A847] text-[#111827] transition hover:bg-[#f0b55b] hover:text-[#07111F]"
                  >
                    <Search size={18} />
                  </button>
                </div>
                {query.trim().length > 0 && (
                  <div className="absolute left-0 right-0 top-[calc(100%+0.7rem)] z-50 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(7,17,31,0.18)]">
                    <div className="border-b border-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Relevant Suggestions
                    </div>
                    <div className="p-2">
                      {suggestions.length ? suggestions.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          onClick={() => setSearchFocused(false)}
                          className="flex items-center justify-between rounded-2xl px-3 py-3 transition hover:bg-slate-50"
                        >
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold text-[#07111F]">{product.name}</div>
                            <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{product.brand} • {product.category}</div>
                          </div>
                          <span className="ml-4 text-sm font-semibold text-[#7a5616]">{formatPrice(product.price)}</span>
                        </Link>
                      )) : <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">No products found. Try refrigerators, AC, washing machines, or TV.</div>}
                    </div>
                  </div>
                )}
              </div>

              <div className="ml-auto flex items-center gap-1.5 xl:gap-2">
                <button className="group relative flex min-w-[66px] items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/18 hover:bg-white/6">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#12324f] text-[#8ed2ff]">
                    <Globe2 className="text-current" size={17} />
                  </span>
                  <span>EN</span>
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-[#07111F] px-3 py-1 text-[11px] font-semibold text-white opacity-0 shadow-[0_10px_30px_rgba(7,17,31,0.28)] transition duration-200 group-hover:opacity-100">Language</span>
                </button>

                <button
                  onClick={() => setUserOpen((open) => !open)}
                  className="group relative flex min-w-[70px] items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/18 hover:bg-white/6"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#3b2a54] text-[#d6c0ff]">
                    <UserRound size={16} />
                  </span>
                  <span className="hidden xl:inline">Account</span>
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-[#07111F] px-3 py-1 text-[11px] font-semibold text-white opacity-0 shadow-[0_10px_30px_rgba(7,17,31,0.28)] transition duration-200 group-hover:opacity-100">Account</span>
                </button>

                <Link href="/orders" className="group relative flex min-w-[64px] items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/18 hover:bg-white/6">
                  <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[#143d33] text-[#7df0c7]">
                    <PackageCheck size={16} />
                    <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-[#F3A847] px-1 text-center text-[10px] font-bold text-[#111827]">{trackingCount}</span>
                  </span>
                  <span className="hidden 2xl:inline">Track</span>
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-[#07111F] px-3 py-1 text-[11px] font-semibold text-white opacity-0 shadow-[0_10px_30px_rgba(7,17,31,0.28)] transition duration-200 group-hover:opacity-100">Order Tracking</span>
                </Link>

                <Link href="/wishlist" className="group relative flex min-w-[64px] items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/18 hover:bg-white/6">
                  <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[#4d2030] text-[#ff9eb8]">
                    <Heart size={16} />
                    {wishlistCount > 0 ? <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-[#F3A847] px-1 text-center text-[10px] font-bold text-[#111827]">{wishlistCount}</span> : null}
                  </span>
                  <span className="hidden 2xl:inline">Wishlist</span>
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-[#07111F] px-3 py-1 text-[11px] font-semibold text-white opacity-0 shadow-[0_10px_30px_rgba(7,17,31,0.28)] transition duration-200 group-hover:opacity-100">Wishlist</span>
                </Link>

                <button onClick={openCartDrawer} className="group relative flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/18 hover:bg-white/6">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#22364d] text-[#a8d5ff]">
                    <ShoppingCart size={16} />
                  </span>
                  <span className="hidden xl:inline">Cart</span>
                  {count > 0 && <span className="absolute right-1.5 top-1.5 min-w-5 rounded-full bg-[#F3A847] px-1.5 text-center text-[10px] font-bold text-[#111827]">{count}</span>}
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] -translate-x-1/2 rounded-full bg-[#07111F] px-3 py-1 text-[11px] font-semibold text-white opacity-0 shadow-[0_10px_30px_rgba(7,17,31,0.28)] transition duration-200 group-hover:opacity-100">Cart</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className={`border-b border-[#2a3646] transition-colors duration-300 ${scrolled ? "bg-[#232f3e]/94 shadow-[0_12px_40px_rgba(7,17,31,0.16)] backdrop-blur-2xl" : "bg-[#232F3E]"}`}>
        <Container>
          <div className="flex min-h-[56px] items-center gap-3 lg:hidden">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#F6D58B] to-[#D4A853] text-[1.45rem] font-black text-[#07111F] shadow-[0_14px_28px_rgba(212,168,83,0.22)]">N</div>
              <div className="leading-tight">
                <div className="text-base font-black tracking-normal text-[#07111F]">NEXORA</div>
                <div className="text-[10px] font-bold tracking-[0.22em] text-slate-500">HOME</div>
              </div>
            </Link>

            <button onClick={() => setMobileOpen(true)} className="ml-auto grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm" aria-label="Open mobile menu">
              <Menu size={18} />
            </button>
          </div>
          <nav className="hidden min-h-[56px] items-center gap-1.5 lg:flex">
            <button
              className={`relative flex h-11 items-center gap-2 rounded-md px-4 text-[13px] font-semibold text-white transition duration-300 hover:bg-white/8 ${megaOpen ? "bg-white/8" : ""}`}
              onClick={() => setMegaOpen((open) => !open)}
            >
              <Menu size={17} /> All
              <span className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-[#D4A853] transition-opacity duration-300 ${megaOpen ? "opacity-100" : "opacity-0"}`} />
            </button>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex h-11 items-center rounded-xl px-4 text-[13px] font-semibold !text-white transition duration-300 ${active ? "" : "hover:bg-white/8"}`}
                >
                  {item.label}
                  <span className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-[#D4A853] transition-all duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>

      {userOpen && (
        <div className={`absolute right-8 z-50 hidden w-72 rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_28px_90px_rgba(7,17,31,0.18)] md:block ${showPrimaryHeader && showAnnouncement ? "top-[118px]" : showPrimaryHeader ? "top-[92px]" : "top-[64px]"}`}>
          <div className="rounded-lg bg-[#07111F] p-4 text-white">
            <div className="font-semibold">Welcome to Nexora</div>
            <div className="mt-1 text-xs text-slate-300">Track orders, saved addresses, wishlist, and returns.</div>
          </div>
          {["Dashboard", "Orders", "Wishlist", "Settings"].map((item) => (
            <Link key={item} href={item === "Dashboard" ? "/dashboard" : `/${item.toLowerCase()}`} className="mt-1 flex items-center justify-between rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-50">
              {item} <ChevronDown size={14} className="-rotate-90" />
            </Link>
          ))}
        </div>
      )}

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#07111F]/35 backdrop-blur-sm"
            onClick={closeCartDrawer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <motion.aside
              className="ml-auto h-full w-full max-w-md border-l border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_28px_90px_rgba(7,17,31,0.28)]"
              onClick={(event) => event.stopPropagation()}
              initial={{ x: 40, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 32, opacity: 0.7 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#07111F]">Your Cart</h2>
                  <p className="mt-1 text-sm text-slate-500">{count} item{count === 1 ? "" : "s"} ready for checkout</p>
                </div>
                <button onClick={closeCartDrawer} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white hover:border-[#D4A853] hover:bg-[#fff8ea]"><X size={18} /></button>
              </div>
              <div className="mt-5 rounded-2xl bg-[#07111F] p-4 text-white shadow-[0_22px_60px_rgba(7,17,31,0.2)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3D28A]">Estimated Total</div>
                    <div className="mt-2 text-2xl font-black tracking-[-0.04em]">{formatPrice(subtotal)}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-right">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-300">Benefits</div>
                    <div className="mt-1 text-sm font-semibold">EMI Ready</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {lines.length ? lines.slice(0, 5).map((line) => (
                  <div key={line.product.id} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_10px_28px_rgba(7,17,31,0.04)]">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-100">
                      <Image src={line.product.image} alt={line.product.name} fill className="object-contain p-2" sizes="80px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="line-clamp-2 text-sm font-semibold leading-5 text-[#07111F]">{line.product.name}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{line.product.brand}</div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#7a5616]">
                        <CartQuantityControl
                          quantity={line.quantity}
                          compact
                          onDecrease={() => updateQuantity(line.product.id, line.quantity - 1)}
                          onIncrease={() => updateQuantity(line.product.id, line.quantity + 1)}
                        />
                        <span className="text-slate-300">•</span>
                        <span>{formatPrice(line.product.price)}</span>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(line.product.id)} className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600" aria-label="Remove from cart"><X size={15} /></button>
                  </div>
                )) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
                    <ShoppingCart className="mx-auto text-slate-400" />
                    <div className="mt-3 font-semibold">Your cart is empty</div>
                    <p className="mt-1 text-sm text-slate-500">Add a premium appliance and it will appear here instantly.</p>
                  </div>
                )}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><WalletCards className="text-[#D4A853]" size={17} /> EMI, coupon, and checkout flow ready</div>
              </div>
              <Button asChild variant="gold" className="mt-5 w-full !text-[#07111F]"><Link href="/cart">View Cart</Link></Button>
              <Button asChild variant="default" className="mt-2 w-full !text-white hover:!text-[#F8DEAA]"><Link href="/checkout">Checkout</Link></Button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="fixed inset-0 z-[72] hidden bg-[#07111F]/55 backdrop-blur-[2px] lg:block"
            onClick={() => setMegaOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <motion.aside
              className="h-full w-full max-w-[380px] overflow-y-auto border-r border-slate-200 bg-white shadow-[0_30px_80px_rgba(7,17,31,0.28)]"
              onClick={(event) => event.stopPropagation()}
              initial={{ x: -36, opacity: 0.88 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -28, opacity: 0.82 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-b border-slate-200 bg-[#232F3E] px-6 py-5 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/12">
                      <UserRound size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Hello, sign in</div>
                      <div className="mt-1 text-lg font-bold">Browse everything</div>
                    </div>
                  </div>
                  <button onClick={() => setMegaOpen(false)} className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/6 hover:bg-white/10" aria-label="Close all menu">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="px-6 py-4">
                {allMenuSections.map((section) => (
                  <div key={section.title} className="border-b border-slate-200 py-4 last:border-b-0">
                    <div className="mb-3 text-[1.05rem] font-black text-[#07111F]">{section.title}</div>
                    <div className="grid gap-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.href + item.label}
                          href={item.href}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#9a6d21]"
                        >
                          <span>{item.label}</span>
                          <ChevronDown size={15} className="-rotate-90 text-slate-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,#07111F,#20354D)] p-5 text-white shadow-[0_20px_48px_rgba(7,17,31,0.18)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3D28A]">Nexora Benefits</div>
                  <div className="mt-2 text-xl font-black">0% EMI, warranty care, and fast delivery</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Everything from shopping to installation is organized for a premium appliance buying journey.</p>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Quick Category Guide</div>
                  <div className="mt-3 grid gap-2">
                    {categories.slice(0, 4).map((category) => (
                      <Link key={category.slug} href={`/category/${category.slug}`} onClick={() => setMegaOpen(false)} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4A853] hover:text-[#9a6d21]">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <div className="fixed inset-0 z-[75] bg-[#07111F]/45 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
          <aside className="h-full w-[88vw] max-w-sm bg-white p-5 shadow-[0_28px_90px_rgba(7,17,31,0.28)]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#D4A853] font-black text-[#07111F]">N</div>
                <div className="font-black text-[#07111F]">NEXORA</div>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-md hover:bg-slate-100" aria-label="Close mobile menu"><X size={18} /></button>
            </div>
            <div className="mt-5">
              <Input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === "Enter" && submitSearch()} placeholder="Search premium appliances, brands, services..." />
              <Button onClick={submitSearch} variant="gold" className="mt-2 w-full"><Search size={16} /> Search</Button>
            </div>
            <div className="mt-5 grid gap-1">
              {[...navItems, { label: "Track Order", href: "/orders" }, { label: "Wishlist", href: "/wishlist" }, { label: "Dashboard", href: "/dashboard" }].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#9a6d21]">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-[#07111F] p-4 text-white">
              <div className="text-sm font-semibold text-[#F3D28A]">Premium Support</div>
              <p className="mt-1 text-xs leading-5 text-slate-300">Installation, EMI, warranty claims, and product guidance are one tap away.</p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
