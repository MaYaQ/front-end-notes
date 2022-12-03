import{_ as n,o as s,c as a,b as p}from"./app.db14d82c.js";const t={},o=p(`<p><img src="https://cdn.jsdelivr.net/gh/MaYaQ/super-duper-train/img/front-end-develop-standard04.jpg" alt=""></p><h2 id="\u6700\u4F73\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u539F\u5219" aria-hidden="true">#</a> \u6700\u4F73\u539F\u5219</h2><p>\u575A\u6301\u5236\u5B9A\u597D\u7684\u4EE3\u7801\u89C4\u8303\u3002</p><p>\u65E0\u8BBA\u56E2\u961F\u4EBA\u6570\u591A\u5C11\uFF0C\u4EE3\u7801\u5E94\u8BE5\u540C\u51FA\u4E00\u95E8\u3002</p><h2 id="\u57FA\u672C\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u89C4\u8303" aria-hidden="true">#</a> \u57FA\u672C\u89C4\u8303</h2><h3 id="_1\u3001\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u7F29\u8FDB" aria-hidden="true">#</a> 1\u3001\u7F29\u8FDB</h3><p>\u4F7F\u7528 soft tab\uFF084 \u4E2A\u7A7A\u683C\uFF09\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2\u3001\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5206\u53F7" aria-hidden="true">#</a> 2\u3001\u5206\u53F7</h3><p>\u6BCF\u4E2A\u5C5E\u6027\u58F0\u660E\u672B\u5C3E\u90FD\u8981\u52A0\u5206\u53F7\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3\u3001\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u7A7A\u683C" aria-hidden="true">#</a> 3\u3001\u7A7A\u683C</h3><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u4E0D\u9700\u8981\u7A7A\u683C\uFF1A</p><blockquote><p>\u5C5E\u6027\u540D\u540E</p></blockquote><ul><li>\u591A\u4E2A\u89C4\u5219\u7684\u5206\u9694\u7B26&#39;,&#39;\u524D</li><li>!important &#39;!&#39;\u540E</li><li>\u5C5E\u6027\u503C\u4E2D&#39;(&#39;\u540E\u548C&#39;)&#39;\u524D</li><li>\u884C\u672B\u4E0D\u8981\u6709\u591A\u4F59\u7684\u7A7A\u683C</li><li>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u9700\u8981\u7A7A\u683C\uFF1A</li></ul><blockquote><p>\u5C5E\u6027\u503C\u524D</p></blockquote><ul><li>\u9009\u62E9\u5668&#39;&gt;&#39;, &#39;+&#39;, &#39;~&#39;\u524D\u540E</li><li>&#39;{&#39;\u524D</li><li>!important &#39;!&#39;\u524D</li><li>@else \u524D\u540E</li><li>\u5C5E\u6027\u503C\u4E2D\u7684&#39;,&#39;\u540E</li><li>\u6CE8\u91CA&#39;/<em>&#39;\u540E\u548C&#39;</em>/&#39;\u524D</li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element,
.dialog</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element,
.dialog</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element &gt; .dialog</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element &gt; .dialog</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token atrule"><span class="token rule">@if</span></span><span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token atrule"><span class="token rule">@if</span></span><span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4\u3001\u7A7A\u884C" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u7A7A\u884C" aria-hidden="true">#</a> 4\u3001\u7A7A\u884C</h3><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u9700\u8981\u7A7A\u884C\uFF1A</p><ul><li>\u6587\u4EF6\u6700\u540E\u4FDD\u7559\u4E00\u4E2A\u7A7A\u884C</li><li>&#39;}&#39;\u540E\u6700\u597D\u8DDF\u4E00\u4E2A\u7A7A\u884C\uFF0C\u5305\u62EC scss \u4E2D\u5D4C\u5957\u7684\u89C4\u5219</li><li>\u5C5E\u6027\u4E4B\u95F4\u9700\u8981\u9002\u5F53\u7684\u7A7A\u884C\uFF0C\u5177\u4F53\u89C1\u5C5E\u6027\u58F0\u660E\u987A\u5E8F</li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.dialog</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.dialog</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5\u3001\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u6362\u884C" aria-hidden="true">#</a> 5\u3001\u6362\u884C</h3><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u9700\u8981\u6362\u884C\uFF1A</p><ul><li><p>&#39;{&#39;\u540E\u548C&#39;}&#39;\u524D</p></li><li><p>\u6BCF\u4E2A\u5C5E\u6027\u72EC\u5360\u4E00\u884C</p></li><li><p>\u591A\u4E2A\u89C4\u5219\u7684\u5206\u9694\u7B26&#39;,&#39;\u540E</p></li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element,
.dialog</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element,
.dialog</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6\u3001\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u6CE8\u91CA" aria-hidden="true">#</a> 6\u3001\u6CE8\u91CA</h3><ul><li><p>\u6CE8\u91CA\u7EDF\u4E00\u7528&#39;/__/&#39;\uFF08scss \u4E2D\u4E5F\u4E0D\u8981\u7528&#39;//&#39;\uFF09\uFF0C\u5177\u4F53\u53C2\u7167\u53F3\u8FB9\u7684\u5199\u6CD5\uFF1B</p></li><li><p>\u7F29\u8FDB\u4E0E\u4E0B\u4E00\u884C\u4EE3\u7801\u4FDD\u6301\u4E00\u81F4\uFF1B</p></li><li><p>\u53EF\u4F4D\u4E8E\u4E00\u4E2A\u4EE3\u7801\u884C\u7684\u672B\u5C3E\uFF0C\u4E0E\u4EE3\u7801\u95F4\u9694\u4E00\u4E2A\u7A7A\u683C\u3002</p></li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* Modal header */</span>
<span class="token selector">.modal-header</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * Modal header
 */</span>
<span class="token selector">.modal-header</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modal-header</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 50px */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token comment">/* color red */</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7\u3001\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u5F15\u53F7" aria-hidden="true">#</a> 7\u3001\u5F15\u53F7</h3><ul><li><p>\u6700\u5916\u5C42\u7EDF\u4E00\u4F7F\u7528\u53CC\u5F15\u53F7\uFF1B</p></li><li><p>url \u7684\u5185\u5BB9\u8981\u7528\u5F15\u53F7\uFF1B</p></li><li><p>\u5C5E\u6027\u9009\u62E9\u5668\u4E2D\u7684\u5C5E\u6027\u503C\u9700\u8981\u5F15\u53F7\u3002</p></li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.element:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;logo.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li[data-type=&quot;single&quot;]</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_8\u3001\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u989C\u8272" aria-hidden="true">#</a> 8\u3001\u989C\u8272</h3><p>\u989C\u8272 16 \u8FDB\u5236\u7528\u5C0F\u5199\u5B57\u6BCD\uFF1B\u989C\u8272 16 \u8FDB\u5236\u5C3D\u91CF\u7528\u7B80\u5199\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #001122<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #012<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_9\u3001\u5C5E\u6027\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u5C5E\u6027\u7B80\u5199" aria-hidden="true">#</a> 9\u3001\u5C5E\u6027\u7B80\u5199</h3><p>\u5C5E\u6027\u7B80\u5199\u9700\u8981\u4F60\u975E\u5E38\u6E05\u695A\u5C5E\u6027\u503C\u7684\u6B63\u786E\u987A\u5E8F\uFF0C\u800C\u4E14\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5E76\u4E0D\u9700\u8981\u8BBE\u7F6E\u5C5E\u6027\u7B80\u5199\u4E2D\u5305\u542B\u7684\u6240\u6709\u503C\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u5C3D\u91CF\u5206\u5F00\u58F0\u660E\u4F1A\u66F4\u52A0\u6E05\u6670\uFF1B</p><p><code>margin</code> \u548C <code>padding</code> \u76F8\u53CD\uFF0C\u9700\u8981\u4F7F\u7528\u7B80\u5199\uFF1B</p><p>\u5E38\u89C1\u7684\u5C5E\u6027\u7B80\u5199\u5305\u62EC\uFF1A</p><ul><li>font</li><li>background</li><li>transition</li><li>animation</li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 1s linear 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">transition-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
  <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
  <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
  <span class="token property">transition-property</span><span class="token punctuation">:</span> opacity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_10\u3001\u5A92\u4F53\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u5A92\u4F53\u67E5\u8BE2" aria-hidden="true">#</a> 10\u3001\u5A92\u4F53\u67E5\u8BE2</h3><p>\u5C3D\u91CF\u5C06\u5A92\u4F53\u67E5\u8BE2\u7684\u89C4\u5219\u9760\u8FD1\u4E0E\u4ED6\u4EEC\u76F8\u5173\u7684\u89C4\u5219\uFF0C\u4E0D\u8981\u5C06\u4ED6\u4EEC\u4E00\u8D77\u653E\u5230\u4E00\u4E2A\u72EC\u7ACB\u7684\u6837\u5F0F\u6587\u4EF6\u4E2D\uFF0C\u6216\u8005\u4E22\u5728\u6587\u6863\u7684\u6700\u5E95\u90E8\uFF0C\u8FD9\u6837\u505A\u53EA\u4F1A\u8BA9\u5927\u5BB6\u4EE5\u540E\u66F4\u5BB9\u6613\u5FD8\u8BB0\u4ED6\u4EEC\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.element-avatar</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.element</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.element-avatar</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5176\u4ED6\u6742\u9879\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6742\u9879\u89C4\u8303" aria-hidden="true">#</a> \u5176\u4ED6\u6742\u9879\u89C4\u8303</h2><ul><li><p>\u4E0D\u5141\u8BB8\u6709\u7A7A\u7684\u89C4\u5219\uFF1B</p></li><li><p>\u5143\u7D20\u9009\u62E9\u5668\u7528\u5C0F\u5199\u5B57\u6BCD\uFF1B</p></li><li><p>\u53BB\u6389\u5C0F\u6570\u70B9\u524D\u9762\u7684 0\uFF1B</p></li><li><p>\u53BB\u6389\u6570\u5B57\u4E2D\u4E0D\u5FC5\u8981\u7684\u5C0F\u6570\u70B9\u548C\u672B\u5C3E\u7684 0\uFF1B</p></li><li><p>\u5C5E\u6027\u503C&#39;0&#39;\u540E\u9762\u4E0D\u8981\u52A0\u5355\u4F4D\uFF1B</p></li><li><p>\u540C\u4E2A\u5C5E\u6027\u4E0D\u540C\u524D\u7F00\u7684\u5199\u6CD5\u9700\u8981\u5728\u5782\u76F4\u65B9\u5411\u4FDD\u6301\u5BF9\u9F50\uFF0C\u5177\u4F53\u53C2\u7167\u53F3\u8FB9\u7684\u5199\u6CD5\uFF1B</p></li><li><p>\u65E0\u524D\u7F00\u7684\u6807\u51C6\u5C5E\u6027\u5E94\u8BE5\u5199\u5728\u6709\u524D\u7F00\u7684\u5C5E\u6027\u540E\u9762\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u540C\u4E2A\u89C4\u5219\u91CC\u51FA\u73B0\u91CD\u590D\u7684\u5C5E\u6027\uFF0C\u5982\u679C\u91CD\u590D\u7684\u5C5E\u6027\u662F\u8FDE\u7EED\u7684\u5219\u6CA1\u5173\u7CFB\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u51FA\u73B0\u4E24\u4E2A\u76F8\u540C\u7684\u89C4\u5219\uFF1B</p></li><li><p>\u7528 border: 0; \u4EE3\u66FF border: none;\uFF1B</p></li><li><p>\u9009\u62E9\u5668\u4E0D\u8981\u8D85\u8FC7 4 \u5C42\uFF08\u5728 scss \u4E2D\u5982\u679C\u8D85\u8FC7 4 \u5C42\u5E94\u8BE5\u8003\u8651\u7528\u5D4C\u5957\u7684\u65B9\u5F0F\u6765\u5199\uFF09\uFF1B</p></li><li><p>\u53D1\u5E03\u7684\u4EE3\u7801\u4E2D\u4E0D\u8981\u6709 @import\uFF1B</p></li><li><p>\u5C3D\u91CF\u5C11\u7528&#39;*&#39;\u9009\u62E9\u5668\u3002</p></li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">LI</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">li</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-moz-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-moz-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #fff 0<span class="token punctuation">,</span> #eee 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* not good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><h3 id="_1\u3001css-\u4EE3\u7801\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_1\u3001css-\u4EE3\u7801\u683C\u5F0F\u5316" aria-hidden="true">#</a> 1\u3001css \u4EE3\u7801\u683C\u5F0F\u5316</h3><blockquote><p>css \u7684\u4EE3\u7801\u683C\u5F0F\u5316\uFF0C\u80FD\u89E3\u51B3\u90E8\u5206 css \u4EE3\u7801\u89C4\u8303\uFF0C\u5982\u4EE3\u7801\u7F29\u8FDB\u3001\u7A7A\u683C\u3001\u5206\u53F7\u3001\u6362\u884C\u3001\u5F15\u53F7\u3001\u989C\u8272\u8FDB\u5236\u7B49\u3002\u6240\u4EE5\u80FD\u89E3\u51B3\u7684\u8FD9\u4E9B\u89C4\u8303\u4EC5\u4F9B\u53C2\u8003\u3002</p></blockquote>`,50),e=[o];function c(l,u){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","index.html.vue"]]);export{k as default};
