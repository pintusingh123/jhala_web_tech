import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Team({ onOpenContact }) {
  const members = [
    {
      name: 'Abhay Prajapati',
      role: 'Software Engineer & MERN Developer',
      tag: 'SENIOR ENGINEER // MERN STACK',
      image: '/images/abhay.png',
      whatsapp: '9509123636',
      phone: null,
      desc: 'Engineering modern and scalable web applications with the MERN stack, focusing on high-performance React interfaces, robust Node.js APIs, and reliable MongoDB architectures. Passionate about building clean, maintainable, and production-ready digital products.',
      skills: [
        'Software Engineering',
        'MERN Stack',
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'REST APIs',
        'MongoDB',
        'Tailwind CSS',
        'Git & GitHub',
      ],
      highlights:
        'Scalable Web Apps • MERN Architecture • REST APIs • Modern UI • Performance Focused',
    },
    {
      name: 'Pintu Jhala',
      role: 'Full Stack Developer & Python Developer',
      tag: 'CORE ENGINEER // FULL-STACK',
      image: '/images/pintu.png',
      whatsapp: '8003642596',
      phone: '8441992003',
      desc: 'Building complete, responsive, and production-ready web applications across the frontend and backend. Experienced with React.js, Python, Django, Flask, Node.js, REST APIs, and relational as well as NoSQL databases, with a strong focus on clean architecture and practical business solutions.',
      skills: [
        'Full-Stack Development',
        'React.js',
        'JavaScript',
        'Python',
        'Django',
        'Flask',
        'Node.js',
        'Express.js',
        'REST APIs',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Tailwind CSS',
        'Git & GitHub',
        'Docker',
      ],
      highlights:
        'Production-Ready Apps • Responsive UI • REST APIs • Database Engineering • Scalable Solutions',
    },
  ];

  const handleWhatsAppRedirect = (member) => {
    const greeting = encodeURIComponent(
      `Hello ${member.name.split(' ')[0]}! I visited JhalaWebTech and I would like to connect with you regarding a software project.`
    );
    window.open(`https://wa.me/91${member.whatsapp}?text=${greeting}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-12" id="team">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#C8FF3D] animate-pulse" />
          <span className="font-mono-code text-xs text-[#C8FF3D] uppercase tracking-widest font-semibold">
            SYS.TEAM // CORE ARCHITECTS & BUILDERS
          </span>
        </div>
        <div className="terminal-divider my-2"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4">
          <div>
            <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] tracking-tight">
              MEET THE <span className="text-[#C8FF3D]">MINDS BEHIND JWT</span>
            </h2>
            <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-2 leading-relaxed">
              We are hands-on engineers, architects, and builders delivering production-grade digital platforms and full-stack solutions. Connect directly via WhatsApp.
            </p>
          </div>
          <div className="font-mono-code text-xs text-[#8E8E8E] shrink-0 border border-[#262626] bg-[#0E0E0E] px-3.5 py-2 rounded-lg self-start md:self-auto">
            <span>TEAM_SIZE: 02 // DEDICATED SQUAD</span>
          </div>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl hover:border-[#C8FF3D] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between group h-full"
          >
            {/* Top Bar inside card */}
            <div className="px-5 py-3.5 border-b border-[#262626] flex items-center justify-between bg-[#181818]/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8FF3D]" />
                <span className="font-mono-code text-xs text-[#C8FF3D] font-bold tracking-wider uppercase">
                  {member.tag}
                </span>
              </div>
              <button
                onClick={() => handleWhatsAppRedirect(member)}
                className="font-mono-code text-[11px] text-[#25D366] hover:text-[#e4e2e1] flex items-center gap-1.5 bg-[#0E1F12] border border-[#25D366]/40 px-2 py-0.5 rounded cursor-pointer transition-colors"
                title={`Chat with ${member.name.split(' ')[0]} on WhatsApp`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>+91 {member.whatsapp}</span>
              </button>
            </div>

            {/* Main Content Area */}
            <div className="p-5 sm:p-7 flex-grow flex flex-col justify-between gap-6">
              {/* Profile Overview (Photo + Identity & Bio) */}
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                {/* Image Frame */}
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 shrink-0 rounded-xl overflow-hidden border border-[#2d2d2d] bg-[#0A0A0A] group-hover:border-[#C8FF3D] transition-colors shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Name, Role & Description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-[#e4e2e1] uppercase tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono-code text-xs sm:text-sm text-[#C8FF3D] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-sans-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-3">
                    {member.desc}
                  </p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="text-left">
                <span className="font-mono-code text-[10px] text-[#6B7280] uppercase tracking-wider block mb-2">
                  CORE EXPERTISE & TECH STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-[#1E1E1E] border border-[#2d2d2d] text-[#e4e2e1] font-mono-code text-[11px] rounded hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="px-5 py-4 border-t border-[#262626] bg-[#111111] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="font-mono-code text-xs text-[#6B7280] text-center sm:text-left">
                SYS.CONNECT // DIRECT COLLABORATION
              </span>
              <div className="flex items-center gap-2">
                {/* Direct WhatsApp Action Button */}
                <button
                  onClick={() => handleWhatsAppRedirect(member)}
                  aria-label={`Connect with ${member.name} on WhatsApp at ${member.whatsapp}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C8FF3D] text-[#0A0A0A] font-space text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#bef532] transition-colors active:scale-95 cursor-pointer shadow-md"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>CONNECT WITH {member.name.split(' ')[0].toUpperCase()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
