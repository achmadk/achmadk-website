---
name: "@achmadk/react-loading-overlay"
type: "LIBRARY"
monthStarted: "2020-02"
monthEnded: "2020-04"
link: "https://www.npmjs.com/package/@achmadk/react-loading-overlay"
screenshots:
  - /images/portfolios/react-loading-overlay-ts.png
  - /images/portfolios/react-loading-overlay-ts.webp
  - /images/portfolios/react-loading-overlay-ts.avif
---

<p data-path-to-node="2"><b data-path-to-node="2" data-index-in-node="0">react-loading-overlay-ts</b> is a lightweight, highly customizable React component used to provide visual feedback during asynchronous operations by dimming the background and displaying a loading indicator (spinner) and optional message.</p>
<h4 data-path-to-node="3"><b data-path-to-node="3" data-index-in-node="0">Core Purpose</b></h4>
<p data-path-to-node="4">It serves as a modern, TypeScript-ready replacement for the original (and now unmaintained) <code data-path-to-node="4" data-index-in-node="92">react-loading-overlay</code> library. It bridges the gap for developers needing a robust UI blocker that integrates seamlessly with modern build tools and strictly typed codebases.</p>
<h4 data-path-to-node="5"><b data-path-to-node="5" data-index-in-node="0">Key Improvements over Original</b></h4>
<ul data-path-to-node="6">
    <li>
        <p data-path-to-node="6,0,0"><b data-path-to-node="6,0,0" data-index-in-node="0">TypeScript Support:</b> Built natively with TypeScript, providing full type definitions for props and styles.</p>
    </li>
    <li>
        <p data-path-to-node="6,1,0"><b data-path-to-node="6,1,0" data-index-in-node="0">ES Module Support:</b> Compatible with modern bundlers (Webpack 5, Vite, Rollup) and ES Module (ESM) standards.</p>
    </li>
    <li>
        <p data-path-to-node="6,2,0"><b data-path-to-node="6,2,0" data-index-in-node="0">Ref Forwarding:</b> Supports <code data-path-to-node="6,2,0" data-index-in-node="25">forwardRef</code>, allowing developers to access the underlying DOM elements directly if needed.</p>
    </li>
    <li>
        <p data-path-to-node="6,3,0"><b data-path-to-node="6,3,0" data-index-in-node="0">Modern Styling Engine:</b> Uses the latest version of <code data-path-to-node="6,3,0" data-index-in-node="50">@emotion/css</code> for styling, offering better performance and smaller bundle sizes compared to the older Emotion versions.</p>
    </li>
</ul>
<h4 data-path-to-node="7"><b data-path-to-node="7" data-index-in-node="0">Technical Highlights</b></h4>
<ul data-path-to-node="8">
    <li>
        <p data-path-to-node="8,0,0"><b data-path-to-node="8,0,0" data-index-in-node="0">Declarative API:</b> Control the overlay state via a simple <code data-path-to-node="8,0,0" data-index-in-node="56">active</code> boolean prop.</p>
    </li>
    <li>
        <p data-path-to-node="8,1,0"><b data-path-to-node="8,1,0" data-index-in-node="0">Customization:</b></p>
        <ul data-path-to-node="8,1,1">
            <li>
                <p data-path-to-node="8,1,1,0,0"><b data-path-to-node="8,1,1,0,0" data-index-in-node="0">Spinners:</b> Use the built-in spinner or pass any custom React node (e.g., SVG, Lottie animation).</p>
            </li>
            <li>
                <p data-path-to-node="8,1,1,1,0"><b data-path-to-node="8,1,1,1,0" data-index-in-node="0">Styling:</b> Offers a &quot;styles&quot; prop inspired by <code data-path-to-node="8,1,1,1,0" data-index-in-node="44">react-select</code>, allowing developers to override specific sub-components (wrapper, overlay, content, spinner) without breaking the base layout.</p>
            </li>
        </ul>
    </li>
    <li>
        <p data-path-to-node="8,2,0"><b data-path-to-node="8,2,0" data-index-in-node="0">Transitions:</b> Built-in support for fade-in/fade-out transitions with customizable speeds.</p>
    </li>
</ul>
<h4 data-path-to-node="9"><b data-path-to-node="9" data-index-in-node="0">Target Audience</b></h4>
<p data-path-to-node="10">This library is ideal for <b data-path-to-node="10" data-index-in-node="26">Frontend Engineers</b> and <b data-path-to-node="10" data-index-in-node="49">UI/UX Developers</b> working on React applications that require a polished &quot;loading&quot; state for forms, full-page transitions, or specific dashboard widgets while maintaining strict type safety and modern dependency standards.</p>