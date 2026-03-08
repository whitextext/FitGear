import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore } from "@/types/cart";

/**
 * Zustand store hook for managing global shopping cart state.
 * Uses the `persist` middleware to save the cart into `localStorage`
 * (under the key "fitgear-cart"), ensuring cart data survives page reloads.
 */
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      
      /**
       * Adds a product to the cart.
       * If the product already exists based on `product.id`, it increments the quantity.
       * Otherwise, it appends the new product with the initial quantity.
       */
      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity }] };
        }),
        
      /**
       * Removes an item completely from the cart array, regardless of its quantity.
       */
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
        
      /**
       * Clears the entire cart by resetting the array to empty.
       */
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "fitgear-cart",
    },
  ),
);
