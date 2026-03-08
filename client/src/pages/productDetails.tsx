import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import DetailView from "@/components/layout/DetailView/Index";
import productsData from "@/assets/Products.json";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetails() {
  const { id } = useParams(); // Captura o ID da URL
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  // Busca o produto (Simulando um fetch de API)
  // O id vem como string da URL, converta para number
  const product = productsData.PRODUCTS.find((p) => p.id === Number(id));

  // Tratamento de Erro 404 Básico
  if (!product) {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
          <h2 className="text-3xl font-black uppercase italic text-red-600 mb-4">
            Produto Não Encontrado
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="text-zinc-400 hover:text-white underline"
          >
            Voltar para o arsenal
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <DetailView
        product={product}
        onBack={() => navigate("/products")}
        onAdd={(p, qty) => addToCart(p, qty)}
      />
    </PageLayout>
  );
}
