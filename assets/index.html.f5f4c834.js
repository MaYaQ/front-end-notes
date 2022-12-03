import{_ as n,o as s,c as a,b as p}from"./app.db14d82c.js";const t={},o=p(`<p><img src="https://cdn.jsdelivr.net/gh/MaYaQ/super-duper-train/img/front-end-develop-standard06-1.jpg" alt=""></p><h2 id="\u6700\u4F73\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u539F\u5219" aria-hidden="true">#</a> \u6700\u4F73\u539F\u5219</h2><p>\u575A\u6301\u5236\u5B9A\u597D\u7684\u4EE3\u7801\u89C4\u8303\u3002</p><p>\u65E0\u8BBA\u56E2\u961F\u4EBA\u6570\u591A\u5C11\uFF0C\u4EE3\u7801\u5E94\u8BE5\u540C\u51FA\u4E00\u95E8\u3002</p><h2 id="es6-\u57FA\u672C\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#es6-\u57FA\u672C\u89C4\u8303" aria-hidden="true">#</a> ES6 \u57FA\u672C\u89C4\u8303</h2><h3 id="_1\u3001\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5F15\u7528" aria-hidden="true">#</a> 1\u3001\u5F15\u7528</h3><ul><li><p>\u5BF9\u6240\u6709\u7684\u5F15\u7528\u4F7F\u7528 const \uFF1B\u4E0D\u8981\u4F7F\u7528 var\uFF1B</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u8FD9\u80FD\u786E\u4FDD\u4F60\u65E0\u6CD5\u5BF9\u5F15\u7528\u91CD\u65B0\u8D4B\u503C\uFF0C\u4E5F\u4E0D\u4F1A\u5BFC\u81F4\u51FA\u73B0 bug \u6216\u96BE\u4EE5\u7406\u89E3\u3002</p></blockquote></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p>\u5982\u679C\u4F60\u4E00\u5B9A\u9700\u8981\u53EF\u53D8\u52A8\u7684\u5F15\u7528\uFF0C\u4F7F\u7528 let \u4EE3\u66FF var\uFF1B</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A let \u662F\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u800C var \u662F\u51FD\u6570\u4F5C\u7528\u57DF\u3002</p></blockquote></li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good, use the let.</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u6CE8\u610F let \u548C const \u90FD\u662F\u5757\u7EA7\u4F5C\u7528\u57DF\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// const \u548C let \u53EA\u5B58\u5728\u4E8E\u5B83\u4EEC\u88AB\u5B9A\u4E49\u7684\u533A\u5757\u5185\u3002</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
</code></pre></div><h3 id="_2\u3001\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5BF9\u8C61" aria-hidden="true">#</a> 2\u3001\u5BF9\u8C61</h3><ul><li>\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528\u5BF9\u8C61\u65B9\u6CD5\u7684\u7B80\u5199\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function-variable function">addValue</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function">addValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528\u5BF9\u8C61\u5C5E\u6027\u503C\u7684\u7B80\u5199\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&quot;Luke Skywalker&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lukeSkywalker</span><span class="token operator">:</span> lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_3\u3001\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6570\u7EC4" aria-hidden="true">#</a> 3\u3001\u6570\u7EC4</h3><ul><li>\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u6570\u7EC4\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5411\u6570\u7EC4\u6DFB\u52A0\u5143\u7D20\u65F6\u4F7F\u7528 Arrary#push \u66FF\u4EE3\u76F4\u63A5\u8D4B\u503C\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> someStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
someStack<span class="token punctuation">[</span>someStack<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;abracadabra&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
someStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;abracadabra&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528\u62D3\u5C55\u8FD0\u7B97\u7B26 ... \u590D\u5236\u6570\u7EC4\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528 Array#from \u628A\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nodes <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_4\u3001\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u89E3\u6784" aria-hidden="true">#</a> 4\u3001\u89E3\u6784</h3><ul><li>\u4F7F\u7528\u89E3\u6784\u5B58\u53D6\u548C\u4F7F\u7528\u591A\u5C5E\u6027\u5BF9\u8C61\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">;</span>
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5BF9\u6570\u7EC4\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
</code></pre></div><h3 id="_5\u3001strings-\u5B57\u7B26\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_5\u3001strings-\u5B57\u7B26\u5904\u7406" aria-hidden="true">#</a> 5\u3001Strings \u5B57\u7B26\u5904\u7406</h3><p>\u7A0B\u5E8F\u5316\u751F\u6210\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\u4EE3\u66FF\u5B57\u7B26\u4E32\u8FDE\u63A5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;How are you, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&quot;How are you, &quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6\u3001\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> 6\u3001\u7BAD\u5934\u51FD\u6570</h3><p>\u5F53\u4F60\u5FC5\u987B\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08\u6216\u4F20\u9012\u4E00\u4E2A\u533F\u540D\u51FD\u6570\uFF09\u65F6\uFF0C\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7B26\u53F7\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u7BAD\u5934\u51FD\u6570\u521B\u9020\u4E86\u65B0\u7684\u4E00\u4E2A this \u6267\u884C\u73AF\u5883\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u800C\u4E14\u8FD9\u6837\u7684\u5199\u6CD5\u66F4\u4E3A\u7B80\u6D01\u3002</p></blockquote><blockquote><p>\u4EC0\u4E48\u65F6\u5019\u4E0D\u4F7F\u7528\uFF1F\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u76F8\u5F53\u590D\u6742\u7684\u51FD\u6570\uFF0C\u4F60\u6216\u8BB8\u53EF\u4EE5\u628A\u903B\u8F91\u90E8\u5206\u8F6C\u79FB\u5230\u4E00\u4E2A\u51FD\u6570\u58F0\u660E\u4E0A\u3002</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u9002\u5408\u7528\u4E00\u884C\u5199\u51FA\u5E76\u4E14\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u90A3\u5C31\u628A\u82B1\u62EC\u53F7\u3001\u5706\u62EC\u53F7\u548C return \u90FD\u7701\u7565\u6389\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u90A3\u5C31\u4E0D\u8981\u7701\u7565\u3002</p><blockquote><p>\u8BED\u6CD5\u7CD6\u3002\u5728\u94FE\u5F0F\u8C03\u7528\u4E2D\u53EF\u8BFB\u6027\u5F88\u9AD8\u3002</p></blockquote><blockquote><p>\u4EC0\u4E48\u65F6\u5019\u4E0D\u4F7F\u7528\uFF1F\u5F53\u4F60\u6253\u7B97\u56DE\u4F20\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\u3002</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> total <span class="token operator">+</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_7\u3001\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u6784\u9020\u5668" aria-hidden="true">#</a> 7\u3001\u6784\u9020\u5668</h3><ul><li>\u4F7F\u7528 class\u3002\u907F\u514D\u76F4\u63A5\u64CD\u4F5C prototype\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Queue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u7528 extends \u7EE7\u627F\u3002extends \u662F\u4E00\u4E2A\u5185\u5EFA\u7684\u539F\u578B\u7EE7\u627F\u65B9\u6CD5\u5E76\u4E14\u4E0D\u4F1A\u7834\u574F instanceof\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;inherits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">PeekableQueue</span><span class="token punctuation">(</span><span class="token parameter">contents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Queue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PeekableQueue<span class="token punctuation">,</span> Queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PeekableQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">PeekableQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE this \u6765\u5E2E\u52A9\u94FE\u5F0F\u8C03\u7528\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true</span>
luke<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_8\u3001\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> 8\u3001\u51FD\u6570\u53C2\u6570</h3><ul><li>\u4E0D\u8981\u4F7F\u7528 arguments\u3002\u53EF\u4EE5\u9009\u62E9 rest \u8BED\u6CD5 ... \u66FF\u4EE3\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u76F4\u63A5\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u6307\u5B9A\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u8981\u4F7F\u7528\u4E00\u4E2A\u53D8\u5316\u7684\u51FD\u6570\u53C2\u6570\uFF1B</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// really bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0D\uFF01\u6211\u4EEC\u4E0D\u5E94\u8BE5\u6539\u53D8\u51FD\u6570\u53C2\u6570\u3002</span>
  <span class="token comment">// \u66F4\u52A0\u7CDF\u7CD5: \u5982\u679C\u53C2\u6570 opts \u662F false \u7684\u8BDD\uFF0C\u5B83\u5C31\u4F1A\u88AB\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u3002</span>
  <span class="token comment">// \u4F46\u8FD9\u6837\u7684\u5199\u6CD5\u4F1A\u9020\u6210\u4E00\u4E9B Bugs\u3002</span>
  <span class="token comment">//\uFF08\u8BD1\u6CE8\uFF1A\u4F8B\u5982\u5F53 opts \u88AB\u8D4B\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0Copts \u4ECD\u7136\u4F1A\u88AB\u4E0B\u4E00\u884C\u4EE3\u7801\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002\uFF09</span>
  opts <span class="token operator">=</span> opts <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// still bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_9\u3001\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u8FED\u4EE3\u5668" aria-hidden="true">#</a> 9\u3001\u8FED\u4EE3\u5668</h3><p>\u4E0D\u8981\u4F7F\u7528 iterators\u3002\u4F7F\u7528\u9AD8\u9636\u51FD\u6570\u4F8B\u5982 map() \u548C reduce() \u66FF\u4EE3 for-of\uFF1B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>sum <span class="token operator">+=</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token comment">// best (use the functional force)</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sum <span class="token operator">===</span> <span class="token number">15</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_10\u3001\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u6A21\u5757" aria-hidden="true">#</a> 10\u3001\u6A21\u5757</h3><ul><li>\u4F7F\u7528\u6A21\u7EC4 (import/export) \u800C\u4E0D\u662F\u5176\u4ED6\u975E\u6807\u51C6\u6A21\u5757\u7CFB\u7EDF\u3002\u4F60\u53EF\u4EE5\u7F16\u8BD1\u4E3A\u4F60\u559C\u6B22\u7684\u6A21\u5757\u7CFB\u7EDF\uFF1B</li></ul><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u6A21\u5757\u5C31\u662F\u672A\u6765\uFF0C\u8BA9\u6211\u4EEC\u5F00\u59CB\u8FC8\u5411\u672A\u6765\u5427\u3002</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> AirbnbStyleGuide <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>

<span class="token comment">// ok</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4E0D\u8981\u4F7F\u7528\u901A\u914D\u7B26 import\uFF1B</li></ul><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u8FD9\u6837\u80FD\u786E\u4FDD\u4F60\u53EA\u6709\u4E00\u4E2A\u9ED8\u8BA4 export\u3002</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&quot;./AirbnbStyleGuide&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&quot;./AirbnbStyleGuide&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4E0D\u8981\u4ECE import \u4E2D\u76F4\u63A5 export\u3002</li></ul><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u867D\u7136\u4E00\u884C\u4EE3\u7801\u7B80\u6D01\u660E\u4E86\uFF0C\u4F46\u8BA9 import \u548C export \u5404\u53F8\u5176\u804C\u8BA9\u4E8B\u60C5\u80FD\u4FDD\u6301\u4E00\u81F4\u3002</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// filename es6.js</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> es6 <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./airbnbStyleGuide&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token comment">// filename es6.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><h3 id="_1\u3001javascript-\u4EE3\u7801\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_1\u3001javascript-\u4EE3\u7801\u683C\u5F0F\u5316" aria-hidden="true">#</a> 1\u3001JavaScript \u4EE3\u7801\u683C\u5F0F\u5316</h3><blockquote><p>JavaScript \u7684\u4EE3\u7801\u683C\u5F0F\u5316\uFF0C\u80FD\u89E3\u51B3\u90E8\u5206 JavaScript \u4EE3\u7801\u89C4\u8303\uFF0C\u5982\u4EE3\u7801\u7F29\u8FDB\u3001\u7A7A\u683C\u3001\u5206\u53F7\u3001\u6362\u884C\u3001\u5F15\u53F7\u3001\u5927\u5C0F\u62EC\u53F7\u95F4\u9694\u5BF9\u79F0\u7B49\u3002\u6240\u4EE5\u80FD\u89E3\u51B3\u7684\u8FD9\u4E9B\u89C4\u8303\u4EC5\u4F9B\u53C2\u8003\u3002</p></blockquote>`,73),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","index.html.vue"]]);export{i as default};
