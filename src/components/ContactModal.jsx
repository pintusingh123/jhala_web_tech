import React, { useState } from 'react';
import { X, Send, Terminal, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: selectedService?.title || 'Web Development',
    budget: '$5k - $10k',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Development',
      budget: '$5k - $10k',
      details: '',
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#0A0A0A] brutalist-border-active w-full max-w-2xl shadow-[12px_12px_0px_0px_#C8FF3D] relative overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="bg-[#1A1A1A] border-b border-[#262626] px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#C8FF3D]">
            <Terminal className="w-4 h-4" aria-hidden="true" />
            <span>SYS.CONNECT // PROJECT_INQUIRY.EXE</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Contact Modal"
            className="text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer p-1"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 id="modal-title" className="font-space text-2xl font-bold uppercase text-[#e4e2e1]">
                  INITIALIZE PROJECT INQUIRY
                </h3>
                <p className="font-sans-body text-xs text-[#9CA3AF] mt-1">
                  Fill out the parameters below to connect directly with the JhalaLabs engineering team.
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-name" className="font-mono-code text-xs text-[#C8FF3D] uppercase">
                    INPUT: NAME *
                  </label>
                  <input
                    id="client-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#131313] brutalist-border p-3 font-sans-body text-sm text-[#e4e2e1] focus:border-[#C8FF3D] outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-email" className="font-mono-code text-xs text-[#C8FF3D] uppercase">
                    INPUT: EMAIL *
                  </label>
                  <input
                    id="client-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#131313] brutalist-border p-3 font-sans-body text-sm text-[#e4e2e1] focus:border-[#C8FF3D] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-project-type" className="font-mono-code text-xs text-[#C8FF3D] uppercase">
                    PROJECT TYPE
                  </label>
                  <select
                    id="client-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="bg-[#131313] brutalist-border p-3 font-sans-body text-sm text-[#e4e2e1] focus:border-[#C8FF3D] outline-none transition-colors"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="client-budget" className="font-mono-code text-xs text-[#C8FF3D] uppercase">
                    ESTIMATED BUDGET
                  </label>
                  <select
                    id="client-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-[#131313] brutalist-border p-3 font-sans-body text-sm text-[#e4e2e1] focus:border-[#C8FF3D] outline-none transition-colors"
                  >
                    <option value="< $5k">&lt; $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k+">$25k+</option>
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="client-details" className="font-mono-code text-xs text-[#C8FF3D] uppercase">
                  PROJECT SPECIFICATIONS / DETAILS *
                </label>
                <textarea
                  id="client-details"
                  name="details"
                  required
                  rows={4}
                  placeholder="Describe your target goals, technical requirements, or deadlines..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="bg-[#131313] brutalist-border p-3 font-sans-body text-sm text-[#e4e2e1] focus:border-[#C8FF3D] outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                aria-label="Submit Project Inquiry"
                className="bg-[#C8FF3D] text-[#0A0A0A] font-space text-sm font-bold uppercase py-4 px-6 hover:bg-[#bef532] transition-colors brutalist-border-active flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0px_0px_#262626] active:scale-95 disabled:opacity-50"
              >
                {loading ? (
                  <span className="font-mono-code text-xs animate-pulse">
                    TRANSMITTING DATA TO JHALALABS...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>EXECUTE TRANSMISSION</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <div className="w-16 h-16 bg-[#1A1A1A] brutalist-border-active flex items-center justify-center text-[#C8FF3D] shadow-[4px_4px_0px_0px_#C8FF3D]">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>

              <h3 className="font-space text-3xl font-extrabold uppercase text-[#e4e2e1]">
                TRANSMISSION SUCCESSFUL
              </h3>

              <div className="bg-[#131313] brutalist-border p-4 w-full text-left font-mono-code text-xs text-[#9CA3AF] space-y-1.5">
                <p className="text-[#C8FF3D]">&gt; STATUS: 200 OK</p>
                <p>&gt; RECIPIENT: JhalaLabs Engineering Team</p>
                <p>&gt; CLIENT: {formData.name} ({formData.email})</p>
                <p>&gt; SERVICE: {formData.projectType}</p>
                <p>&gt; TIMESTAMP: {new Date().toISOString()}</p>
              </div>

              <p className="font-sans-body text-sm text-[#9CA3AF] max-w-md">
                Thank you for connecting with JhalaLabs. An engineer will review your specifications and reply within 24 hours.
              </p>

              <button
                onClick={handleReset}
                aria-label="Close Terminal and return"
                className="mt-4 bg-[#C8FF3D] text-[#0A0A0A] font-space text-xs font-bold uppercase py-2.5 px-6 hover:bg-[#bef532] transition-colors cursor-pointer"
              >
                CLOSE TERMINAL
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
