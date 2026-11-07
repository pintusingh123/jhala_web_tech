import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="SERVICES_AND_CAPABILITIES" />
      <Services onSelectService={() => navigate('/contact')} />
      <TechStack />
      <WhyChooseUs onOpenContact={() => navigate('/contact')} />
      <Process onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
    </div>
  );
}
