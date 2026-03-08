import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import CategoryCard from "@/components/common/CategoryCard";
import type { Category } from "@/types/category";
import categoriesData from "@/assets/Categories.json";

/**
 * The landing page of the application.
 * Features a hero banner and a grid of top-level product categories.
 */
export default function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout mainClassName="mt-16 mb-16 px-4 md:px-8 lg:px-16 !py-0 !container-none !mx-0">
      <section className="relative h-[600px] rounded-3xl overflow-hidden border border-zinc-800 group mb-16">
        <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')]" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
        <div className="relative z-20 h-full flex flex-col items-start justify-center text-left px-12 md:px-20 max-w-4xl">
          <Badge className="mb-6 py-1 px-4 text-xs">Acessórios de Elite</Badge>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-6 tracking-tighter leading-none italic">
            Domina o{" "}
            <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] underline">
              Ferro
            </span>
          </h1>
          <p className="text-zinc-400 max-w-md mb-10 text-xl font-medium leading-relaxed">
            Nascemos no underground. Vivemos pela performance. Equipamento
            técnico para atletas que não aceitam desculpas.
          </p>
          <Button
            onClick={() => navigate("/products")}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Explorar Arsenal
          </Button>
        </div>
      </section>

      <h2 className="text-3xl font-black uppercase italic border-l-4 border-red-600 pl-6 mb-10 tracking-tighter">
        Categorias Base
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesData.CATEGORIES.map((cat: Category) => (
          <CategoryCard
            key={cat.val}
            category={cat}
            onClick={() =>
              navigate("/products", { state: { category: cat.val } })
            }
          />
        ))}
      </div>
    </PageLayout>
  );
}
