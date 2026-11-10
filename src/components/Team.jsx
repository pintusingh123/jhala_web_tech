'use client';

import { Phone } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import WhatsAppIcon from './WhatsAppIcon';

export default function Team() {
  const members = [
    {
      name: 'Abhay Prajapati',
      role: 'Lead Web Developer & React Specialist',
      tag: 'LEAD WEB DEVELOPER',
      image: '/images/abhay.png',
      whatsapp: '9509123636',
      phone: null,
      desc: 'Expert in building super-fast websites, dynamic online stores, and clean user interfaces. Specializes in Next.js, React, Node.js, and creating mobile-responsive designs that convert visitors into paying customers.',
      skills: [
        'React.js',
        'Next.js 15',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'JavaScript',
        'Tailwind CSS',
      ],
    },
    {
      name: 'Pintu Jhala',
      role: 'Lead Mobile App Developer & Architect',
      tag: 'LEAD APP DEVELOPER',
      image: '/images/pintu.png',
      whatsapp: '8003642596',
      phone: '8441992003',
      desc: 'Specializes in custom mobile applications for Android & iPhone (React Native), instant UPI payment integrations, cloud databases, and custom business management software (CRM) designed to automate daily operations.',
      skills: [
        'React Native (iOS & Android)',
        'Full-Stack Architecture',
        'Python & Django',
        'Node.js',
        'Firebase',
        'PostgreSQL',
        'Custom CRM & CMS',
        'Docker',
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
    <Section
      id="team"
      eyebrow="OUR CORE TEAM"
      title="Meet the developers behind"
      highlightWord="your project."
      subtitle="Direct developer communication. You talk directly with the developers building your website and mobile app — no account managers or sales runaround."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {members.map((member) => (
          <Card
            key={member.name}
            className="p-4 sm:p-8 bg-surface flex flex-col justify-between"
          >
            <div>
              {/* Profile Header */}
              <div className="flex items-start gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl object-cover border-2 border-subtle shadow-xs shrink-0"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <div>
                  <Badge variant="accent" size="sm" className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
                    {member.tag}
                  </Badge>
                  <h3 className="font-head text-lg sm:text-2xl font-bold text-primary leading-snug">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-5 sm:mb-6">
                {member.desc}
              </p>

              {/* Skills Tags */}
              <div className="mb-5 sm:mb-6">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">
                  Technical Core
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-surface-2 border border-subtle text-primary font-mono text-[10px] sm:text-xs rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-4 sm:pt-5 border-t border-subtle flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
              <button
                type="button"
                onClick={() => handleWhatsAppRedirect(member)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 font-mono text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              {member.phone && (
                <a
                  href={`tel:+91${member.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-surface-2 hover:bg-surface text-primary border border-subtle font-mono text-xs font-bold uppercase rounded-lg transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6B2C]" />
                  <span>Call Now</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
