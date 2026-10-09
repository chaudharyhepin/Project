import { createFileRoute } from '@tanstack/react-router';
import { editions, PricingCard } from '@/components/pricing-card';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Edition Pricing — Personal, Team & Enterprise' },
      { name: 'description', content: 'Compare Personal at $19.99, Team at $49.99, and Enterprise at $89.99.' },
      { property: 'og:title', content: 'Edition Pricing — Personal, Team & Enterprise' },
      { property: 'og:description', content: 'Find your edition: Personal, Team, or Enterprise.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="pricing-page" aria-label="Edition pricing">
      <div className="pricing-grid">
        {editions.map((edition) => <PricingCard key={edition.id} edition={edition} />)}
      </div>
    </main>
  );
}
