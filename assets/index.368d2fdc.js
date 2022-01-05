import{p as s,f as e,e as o,o as a,a as t,b as i,t as u,z as c,v as b,B as d,F as n,A as m,i as l}from"./vendor.5a394a79.js";s("data-v-10f25d97");const p={class:"book-item",text:"dark:white black"},r={class:"score"},h={class:"ref-link"},g={class:"author"},v={class:"title"},_={class:"date",text:"dark:#eee #666"};e();var j=o({expose:[],props:{book:{type:Object,required:!0}},setup:s=>(e,o)=>(a(),t("div",null,[i("div",p,[i("span",r,[i("span",null,u(s.book.score),1)]),i("span",h,[i("a",{href:"https://book.douban.com/subject/"+s.book.douban_id,target:"_blank"},"douban",8,["href"])]),i("span",g,u(s.book.authors),1),i("span",v,"《"+u(s.book.name)+"》 ",1),i("span",_,[i("i",null,u(s.book.publish_date.trim(" ")),1)])])]))});j.__scopeId="data-v-10f25d97",s("data-v-64045475");const k={key:0,class:"image-block"},w={style:{"text-align":"center"},text:"dark:white black",m:"t-2"};e();var f=o({expose:[],props:{book:{type:Object,required:!0}},setup:s=>(e,o)=>s.book.img?(a(),t("div",k,[i("div",null,[i("img",{class:"image-styl",src:s.book.img},null,8,["src"]),i("h6",w,u(s.book.name),1)])])):c("",!0)});f.__scopeId="data-v-64045475",s("data-v-382b8984");const x={w:"screen-xl lg:screen-lg md:screen-md sm:screen-sm"},y={class:"main-page",m:"t-2"},C={class:"side-bar"},q={text:"dark:white black"},I={key:0,class:"book-content",m:"t-4"},O={key:1,class:"book-cover"},z=i("h6",{text:"1rem right dark:white black",m:"b-5"},[i("i",null,"book's cover looks so fancy.")],-1),A={grid:"~ md:cols-4",gap:"3"};e();var B=o({expose:[],setup(s){const e=[{cate:3,douban_id:"26877752",name:"恶意",authors:"[日本] 东野圭吾",publish_date:" 2016-11-1",score:"8.7",votes:"54707",img:"https://img9.doubanio.com/view/subject/l/public/s29069735.jpg"},{cate:1,name:"101件事儿：我怎么不知道",douban_id:"26860148",authors:"[英]理查德·霍恩/[英]特雷西·特纳",score:"7.9",votes:"54",publish_date:" 2016-8",img:""},{cate:1,name:"四个春天",douban_id:"30389935",authors:"陆庆屹",score:"8.4",votes:"8035",publish_date:" 2019-1-1",img:"https://img9.doubanio.com/view/subject/s/public/s29957035.jpg"},{cate:1,name:"平凹的短小说",douban_id:"35148953",authors:"贾平凹",score:"8.4",votes:"95",publish_date:" 2020-12",img:"https://img9.doubanio.com/view/subject/s/public/s33762406.jpg"},{cate:2,name:"梵高：一种力量在沸腾",douban_id:"34663214",authors:"[英]朱利安·贝尔",score:"8.3",votes:"50",publish_date:" 2020-2",img:"https://img3.doubanio.com/view/subject/s/public/s33596431.jpg"},{cate:1,name:"草莓、极光与火焰",douban_id:"34880830",authors:"[日] 西加奈子",score:"8.0",votes:"642",publish_date:" 2019-12",img:"https://img1.doubanio.com/view/subject/s/public/s33535348.jpg"},{cate:1,name:"我想和你一起生活",douban_id:"27625639",authors:"[俄]茨维塔耶娃等",score:"7.8",votes:"274",publish_date:" 2018-3",img:"https://img1.doubanio.com/view/subject/s/public/s29681978.jpg"},{cate:1,name:"我在京都居酒屋",douban_id:"35390850",authors:"库索",score:"8.9",votes:"208",publish_date:" 2021-3",img:"https://img3.doubanio.com/view/subject/s/public/s33846880.jpg"},{cate:1,name:"当我在一个仲夏清晨出走",douban_id:"30358504",authors:"[英]洛瑞·李",score:"8.7",votes:"309",publish_date:" 2018-11",img:"https://img3.doubanio.com/view/subject/s/public/s29914741.jpg"},{cate:1,name:"我明白你会来，所以我等",douban_id:"26662988",authors:"沈从文",score:"8.3",votes:"903",publish_date:" 2015-12-1",img:"https://img9.doubanio.com/view/subject/s/public/s28338634.jpg"},{cate:1,name:"数星星的夜",douban_id:"35422209",authors:"尹东柱",score:"8.6",votes:"181",publish_date:" 2021-5-5",img:"https://img2.doubanio.com/view/subject/s/public/s33891922.jpg"},{cate:1,name:"奥兰多",douban_id:"35088135",authors:"[英] 弗吉尼亚·伍尔夫",score:"9.3",votes:"311",publish_date:" 2020-7",img:"https://img3.doubanio.com/view/subject/s/public/s33754260.jpg"},{cate:1,name:"地球上最后的夜晚",douban_id:"20501761",authors:"[智利] 罗贝托·波拉尼奥",score:"8.3",votes:"9691",publish_date:" 2013-4-1",img:"https://img9.doubanio.com/view/subject/s/public/s27267924.jpg"},{cate:1,name:"变形记",douban_id:"35218475",authors:"[奥地利] 弗朗茨·卡夫卡",score:"9.3",votes:"271",publish_date:" 2020-1-1",img:"https://img2.doubanio.com/view/subject/s/public/s33774031.jpg"},{cate:1,name:"判决",douban_id:"35219184",authors:"[奥地利] 弗朗茨·卡夫卡",score:"8.2",votes:"126",publish_date:" 2021-1-1",img:"https://img1.doubanio.com/view/subject/s/public/s33774037.jpg"},{cate:1,name:"喧嚣",douban_id:"35218224",authors:"[奥地利] 弗朗茨·卡夫卡",score:"7.8",votes:"39",publish_date:" 2021-1-1",img:"https://img2.doubanio.com/view/subject/s/public/s33774043.jpg"},{cate:1,name:"饥饿艺术家",douban_id:"35218228",authors:"[奥地利] 弗朗茨·卡夫卡",score:"7.9",votes:"95",publish_date:" 2021-1-1",img:"https://img9.doubanio.com/view/subject/s/public/s33774035.jpg"},{cate:1,name:"退步集",douban_id:"1003284",authors:"陈丹青",score:"8.1",votes:"22917",publish_date:" 2005-1",img:""},{cate:1,name:"大萝卜和难挑的鳄梨",douban_id:"25982254",authors:"[日]\n            村上春树",score:"8.1",votes:"14091",publish_date:" 2014-10",img:""},{cate:1,name:"失敬，植物先生",douban_id:"35034559",authors:"[意]斯特凡诺·曼库索",score:"8.2",votes:"506",publish_date:" 2020-4-17",img:"https://img9.doubanio.com/view/subject/s/public/s33621504.jpg"},{cate:1,name:"它们没大脑，但它们有智能",douban_id:"26992747",authors:"[意]斯特凡诺·曼库索/[意]亚历山德拉·维奥拉",score:"8.1",votes:"688",publish_date:" 2017-3",img:"https://img2.doubanio.com/view/subject/s/public/s29390411.jpg"},{cate:1,name:"心",douban_id:"1400059",authors:"[日]夏目漱石",score:"8.6",votes:"10430",publish_date:" 2005-05-01",img:""},{cate:1,name:"常春藤诗丛北京大学卷·海子诗选",douban_id:"34874323",authors:"海子",score:"8.6",votes:"16",publish_date:" 2019-1-1",img:""},{cate:1,name:"火：鲁米抒情诗",douban_id:"33455245",authors:"[波斯]贾拉勒丁·鲁米",score:"7.8",votes:"731",publish_date:" 2019-7",img:""},{cate:1,name:"消失的13级台阶",douban_id:"34996429",authors:"[日] 高野和明",score:"8.7",votes:"28176",publish_date:" 2020-5-15",img:"https://img1.doubanio.com/view/subject/s/public/s33623978.jpg"},{cate:1,name:"船在海上，马在山中",douban_id:"35268519",authors:"[西班牙]费德里科·加西亚·洛尔迦",score:"8.2",votes:"174",publish_date:" 2020-12-15",img:"https://img1.doubanio.com/view/subject/s/public/s33766859.jpg"},{cate:2,name:"谷川的诗",douban_id:"35183754",authors:"[日] 谷川俊太郎",score:"8.3",votes:"44",publish_date:" 2021-5-1",img:"https://img9.doubanio.com/view/subject/s/public/s33896325.jpg"},{cate:1,name:"蝲蛄吟唱的地方",douban_id:"34813209",authors:"[美] 迪莉娅·欧文斯",score:"8.8",votes:"4520",publish_date:" 2019-10",img:"https://img2.doubanio.com/view/subject/s/public/s33469693.jpg"},{cate:1,name:"纵身入山海",douban_id:"35028954",authors:"库索",score:"8.6",votes:"911",publish_date:" 2020-7",img:"https://img9.doubanio.com/view/subject/s/public/s33666155.jpg"},{cate:1,name:"一面一世界",douban_id:"27198199",authors:"崔岱远",score:"7.8",votes:"84",publish_date:" 2017-10",img:""},{cate:1,name:"理想的簡單生活",douban_id:"25860768",authors:"多明妮克．洛羅（Dominique Loreau）",score:"8.2",votes:"131",publish_date:" 2014-4",img:"https://img1.doubanio.com/view/subject/s/public/s29963457.jpg"}],o=b(1),u=d((()=>e.filter((s=>s.cate===o.value))));function p(s){o.value=s}function r(s){return o.value===s?"choosed":"normal"}return(s,b)=>{const d=j,h=f;return a(),t("div",x,[i("div",y,[i("div",C,[i("ul",q,[i("li",null,[i("a",{class:r(1),onClick:b[1]||(b[1]=s=>p(1))},"to-read",2)]),i("li",null,[i("a",{class:r(2),onClick:b[2]||(b[2]=s=>p(2))},"reading",2)]),i("li",null,[i("a",{class:r(3),onClick:b[3]||(b[3]=s=>p(3))},"have-read",2)]),i("li",null,[i("a",{class:r(4),onClick:b[4]||(b[4]=s=>p(4))},"covers",2)])])]),o.value<=3?(a(),t("div",I,[(a(!0),t(n,null,m(l(u),((s,e)=>(a(),t(d,{key:e,book:s},null,8,["book"])))),128))])):c("",!0),4===o.value?(a(),t("div",O,[z,i("div",A,[(a(),t(n,null,m(e,((s,e)=>i(h,{key:e,book:s},null,8,["book"]))),64))])])):c("",!0)])])}}});B.__scopeId="data-v-382b8984";export default B;
