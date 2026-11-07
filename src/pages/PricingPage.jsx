import { useNavigate } from 'react-router-dom';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import CtaBand from '../components/CtaBand';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <PricingSection onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
      <CtaBand />
    </div>
  );
}
