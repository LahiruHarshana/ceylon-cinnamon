"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  X
} from "lucide-react";

const img = (file: string) => `/cinnamon/${file}`;
const newImg = (file: string) => `/new-image/${file}`;
const video = (file: string) => `/video/${file}`;

const navItems = [
  { href: "#story", label: "Story" },
  { href: "#quality", label: "Quality" },
  { href: "#products", label: "Products" },
  { href: "#identify", label: "True Cinnamon" },
  { href: "#gallery", label: "Media" },
  { href: "#contact", label: "Contact" }
];

const processSteps = [
  {
    title: "Harvesting",
    image: "20241115_082612.jpg",
    body: "We harvest Ceylon cinnamon within our exclusive plantations. Our team conscientiously gathers, arranges, and transfers the raw materials to our transportation vehicle."
  },
  {
    title: "Processing",
    image: "20241115_090140.jpg",
    body: "The authentic taste, fragrance, and texture of Ceylon cinnamon are maintained by a meticulous blend of conventional methods and up-to-date equipment."
  },
  {
    title: "Quality Assurance and Packaging",
    image: "20241115_090522.jpg",
    body: "Experienced quality analysts conduct thorough examinations of our products at every stage of the process, from harvesting to final dispatch."
  },
  {
    title: "Dispatch",
    image: "20241115_150330.jpg",
    body: "We ensure that our high-quality Ceylon cinnamon is safely delivered to our local and international buyers on time."
  }
];

const productCards = [
  {
    title: "Private Label Solutions",
    image: "053-CCC-18.png",
    body: "Retail-ready private labeling options for buyers who need authentic Ceylon cinnamon under their own brand."
  },
  {
    title: "Ceylon Cinnamon Sticks",
    image: "059-CCC-4.webp",
    body: "Whole Ceylon cinnamon prepared for wholesale and retail buyers seeking authentic quills from Sri Lanka."
  },
  {
    title: "Custom Packaging",
    image: "043-CCC-15.png",
    body: "Bulk, retail, and custom container options tailored to international customer requirements."
  },
  {
    title: "Export Dispatch",
    image: "048-CCC-17.png",
    body: "Prepared shipments for local and international buyers, with attention to safe delivery and presentation."
  }
];

const giImages = [
  "015-ceylon-cinnamon-gi-01.webp",
  "018-ceylon-cinnamon-gi-02.webp",
  "021-ceylon-cinnamon-gi-03.webp",
  "024-ceylon-cinnamon-gi-04.webp"
];

const trueCinnamonImages = [
  "002-1.webp",
  "004-21.webp",
  "005-31.webp",
  "006-4.webp",
  "007-5.webp",
  "008-61.webp",
  "009-71.webp",
  "010-81.webp",
  "011-91.webp",
  "012-Untitled-design-11.webp"
];

const comparisonRows = [
  ["Very expensive and rare to find from the original country.", "Common and cheap spice."],
  ["Contains ultra-low Coumarin content, which is healthy, about 0.004%.", "Coumarin level is about 1200 times higher and may cause kidney and liver issues, about 5%."],
  ["Recommended for daily use by doctors.", "Not recommended for daily use as it causes health problems."],
  ["The color is tan-brown.", "The color is reddish-dark brown."],
  ["Very light paper thickness of bark, forming multiple rolled layers.", "Uneven thickness and mostly a single folded layer."],
  ["Fragile and easily broken.", "Hard and difficult to grind."],
  ["Delicate and sweet, with excellent flavor and aroma. Indigenous to Sri Lanka.", "Pungent and full-bodied taste. Originates from China, Indonesia, and Vietnam."]
];

const benefits = [
  "Anti-inflammatory",
  "Antioxidant properties",
  "Antimicrobial properties",
  "Regulate blood sugar levels",
  "Improved heart health"
];

const productionImages = [
  "20241115_082612.jpg",
  "20241115_082850.jpg",
  "20241115_082854.jpg",
  "20241115_082901.jpg",
  "20241115_090140.jpg",
  "20241115_090451.jpg",
  "20241115_090459.jpg",
  "20241115_090510.jpg",
  "20241115_090522.jpg",
  "20241115_090534.jpg",
  "20241115_090542.jpg",
  "20241115_090558.jpg",
  "20241115_090608.jpg",
  "20241115_143800.jpg",
  "20241115_143813.jpg",
  "20241115_150330.jpg",
  "20241115_163218.jpg",
  "IMG-20241114-WA0005.jpg",
  "IMG-20241115-WA0002.jpg"
];

const productionVideos = [
  {
    src: "20241115_090635.mp4",
    poster: "20241115_090608.jpg",
    title: "Cinnamon Production Walkthrough"
  },
  {
    src: "20241115_090747.mp4",
    poster: "20241115_143800.jpg",
    title: "Processing and Packaging Detail"
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loader-bar");
    const nav = document.getElementById("navbar");
    let lastScroll = 0;
    let ctx: gsap.Context | undefined;
    let hideTimer = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (nav) {
        nav.style.transform =
          currentScroll > 50 && currentScroll > lastScroll
            ? "translateY(-100%)"
            : "translateY(0)";
      }
      lastScroll = currentScroll;
    };

    const barTimer = window.setTimeout(() => {
      if (loaderBar) loaderBar.style.width = "100%";
    }, 100);

    const revealTimer = window.setTimeout(() => {
      if (loader) loader.style.opacity = "0";
      hideTimer = window.setTimeout(() => {
        if (loader) loader.style.display = "none";

        ctx = gsap.context(() => {
          gsap.to(".parallax-img", {
            yPercent: 20,
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
              scrub: 0.5
            }
          });

          gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out"
            });
          });

          gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                toggleActions: "play none none reverse"
              },
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power3.out"
            });
          });
        });

        window.addEventListener("scroll", handleScroll);
      }, 700);
    }, 1500);

    return () => {
      window.clearTimeout(barTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("scroll", handleScroll);
      ctx?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="antialiased">
      <div
        id="loader"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-700"
      >
        <Image
          src={img("025-header_logo.png")}
          alt="Ceylon Cinnamon Company logo"
          width={180}
          height={53}
          className="mb-6 h-auto w-44 object-contain"
          priority
        />
        <div className="accent mb-4 text-4xl text-gold">True Ceylon Cinnamon</div>
        <div className="h-[1px] w-24 overflow-hidden bg-white/20">
          <div id="loader-bar" className="h-full w-0 bg-gold transition-all duration-1000 ease-out" />
        </div>
      </div>

      <div className="grain" />

      <nav id="navbar" className="nav-glass fixed left-0 top-0 z-40 w-full py-5 transition-all duration-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#home" className="group flex items-center gap-3">
            <Image
              src={img("030-Untitled-2-65x69.webp")}
              alt="Ceylon Cinnamon Company mark"
              width={42}
              height={45}
              className="h-11 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-white transition-colors group-hover:text-gold">
                Ceylon Cinnamon
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Sri Lanka</span>
            </div>
          </a>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden border border-gold/30 px-6 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:bg-gold hover:text-black lg:block"
          >
            Inquire
          </a>

          <button
            aria-label="Toggle menu"
            className="text-gold lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-6 mt-5 border-t border-white/10 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-white/70"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="relative">
        <div className="background-kanji hidden h-full lg:block">
          <div className="background-kanji__text">CEYLON CINNAMON AUTHENTIC QUALITY SRI LANKA EXPORT</div>
        </div>

        <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={img("060-The-Ceylon-Cinnamon-Company-2.webp")}
              alt="Ceylon Cinnamon Company cinnamon harvest and products"
              fill
              className="parallax-img h-[120%] object-cover opacity-55"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/25 to-[#0a0a0a]" />
          </div>

          <div className="relative z-10 px-6 text-center">
            <div className="accent reveal-up mb-3 text-[13vw] leading-none text-gold/90 md:text-8xl">
              True Ceylon
            </div>
            <h1 className="reveal-up mb-6 text-4xl font-light tracking-tight text-cream md:text-7xl">
              Ceylon Cinnamon Company
            </h1>
            <div className="reveal-up flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-gold/50" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 md:text-sm">
                Finest Ceylon Cinnamon Exporter
              </p>
              <div className="h-[1px] w-12 bg-gold/50" />
            </div>
            <a
              href="#contact"
              className="reveal-up mt-10 inline-flex border border-gold/40 px-8 py-3 text-xs uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold hover:text-black"
            >
              Get Sample / Inquire Now
            </a>
          </div>

          <div className="reveal-up absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
            <div className="h-16 w-[1px] bg-gradient-to-b from-gold to-transparent" />
          </div>
        </section>

        <section id="story" className="relative bg-[#0a0a0a] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="reveal-up relative aspect-[3/4] md:aspect-[4/5]">
                <div className="absolute -left-4 -top-4 z-0 h-full w-full border border-gold/20" />
                <Image
                  src={img("054-CCC-2-1024x1024.webp")}
                  alt="Ceylon cinnamon plantation and product story"
                  fill
                  className="relative z-10 object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
              </div>
              <div className="reveal-up">
                <span className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                  <span className="h-[1px] w-8 bg-gold" /> Our Story
                </span>
                <h2 className="mb-8 text-3xl font-light leading-tight text-white md:text-5xl">
                  Cultivated in Molkawa, <br />
                  <span className="serif italic text-gold">crafted for the world</span>
                </h2>
                <div className="space-y-5 text-sm leading-relaxed text-white/60 md:text-base">
                  <p>
                    It all began with the acquisition of 10 acres of cinnamon-cultivated land in the vibrant city of
                    Molkawa, situated on the border of Sri Lanka&apos;s Western Province and Sabaragamuwa Province.
                  </p>
                  <p>
                    Mr. James Priyanga Mendis established the Ceylon Cinnamon Company with a mission inspired by his
                    ancestor, Alagiyawanna Don Louis Mendis Appuhamy, a prominent Ceylonese Director of Agriculture
                    during the Victorian era.
                  </p>
                  <p>
                    Fueled by a passion for excellence, an entrepreneurial spirit, and an unwavering commitment to
                    quality, the company successfully brought the finest Ceylon cinnamon to the market.
                  </p>
                  <p>
                    Processing cinnamon from their own plantations and collaborating with local growers, the company
                    meets the needs of wholesale and retail customers worldwide with high-quality whole and ground
                    Ceylon cinnamon.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <span className="accent text-2xl text-gold">Since 2,000 B.C.</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Treasured ancient spice</span>
                </div>
              </div>
            </div>

            <div className="mt-24 grid gap-12 md:grid-cols-2">
              <article className="reveal-up border-t border-white/10 pt-8">
                <h3 className="mb-6 text-3xl font-light text-white">
                  Treasured Since <span className="serif italic text-gold">2,000 B.C.</span>
                </h3>
                <div className="space-y-5 text-sm leading-relaxed text-white/55">
                  <p>
                    The Old Testament mentions this ancient spice, once considered more precious than gold, prompting
                    numerous expeditions. In 1518, traders from Portugal discovered cinnamon in Ceylon, present-day
                    Sri Lanka, and gained control over several island kingdoms.
                  </p>
                  <p>
                    In 1638, the Dutch captured Ceylon and established a system of cultivation that still exists today.
                    The cultivation process continuously crops the cinnamon tree shoots, resulting in a dense bush with
                    thin branches.
                  </p>
                  <p>
                    We peel and sun-dry the inner bark of these branches during harvest to produce the prized cinnamon
                    quills, which offer numerous health benefits.
                  </p>
                  <p>
                    We are committed to maintaining the values and traditions laid down by our forefathers while
                    embracing modern market trends and technologies to ensure the longevity of the business.
                  </p>
                </div>
              </article>

              <article className="reveal-up border-t border-white/10 pt-8">
                <h3 className="mb-6 text-3xl font-light text-white">
                  Why <span className="serif italic text-gold">Choose Us</span>
                </h3>
                <div className="space-y-5 text-sm leading-relaxed text-white/55">
                  <p>
                    Ensuring the excellence of our products is our foremost priority at every stage of the process. Our
                    accumulated expertise guides each decision we make to satisfy the global demand for authentic Ceylon
                    cinnamon.
                  </p>
                  <p>
                    Our commitment to high-quality production directly results in the trust our buyers bestow upon us.
                    We uphold quality standards throughout the entire manufacturing process.
                  </p>
                  <p>
                    From cultivation to shipping, we consistently adhere to best practices to maintain our products at a
                    superior level.
                  </p>
                  <p>
                    We conduct our business activities with 100% ethical efforts, and our production facilities enable
                    us to deliver top-notch whole and ground Ceylon cinnamon to international customers according to
                    their specific needs.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="quality" className="relative overflow-hidden border-t border-white/5 bg-[#0f0f0f] py-24">
          <div className="reveal-up mx-auto mb-12 flex max-w-7xl items-end justify-between px-6">
            <div>
              <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-gold">International Standards</span>
              <h2 className="text-3xl font-light text-white md:text-4xl">
                Maintaining <span className="serif italic text-white/50">Quality</span>
              </h2>
            </div>
            <div className="hidden gap-2 text-white/40 md:flex">
              <ArrowLeft size={24} />
              <ArrowRight size={24} />
            </div>
          </div>

          <div className="menu-scroll-container reveal-up pb-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="group w-[320px] flex-none cursor-pointer md:w-[400px]">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={newImg(step.image)}
                    alt={`${step.title} process`}
                    fill
                    sizes="(max-width: 768px) 320px, 400px"
                    className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute right-4 top-4 bg-black/80 px-3 py-1 font-heading text-sm tracking-widest text-gold backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-light text-white transition-colors group-hover:text-gold">
                  {step.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/50">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="relative bg-[#0a0a0a] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-up mb-16 text-center">
              <span className="accent mb-2 block text-4xl text-gold/20">Cinnamomum verum</span>
              <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl">Cinnamon Products</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {productCards.map((product) => (
                <article key={product.title} className="reveal-scale group">
                  <div className="relative mb-5 aspect-square overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={img(product.image)}
                      alt={product.title}
                      fill
                      className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-light text-white transition-colors group-hover:text-gold">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">{product.body}</p>
                </article>
              ))}
            </div>

            <div className="reveal-up mt-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-gold">Packaging Options</span>
                <h3 className="mb-6 text-3xl font-light text-white">
                  Flexible supply for <span className="serif italic text-white/50">global buyers</span>
                </h3>
                <p className="leading-relaxed text-white/55">
                  Buyers can choose packaging solutions aligned with their business goals and target audience,
                  including bulk packaging, retail packaging, private labeling, and packaging in specific containers
                  such as resealable pouches or rigid containers with airtight seals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["026-payment.png", "027-shipping.png", "038-frame.png", "025-header_logo.png"].map((image) => (
                  <div key={image} className="flex min-h-28 items-center justify-center border border-white/10 bg-white/[0.03] p-6">
                    <Image src={img(image)} alt="Ceylon Cinnamon Company packaging asset" width={220} height={90} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/5 bg-[#0f0f0f] py-24">
          <div className="reveal-up mx-auto mb-12 max-w-7xl px-6">
            <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-gold">EU Certification</span>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Geographical Indication <span className="serif italic text-white/50">Certification</span>
            </h2>
          </div>
          <div className="menu-scroll-container reveal-up pb-8">
            {giImages.map((image, index) => (
              <div key={image} className="group w-[320px] flex-none md:w-[430px]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={img(image)}
                    alt={`Ceylon cinnamon GI certification image ${index + 1}`}
                    fill
                    className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="identify" className="relative bg-[#0a0a0a] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-up mb-16 max-w-3xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-gold">True Cinnamon Identification</span>
              <h2 className="mb-6 text-3xl font-light leading-tight text-white md:text-5xl">
                Ceylon Cinnamon <span className="serif italic text-gold">vs Cassia</span>
              </h2>
              <p className="leading-relaxed text-white/55">
                Cinnamon is divided into several categories according to physical location and chemical
                characteristics. Ceylon cinnamon is true or pure cinnamon, while cassia varieties include Chinese,
                Vietnamese, and Indonesian cassia.
              </p>
            </div>

            <div className="reveal-up overflow-hidden border border-white/10">
              <div className="grid grid-cols-2 bg-gold text-sm uppercase tracking-[0.2em] text-black">
                <div className="p-4">Ceylon Cinnamon</div>
                <div className="border-l border-black/10 p-4">Cassia Cinnamon</div>
              </div>
              {comparisonRows.map(([ceylon, cassia]) => (
                <div key={ceylon} className="grid grid-cols-2 border-t border-white/10 text-sm leading-relaxed text-white/65">
                  <div className="p-4">{ceylon}</div>
                  <div className="border-l border-white/10 p-4">{cassia}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div className="reveal-up">
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="text-xl font-serif italic text-gold">True Ceylon Cinnamon Images</h3>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {trueCinnamonImages.map((image, index) => (
                    <div key={image} className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                      <Image
                        src={img(image)}
                        alt={`True Ceylon cinnamon image ${index + 1}`}
                        fill
                        className="object-cover opacity-85 transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-up">
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="text-xl font-serif italic text-gold">Health Benefits</h3>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-white/70">
                      <CheckCircle2 className="text-gold" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm leading-relaxed text-white/45">
                  Ceylon cinnamon has been used in traditional medicine for anti-inflammatory, antioxidant, and
                  antimicrobial properties, as well as for its potential to regulate blood sugar levels and improve
                  heart health.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="relative border-t border-white/5 bg-[#0f0f0f] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-up mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-gold">Production Media</span>
                <h2 className="text-3xl font-light text-white md:text-4xl">
                  Fresh Field <span className="serif italic text-white/50">Gallery</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/45">
                New production images and videos are loaded from the local media folders with duplicates removed and
                video files kept idle until playback.
              </p>
            </div>

            <div className="reveal-up mb-10 grid gap-5 lg:grid-cols-2">
              {productionVideos.map((item) => (
                <div key={item.src} className="group relative overflow-hidden border border-white/10 bg-black/30">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={newImg(item.poster)}
                    className="aspect-video w-full bg-black object-cover"
                    aria-label={item.title}
                  >
                    <source src={video(item.src)} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 bg-black/65 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    <PlayCircle size={16} className="text-gold" />
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {productionImages.map((image, index) => (
                <div key={image} className="reveal-scale relative aspect-[4/3] overflow-hidden border border-white/5 bg-black/30">
                  <Image
                    src={newImg(image)}
                    alt={`Ceylon cinnamon production image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover opacity-80 transition-all duration-500 hover:scale-105 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative border-t border-white/5 bg-[#0f0f0f] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-12 lg:grid-cols-12">
              <div className="reveal-up space-y-12 lg:col-span-4">
                <div>
                  <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-gold">Client Support</span>
                  <h2 className="mb-6 text-4xl font-light text-white">
                    Get <span className="serif italic text-white/50">In Touch</span>
                  </h2>
                  <p className="font-light leading-relaxed text-white/50">
                    The company specializes in producing and processing high-quality whole and ground Ceylon
                    cinnamon, tailored to the specific requirements of international customers.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <MapPin className="text-gold" size={18} />
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white">Address</h4>
                    </div>
                    <p className="text-lg font-light text-white/80">
                      284/34 gadabuwana road miriswatte,
                      <br />
                      Piliyandala, Sri Lanka
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <Phone className="text-gold" size={18} />
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white">Phone</h4>
                    </div>
                    <a href="tel:+94771517161" className="text-lg font-light text-white/80 transition-colors hover:text-gold">
                      +94 77 151 7161
                    </a>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <Mail className="text-gold" size={18} />
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white">Email</h4>
                    </div>
                    <a
                      href="mailto:james@ceyloncinnamoncompany.com"
                      className="text-lg font-light text-white/80 transition-colors hover:text-gold"
                    >
                      james@ceyloncinnamoncompany.com
                    </a>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <Clock3 className="text-gold" size={18} />
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white">Inquiry</h4>
                    </div>
                    <p className="text-lg font-light text-white/80">
                      Get Sample / Request A Quote
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal-up relative overflow-hidden lg:col-span-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <form className="space-y-4 border border-white/10 bg-black/20 p-6">
                    <h3 className="mb-6 text-2xl font-light text-white">Send us a message</h3>
                    <input className="premium-input" placeholder="Name *" />
                    <input className="premium-input" type="email" placeholder="Email *" />
                    <input className="premium-input" placeholder="Subject *" />
                    <textarea className="premium-input min-h-36 resize-none" placeholder="Comment or Message *" />
                    <button
                      type="button"
                      className="w-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.25em] text-black transition-opacity hover:opacity-85"
                    >
                      Send Message
                    </button>
                  </form>

                  <div className="relative h-[520px] overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 z-10 border border-white/10 transition-colors group-hover:border-gold/30" />
                    <iframe
                      src="https://www.google.com/maps?q=284/34%20gadabuwana%20road%20miriswatte,%20Piliyandala,%20Sri%20Lanka&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="map-grayscale h-full w-full"
                      title="Ceylon Cinnamon Company location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12">
          <div className="pointer-events-none absolute bottom-[-2.25rem] right-4 z-0 select-none font-heading text-[clamp(5rem,14vw,11rem)] leading-none text-white/[0.04] md:right-10">
            CCC
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <Image
                src={img("025-header_logo.png")}
                alt="Ceylon Cinnamon Company footer logo"
                width={150}
                height={44}
                className="mx-auto mb-2 h-auto w-36 md:mx-0"
              />
              <p className="text-xs uppercase tracking-widest text-white/30">
                Copyright © 2026 | Ceylon Cinnamon Company
              </p>
            </div>

            <div className="flex gap-8">
              <a
                href="https://www.facebook.com/people/Ceylon-Cinnamon-Company/61555586095788/"
                className="text-white/40 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ceyloncinnamoncompany/"
                className="text-white/40 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/ceylon-cinnamon-company/"
                className="text-white/40 transition-colors hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="flex gap-6 text-xs uppercase tracking-widest text-white/30">
              <a href="#story" className="transition-colors hover:text-gold">
                About
              </a>
              <a href="#contact" className="transition-colors hover:text-gold">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
