import { Star, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { testimonials } from '../content/testimonials';

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="CLIENT PROOF &amp; REVIEWS"
      title="What founders say about shipping"
      highlightWord="with us."
      subtitle="Genuine feedback from business owners and operational heads who rely on JhalaWebTech to engineer their production platforms."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {testimonials.map((t) => (
          <Card
            key={t.author}
            variant="default"
            className="flex flex-col justify-between p-6 sm:p-7 bg-surface hover:border-subtle/80"
          >
            <div>
              {/* Top Meta: Stars & Metric Pill */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-subtle">
                <div className="flex gap-0.5 text-[#FF6B2C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Badge variant="accent" size="sm">
                  {t.metric}
                </Badge>
              </div>

              {/* Quote Body */}
              <p className="font-body text-xs sm:text-sm text-primary leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-subtle flex items-center justify-between">
              <div>
                <h4 className="font-head text-sm sm:text-base font-bold text-primary">
                  {t.author}
                </h4>
                <p className="font-mono text-xs text-muted">
                  {t.role}, {t.company}
                </p>
              </div>

              <div className="flex items-center gap-1 font-mono text-[10px] text-[#3DD9B0]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
