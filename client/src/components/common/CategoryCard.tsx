import { ChevronRight } from "lucide-react";
import type { Category } from "@/types/category";

/**
 * A card component used to display a product category.
 * Features an image background with hover effects and a category title.
 *
 * @param category - The category data object containing id, val, and img
 * @param onClick - Callback triggered when the card is clicked
 */
export default function CategoryCard({
  category,
  onClick,
}: {
  category: Category;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative h-48 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer group"
    >
      <img
        src={category.img}
        alt={category.id}
        className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
        <span className="text-lg font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-red-600 transition-all">
          {category.id}
        </span>
        <ChevronRight
          size={20}
          className="text-red-600 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all"
        />
      </div>
    </div>
  );
}
