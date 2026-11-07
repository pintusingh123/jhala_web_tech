'use client';

import { useState, useRef, useEffect } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

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
      id: 'react-native-performance',
      title: 'Achieving True 60fps Native Performance with React Native in 2026',
      category: 'MOBILE ENGINEERING',
      readTime: '6 min read',
      date: 'OCT 2026',
      summary: 'How to bypass JavaScript bridge overhead with the New Architecture (TurboModules & Fabric), optimize list rendering, and prevent memory leaks.',
      content: `
### Why React Native Apps Lag (And How to Fix It)
Many businesses believe cross-platform mobile apps are inherently slower than Swift or Kotlin. That is almost always due to improper architecture, unmemoized render trees, and heavy JSON serialization over the bridge.

#### 1. Leveraging the New Architecture (Fabric & TurboModules)
By transitioning to React Native's C++ core, UI components communicate directly with host platform APIs without asynchronous bridge serialization. Touch gestures respond in under 8ms.

#### 2. Virtualized List Tuning
Using FlashList or optimized FlatLists with exact item heights prevents layout reflows during high-speed vertical scrolling.

#### 3. Image Memory Caching
Pre-caching remote assets with FastImage avoids garbage collection stutters on budget Android smartphones.
      `,
      tags: ['React Native', 'Mobile Performance', 'Fabric', 'iOS', 'Android'],
    },
    {
      id: 'nextjs-sub-second',
      title: 'Sub-800ms Page Loads: Building Headless E-Commerce with Next.js 15',
      category: 'HIGH-PERFORMANCE WEB',
      readTime: '8 min read',
      date: 'SEP 2026',
      summary: 'How we engineered high-converting web storefronts that hit 99/100 on Google Lighthouse Mobile using edge caching and partial prerendering.',
      content: `
### The 100ms Revenue Rule
Google data proves that every 100ms delay in mobile storefront loading drops conversion rates by 7%. Here is how we build web stores that open instantaneously:

#### 1. Edge Static Prerendering
Product detail pages and catalog grids are statically rendered at the edge. Visitors receive complete HTML within 150ms from nearby CDN nodes.

#### 2. Client-Side Island Hydration
Interactive elements like shopping carts and size selectors hydrate independently, leaving the main thread free for smooth user scrolling.

#### 3. Zero-JavaScript Static Fallbacks
Essential text, pricing, and images render before any JavaScript bundle executes, ensuring instant search engine indexing.
      `,
      tags: ['Next.js 15', 'Core Web Vitals', 'Edge Cache', 'Lighthouse 99'],
    },
    {
      id: 'django-nodejs-microservices',
      title: 'Node.js vs Django: Selecting the Right Backend Stack for Your Business',
      category: 'BACKEND ARCHITECTURE',
      readTime: '7 min read',
      date: 'AUG 2026',
      summary: 'A direct architectural comparison between Node.js event loops and Django ORM batteries for scaling enterprise platforms.',
      content: `
### Matching Backend Stacks to Real Requirements
Rather than picking tech based on trends, we evaluate your application's data structure, concurrency needs, and administrative requirements:

#### When We Choose Django (Python):
- Complex relational data with financial/inventory transactions requiring strict ACID guarantees.
- Built-in administrative backoffice portals needed immediately without custom dashboard engineering.
- Deep integration with Python automation scripts and data analysis workflows.

#### When We Choose Node.js (Express):
- High-concurrency I/O workloads like live chat, real-time vehicle dispatch, and WebSocket streaming.
- Microservices requiring sub-5ms API response latency and unified TypeScript contracts across client and server.
      `,
      tags: ['Node.js', 'Django', 'PostgreSQL', 'APIs', 'Architecture'],
    },
  ];

  return (
    <Section
      id="blog"
      eyebrow="ENGINEERING INSIGHTS &amp; LABS"
      title="Technical lessons from shipping"
      highlightWord="production code."
      subtitle="In-depth architectural breakdowns, performance case studies, and engineering guidelines written directly by our developers."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {articles.map((art) => (
          <Card
            key={art.id}
            variant="interactive"
            className="flex flex-col justify-between p-6 sm:p-7 bg-surface group"
            as="button"
            type="button"
            onClick={() => setSelectedArticle(art)}
          >
            <div className="text-left w-full">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-subtle">
                <Badge variant="accent" size="sm">
                  {art.category}
                </Badge>
                <div className="flex items-center gap-1 font-mono text-[11px] text-muted">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B2C]" />
                  <span>{art.readTime}</span>
                </div>
              </div>

              <h3 className="font-head text-lg sm:text-xl font-bold text-primary group-hover:text-[#FF6B2C] transition-colors leading-snug mb-3">
                {art.title}
              </h3>

              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6">
                {art.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-subtle flex items-center justify-between w-full font-head text-xs sm:text-sm font-bold text-[#FF6B2C] group-hover:text-[#FF8452]">
              <span>Read Full Breakdown</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>
        ))}
      </div>

      {/* Article Modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby="article-modal-title"
        onClose={() => setSelectedArticle(null)}
        className="backdrop:bg-black/60 p-0 rounded-2xl border border-subtle shadow-2xl max-w-2xl w-[92vw] max-h-[88vh] overflow-hidden bg-surface text-primary"
      >
        {selectedArticle && (
          <div className="flex flex-col h-full max-h-[88vh]">
            <div className="flex justify-between items-start p-6 border-b border-subtle bg-surface-2">
              <div>
                <Badge variant="accent" size="sm">
                  {selectedArticle.category}
                </Badge>
                <h3 id="article-modal-title" className="font-head text-xl font-bold text-primary mt-2">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-3 font-mono text-xs text-muted mt-1">
                  <span>{selectedArticle.date}</span>
                  <span>&bull;</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close Article"
                className="p-1.5 rounded-lg border border-subtle text-muted hover:text-primary transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 font-body text-sm text-primary leading-relaxed">
              <div className="whitespace-pre-line text-muted">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-subtle flex flex-wrap gap-1.5">
                {selectedArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded bg-surface-2 border border-subtle font-mono text-xs text-primary"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
