import Section from './ui/Section';
import Accordion from './ui/Accordion';
import Button from './ui/Button';
import { faqs } from '../content/faq';

export default function FAQ({ onOpenContact }) {
  return (
    <Section
      id="faq"
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      title="Common questions about pricing, timeline &"
      highlightWord="process."
      subtitle="Everything you need to know before hiring JhalaWebTech. If your question is not listed here, message us directly."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Inquiries */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="p-6 sm:p-7 rounded-2xl border border-subtle bg-surface">
            <h3 className="font-head text-xl font-bold text-primary mb-2">
              Have a specific question?
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6">
              Our lead engineers reply directly on WhatsApp and email. No sales gatekeepers.
            </p>

            <Button
              variant="primary"
              size="md"
              to="/contact"
              onClick={onOpenContact}
              className="w-full text-center"
            >
              Ask a Developer
            </Button>
          </div>
        </div>

        {/* Right Column: 8 Accordion Questions */}
        <div className="lg:col-span-8">
          <Accordion items={faqs} allowMultiple={false} />
        </div>
      </div>
    </Section>
  );
}
