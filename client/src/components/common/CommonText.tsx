/**
 * A generic text component configured with standard typography styles.
 *
 * @param text - The string content to render
 * @param className - Optional CSS classes to append or override styles
 */
export default function CommonText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      className={`text-sky-100 text-sm hover:text-red-500 transition-colors font-mono ${className}`}
    >
      {text}
    </p>
  );
}
