import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Clock, Tag, X, Sparkles, Terminal } from 'lucide-react';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 'ai-agents-2026',
      title: 'Architecting Multi-Agent Reasoning Pipelines in Production',
      category: 'AI & LLMS',
      readTime: '6 min read',
      date: 'AUG 2026',
      summary: 'A deep dive into deterministic JSON schema extraction, vector memory caching, and tool-calling orchestrations with LangGraph and Python.',
      content: `
### The Shift to Autonomous Multi-Agent Workflows
Traditional single-prompt LLM architectures are inherently brittle for complex, multi-stage enterprise operations. In this technical deep dive, we explore the architectural design behind JhalaWebTech's production multi-agent framework.

#### 1. Deterministic JSON Schemas
To guarantee zero hallucination in critical transactions, all agent outputs are routed through Pydantic strict schemas with automated retry loops:
- **Type Checking:** Strict field typing with enum validation.
- **Fail-Safe Fallbacks:** Secondary validator agent triggers if parsing fails twice.

#### 2. Vector Memory Caching
By deploying local Redis vector indices alongside hybrid cosine similarity searches, agent response latency is reduced by **78%** on repeated domain queries.
      `,
      tags: ['LangGraph', 'Python', 'Vector DB', 'Multi-Agent'],
    },
    {
      id: 'react-19-sub10ms',
      title: 'Sub-10ms UI Framework: Optimizing React 19 & Tailwind v4 at the Edge',
      category: 'WEB ARCHITECTURE',
      readTime: '5 min read',
      date: 'JUL 2026',
      summary: 'How we eliminated client hydration lag and achieved 100/100 Lighthouse performance using edge streaming, Server Components, and zero-runtime CSS.',
      content: `
### Engineering for Sub-Millisecond Render Loops
When building high-concurrency trading dashboards or luxury headless commerce, every millisecond of layout shift directly degrades conversion metrics.

#### Core Optimization Pillars:
1. **Edge Streaming:** HTML chunks are streamed from Cloudflare edge nodes directly to the browser before full JS evaluation.
2. **Tailwind v4 Engine:** Pre-compiled CSS tokens that eliminate runtime style recalculation.
3. **Selective Hydration:** Only interactive UI islands are hydrated on user interaction.
      `,
      tags: ['React 19', 'Tailwind v4', 'Edge CDN', 'Vite'],
    },
    {
      id: 'distributed-microservices',
      title: 'Zero-Downtime Migration: Scaling PostgreSQL & Redis for 100k Concurrent Users',
      category: 'SYSTEMS & DEVOPS',
      readTime: '8 min read',
      date: 'JUN 2026',
      summary: 'Practical lessons from scaling a distributed fintech payment engine through read-replica sharding, connection pooling, and automated failover gates.',
      content: `
### High-Throughput Database Clustering
Scaling transactional workloads requires strict isolation between analytical queries and high-frequency writes.

#### Key Takeaways:
- **Connection Pooling with PgBouncer:** Reduced server memory pressure by 60%.
- **Redis Write-Back Cache:** Asynchronously syncs non-critical ledger state to prevent lock contention.
- **Automated Blue-Green Deployments:** Zero connection drops during database schema migrations.
      `,
      tags: ['PostgreSQL', 'Redis', 'Kafka', 'DevOps'],
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Header */}
      <div className="mb-8">
        <span className="font-space text-xs uppercase text-[#9CA3AF] tracking-widest block mb-1">
          SYS.INSIGHTS // TECHNICAL_DISPATCHES
        </span>
        <div className="terminal-divider my-2"></div>
        <h2 className="font-space text-3xl sm:text-5xl font-extrabold uppercase text-[#e4e2e1] mt-4">
          ENGINEERING <span className="text-[#C8FF3D]">ARTICLES & RESEARCH</span>
        </h2>
        <p className="font-sans-body text-base text-[#9CA3AF] max-w-2xl mt-2 leading-relaxed">
          In-depth technical architecture breakdowns, performance post-mortems, and AI engineering dispatches from the JhalaWebTech engineering collective.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <article
            key={art.id}
            className="bg-[#1A1A1A] p-6 card-high-emphasis flex flex-col justify-between group transition-all duration-300 shadow-[4px_4px_0px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_0px_#C8FF3D]"
          >
            <div>
              {/* Meta Row */}
              <div className="flex justify-between items-center pb-3 border-b border-[#262626] mb-4 text-xs font-mono-code">
                <span className="text-[#C8FF3D] font-bold">{art.category}</span>
                <span className="text-[#9CA3AF] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {art.readTime}
                </span>
              </div>

              <h3 className="font-space text-xl font-bold text-[#e4e2e1] group-hover:text-[#C8FF3D] transition-colors mb-3 leading-snug">
                {art.title}
              </h3>

              <p className="font-sans-body text-sm text-[#9CA3AF] leading-relaxed mb-6">
                {art.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {art.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono-code text-[#9CA3AF] bg-[#0A0A0A] border border-[#262626] px-2 py-0.5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Button */}
            <button
              onClick={() => setSelectedArticle(art)}
              aria-label={`Read article: ${art.title}`}
              className="w-full bg-[#0A0A0A] border border-[#262626] text-[#e4e2e1] font-space text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 group-hover:bg-[#C8FF3D] group-hover:text-[#0A0A0A] group-hover:font-bold transition-all cursor-pointer"
            >
              <span>READ DISPATCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div className="bg-[#0A0A0A] brutalist-border-active w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-[12px_12px_0px_0px_#C8FF3D] relative p-6 md:p-8">
            <div className="flex justify-between items-start pb-4 border-b border-[#262626] mb-6">
              <div>
                <span className="text-xs font-mono-code text-[#C8FF3D] uppercase font-bold block mb-1">
                  JWT.RESEARCH // {selectedArticle.category} • {selectedArticle.date}
                </span>
                <h2 id="article-modal-title" className="font-space text-2xl md:text-3xl font-bold uppercase text-[#e4e2e1]">
                  {selectedArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article modal"
                className="p-2 text-[#9CA3AF] hover:text-[#C8FF3D] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="prose prose-invert max-w-none text-[#e4e2e1] font-sans-body leading-relaxed space-y-4 text-sm md:text-base">
              <div className="p-4 bg-[#131313] brutalist-border font-mono-code text-xs text-[#9CA3AF] mb-6">
                DISPATCH_STATUS: PUBLISHED // AUTHOR: JHALAWEBTECH CORE LABS
              </div>
              <div className="whitespace-pre-line">
                {selectedArticle.content}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#262626] flex justify-between items-center">
              <span className="font-mono-code text-xs text-[#9CA3AF]">
                SHARE: @JhalaWebTech
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#C8FF3D] text-[#0A0A0A] font-space text-xs font-bold uppercase py-2 px-5 hover:bg-[#bef532] cursor-pointer"
              >
                CLOSE DISPATCH
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
