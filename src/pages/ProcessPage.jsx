import { useNavigate } from 'react-router-dom';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import CtaBand from '../components/CtaBand';

export default function ProcessPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Process onOpenContact={() => navigate('/contact')} />
      <WhyChooseUs onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
      <CtaBand />
    </div>
  );
}
