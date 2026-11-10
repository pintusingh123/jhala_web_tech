import Marquee from './ui/Marquee';
import Container from './ui/Container';

export default function TechMarquee() {
  const techLogos = [
    { name: 'PhonePe & Google Pay UPI' },
    { name: 'WhatsApp Business API' },
    { name: 'Google Search (SEO Ready)' },
    { name: 'Google Play Store' },
    { name: 'Apple App Store' },
    { name: 'React Native (iOS & Android)' },
    { name: 'Next.js (Instant Loading)' },
    { name: 'Razorpay Payment Gateway' },
    { name: 'Node.js & Express' },
    { name: 'Secure Cloud Database' },
    { name: 'Tailwind CSS' },
    { name: 'AWS Cloud Hosting' },
  ];

  return (
    <div className="w-full py-4 sm:py-5 border-y border-subtle bg-surface/50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted shrink-0">
            TRUSTED &amp; SECURE TECH
          </span>
          <div className="w-full overflow-hidden">
            <Marquee items={techLogos} speed="40s" pauseOnHover={true} />
          </div>
        </div>
      </Container>
    </div>
  );
}
