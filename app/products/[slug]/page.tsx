import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Package, ShieldCheck } from "lucide-react";
import { getProductBySlug, products } from "../../product-data";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Ceylon Cinnamon Company"
    };
  }

  return {
    title: `${product.title} | Ceylon Cinnamon Company`,
    description: product.summary
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#1a1108] antialiased">
      <header className="border-b border-[#eadfd2] bg-white/95 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/#home" className="flex items-center gap-3">
            <Image
              src="/cinnamon/030-Untitled-2-65x69.webp"
              alt="Ceylon Cinnamon Company mark"
              width={38}
              height={41}
              className="h-10 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#1a1108]">
                Ceylon Cinnamon
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#9b8472]">Company</span>
            </div>
          </Link>

          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#5a4130] transition-colors hover:text-amber-DEFAULT"
          >
            <ArrowLeft size={14} strokeWidth={1.8} />
            Products
          </Link>
        </div>
      </header>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-[#eadfd2] bg-[#f0eee9]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-contain p-5 md:p-8"
              priority
            />
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dfc9ad] bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a96f24]">
              <Package size={14} strokeWidth={1.7} />
              {product.category}
            </div>
            <h1 className="mb-5 max-w-2xl text-4xl font-light leading-tight tracking-tight md:text-6xl">
              {product.title}
            </h1>
            <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-[#5a4130] md:text-lg">
              {product.summary}
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {product.specs.map((item) => (
                <div key={item.label} className="rounded-lg border border-[#eadfd2] bg-white p-4">
                  <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9b8472]">
                    {item.label}
                  </div>
                  <div className="text-sm font-light leading-relaxed text-[#1a1108]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">
                Enquire Now <Mail size={15} strokeWidth={1.8} />
              </Link>
              <Link href="/#products" className="btn-outline">
                Back to Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfd2] bg-white px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <DetailGroup title="Key Characteristics" items={product.characteristics} />
          <DetailGroup title="Benefits" items={product.benefits} />
          <DetailGroup title="Uses" items={product.uses} />
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="section-label">More Products</div>
              <h2 className="text-3xl font-light tracking-tight md:text-4xl">Explore the catalogue</h2>
            </div>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 self-start text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a1108] transition-colors hover:text-amber-DEFAULT md:self-auto"
            >
              All products <ArrowRight size={14} strokeWidth={1.7} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-lg border border-[#eadfd2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square bg-[#f3f1ed]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#a96f24]">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-light">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#eadfd2] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-light text-[#6c584a] md:flex-row md:items-center">
          <span>Copyright © 2026 | Ceylon Cinnamon Company</span>
          <Link href="/#contact" className="text-[#1a1108] transition-colors hover:text-amber-DEFAULT">
            Contact sales
          </Link>
        </div>
      </footer>
    </main>
  );
}

function DetailGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-[#eadfd2] bg-[#fbfaf8] p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1108] text-white">
          <ShieldCheck size={17} strokeWidth={1.7} />
        </div>
        <h2 className="text-xl font-light">{title}</h2>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-light leading-relaxed text-[#5a4130]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#a96f24]" strokeWidth={1.8} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
