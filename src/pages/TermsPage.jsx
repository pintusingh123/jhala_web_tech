import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import Card from '../components/ui/Card';
import { company } from '../content/company';

export default function TermsPage() {
  return (
    <div className="w-full py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Eyebrow>LEGAL &amp; COMPLIANCE</Eyebrow>
        <h1 className="font-head text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="font-mono text-xs text-muted mb-8">
          Last updated: November 2026 &bull; {company.legalName}
        </p>

        <Card className="p-6 sm:p-8 bg-surface space-y-6 font-body text-sm text-muted leading-relaxed">
          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              1. Project Engagement &amp; Milestones
            </h2>
            <p>
              All software and web development services provided by JhalaWebTech are executed based on a signed proposal outlining technical scope, milestones, deliverables, and fixed payment schedules. Work begins upon milestone agreement and initial deposit.
            </p>
          </div>

          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              2. Intellectual Property &amp; Code Transfer
            </h2>
            <p>
              Upon receipt of final milestone payment, 100% of all intellectual property, git repositories, design files, database architectures, and associated assets are completely transferred to the client. No ongoing licensing royalties are charged.
            </p>
          </div>

          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              3. Post-Launch Warranty
            </h2>
            <p>
              Every production delivery includes 30 days of complimentary technical warranty support covering bug fixes and server adjustments aligned with the original project scope.
            </p>
          </div>

          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              4. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Rajasthan, India. For inquiries regarding contracts and SLA terms, contact us at{' '}
              <a href={`mailto:${company.email}`} className="text-[#FF6B2C] hover:underline">
                {company.email}
              </a>.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
