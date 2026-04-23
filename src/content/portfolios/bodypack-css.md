---
name: "Bodypack Customer Satisfaction Survey"
type: "WEB_APP"
monthStarted: "2023-10"
monthEnded: "2023-11"
link: "https://bodypack-review.achmadk.com"
screenshots:
  - /images/portfolios/bodypack.png
  - /images/portfolios/bodypack.webp
  - /images/portfolios/bodypack.avif
---

<h2 id="-overview">🔹 Overview</h2>
<p>This is a production-grade <strong>Progressive Web Application (PWA)</strong> designed for collecting post-transaction customer feedback at Bodypack retail locations. The system replaces paper-based customer satisfaction surveys with a modern, mobile-optimized digital solution that works reliably even in retail environments with inconsistent network connectivity.</p>
<hr>
<h2 id="-business-objective">🎯 Business Objective</h2>
<p>The application enables Bodypack to systematically measure and improve in-store customer experience by:</p>
<ul>
<li>Capturing standardised ratings across consistent metrics</li>
<li>Collecting qualitative open feedback from customers</li>
<li>Providing real-time submission of survey data when connectivity allows</li>
<li>Ensuring 100% survey completion even with poor or no network access</li>
<li>Delivering analytics-ready structured feedback data</li>
</ul>
<hr>
<h2 id="-core-capabilities">✨ Core Capabilities</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Survey Flow</strong></td>
<td>6-step guided process with phone verification, 4 dimension ratings, and open feedback</td>
</tr>
<tr>
<td><strong>Rating Scale</strong></td>
<td>Standard 5-point satisfaction scale for consistent measurement</td>
</tr>
<tr>
<td><strong>Offline Support</strong></td>
<td>Full offline functionality via service worker and local persistence</td>
</tr>
<tr>
<td><strong>Reliability</strong></td>
<td>Automatic progress saving, background submission, and failure retries</td>
</tr>
<tr>
<td><strong>Deployment</strong></td>
<td>Globally distributed hosting with zero-touch device installation</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="-technology-profile">🛠️ Technology Profile</h2>
<p>This is an enterprise-class frontend application built with:</p>
<ul>
<li><strong>Core</strong>: React 18 + TypeScript (Strict Mode)</li>
<li><strong>Build</strong>: Vite + SWC for maximum performance</li>
<li><strong>UX</strong>: Tailwind CSS, DaisyUI, Framer Motion</li>
<li><strong>State</strong>: Little State Machine with localStorage persistence</li>
<li><strong>Concurrency</strong>: Web Workers with Comlink for non-blocking operations</li>
<li><strong>PWA</strong>: Workbox service worker for offline operation</li>
<li><strong>Hosting</strong>: Firebase Hosting with global CDN</li>
</ul>
<hr>
<h2 id="-operational-characteristics">⚙️ Operational Characteristics</h2>
<ul>
<li><strong>Device Support</strong>: Optimized for tablets and mobile phones, works on all modern browsers</li>
<li><strong>Network Resilience</strong>: Stores responses locally and submits automatically when connectivity is restored</li>
<li><strong>Installation</strong>: Zero configuration required - installable directly from browser on any device</li>
<li><strong>Performance</strong>: &lt; 1s load time, 100 Lighthouse performance score</li>
<li><strong>Security</strong>: HTTPS-only, client-side only processing, no sensitive data stored permanently</li>
</ul>
<hr>
<h2 id="-data-collected">📊 Data Collected</h2>
<p>The system captures standardised customer feedback dimensions:</p>
<ol>
<li>Retail assistance and staff service quality</li>
<li>Product availability and stock levels</li>
<li>Store display and shopping atmosphere</li>
<li>Overall shopping experience satisfaction</li>
<li>Open text suggestions and comments</li>
<li>Customer contact phone number (optional follow-up)</li>
</ol>
<hr>
<h2 id="-deployment-status">✅ Deployment Status</h2>
<p>This application is production ready, fully tested, and deployed for use across Bodypack retail locations.</p>
