'use client';

import { useState } from 'react';
import { Smartphone, Laptop, Layers, Globe, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';
import Button from './Button';
import Eyebrow from './Eyebrow';

export default function AppEstimator({ onOpenQuote }) {
  const [platform, setPlatform] = useState('dynamic'); // 'static' | 'dynamic' | 'mobile' | 'both'
  const [appType, setAppType] = useState('ecommerce'); // 'ecommerce' | 'service' | 'crm' | 'marketplace'
  const [features, setFeatures] = useState(['payments', 'whatsapp', 'admin']); // array of selected feature ids

  const toggleFeature = (id) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Base calculation logic aligned with customer pricing:
  // Static site: 15k–25k
  // Dynamic site: 30k–45k
  // Mobile app: Starts from 30k (feature dependent)
  let baseWeeks = 2;
  let basePrice = 30000;

  if (platform === 'static') {
    basePrice = 15000;
    baseWeeks = 1;
  } else if (platform === 'dynamic') {
    basePrice = 30000;
    baseWeeks = 2;
  } else if (platform === 'mobile') {
    basePrice = 30000;
    baseWeeks = 3;
  } else if (platform === 'both') {
    basePrice = 45000;
    baseWeeks = 4;
  }

  // Business Category add-on
  if (appType === 'ecommerce') {
    basePrice += platform === 'static' ? 0 : 5000;
  } else if (appType === 'marketplace') {
    basePrice += 15000;
    baseWeeks += 1;
  } else if (appType === 'crm') {
    basePrice += 10000;
    baseWeeks += 1;
  }

  // Feature add-ons: ₹2,500 each
  const featureCost = features.length * 2500;
  const featureWeeks = Math.floor(features.length / 3);

  const totalMinPrice = basePrice + featureCost;
  const totalMaxPrice = Math.round(totalMinPrice * 1.25);
  const totalWeeks = baseWeeks + featureWeeks;

  return (
    <div className="rounded-2xl border border-subtle bg-surface p-5 sm:p-8 lg:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-subtle">
        <div>
          <Eyebrow>BUDGET &amp; TIMELINE ESTIMATOR</Eyebrow>
          <h3 className="font-head text-xl sm:text-2xl font-bold text-primary">
            Quick Project Cost Calculator
          </h3>
          <p className="font-body text-xs sm:text-sm text-muted mt-1">
            Apni requirement select karein aur instant estimate dekhein — Static ₹15k–₹25k, Dynamic ₹30k–₹45k, Mobile App ₹30k+.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#3DD9B0] bg-[#3DD9B0]/10 px-3 py-1.5 rounded-md border border-[#3DD9B0]/30 self-start md:self-auto">
          <Calculator className="w-4 h-4" />
          <span>Transparent Pricing</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Config Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Platform Choice */}
          <div>
            <span className="block font-mono text-xs uppercase font-bold text-primary mb-2">
              1. What do you want to build?
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'static', label: 'Static Website', sub: '₹15k–₹25k', icon: Globe },
                { id: 'dynamic', label: 'Dynamic Website', sub: '₹30k–₹45k', icon: Laptop },
                { id: 'mobile', label: 'Mobile App', sub: 'Starts ₹30k', icon: Smartphone },
                { id: 'both', label: 'App + Web Store', sub: 'From ₹45k', icon: Layers },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-colors cursor-pointer ${
                      platform === p.id
                        ? 'border-[#FF6B2C] bg-[#FF6B2C]/10 text-primary shadow-2xs'
                        : 'border-subtle bg-surface-2 text-muted hover:text-primary hover:border-subtle/80'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#FF6B2C] mb-2" />
                    <span className="font-head text-xs font-bold leading-tight block">{p.label}</span>
                    <span className="font-mono text-[10px] text-[#FF6B2C] font-semibold mt-1 block">{p.sub}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Application Category */}
          <div>
            <span className="block font-mono text-xs uppercase font-bold text-primary mb-2">
              2. Your Business Type
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'service', label: 'Local Shop / Service' },
                { id: 'ecommerce', label: 'Online Store / Shop' },
                { id: 'crm', label: 'Custom CRM / Billing' },
                { id: 'marketplace', label: 'Multi-Vendor Portal' },
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setAppType(t.id)}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-mono font-bold text-center transition-colors cursor-pointer ${
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
            <span className="block font-mono text-xs uppercase font-bold text-primary mb-2">
              3. Features You Need (Click to select)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: 'payments', label: 'Instant Online Payment (UPI / PhonePe)' },
                { id: 'whatsapp', label: 'Automatic WhatsApp Order Alerts' },
                { id: 'admin', label: 'Easy Admin Panel (Update Photos & Rates)' },
                { id: 'auth', label: 'Customer Login with Mobile OTP' },
                { id: 'push', label: 'Push Notifications (Send Customer Offers)' },
                { id: 'courier', label: 'Courier API & Live Order Tracking' },
              ].map((f) => {
                const isSelected = features.includes(f.id);
                return (
                  <button
                    type="button"
                    key={f.id}
                    onClick={() => toggleFeature(f.id)}
                    className={`py-2.5 px-3 rounded-lg border text-left text-xs font-body font-medium flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#FF6B2C] bg-[#FF6B2C]/10 text-primary'
                        : 'border-subtle bg-surface-2 text-muted hover:text-primary'
                    }`}
                  >
                    <span>{f.label}</span>
                    <span
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center text-[10px] shrink-0 ml-2 ${
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
        <div className="lg:col-span-5 bg-surface-2 p-5 sm:p-7 rounded-xl border border-subtle flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-[#FF6B2C] uppercase tracking-wider block mb-1">
              Estimated Investment
            </span>

            <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-1">
              <span className="font-head text-2xl sm:text-3xl font-bold text-primary tracking-tight whitespace-nowrap">
                ₹{totalMinPrice.toLocaleString('en-IN')}
              </span>
              <span className="font-head text-lg sm:text-xl font-bold text-muted whitespace-nowrap">
                – ₹{totalMaxPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-muted mb-6">
              <span>Estimated Delivery:</span>
              <span className="text-[#3DD9B0] font-bold">{totalWeeks}–{totalWeeks + 1} Weeks</span>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-2.5 pb-6 mb-6 border-b border-subtle text-xs text-primary font-body">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>100% Full Website &amp; App Ownership (Sab kuch aapka)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Weekly live demo links to check on your phone</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Free 30 days support &amp; guidance after launch</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <span>Direct phone &amp; WhatsApp contact with developers</span>
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
              <span>Get Free Quote for This Project</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span className="font-mono text-[10px] text-muted text-center block mt-2">
              Free discovery call on WhatsApp/Phone &bull; No obligation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
