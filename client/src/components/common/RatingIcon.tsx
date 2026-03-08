import { Star } from "lucide-react";

/**
 * Renders a 5-star rating visual based on the provided numeric value.
 *
 * @param value - The numeric rating out of 5 (defaults to 5)
 */
const RatingIcon = ({ value = 5 }: { value: number }) => (
  <div className="flex items-center gap-1 text-red-600">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill={i < value ? "currentColor" : "none"} className={i >= value ? "text-zinc-800" : ""} />
    ))}
  </div>
);

export default RatingIcon;