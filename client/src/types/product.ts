/**
 * Represents a single product in the catalog.
 */
export interface Product {
  /** Unique identifier for the product */
  id: string | number;
  /** Name or title of the product */
  name: string;
  /** URL or path to the product's main image */
  image: string;
  /** The category this product belongs to */
  category: string;
  /** The price of the product */
  price: number;
  /** Optional detailed description of the product */
  desc?: string;
}

/**
 * Props for the product grid viewing component.
 */
export interface ProductGridProps {
  /** List of products to display in the grid */
  products: Product[];
  /** Callback fired when the product card is clicked for details */
  onProductClick: (product: Product) => void;
  /** Callback fired when the "Add to Cart" or quick add button is clicked */
  onAddClick: (product: Product) => void;
}
