import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

export default function ProcessPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="DEVELOPMENT_METHODOLOGY" />
      <Process onOpenContact={() => navigate('/contact')} />
      <WhyChooseUs onOpenContact={() => navigate('/contact')} />
      <FAQ onOpenContact={() => navigate('/contact')} />
    </div>
  );
}
