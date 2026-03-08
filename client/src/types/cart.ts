import type { Product } from "./product";

/**
 * Represents an item in the shopping cart.
 * Extends the base Product interface by adding a quantity field.
 */
export interface CartItem extends Product {
  /** The number of units of this product in the cart */
  quantity: number;
}

/**
 * Zustand store interface for managing the shopping cart state.
 */
export interface CartStore {
  /** The list of items currently in the cart */
  cart: CartItem[];
  /**
   * Adds a product to the cart or increments its quantity if it already exists.
   * @param product - The product to add
   * @param quantity - The number of units to add (defaults to 1)
   */
  addToCart: (product: Product, quantity?: number) => void;
  /**
   * Completely removes a product from the cart regardless of quantity.
   * @param productId - The unique identifier of the product to remove
   */
  removeFromCart: (productId: string | number) => void;
  /** Purges all items from the cart */
  clearCart: () => void;
}
