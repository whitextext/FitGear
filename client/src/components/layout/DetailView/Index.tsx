import { useState } from "react";
import { type Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RatingIcon from "@/components/common/RatingIcon";
import { ArrowLeft, Truck, ShieldCheck } from "lucide-react";

/**
 * A detailed view for a single product, displaying its image, name, description, and price.
 * Allows the user to select a quantity and add the product to their cart.
 *
 * @param product - The product data to display (if null, renders nothing)
 * @param onBack - Callback to navigate back to the product grid
 * @param onAdd - Callback triggered when the "Adicionar ao Inventário" button is clicked
 */
const DetailView = ({
  product,
  onBack,
  onAdd,
}: {
  product: Product | null;
  onBack: () => void;
  onAdd: (p: Product, q: number) => void;
}) => {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-10 text-[10px] font-black uppercase tracking-[0.2em]"
      >
        <ArrowLeft size={16} /> Voltar à Base
      </button>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/50">
        <div className="md:w-1/2 bg-white p-12 flex items-center justify-center relative min-h-[400px]">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[450px] object-contain drop-shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 p-12 lg:p-16 flex flex-col">
          <Badge className="w-fit mb-6 px-3">{product.category}</Badge>
          <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none italic">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <RatingIcon value={5} />
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest border-l border-zinc-800 pl-4">
              Testado em Combate
            </span>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-medium">
            {product.desc}
          </p>

          <div className="mb-12">
            <span className="text-xs text-zinc-500 font-black uppercase block mb-2 tracking-widest">
              Investimento
            </span>
            <span className="text-5xl font-black tracking-tighter">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex gap-4 mt-auto">
            <div className="w-24 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center overflow-hidden">
              <input
                type="number"
                value={qty}
                min={1}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full bg-transparent text-center font-black text-xl text-white focus:outline-none"
              />
            </div>
            <Button
              onClick={() => onAdd(product, qty)}
              className="flex-1 text-lg py-5"
            >
              Adicionar ao Inventário
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-zinc-800/50">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-tighter text-zinc-500">
              <Truck size={20} className="text-red-600" /> Logística Flash
            </div>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-tighter text-zinc-500">
              <ShieldCheck size={20} className="text-red-600" /> Blindagem Total
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
