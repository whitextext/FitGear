import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { useCartStore } from "@/store/cartStore";

/**
 * The Shopping Cart page.
 * Displays the items currently added to the user's cart, their quantities,
 * individual prices, and the total cost. Allows removing items.
 */
export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCartStore();
  const [isHydrated, setIsHydrated] = useState(
    useCartStore.persist.hasHydrated,
  );

  useEffect(() => {
    // Escuta a reidratação do Zustand
    const unsubHydrate = useCartStore.persist.onFinishHydration(() =>
      setIsHydrated(true),
    );

    return () => {
      unsubHydrate();
    };
  }, []);

  if (!isHydrated) {
    return (
      <PageLayout mainClassName="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-zinc-800 border-t-red-600 animate-spin" />
      </PageLayout>
    );
  }

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <PageLayout>
      <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black italic uppercase mb-12 border-l-4 border-red-600 pl-6">
          Teu Inventário<span className="text-red-600">.</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-4">
            {cart.length === 0 ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl py-32 text-center">
                <p className="text-zinc-500 font-black uppercase tracking-[0.2em] mb-8">
                  Nenhum recurso detectado.
                </p>
                <Button variant="outline" onClick={() => navigate("/products")}>
                  Voltar ao Arsenal
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between group hover:border-zinc-600 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center">
                      <img
                        src={item.image}
                        className="max-h-full object-contain"
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm italic tracking-tight group-hover:text-red-500 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs font-bold text-zinc-500 mt-1 uppercase">
                        R$ {item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-black text-lg tracking-tighter">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                      className="px-2"
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl sticky top-28">
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4 italic">
                Relatório de Custos
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-zinc-500 text-xs font-bold uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-white">R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500 text-xs font-bold uppercase tracking-widest">
                  <span>Logística</span>
                  <span className="text-red-500">Grátis</span>
                </div>
              </div>
              <div className="flex justify-between text-3xl font-black mb-10 pt-6 border-t border-zinc-800 tracking-tighter italic">
                <span>Total</span>
                <span className="text-red-600">R$ {cartTotal.toFixed(2)}</span>
              </div>
              <Button
                className="w-full py-5 text-lg"
                disabled={cart.length === 0}
                onClick={() => {}}
              >
                Consolidar Aquisição
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
