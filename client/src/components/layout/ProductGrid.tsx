import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProductGridProps } from "@/types/product";

/**
 * Displays a grid of product cards.
 * Provides functionalities to click on a product for details or directly add it to the cart.
 *
 * @param products - Array of product objects to render
 * @param onProductClick - Callback when the product card is clicked
 * @param onAddClick - Callback when the add-to-cart button is clicked
 */
const ProductGrid = ({
  products,
  onProductClick,
  onAddClick,
}: ProductGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all group cursor-pointer"
        onClick={() => onProductClick(product)}
      >
        <div className="h-56 bg-white relative overflow-hidden flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="p-5">
          <Badge>{product.category}</Badge>
          <h3 className="mt-3 font-bold text-zinc-100 truncate group-hover:text-red-500 transition-colors">
            {product.name}
          </h3>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-black tracking-tighter">
              R$ {product.price.toFixed(2)}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddClick(product);
              }}
              className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-all active:scale-90"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductGrid;
