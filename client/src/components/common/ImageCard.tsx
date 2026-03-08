import type { Url } from "@/types/imageCard";

/**
 * Simple wrapper component for displaying an image from a URL.
 *
 * @param url - The source URL of the image
 */
export default function ImageCard({ url }: Url) {
  return (
    <div>
      <img src={url} alt="" />
    </div>
  );
}
