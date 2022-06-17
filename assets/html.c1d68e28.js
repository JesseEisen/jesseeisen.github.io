import{_ as a}from"./InComing.vue_vue&type=script&setup=true&lang.8324b6a6.js";import{_ as n}from"./app.ee4e96c4.js";import{h as t,o as s,a as e,w as l,b as o,k as p}from"./vendor.5a394a79.js";const u=o("p",null,"单纯的 HTML 标记似乎在无法表达更多的样式，但是往往也会有一个令人惊奇的东西存在。这篇文章主要用来记录下这些内容。",-1),c=o("h2",{id:"progress-bar"},[o("a",{class:"header-anchor",href:"#progress-bar","aria-hidden":"true"},"#"),p(" progress bar")],-1),r=o("p",null,[o("code",null,"<meter>"),p(" 是一个原生的标签用来表示已知范围的标量或者分数值。近似的我们可以用这个来表示一个进度条的样式：")],-1),i=o("p",null,[o("label",{for:"fuel"},"Fuel level:"),o("meter",{id:"fuel",min:"0",max:"100",low:"33",high:"66",optimum:"80",value:"50"}," at 50/100 ")],-1),k=o("pre",{class:"language-html"},[o("code",{class:"language-html"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("label")]),p(),o("span",{class:"token attr-name"},"for"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("fuel"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p("Fuel level:"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("label")]),o("span",{class:"token punctuation"},">")]),p("\n\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("meter")]),p(),o("span",{class:"token attr-name"},"id"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("fuel"),o("span",{class:"token punctuation"},'"')]),p("\n       "),o("span",{class:"token attr-name"},"min"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("0"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"max"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("100"),o("span",{class:"token punctuation"},'"')]),p("\n       "),o("span",{class:"token attr-name"},"low"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("33"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"high"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("66"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"optimum"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("80"),o("span",{class:"token punctuation"},'"')]),p("\n       "),o("span",{class:"token attr-name"},"value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("50"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p("\n    at 50/100\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("meter")]),o("span",{class:"token punctuation"},">")]),p("\n")])],-1),m=o("p",null,[p("目前大部分浏览器都支持这个，除了IE。这个标签的所有属性都在上面的例子中了，这些参数会把区间分为 "),o("code",null,"[min, low]"),p(" 和 "),o("code",null,"[high, max]"),p(" 这两个。 value 在这两个区间的某个一个里面时呈现出不同的外貌样式。 同时 "),o("code",null,"optimun"),p(" 的值在哪个区间内，那个区间会被认为是更佳的取值范围。")],-1),g=o("h2",{id:"ruby"},[o("a",{class:"header-anchor",href:"#ruby","aria-hidden":"true"},"#"),p(" ruby")],-1),h=o("p",null,[p("ruby 标签在 HTML 中用于东亚字符的注音使用，形式类似于 "),o("ruby",null,[p("汉"),o("rp",null,"("),o("rt",null,"han"),o("rp",null,")")]),p(" 这样的形式。基本的语法如下：")],-1),d=o("pre",{class:"language-html"},[o("code",{class:"language-html"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ruby")]),o("span",{class:"token punctuation"},">")]),p("汉"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("rp")]),o("span",{class:"token punctuation"},">")]),p("("),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("rp")]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("rt")]),o("span",{class:"token punctuation"},">")]),p("han"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("rt")]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("rp")]),o("span",{class:"token punctuation"},">")]),p(")"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("rp")]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ruby")]),o("span",{class:"token punctuation"},">")]),p("\n")])],-1),b=o("p",null,[p("其中"),o("code",null,"rp"),p(" 是用于在不支持 ruby 标签的情况下使用包裹的字符去替代，上面例子是括号。 "),o("code",null,"rt"),p(" 中间的内容是注音的具体内容。")],-1),v={expose:[],setup(p){const v={title:"Html Make Fun",date:"2020-11-29T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"raw html utilities",public:!0,tag:"20X11 html",meta:[{property:"og:title",content:"Html Make Fun"},{property:"og:description",content:"raw html utilities"},{name:"description",content:"raw html utilities"}]};return t({title:"Html Make Fun",meta:[{property:"og:title",content:"Html Make Fun"},{property:"og:description",content:"raw html utilities"},{name:"description",content:"raw html utilities"}]}),(t,p)=>{const f=a,y=n;return s(),e(y,{frontmatter:v},{default:l((()=>[o("div",null,[o(f,{comings:[{text:"css",url:"/notes/css"}]}),u,c,r,i,k,m,g,h,d,b])])),_:1})}}};export default v;