import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import ThemeToggle from '../components/ui/ThemeToggle';
import { ArrowRight, Check } from 'lucide-react';

export default function StyleguidePage() {
  return (
    <div className="w-full py-12 sm:py-16">
      <Container>
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-subtle">
          <div>
            <Eyebrow>DESIGN SYSTEM SPEC</Eyebrow>
            <h1 className="font-head text-3xl sm:text-4xl font-bold text-primary">
              JhalaWebTech UI Styleguide
            </h1>
            <p className="font-mono text-xs text-muted mt-1">
              Deep Ink (#0B0D12) + Signal Orange (#FF6B2C) &bull; WCAG 2.2 AA Compliant
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* 1. Color Palette Tokens */}
        <section className="mb-14">
          <h2 className="font-head text-xl font-bold text-primary mb-4">1. Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#0B0D12] text-white border border-[#262B38]">
              <span className="block font-bold">Deep Ink (BG)</span>
              <span className="opacity-70">#0B0D12</span>
            </div>
            <div className="p-4 rounded-xl bg-[#12151C] text-white border border-[#262B38]">
              <span className="block font-bold">Surface Card</span>
              <span className="opacity-70">#12151C</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1A1E28] text-white border border-[#262B38]">
              <span className="block font-bold">Surface 2</span>
              <span className="opacity-70">#1A1E28</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FF6B2C] text-white">
              <span className="block font-bold">Signal Orange</span>
              <span className="opacity-70">#FF6B2C</span>
            </div>
            <div className="p-4 rounded-xl bg-[#3DD9B0] text-black">
              <span className="block font-bold">Success Green</span>
              <span className="opacity-70">#3DD9B0</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] text-black border border-[#E4DFD7]">
              <span className="block font-bold">Light Mode BG</span>
              <span className="opacity-70">#FAF8F5</span>
            </div>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="mb-14 space-y-4">
          <h2 className="font-head text-xl font-bold text-primary mb-4">2. Typography Scale</h2>
          <div>
            <span className="font-mono text-xs text-muted block">Display Heading (Space Grotesk)</span>
            <p className="font-head text-4xl sm:text-5xl font-bold text-primary tracking-tight">
              Websites and mobile apps that turn visitors into customers.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-muted block">Body Copy (Inter)</span>
            <p className="font-body text-base text-muted max-w-2xl leading-relaxed">
              Custom web &amp; React Native app development for startups and growing businesses. Clear fixed-price quotes, weekly live demos, launch in 4 to 6 weeks.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-muted block">Mono Accents (JetBrains Mono)</span>
            <p className="font-mono text-sm text-[#FF6B2C]">
              const JWT_STACK = ['React Native', 'Next.js 15', 'Node.js', 'Django'];
            </p>
          </div>
        </section>

        {/* 3. Button Variants */}
        <section className="mb-14">
          <h2 className="font-head text-xl font-bold text-primary mb-4">3. Buttons (≥44px Tap Target)</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="md" icon={ArrowRight}>
              Primary Signal Orange
            </Button>
            <Button variant="secondary" size="md" icon={Check}>
              Secondary Surface
            </Button>
            <Button variant="ghost" size="md">
              Ghost Button
            </Button>
            <Button variant="link">
              Inline Link &rarr;
            </Button>
          </div>
        </section>

        {/* 4. Badges */}
        <section className="mb-14">
          <h2 className="font-head text-xl font-bold text-primary mb-4">4. Badges &amp; Tags</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">Signal Orange</Badge>
            <Badge variant="neutral">Neutral Border</Badge>
            <Badge variant="success">Verified Delivery</Badge>
            <Badge variant="outline">Outline Tag</Badge>
          </div>
        </section>

        {/* 5. Cards */}
        <section>
          <h2 className="font-head text-xl font-bold text-primary mb-4">5. Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <h3 className="font-head text-lg font-bold text-primary mb-2">Default Card</h3>
              <p className="font-body text-xs text-muted">Standard structural surface with subtle 1px border.</p>
            </Card>
            <Card variant="interactive">
              <h3 className="font-head text-lg font-bold text-primary mb-2">Interactive Card</h3>
              <p className="font-body text-xs text-muted">Hovers with border highlight and subtle lift translateY(-4px).</p>
            </Card>
            <Card variant="featured">
              <h3 className="font-head text-lg font-bold text-primary mb-2">Featured Card</h3>
              <p className="font-body text-xs text-muted">Highlighted border accent with prominent shadow.</p>
            </Card>
          </div>
        </section>
      </Container>
    </div>
  );
}
