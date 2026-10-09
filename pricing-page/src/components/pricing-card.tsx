import { Settings, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import personalCity from '@/assets/personal-city.jpg';
import teamCity from '@/assets/team-city.jpg';
import enterpriseForest from '@/assets/enterprise-forest.jpg';

export function RocketUpright({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.2c2.5 2.1 3.8 5.2 3.8 8.7v5.7H8.2v-5.7c0-3.5 1.3-6.6 3.8-8.7Z" />
      <circle cx="12" cy="9.6" r="1.9" />
      <path d="M8.2 12.9 5.4 15.7v3.4l2.8-2.3" />
      <path d="M15.8 12.9l2.8 2.8v3.4l-2.8-2.3" />
      <path d="M9.9 16.6h4.2c0 2.5-1.3 4-2.1 5.2-.8-1.2-2.1-2.7-2.1-5.2Z" />
    </svg>
  );
}



export const editions = [
  { id: 'personal', name: 'Personal Edition', price: '19.99', image: personalCity, alt: 'A peach-colored pixel-art city skyline', icon: RocketUpright, action: 'Buy now' },
  { id: 'team', name: 'Team Edition', price: '49.99', image: teamCity, alt: 'A blue pixel-art city skyline beneath white clouds', icon: Settings, action: 'Follow me on codepen' },
  { id: 'enterprise', name: 'Enterprise Edition', price: '89.99', image: enterpriseForest, alt: 'A green pixel-art woodland and waterfall', icon: Send, action: 'Buy now' },
] as const;

type Edition = (typeof editions)[number];
export function PricingCard({ edition }: { edition: Edition }) {
  const Icon = edition.icon;
  return (
    <article className={`pricing-card ${edition.id}`} aria-labelledby={`${edition.id}-title`}>
      <div className="card-picture">
        <img src={edition.image} alt={edition.alt} width={1152} height={576} />
      </div>
      <div className="card-body">
        <div className="card-badge" aria-hidden="true"><Icon className={edition.id === 'personal' ? 'rocket-upright' : ''} /></div>
        <h2 id={`${edition.id}-title`} className="edition-title">{edition.name}</h2>
        <p className="edition-price">${edition.price}</p>
        <p className="edition-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <p className="edition-description">Fusce sed tortor in orci ultrices tempor quis ut leo. Fusce imperdiet eget ante eu faucibus. Nam rhoncus sapien</p>
        {edition.id === 'team' ? (
          <Button variant="pricing" asChild><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">{edition.action}</a></Button>
        ) : (
          <Button variant="pricing" onClick={() => window.alert(`${edition.name} selected ($${edition.price}). This is a pricing demo; checkout is not connected.`)} aria-label={`Buy ${edition.name}`}>{edition.action}</Button>
        )}
      </div>
    </article>
  );
}
