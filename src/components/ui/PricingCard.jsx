import { Check } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function PricingCard({
  tier,
  currency = 'INR', // 'INR' | 'USD'
  onSelect,
}) {
  const price = currency === 'INR' ? `₹${tier.priceINR}` : `$${tier.priceUSD}`;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-200 p-6 sm:p-8 ${
        tier.popular
          ? 'bg-surface border-[#FF6B2C] shadow-xl lg:-translate-y-2'
          : 'bg-surface border-subtle hover:border-subtle/80 shadow-xs'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="accent" size="sm" className="bg-[#FF6B2C] text-white border-transparent">
            {tier.badge}
          </Badge>
        </div>
      )}

      <div>
        <div className="flex justify-between items-start gap-2 mb-2 sm:min-h-[3rem]">
          <h3 className="font-head text-lg sm:text-xl font-bold text-primary leading-snug">
            {tier.name}
          </h3>
          {!tier.popular && tier.badge && (
            <Badge variant="neutral" size="sm" className="shrink-0 text-[10px] sm:text-xs">
              {tier.badge}
            </Badge>
          )}
        </div>

        <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6 sm:min-h-[3.25rem]">
          {tier.desc}
        </p>

        {/* Price Display */}
        <div className="pb-5 mb-6 border-b border-subtle">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider block mb-1">
            Starting
          </span>
          <div className="flex items-baseline">
            <span className="font-head text-2xl sm:text-[1.65rem] font-bold text-primary tracking-tight whitespace-nowrap">
              {price}
            </span>
          </div>
          <span className="font-mono text-[11px] text-muted block mt-1.5">
            {tier.period} &bull; Delivered in {tier.timeline}
          </span>
        </div>

        {/* Features list with orange checks */}
        <ul className="space-y-3 mb-8">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary font-body">
              <Check className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button
          variant={tier.popular ? 'primary' : 'secondary'}
          size="md"
          className="w-full"
          to="/contact"
          onClick={onSelect}
        >
          {tier.ctaText}
        </Button>
      </div>
    </div>
  );
}
