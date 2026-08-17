/**
 * Injects JSON-LD structured data into the document head.
 * Used in root layout for LocalBusiness + Service schema.
 */
export function JsonLd({ data }: { data: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
