import Blog from '../../components/Blog';
import CtaBand from '../../components/CtaBand';

export const metadata = {
  title: 'Engineering Blog & Architectural Insights',
  description:
    'Deep dives on React Native performance, Next.js architecture, scalable backends, and digital product execution from the JhalaWebTech engineering collective.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <Blog />
      <CtaBand />
    </div>
  );
}
