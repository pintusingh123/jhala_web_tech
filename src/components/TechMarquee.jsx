import Marquee from './ui/Marquee';
import Container from './ui/Container';

export default function TechMarquee() {
  const techLogos = [
    { name: 'React Native (iOS & Android)' },
    { name: 'Next.js 15' },
    { name: 'React.js SPAs' },
    { name: 'Node.js & Express' },
    { name: 'Django (Python)' },
    { name: 'Firebase' },
    { name: 'PostgreSQL' },
    { name: 'Tailwind CSS' },
    { name: 'TypeScript' },
    { name: 'Razorpay UPI' },
    { name: 'WhatsApp Cloud API' },
    { name: 'AWS Cloud' },
    { name: 'Vercel Edge' },
  ];

  return (
    <div className="w-full py-6 sm:py-8 border-y border-subtle bg-surface/50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted shrink-0">
            ENGINEERED WITH
          </span>
          <div className="w-full overflow-hidden">
            <Marquee items={techLogos} speed="40s" pauseOnHover={true} />
          </div>
        </div>
      </Container>
    </div>
  );
}
