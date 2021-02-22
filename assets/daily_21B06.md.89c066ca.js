import{l as a,f as n,A as s}from"./framework.ab59a038.js";const t='{"title":"21B06","description":"","frontmatter":{"title":"21B06","subtitle":"Use CSS the correct way","category":"css","date":"2021-01-20T00:00:00.000Z"},"headers":[{"level":2,"title":"marker","slug":"marker"}],"relativePath":"daily/21B06.md","lastUpdated":1612079605991}',p={},e=s('<p><div class="table-of-contents"><ul><li><a href="#marker">marker</a></li></ul></div></p><hr><p><i class="releated">incoming(1):</i> {<a href="/daily/20X11.html">html</a>}</p><p>本篇主要记录下一些可以直接通过 css 而无需过多使用 js 的例子，同时也会记录一些 css 的技巧等等。</p><h2 id="marker"><a class="header-anchor" href="#marker" aria-hidden="true">#</a> marker</h2><p>这是一个伪元素，通常是在<code>&lt;li&gt;</code>或者<code>&lt;summary&gt;</code> 上使用，用于修饰列表之前的标记样式，比如：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n\n/*css*/\nul li {\n    list-style-type: decimal-leading-zero;\n}\n\nul li::marker {\n    color:#777;\n    font-variant-numeric: tabular-nums;\n}\n</code></pre></div><p>这个样式会修饰列表前的数字为灰色，且按照数字等宽，易于像表格那样对齐的形式显示。</p>',8);p.render=function(s,t,p,l,c,o){return a(),n("div",null,[e])};export default p;export{t as __pageData};
