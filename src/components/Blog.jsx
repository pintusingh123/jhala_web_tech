import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Clock, X } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TiltCard from './3d/TiltCard';

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
To guarantee zero hallucination in critical transactions, all agent outputs are routed through strict Pydantic schemas with automated retry loops:
- **Type Checking:** Strict field typing with enum validation.
- **Fail-Safe Fallbacks:** Secondary validator agent triggers if parsing fails twice.

#### 2. Vector Memory Caching
By deploying local Redis vector indices alongside hybrid cosine similarity searches, agent response latency is reduced by 78% on repeated domain queries.

#### 3. State Management & Checkpointing
State persistence across intermittent failures is maintained via PostgreSQL checkpoints, enabling zero-loss transaction recovery.
      `,
      tags: ['LangGraph', 'Python', 'FastAPI', 'VectorDB', 'OpenAI'],
    },
    {
      id: 'sub-8ms-react-terminals',
      title: 'Sub-8ms Render Loops: Building Ultra-Low Latency React Web Apps',
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
Protocol Buffers and ArrayBuffers replace bulky JSON payloads over WebSockets, eliminating garbage collection pauses during peak volume.
      `,
      tags: ['React 19', 'WebSockets', 'Canvas2D', 'Buffers', 'Edge'],
    },
    {
      id: 'postgres-scaling-50k',
      title: 'PostgreSQL Concurrency: Scaling Beyond 50,000 Active Connections',
      category: 'SYSTEM ARCHITECTURE',
      readTime: '10 min read',
      date: 'JUN 2026',
      summary: 'Architectural lessons in PgBouncer pool sizing, partition pruning, and WAL write pipeline tuning for high-throughput enterprise platforms.',
      content: `
### Scaling PostgreSQL Under Heavy Workloads
When traffic spikes from thousands of concurrent users, database connection starvation is the primary point of failure. Here is our battle-tested recipe for rock-solid stability:

#### 1. PgBouncer Transaction Pooling
By pooling connections at the transaction level rather than session level, backend microservices handle 50k+ client connections using a dedicated pool of only 120 PostgreSQL server connections.

#### 2. Declarative Table Partitioning
High-frequency audit logs and transaction ledgers are partitioned monthly. Query planner pruning ensures searches touch only relevant tables, slashing query latency by 92%.

#### 3. SSD WAL Tuning
Tuning max_wal_size and checkpoint_completion_target prevents I/O write spikes, maintaining sub-millisecond query execution.
      `,
      tags: ['PostgreSQL', 'PgBouncer', 'Database Tuning', 'Docker', 'AWS'],
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="insights">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5E5E5] gap-4">
        <SectionHeader
          tag="ENGINEERING &amp; ARCHITECTURE BLOG"
          title="Technical Insights from"
          highlightedTitle="Our Labs"
          description="In-depth breakdowns, performance benchmarks, and architectural design patterns written directly by our lead engineers."
        />

        <div className="flex items-center gap-2 p-2 bg-[#F5F5F7] rounded border border-[#E5E5E5] self-start md:self-end">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FDB345] animate-pulse" />
          <span className="font-narrow text-xs uppercase font-bold tracking-wider text-[#333333]">
            Peer-Reviewed Engineering
          </span>
        </div>
      </div>

      {/* Articles Grid with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <TiltCard key={art.id} maxTilt={5} scale={1.01} className="h-full">
            <button
              type="button"
              aria-label={`Read breakdown: ${art.title}`}
              onClick={() => setSelectedArticle(art)}
              className="text-left w-full bg-white rounded border border-[#E5E5E5] p-6 sm:p-7 shadow-xs hover:border-[#FDB345] hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col justify-between h-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FDB345]"
            >
              <div>
                {/* Meta */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-narrow text-[10px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 font-narrow text-xs text-[#575C62] uppercase tracking-wider font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#FDB345]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-slab text-lg sm:text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FDB345] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="font-sans-body text-xs sm:text-sm text-[#575C62] leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between font-narrow text-xs uppercase tracking-wider font-bold text-[#FDB345] group-hover:text-[#F69B2E] w-full">
                <span>Read Full Breakdown</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </TiltCard>
        ))}
      </div>

      {/* Article Modal Dialog */}
      <dialog
        ref={dialogRef}
        aria-labelledby="blog-dialog-title"
        onClose={() => setSelectedArticle(null)}
        className="backdrop:bg-black/50 p-0 rounded border border-[#E5E5E5] shadow-2xl max-w-2xl w-[92vw] max-h-[85vh] overflow-hidden bg-white text-[#333333]"
      >
        {selectedArticle && (
          <div className="flex flex-col h-full max-h-[85vh]">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-[#E5E5E5] bg-[#F5F5F7]">
              <div>
                <span className="font-narrow text-[10px] font-bold uppercase tracking-wider text-[#F69B2E] bg-[#FFF8EE] px-2.5 py-0.5 rounded border border-[#FDB345]/30">
                  {selectedArticle.category}
                </span>
                <h3 id="blog-dialog-title" className="font-slab text-xl font-bold text-[#333333] mt-2 leading-tight">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-3 font-narrow text-xs text-[#575C62] uppercase tracking-wider mt-1 font-bold">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded text-[#575C62] hover:text-[#333333] hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-4 font-sans-body text-sm text-[#333333] leading-relaxed">
              <div className="whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap gap-1.5">
                {selectedArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#F5F5F7] border border-[#DADBDD] text-[#333333] font-narrow text-xs font-bold uppercase rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
