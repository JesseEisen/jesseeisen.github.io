import{_ as n}from"./app.2432b84d.js";import{h as s,o as a,a as t,w as o,b as p,k as e}from"./vendor.5a394a79.js";const c=p("div",null,[p("h2",{id:"json-stringify"},[p("a",{class:"header-anchor",href:"#json-stringify","aria-hidden":"true"},"#"),e(" Json Stringify")]),p("ul",null,[p("li",null,[p("a",{href:"https://ourcodeworld.com/articles/read/112/how-to-pretty-print-beautify-a-json-string",target:"_blank",rel:"noopener"},"https://ourcodeworld.com/articles/read/112/how-to-pretty-print-beautify-a-json-string")])]),p("h2",{id:"version-sort"},[p("a",{class:"header-anchor",href:"#version-sort","aria-hidden":"true"},"#"),e(" Version sort")]),p("p",null,"正常通过字符串比较是不足以应对大部分场景的，因为字符串是通过 unicode 的顺序去排序的。所以会出现如下情况："),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[p("span",{class:"token operator"},">"),e(" a"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'5'"),e("\n"),p("span",{class:"token string"},"'5'"),e("\n"),p("span",{class:"token operator"},">"),e(" b"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'201'"),e("\n"),p("span",{class:"token string"},"'201'"),e("\n"),p("span",{class:"token operator"},">"),e(" a "),p("span",{class:"token operator"},"<"),e(" b\n"),p("span",{class:"token boolean"},"false"),e("\n")])]),p("p",null,"所以单纯的字符串比较是不合理的，所以当我们需要比较版本号，普适的方式是循环比较法："),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[e("arr"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"sort"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},[e("a"),p("span",{class:"token punctuation"},","),e(" b")]),p("span",{class:"token punctuation"},")"),e(),p("span",{class:"token operator"},"=>"),e(),p("span",{class:"token punctuation"},"{"),e("\n    "),p("span",{class:"token keyword"},"let"),e(" i "),p("span",{class:"token operator"},"="),e(),p("span",{class:"token number"},"0"),p("span",{class:"token punctuation"},";"),e("\n    "),p("span",{class:"token keyword"},"const"),e(" arr1 "),p("span",{class:"token operator"},"="),e(" a"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"split"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n    "),p("span",{class:"token keyword"},"const"),e(" arr2 "),p("span",{class:"token operator"},"="),e(" b"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"split"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n\n    "),p("span",{class:"token keyword"},"while"),e(),p("span",{class:"token punctuation"},"("),p("span",{class:"token boolean"},"true"),p("span",{class:"token punctuation"},")"),e(),p("span",{class:"token punctuation"},"{"),e("\n        "),p("span",{class:"token keyword"},"const"),e(" s1 "),p("span",{class:"token operator"},"="),e(" arr1"),p("span",{class:"token punctuation"},"["),e("i"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},";"),e("\n        "),p("span",{class:"token keyword"},"const"),e(" s2 "),p("span",{class:"token operator"},"="),e(" arr2"),p("span",{class:"token punctuation"},"["),e("i"),p("span",{class:"token operator"},"++"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},";"),e("\n\n        "),p("span",{class:"token keyword"},"if"),e(),p("span",{class:"token punctuation"},"("),e("s1 "),p("span",{class:"token operator"},"==="),e(),p("span",{class:"token keyword"},"undefined"),e(),p("span",{class:"token operator"},"||"),e(" s2 "),p("span",{class:"token operator"},"==="),e(),p("span",{class:"token keyword"},"undefined"),p("span",{class:"token punctuation"},")"),e(),p("span",{class:"token punctuation"},"{"),e("\n            "),p("span",{class:"token keyword"},"return"),e(" arr2"),p("span",{class:"token punctuation"},"."),e("length "),p("span",{class:"token operator"},"-"),e(" arr1"),p("span",{class:"token punctuation"},"."),e("length"),p("span",{class:"token punctuation"},";"),e("\n        "),p("span",{class:"token punctuation"},"}"),e("\n\n        "),p("span",{class:"token keyword"},"if"),e(),p("span",{class:"token punctuation"},"("),e("s1 "),p("span",{class:"token operator"},"==="),e(" s2"),p("span",{class:"token punctuation"},")"),e(),p("span",{class:"token keyword"},"continue"),p("span",{class:"token punctuation"},";"),e("\n\n        "),p("span",{class:"token keyword"},"return"),e(" s2 "),p("span",{class:"token operator"},"-"),e(" s1"),p("span",{class:"token punctuation"},";"),e("\n    "),p("span",{class:"token punctuation"},"}"),e("\n"),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n")])]),p("p",null,"此外还有一种加权的方式，这种方式适合版本号格式比较固定的情况。当版本的格式不够统一时需要多操作一步。具体代码如下："),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[p("span",{class:"token keyword"},"const"),e(" maxLen "),p("span",{class:"token operator"},"="),e(" Math"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"max"),p("span",{class:"token punctuation"},"("),e("\n    "),p("span",{class:"token operator"},"..."),e("arr"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"map"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},"item"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"=>"),e("item"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"split"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"."),e("length"),p("span",{class:"token punctuation"},")"),e("\n"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n\n"),p("span",{class:"token keyword"},"const"),e(),p("span",{class:"token function-variable function"},"reducer"),e(),p("span",{class:"token operator"},"="),e(),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},[e("acc"),p("span",{class:"token punctuation"},","),e("value"),p("span",{class:"token punctuation"},","),e("index")]),p("span",{class:"token punctuation"},")"),e(),p("span",{class:"token operator"},"=>"),e(" \n    acc"),p("span",{class:"token operator"},"+"),p("span",{class:"token punctuation"},"("),p("span",{class:"token operator"},"+"),e("value"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"*"),e("Math"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"pow"),p("span",{class:"token punctuation"},"("),e("p"),p("span",{class:"token punctuation"},","),e("maxLen"),p("span",{class:"token operator"},"-"),e("index"),p("span",{class:"token operator"},"-"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n\n"),p("span",{class:"token keyword"},"const"),e(),p("span",{class:"token function-variable function"},"gen"),e(),p("span",{class:"token operator"},"="),e(),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},"arr"),p("span",{class:"token punctuation"},")"),e(),p("span",{class:"token operator"},"=>"),e("\n    arr"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"split"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"reduce"),p("span",{class:"token punctuation"},"("),e("reducer"),p("span",{class:"token punctuation"},","),p("span",{class:"token number"},"0"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n\narr"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"sort"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},[e("a"),p("span",{class:"token punctuation"},","),e("b")]),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"=>"),e(),p("span",{class:"token function"},"gen"),p("span",{class:"token punctuation"},"("),e("a"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},">"),p("span",{class:"token function"},"gen"),p("span",{class:"token punctuation"},"("),e("b"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"?"),p("span",{class:"token operator"},"-"),p("span",{class:"token number"},"1"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),e("\n\nconsole"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"log"),p("span",{class:"token punctuation"},"("),e("arr"),p("span",{class:"token punctuation"},")"),e("\n")])]),p("h2",{id:"array-deep-copy"},[p("a",{class:"header-anchor",href:"#array-deep-copy","aria-hidden":"true"},"#"),e(" Array Deep Copy")]),p("p",null,"深拷贝一般是在数组里面的内容是对象的时候使用，可以通过如下的例子来看下区别："),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[p("span",{class:"token operator"},">"),e(" a "),p("span",{class:"token operator"},"="),e(),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),p("span",{class:"token number"},"3"),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" b "),p("span",{class:"token operator"},"="),e(),p("span",{class:"token punctuation"},"["),p("span",{class:"token operator"},"..."),e("a"),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" a"),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"5"),e("\n"),p("span",{class:"token number"},"5"),e("\n"),p("span",{class:"token operator"},">"),e(" b\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"]"),e("\n")])]),p("p",null,"可以看到当数组内容是简单类型时，修改源数组的内容，不会对拷贝后的数组产生影响。下面是一个对象拷贝的例子："),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[p("span",{class:"token operator"},">"),e(" a "),p("span",{class:"token operator"},"="),e(),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e("k1"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e("k1"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"3"),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" b "),p("span",{class:"token operator"},"="),e(),p("span",{class:"token punctuation"},"["),p("span",{class:"token operator"},"..."),e("a"),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" a"),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"0"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},"."),e("k1"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"5"),e("\n"),p("span",{class:"token number"},"5"),e("\n"),p("span",{class:"token operator"},">"),e(" b\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n")])]),p("p",null,"可以看到，当修改了 a 中内容后，b 中的内容发生了变化。此时我们需要使用深拷贝来解决这个问题。"),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[p("span",{class:"token operator"},">"),e(" c "),p("span",{class:"token operator"},"="),e(" a"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"map"),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},"item"),e(),p("span",{class:"token operator"},"=>"),e(),p("span",{class:"token punctuation"},"{"),e(),p("span",{class:"token keyword"},"return"),e(),p("span",{class:"token punctuation"},"{"),e(),p("span",{class:"token operator"},"..."),e("item"),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},")"),e("\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" a\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" a"),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"0"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},"."),e("k1"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"6"),e("\n"),p("span",{class:"token number"},"6"),e("\n"),p("span",{class:"token operator"},">"),e(" c\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e("\n")])]),p("p",null,"可以看到此时的 c 并没有因为 a 中的内容发生变化而发生变化。 还有另外一种深拷贝方式，相比较于 map 的方式略慢一些。"),p("pre",{class:"language-javascript"},[p("code",{class:"language-javascript"},[p("span",{class:"token operator"},">"),e(" d "),p("span",{class:"token operator"},"="),e(),p("span",{class:"token constant"},"JSON"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"parse"),p("span",{class:"token punctuation"},"("),p("span",{class:"token constant"},"JSON"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"stringify"),p("span",{class:"token punctuation"},"("),e("a"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),e("\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" a\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n"),p("span",{class:"token operator"},">"),e(" a"),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"0"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},"."),e("k1"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"6"),e("\n"),p("span",{class:"token number"},"6"),e("\n"),p("span",{class:"token operator"},">"),e(" d\n"),p("span",{class:"token punctuation"},"["),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"5"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),e(),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),e(),p("span",{class:"token punctuation"},"{"),e(" k1"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),e(" k2"),p("span",{class:"token operator"},":"),e(),p("span",{class:"token number"},"3"),e(),p("span",{class:"token punctuation"},"}"),e(),p("span",{class:"token punctuation"},"]"),e("\n")])])],-1),u={expose:[],setup(p){const e={title:"Javascript Some Tricks",date:"2020-06-30T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"collection tricks of js",public:!0,tag:"21M14 javascript",meta:[{property:"og:title",content:"Javascript Some Tricks"},{property:"og:description",content:"collection tricks of js"},{name:"description",content:"collection tricks of js"}]};return s({title:"Javascript Some Tricks",meta:[{property:"og:title",content:"Javascript Some Tricks"},{property:"og:description",content:"collection tricks of js"},{name:"description",content:"collection tricks of js"}]}),(s,p)=>{const u=n;return a(),t(u,{frontmatter:e},{default:o((()=>[c])),_:1})}}};export default u;
