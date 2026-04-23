---
name: "paseto-wasm"
type: "LIBRARY"
monthStarted: "2026-01"
monthEnded: "2026-02"
link: "https://npmx.dev/package/paseto-wasm"
screenshots:
  - /images/portfolios/paseto-wasm.png
  - /images/portfolios/paseto-wasm.webp
  - /images/portfolios/paseto-wasm.avif
---

<div align="center">

  <h1>PASETO Rust WASM (<code>paseto-wasm</code>)</h1>

  <strong>Enable PASETO in JavaScript browsers using <a href="https://webassembly.org/">WebAssembly (WASM)</a></strong>

  <p>Built with 🦀🕸 by <a href="https://achmadk.com">Achmad Kurnianto</a></p>
</div>

<h2 id="-background">🌄 Background</h2>
<p>PASETO (Platform-Agnostic Security Tokens) offers the benefits of JOSE standards (JWT, JWE, JWS) without their numerous design flaws.</p>
<p>This project began in 2022 when no PASETO libraries supported JavaScript browsers. The existing JavaScript/TypeScript implementations were:</p>
<ol>
<li><strong><code>paseto</code> by Filip Skokan</strong> - Node.js only</li>
<li><strong><code>paseto.js</code> by Samuel Judson</strong> - Uses deprecated PASETO v1 and v2 implementations</li>
</ol>
<p>Today, you can use the <code>paseto-ts</code> library for browser-based PASETO implementation. For better performance, consider <code>paseto-wasm</code>, which leverages WebAssembly.</p>
<p>Initially, I planned to use the <a href="https://github.com/brycx/pasetors"><code>pasetors</code></a> crate by <a href="https://github.com/brycx">Johannes</a>, which includes WASM support <a href="https://github.com/brycx/pasetors/issues/75#issuecomment-1281376534">but lacks comprehensive testing</a>. After evaluating options, I chose the <a href="https://github.com/rrrodzilla/rusty_paseto"><code>rusty-paseto</code></a> crate for its reliable WASM support.</p>
<h2 id="-usage">🚀 Usage</h2>
<h3 id="installation">Installation</h3>
<p>This crate produces the <code>paseto-wasm</code> library, compatible with both JavaScript browsers and Node.js.</p>
<pre><code class="lang-sh">npm install paseto-wasm      <span class="hljs-comment"># npm</span>
yarn <span class="hljs-keyword">add</span><span class="bash"> paseto-wasm         <span class="hljs-comment"># yarn</span>
</span>pnpm <span class="hljs-keyword">add</span><span class="bash"> paseto-wasm         <span class="hljs-comment"># pnpm</span>
</span>bun <span class="hljs-keyword">add</span><span class="bash"> paseto-wasm          <span class="hljs-comment"># bun</span></span>
</code></pre>
<h3 id="quick-start">Quick Start</h3>
<pre><code class="lang-javascript"><span class="hljs-comment">// PASETO v4</span>
<span class="hljs-keyword">import</span> initV4, * <span class="hljs-keyword">as</span> v4 <span class="hljs-keyword">from</span> <span class="hljs-string">'paseto-wasm'</span>; <span class="hljs-comment">// OR</span>
<span class="hljs-keyword">import</span> initV4, * <span class="hljs-keyword">as</span> v4 <span class="hljs-keyword">from</span> <span class="hljs-string">'paseto-wasm/v4'</span>;

<span class="hljs-comment">// PASETO v3</span>
<span class="hljs-keyword">import</span> initV3, * <span class="hljs-keyword">as</span> v3 <span class="hljs-keyword">from</span> <span class="hljs-string">'paseto-wasm/v3'</span>;

<span class="hljs-comment">// init WASM first before using other methods</span>
<span class="hljs-keyword">await</span> initV4(); <span class="hljs-comment">// OR</span>
<span class="hljs-keyword">await</span> initV3();

<span class="hljs-comment">// Generate a local encryption key (32 bytes)</span>
<span class="hljs-keyword">const</span> localKey = v4.generate_v4_local_key();

<span class="hljs-comment">// Encrypt a message (local key - symmetric encryption)</span>
<span class="hljs-keyword">const</span> token = v4.encrypt_v4_local(localKey, { <span class="hljs-attr">data</span>: <span class="hljs-string">'Hello PASETO!'</span> });
<span class="hljs-keyword">const</span> decrypted = v4.decrypt_v4_local(localKey, token);

<span class="hljs-comment">// Or use asymmetric keys for signing</span>
<span class="hljs-keyword">const</span> keyPair = v4.generate_v4_public_key_pair();
<span class="hljs-keyword">const</span> signedToken = v4.sign_v4_public(keyPair.secret, { <span class="hljs-attr">user</span>: <span class="hljs-string">'alice'</span> });
<span class="hljs-keyword">const</span> verified = v4.verify_v4_public(keyPair.public, signedToken);
</code></pre>
<hr>
<h2 id="api-documentation">API Documentation</h2>
<h3 id="paseto-versions">PASETO Versions</h3>
<table>
<thead>
<tr>
<th>Version</th>
<th>Algorithm (Local)</th>
<th>Algorithm (Public)</th>
<th>Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td>v4</td>
<td>XChaCha20-Poly1305</td>
<td>Ed25519</td>
<td>Modern applications (default)</td>
</tr>
<tr>
<td>v3</td>
<td>AES-256-CTR + HMAC-SHA384</td>
<td>P-384 + ECDSA</td>
<td>FIPS-compliant environments</td>
</tr>
</tbody>
</table>
<p><strong>Recommendation</strong>: Use v4 for new applications. Use v3 only when required for FIPS compliance.</p>
<hr>
<h3 id="paseto-v4-api-default-">PASETO v4 API (Default)</h3>
<h4 id="key-generation">Key Generation</h4>
<h5 id="-generate_v4_local_key-"><code>generate_v4_local_key()</code></h5>
<p>Generates a cryptographically secure random key for local encryption.</p>
<p><strong>Returns</strong>: <code>string</code> - A 64-character hex string (32 bytes)</p>
<pre><code class="lang-javascript">const <span class="hljs-built_in">key</span> = v4.generate_v4_local_key();
// <span class="hljs-built_in">key</span>: <span class="hljs-string">"a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"</span>
</code></pre>
<h5 id="-generate_v4_public_key_pair-"><code>generate_v4_public_key_pair()</code></h5>
<p>Generates a new Ed25519 key pair for public signing/verification.</p>
<p><strong>Returns</strong>: <code>KeyPair</code> object with:</p>
<ul>
<li><code>secret</code>: 128-character hex string (64 bytes) - Keep secret!</li>
<li><code>public</code>: 64-character hex string (32 bytes)</li>
</ul>
<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> keyPair = v4.generate_v4_public_key_pair();
console.<span class="hljs-built_in">log</span>(keyPair.secret); <span class="hljs-comment">// "a1b2...c3d4" (128 hex)</span>
console.<span class="hljs-built_in">log</span>(keyPair.<span class="hljs-keyword">public</span>);  <span class="hljs-comment">// "e5f6...g7h8" (64 hex)</span>
</code></pre>
<hr>
<h4 id="local-encryption-symmetric-">Local Encryption (Symmetric)</h4>
<h5 id="-encrypt_v4_local-key_hex-message-footer-implicit_assertion-"><code>encrypt_v4_local(key_hex, message, footer?, implicit_assertion?)</code></h5>
<p>Encrypts a message using XChaCha20-Poly1305.</p>
<p><strong>Parameters</strong>:</p>
<ul>
<li><code>key_hex</code> (string, required): 64-character hex string (32 bytes)</li>
<li><code>message</code> (string | object, required): Message to encrypt</li>
<li><code>footer</code> (string, optional): Additional footer data</li>
<li><code>implicit_assertion</code> (string, optional): Additional implicit assertion</li>
</ul>
<p><strong>Returns</strong>: <code>string</code> - PASETO token in format <code>v4.local.{payload}</code></p>
<pre><code class="lang-javascript"><span class="hljs-comment">// With string message</span>
<span class="hljs-keyword">const</span> token1 = v4.encrypt_v4_local(<span class="hljs-built_in">key</span>, <span class="hljs-string">"Hello World"</span>);

<span class="hljs-comment">// With object message (serialized as JSON)</span>
<span class="hljs-keyword">const</span> token2 = v4.encrypt_v4_local(<span class="hljs-built_in">key</span>, { user: <span class="hljs-string">'alice'</span>, role: <span class="hljs-string">'admin'</span> });

<span class="hljs-comment">// With footer</span>
<span class="hljs-keyword">const</span> token3 = v4.encrypt_v4_local(<span class="hljs-built_in">key</span>, <span class="hljs-string">"secret"</span>, <span class="hljs-string">"footer-data"</span>);
</code></pre>
<h5 id="-decrypt_v4_local-key_hex-token-footer-implicit_assertion-"><code>decrypt_v4_local(key_hex, token, footer?, implicit_assertion?)</code></h5>
<p>Decrypts a PASETO v4 local token.</p>
<p><strong>Parameters</strong>:</p>
<ul>
<li><code>key_hex</code> (string, required): 64-character hex string (32 bytes)</li>
<li><code>token</code> (string, required): The PASETO token to decrypt</li>
<li><code>footer</code> (string, optional): Must match what was used during encryption</li>
<li><code>implicit_assertion</code> (string, optional): Must match what was used</li>
</ul>
<p><strong>Returns</strong>: <code>string</code> - The decrypted message as a JSON string</p>
<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> decrypted = v4.decrypt_v4_local(key, token);
// decrypted: '{<span class="hljs-string">"user"</span>:<span class="hljs-string">"alice"</span>,<span class="hljs-string">"role"</span>:<span class="hljs-string">"admin"</span>}'
</code></pre>
<p><strong>Errors</strong>: Throws if key is invalid, token tampered, or wrong key used.</p>
<hr>
<h4 id="public-signing-asymmetric-">Public Signing (Asymmetric)</h4>
<h5 id="-sign_v4_public-secret_key_hex-message-footer-implicit_assertion-"><code>sign_v4_public(secret_key_hex, message, footer?, implicit_assertion?)</code></h5>
<p>Signs a message using Ed25519. The message is visible in the token - this provides authentication/integrity, NOT secrecy.</p>
<p><strong>Parameters</strong>:</p>
<ul>
<li><code>secret_key_hex</code> (string, required): 128-character hex string (64 bytes)</li>
<li><code>message</code> (string | object, required): Message to sign</li>
<li><code>footer</code> (string, optional): Additional footer data</li>
<li><code>implicit_assertion</code> (string, optional): Additional implicit assertion</li>
</ul>
<p><strong>Returns</strong>: <code>string</code> - PASETO token in format <code>v4.public.{signature}</code></p>
<pre><code class="lang-javascript">const keyPair = v4.generate_v4_public_key_pair();<span class="hljs-built_in">
const </span>token = v4.sign_v4_public(keyPair.secret, { user: 'alice' });
// token: <span class="hljs-string">"v4.public.eyJ1c2VyIjoiYWxpY2UifQ..."</span>
</code></pre>
<h5 id="-verify_v4_public-public_key_hex-token-footer-implicit_assertion-"><code>verify_v4_public(public_key_hex, token, footer?, implicit_assertion?)</code></h5>
<p>Verifies a PASETO v4 public token.</p>
<p><strong>Parameters</strong>:</p>
<ul>
<li><code>public_key_hex</code> (string, required): 64-character hex string (32 bytes)</li>
<li><code>token</code> (string, required): The PASETO token to verify</li>
<li><code>footer</code> (string, optional): Must match what was used during signing</li>
<li><code>implicit_assertion</code> (string, optional): Must match what was used</li>
</ul>
<p><strong>Returns</strong>: <code>string</code> - The original message</p>
<pre><code class="lang-javascript">const keyPair = v4.generate_v4_public_key_pair();<span class="hljs-built_in">
const </span>token = v4.sign_v4_public(keyPair.secret, { user: 'alice' });<span class="hljs-built_in">
const </span>verified = v4.verify_v4_public(keyPair.public, token);
// verified: '{<span class="hljs-string">"user"</span>:<span class="hljs-string">"alice"</span>}'

// Verification fails with wrong key<span class="hljs-built_in"> or </span>tampered token<span class="hljs-built_in">
const </span>wrongPair = v4.generate_v4_public_key_pair();
v4.verify_v4_public(wrongPair.public, token); // throws error
</code></pre>
<p><strong>Errors</strong>: Throws if signature invalid or key doesn&#39;t match.</p>
<hr>
<h4 id="paserk-key-serialization-">PASERK (Key Serialization)</h4>
<p>PASERK provides a standardized format for encoding cryptographic keys.</p>
<h5 id="local-keys">Local Keys</h5>
<pre><code class="lang-javascript"><span class="hljs-comment">// Convert to PASERK format</span>
<span class="hljs-keyword">const</span> paserk = v4.key_to_paserk_local(key_hex);
<span class="hljs-comment">// "k4.local.eyJhIjowfQ..."</span>

<span class="hljs-comment">// Convert back from PASERK</span>
<span class="hljs-keyword">const</span> restored = v4.paserk_local_to_key(paserk);
<span class="hljs-comment">// "a1b2c3d4..."</span>
</code></pre>
<h5 id="secret-keys">Secret Keys</h5>
<pre><code class="lang-javascript">const paserkSecret = v4.key_to_paserk_secret(secret_key_hex)<span class="hljs-comment">;</span>
// <span class="hljs-string">"k4.secret.eyJhIjowfQ..."</span>

const restoredSecret = v4.paserk_secret_to_key(paserkSecret)<span class="hljs-comment">;</span>
</code></pre>
<h5 id="public-keys">Public Keys</h5>
<pre><code class="lang-javascript">const paserkPublic = v4.key_to_paserk_public(public_key_hex)<span class="hljs-comment">;</span>
// <span class="hljs-string">"k4.public.eyJhIjowfQ..."</span>

const restoredPublic = v4.paserk_public_to_key(paserkPublic)<span class="hljs-comment">;</span>
</code></pre>
<hr>
<h4 id="key-ids">Key IDs</h4>
<p>Key IDs allow key identification without exposing the key material.</p>
<h5 id="-get_local_key_id-key_hex-"><code>get_local_key_id(key_hex)</code></h5>
<p><strong>Returns</strong>: Key ID in format <code>k4.lid.{hash}</code></p>
<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> lid = v4.get_local_key_id(<span class="hljs-built_in">key</span>);
<span class="hljs-comment">// "k4.lid.xxxx..."</span>
</code></pre>
<h5 id="-get_public_key_id-public_key_hex-"><code>get_public_key_id(public_key_hex)</code></h5>
<p><strong>Returns</strong>: Key ID in format <code>k4.pid.{hash}</code></p>
<h5 id="-get_secret_key_id-secret_key_hex-"><code>get_secret_key_id(secret_key_hex)</code></h5>
<p><strong>Returns</strong>: Key ID in format <code>k4.sid.{hash}</code></p>
<hr>
<h3 id="paseto-v3-api">PASETO v3 API</h3>
<p>Access via <code>import * as v3 from &#39;paseto-wasm/v3&#39;</code></p>
<p>The v3 API is identical to v4 but uses different key sizes:</p>
<table>
<thead>
<tr>
<th>Key Type</th>
<th>v4 Size</th>
<th>v3 Size</th>
</tr>
</thead>
<tbody>
<tr>
<td>Local Key</td>
<td>32 bytes (64 hex)</td>
<td>32 bytes (64 hex)</td>
</tr>
<tr>
<td>Secret Key</td>
<td>64 bytes (128 hex)</td>
<td>48 bytes (96 hex)</td>
</tr>
<tr>
<td>Public Key</td>
<td>32 bytes (64 hex)</td>
<td>49 bytes (98 hex)</td>
</tr>
</tbody>
</table>
<h4 id="v3-key-generation">v3 Key Generation</h4>
<pre><code class="lang-javascript">import * as v3 from 'paseto-wasm/v3';
<span class="hljs-built_in">
const </span>localKey = v3.generate_v3_local_key();<span class="hljs-built_in">
const </span>keyPair = v3.generate_v3_public_key_pair();
</code></pre>
<h4 id="v3-paserk-functions">v3 PASERK Functions</h4>
<ul>
<li><code>key_to_paserk_v3_local</code>, <code>paserk_v3_local_to_key</code></li>
<li><code>key_to_paserk_v3_secret</code>, <code>paserk_v3_secret_to_key</code></li>
<li><code>key_to_paserk_v3_public</code>, <code>paserk_v3_public_to_key</code></li>
<li><code>get_v3_local_key_id</code>, <code>get_v3_public_key_id</code>, <code>get_v3_secret_key_id</code></li>
</ul>
<hr>
<h2 id="error-handling">Error Handling</h2>
<p>All functions throw JavaScript errors with descriptive messages:</p>
<pre><code class="lang-javascript"><span class="hljs-keyword">try</span> {
  <span class="hljs-keyword">const</span> decrypted = v4.decrypt_v4_local(key, token);
} <span class="hljs-keyword">catch</span> (<span class="hljs-keyword">error</span>) {
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">error</span>.message.includes(<span class="hljs-string">'Key must be'</span>)) {
    console.<span class="hljs-keyword">error</span>(<span class="hljs-string">'Invalid key length'</span>);
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-keyword">error</span>.message.includes(<span class="hljs-string">'Decryption failed'</span>)) {
    console.<span class="hljs-keyword">error</span>(<span class="hljs-string">'Wrong key or tampered token'</span>);
  } <span class="hljs-keyword">else</span> {
    console.<span class="hljs-keyword">error</span>(<span class="hljs-string">'Unknown error:'</span>, <span class="hljs-keyword">error</span>);
  }
}
</code></pre>
<hr>
<h2 id="security-considerations">Security Considerations</h2>
<ol>
<li><strong>Key Storage</strong>: Store keys securely. Never expose secret keys in code or logs.</li>
<li><strong>Key Rotation</strong>: Implement key rotation for long-lived applications.</li>
<li><strong>Algorithm Choice</strong>: Use v4 for new applications. Use v3 only for FIPS compliance.</li>
<li><strong>Token Expiry</strong>: Include expiration claims in your tokens:</li>
</ol>
<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> claims = {
  sub: <span class="hljs-string">'user123'</span>,
  <span class="hljs-built_in">exp</span>: Math.<span class="hljs-built_in">floor</span>(Date.now() / <span class="hljs-number">1000</span>) + <span class="hljs-number">3600</span>  // expires <span class="hljs-keyword">in</span> <span class="hljs-number">1</span> hour
}<span class="hljs-comment">;</span>
<span class="hljs-keyword">const</span> token = v4.sign_v4_public(secretKey, claims)<span class="hljs-comment">;</span>
</code></pre>
<hr>
<h2 id="-contributing">📝 Contributing</h2>
<h3 id="building">Building</h3>
<pre><code class="lang-sh">pnpm <span class="hljs-keyword">run</span><span class="bash"> build:wasm</span>
</code></pre>
<h3 id="testing">Testing</h3>
<pre><code class="lang-sh"><span class="hljs-comment"># Node.js environment</span>
pnpm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span>:wasm:node
</span>
<span class="hljs-comment"># Browser environment</span>
pnpm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span>:wasm:web
</span>pnpm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span>:wasm:web:v3</span>
</code></pre>
<p>For detailed contribution guidelines, please see <a href="contributing.md">CONTRIBUTING.md</a>.</p>
<h2 id="-built-with">🛠️ Built With</h2>
<ul>
<li><a href="https://github.com/wasm-bindgen/wasm-bindgen">wasm-bindgen</a> - Facilitates communication between WebAssembly and JavaScript</li>
<li><a href="https://github.com/rrrodzilla/rusty_paseto">rusty-paseto</a> - PASETO implementation in Rust</li>
</ul>
<h2 id="-roadmap">📋 Roadmap</h2>
<ul>
<li>[x] Complete documentation</li>
<li>[ ] Support PASERK in sign/verify operations</li>
<li>[ ] Implement custom allocator (e.g., lol_alloc or talc) for improved performance and reduced file size</li>
</ul>
