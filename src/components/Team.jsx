import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import SectionHeader from './SectionHeader';

export default function Team() {
  const members = [
    {
      name: 'Abhay Prajapati',
      role: 'Lead Full-Stack Engineer & MERN Specialist',
      tag: 'SENIOR ENGINEER // MERN STACK',
      image: '/images/abhay.png',
      whatsapp: '9509123636',
      phone: null,
      desc: 'Specializes in high-velocity full-stack engineering with the MERN stack. Expert in building responsive React 19 interfaces, secure Node.js APIs, and scalable MongoDB architectures with a passion for clean UI and rapid performance.',
      skills: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'JavaScript',
        'Tailwind CSS',
        'Git & CI/CD',
      ],
    },
    {
      name: 'Pintu Jhala',
      role: 'Principal Software Architect & Full-Stack Engineer',
      tag: 'LEAD ARCHITECT // FULL-STACK & PYTHON',
      image: '/images/pintu.png',
      whatsapp: '8003642596',
      phone: '8441992003',
      desc: 'Architects end-to-end cloud platforms, microservices, and bespoke software solutions. Expert in Python, Django, FastAPI, React.js, PostgreSQL, and system security with an emphasis on production resilience and business ROI.',
      skills: [
        'Full-Stack Architecture',
        'Python & Django',
        'FastAPI',
        'React.js',
        'PostgreSQL',
        'REST & GraphQL',
        'Docker',
        'Database Optimization',
      ],
    },
  ];

  const handleWhatsAppRedirect = (member) => {
    const greeting = encodeURIComponent(
      `Hello ${member.name.split(' ')[0]}! I visited JhalaWebTech and I would like to connect with you regarding a software/app project.`
    );
    window.open(`https://wa.me/91${member.whatsapp}?text=${greeting}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-8 sm:py-12" id="team">
      <SectionHeader
        tag="SENIOR ENGINEERING TEAM"
        title="Meet the Engineers"
        highlightedTitle="Behind Your Product"
        description="We believe in radical engineering transparency. You communicate directly with the senior full-stack architects designing and building your product."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded border border-[#E5E5E5] p-6 sm:p-8 shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Top Profile Header */}
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded object-cover border-2 border-[#E5E5E5] shadow-xs shrink-0 group-hover:border-[#FDB345] transition-colors"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <div>
                  <span className="font-narrow text-[11px] font-bold tracking-wider uppercase text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30 inline-block mb-1.5">
                    {member.tag}
                  </span>
                  <h3 className="font-slab text-xl sm:text-2xl font-bold text-[#333333] group-hover:text-[#FDB345] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#575C62]">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio Description */}
              <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-5">
                {member.desc}
              </p>

              {/* Skills Tags */}
              <div className="mb-6">
                <span className="font-narrow text-[11px] font-bold text-[#575C62] uppercase tracking-wider block mb-2">
                  Technical Core
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-[#F5F5F7] border border-[#DADBDD] text-[#333333] font-narrow text-xs font-bold uppercase rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-5 border-t border-[#E5E5E5] flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => handleWhatsAppRedirect(member)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 font-narrow text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </button>

              {member.phone && (
                <a
                  href={`tel:+91${member.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#F5F5F7] hover:bg-[#FFF8EE] text-[#333333] hover:text-[#F69B2E] border border-[#E5E5E5] font-narrow text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FDB345]" />
                  <span>Call Direct</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
