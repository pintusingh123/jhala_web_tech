import Link from 'next/link';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="w-full py-20 sm:py-28 flex items-center justify-center">
      <Container className="max-w-xl text-center">
        <Card className="p-8 sm:p-12 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 flex items-center justify-center text-[#FF6B2C] mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>

          <Eyebrow>ERROR 404 &bull; PAGE NOT FOUND</Eyebrow>

          <h1 className="font-head text-3xl sm:text-4xl font-bold text-primary mb-3">
            Page Not Found
          </h1>

          <p className="font-body text-sm sm:text-base text-muted max-w-md mb-8 leading-relaxed">
            The page you are looking for does not exist, was removed, or has been relocated to another address.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <Button variant="primary" icon={Home}>
                Return to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" icon={ArrowLeft}>
                Contact Support
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
