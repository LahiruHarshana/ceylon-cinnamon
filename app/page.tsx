"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Facebook,
  Globe2,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  ShieldCheck,
  X
} from "lucide-react";

const img    = (f: string) => `/cinnamon/${f}`;
const newImg = (f: string) => `/new-image/${f}`;
const video  = (f: string) => `/video/${f}`;

const navItems = [
  { href: "#story",    label: "Story" },
  { href: "#quality",  label: "Quality" },
  { href: "#products", label: "Products" },
  { href: "#identify", label: "True Cinnamon" },
  { href: "#gallery",  label: "Media" },
  { href: "#contact",  label: "Contact" }
];

const stats = [
  { num: "10+",  label: "Acres",          sub: "Own plantation land" },
  { num: "2K",   label: "Years of Heritage", sub: "Since 2,000 B.C." },
  { num: "100%", label: "Pure Ceylon",    sub: "Authentic Sri Lankan origin" },
  { num: "EU",   label: "GI Certified",   sub: "Geographical Indication" }
];

const processSteps = [
  {
    title: "Harvesting",
    image: "20241115_082612.jpg",
    body:  "We harvest Ceylon cinnamon within our exclusive plantations. Our team conscientiously gathers, arranges, and transfers the raw materials to our transportation vehicle."
  },
  {
    title: "Processing",
    image: "20241115_090140.jpg",
    body:  "The authentic taste, fragrance, and texture of Ceylon cinnamon are maintained by a meticulous blend of conventional methods and up-to-date equipment."
  },
  {
    title: "Quality Assurance",
    image: "20241115_090522.jpg",
    body:  "Experienced quality analysts conduct thorough examinations of our products at every stage of the process, from harvesting to final dispatch."
  },
  {
    title: "Dispatch",
    image: "20241115_150330.jpg",
    body:  "We ensure that our high-quality Ceylon cinnamon is safely delivered to our local and international buyers on time."
  }
];

const productCards = [
  {
    title: "Private Label Solutions",
    image: "053-CCC-18.png",
    body:  "Retail-ready private labeling options for buyers who need authentic Ceylon cinnamon under their own brand."
  },
  {
    title: "Ceylon Cinnamon Sticks",
    image: "059-CCC-4.webp",
    body:  "Whole Ceylon cinnamon prepared for wholesale and retail buyers seeking authentic quills from Sri Lanka."
  },
  {
    title: "Custom Packaging",
    image: "043-CCC-15.png",
    body:  "Bulk, retail, and custom container options tailored to international customer requirements."
  },
  {
    title: "Export Dispatch",
    image: "048-CCC-17.png",
    body:  "Prepared shipments for local and international buyers, with attention to safe delivery and presentation."
  }
];

const giImages = [
  "015-ceylon-cinnamon-gi-01.webp",
  "018-ceylon-cinnamon-gi-02.webp",
  "021-ceylon-cinnamon-gi-03.webp",
  "024-ceylon-cinnamon-gi-04.webp"
];

const trueCinnamonImages = [
  "002-1.webp", "004-21.webp", "005-31.webp", "006-4.webp", "007-5.webp",
  "008-61.webp", "009-71.webp", "010-81.webp", "011-91.webp", "012-Untitled-design-11.webp"
];

const comparisonRows = [
  ["Very expensive and rare to find from the original country.", "Common and cheap spice."],
  ["Ultra-low Coumarin (~0.004%) — healthy for daily use.", "Coumarin ~1200× higher (~5%) — risk of kidney & liver issues."],
  ["Recommended for daily use by doctors.", "Not recommended for daily use — causes health problems."],
  ["Tan-brown colour.", "Reddish-dark brown colour."],
  ["Very light paper-thin bark, multiple rolled layers.", "Uneven thickness, mostly a single folded layer."],
  ["Fragile and easily broken.", "Hard and difficult to grind."],
  ["Delicate, sweet flavour and aroma. Indigenous to Sri Lanka.", "Pungent, full-bodied taste. Originates from China, Indonesia, and Vietnam."]
];

const benefits = [
  "Anti-inflammatory properties",
  "Powerful antioxidant",
  "Antimicrobial properties",
  "Regulates blood sugar levels",
  "Improved heart health"
];

const productionImages = [
  "20241115_082612.jpg", "20241115_082850.jpg", "20241115_082854.jpg",
  "20241115_082901.jpg", "20241115_090140.jpg", "20241115_090451.jpg",
  "20241115_090459.jpg", "20241115_090510.jpg", "20241115_090522.jpg",
  "20241115_090534.jpg", "20241115_090542.jpg", "20241115_090558.jpg",
  "20241115_090608.jpg", "20241115_143800.jpg", "20241115_143813.jpg",
  "20241115_150330.jpg", "20241115_163218.jpg", "IMG-20241114-WA0005.jpg",
  "IMG-20241115-WA0002.jpg"
];

const productionVideos = [
  { src: "20241115_090635.mp4", poster: "20241115_090608.jpg", title: "Cinnamon Production Walkthrough" },
  { src: "20241115_090747.mp4", poster: "20241115_143800.jpg", title: "Processing & Packaging Detail" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const loader    = document.getElementById("loader");
    const loaderBar = document.getElementById("loader-bar");
    const nav       = document.getElementById("navbar");
    let lastScroll  = 0;
    let ctx: gsap.Context | undefined;
    let hideTimer   = 0;

    const handleScroll = () => {
      const y = window.pageYOffset;
      if (nav) {
        nav.style.transform =
          y > 60 && y > lastScroll ? "translateY(-100%)" : "translateY(0)";
      }
      lastScroll = y;
    };

    const magneticCleanup: { el: Element; move: EventListener; leave: EventListener }[] = [];

    function splitTextIntoWords(el: HTMLElement) {
      const text = el.textContent?.trim();
      if (!text || !el.hasChildNodes()) return [];
      const words = text.split(/\s+/);
      el.innerHTML = words
        .map((w) => `<span class="split-word"><span class="split-word-inner">${w}</span></span>`)
        .join(' ');
      return Array.from(el.querySelectorAll('.split-word-inner'));
    }

    const barTimer = window.setTimeout(() => {
      if (loaderBar) loaderBar.style.width = "100%";
    }, 100);

    const revealTimer = window.setTimeout(() => {
      if (loader) loader.style.opacity = "0";
      hideTimer = window.setTimeout(() => {
        if (loader) loader.style.display = "none";

        document.querySelectorAll<HTMLElement>(".split-heading").forEach((el) => {
          if (el.closest("#home")) return;
          splitTextIntoWords(el);
        });

        ctx = gsap.context(() => {
          const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          const heroIntroTargets = [
            "#home .hero-badge",
            "#home .hero-location",
            "#home .hero-title",
            "#home .hero-copy p",
            "#home .btn-primary",
            "#home .btn-outline",
            "#home .hero-proof"
          ];

          if (reduceMotion) {
            gsap.set(".reveal-up, .reveal-scale, #home .hero-visual", {
              opacity: 1,
              visibility: "visible",
              clearProps: "transform"
            });
            return;
          }

          gsap.set("#navbar", { autoAlpha: 0, y: -18 });
          gsap.set(heroIntroTargets, {
            autoAlpha: 0,
            y: 34
          });
          gsap.set("#home .hero-visual", {
            autoAlpha: 0,
            y: 38,
            scale: 0.96
          });
          gsap.set("#home .hero-side-frame, #home .origin-stamp", {
            autoAlpha: 0,
            y: 26,
            scale: 0.96
          });

          gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
              gsap.set(heroIntroTargets, { clearProps: "transform,visibility" });
              gsap.set("#home .hero-visual, #home .hero-side-frame, #home .origin-stamp", {
                clearProps: "transform,visibility"
              });
            }
          })
            .to("#navbar", { autoAlpha: 1, y: 0, duration: 0.7 }, 0)
            .to(["#home .hero-badge", "#home .hero-location"], {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08
            }, 0.12)
            .to("#home .hero-title", {
              autoAlpha: 1,
              y: 0,
              duration: 1
            }, 0.24)
            .to("#home .hero-copy p", {
              autoAlpha: 1,
              y: 0,
              duration: 0.75
            }, 0.44)
            .to("#home .btn-primary, #home .btn-outline", {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08
            }, 0.58)
            .to("#home .hero-proof", {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              stagger: 0.08
            }, 0.72)
            .to("#home .hero-visual", {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.05
            }, 0.28)
            .to("#home .hero-side-frame, #home .origin-stamp", {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.82,
              stagger: 0.08
            }, 0.74);

          gsap.to(".parallax-img", {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          });

          gsap.to(".background-kanji", {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.4
            }
          });

          gsap.to(".hero-wordmark", {
            xPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          });

          gsap.to(".hero-visual-ring", {
            rotate: 8,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          });

          gsap.to(".story-collage-cut", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: "#story",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });

          gsap.to(".story-number-block", {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: "#story",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });

          gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el, i) => {
            if (el.closest("#home")) return;
            gsap.fromTo(el,
              { y: 42, opacity: 0 },
              {
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: (i % 5) * 0.045,
              ease: "power3.out",
              onComplete: () => gsap.set(el, { clearProps: "transform" })
            });
          });

          gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
            if (el.closest("#home")) return;
            gsap.fromTo(el,
              { y: 30, scale: 0.94, opacity: 0 },
              {
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              onComplete: () => gsap.set(el, { clearProps: "transform" })
            });
          });

          gsap.utils.toArray<HTMLElement>("section:not(#home) .section-label").forEach((el) => {
            gsap.fromTo(el,
              { x: -18, opacity: 0 },
              {
                scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                onComplete: () => gsap.set(el, { clearProps: "transform" })
              }
            );
          });

          gsap.utils.toArray<HTMLElement>(".menu-scroll-container").forEach((el) => {
            gsap.fromTo(el,
              { x: 46, opacity: 0 },
              {
                scrollTrigger: { trigger: el, start: "top 86%", toggleActions: "play none none none" },
                x: 0,
                opacity: 1,
                duration: 0.85,
                ease: "power3.out",
                onComplete: () => gsap.set(el, { clearProps: "transform" })
              }
            );
          });

          /* ── Scroll Progress ── */
          gsap.to("#scroll-progress", {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3
            }
          });

          /* ── Counter Animation ── */
          gsap.utils.toArray<HTMLElement>(".stat-cell").forEach((el) => {
            const raw = el.dataset.value;
            if (!raw || raw === "EU" || raw === "2K") return;
            const suffix = raw.replace(/[\d.-]/g, "");
            const target = parseInt(raw.replace(/[^\d]/g, "")) || 0;
            if (!target) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el.closest(".card") || el,
                start: "top 85%",
                toggleActions: "play none none none"
              },
              onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; }
            });
          });

          /* ── Split-Text Reveal ── */
          gsap.utils.toArray<HTMLElement>(".split-heading").forEach((el) => {
            if (el.closest("#home")) return;
            const inner = el.querySelectorAll<HTMLElement>(".split-word-inner");
            if (!inner.length) return;
            gsap.fromTo(inner,
              { y: "100%", opacity: 0 },
              {
                y: 0, opacity: 1,
                duration: 0.75,
                stagger: 0.035,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none"
                },
                onComplete: () => gsap.set(inner, { clearProps: "transform" })
              }
            );
          });

          /* ── Active Nav Section Tracking ── */
          document.querySelectorAll<HTMLElement>("[data-nav]").forEach((link) => {
            const id = link.getAttribute("data-nav");
            const section = document.getElementById(id!);
            if (!section) return;
            ScrollTrigger.create({
              trigger: section,
              start: "top 40%",
              end: "bottom 40%",
              onToggle: (self) => {
                if (self.isActive) {
                  document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
                  link.classList.add("active");
                }
              }
            });
          });

          /* ── Enhanced Parallax on Story Collage ── */
          gsap.to(".story-collage-main", {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: "#story",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        });

        /* ── Magnetic Hover ── */
        document.querySelectorAll<HTMLElement>(".card, .btn-primary, .btn-outline").forEach((el) => {
          const move: EventListener = (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e as MouseEvent).clientX - rect.left - rect.width / 2;
            const y = (e as MouseEvent).clientY - rect.top - rect.height / 2;
            gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.6, ease: "power3.out", overwrite: "auto" });
          };
          const leave: EventListener = () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
          };
          el.addEventListener("mousemove", move);
          el.addEventListener("mouseleave", leave);
          magneticCleanup.push({ el, move, leave });
        });

        window.addEventListener("scroll", handleScroll);
      }, 700);
    }, 1500);

    return () => {
      window.clearTimeout(barTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("scroll", handleScroll);
      magneticCleanup.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      ctx?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  /* ── Mobile Menu Animation ── */
  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    if (!menu) return;
    if (menuOpen) {
      gsap.set(menu, { display: "block" });
      gsap.fromTo(menu, { autoAlpha: 0, y: -12 }, {
        autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out"
      });
      gsap.fromTo(menu.querySelectorAll("a"), { y: -8, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.04, duration: 0.35, ease: "power3.out", delay: 0.1
      });
    } else {
      gsap.to(menu, {
        autoAlpha: 0, y: -6, duration: 0.25, ease: "power2.in",
        onComplete: () => { gsap.set(menu, { display: "none" }); }
      });
    }
  }, [menuOpen]);

  return (
    <main className="antialiased">

      {/* ── Loader ─────────────────────────────────────────── */}
      <div
        id="loader"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700"
      >
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={img("030-Untitled-2-65x69.webp")}
            alt="Ceylon Cinnamon Company mark"
            width={65} height={69}
            className="h-16 w-auto"
            priority
          />
          <div className="flex flex-col text-left">
            <span className="font-heading text-xl md:text-2xl uppercase tracking-[0.2em] text-[#1a1108]">
              Ceylon Cinnamon
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#9b8472]">Sri Lanka</span>
          </div>
        </div>
        <div className="h-[2px] w-36 overflow-hidden rounded-full bg-[#f0e8dc]">
          <div id="loader-bar" />
        </div>
      </div>

      <div id="scroll-progress" />
      <div className="grain" />

      {/* ── Nav ────────────────────────────────────────────── */}
      <nav id="navbar" className="nav-glass fixed left-0 top-0 z-40 w-full py-4 transition-all duration-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

          <a href="#home" className="group flex items-center gap-3">
            <Image
              src={img("030-Untitled-2-65x69.webp")}
              alt="Ceylon Cinnamon Company mark"
              width={38} height={41}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#1a1108] transition-colors group-hover:text-amber-DEFAULT">
                Ceylon Cinnamon
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#9b8472]">Sri Lanka</span>
            </div>
          </a>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-nav={item.href.replace('#', '')}
                  className="nav-link text-xs uppercase tracking-[0.18em] text-[#5a4130] transition-colors hover:text-amber-DEFAULT"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary hidden lg:inline-flex text-xs">
            Inquire
          </a>

          <button
            aria-label="Toggle menu"
            className="lg:hidden"
            style={{ color: "var(--amber)" }}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className="mx-4 mt-3 rounded-xl border border-amber-border bg-white p-5 shadow-[var(--shadow-md)] lg:hidden"
          style={{ display: 'none' }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs uppercase tracking-[0.22em] text-[#5a4130] hover:text-amber-DEFAULT transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-amber-border pt-4 mt-1">
              <a href="#contact" className="btn-primary w-full justify-center" data-magnetic>
                Inquire Now <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative">
        <div className="background-kanji hidden lg:block" style={{ height: 0 }}>
          <div className="background-kanji__text">CEYLON CINNAMON AUTHENTIC QUALITY SRI LANKA EXPORT</div>
        </div>

        {/* ── Hero ───────────────────────────────────────────── */}
        <section
          id="home"
          className="hero-modern relative flex min-h-screen items-center overflow-hidden pt-20"
        >
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="hero-gridline absolute inset-0" />
            <div className="hero-wordmark accent">Ceylon</div>
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:py-12">

            {/* Left - copy */}
            <div className="hero-copy">
              <div className="reveal-up mb-8 flex flex-wrap items-center gap-3">
                <div className="badge hero-badge w-fit">
                  Single-origin Ceylon Cinnamon
                </div>
                <span className="hero-location">Molkawa Estate / Sri Lanka</span>
              </div>

              <h1 className="reveal-up hero-title split-heading text-6xl font-light leading-none text-[#1a1108] md:text-8xl xl:text-[8rem]">
                Ceylon
                <span className="block">Cinnamon</span>
                <span className="block text-4xl md:text-6xl">Company</span>
              </h1>

              <p className="reveal-up mt-8 max-w-xl text-base font-light leading-relaxed text-[#5a4130] md:text-lg">
                From our own plantations in Molkawa, Sri Lanka, delivering world-class
                authentic Ceylon cinnamon to wholesale and retail buyers worldwide.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary" data-magnetic>
                  Get Sample / Inquire <ArrowRight size={14} />
                </a>
                <a href="#story" className="btn-outline" data-magnetic>Our Story</a>
              </div>

              <div className="hero-proof-grid mt-12 grid gap-3 sm:grid-cols-3">
                {[
                  { Icon: Leaf, label: "Own Estate", value: "10+ acres" },
                  { Icon: ShieldCheck, label: "Certified", value: "EU GI origin" },
                  { Icon: Globe2, label: "Supply", value: "Global buyers" }
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="hero-proof">
                    <Icon size={16} />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - image composition */}
            <div className="reveal-scale hero-visual relative">
              <div className="hero-visual-ring" />

              <div className="hero-main-frame">
                <Image
                  src={img("060-The-Ceylon-Cinnamon-Company-2.webp")}
                  alt="Ceylon Cinnamon Company harvest and cinnamon production collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="parallax-img object-cover"
                  priority
                />
                <div className="hero-main-shade" />
                <div className="hero-frame-caption">
                  <span>Estate to export</span>
                  <strong>Pure Ceylon quills</strong>
                </div>
              </div>

              <div className="hero-side-frame hero-side-frame-top">
                <Image
                  src={newImg("20241115_082612.jpg")}
                  alt="Ceylon Cinnamon Company international trade booth"
                  fill
                  sizes="(max-width: 1024px) 46vw, 210px"
                  className="object-cover"
                />
                <span>Export Booth</span>
              </div>

              <div className="hero-side-frame hero-side-frame-bottom">
                <Image
                  src={img("059-CCC-4.webp")}
                  alt="Packed Ceylon cinnamon quills"
                  fill
                  sizes="(max-width: 1024px) 46vw, 230px"
                  className="object-cover"
                />
                <span>Retail Ready</span>
              </div>

              <div className="origin-stamp anim-float">
                <span>EU GI</span>
                <strong>Certified Origin</strong>
                <small>Sri Lanka</small>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#9b8472]">Scroll</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-amber-DEFAULT to-transparent" />
          </div>
        </section>

        {/* ── Stats strip ─────────────────────────────────────── */}
        <section className="border-y border-amber-border/40 bg-warm-50 px-6 py-14">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="reveal-up card card-accent p-6 text-center">
                <div className="accent gradient-text mb-1 text-4xl font-bold leading-none stat-cell" data-value={s.num}>{s.num}</div>
                <div className="mb-1 text-sm font-medium text-[#1a1108]">{s.label}</div>
                <div className="text-xs text-[#9b8472]">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Story ───────────────────────────────────────────── */}
        <section id="story" className="story-modern relative overflow-hidden px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">

              {/* Image collage */}
              <div className="reveal-scale story-collage">
                <div className="story-collage-main">
                  <Image
                    src={img("054-CCC-2-1024x1024.webp")}
                    alt="Legacy of spice and family tradition"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-5"
                  />
                </div>

                <div className="story-collage-cut">
                  <Image
                    src={img("059-CCC-4.webp")}
                    alt="Ceylon cinnamon quills packed for export"
                    fill
                    sizes="(max-width: 1024px) 50vw, 220px"
                    className="object-cover"
                  />
                </div>

                <div className="story-number-block">
                  <span>1880s</span>
                  <strong>Family tradition</strong>
                </div>
              </div>

              {/* Copy */}
              <div className="reveal-up story-panel">
                <div className="section-label">Our Story</div>
                <h2 className="mb-8 split-heading text-4xl font-light leading-tight text-[#1a1108] md:text-6xl">
                  Cultivated in Molkawa,
                  <span className="serif italic" style={{ color: "var(--amber)" }}> crafted for the world</span>
                </h2>

                <div className="story-lede grid gap-5 text-sm font-light leading-relaxed text-[#5a4130] md:grid-cols-2 md:text-base">
                  <p>
                    It all began with the acquisition of 10 acres of cinnamon-cultivated land in Molkawa, on the
                    border of Sri Lanka&apos;s Western Province and Sabaragamuwa Province.
                  </p>
                  <p>
                    Mr. James Priyanga Mendis established the company with a mission inspired by his ancestor,
                    Alagiyawanna Don Louis Mendis Appuhamy, a prominent Ceylonese Director of Agriculture.
                  </p>
                  <p>
                    Fueled by a passion for excellence and an unwavering commitment to quality, the company brings
                    the finest Ceylon cinnamon to global markets.
                  </p>
                  <p>
                    Processing cinnamon from their own plantations and collaborating with local growers, the company
                    meets the needs of wholesale and retail customers worldwide.
                  </p>
                </div>

                <div className="story-signature mt-9">
                  <span className="accent">2000 B.C.</span>
                  <div>
                    <strong>Treasured ancient spice</strong>
                    <p>Handled today with estate-led control, ethical production, and export-ready quality.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-timeline mt-20 grid gap-5 lg:grid-cols-3">
              {[
                {
                  year: "1518 / 1638",
                  title: "Ceylon spice route",
                  body:
                    "Portuguese and Dutch traders shaped the early island trade, while cultivation systems from that era still echo through cinnamon production."
                },
                {
                  year: "Molkawa",
                  title: "Estate-led quality",
                  body:
                    "Own plantations give the team control over harvesting, peeling, drying, and the character of each cinnamon quill."
                },
                {
                  year: "Today",
                  title: "Built for buyers",
                  body:
                    "Wholesale, retail, private label, and custom packaging needs are supported with 100% ethical production standards."
                }
              ].map((item) => (
                <article key={item.title} className="reveal-up story-timeline-item">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Quality / Process ───────────────────────────────── */}
        <section id="quality" className="relative overflow-hidden border-y border-amber-border/30 bg-warm-50 py-24">
          <div className="reveal-up mx-auto mb-12 max-w-7xl px-6">
            <div className="section-label">International Standards</div>
            <h2 className="text-3xl split-heading font-light text-[#1a1108] md:text-4xl">
              Maintaining <span className="serif italic" style={{ color: "var(--amber)" }}>Quality</span>
            </h2>
          </div>

          <div className="menu-scroll-container reveal-up pb-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="group w-[295px] flex-none md:w-[370px]">
                <div className="card overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={newImg(step.image)}
                      alt={`${step.title} process`}
                      fill
                      sizes="(max-width: 768px) 295px, 370px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* step number circle */}
                    <div
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
                      style={{ background: "var(--grad-amber)", boxShadow: "var(--shadow-amber)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-light text-[#1a1108] transition-colors group-hover:text-amber-DEFAULT">
                      {step.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#9b8472]">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Products ────────────────────────────────────────── */}
        <section id="products" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-up mb-16 text-center">
              <div className="accent mb-2 text-5xl font-light opacity-[0.07] text-[#a96f24]">
                Cinnamomum verum
              </div>
              <div className="section-label justify-center">Our Products</div>
              <h2 className="text-3xl split-heading font-light tracking-tight text-[#1a1108] md:text-5xl">
                Cinnamon Products
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {productCards.map((product) => (
                <article key={product.title} className="reveal-scale card group overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={img(product.image)}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-base font-light text-[#1a1108] transition-colors group-hover:text-amber-DEFAULT">
                      {product.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#9b8472]">{product.body}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Packaging */}
            <div className="reveal-up mt-20 grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="section-label">Packaging Options</div>
                <h3 className="mb-6 text-3xl font-light text-[#1a1108]">
                  Flexible supply for{" "}
                  <span className="serif italic" style={{ color: "var(--amber)" }}>global buyers</span>
                </h3>
                <p className="font-light leading-relaxed text-[#5a4130]">
                  Buyers can choose packaging solutions aligned with their business goals, including bulk packaging,
                  retail packaging, private labeling, and packaging in specific containers such as resealable pouches
                  or rigid containers with airtight seals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["026-payment.png", "027-shipping.png", "038-frame.png", "025-header_logo.png"].map((image) => (
                  <div key={image} className="card flex min-h-28 items-center justify-center p-6">
                    <Image
                      src={img(image)}
                      alt="Ceylon Cinnamon Company packaging asset"
                      width={180} height={72}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── GI Certification & Export Board ─────────────────── */}
        <section className="relative overflow-hidden border-y border-amber-border/30 bg-warm-100 py-24">
          <div className="reveal-up mx-auto mb-12 flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="section-label">EU Certification & Board Recognition</div>
              <h2 className="text-3xl split-heading font-light text-[#1a1108] md:text-4xl pr-4">
                Geographical Indication{" "}
                <span className="serif italic" style={{ color: "var(--amber)" }}>Certification</span>
              </h2>
            </div>

            {/* EDB Logo Badge */}
            <div 
              className="group flex flex-shrink-0 items-center justify-center rounded-2xl border border-amber-border/40 bg-white/60 p-5 backdrop-blur-md transition-all duration-500 hover:bg-white hover:shadow-md"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <Image
                src={img("025-header_logo.png")}
                alt="Sri Lanka Export Development Board"
                width={180} height={53}
                className="h-10 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:h-12"
              />
            </div>
          </div>
          <div className="menu-scroll-container reveal-up pb-8">
            {giImages.map((image, index) => (
              <div
                key={image}
                className="group w-[300px] flex-none overflow-hidden rounded-xl border border-amber-border/40 md:w-[420px]"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={img(image)}
                    alt={`GI certification image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── True Cinnamon / Identify ─────────────────────────── */}
        <section id="identify" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-up mb-16 max-w-3xl">
              <div className="section-label">True Cinnamon Identification</div>
              <h2 className="mb-6 text-3xl split-heading font-light leading-tight text-[#1a1108] md:text-5xl">
                Ceylon Cinnamon{" "}
                <span className="serif italic" style={{ color: "var(--amber)" }}>vs Cassia</span>
              </h2>
              <p className="font-light leading-relaxed text-[#5a4130]">
                Cinnamon is divided into several categories according to physical location and chemical
                characteristics. Ceylon cinnamon is true cinnamon, while cassia varieties include Chinese,
                Vietnamese, and Indonesian cassia.
              </p>
            </div>

            {/* Comparison table */}
            <div
              className="reveal-up overflow-hidden rounded-xl"
              style={{ boxShadow: "var(--shadow-md)", border: "1px solid rgba(169,111,36,0.10)" }}
            >
              <div className="grid grid-cols-2">
                <div className="compare-head-ceylon p-5 text-sm font-semibold uppercase tracking-[0.18em]">
                  Ceylon Cinnamon
                </div>
                <div className="compare-head-cassia p-5 text-sm font-semibold uppercase tracking-[0.18em]">
                  Cassia Cinnamon
                </div>
              </div>
              {comparisonRows.map(([ceylon, cassia], i) => (
                <div
                  key={ceylon}
                  className="grid grid-cols-2 border-t border-amber-border/20 text-sm font-light leading-relaxed"
                  style={{ background: i % 2 === 0 ? "#fff" : "var(--warm-100)" }}
                >
                  <div className="p-4 text-[#1a1108]">{ceylon}</div>
                  <div className="border-l border-amber-border/20 p-4 text-[#5a4130]">{cassia}</div>
                </div>
              ))}
            </div>

            {/* Images + benefits */}
            <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.72fr]">
              <div className="reveal-up">
                <h3 className="mb-6 flex items-center gap-3 text-xl">
                  <span className="serif italic" style={{ color: "var(--amber)" }}>
                    True Ceylon Cinnamon Images
                  </span>
                  <div className="h-[1px] flex-grow" style={{ background: "var(--amber-border)" }} />
                </h3>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                  {trueCinnamonImages.map((image, index) => (
                    <div
                      key={image}
                      className="relative aspect-square overflow-hidden rounded-lg"
                      style={{ boxShadow: "var(--shadow-xs)" }}
                    >
                      <Image
                        src={img(image)}
                        alt={`True Ceylon cinnamon ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-up">
                <h3 className="mb-6 flex items-center gap-3 text-xl">
                  <span className="serif italic" style={{ color: "var(--amber)" }}>Health Benefits</span>
                  <div className="h-[1px] flex-grow" style={{ background: "var(--amber-border)" }} />
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 rounded-lg border px-4 py-3 text-sm text-[#5a4130]"
                      style={{ borderColor: "var(--amber-border)", background: "var(--warm-100)" }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: "var(--amber)", flexShrink: 0 }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-light leading-relaxed text-[#9b8472]">
                  Ceylon cinnamon has been used in traditional medicine for anti-inflammatory, antioxidant,
                  and antimicrobial properties, and for its potential to regulate blood sugar levels and
                  improve heart health.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Gallery ─────────────────────────────────────────── */}
        <section id="gallery" className="border-y border-amber-border/30 bg-warm-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-up mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="section-label">Production Media</div>
                <h2 className="text-3xl split-heading font-light text-[#1a1108] md:text-4xl">
                  Fresh Field <span className="serif italic" style={{ color: "var(--amber)" }}>Gallery</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm font-light leading-relaxed text-[#9b8472]">
                Production images and videos from our plantation and processing facilities in Sri Lanka.
              </p>
            </div>

            {/* Videos */}
            <div className="reveal-up mb-8 grid gap-5 lg:grid-cols-2">
              {productionVideos.map((item) => (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-xl border border-amber-border/30"
                  style={{ boxShadow: "var(--shadow-md)" }}
                >
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={newImg(item.poster)}
                    className="aspect-video w-full bg-[#1a1108] object-cover"
                    aria-label={item.title}
                  >
                    <source src={video(item.src)} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#1a1108]"
                    style={{ boxShadow: "var(--shadow-sm)" }}>
                    <PlayCircle size={13} style={{ color: "var(--amber)" }} />
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {productionImages.map((image, index) => (
                <div
                  key={image}
                  className="reveal-scale relative aspect-[4/3] overflow-hidden rounded-lg border border-amber-border/20"
                  style={{ boxShadow: "var(--shadow-xs)" }}
                >
                  <Image
                    src={newImg(image)}
                    alt={`Ceylon cinnamon production ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Contact ─────────────────────────────────────────── */}
        <section id="contact" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-12 lg:grid-cols-12">

              {/* Left — info */}
              <div className="reveal-up space-y-8 lg:col-span-4">
                <div>
                  <div className="section-label">Client Support</div>
                  <h2 className="mb-4 text-4xl font-light text-[#1a1108]">
                    Get <span className="serif italic" style={{ color: "var(--amber)" }}>In Touch</span>
                  </h2>
                  <p className="font-light leading-relaxed text-[#5a4130]">
                    The company specializes in producing and processing high-quality whole and ground Ceylon
                    cinnamon, tailored to the specific requirements of international customers.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { Icon: MapPin,  label: "Address", text: "284/34 gadabuwana road miriswatte,\nPiliyandala, Sri Lanka" },
                    { Icon: Phone,   label: "Phone",   text: "+94 77 151 7161", href: "tel:+94771517161" },
                    { Icon: Mail,    label: "Email",   text: "james@ceyloncinnamoncompany.com", href: "mailto:james@ceyloncinnamoncompany.com" },
                    { Icon: Clock3,  label: "Inquiry", text: "Get Sample / Request A Quote" }
                  ].map(({ Icon, label, text, href }) => (
                    <div key={label} className="card flex items-start gap-4 p-4">
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ background: "var(--amber-pale)" }}
                      >
                        <Icon size={15} style={{ color: "var(--amber)" }} />
                      </div>
                      <div>
                        <div className="mb-1 text-[10px] uppercase tracking-widest text-[#9b8472]">{label}</div>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-light text-[#1a1108] transition-colors hover:text-amber-DEFAULT whitespace-pre-line"
                          >
                            {text}
                          </a>
                        ) : (
                          <p className="whitespace-pre-line text-sm font-light text-[#1a1108]">{text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form + map */}
              <div className="reveal-up lg:col-span-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="card p-7">
                    <h3 className="mb-6 text-2xl font-light text-[#1a1108]">Send us a message</h3>
                    <div className="space-y-4">
                      <input className="premium-input" placeholder="Name *" />
                      <input className="premium-input" type="email" placeholder="Email *" />
                      <input className="premium-input" placeholder="Subject *" />
                      <textarea className="premium-input min-h-36 resize-none" placeholder="Comment or Message *" />
                      <button type="button" className="btn-primary w-full justify-center">
                        Send Message <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  <div
                    className="relative min-h-[400px] overflow-hidden rounded-[10px]"
                    style={{ boxShadow: "var(--shadow-md)" }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-10 rounded-[10px]"
                      style={{ border: "1px solid rgba(169,111,36,0.12)" }}
                    />
                    <iframe
                      src="https://www.google.com/maps?q=284/34%20gadabuwana%20road%20miriswatte,%20Piliyandala,%20Sri%20Lanka&output=embed"
                      width="100%" height="100%"
                      style={{ border: 0 }}
                      allowFullScreen loading="lazy"
                      className="map-modern h-full w-full min-h-[400px]"
                      title="Ceylon Cinnamon Company location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────── */}
        <footer className="border-t border-amber-border/30 bg-warm-50 px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={img("030-Untitled-2-65x69.webp")}
                  alt="Ceylon Cinnamon Company mark"
                  width={48} height={51}
                  className="h-12 w-auto"
                />
                <div className="flex flex-col text-left">
                  <span className="font-heading text-sm md:text-base uppercase tracking-[0.2em] text-[#1a1108]">
                    Ceylon Cinnamon
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#9b8472]">Sri Lanka</span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest text-[#9b8472]">
                Copyright © 2026 | Ceylon Cinnamon Company
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { href: "https://www.facebook.com/people/Ceylon-Cinnamon-Company/61555586095788/", Icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/ceyloncinnamoncompany/", Icon: Instagram, label: "Instagram" },
                { href: "https://www.linkedin.com/company/ceylon-cinnamon-company/", Icon: Linkedin, label: "LinkedIn" }
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border bg-white text-[#9b8472] transition-all hover:text-amber-DEFAULT"
                  style={{
                    borderColor: "var(--amber-border)",
                    boxShadow: "var(--shadow-xs)"
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div className="flex gap-6 text-xs uppercase tracking-widest text-[#9b8472]">
              <a href="#story"   className="transition-colors hover:text-amber-DEFAULT">About</a>
              <a href="#contact" className="transition-colors hover:text-amber-DEFAULT">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
