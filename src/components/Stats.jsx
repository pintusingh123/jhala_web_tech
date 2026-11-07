import Container from './ui/Container';
import { company } from '../content/company';

export default function Stats() {
  return (
    <div className="w-full py-10 sm:py-14 border-t border-subtle bg-surface/40">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {company.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-head text-xl font-bold text-[#FF6B2C]">
                    {stat.unit}
                  </span>
                )}
              </div>

              <span className="font-head text-xs sm:text-sm font-bold text-primary mt-1">
                {stat.label}
              </span>

              <span className="font-mono text-[11px] text-muted mt-0.5">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
