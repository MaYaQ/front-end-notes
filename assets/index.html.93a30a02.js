import{_ as n,o as s,c as a,b as p}from"./app.32907fc0.js";const t={},o=p(`<p><img src="https://cdn.jsdelivr.net/gh/MaYaQ/super-duper-train/img/front-end-develop-standard05.jpg" alt=""></p><h2 id="\u6700\u4F73\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u539F\u5219" aria-hidden="true">#</a> \u6700\u4F73\u539F\u5219</h2><p>\u575A\u6301\u5236\u5B9A\u597D\u7684\u4EE3\u7801\u89C4\u8303\u3002</p><p>\u65E0\u8BBA\u56E2\u961F\u4EBA\u6570\u591A\u5C11\uFF0C\u4EE3\u7801\u5E94\u8BE5\u540C\u51FA\u4E00\u95E8\u3002</p><h2 id="\u57FA\u672C\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u89C4\u8303" aria-hidden="true">#</a> \u57FA\u672C\u89C4\u8303</h2><h3 id="_1\u3001\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u7F29\u8FDB" aria-hidden="true">#</a> 1\u3001\u7F29\u8FDB</h3><p>\u4F7F\u7528 soft tab\uFF084 \u4E2A\u7A7A\u683C\uFF09\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2\u3001\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5206\u53F7" aria-hidden="true">#</a> 2\u3001\u5206\u53F7</h3><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u540E\u9700\u52A0\u5206\u53F7\uFF1A</p><ul><li>\u53D8\u91CF\u58F0\u660E</li><li>\u8868\u8FBE\u5F0F</li><li>return</li><li>throw</li><li>break</li><li>continue</li><li>do-while</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">/* var declaration */</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">/* expression statement */</span>
x<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token comment">/* do-while */</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
  x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_3\u3001\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u7A7A\u683C" aria-hidden="true">#</a> 3\u3001\u7A7A\u683C</h3><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u9700\u8981\u7A7A\u683C\uFF1A</p><ul><li>\u4E8C\u5143\u8FD0\u7B97\u7B26\u524D\u540E</li><li>\u4E09\u5143\u8FD0\u7B97\u7B26&#39;?:&#39;\u524D\u540E</li><li>\u4EE3\u7801\u5757&#39;{&#39;\u524D</li><li>\u4E0B\u5217\u5173\u952E\u5B57\u524D\uFF1Aelse, while, catch, finally</li><li>\u4E0B\u5217\u5173\u952E\u5B57\u540E\uFF1Aif, else, for, while, do, switch, case, try, catch, finally, with, return, typeof</li><li>\u5355\u884C\u6CE8\u91CA&#39;//&#39;\u540E\uFF08\u82E5\u5355\u884C\u6CE8\u91CA\u548C\u4EE3\u7801\u540C\u884C\uFF0C\u5219&#39;//&#39;\u524D\u4E5F\u9700\u8981\uFF09\uFF0C\u591A\u884C\u6CE8\u91CA&#39;*&#39;\u540E</li><li>\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u524D</li><li>for \u5FAA\u73AF\uFF0C\u5206\u53F7\u540E\u7559\u6709\u4E00\u4E2A\u7A7A\u683C\uFF0C\u524D\u7F6E\u6761\u4EF6\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u9017\u53F7\u540E\u7559\u4E00\u4E2A\u7A7A\u683C</li><li>\u65E0\u8BBA\u662F\u51FD\u6570\u58F0\u660E\u8FD8\u662F\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C&#39;{&#39;\u524D\u4E00\u5B9A\u8981\u6709\u7A7A\u683C</li><li>\u51FD\u6570\u7684\u53C2\u6570\u4E4B\u95F4</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token operator">++</span>x<span class="token punctuation">;</span>
y<span class="token operator">++</span><span class="token punctuation">;</span>
z <span class="token operator">=</span> x <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token operator">++</span>x<span class="token punctuation">;</span>
y<span class="token operator">++</span><span class="token punctuation">;</span>
z <span class="token operator">=</span> x <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// no space before &#39;(&#39;, one space before &#39;{&#39;, one space between function parameters</span>
<span class="token keyword">var</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// no space before &#39;(&#39;</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4\u3001\u5355\u884C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u5355\u884C\u6CE8\u91CA" aria-hidden="true">#</a> 4\u3001\u5355\u884C\u6CE8\u91CA</h3><p>\u53CC\u659C\u7EBF\u540E\uFF0C\u5FC5\u987B\u8DDF\u4E00\u4E2A\u7A7A\u683C\uFF1B\u7F29\u8FDB\u4E0E\u4E0B\u4E00\u884C\u4EE3\u7801\u4FDD\u6301\u4E00\u81F4\uFF1B\u53EF\u4F4D\u4E8E\u4E00\u4E2A\u4EE3\u7801\u884C\u7684\u672B\u5C3E\uFF0C\u4E0E\u4EE3\u7801\u95F4\u9694\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if you made it here, then all security checks passed</span>
  <span class="token function">allowed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> zhangsan <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span> <span class="token comment">// one space after code</span>
</code></pre></div><h3 id="_5\u3001\u591A\u884C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u591A\u884C\u6CE8\u91CA" aria-hidden="true">#</a> 5\u3001\u591A\u884C\u6CE8\u91CA</h3><p>\u6700\u5C11\u4E09\u884C, &#39;*&#39;\u540E\u8DDF\u4E00\u4E2A\u7A7A\u683C\uFF0C\u5177\u4F53\u53C2\u7167\u53F3\u8FB9\u7684\u5199\u6CD5\uFF1B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">/*
 * one space after &#39;*&#39;
 */</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_6\u3001\u6587\u6863\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u6587\u6863\u6CE8\u91CA" aria-hidden="true">#</a> 6\u3001\u6587\u6863\u6CE8\u91CA</h3><p>\u5EFA\u8BAE\u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\u4F7F\u7528\uFF1A</p><ul><li>\u6240\u6709\u5E38\u91CF</li><li>\u6240\u6709\u51FD\u6570</li><li>\u6240\u6709\u7C7B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@func</span>
 * <span class="token keyword">@desc</span> \u4E00\u4E2A\u5E26\u53C2\u6570\u7684\u51FD\u6570
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - \u53C2\u6570a
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> b=1 - \u53C2\u6570b\u9ED8\u8BA4\u503C\u4E3A1
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> c=1 - \u53C2\u6570c\u6709\u4E24\u79CD\u652F\u6301\u7684\u53D6\u503C&lt;/br&gt;1\u2014\u8868\u793Ax&lt;/br&gt;2\u2014\u8868\u793Axx
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">d</span> - \u53C2\u6570d\u4E3A\u4E00\u4E2A\u5BF9\u8C61
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">d<span class="token punctuation">.</span>e</span> - \u53C2\u6570d\u7684e\u5C5E\u6027
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">d<span class="token punctuation">.</span>f</span> - \u53C2\u6570d\u7684f\u5C5E\u6027
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">g</span> - \u53C2\u6570g\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">g<span class="token punctuation">.</span>h</span> - \u53C2\u6570g\u6570\u7EC4\u4E2D\u4E00\u9879\u7684h\u5C5E\u6027
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">g<span class="token punctuation">.</span>i</span> - \u53C2\u6570g\u6570\u7EC4\u4E2D\u4E00\u9879\u7684i\u5C5E\u6027
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">j</span><span class="token punctuation">]</span></span> - \u53C2\u6570j\u662F\u4E00\u4E2A\u53EF\u9009\u53C2\u6570
 */</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> g<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7\u3001\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u5F15\u53F7" aria-hidden="true">#</a> 7\u3001\u5F15\u53F7</h3><p>\u6700\u5916\u5C42\u7EDF\u4E00\u4F7F\u7528\u5355\u5F15\u53F7\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
  z <span class="token operator">=</span> <span class="token string">&#39;&lt;div id=&quot;test&quot;&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_8\u3001\u53D8\u91CF\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a> 8\u3001\u53D8\u91CF\u58F0\u660E</h3><p>\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u6240\u6709\u7684\u53D8\u91CF\u58F0\u660E\u5C3D\u91CF\u63D0\u5230\u51FD\u6570\u9996\u90E8\uFF0C\u7528\u4E00\u4E2A var \u58F0\u660E\uFF0C\u4E0D\u5141\u8BB8\u51FA\u73B0\u4E24\u4E2A\u8FDE\u7EED\u7684 var \u58F0\u660E\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomethingWithItems</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// use one var</span>
  <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
    result <span class="token operator">=</span> value <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span>
    i<span class="token punctuation">,</span>
    len<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_9\u3001\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u51FD\u6570" aria-hidden="true">#</a> 9\u3001\u51FD\u6570</h3><ul><li><p>\u65E0\u8BBA\u662F\u51FD\u6570\u58F0\u660E\u8FD8\u662F\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C&#39;(&#39;\u524D\u4E0D\u8981\u7A7A\u683C\uFF0C\u4F46&#39;{&#39;\u524D\u4E00\u5B9A\u8981\u6709\u7A7A\u683C\uFF1B</p></li><li><p>\u51FD\u6570\u8C03\u7528\u62EC\u53F7\u524D\u4E0D\u9700\u8981\u7A7A\u683C\uFF1B</p></li><li><p>\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5916\u5FC5\u987B\u5305\u4E00\u5C42\u62EC\u53F7\uFF1B</p></li><li><p>\u4E0D\u8981\u7ED9 inline function \u547D\u540D\uFF1B</p></li><li><p>\u53C2\u6570\u4E4B\u95F4\u7528&#39;, &#39;\u5206\u9694\uFF0C\u6CE8\u610F\u9017\u53F7\u540E\u6709\u4E00\u4E2A\u7A7A\u683C\u3002</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// no space before &#39;(&#39;, but one space before&#39;{&#39;</span>
<span class="token keyword">var</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good</span>
<span class="token function">doSomething</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// requires parentheses around immediately invoked function expressions</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// use &#39;, &#39; between function parameters</span>
<span class="token keyword">var</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_10\u3001\u6570\u7EC4\u3001\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u6570\u7EC4\u3001\u5BF9\u8C61" aria-hidden="true">#</a> 10\u3001\u6570\u7EC4\u3001\u5BF9\u8C61</h3><ul><li><p>\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61;</p></li><li><p>\u5BF9\u8C61\u5C5E\u6027\u540D\u4E0D\u9700\u8981\u52A0\u5F15\u53F7\uFF1B</p></li><li><p>\u5BF9\u8C61\u4EE5\u7F29\u8FDB\u7684\u5F62\u5F0F\u4E66\u5199\uFF0C\u4E0D\u8981\u5199\u5728\u4E00\u884C\uFF1B</p></li><li><p>\u6570\u7EC4\u3001\u5BF9\u8C61\u6700\u540E\u4E0D\u8981\u6709\u9017\u53F7\u3002</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_12\u3001\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#_12\u3001\u62EC\u53F7" aria-hidden="true">#</a> 12\u3001\u62EC\u53F7</h3><p>\u4E0B\u5217\u5173\u952E\u5B57\u540E\u5FC5\u987B\u6709\u5927\u62EC\u53F7\uFF08\u5373\u4F7F\u4EE3\u7801\u5757\u7684\u5185\u5BB9\u53EA\u6709\u4E00\u884C\uFF09\uFF1Aif, else, for, while, do, switch, try, catch, finally, with\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_13\u3001null" tabindex="-1"><a class="header-anchor" href="#_13\u3001null" aria-hidden="true">#</a> 13\u3001null</h3><p>\u9002\u7528\u573A\u666F\uFF1A</p><ul><li>\u521D\u59CB\u5316\u4E00\u4E2A\u5C06\u6765\u53EF\u80FD\u88AB\u8D4B\u503C\u4E3A\u5BF9\u8C61\u7684\u53D8\u91CF</li><li>\u4E0E\u5DF2\u7ECF\u521D\u59CB\u5316\u7684\u53D8\u91CF\u505A\u6BD4\u8F83</li><li>\u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\u7684\u51FD\u6570\u7684\u8C03\u7528\u4F20\u53C2</li><li>\u4F5C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570\u7684\u8FD4\u56DE\u503C</li></ul><p>\u4E0D\u9002\u7528\u573A\u666F\uFF1A</p><ul><li>\u4E0D\u8981\u7528 null \u6765\u5224\u65AD\u51FD\u6570\u8C03\u7528\u65F6\u6709\u65E0\u4F20\u53C2</li><li>\u4E0D\u8981\u4E0E\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u505A\u6BD4\u8F83</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// not mean b is not supply</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_14\u3001undefined" tabindex="-1"><a class="header-anchor" href="#_14\u3001undefined" aria-hidden="true">#</a> 14\u3001undefined</h3><ul><li><p>\u6C38\u8FDC\u4E0D\u8981\u76F4\u63A5\u4F7F\u7528 undefined \u8FDB\u884C\u53D8\u91CF\u5224\u65AD\uFF1B</p></li><li><p>\u4F7F\u7528 typeof \u548C\u5B57\u7B26\u4E32&#39;undefined&#39;\u5BF9\u53D8\u91CF\u8FDB\u884C\u5224\u65AD\u3002</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>person <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> person <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_15\u3001jshint" tabindex="-1"><a class="header-anchor" href="#_15\u3001jshint" aria-hidden="true">#</a> 15\u3001jshint</h3><ul><li><p>\u7528&#39;===&#39;, &#39;!==&#39;\u4EE3\u66FF&#39;==&#39;, &#39;!=&#39;\uFF1B</p></li><li><p>for-in \u91CC\u4E00\u5B9A\u8981\u6709 hasOwnProperty \u7684\u5224\u65AD\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u5185\u7F6E\u5BF9\u8C61\u7684\u539F\u578B\u4E0A\u6DFB\u52A0\u65B9\u6CD5\uFF0C\u5982 Array, Date\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u5185\u5C42\u4F5C\u7528\u57DF\u7684\u4EE3\u7801\u91CC\u58F0\u660E\u4E86\u53D8\u91CF\uFF0C\u4E4B\u540E\u5374\u8BBF\u95EE\u5230\u4E86\u5916\u5C42\u4F5C\u7528\u57DF\u7684\u540C\u540D\u53D8\u91CF\uFF1B</p></li><li><p>\u53D8\u91CF\u4E0D\u8981\u5148\u4F7F\u7528\u540E\u58F0\u660E\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u4E00\u53E5\u4EE3\u7801\u4E2D\u5355\u5355\u4F7F\u7528\u6784\u9020\u51FD\u6570\uFF0C\u8BB0\u5F97\u5C06\u5176\u8D4B\u503C\u7ED9\u67D0\u4E2A\u53D8\u91CF\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u540C\u4E2A\u4F5C\u7528\u57DF\u4E0B\u58F0\u660E\u540C\u540D\u53D8\u91CF\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u4E00\u4E9B\u4E0D\u9700\u8981\u7684\u5730\u65B9\u52A0\u62EC\u53F7\uFF0C\u4F8B\uFF1Adelete(a.b)\uFF1B</p></li><li><p>\u4E0D\u8981\u4F7F\u7528\u672A\u58F0\u660E\u7684\u53D8\u91CF\uFF08\u5168\u5C40\u53D8\u91CF\u9700\u8981\u52A0\u5230.jshintrc \u6587\u4EF6\u7684 globals \u5C5E\u6027\u91CC\u9762\uFF09\uFF1B</p></li><li><p>\u4E0D\u8981\u58F0\u660E\u4E86\u53D8\u91CF\u5374\u4E0D\u4F7F\u7528\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u5E94\u8BE5\u505A\u6BD4\u8F83\u7684\u5730\u65B9\u505A\u8D4B\u503C\uFF1B</p></li><li><p>debugger \u4E0D\u8981\u51FA\u73B0\u5728\u63D0\u4EA4\u7684\u4EE3\u7801\u91CC\uFF1B</p></li><li><p>\u6570\u7EC4\u4E2D\u4E0D\u8981\u5B58\u5728\u7A7A\u5143\u7D20\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u5FAA\u73AF\u5185\u90E8\u58F0\u660E\u51FD\u6570\uFF1B</p></li><li><p>\u4E0D\u8981\u50CF\u8FD9\u6837\u4F7F\u7528\u6784\u9020\u51FD\u6570\uFF0C\u4F8B\uFF1Anew function () { ... }, new Object\uFF1B</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// be sure that obj[key] belongs to the object and was not inherited</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good</span>
<span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>attr<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>attr<span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good</span>
<span class="token keyword">var</span> singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> privateVar<span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">publicMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    privateVar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">publicMethod2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    privateVar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5176\u4ED6\u6742\u9879\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6742\u9879\u89C4\u8303" aria-hidden="true">#</a> \u5176\u4ED6\u6742\u9879\u89C4\u8303</h2><ul><li><p>\u4E0D\u8981\u6DF7\u7528 tab \u548C space\uFF1B</p></li><li><p>\u4E0D\u8981\u5728\u4E00\u5904\u4F7F\u7528\u591A\u4E2A tab \u6216 space\uFF1B</p></li><li><p>\u6362\u884C\u7B26\u7EDF\u4E00\u7528&#39;LF&#39;\uFF1B</p></li><li><p>\u5BF9\u4E0A\u4E0B\u6587 this \u7684\u5F15\u7528\u53EA\u80FD\u4F7F\u7528&#39;_this&#39;, &#39;that&#39;, &#39;self&#39;\u5176\u4E2D\u4E00\u4E2A\u6765\u547D\u540D\uFF1B</p></li><li><p>\u884C\u5C3E\u4E0D\u8981\u6709\u7A7A\u767D\u5B57\u7B26\uFF1B</p></li><li><p>switch \u7684 falling through \u548C no default \u7684\u60C5\u51B5\u4E00\u5B9A\u8981\u6709\u6CE8\u91CA\u7279\u522B\u8BF4\u660E\uFF1B</p></li><li><p>\u4E0D\u5141\u8BB8\u6709\u7A7A\u7684\u4EE3\u7801\u5757\u3002</p></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// not good</span>
<span class="token keyword">var</span> a   <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// not good</span>
    <span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token comment">// good</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token comment">// good</span>
    <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token comment">// good</span>
    <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token operator">...</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token operator">...</span>
    <span class="token comment">// why fall through</span>
    <span class="token keyword">case</span> <span class="token number">4</span>
        <span class="token operator">...</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token comment">// why no default</span>
<span class="token punctuation">}</span>

<span class="token comment">// not good with empty block</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><h3 id="_1\u3001javascript-\u4EE3\u7801\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_1\u3001javascript-\u4EE3\u7801\u683C\u5F0F\u5316" aria-hidden="true">#</a> 1\u3001JavaScript \u4EE3\u7801\u683C\u5F0F\u5316</h3><blockquote><p>JavaScript \u7684\u4EE3\u7801\u683C\u5F0F\u5316\uFF0C\u80FD\u89E3\u51B3\u90E8\u5206 JavaScript \u4EE3\u7801\u89C4\u8303\uFF0C\u5982\u4EE3\u7801\u7F29\u8FDB\u3001\u7A7A\u683C\u3001\u5206\u53F7\u3001\u6362\u884C\u3001\u5F15\u53F7\u3001\u5927\u5C0F\u62EC\u53F7\u95F4\u9694\u5BF9\u79F0\u7B49\u3002\u6240\u4EE5\u80FD\u89E3\u51B3\u7684\u8FD9\u4E9B\u89C4\u8303\u4EC5\u4F9B\u53C2\u8003\u3002</p></blockquote>`,59),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","index.html.vue"]]);export{i as default};
