import{_ as n}from"./LinkItem.c8df38c8.js";import{_ as s}from"./app.ee4e96c4.js";import{h as a,o as t,a as e,w as o,b as p,k as c}from"./vendor.5a394a79.js";const l=p("p",null,"本篇笔记记录一些在类 Unix 系统上操作查看网络相关的内容，包括一些基本网络管理，查询，性能监测等等内容。",-1),r=p("h2",{id:"抓包"},[p("a",{class:"header-anchor",href:"#抓包","aria-hidden":"true"},"#"),c(" 抓包")],-1),u=p("p",null,"一般我们会使用 wireshark 来抓包，这个工具可以抓取网络中的数据包，并且可以对数据包进行分析。但是在 Linux 上我们可以通过如下的方式进行抓包：",-1),k=p("pre",{class:"language-bash"},[p("code",{class:"language-bash"},[p("span",{class:"token function"},"sudo"),c(" tcpdump -s "),p("span",{class:"token number"},"0"),c(" -A "),p("span",{class:"token string"},"'tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420'"),c("\n")])],-1),i=p("p",null,"tcpdump过滤HTTP的POST请求:",-1),m=p("pre",{class:"language-bash"},[p("code",{class:"language-bash"},[p("span",{class:"token function"},"sudo"),c(" tcpdump -s "),p("span",{class:"token number"},"0"),c(" -A "),p("span",{class:"token string"},"'tcp dst port 80 and (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354)'"),c("\n")])],-1),d=p("p",null,"tcpdump过滤HTTP的请求和响应头信息，以及请求和响应消息体信息：",-1),b=p("pre",{class:"language-bash"},[p("code",{class:"language-bash"},[c("tcpdump -A -s "),p("span",{class:"token number"},"0"),c(),p("span",{class:"token string"},[c("'tcp port 80 and "),p("span",{class:"token variable"},[p("span",{class:"token punctuation"},"(("),p("span",{class:"token punctuation"},"("),c("ip["),p("span",{class:"token number"},"2"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"2"),c("] "),p("span",{class:"token operator"},"-"),c(),p("span",{class:"token punctuation"},"(("),c("ip["),p("span",{class:"token number"},"0"),c("]"),p("span",{class:"token operator"},"&"),p("span",{class:"token number"},"0xf"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"<<"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},"))")]),c(" - "),p("span",{class:"token variable"},[p("span",{class:"token punctuation"},"(("),c("tcp["),p("span",{class:"token number"},"12"),c("]"),p("span",{class:"token operator"},"&"),p("span",{class:"token number"},"0xf0"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},">>"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},"))")]),c(" != 0)'")]),c("\ntcpdump -X -s "),p("span",{class:"token number"},"0"),c(),p("span",{class:"token string"},[c("'tcp port 80 and "),p("span",{class:"token variable"},[p("span",{class:"token punctuation"},"(("),p("span",{class:"token punctuation"},"("),c("ip["),p("span",{class:"token number"},"2"),p("span",{class:"token operator"},":"),p("span",{class:"token number"},"2"),c("] "),p("span",{class:"token operator"},"-"),c(),p("span",{class:"token punctuation"},"(("),c("ip["),p("span",{class:"token number"},"0"),c("]"),p("span",{class:"token operator"},"&"),p("span",{class:"token number"},"0xf"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"<<"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},"))")]),c(" - "),p("span",{class:"token variable"},[p("span",{class:"token punctuation"},"(("),c("tcp["),p("span",{class:"token number"},"12"),c("]"),p("span",{class:"token operator"},"&"),p("span",{class:"token number"},"0xf0"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},">>"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},"))")]),c(" != 0)'")]),c("\n")])],-1),g=p("h2",{id:"查看端口使用情况"},[p("a",{class:"header-anchor",href:"#查看端口使用情况","aria-hidden":"true"},"#"),c(" 查看端口使用情况")],-1),h=p("pre",{class:"language-bash"},[p("code",{class:"language-bash"},[c("$ "),p("span",{class:"token function"},"netstat"),c(" -ntlp   "),p("span",{class:"token comment"},"#查看当前所有tcp端口·"),c("\n$ "),p("span",{class:"token function"},"netstat"),c(" -ntulp "),p("span",{class:"token operator"},"|"),c(),p("span",{class:"token function"},"grep"),c(),p("span",{class:"token number"},"80"),c("   "),p("span",{class:"token comment"},"#查看所有80端口使用情况·"),c("\n$ "),p("span",{class:"token function"},"netstat"),c(" -an "),p("span",{class:"token operator"},"|"),c(),p("span",{class:"token function"},"grep"),c(),p("span",{class:"token number"},"3306"),c("   "),p("span",{class:"token comment"},"#查看所有3306端口使用情况·"),c("\n")])],-1),f=p("p",null,"相关参数的解释：",-1),x=p("ul",null,[p("li",null,"n：不进行 DNS 解析，只显示 IP 地址和端口号；"),p("li",null,"t：显示 TCP 端口"),p("li",null,"u：显示 UDP 端口"),p("li",null,"l: 显示监听的 socket"),p("li",null,"p：显示标识符和进程号")],-1),w={expose:[],setup(c){const w={title:"Linux Network",date:"2021-12-28T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"network releated things",public:!0,tag:"21Z12 network",meta:[{property:"og:title",content:"Linux Network"},{property:"og:description",content:"network releated things"},{name:"description",content:"network releated things"}]};return a({title:"Linux Network",meta:[{property:"og:title",content:"Linux Network"},{property:"og:description",content:"network releated things"},{name:"description",content:"network releated things"}]}),(a,c)=>{const L=n,v=s;return t(),e(v,{frontmatter:w},{default:o((()=>[p("div",null,[l,r,u,k,i,m,d,b,p(L,{text:"命令的详细解释",url:"https://stackoverflow.com/a/11781000/4168837"}),g,h,f,x])])),_:1})}}};export default w;