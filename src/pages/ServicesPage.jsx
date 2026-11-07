import { useNavigate } from 'react-router-dom';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CtaBand from '../components/CtaBand';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Services onSelectService={() => navigate('/contact')} />
      <TechStack />
      <WhyChooseUs onOpenContact={() => navigate('/contact')} />
      <Process onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
      <CtaBand />
    </div>
  );
}
