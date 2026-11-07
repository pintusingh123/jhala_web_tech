import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="ABOUT_JHALAWEBTECH" />
      <About onOpenContact={() => navigate('/contact')} />
      <WhyChooseUs onOpenContact={() => navigate('/contact')} />
      <Team onOpenContact={() => navigate('/contact')} />
      <Testimonials />
    </div>
  );
}
