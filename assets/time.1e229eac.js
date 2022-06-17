import{_ as n}from"./LinkItem.c8df38c8.js";import{_ as s}from"./ShortHR.929b4750.js";import{_ as a}from"./MarkerPattern.vue_vue&type=script&setup=true&lang.8ee34414.js";import{_ as t}from"./app.ee4e96c4.js";import{h as e,o,a as p,w as c,b as l,k as u}from"./vendor.5a394a79.js";const r=l("p",null,"本篇笔记主要记录有关时间处理的内容，不同的编程语言或者库对时间的处理都不尽相同。有些不常用的语言，在需要处理时间时总是要搜寻一番，故在此记录整理下时间的处理相关内容。",-1),i=l("h2",{id:"linux"},[l("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),u(" Linux")],-1),k=l("p",null,[u("Linux 上一般使用 "),l("code",null,"date"),u(" 命令操作时间，这在脚本中使用比较方便。")],-1),d=l("h4",{id:"_1-时间差"},[l("a",{class:"header-anchor",href:"#_1-时间差","aria-hidden":"true"},"#"),u(" 1. 时间差")],-1),m=l("pre",{class:"language-bash"},[l("code",{class:"language-bash"},[l("span",{class:"token function-name function"},"datediff"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),u(),l("span",{class:"token punctuation"},"{"),u("\n    "),l("span",{class:"token assign-left variable"},"d1"),l("span",{class:"token operator"},"="),l("span",{class:"token variable"},[l("span",{class:"token variable"},"$("),l("span",{class:"token function"},"date"),u(" -d "),l("span",{class:"token string"},[u('"'),l("span",{class:"token variable"},"$1"),u('"')]),u(" +%s"),l("span",{class:"token variable"},")")]),u("\n    "),l("span",{class:"token assign-left variable"},"d2"),l("span",{class:"token operator"},"="),l("span",{class:"token variable"},[l("span",{class:"token variable"},"$("),l("span",{class:"token function"},"date"),u(" -d "),l("span",{class:"token string"},[u('"'),l("span",{class:"token variable"},"$2"),u('"')]),u(" +%s"),l("span",{class:"token variable"},")")]),u("\n    "),l("span",{class:"token builtin class-name"},"echo"),u(),l("span",{class:"token variable"},[l("span",{class:"token variable"},"$(("),u(),l("span",{class:"token punctuation"},"("),u("d1 "),l("span",{class:"token operator"},"-"),u(" d2"),l("span",{class:"token punctuation"},")"),u(),l("span",{class:"token operator"},"/"),u(),l("span",{class:"token number"},"86400"),u(),l("span",{class:"token variable"},"))")]),u(" days\n"),l("span",{class:"token punctuation"},"}"),u("\n\n$ datediff "),l("span",{class:"token string"},"'2021-04-03'"),u(),l("span",{class:"token string"},"'2019-04-03'"),u("\n")])],-1),h=l("h4",{id:"_2-时间计算"},[l("a",{class:"header-anchor",href:"#_2-时间计算","aria-hidden":"true"},"#"),u(" 2. 时间计算")],-1),g=l("pre",{class:"language-bash"},[l("code",{class:"language-bash"},[u("$ "),l("span",{class:"token function"},"date"),u(" -d "),l("span",{class:"token string"},"'now + 3 weeks'"),u("\nThu Jul  "),l("span",{class:"token number"},"1"),u(),l("span",{class:"token number"},"18"),u(":29:18 CST "),l("span",{class:"token number"},"2021"),u("\n$ "),l("span",{class:"token function"},"date"),u(" -d "),l("span",{class:"token string"},"'Aug 4 + 3 weeks'"),u("\nWed Aug "),l("span",{class:"token number"},"25"),u(" 00:00:00 CST "),l("span",{class:"token number"},"2021"),u("\n$ "),l("span",{class:"token function"},"date"),u(" -d "),l("span",{class:"token string"},"'Jan 1 1982 + 11 weeks'"),u("\nFri Mar "),l("span",{class:"token number"},"19"),u(" 00:00:00 EST "),l("span",{class:"token number"},"1982"),u("\n")])],-1),f=u("Quickly calculate date differences"),b=l("h2",{id:"wheels"},[l("a",{class:"header-anchor",href:"#wheels","aria-hidden":"true"},"#"),u(" Wheels")],-1),y=l("p",null,"在此记录一些和时间处理相关的工具或者库，兴许在关键时间能够派上用场。",-1),v=u("处理时间和日期的命令行工具"),w=u("Go 语言编写的时间日期解析库"),_=l("h2",{id:"python"},[l("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),u(" Python")],-1),T=l("h3",{id:"计算时间差"},[l("a",{class:"header-anchor",href:"#计算时间差","aria-hidden":"true"},"#"),u(" 计算时间差")],-1),x=l("p",null,"当我们从一个时间字符串中解析时间并通过这个时间来计算时间差时，需要注意一些细节。比如：",-1),S=l("pre",{class:"language-python"},[l("code",{class:"language-python"},[l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(),l("span",{class:"token keyword"},"import"),u(" datetime\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(),l("span",{class:"token keyword"},"import"),u(" time\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(),l("span",{class:"token keyword"},"def"),u(),l("span",{class:"token function"},"convertToMs"),l("span",{class:"token punctuation"},"("),u("timeStr"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},":"),u("\n"),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),u("     second"),l("span",{class:"token punctuation"},","),u(" ms "),l("span",{class:"token operator"},"="),u(" timeStr"),l("span",{class:"token punctuation"},"."),u("split"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"','"),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),u("     dt "),l("span",{class:"token operator"},"="),u(" datetime"),l("span",{class:"token punctuation"},"."),u("datetime"),l("span",{class:"token punctuation"},"."),u("strptime"),l("span",{class:"token punctuation"},"("),u("second"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token string"},'"%Y-%m-%d %H:%M:%S"'),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),u("     "),l("span",{class:"token keyword"},"return"),u(" time"),l("span",{class:"token punctuation"},"."),u("mktime"),l("span",{class:"token punctuation"},"("),u("dt"),l("span",{class:"token punctuation"},"."),u("timetuple"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},")"),u(),l("span",{class:"token operator"},"+"),u(),l("span",{class:"token punctuation"},"("),l("span",{class:"token builtin"},"int"),l("span",{class:"token punctuation"},"("),u("ms"),l("span",{class:"token punctuation"},")"),l("span",{class:"token operator"},"/"),l("span",{class:"token number"},"1000"),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),l("span",{class:"token punctuation"},"."),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" a "),l("span",{class:"token operator"},"="),u(" convertToMs"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'2022-01-05 12:23:45,78'"),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" a\n"),l("span",{class:"token number"},"1641356625.078"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" b "),l("span",{class:"token operator"},"="),u(" convertToMs"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'2022-01-05 12:23:45,128'"),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" b\n"),l("span",{class:"token number"},"1641356625.128"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(),l("span",{class:"token keyword"},"print"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string-interpolation"},[l("span",{class:"token string"},"f'"),l("span",{class:"token interpolation"},[l("span",{class:"token punctuation"},"{"),u("b"),l("span",{class:"token operator"},"-"),u("a"),l("span",{class:"token punctuation"},":"),l("span",{class:"token format-spec"},"^15.03f"),l("span",{class:"token punctuation"},"}")]),l("span",{class:"token string"},"'")]),l("span",{class:"token punctuation"},")"),u("\n     "),l("span",{class:"token number"},"0.050"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u("\n")])],-1),M=l("p",null,[u("注意这边的 "),l("code",null,"a"),u(" 的毫秒格式，当使用")],-1),$=l("pre",{class:"language-python"},[l("code",{class:"language-python"},[l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" dt "),l("span",{class:"token operator"},"="),u(" datetime"),l("span",{class:"token punctuation"},"."),u("datetime"),l("span",{class:"token punctuation"},"."),u("strptime"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"'2022-01-05 12:23:45,78'"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token string"},'"%Y-%m-%d %H:%M:%S,%f"'),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" dt\ndatetime"),l("span",{class:"token punctuation"},"."),u("datetime"),l("span",{class:"token punctuation"},"("),l("span",{class:"token number"},"2022"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token number"},"1"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token number"},"5"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token number"},"12"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token number"},"23"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token number"},"45"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token number"},"780000"),l("span",{class:"token punctuation"},")"),u("\n")])],-1),j=l("p",null,[u("这边会在将 "),l("code",null,"78"),u(" 补全 6 位，变成 "),l("code",null,"780000"),u("，这个是微秒的格式。这可能与我们期望的结果不符。因为 strptime 采用的是 1989 C standard 的格式去解析的。 所以当我们在使用这类时间字符串时，需要保证毫秒的精度是对齐的。比如：")],-1),E=l("pre",{class:"language-python"},[l("code",{class:"language-python"},[u("t1 "),l("span",{class:"token operator"},"="),u(),l("span",{class:"token string"},"'2022-01-05 12:23:45,078'"),u("\nt2 "),l("span",{class:"token operator"},"="),u(),l("span",{class:"token string"},"'2022-01-05 12:23:45,898'"),u("\n")])],-1),P=l("p",null,"这样计算出来的时间差才是我们预期的结果。此时我们可以使用如下的方式来计算时间差：",-1),W=l("pre",{class:"language-python"},[l("code",{class:"language-python"},[l("span",{class:"token keyword"},"def"),u(),l("span",{class:"token function"},"convertToMs2"),l("span",{class:"token punctuation"},"("),u("timeStr"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},":"),u("\n    dt "),l("span",{class:"token operator"},"="),u(" datetime"),l("span",{class:"token punctuation"},"."),u("datetime"),l("span",{class:"token punctuation"},"."),u("strptime"),l("span",{class:"token punctuation"},"("),u("timeStr"),l("span",{class:"token punctuation"},","),u(),l("span",{class:"token string"},'"%Y-%m-%d %H:%M:%S,%f"'),l("span",{class:"token punctuation"},")"),u("\n    epoch "),l("span",{class:"token operator"},"="),u(" datetime"),l("span",{class:"token punctuation"},"."),u("datetime"),l("span",{class:"token punctuation"},"."),u("fromtimestamp"),l("span",{class:"token punctuation"},"("),l("span",{class:"token number"},"0"),l("span",{class:"token punctuation"},")"),u("\n    "),l("span",{class:"token keyword"},"return"),u(),l("span",{class:"token punctuation"},"("),u("dt"),l("span",{class:"token operator"},"-"),u("epoch"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},"."),u("total_seconds"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),u("\n")])],-1),L=l("h3",{id:"输出时间格式化"},[l("a",{class:"header-anchor",href:"#输出时间格式化","aria-hidden":"true"},"#"),u(" 输出时间格式化")],-1),C=l("pre",{class:"language-python"},[l("code",{class:"language-python"},[l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(),l("span",{class:"token keyword"},"from"),u(" datetime "),l("span",{class:"token keyword"},"import"),u(" datetime\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" datetime"),l("span",{class:"token punctuation"},"."),u("utcnow"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},"."),u("isoformat"),l("span",{class:"token punctuation"},"("),u("sep"),l("span",{class:"token operator"},"="),l("span",{class:"token string"},"' '"),l("span",{class:"token punctuation"},","),u(" timespec"),l("span",{class:"token operator"},"="),l("span",{class:"token string"},"'milliseconds'"),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token string"},"'2022-01-05 02:29:27.526'"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" datetime"),l("span",{class:"token punctuation"},"."),u("now"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},"."),u("isoformat"),l("span",{class:"token punctuation"},"("),u("sep"),l("span",{class:"token operator"},"="),l("span",{class:"token string"},"' '"),l("span",{class:"token punctuation"},","),u(" timespec"),l("span",{class:"token operator"},"="),l("span",{class:"token string"},"'milliseconds'"),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token string"},"'2022-01-05 10:38:50.783'"),u("\n"),l("span",{class:"token operator"},">>"),l("span",{class:"token operator"},">"),u(" datetime"),l("span",{class:"token punctuation"},"."),u("now"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},"."),u("isoformat"),l("span",{class:"token punctuation"},"("),u("sep"),l("span",{class:"token operator"},"="),l("span",{class:"token string"},"' '"),l("span",{class:"token punctuation"},","),u(" timespec"),l("span",{class:"token operator"},"="),l("span",{class:"token string"},"'microseconds'"),l("span",{class:"token punctuation"},")"),u("\n"),l("span",{class:"token string"},"'2022-01-05 10:38:55.142289'"),u("\n")])],-1),H=l("p",null,"这边采用的 iso8601 的形式，毫秒(milliseconds)使用的是 3 位数表示的, 微秒(microseconds)使用的是 6 位数表示的。",-1),J={expose:[],setup(u){const J={title:"Time Process With Effective",date:"2021-06-10T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"time",public:!0,tag:"21F06 time",meta:[{property:"og:title",content:"Time Process With Effective"},{property:"og:description",content:"time"},{name:"description",content:"time"}]};return e({title:"Time Process With Effective",meta:[{property:"og:title",content:"Time Process With Effective"},{property:"og:description",content:"time"},{name:"description",content:"time"}]}),(e,u)=>{const Y=n,q=s,A=a,F=t;return o(),p(F,{frontmatter:J},{default:c((()=>[l("div",null,[r,i,k,d,m,h,g,l("p",null,[l(Y,{text:"Reference",url:"https://unix.stackexchange.com/questions/24626/quickly-calculate-date-differences"},{default:c((()=>[f])),_:1})]),l(q),b,y,l("p",null,[l(Y,{text:"dateutils",url:"https://github.com/hroptatyr/dateutils"},{default:c((()=>[v,l(A,{content:"tool"})])),_:1}),l(Y,{text:"go-naturaldate",url:"https://github.com/tj/go-naturaldate"},{default:c((()=>[w,l(A,{content:"lib"})])),_:1})]),l(q),_,T,x,S,M,$,j,E,P,W,L,C,H])])),_:1})}}};export default J;