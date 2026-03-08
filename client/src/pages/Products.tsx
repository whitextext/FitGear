import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SidebarFilters from "@/components/layout/SidebarFilters";
import ProductGrid from "@/components/layout/ProductGrid";
import type { Product } from "@/types/product";
import productsData from "@/assets/Products.json";
import { useCartStore } from "@/store/cartStore";

/**
 * The main Shop / Products view.
 * Features a dynamic grid of products, a sidebar for filtering by category and max price.
 */
export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(
    location.state?.category || "all",
  );
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = useMemo(() => {
    return productsData.PRODUCTS.filter(
      (p: Product) =>
        (activeCategory === "all" || p.category === activeCategory) &&
        p.price <= maxPrice,
    );
  }, [activeCategory, maxPrice]);

  const addToCart = useCartStore((state) => state.addToCart);

  const handleProductClick = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row gap-8">
        <SidebarFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          maxPrice={maxPrice}
          onPriceChange={setMaxPrice}
        />

        <div className="flex-1">
          <ProductGrid
            products={filteredProducts}
            onProductClick={handleProductClick}
            onAddClick={(p) => addToCart(p, 1)}
          />
        </div>
      </div>
    </PageLayout>
  );
}
