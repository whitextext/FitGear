import Link from "../../common/Link";
import { User, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

/**
 * Displays user-specific header actions, such as the shopping cart and login button.
 * Uses the cart store to display the current total number of items in the cart.
 */
export default function UserOptions() {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-row gap-3 items-center">
      <Link href="/cart">
        <div className="relative group">
          <ShoppingCart className="text-white hover:text-red-500 transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-black">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
      <Link href="/login">
        <User className="text-white hover:text-red-500 transition-colors" />
      </Link>
    </div>
  );
}
