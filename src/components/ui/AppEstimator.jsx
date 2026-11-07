import { useState } from 'react';
import { Smartphone, Laptop, Layers, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';
import Button from './Button';
import Eyebrow from './Eyebrow';

export default function AppEstimator({ onOpenQuote }) {
  const [platform, setPlatform] = useState('both'); // 'mobile' | 'web' | 'both'
  const [appType, setAppType] = useState('ecommerce'); // 'ecommerce' | 'saas' | 'service' | 'marketplace'
  const [features, setFeatures] = useState(['auth', 'payments', 'whatsapp']); // array of selected feature ids

  const toggleFeature = (id) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Base calculation logic
  let baseWeeks = platform === 'both' ? 4 : 3;
  let basePrice = platform === 'both' ? 70000 : 35000;

  if (appType === 'marketplace' || appType === 'saas') {
    baseWeeks += 2;
    basePrice += 25000;
  }

  // Feature add-ons
  const featureCost = features.length * 8000;
  const featureWeeks = Math.floor(features.length / 2);

  const totalMinPrice = basePrice + featureCost;
  const totalMaxPrice = Math.round(totalMinPrice * 1.35);
  const totalWeeks = baseWeeks + featureWeeks;

  return (
    <div className="rounded-2xl border border-subtle bg-surface p-6 sm:p-8 lg:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-subtle">
        <div>
          <Eyebrow>ESTIMATE YOUR TIMELINE &amp; COST</Eyebrow>
          <h3 className="font-head text-xl sm:text-2xl font-bold text-primary">
            App &amp; Website Project Estimator
          </h3>
          <p className="font-body text-xs sm:text-sm text-muted mt-1">
            Select your project parameters to get an instant realistic timeline and cost range.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#3DD9B0] bg-[#3DD9B0]/10 px-3 py-1.5 rounded-md border border-[#3DD9B0]/30 self-start md:self-auto">
          <Calculator className="w-4 h-4" />
          <span>Instant Interactive Scoping</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Config Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Platform Choice */}
          <div>
            <label className="block font-mono text-xs uppercase font-bold text-primary mb-2">
              1. Platform Deployment
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'mobile', label: 'React Native App', icon: Smartphone },
                { id: 'web', label: 'Website / Web App', icon: Laptop },
                { id: 'both', label: 'App + Web Store', icon: Layers },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      platform === p.id
                        ? 'border-[#FF6B2C] bg-[#FF6B2C]/10 text-primary shadow-2xs'
                        : 'border-subtle bg-surface-2 text-muted hover:text-primary hover:border-subtle/80'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#FF6B2C] mb-2" />
                    <span className="font-head text-xs font-bold leading-tight">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Application Category */}
          <div>
            <label className="block font-mono text-xs uppercase font-bold text-primary mb-2">
              2. Business Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'ecommerce', label: 'E-Commerce / Store' },
                { id: 'service', label: 'Service / Booking' },
                { id: 'saas', label: 'CRM / SaaS Portal' },
                { id: 'marketplace', label: 'Multi-Vendor App' },
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setAppType(t.id)}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                    appType === t.id
                      ? 'border-[#FF6B2C] bg-[#FF6B2C] text-white shadow-2xs'
                      : 'border-subtle bg-surface-2 text-muted hover:text-primary hover:border-subtle/80'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Core Features Checklist */}
          <div>
            <label className="block font-mono text-xs uppercase font-bold text-primary mb-2">
              3. Key Integrations Needed
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'auth', label: 'User Login & Biometrics' },
                { id: 'payments', label: 'Razorpay / Stripe UPI' },
                { id: 'whatsapp', label: 'WhatsApp Order Dispatch' },
                { id: 'admin', label: 'Custom Admin Dashboard' },
                { id: 'push', label: 'Push Notifications & SMS' },
                { id: 'courier', label: 'Courier API Tracking' },
              ].map((f) => {
                const isSelected = features.includes(f.id);
                return (
                  <button
                    type="button"
                    key={f.id}
                    onClick={() => toggleFeature(f.id)}
                    className={`py-2 px-3 rounded-lg border text-left text-xs font-body font-medium flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#FF6B2C] bg-[#FF6B2C]/10 text-primary'
                        : 'border-subtle bg-surface-2 text-muted hover:text-primary'
                    }`}
                  >
                    <span>{f.label}</span>
                    <span
                      className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] ${
                        isSelected
                          ? 'bg-[#FF6B2C] border-[#FF6B2C] text-white'
                          : 'border-subtle'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Estimation Result Box (5 cols) */}
        <div className="lg:col-span-5 bg-surface-2 p-6 sm:p-7 rounded-xl border border-subtle flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-[#FF6B2C] uppercase tracking-wider block mb-1">
              Estimated Investment
            </span>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-head text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                ₹{totalMinPrice.toLocaleString('en-IN')}
              </span>
              <span className="font-body text-sm text-muted">
                – ₹{totalMaxPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-muted mb-6">
              <span>Estimated Delivery:</span>
              <span className="text-[#3DD9B0] font-bold">{totalWeeks}–{totalWeeks + 2} Weeks</span>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-2.5 pb-6 mb-6 border-b border-subtle text-xs text-primary font-body">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>100% Full Source Code &amp; IP Rights Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Weekly live demo checkpoints on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Free 30 days post-launch technical warranty</span>
              </div>
            </div>
          </div>

          <div>
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-between"
              to="/contact"
              onClick={onOpenQuote}
            >
              <span>Lock This Scope &amp; Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span className="font-mono text-[10px] text-muted text-center block mt-2">
              Free 45-min technical discovery call &bull; No obligation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
