import { useNavigate } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';

export default function WorkPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Portfolio onOpenContact={() => navigate('/contact')} />
      <Testimonials />
      <CtaBand />
    </div>
  );
}
