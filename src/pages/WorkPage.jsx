import { useNavigate } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';
import StackedProjects from '../components/StackedProjects';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

export default function WorkPage() {
  const navigate = useNavigate();

  return (
    <div className="gsap-fade-in flex flex-col gap-10">
      <TerminalHeader label="CASE_STUDIES_AND_PORTFOLIO" />
      <StackedProjects />
      <Portfolio onOpenContact={() => navigate('/contact')} />
      <Testimonials />
    </div>
  );
}
