---
name: "Weekly Meal Planner"
type: "WEB_APP"
monthStarted: "2026-01"
monthEnded: "2026-04"
link: "https://weeklymealplanner.achmadk.com"
screenshots:
  - /images/portfolios/weekly-meal-planner.png
  - /images/portfolios/weekly-meal-planner.webp
  - /images/portfolios/weekly-meal-planner.avif
---

<h1>Weekly Meal Planner - Documentation Summary</h1>

<p>A comprehensive documentation suite covering the <strong>Weekly Meal Planner</strong> application - an AI-powered web app for planning weekly meals with breakfast, lunch, and dinner options.</p>
<hr>
<h2 id="documentation-overview">Documentation Overview</h2>
<table>
<thead>
<tr>
<th>Document</th>
<th>Purpose</th>
<th>Key Content</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>USE_CASES.md</strong></td>
<td>Functional requirements</td>
<td>User flows, interactions, system behaviors</td>
</tr>
<tr>
<td><strong>PROBLEMS.md</strong></td>
<td>Problem domain analysis</td>
<td>Challenges solved by the application</td>
</tr>
<tr>
<td><strong>SOLUTIONS.md</strong></td>
<td>Technical documentation</td>
<td>Architecture decisions and implementation details</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="quick-reference">Quick Reference</h2>
<h3 id="application-core-features">Application Core Features</h3>
<ol>
<li><strong>AI Meal Generation</strong> - One-click weekly plan creation (21 meals)</li>
<li><strong>Recipe Bookmarking</strong> - Save favorites for future reference</li>
<li><strong>Plan Management</strong> - Save, load, edit, and delete weekly plans</li>
<li><strong>Cross-Device Sync</strong> - Access plans from any device</li>
<li><strong>Responsive Design</strong> - Usable on desktop, tablet, and mobile</li>
</ol>
<h3 id="tech-stack-summary">Tech Stack Summary</h3>
<table>
<thead>
<tr>
<th>Layer</th>
<th>Technology</th>
</tr>
</thead>
<tbody>
<tr>
<td>Framework</td>
<td>Next.js (App Router)</td>
</tr>
<tr>
<td>Language</td>
<td>TypeScript (strict mode)</td>
</tr>
<tr>
<td>Styling</td>
<td>Tailwind CSS + Shadcn UI</td>
</tr>
<tr>
<td>AI SDK</td>
<td>Vercel AI SDK</td>
</tr>
<tr>
<td>Authentication</td>
<td>Clerk</td>
</tr>
<tr>
<td>Deployment</td>
<td>Cloudflare Workers</td>
</tr>
<tr>
<td>State</td>
<td>React Query + IndexedDB</td>
</tr>
<tr>
<td>Testing</td>
<td>Vitest + Playwright</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="problem-solution-mapping">Problem-Solution Mapping</h2>
<table>
<thead>
<tr>
<th>Problem Area</th>
<th>Solution Implemented</th>
</tr>
</thead>
<tbody>
<tr>
<td>Decision fatigue</td>
<td>AI-powered batch generation</td>
</tr>
<tr>
<td>Cross-device access</td>
<td>Cloudflare edge + Clerk auth</td>
</tr>
<tr>
<td>Offline capability</td>
<td>IndexedDB local storage</td>
</tr>
<tr>
<td>Mobile kitchen use</td>
<td>Responsive + touch-first UI</td>
</tr>
<tr>
<td>Rate limiting</td>
<td>Per-user API quotas</td>
</tr>
<tr>
<td>Type safety</td>
<td>Zod schemas + TypeScript</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="user-flow-summary">User Flow Summary</h2>
<pre><code>┌─────────────────────────────────────────────────────────────┐
│                        USER <span class="hljs-built_in">ENTRY</span>                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Google <span class="hljs-built_in">Sign</span>-<span class="hljs-keyword">In</span> (<span class="hljs-keyword">Optional</span>)               │
│               Anonymous: <span class="hljs-number">3</span> generations                  │
│               Authenticated: <span class="hljs-number">7</span> generations               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Generate Weekly Plan                  │
│               AI generates <span class="hljs-number">21</span> meals (<span class="hljs-number">7</span> days × <span class="hljs-number">3</span>)          │
│               Streaming UI updates <span class="hljs-keyword">in</span> <span class="hljs-keyword">real</span>-time           │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌────────┴────────┐
                    ▼                 ▼
         ┌──────────────┐    ┌──────────────┐
         │ View Recipes │    │ <span class="hljs-keyword">Save</span> Plan    │
         │   Details   │    │ (Auth <span class="hljs-keyword">only</span>)  │
         └──────────────┘    └──────────────┘
                                    │
                                    ▼
                             ┌──────────────┐
                             │  Manage      │
                             │  Saved Plans │
                             └──────────────┘
</code></pre><hr>
<h2 id="architecture-highlights">Architecture Highlights</h2>
<h3 id="state-management-strategy">State Management Strategy</h3>
<pre><code>Server State ──► React Query ──► <span class="hljs-keyword">Cached </span>&amp; <span class="hljs-keyword">Synced
</span>     │
UI State ──► Local useState ──► Ephemeral
     │
Cross-cutting ──► React <span class="hljs-built_in">Context</span> ──► Minimal <span class="hljs-keyword">Scope
</span>     │
Persistence ──► IndexedDB ──► Offline Ready
     │
Remote ──► Clerk + API ──► <span class="hljs-keyword">Cloudflare </span>Edge
</code></pre><h3 id="key-design-decisions">Key Design Decisions</h3>
<table>
<thead>
<tr>
<th>Decision</th>
<th>Rationale</th>
</tr>
</thead>
<tbody>
<tr>
<td>App Router</td>
<td>Server-first, streaming, RSC</td>
</tr>
<tr>
<td>Shadcn UI</td>
<td>Copy-paste ownership, customizable</td>
</tr>
<tr>
<td>Zod validation</td>
<td>Runtime + compile-time safety</td>
</tr>
<tr>
<td>Cloudflare</td>
<td>Global low-latency deployment</td>
</tr>
<tr>
<td>IndexedDB</td>
<td>Offline recipe caching</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="quality-metrics">Quality Metrics</h2>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Target</th>
<th>Implementation</th>
</tr>
</thead>
<tbody>
<tr>
<td>TypeScript</td>
<td>100% strict</td>
<td>No implicit any, strict nulls</td>
</tr>
<tr>
<td>Testing</td>
<td>Unit + E2E</td>
<td>Vitest + Playwright</td>
</tr>
<tr>
<td>Linting</td>
<td>Zero warnings</td>
<td>Oxlint + Oxfmt</td>
</tr>
<tr>
<td>Performance</td>
<td>LCP &lt; 2.5s</td>
<td>Code splitting, edge caching</td>
</tr>
<tr>
<td>Accessibility</td>
<td>WCAG 2.1 AA</td>
<td>Semantic HTML, ARIA labels</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="file-structure">File Structure</h2>
<pre><code>docs/
├── USE_CASES.md       <span class="hljs-comment"># Functional requirements</span>
├── PROBLEMS.md        <span class="hljs-comment"># Problem domain analysis</span>
├── SOLUTIONS.md       <span class="hljs-comment"># Technical architecture</span>
└── SUMMARY.md         <span class="hljs-comment"># This document</span>

src/
├── components/
│   ├── meal-planner/  <span class="hljs-comment"># Core meal planning UI</span>
│   └── ui/           <span class="hljs-comment"># Shadcn component library</span>
├── hooks/            <span class="hljs-comment"># Custom React hooks</span>
├── <span class="hljs-class"><span class="hljs-keyword">lib</span>/              <span class="hljs-comment"># Utilities, storage, Redux</span></span>
├── contexts/         <span class="hljs-comment"># React Context providers</span>
├── schemas/          <span class="hljs-comment"># Zod validation schemas</span>
└── server/           <span class="hljs-comment"># API routes, agent, database</span>

app/
├── api/v1/           <span class="hljs-comment"># Typed API endpoints</span>
├── page.tsx          <span class="hljs-comment"># Main application</span>
└── saved/            <span class="hljs-comment"># Saved plans page</span>
</code></pre><hr>
<h2 id="key-endpoints">Key Endpoints</h2>
<table>
<thead>
<tr>
<th>Endpoint</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST /api/v1/meal-generators</code></td>
<td>AI meal plan generation</td>
</tr>
<tr>
<td><code>POST /api/v1/bookmarks</code></td>
<td>Recipe bookmarking</td>
</tr>
<tr>
<td><code>POST /api/v1/generation-limits</code></td>
<td>Rate limit management</td>
</tr>
<tr>
<td><code>GET /api/v1/dashboard</code></td>
<td>User dashboard data</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="getting-started">Getting Started</h2>
<pre><code class="lang-bash"><span class="hljs-meta"># Clone the repository</span>
git clone https:<span class="hljs-comment">//github.com/achmadk/weekly-meal-planner.git</span>
cd weekly-meal-planner

<span class="hljs-meta"># Install dependencies</span>
pnpm install

<span class="hljs-meta"># Set up environment</span>
cp .env.example .env
<span class="hljs-meta"># Edit .env with required API keys</span>

<span class="hljs-meta"># Run development server</span>
pnpm dev

<span class="hljs-meta"># Run tests</span>
pnpm test

<span class="hljs-meta"># Build for production</span>
pnpm build
</code></pre>
<hr>
<h2 id="live-application">Live Application</h2>
<ul>
<li><strong>URL:</strong> <a href="https://weeklymealplanner.achmadk.com">https://weeklymealplanner.achmadk.com</a></li>
<li><strong>Author:</strong> <a href="https://achmadk.com">Achmad Kurnianto</a></li>
</ul>
<hr>
<h2 id="further-reading">Further Reading</h2>
<ul>
<li><a href="https://github.com/achmadk/weekly-meal-planner">Full README</a></li>
<li><a href="https://github.com/achmadk/weekly-meal-planner/blob/main/docs/mini%20frontend%20engineering%20case%20-%20Indonesia.pdf">Architecture Case Study</a></li>
</ul>
