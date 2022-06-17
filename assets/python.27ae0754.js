import{_ as n}from"./LinkItem.c8df38c8.js";import{_ as s}from"./app.ee4e96c4.js";import{h as a,o as t,a as o,w as e,b as p,k as c}from"./vendor.5a394a79.js";const l=p("h2",{id:"some-posts-about-python"},[p("a",{class:"header-anchor",href:"#some-posts-about-python","aria-hidden":"true"},"#"),c(" some posts about python")],-1),u=c("讲解 Python 中有关 "),i=p("code",null,"*",-1),r=c(" 的使用"),k=p("h2",{id:"command-line-argument-parse"},[p("a",{class:"header-anchor",href:"#command-line-argument-parse","aria-hidden":"true"},"#"),c(" command line argument parse")],-1),d=p("p",null,[c("使用 ["),p("a",{href:"https://click.palletsprojects.com/en/7.x/",target:"_blank",rel:"noopener"},"click"),c("] 作为解析库，可以方便的实现子命令操作。整理一些使用中遇到的问题。")],-1),h=p("ul",null,[p("li",null,"对 argument 进行注释")],-1),g=p("p",null,[c("使用多行注释的方式 "),p("code",null,'""" xxx """'),c("。但是 click 默认是现在在统一行，去除掉了换行的操作。所以在有多参数的情况下显示比较乱。解决方式是：")],-1),m=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token decorator annotation punctuation"},[c("@click"),p("span",{class:"token punctuation"},"."),c("command")]),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token decorator annotation punctuation"},[c("@click"),p("span",{class:"token punctuation"},"."),c("argument")]),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'gt'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token builtin"},"type"),p("span",{class:"token operator"},"="),c("click"),p("span",{class:"token punctuation"},"."),c("Path"),p("span",{class:"token punctuation"},"("),c("exists"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token decorator annotation punctuation"},[c("@click"),p("span",{class:"token punctuation"},"."),c("argument")]),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'prefix'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token builtin"},"type"),p("span",{class:"token operator"},"="),c("click"),p("span",{class:"token punctuation"},"."),c("Path"),p("span",{class:"token punctuation"},"("),c("exists"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token keyword"},"def"),c(),p("span",{class:"token function"},"execute"),p("span",{class:"token punctuation"},"("),c("gt"),p("span",{class:"token punctuation"},","),c(" prefix"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n    "),p("span",{class:"token triple-quoted-string string"},'"""\n       \\b \n       explain the command usage\n       gt: xxxx\n       prefix: xxxxx\n    """'),c("\n")])],-1),y=p("h2",{id:"progess-bar"},[p("a",{class:"header-anchor",href:"#progess-bar","aria-hidden":"true"},"#"),c(" progess bar")],-1),f=p("p",null,[c("使用 ["),p("a",{href:"https://github.com/tqdm/tqdm",target:"_blank",rel:"noopener"},"tqdm"),c("] 搭配各种场景使用，比如在 requests 中显示现在的进度时，可以有如下的方式：")],-1),b=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[c("r "),p("span",{class:"token operator"},"="),c(" requests"),p("span",{class:"token punctuation"},"."),c("get"),p("span",{class:"token punctuation"},"("),c("url"),p("span",{class:"token punctuation"},","),c(" stream"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},","),c(" allow_redirects"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c(),p("span",{class:"token comment"},"# status code check "),c("\npath "),p("span",{class:"token operator"},"="),c(" pathlib"),p("span",{class:"token punctuation"},"."),c("Path"),p("span",{class:"token punctuation"},"("),c("filename"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"."),c("expanduser"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"."),c("resolve"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c("\npath"),p("span",{class:"token punctuation"},"."),c("parent"),p("span",{class:"token punctuation"},"."),c("mkdir"),p("span",{class:"token punctuation"},"("),c("parents"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},","),c(" exist_ok"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},")"),c("\n\ndesc "),p("span",{class:"token operator"},"="),c(" filename"),p("span",{class:"token punctuation"},"."),c("ljust"),p("span",{class:"token punctuation"},"("),p("span",{class:"token number"},"22"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"' '"),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token comment"},"# 22 is the lenght bigger than filename, should change"),c("\nr"),p("span",{class:"token punctuation"},"."),c("raw"),p("span",{class:"token punctuation"},"."),c("read "),p("span",{class:"token operator"},"="),c(" functools"),p("span",{class:"token punctuation"},"."),c("partial"),p("span",{class:"token punctuation"},"("),c("r"),p("span",{class:"token punctuation"},"."),c("raw"),p("span",{class:"token punctuation"},"."),c("read"),p("span",{class:"token punctuation"},","),c(" decode_content"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},")"),c("  "),p("span",{class:"token comment"},"# Decompress if needed"),c("\n"),p("span",{class:"token keyword"},"with"),c(" tqdm"),p("span",{class:"token punctuation"},"."),c("tqdm"),p("span",{class:"token punctuation"},"."),c("wrapattr"),p("span",{class:"token punctuation"},"("),c("r"),p("span",{class:"token punctuation"},"."),c("raw"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},'"read"'),p("span",{class:"token punctuation"},","),c(" total"),p("span",{class:"token operator"},"="),c("file_size"),p("span",{class:"token punctuation"},","),c(" desc"),p("span",{class:"token operator"},"="),c("desc"),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token keyword"},"as"),c(" r_raw"),p("span",{class:"token punctuation"},":"),c("\n     "),p("span",{class:"token keyword"},"with"),c(" path"),p("span",{class:"token punctuation"},"."),p("span",{class:"token builtin"},"open"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},'"wb"'),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token keyword"},"as"),c(" f"),p("span",{class:"token punctuation"},":"),c("\n            shutil"),p("span",{class:"token punctuation"},"."),c("copyfileobj"),p("span",{class:"token punctuation"},"("),c("r_raw"),p("span",{class:"token punctuation"},","),c(" f"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),w=p("p",null,"同时也可以在命令行中使用：",-1),x=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[c("find "),p("span",{class:"token punctuation"},"."),c(),p("span",{class:"token operator"},"-"),c("name "),p("span",{class:"token string"},"'*.py'"),c(),p("span",{class:"token operator"},"-"),p("span",{class:"token builtin"},"type"),c(" f "),p("span",{class:"token operator"},"-"),p("span",{class:"token keyword"},"exec"),c(" cat \\"),p("span",{class:"token punctuation"},"{"),p("span",{class:"token punctuation"},"}"),c(" \\"),p("span",{class:"token punctuation"},";"),c(" \\\n  "),p("span",{class:"token operator"},"|"),c(" tqdm "),p("span",{class:"token operator"},"-"),p("span",{class:"token operator"},"-"),c("unit loc "),p("span",{class:"token operator"},"-"),p("span",{class:"token operator"},"-"),c("unit_scale "),p("span",{class:"token operator"},"-"),p("span",{class:"token operator"},"-"),c("total "),p("span",{class:"token number"},"857366"),c(),p("span",{class:"token operator"},">>"),c(),p("span",{class:"token operator"},"/"),c("dev"),p("span",{class:"token operator"},"/"),c("null\n"),p("span",{class:"token number"},"100"),p("span",{class:"token operator"},"%"),p("span",{class:"token operator"},"|"),c("█████████████████████████████████"),p("span",{class:"token operator"},"|"),c(" 857K"),p("span",{class:"token operator"},"/"),c("857K "),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"00"),p("span",{class:"token punctuation"},":"),p("span",{class:"token number"},"04"),p("span",{class:"token operator"},"<"),p("span",{class:"token number"},"00"),p("span",{class:"token punctuation"},":"),p("span",{class:"token number"},"00"),p("span",{class:"token punctuation"},","),c(" 246Kloc"),p("span",{class:"token operator"},"/"),c("s"),p("span",{class:"token punctuation"},"]"),c("\n")])],-1),_=p("p",null,[c("更多使用参考文档 ["),p("a",{href:"https://tqdm.github.io/docs",target:"_blank",rel:"noopener"},"tqdm documention"),c("] 。")],-1),v=p("h2",{id:"requirements-txt"},[p("a",{class:"header-anchor",href:"#requirements-txt","aria-hidden":"true"},"#"),c(" requirements.txt")],-1),P=p("p",null,"这个文件可以用于python项目初始化时安装依赖使用。可以通过两种方式获取到：",-1),q=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token comment"},"# 获取完整的依赖环境"),c("\n$ pip3 freeze "),p("span",{class:"token operator"},">"),c(" requirements"),p("span",{class:"token punctuation"},"."),c("txt\n\n"),p("span",{class:"token comment"},"# 获取必要的依赖"),c("\n$ pip install pipreqs\n$ pipreqs "),p("span",{class:"token punctuation"},"."),c("\n\n"),p("span",{class:"token comment"},"# 使用"),c("\n$ pip install "),p("span",{class:"token operator"},"-"),c("r requirements"),p("span",{class:"token punctuation"},"."),c("txt\n")])],-1),z=p("h2",{id:"tar-file"},[p("a",{class:"header-anchor",href:"#tar-file","aria-hidden":"true"},"#"),c(" tar file")],-1),T=p("p",null,"获取 tar.gz 文件中的顶层目录的名称，使用下面简单的方式：",-1),j=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[c("archive "),p("span",{class:"token operator"},"="),c(" tarfile"),p("span",{class:"token punctuation"},"."),p("span",{class:"token builtin"},"open"),p("span",{class:"token punctuation"},"("),c("filepath"),p("span",{class:"token punctuation"},","),c(" mode"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'r'"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token keyword"},"print"),c(" os"),p("span",{class:"token punctuation"},"."),c("path"),p("span",{class:"token punctuation"},"."),c("commonprefix"),p("span",{class:"token punctuation"},"("),c("archive"),p("span",{class:"token punctuation"},"."),c("getnames"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),H=p("h2",{id:"zip-file"},[p("a",{class:"header-anchor",href:"#zip-file","aria-hidden":"true"},"#"),c(" zip file")],-1),D=p("p",null,"使用 zipfile 库，更加灵活的打包 zip 包。",-1),A=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"from"),c(" zipfile "),p("span",{class:"token keyword"},"import"),c(" ZipFile\n\n"),p("span",{class:"token keyword"},"with"),c(" ZipFile"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'target.zip'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'w'"),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token keyword"},"as"),c(" newzip"),p("span",{class:"token punctuation"},":"),c("\n    newzip"),p("span",{class:"token punctuation"},"."),c("write"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'directory_name'"),p("span",{class:"token punctuation"},")"),c("\n    newzip"),p("span",{class:"token punctuation"},"."),c("write"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'file_name'"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),$=p("p",null,"使用 shutil 中的 make_archive 函数生成的包有点奇怪(?)，不如使用 zipfile 来的灵活。",-1),W=p("h2",{id:"subprocess"},[p("a",{class:"header-anchor",href:"#subprocess","aria-hidden":"true"},"#"),c(" subprocess")],-1),F=p("p",null,"使用 subprocess 时，往往需要添加子进程中的环境变量，可以使用:",-1),K=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"import"),c(" subprocess"),p("span",{class:"token punctuation"},","),c(" os\nmy_env "),p("span",{class:"token operator"},"="),c(" os"),p("span",{class:"token punctuation"},"."),c("environ"),p("span",{class:"token punctuation"},"."),c("copy"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c("\nmy_env"),p("span",{class:"token punctuation"},"["),p("span",{class:"token string"},'"PATH"'),p("span",{class:"token punctuation"},"]"),c(),p("span",{class:"token operator"},"="),c(),p("span",{class:"token string"},'"/usr/sbin:/sbin:"'),c(),p("span",{class:"token operator"},"+"),c(" my_env"),p("span",{class:"token punctuation"},"["),p("span",{class:"token string"},'"PATH"'),p("span",{class:"token punctuation"},"]"),c("\nsubprocess"),p("span",{class:"token punctuation"},"."),c("Popen"),p("span",{class:"token punctuation"},"("),c("my_command"),p("span",{class:"token punctuation"},","),c(" env"),p("span",{class:"token operator"},"="),c("my_env"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),L=p("h2",{id:"sh"},[p("a",{class:"header-anchor",href:"#sh","aria-hidden":"true"},"#"),c(" sh")],-1),O=p("p",null,"sh is a full-fledged subprocess replacement for Python 2.6 - 3.8, PyPy and PyPy3 that allows you to call any program as if it were a function.",-1),Z=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"import"),c(" sh\n"),p("span",{class:"token comment"},"# like command run in bash. $ sed -i 's/a/A/g' filename"),c("\nsh"),p("span",{class:"token punctuation"},"."),c("sed"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"["),p("span",{class:"token string"},"'-i'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string-interpolation"},[p("span",{class:"token string"},"f's/a/A/g'")]),p("span",{class:"token punctuation"},","),c(" filename"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},"}"),c("'"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),B=p("h2",{id:"format"},[p("a",{class:"header-anchor",href:"#format","aria-hidden":"true"},"#"),c(" format")],-1),C=p("p",null,[c("python 中用于格式的操作，在格式化数字的时候，可以方便的控制小数点后的面位数。具体的可以参考["),p("a",{href:"https://docs.python.org/3/library/string.html#format-examples",target:"_blank",rel:"noopener"},"string format"),c("]")],-1),E=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token string"},'"{:.2f}"'),p("span",{class:"token punctuation"},"."),p("span",{class:"token builtin"},"format"),p("span",{class:"token punctuation"},"("),p("span",{class:"token number"},"13.949999999999999"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),G=p("h2",{id:"listdir"},[p("a",{class:"header-anchor",href:"#listdir","aria-hidden":"true"},"#"),c(" listdir")],-1),J=p("p",null,"python 中遍历目录有好几种方式，不同的方式满足于不同的场景。",-1),I=p("ul",null,[p("li",null,"os.listdir")],-1),M=p("p",null,"列举出当前目录下所有的文件，同时我们可以通过文件类型去进行过滤。比如：",-1),N=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"import"),c(" os \n\nfiles "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"["),c("f "),p("span",{class:"token keyword"},"for"),c(" f "),p("span",{class:"token keyword"},"in"),c(" os"),p("span",{class:"token punctuation"},"."),c("listdir"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token keyword"},"if"),c(" os"),p("span",{class:"token punctuation"},"."),c("path"),p("span",{class:"token punctuation"},"."),c("isfile"),p("span",{class:"token punctuation"},"("),c("f"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"]"),c("\ndirs "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"["),c("d "),p("span",{class:"token keyword"},"for"),c(" d "),p("span",{class:"token keyword"},"in"),c(" os"),p("span",{class:"token punctuation"},"."),c("listdir"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token keyword"},"if"),c(" os"),p("span",{class:"token punctuation"},"."),c("path"),p("span",{class:"token punctuation"},"."),c("isdir"),p("span",{class:"token punctuation"},"("),c("d"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"]"),c("\n")])],-1),S=p("ul",null,[p("li",null,"os.walk")],-1),U=p("p",null,"walk 一般会递归去获取当前目录下所有的文件包含子目录，需要通过指定一些配置来满足我们的需求。简单的使用如下：",-1),Y=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"import"),c(" os\n\n"),p("span",{class:"token keyword"},"for"),c(" root"),p("span",{class:"token punctuation"},","),c(" dirs"),p("span",{class:"token punctuation"},","),c(" files "),p("span",{class:"token keyword"},"in"),c(" os"),p("span",{class:"token punctuation"},"."),c("walk"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'.'"),p("span",{class:"token punctuation"},","),c(" topdown"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n    dirs"),p("span",{class:"token punctuation"},"."),c("clear"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c("\n    "),p("span",{class:"token keyword"},"for"),c(),p("span",{class:"token builtin"},"file"),c(),p("span",{class:"token keyword"},"in"),c(" files"),p("span",{class:"token punctuation"},":"),c("\n        "),p("span",{class:"token keyword"},"print"),p("span",{class:"token punctuation"},"("),p("span",{class:"token builtin"},"file"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),Q=p("p",null,[p("code",null,"dirs.clear()"),c(" 用于不递归遍历当前目录下的子目录。 如果不删除，则会显示当前目录下所有的文件包含子目录里面的文件。这需要结合具体的场景。")],-1),R=p("ul",null,[p("li",null,"find(shell command with subprocess)")],-1),V=p("p",null,"这种方式是结合了 shell 的一些特性，一般不得以的情况下才使用。",-1),X=p("h2",{id:"chunk"},[p("a",{class:"header-anchor",href:"#chunk","aria-hidden":"true"},"#"),c(" chunk")],-1),nn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"def"),c(),p("span",{class:"token function"},"chunk"),p("span",{class:"token punctuation"},"("),c("iterable"),p("span",{class:"token punctuation"},","),c(" n"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n    d "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"{"),p("span",{class:"token punctuation"},"}"),c("\n    "),p("span",{class:"token keyword"},"for"),c(" i"),p("span",{class:"token punctuation"},","),c(" x "),p("span",{class:"token keyword"},"in"),c(),p("span",{class:"token builtin"},"enumerate"),p("span",{class:"token punctuation"},"("),c("iterable"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n        d"),p("span",{class:"token punctuation"},"."),c("setdefault"),p("span",{class:"token punctuation"},"("),c("i"),p("span",{class:"token operator"},"//"),c("n"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token punctuation"},"["),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"."),c("append"),p("span",{class:"token punctuation"},"("),c("x"),p("span",{class:"token punctuation"},")"),c("\n    \n    "),p("span",{class:"token keyword"},"return"),c(),p("span",{class:"token builtin"},"list"),p("span",{class:"token punctuation"},"("),c("d"),p("span",{class:"token punctuation"},"."),c("values"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),sn=p("p",null,[c("或者使用 "),p("code",null,"more_itertools"),c(" 这个库， 可以更加简单的实现。")],-1),an=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"import"),c(" more_itertools "),p("span",{class:"token keyword"},"as"),c(" mit\n\n"),p("span",{class:"token builtin"},"list"),p("span",{class:"token punctuation"},"("),c("mit"),p("span",{class:"token punctuation"},"."),c("chunked"),p("span",{class:"token punctuation"},"("),c("iterable"),p("span",{class:"token punctuation"},","),c(" n"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),tn=c("不造轮子，使用对应的库"),on=p("h2",{id:"atexit"},[p("a",{class:"header-anchor",href:"#atexit","aria-hidden":"true"},"#"),c(" atexit")],-1),en=p("p",null,"atexit 在注册时传递参数：",-1),pn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[c("\n"),p("span",{class:"token keyword"},"def"),c(),p("span",{class:"token function"},"goodbye"),p("span",{class:"token punctuation"},"("),c("name"),p("span",{class:"token punctuation"},","),c(" adjective"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n    "),p("span",{class:"token keyword"},"print"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'Goodbye %s, it was %s to meet you.'"),c(),p("span",{class:"token operator"},"%"),c(),p("span",{class:"token punctuation"},"("),c("name"),p("span",{class:"token punctuation"},","),c(" adjective"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n\n"),p("span",{class:"token keyword"},"import"),c(" atexit\n\natexit"),p("span",{class:"token punctuation"},"."),c("register"),p("span",{class:"token punctuation"},"("),c("goodbye"),p("span",{class:"token punctuation"},","),c(" adjective"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'nice'"),p("span",{class:"token punctuation"},","),c(" name"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'Donny'"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),cn=p("h2",{id:"ordereddict"},[p("a",{class:"header-anchor",href:"#ordereddict","aria-hidden":"true"},"#"),c(" OrderedDict")],-1),ln=p("p",null,"将字典 key 转换成 list，可以按照如下的方式：",-1),un=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(),p("span",{class:"token keyword"},"from"),c(" collections "),p("span",{class:"token keyword"},"import"),c(" OrderedDict\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" a "),p("span",{class:"token operator"},"="),c(" OrderedDict"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"{"),p("span",{class:"token string"},"'a'"),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'b'"),p("span",{class:"token punctuation"},":"),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" a"),p("span",{class:"token punctuation"},"."),c("keys"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c("\nodict_keys"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"["),p("span",{class:"token string"},"'a'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'b'"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" b "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"["),p("span",{class:"token operator"},"*"),c("a"),p("span",{class:"token punctuation"},"]"),c("\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" b\n"),p("span",{class:"token punctuation"},"["),p("span",{class:"token string"},"'a'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'b'"),p("span",{class:"token punctuation"},"]"),c("\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" \n")])],-1),rn=p("p",null,[c("单纯的 keys 是 "),p("code",null,"odict_keys"),c(" 类型，而不是 "),p("code",null,"list"),c(" 类型。所以通过解引用直接获取生成 key 的 list 。")],-1),kn=p("h2",{id:"logging"},[p("a",{class:"header-anchor",href:"#logging","aria-hidden":"true"},"#"),c(" logging")],-1),dn=p("p",null,"在使用 logging 时，我们在自定义输出格式时，使用如下的方式：",-1),hn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[c("logging"),p("span",{class:"token punctuation"},"."),c("basicConfig"),p("span",{class:"token punctuation"},"("),p("span",{class:"token builtin"},"format"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'%(asctime)s,%(msecs)03d %(levelname)-8s [%(pathname)s:%(lineno)d in function %(funcName)s] %(message)s'"),p("span",{class:"token punctuation"},","),c(" datefmt"),p("span",{class:"token operator"},"="),p("span",{class:"token string"},"'%Y-%m-%d:%H:%M:%S'"),p("span",{class:"token punctuation"},","),c(" level"),p("span",{class:"token operator"},"="),c("logging"),p("span",{class:"token punctuation"},"."),c("DEBUG"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),gn=p("p",null,[c("注意这边的 "),p("code",null,"%(msecs)03d"),c(" 这个是用来保留 3 位毫秒数的，方便后续的处理。")],-1),mn=p("h2",{id:"list-间隔差"},[p("a",{class:"header-anchor",href:"#list-间隔差","aria-hidden":"true"},"#"),c(" list 间隔差")],-1),yn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[c("t "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"["),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),p("span",{class:"token number"},"4"),p("span",{class:"token punctuation"},","),p("span",{class:"token number"},"6"),p("span",{class:"token punctuation"},"]"),c("\nv "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"["),c("t"),p("span",{class:"token punctuation"},"["),c("i"),p("span",{class:"token operator"},"+"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token operator"},"-"),c("t"),p("span",{class:"token punctuation"},"["),c("i"),p("span",{class:"token punctuation"},"]"),c(),p("span",{class:"token keyword"},"for"),c(" i "),p("span",{class:"token keyword"},"in"),c(),p("span",{class:"token builtin"},"range"),p("span",{class:"token punctuation"},"("),p("span",{class:"token builtin"},"len"),p("span",{class:"token punctuation"},"("),c("t"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"-"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"]"),c("\n"),p("span",{class:"token comment"},"# [1,2,2]"),c("\n")])],-1),fn=p("h2",{id:"统计数据分布"},[p("a",{class:"header-anchor",href:"#统计数据分布","aria-hidden":"true"},"#"),c(" 统计数据分布")],-1),bn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"from"),c(" itertools "),p("span",{class:"token keyword"},"import"),c(" groupby\n\n"),p("span",{class:"token keyword"},"def"),c(),p("span",{class:"token function"},"histogram"),p("span",{class:"token punctuation"},"("),c("data"),p("span",{class:"token punctuation"},","),c(" step"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n    "),p("span",{class:"token keyword"},"for"),c(" k"),p("span",{class:"token punctuation"},","),c(" g "),p("span",{class:"token keyword"},"in"),c(" groupby"),p("span",{class:"token punctuation"},"("),p("span",{class:"token builtin"},"sorted"),p("span",{class:"token punctuation"},"("),c("data"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},","),c(" key"),p("span",{class:"token operator"},"="),p("span",{class:"token keyword"},"lambda"),c(" x"),p("span",{class:"token punctuation"},":"),c(" x"),p("span",{class:"token operator"},"//"),c("step"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},":"),c("\n        "),p("span",{class:"token keyword"},"print"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'{}-{}: {}'"),p("span",{class:"token punctuation"},"."),p("span",{class:"token builtin"},"format"),p("span",{class:"token punctuation"},"("),c("k"),p("span",{class:"token operator"},"*"),c("step"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token punctuation"},"("),c("k"),p("span",{class:"token operator"},"+"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},")"),p("span",{class:"token operator"},"*"),c("step"),p("span",{class:"token operator"},"-"),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token builtin"},"len"),p("span",{class:"token punctuation"},"("),p("span",{class:"token builtin"},"list"),p("span",{class:"token punctuation"},"("),c("g"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),wn=p("h2",{id:"随机采样"},[p("a",{class:"header-anchor",href:"#随机采样","aria-hidden":"true"},"#"),c(" 随机采样")],-1),xn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token keyword"},"import"),c(" random\n"),p("span",{class:"token keyword"},"import"),c(" glob\n\npbfiles "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token punctuation"},"["),c("f "),p("span",{class:"token keyword"},"for"),c(" f "),p("span",{class:"token keyword"},"in"),c(" glob"),p("span",{class:"token punctuation"},"."),c("glob"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},'"trt_data_pb/*.pb"'),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"]"),c("\n\nrandom_pb "),p("span",{class:"token operator"},"="),c(" random"),p("span",{class:"token punctuation"},"."),c("sample"),p("span",{class:"token punctuation"},"("),c("pbfiles"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token number"},"1000"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token keyword"},"print"),p("span",{class:"token punctuation"},"("),c("random_pb"),p("span",{class:"token punctuation"},"["),p("span",{class:"token punctuation"},":"),p("span",{class:"token number"},"10"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),_n=p("p",null,[c("采用 "),p("code",null,"random.sample"),c(" 这个可以在一组 list 中，随机获取指定数量的内容。 如果只是想选一个，可以使用 "),p("code",null,"random.choice")],-1),vn=p("h2",{id:"pprint"},[p("a",{class:"header-anchor",href:"#pprint","aria-hidden":"true"},"#"),c(" pprint")],-1),Pn=p("p",null,"正常使用 print 的打印效果一般，不够 pretty， 所以我们可以使用 pprint 库来完成更好的打印，正常情况下我们会使用到一些基本的参数来控制打印的效果。同时可以通过自定义统一的打印风格。",-1),qn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(),p("span",{class:"token keyword"},"from"),c(" pprint "),p("span",{class:"token keyword"},"import"),c(" PrettyPrinter\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" custom_printer "),p("span",{class:"token operator"},"="),c(" PrettyPrinter"),p("span",{class:"token punctuation"},"("),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c("     indent"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"4"),p("span",{class:"token punctuation"},","),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c("     width"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"100"),p("span",{class:"token punctuation"},","),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c("     depth"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},","),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c("     compact"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"True"),p("span",{class:"token punctuation"},","),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c("     sort_dicts"),p("span",{class:"token operator"},"="),p("span",{class:"token boolean"},"False"),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c(),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),p("span",{class:"token punctuation"},"."),c("\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" user"),p("span",{class:"token operator"},"="),p("span",{class:"token punctuation"},"{"),p("span",{class:"token string"},'"name"'),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token string"},'"jesse"'),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},'"age"'),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},'"address"'),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token punctuation"},"{"),p("span",{class:"token string"},'"street"'),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token string"},'"xxx"'),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},'"city"'),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token string"},'"xxxxx"'),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},"}"),c("\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" custom_printer"),p("span",{class:"token punctuation"},"."),c("pprint"),p("span",{class:"token punctuation"},"("),c("user"),p("span",{class:"token punctuation"},")"),c("\n"),p("span",{class:"token punctuation"},"{"),p("span",{class:"token string"},"'name'"),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token string"},"'jesse'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'age'"),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token number"},"1"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'address'"),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token punctuation"},"{"),p("span",{class:"token string"},"'street'"),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token string"},"'xxx'"),p("span",{class:"token punctuation"},","),c(),p("span",{class:"token string"},"'city'"),p("span",{class:"token punctuation"},":"),c(),p("span",{class:"token string"},"'xxxxx'"),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},"}"),c("\n")])],-1),zn=p("p",null,"实际上我们可以通过单独设置的方式来打印这些内容,比如：",-1),Tn=p("pre",{class:"language-python"},[p("code",{class:"language-python"},[p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(),p("span",{class:"token keyword"},"from"),c(" pprint "),p("span",{class:"token keyword"},"import"),c(" pprint\n"),p("span",{class:"token operator"},">>"),p("span",{class:"token operator"},">"),c(" pprint"),p("span",{class:"token punctuation"},"("),c("users"),p("span",{class:"token punctuation"},","),c(" indent"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"4"),p("span",{class:"token punctuation"},","),c(" depth"),p("span",{class:"token operator"},"="),p("span",{class:"token number"},"2"),p("span",{class:"token punctuation"},")"),c("\n")])],-1),jn={expose:[],setup(c){const jn={title:"Python Hard Way",date:"2021-01-21T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"python docs",public:!0,tag:"21B07 python",meta:[{property:"og:title",content:"Python Hard Way"},{property:"og:description",content:"python docs"},{name:"description",content:"python docs"}]};return a({title:"Python Hard Way",meta:[{property:"og:title",content:"Python Hard Way"},{property:"og:description",content:"python docs"},{name:"description",content:"python docs"}]}),(a,c)=>{const Hn=n,Dn=s;return t(),o(Dn,{frontmatter:jn},{default:e((()=>[p("div",null,[l,p("p",null,[p(Hn,{text:"Asterisks in Python",url:"https://treyhunner.com/2018/10/asterisks-in-python-what-they-are-and-how-to-use-them/"},{default:e((()=>[u,i,r])),_:1})]),k,d,h,g,m,y,f,b,w,x,_,v,P,q,z,T,j,H,D,A,$,W,F,K,L,O,Z,B,C,E,G,J,I,M,N,S,U,Y,Q,R,V,X,nn,sn,an,p("p",null,[p(Hn,{text:"stackoverflow answer",url:"https://stackoverflow.com/questions/312443/how-do-you-split-a-list-into-evenly-sized-chunks"},{default:e((()=>[tn])),_:1})]),on,en,pn,cn,ln,un,rn,kn,dn,hn,gn,mn,yn,fn,bn,wn,xn,_n,vn,Pn,qn,zn,Tn])])),_:1})}}};export default jn;