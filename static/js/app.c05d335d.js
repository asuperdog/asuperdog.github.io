(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,a=1;a<s.length;a++){var o=s[a];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},a={app:0},n={app:0},r=[];function o(t){return c.p+"static/js/"+({}[t]||t)+"."+{"chunk-08cd2f81":"c5ac8f24","chunk-444fc75e":"7d55eefb","chunk-78f70f8a":"a46a36fb","chunk-be5dede8":"cd07b02e"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={"chunk-444fc75e":1,"chunk-78f70f8a":1,"chunk-be5dede8":1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=new Promise((function(e,s){for(var i="static/css/"+({}[t]||t)+"."+{"chunk-08cd2f81":"31d6cfe0","chunk-444fc75e":"9d84dfed","chunk-78f70f8a":"9b5e4b86","chunk-be5dede8":"715b7894"}[t]+".css",n=c.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===n))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===i||u===n)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],h.parentNode.removeChild(h),s(r)},h.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,s){i=n[t]=[e,s]}));e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var s=n[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,s[1](d)}n[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"048b":function(t,e,s){"use strict";s("592b")},"0e59":function(t,e,s){"use strict";s("325c")},"0f13":function(t,e,s){"use strict";s("3ac6")},"325c":function(t,e,s){},"3ac6":function(t,e,s){},"453a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skeleton"},["text"==t.type?s("div",{staticClass:"text"},[s("div",{staticClass:"line80"}),s("div",{staticClass:"line100"}),s("div",{staticClass:"line70"})]):t._e(),"img"==t.type?s("div",{staticClass:"img"},[s("div",{staticClass:"line100"})]):t._e()])},a=[],n={name:"skeleton",props:["type","line"]},r=n,o=(s("048b"),s("2877")),c=Object(o["a"])(r,i,a,!1,null,"3986dfba",null);e["a"]=c.exports},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():s("router-view")],1)},n=[],r=s("2877"),o={},c=Object(r["a"])(o,a,n,!1,null,null,null),l=c.exports,u=s("bc3a"),d=s.n(u),h=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("img",{class:{play:t.isPlay},attrs:{src:"//q.qlogo.cn/g?b=qq&k=okgIcASK66f8PQmk1As8FA&s=0",alt:"avatar"}}),s("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"name"},[t._v("Go Big or Go Home")]),s("h1",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],staticClass:"music"},[s("i",{staticClass:"fa fa-music"}),t._v(" "+t._s(t.title)+" "),s("i",{staticClass:"fa fa-music"})]),s("nav",[s("router-link",{attrs:{to:"/blog"}},[t._v("Blog")]),s("router-link",{attrs:{to:"/403"}},[t._v("Work")]),s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),s("div",{staticClass:"introduce"},[s("div",{staticClass:"animated"},[s("p",{staticStyle:{"font-size":"14px"}},[t._v("- ABOUT ME -")]),t._m(0),s("p",[t._v("Like Movie, Like Singing.")]),t._m(1),t._m(2),s("p",[t._v(" MP3 iPlayer "),s("i",{staticClass:"fa fa-hand-o-right"}),s("a",{attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"fa fa-music",on:{click:t.play}})])]),t._m(3)])]),s("p",{staticClass:"poem"},[t._v(t._s(t.todayPoem.content))]),s("a",{staticClass:"hide-768",attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("粤ICP备19138440号")]),s("audio",{ref:"audio",attrs:{type:"audio/ogg",src:""}})])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Like Writing Bugs "),s("i",{staticClass:"fa fa-code"}),t._v(", ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Resume "),s("i",{staticClass:"fa fa-hand-o-right"}),s("a",{attrs:{href:"static/src/resume.pdf",target:"_blank"}},[s("i",{staticClass:"fa fa-drivers-license-o"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" My GitHub "),s("i",{staticClass:"fa fa-hand-o-right"}),s("a",{attrs:{href:"https://github.com/asuperdog",target:"_blank"}},[s("i",{staticClass:"fa fa-github-alt"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Mail "),s("i",{staticClass:"fa fa-hand-o-right"}),s("span",{staticClass:"gradient-text mail"},[t._v(" bombiu@126.com ")])])}],v={name:"Home",data(){return{title:"",isPlay:!1,todayPoem:[],musicName:[],musicList:[],currAudioIndex:0}},mounted(){this.getPoem(),this.getMusic()},methods:{getPoem(){const t=s("a1a0");t.load(t=>{this.todayPoem=t.data,console.log(this.todayPoem)})},getMusic(){this.$axios({method:"get",url:"//sup-1313771335.cos.ap-guangzhou.myqcloud.com/myMusic.json"}).then(t=>{t.data.forEach(t=>{this.musicList.push(t.src),this.musicName.push(t.name)}),this.init()})},init(){let t=this.musicName.length,e=Math.floor(Math.random()*t);this.currAudioIndex=e,this.audio=this.$refs.audio,this.title=this.musicName[this.currAudioIndex],this.audio.src=this.musicList[this.currAudioIndex],this.audio.addEventListener("ended",()=>{this.currAudioIndex===t-1?(this.isPlay=!1,this.currAudioIndex=0,this.title=this.musicName[0],this.audio.src=this.musicList[0]):(this.currAudioIndex+=1,this.title=this.musicName[this.currAudioIndex],this.audio.src=this.musicList[this.currAudioIndex],this.audio.play())})},play(){switch(this.isPlay){case!1:this.audio.play();break;case!0:this.audio.pause();break}this.isPlay=!this.isPlay}}},m=v,_=(s("bf83"),Object(r["a"])(m,f,p,!1,null,"2bf95236",null)),g=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[t._m(0),s("div",{staticClass:"div-default"},[s("div",{staticClass:"title"},[t._v("标签")]),s("div",{staticClass:"box"},[s("span",{staticClass:"divider",on:{click:function(e){return t.select("all")}}},[t._v("全部")]),t._l(t.category,(function(e){return s("span",{key:e.id,staticClass:"divider",domProps:{textContent:t._s(e.ptype)},on:{click:function(s){return t.select(e.ptype)}}})}))],2)]),s("div",{staticClass:"div-default hide-768"},[s("div",{staticClass:"title"},[t._v("朋友")]),s("div",{staticClass:"box friendLink"},[s("p",t._l(t.friendType1,(function(e){return s("a",{key:e.id,attrs:{href:e.href,target:"_blank"}},[s("i",{staticClass:"fa",class:0==e.icotype?"fa-user":"fa-weibo"}),t._v(" "+t._s(e.name)+" ")])})),0),s("div",{staticClass:"line"}),s("p",t._l(t.friendType0,(function(e){return s("a",{key:e.id,attrs:{href:e.href,target:"_blank"}},[s("i",{staticClass:"fa fa-user"}),t._v(" "+t._s(e.name)+" ")])})),0),s("div",{staticClass:"gradient-text tips-links"},[t._v("欢迎邮件联系添加友链")])])]),s("div",{staticClass:"div-default"},[s("div",{staticClass:"title"},[t._v("公告")]),s("div",{staticClass:"box"},[s("p",[t._v("如果某天更新了博文，那就说明博主终于想起密码啦，哈哈哈~")]),s("div",{staticClass:"line"}),s("router-link",{staticClass:"divider",attrs:{to:"/"}},[t._v("返回首页")]),s("a",{staticClass:"divider",on:{click:t.tips}},[t._v("全文搜索")])],1)])]),s("div",{staticClass:"col-md-8 div-article"},[s("div",{staticClass:"div-default"},[s("div",{staticClass:"title"},[t._v("博文")]),s("div",{staticClass:"box"},[t.loading?s("div",t._l(6,(function(t){return s("div",{key:t},[s("skeleton",{attrs:{type:"text",line:"1"}}),s("div",{staticClass:"line-skeleton"})],1)})),0):t._e(),t._l(t.articles,(function(e){return s("article",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:e.pid,staticClass:"article"},[s("header",[s("h1",[s("span",{staticClass:"a-title",domProps:{textContent:t._s(e.ptitle)},on:{click:function(s){return t.detail(e.pid)}}})]),s("div",{staticClass:"a-time",domProps:{textContent:t._s(e.ptime)}})]),s("div",{staticClass:"a-subtitle",domProps:{textContent:t._s(e.pkeywords)}}),s("footer")])}))],2),s("div",{staticClass:"more",domProps:{textContent:t._s(t.message)},on:{click:t.loadMore}})])])])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"div-default div-avatar"},[s("img",{staticClass:"avatar",attrs:{src:"//q1.qlogo.cn/g?b=qq&nk=571867515&s=0",alt:"avatar"}})])}],y=s("453a"),k={name:"Blog",components:{skeleton:y["a"]},data(){return{num:0,articles:[],selected:[],category:[],friendLink:[],allArticle:[],loading:!0,message:"More"}},computed:{friendType0(){return this.friendLink.filter(t=>0===t.type)},friendType1(){return this.friendLink.filter(t=>1===t.type)}},created(){this.getBlog()},methods:{getBlog(){this.$axios({method:"get",url:"static/src/blog/article.json"}).then(t=>{this.allArticle=this.isShow(t.data),this.selected=this.handleLoad(this.isShow(t.data)),setTimeout(()=>{this.loading=!1},800)}),this.$axios({method:"get",url:"static/src/blog/category.json"}).then(t=>{this.category=t.data}),this.getFriends()},getFriends(){this.$axios({method:"get",url:"static/src/blog/friend.json"}).then(t=>{this.friendLink=t.data})},isShow(t){let e=[];return t.forEach((s,i)=>{0!==t[i].pshow&&e.push(t[i])}),e},handleLoad(t){let e=[],s=t.length,i=(s-6)/5;if(this.articles=t.splice(0,6),i>0)for(i;i>=0;i--)e.push(t.splice(0,5));return e},loadMore(){let t=this.selected.length;if(this.num<t)this.articles=this.articles.concat(this.selected[this.num]),this.num++;else if(this.num===t)this.message="No More",setTimeout(()=>{this.message="Close 😇"},500),this.num++;else{this.message="More",this.num=0;let t=setInterval(()=>{this.articles.length>6?this.articles.pop():clearInterval(t)},16)}},detail(t){this.$router.push("/blog/main/"+t)},select(t){let e=[],s=this.allArticle;"all"!==t?s.forEach((i,a)=>{s[a].ptype===t&&e.push(s[a])}):e=this.isShow(s),this.selected=this.handleLoad(e)},tips(){alert("此功能正在开发中...")}}},x=k,P=(s("0f13"),Object(r["a"])(x,b,C,!1,null,"1051d67d",null)),w=P.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"div-default title"},[s("div",[s("router-link",{attrs:{to:"/"}},[t._v("返回首页")]),s("router-link",{staticClass:"msg",attrs:{to:"/about/message"}},[t._v("留言板")])],1)])]),t._m(0),s("div",{staticClass:"col-md-7"},[s("div",{staticClass:"div-default"},[s("div",{staticClass:"box"},[s("div",{staticClass:"card-body"},[t._m(1),t._m(2),t._m(3),s("div",[s("h4",[t._v("联系方式")]),s("p",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.popup}},[t._v("公众号：渣狗啊喂(停更)")])]),t._m(4)])])])])])]),t._m(5),1==t.isPop?s("div",{staticClass:"popup",on:{click:t.popup}},[s("img",{attrs:{src:"static/img/qrcode.jpg",alt:"WeChat"}})]):t._e()])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"div-default"},[s("div",{staticClass:"title"},[t._v("个人信息")]),s("img",{attrs:{src:"//sup-1313771335.cos.ap-guangzhou.myqcloud.com/myPhoto.jpg",alt:"myPhoto"}}),s("div",{staticClass:"box"},[s("p",[s("b",[t._v("小宇 | 男 | 2000")])]),s("p",[t._v("坐标 : 广东 | 深圳")]),s("p",[t._v("在读 : 大三 | 软件专业")]),s("p",[t._v("人生最大的愿望是世界和平")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("欢迎光临")]),s("p",[t._v("我的名字叫渣狗，")]),s("p",[t._v("一个不会敲代码的小白。")]),s("p",[t._v("喜欢夏天，喜欢看不同的风景。")]),s("p",[t._v("耳机依赖患者，互联网冲浪资深选手。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("我的标签")]),s("p",[s("span",{staticClass:"badge"},[t._v('"慢热"')]),t._v(" "),s("span",{staticClass:"badge"},[t._v('"钢铁直"')]),t._v(" "),s("span",{staticClass:"badge"},[t._v("软件渣狗")]),t._v(" "),s("span",{staticClass:"badge"},[t._v("正经大学生")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("闲言碎语")]),s("p",[t._v('"不自律的人生是一种怎么样的体验？"'),s("br"),t._v(' "被命运反复羞辱，却毫无还手之力。" ')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{attrs:{href:"mailto:bombiu@126.com"}},[t._v("邮 箱：bombiu@126.com")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copyright"},[s("p",[t._v("Copyright © 2022 渣狗啊喂 All Rights Reserved.")])])}],$={name:"About",data(){return{isPop:!1}},methods:{popup(){this.isPop=!this.isPop}}},j=$,L=(s("0e59"),Object(r["a"])(j,E,A,!1,null,"272afa8d",null)),M=L.exports,O=s("323e"),S=s.n(O);s("a5d8");i["a"].use(h["a"]);const N=[{path:"/",name:"Home",component:g},{path:"/blog",name:"Blog",component:w,meta:{keepAlive:!0}},{path:"/about",name:"About",component:M},{path:"/about/message",name:"Message",component:()=>s.e("chunk-08cd2f81").then(s.bind(null,"8e2a"))},{path:"/blog/main/:id",name:"Passage",props:!0,component:()=>s.e("chunk-78f70f8a").then(s.bind(null,"6fba"))},{path:"/403",name:"Forbidden",component:()=>s.e("chunk-444fc75e").then(s.bind(null,"d97a"))},{path:"/404",name:"NotFound",component:()=>s.e("chunk-be5dede8").then(s.bind(null,"7746"))},{path:"*",redirect:"/404"}],T=new h["a"]({routes:N});S.a.configure({showSpinner:!1}),T.beforeEach((t,e,s)=>{S.a.start(),s()}),T.afterEach(()=>{S.a.done()});var I=T;s("6609");i["a"].prototype.$axios=d.a,i["a"].config.productionTip=!1,new i["a"]({router:I,render:t=>t(l)}).$mount("#app")},"592b":function(t,e,s){},6609:function(t,e,s){},8701:function(t,e,s){},bf83:function(t,e,s){"use strict";s("8701")}});