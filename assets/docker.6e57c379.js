import{_ as n}from"./LinkItem.c8df38c8.js";import{_ as a}from"./ShortHR.929b4750.js";import{_ as e}from"./app.ee4e96c4.js";import{h as s,o,a as r,w as t,b as c,k as l}from"./vendor.5a394a79.js";const i=c("p",null,"记录 docker 的一些常用命令, 主要是在日常查询和定位问题的时候比较有帮助。以期望能在必要时提供一些帮助。这些内容大多是实践之后的记录，不是一篇 docker 使用手册的笔记。",-1),p=c("h4",{id:"查看-container-的详情"},[c("a",{class:"header-anchor",href:"#查看-container-的详情","aria-hidden":"true"},"#"),l(" 查看 container 的详情")],-1),u=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" docker inspect  "),c("span",{class:"token operator"},"<"),l("container_name/container_id"),c("span",{class:"token operator"},">"),l("\n")])],-1),d=c("h4",{id:"查看-container-的内存使用情况"},[c("a",{class:"header-anchor",href:"#查看-container-的内存使用情况","aria-hidden":"true"},"#"),l(" 查看 container 的内存使用情况")],-1),k=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" docker stats\nCONTAINER ID    NAME    CPU %   MEM USAGE / LIMIT     MEM %    NET I/O           BLOCK I/O       PIDS\n306d9e2f8631   cuda     "),c("span",{class:"token number"},"0.00"),l("%   988KiB / "),c("span",{class:"token number"},"125"),l(".5GiB     "),c("span",{class:"token number"},"0.00"),l("%    0B / 0B           "),c("span",{class:"token number"},"6"),l(".61MB / 174MB   "),c("span",{class:"token number"},"2"),l("\n4e7decd2bcfc   goodbye  "),c("span",{class:"token number"},"0.00"),l("%   "),c("span",{class:"token number"},"1"),l(".93MiB / "),c("span",{class:"token number"},"125"),l(".5GiB    "),c("span",{class:"token number"},"0.00"),l("%    "),c("span",{class:"token number"},"6"),l(".97MB / "),c("span",{class:"token number"},"1"),l(".97kB   "),c("span",{class:"token number"},"1"),l(".17MB / 172kB   "),c("span",{class:"token number"},"4"),l("\n")])],-1),g=c("h4",{id:"查看-docker-自身的信息"},[c("a",{class:"header-anchor",href:"#查看-docker-自身的信息","aria-hidden":"true"},"#"),l(" 查看 docker 自身的信息")],-1),h=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" docker info\nContainers: "),c("span",{class:"token number"},"26"),l("\n Running: "),c("span",{class:"token number"},"26"),l("\n Paused: "),c("span",{class:"token number"},"0"),l("\n Stopped: "),c("span",{class:"token number"},"0"),l("\nImages: "),c("span",{class:"token number"},"19"),l("\nServer Version: "),c("span",{class:"token number"},"18.06"),l(".1-ce\nStorage Driver: overlay2\n Backing Filesystem: extfs\n Supports d_type: "),c("span",{class:"token boolean"},"true"),l("\n Native Overlay Diff: "),c("span",{class:"token boolean"},"true"),l("\nLogging Driver: json-file\nCgroup Driver: cgroupfs\nPlugins:\n Volume: "),c("span",{class:"token builtin class-name"},"local"),l("\n Network: bridge "),c("span",{class:"token function"},"host"),l(" macvlan null overlay\n Log: awslogs fluentd gcplogs gelf journald json-file logentries splunk syslog\nSwarm: inactive\nRuntimes: nvidia runc\nDefault Runtime: runc\n……\n")])],-1),m=c("h4",{id:"ubuntu-上查看-docker-日志"},[c("a",{class:"header-anchor",href:"#ubuntu-上查看-docker-日志","aria-hidden":"true"},"#"),l(" ubuntu 上查看 docker 日志")],-1),b=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" journalctl -fu docker.service\n")])],-1),f=c("h4",{id:"删除-image"},[c("a",{class:"header-anchor",href:"#删除-image","aria-hidden":"true"},"#"),l(" 删除 image")],-1),v=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" docker rmi "),c("span",{class:"token operator"},"<"),l("image-id"),c("span",{class:"token operator"},">"),l("\n")])],-1),B=c("h4",{id:"删除-container"},[c("a",{class:"header-anchor",href:"#删除-container","aria-hidden":"true"},"#"),l(" 删除 container")],-1),_=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" docker "),c("span",{class:"token function"},"rm"),l(),c("span",{class:"token operator"},"<"),l("container-id/container-name"),c("span",{class:"token operator"},">"),l("\n")])],-1),I=c("h4",{id:"查看指定容器的日志"},[c("a",{class:"header-anchor",href:"#查看指定容器的日志","aria-hidden":"true"},"#"),l(" 查看指定容器的日志")],-1),y=c("p",null,"每隔两秒查看一下指定容器的最后 10 行日志",-1),D=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token function"},"sudo"),l(" docker logs -f --tail"),c("span",{class:"token operator"},"="),c("span",{class:"token number"},"10"),l(" --until"),c("span",{class:"token operator"},"="),l("2s "),c("span",{class:"token operator"},"<"),l("container_name/container_id"),c("span",{class:"token operator"},">"),l(" \n")])],-1),M=l("docker 官方文档"),$=c("h2",{id:"技巧相关"},[c("a",{class:"header-anchor",href:"#技巧相关","aria-hidden":"true"},"#"),l(" 技巧相关")],-1),j=c("h4",{id:"清空-log"},[c("a",{class:"header-anchor",href:"#清空-log","aria-hidden":"true"},"#"),l(" 清空 log")],-1),L=c("p",null,"当我们的 log 文件变得很大时，我们想将其清空时，可以通过如下命令进行操作：",-1),S=c("pre",{class:"language-bash"},[c("code",{class:"language-bash"},[l("$ "),c("span",{class:"token builtin class-name"},":"),l(),c("span",{class:"token operator"},">"),l(),c("span",{class:"token variable"},[c("span",{class:"token variable"},"$("),l("docker inspect --format"),c("span",{class:"token operator"},"="),l("`"),c("span",{class:"token punctuation"},"{"),c("span",{class:"token punctuation"},"{"),l(".LogPath"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},"}"),l("` "),c("span",{class:"token operator"},"<"),l("container_name_or_id"),c("span",{class:"token operator"},">"),c("span",{class:"token variable"},")")]),l("\n")])],-1),E=c("p",null,[l("注意这边的 "),c("code",null,"format"),l(" 的反引号要改成单引号")],-1),C={expose:[],setup(l){const C={title:"Docker In Use",date:"2021-03-19T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"docker skill",public:!0,tag:"21F08 docker",meta:[{property:"og:title",content:"Docker In Use"},{property:"og:description",content:"docker skill"},{name:"description",content:"docker skill"}]};return s({title:"Docker In Use",meta:[{property:"og:title",content:"Docker In Use"},{property:"og:description",content:"docker skill"},{name:"description",content:"docker skill"}]}),(s,l)=>{const N=n,U=a,w=e;return o(),r(w,{frontmatter:C},{default:t((()=>[c("div",null,[i,p,u,d,k,g,h,m,b,f,v,B,_,I,y,D,c("p",null,[c(N,{text:"docker logs",url:"https://docs.docker.com/engine/reference/commandline/logs/"},{default:t((()=>[M])),_:1})]),c(U),$,j,L,S,E])])),_:1})}}};export default C;
