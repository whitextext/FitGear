/**
 * Represents a product category in the system.
 */
export interface Category {
  /** Unique identifier for the category */
  id: string;
  /** Display label/value for the category */
  val: string;
  /** URL or path to the category's background/display image */
  img: string;
}
