'use client';

import { useState } from 'react';
import Section from './ui/Section';
import PricingCard from './ui/PricingCard';
import AppEstimator from './ui/AppEstimator';
import { pricingTiers } from '../content/pricing';

export default function PricingSection({ onOpenContact }) {
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'

  return (
    <Section
      id="pricing"
      eyebrow="TRANSPARENT PRICING &amp; PACKAGES"
      title="Simple, affordable packages with zero"
      highlightWord="hidden costs."
      subtitle="Static websites at ₹15k–₹25k, dynamic web stores at ₹30k–₹45k, and mobile apps starting from ₹30k. Honest pricing and free 30-day technical support."
      align="center"
    >
      {/* Currency Switcher Toggle (INR / USD) */}
      <div className="flex items-center justify-center gap-2 mb-10 sm:mb-12">
        <span className="font-mono text-xs font-semibold text-muted">Currency:</span>
        <div className="inline-flex p-1 rounded-lg border border-subtle bg-surface">
          <button
            type="button"
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1 font-mono text-xs font-bold rounded-md transition-all cursor-pointer ${
              currency === 'INR'
                ? 'bg-[#FF6B2C] text-white shadow-2xs'
                : 'text-muted hover:text-primary'
            }`}
          >
            INR (₹)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 font-mono text-xs font-bold rounded-md transition-all cursor-pointer ${
              currency === 'USD'
                ? 'bg-[#FF6B2C] text-white shadow-2xs'
                : 'text-muted hover:text-primary'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16 text-left">
        {pricingTiers.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            currency={currency}
            onSelect={onOpenContact}
          />
        ))}
      </div>

      {/* Footnote */}
      <p className="font-mono text-xs text-muted text-center max-w-xl mx-auto mb-14">
        * Har project ka exact fixed price written proposal me confirm hota hai. Payment simple 30/40/30 milestone basis par hoti hai.
      </p>

      {/* Interactive App Development Timeline & Cost Estimator (Section 13) */}
      <div className="text-left">
        <AppEstimator onOpenQuote={onOpenContact} />
      </div>
    </Section>
  );
}
