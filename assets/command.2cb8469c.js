import{_ as n}from"./InComing.vue_vue&type=script&setup=true&lang.f72f157d.js";import{_ as s}from"./app.c33e7879.js";import{h as t,o as a,a as e,w as o,b as l,k as c}from"./vendor.57ddf3fb.js";const u=l("p",null,"Linux 的命令行工具一直在发展，一些内置的工具也在不断的进化，单论GNU分支出来的工具，增加了很多选项，所以在日常使用的时候，同样的工具在不同的发行版上的选项和行为会略有不同。我们正常能掌握的工具使用也是有限的，一个好的方式是在实践中不断积累，以期在有问题时快速组合不同工具的输入输出并解决问题。",-1),p=l("p",null,"本篇主要是记录工作中遇到的一些命令的使用，单纯的去看这些工具的 man page 往往不太能想到一些创造性的使用方式，或者只能知其是什么，但遇到问题时并不会想到如何去用。",-1),r=l("p",null,"P.S. 记得将一些复杂的单行命令写在脚本里。",-1),i=l("h2",{id:"fold-1"},[l("a",{class:"header-anchor",href:"#fold-1","aria-hidden":"true"},"#"),c(" fold(1)")],-1),m=l("p",null,"这个命令主要是为了将输出的行转换到指定的宽度。类似于文档中的软换行。这在显示一个超长文本时很有用。但是如果遇到下面这个问题时，fold 可以很轻松的解决。",-1),d=l("pre",{class:"language-shell"},[l("code",{class:"language-shell"},[c("Input:  aaaabbbcca\nOutput: "),l("span",{class:"token punctuation"},"["),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},'"a"'),c(", "),l("span",{class:"token number"},"4"),l("span",{class:"token punctuation"},")"),c(", "),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},'"b"'),c(", "),l("span",{class:"token number"},"3"),l("span",{class:"token punctuation"},")"),c(", "),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},'"c"'),c(", "),l("span",{class:"token number"},"2"),l("span",{class:"token punctuation"},")"),c(", "),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},'"a"'),c(", "),l("span",{class:"token number"},"1"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},"]"),c("\n")])],-1),k=l("p",null,"忽略最终输出的数组形式，使用 fold 搭配 uniq 只需要一行就可以解决。",-1),b=l("pre",{class:"language-bash"},[l("code",{class:"language-bash"},[c("$ "),l("span",{class:"token builtin class-name"},"echo"),c(),l("span",{class:"token string"},'"aaaabbbcca"'),c(),l("span",{class:"token operator"},"|"),c(),l("span",{class:"token function"},"fold"),c(" -w "),l("span",{class:"token number"},"1"),c(),l("span",{class:"token operator"},"|"),c(),l("span",{class:"token function"},"uniq"),c(" -c\n"),l("span",{class:"token number"},"4"),c(" a\n"),l("span",{class:"token number"},"3"),c(" b\n"),l("span",{class:"token number"},"2"),c(" c\n"),l("span",{class:"token number"},"1"),c(" a\n")])],-1),g=l("p",null,[c("其中 "),l("code",null,"-w 1"),c(" 表示的一行的宽度是多少，默认是 80，当指定成 1 时，表示一行只输出一个字符。这样就可以通过 uniq 进行统计了。")],-1),f=l("h2",{id:"truncate"},[l("a",{class:"header-anchor",href:"#truncate","aria-hidden":"true"},"#"),c(" truncate")],-1),h=l("p",null,"用于扩展或者缩减文件大小，非常适合在 linux 上创建一个空洞文件。",-1),x=l("pre",{class:"language-bash"},[l("code",{class:"language-bash"},[c("$ truncate -s 1G test.txt\n$ "),l("span",{class:"token function"},"ls"),c(" -l test.txt\n.rw-r--r-- 1024M jesse "),l("span",{class:"token number"},"21"),c(),l("span",{class:"token number"},"4"),c(),l("span",{class:"token number"},"17"),c(":48 test.txt\n$ truncate -s 629M test.txt\n$ "),l("span",{class:"token function"},"ls"),c(" -l test.txt\n.rw-r--r-- 629M jesse "),l("span",{class:"token number"},"21"),c(),l("span",{class:"token number"},"4"),c(),l("span",{class:"token number"},"17"),c(":48 bigfile\n")])],-1),L={expose:[],setup(c){const L={title:"Linux command tools",date:"2020-02-21T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"collection command tool in linux",public:!0,tag:"20D10 command",meta:[{property:"og:title",content:"Linux command tools"},{property:"og:description",content:"collection command tool in linux"},{name:"description",content:"collection command tool in linux"}]};return t({title:"Linux command tools",meta:[{property:"og:title",content:"Linux command tools"},{property:"og:description",content:"collection command tool in linux"},{name:"description",content:"collection command tool in linux"}]}),(t,c)=>{const w=n,_=s;return a(),e(_,{frontmatter:L},{default:o((()=>[l("div",null,[l(w,{comings:[{text:"shell script",url:"/notes/shell_script"}]}),u,p,r,i,m,d,k,b,g,f,h,x])])),_:1})}}};export default L;