import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, ArrowUpRight, Clock, Tag, X, Terminal } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (selectedArticle) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [selectedArticle]);

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

#### 3. State Management & Checkpointing
State persistence across intermittent failures is maintained via SQLite / PostgreSQL checkpoints, enabling zero-loss transaction recovery.
      `,
      tags: ['LangGraph', 'Python', 'FastAPI', 'VectorDB', 'OpenAI'],
    },
    {
      id: 'sub-8ms-react-terminals',
      title: 'Sub-8ms Render Loops: Building Ultra-Low Latency React Terminals',
      category: 'HIGH-PERFORMANCE FRONTEND',
      readTime: '8 min read',
      date: 'JUL 2026',
      summary: 'How we engineered high-frequency financial dashboards streaming 50,000 WebSocket events/sec without triggering React fiber re-render bottlenecks.',
      content: `
### Conquering React 19 Fiber Render Cycles
Financial trading terminals demand sub-frame rendering latencies. At 60 FPS, a frame budget is 16.6ms. At 120 FPS, it drops to 8.3ms. Here is how we achieved continuous sub-8ms throughput:

#### 1. Offloading to Canvas 2D / WebGL
High-frequency order books and depth charts bypass the DOM tree entirely. Direct GPU rendering layers maintain smooth 120fps motion even during massive market volatility.

#### 2. Selective Signal Subscriptions
Rather than triggering component-wide re-renders on every incoming ticker message, we bind WebSocket streams to micro-signals that mutate only the target text nodes directly.

#### 3. Zero-Allocation Binary Buffers
Protocol Buffers and ArrayBuffers replace JSON payloads over WebSockets, eliminating garbage collection pauses during peak volume.
      `,
      tags: ['React 19', 'WebSockets', 'WebGL', 'Performance'],
    },
    {
      id: 'zero-downtime-postgres-migrations',
      title: 'Zero-Downtime Database Architecture for High-Volume E-Commerce',
      category: 'DATABASE & INFRASTRUCTURE',
      readTime: '5 min read',
      date: 'JUN 2026',
      summary: 'Lessons learned scaling PostgreSQL clusters handling 100,000+ peak daily transactions with zero customer-facing locking.',
      content: `
### The Expand/Contract Migration Pattern
Migrating relational schemas in production without maintenance windows requires disciplined two-phase rollout strategies:

#### 1. Expand Phase
Add new columns as nullable, replicate writes to both old and new schema structures in application code, and backfill historical data in chunked background worker tasks.

#### 2. Contract Phase
Once 100% of read and write paths target the new schema, remove deprecations and drop old columns without blocking the active table.

#### 3. Resilient Read Replicas & Connection Pooling
- **PgBouncer Connection Pooling:** Keeps thread contention minimal across hundreds of serverless container instances.
- **Redis Write-Back Cache:** Asynchronously syncs non-critical ledger state to prevent lock contention.
- **Automated Blue-Green Deployments:** Zero connection drops during database schema migrations.
      `,
      tags: ['PostgreSQL', 'Redis', 'Kafka', 'DevOps'],
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Header */}
      <SectionHeader
        tag="SYS.INSIGHTS // TECHNICAL_DISPATCHES"
        title="ENGINEERING"
        highlightedTitle="ARTICLES & RESEARCH"
        description="In-depth technical architecture breakdowns, performance post-mortems, and AI engineering dispatches from the JhalaWebTech engineering collective."
      />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <article
            key={art.id}
            className="bg-[#1A1A1A] p-6 card-high-emphasis flex flex-col justify-between group transition-[box-shadow,border-color] duration-300 shadow-[4px_4px_0px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_0px_#C8FF3D]"
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
                {art.tags.map((t) => (
                  <span
                    key={t}
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
              className="w-full bg-[#0A0A0A] border border-[#262626] text-[#e4e2e1] font-space text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 group-hover:bg-[#C8FF3D] group-hover:text-[#0A0A0A] group-hover:font-bold transition-colors duration-200 cursor-pointer"
            >
              <span>READ DISPATCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <dialog 
          ref={dialogRef}
          onClose={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 m-auto p-4 bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-sm max-w-3xl w-full"
          aria-labelledby="article-modal-title"
        >
          <div className="bg-[#0A0A0A] brutalist-border-active w-full max-h-[85vh] overflow-y-auto shadow-[12px_12px_0px_0px_#C8FF3D] relative p-6 md:p-8">
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
                className="bg-[#C8FF3D] text-[#0A0A0A] font-space text-xs font-bold uppercase py-2 px-5 hover:bg-[#bef532] cursor-pointer transition-colors duration-200"
              >
                CLOSE DISPATCH
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
