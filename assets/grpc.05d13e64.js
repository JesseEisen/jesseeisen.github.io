import{_ as n}from"./app.1e82055a.js";import{h as a,o as t,a as s,w as o,b as e,k as p}from"./vendor.5a394a79.js";const c=e("div",null,[e("p",null,"最近简单使用了下 Python 版本的 gRpc， 对使用过程中的一些问题和经验做一些总结。"),e("h2",{id:"环境准备"},[e("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),p(" 环境准备")]),e("pre",{class:"language-bash"},[e("code",{class:"language-bash"},[p("$ python -m pip "),e("span",{class:"token function"},"install"),p(" grpcio\n$ python -m pip "),e("span",{class:"token function"},"install"),p(" grpcio-tools\n"),e("span",{class:"token comment"},"# 编译 proto"),p("\n$ python -m grpc_tools.protoc -I./protos --python_out"),e("span",{class:"token operator"},"="),p(". --grpc_python_out"),e("span",{class:"token operator"},"="),p(". ./protos/*.proto\n")])]),e("h2",{id:"protobuf-定义"},[e("a",{class:"header-anchor",href:"#protobuf-定义","aria-hidden":"true"},"#"),p(" protobuf 定义")]),e("h3",{id:"定义空消息"},[e("a",{class:"header-anchor",href:"#定义空消息","aria-hidden":"true"},"#"),p(" 定义空消息")]),e("pre",{class:"language-python"},[e("code",{class:"language-python"},[e("span",{class:"token keyword"},"import"),p(),e("span",{class:"token string"},'"google/protobuf/empty.proto"'),e("span",{class:"token punctuation"},";"),p("\n\nservice EmptyService "),e("span",{class:"token punctuation"},"{"),p("\n    rpc ServiceCheck"),e("span",{class:"token punctuation"},"("),p("google"),e("span",{class:"token punctuation"},"."),p("protobuf"),e("span",{class:"token punctuation"},"."),p("Empty"),e("span",{class:"token punctuation"},")"),p(" returns "),e("span",{class:"token punctuation"},"("),p("google"),e("span",{class:"token punctuation"},"."),p("protobuf"),e("span",{class:"token punctuation"},"."),p("Empty"),e("span",{class:"token punctuation"},")"),p(),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),p("\n"),e("span",{class:"token punctuation"},"}"),p("\n")])]),e("p",null,"这个编译后，在使用时我们可以在代码中使用："),e("pre",{class:"language-python"},[e("code",{class:"language-python"},[e("span",{class:"token keyword"},"from"),p(" google"),e("span",{class:"token punctuation"},"."),p("protobuf "),e("span",{class:"token keyword"},"import"),p(" empty_pb2\n\n"),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),p("\nstub"),e("span",{class:"token punctuation"},"."),p("ServiceCheck"),e("span",{class:"token punctuation"},"("),p("empty_pb2"),e("span",{class:"token punctuation"},"."),p("Empty"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),p("\n"),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),p("\n")])]),e("h3",{id:"定义二维数组"},[e("a",{class:"header-anchor",href:"#定义二维数组","aria-hidden":"true"},"#"),p(" 定义二维数组")]),e("p",null,"protobuf 在定义多维数组时，会比较笨拙，需要一层一层的定义，比如二维数组的定义："),e("pre",{class:"language-python"},[e("code",{class:"language-python"},[p("message Array2D "),e("span",{class:"token punctuation"},"{"),p("\n    message Array "),e("span",{class:"token punctuation"},"{"),p("\n        repeated int32 array "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),p("\n    "),e("span",{class:"token punctuation"},"}"),p("\n    repeated Array array2d "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),p("\n"),e("span",{class:"token punctuation"},"}"),p("\n")])]),e("p",null,"这在使用的时候我们需要做如下操作，比如："),e("pre",{class:"language-python"},[e("code",{class:"language-python"},[p("array2d "),e("span",{class:"token operator"},"="),p(" Array2D"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),p("\ndata "),e("span",{class:"token operator"},"="),p(" array2d"),e("span",{class:"token punctuation"},"."),p("array2d"),e("span",{class:"token punctuation"},"."),p("add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),p("\ndata"),e("span",{class:"token punctuation"},"."),p("array"),e("span",{class:"token punctuation"},"."),p("extend"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),p(),e("span",{class:"token number"},"2"),e("span",{class:"token punctuation"},","),p(),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n\n"),e("span",{class:"token comment"},"# 这将生成 [[1,2,3]]"),p("\n")])]),e("h3",{id:"将-proto-与-json-互换"},[e("a",{class:"header-anchor",href:"#将-proto-与-json-互换","aria-hidden":"true"},"#"),p(" 将 proto 与 json 互换")]),e("pre",{class:"language-python"},[e("code",{class:"language-python"},[e("span",{class:"token comment"},"## from proto"),p("\n"),e("span",{class:"token keyword"},"from"),p(" google"),e("span",{class:"token punctuation"},"."),p("protobuf"),e("span",{class:"token punctuation"},"."),p("json_format "),e("span",{class:"token keyword"},"import"),p(" MessageToDict\n"),e("span",{class:"token keyword"},"from"),p(" google"),e("span",{class:"token punctuation"},"."),p("protobuf"),e("span",{class:"token punctuation"},"."),p("json_format "),e("span",{class:"token keyword"},"import"),p(" MessageToJson\n\n"),e("span",{class:"token comment"},"## to proto"),p("\n"),e("span",{class:"token keyword"},"from"),p(" google"),e("span",{class:"token punctuation"},"."),p("protobuf"),e("span",{class:"token punctuation"},"."),p("json_format "),e("span",{class:"token keyword"},"import"),p(" Parse\n"),e("span",{class:"token keyword"},"from"),p(" google"),e("span",{class:"token punctuation"},"."),p("protobuf"),e("span",{class:"token punctuation"},"."),p("json_format "),e("span",{class:"token keyword"},"import"),p(" ParseDict\n\n"),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),p("\n\njson_data "),e("span",{class:"token operator"},"="),p(" MesasageToJosn"),e("span",{class:"token punctuation"},"("),p("requestData"),e("span",{class:"token punctuation"},","),p(" indent"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),p("  "),e("span",{class:"token comment"},"# no pretty-print"),p("\ndict_data "),e("span",{class:"token operator"},"="),p(" MessageToDict"),e("span",{class:"token punctuation"},"("),p("requestData"),e("span",{class:"token punctuation"},")"),p("\n\n\n")])]),e("p",null,[p("具体参考手册："),e("a",{href:"https://googleapis.dev/python/protobuf/latest/google/protobuf/json_format.html",target:"_blank",rel:"noopener"},"json_format")])],-1),r={expose:[],setup(e){const p={title:"gRpc In Python",date:"2021-12-23T00:00:00.000Z",author:"Linkang Chan",twitter:"JessEisen_LJ",description:"grpc releated things",public:!0,tag:"21Z07 grpc",meta:[{property:"og:title",content:"gRpc In Python"},{property:"og:description",content:"grpc releated things"},{name:"description",content:"grpc releated things"}]};return a({title:"gRpc In Python",meta:[{property:"og:title",content:"gRpc In Python"},{property:"og:description",content:"grpc releated things"},{name:"description",content:"grpc releated things"}]}),(a,e)=>{const r=n;return t(),s(r,{frontmatter:p},{default:o((()=>[c])),_:1})}}};export default r;
