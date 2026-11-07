import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import Card from '../components/ui/Card';
import { company } from '../content/company';

export default function PrivacyPage() {
  return (
    <div className="w-full py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Eyebrow>LEGAL &amp; COMPLIANCE</Eyebrow>
        <h1 className="font-head text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-muted mb-8">
          Last updated: November 2026 &bull; {company.legalName}
        </p>

        <Card className="p-6 sm:p-8 bg-surface space-y-6 font-body text-sm text-muted leading-relaxed">
          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit a contact inquiry on JhalaWebTech, we collect your name, email address, phone/WhatsApp number, and project requirements. We use this information solely to communicate regarding your development project and deliver technical estimates.
            </p>
          </div>

          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              2. Source Code &amp; Data Ownership
            </h2>
            <p>
              We treat all client project materials, technical specifications, and proprietary data with strict confidentiality. Non-Disclosure Agreements (NDAs) are signed before project discovery upon request. We never sell or share client data with third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              3. Cookies &amp; Local Storage
            </h2>
            <p>
              We use browser localStorage solely to store your preferred color theme (Dark or Light mode). We do not use third-party tracking pixels or invasive ad trackers.
            </p>
          </div>

          <div>
            <h2 className="font-head text-lg font-bold text-primary mb-2">
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions about how your project data is handled, please reach out to us at{' '}
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
