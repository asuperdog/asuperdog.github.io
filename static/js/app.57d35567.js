(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},n={app:0},r=[];function o(t){return c.p+"static/js/"+({}[t]||t)+"."+{"chunk-08cd2f81":"3e71e47a","chunk-39e84e6a":"d0a56d9c","chunk-5a1c14f6":"71c55e9b"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-5a1c14f6":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var i="static/css/"+({}[t]||t)+"."+{"chunk-08cd2f81":"31d6cfe0","chunk-39e84e6a":"31d6cfe0","chunk-5a1c14f6":"b41723bb"}[t]+".css",n=c.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===n))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===i||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete s[t],f.parentNode.removeChild(f),a(r)},f.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){s[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}n[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"048b":function(t,e,a){"use strict";a("592b")},"0600":function(t,e,a){"use strict";a("48e1")},"453a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skeleton"},["text"==t.type?a("div",{staticClass:"text"},[a("div",{staticClass:"line80"}),a("div",{staticClass:"line100"}),a("div",{staticClass:"line70"})]):t._e(),"img"==t.type?a("div",{staticClass:"img"},[a("div",{staticClass:"line100"})]):t._e()])},s=[],n={name:"skeleton",props:["type","line"]},r=n,o=(a("048b"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"3986dfba",null);e["a"]=c.exports},"48e1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[t.$route.meta.keepAlive?a("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():a("router-view")],1)},n=[],r=a("2877"),o={},c=Object(r["a"])(o,s,n,!1,null,null,null),l=c.exports,u=a("bc3a"),d=a.n(u),f=a("2f62"),v=a("bfa9");i["a"].use(f["a"]);var p=new f["a"].Store({state:{idList:[]},mutations:{saveIdList:function(t,e){t.idList=e}},plugins:[new v["a"]({}).plugin]}),h=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("img",{class:{play:t.isPlay},attrs:{src:a("a6d3"),alt:"avatar"},on:{click:t.play}}),i("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"name"},[t._v("Go Big or Go Home")]),i("h1",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],staticClass:"music"},[i("i",{staticClass:"fa fa-music"}),t._v(" "+t._s(t.title)+" "),i("i",{staticClass:"fa fa-music"})]),i("nav",[i("router-link",{attrs:{to:"/blog"}},[t._v("Blog")]),i("a",{attrs:{href:"/main/#/work",target:"_blank"}},[t._v("Work")]),i("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._m(0),i("p",{staticStyle:{color:"#999"}},[t._v("Tips: 点击头像试试哦!")]),i("a",{staticClass:"hide-768",attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("粤ICP备19138440号")]),i("audio",{ref:"audio",attrs:{type:"audio/ogg",src:""}})])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduce"},[a("div",{staticClass:"animated"},[a("p",{staticStyle:{"font-size":"14px"}},[t._v("- ABOUT ME -")]),a("p",[t._v(" Like Writing Bugs "),a("i",{staticClass:"fa fa-code"}),t._v(", ")]),a("p",[t._v("Like Movie, Like Singing.")]),a("p",[t._v("I'm Here Waiting For U~")]),a("p",[t._v(" Resume "),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{attrs:{href:"static/src/resume.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-drivers-license-o"})])]),a("p",[t._v(" My GitHub "),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{attrs:{href:"https://github.com/asuperdog",target:"_blank"}},[a("i",{staticClass:"fa fa-github-alt"})])]),a("p",[t._v(" My Telegram "),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{attrs:{href:"https://telegram.me/isuperdog",target:"_blank"}},[a("i",{staticClass:"fa fa-paper-plane-o"})])]),a("p",[t._v(" Mail "),a("i",{staticClass:"fa fa-hand-o-right"}),t._v(" "),a("span",{staticClass:"gradient-text mail"},[t._v("bombiu@126.com")])])])])}],_=(a("159b"),a("b0c0"),{name:"Home",data:function(){return{title:"",isPlay:!1,musicName:[],musicList:[],currAudioIndex:0}},mounted:function(){this.getMusic()},methods:{getMusic:function(){var t=this;this.$axios({method:"get",url:"//cdn.jsdelivr.net/gh/asuperdog/myrepo@master/myMusic.json?v=2"}).then((function(e){e.data.forEach((function(e){t.musicList.push(e.src),t.musicName.push(e.name)})),t.init()}))},init:function(){var t=this,e=this.musicName.length,a=Math.floor(Math.random()*e);this.currAudioIndex=a,this.audio=this.$refs.audio,this.title=this.musicName[this.currAudioIndex],this.audio.src=this.musicList[this.currAudioIndex],this.audio.addEventListener("ended",(function(){t.currAudioIndex===e-1?(t.isPlay=!1,t.currAudioIndex=0,t.title=t.musicName[0],t.audio.src=t.musicList[0]):(t.currAudioIndex+=1,t.title=t.musicName[t.currAudioIndex],t.audio.src=t.musicList[t.currAudioIndex],t.audio.play())}))},play:function(){switch(this.isPlay){case!1:this.audio.play();break;case!0:this.audio.pause();break}this.isPlay=!this.isPlay}}}),b=_,C=(a("0600"),Object(r["a"])(b,m,g,!1,null,"33d2ea48",null)),y=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[t._m(0),a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("标签")]),a("div",{staticClass:"box"},[a("span",{staticClass:"divider",on:{click:function(e){return t.select("all")}}},[t._v("全部")]),t._l(t.category,(function(e){return a("span",{key:e.id,staticClass:"divider",domProps:{textContent:t._s(e.ptype)},on:{click:function(a){return t.select(e.ptype)}}})}))],2)]),a("div",{staticClass:"div-default hide-768"},[a("div",{staticClass:"title"},[t._v("朋友")]),a("div",{staticClass:"box friendLink"},[a("p",t._l(t.friendType1,(function(e){return a("a",{key:e.id,attrs:{href:e.href,target:"_blank"}},[a("i",{staticClass:"fa",class:0==e.icotype?"fa-user":"fa-weibo"}),t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"line"}),a("p",t._l(t.friendType0,(function(e){return a("a",{key:e.id,attrs:{href:e.href,target:"_blank"}},[a("i",{staticClass:"fa fa-user"}),t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"gradient-text tips-links"},[t._v("欢迎邮件联系添加友链")])])]),a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("导航")]),a("div",{staticClass:"box"},[a("router-link",{staticClass:"divider",attrs:{to:"/"}},[t._v("返回首页")]),a("a",{staticClass:"divider",on:{click:t.tips}},[t._v("全文搜索")])],1)])]),a("div",{staticClass:"col-md-8 div-article"},[a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("博文")]),a("div",{staticClass:"box"},[t.loading?a("div",t._l(6,(function(t){return a("div",{key:t},[a("skeleton",{attrs:{type:"text",line:"1"}}),a("div",{staticClass:"line-skeleton"})],1)})),0):t._e(),t._l(t.articles,(function(e){return a("article",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:e.pid,staticClass:"article"},[a("header",[a("h1",[a("span",{staticClass:"a-title",domProps:{textContent:t._s(e.ptitle)},on:{click:function(a){return t.detail(e.pid)}}})]),a("div",{staticClass:"a-time",domProps:{textContent:t._s(e.ptime)}})]),a("div",{staticClass:"a-subtitle",domProps:{textContent:t._s(e.pkeywords)}}),a("footer")])}))],2),a("div",{staticClass:"more",domProps:{textContent:t._s(t.message)},on:{click:t.loadMore}})])])])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"div-default div-avatar"},[i("img",{staticClass:"avatar",attrs:{src:a("a6d3"),alt:"avatar"}})])}],w=(a("4de4"),a("a434"),a("99af"),a("453a")),P={name:"Blog",components:{skeleton:w["a"]},data:function(){return{num:0,articles:[],selected:[],category:[],friendLink:[],allArticle:[],loading:!0,message:"More"}},computed:{friendType0:function(){return this.friendLink.filter((function(t){return 0===t.type}))},friendType1:function(){return this.friendLink.filter((function(t){return 1===t.type}))}},created:function(){this.getBlog()},methods:{getBlog:function(){var t=this;this.$axios({method:"get",url:"static/src/blog/article.json"}).then((function(e){t.setToStore(t.isShow(e.data)),t.allArticle=t.isShow(e.data),t.selected=t.handleLoad(t.isShow(e.data)),setTimeout((function(){t.loading=!1}),800)})),this.$axios({method:"get",url:"static/src/blog/category.json"}).then((function(e){t.category=e.data})),this.getFriends()},getFriends:function(){var t=this;this.$axios({method:"get",url:"static/src/blog/friend.json"}).then((function(e){t.friendLink=e.data}))},isShow:function(t){var e=[];return t.forEach((function(a,i){0!==t[i].pshow&&e.push(t[i])})),e},handleLoad:function(t){var e=[],a=t.length,i=(a-6)/5;if(this.articles=t.splice(0,6),i>0)for(i;i>=0;i--)e.push(t.splice(0,5));return e},loadMore:function(){var t=this,e=this.selected.length;if(this.num<e)this.articles=this.articles.concat(this.selected[this.num]),this.num++;else if(this.num===e)this.message="No More",setTimeout((function(){t.message="Close 😇"}),500),this.num++;else{this.message="More",this.num=0;var a=setInterval((function(){t.articles.length>6?t.articles.pop():clearInterval(a)}),16)}},detail:function(t){this.$router.push({name:"Passage",params:{id:t}})},select:function(t){var e=[],a=this.allArticle;"all"!==t?a.forEach((function(i,s){a[s].ptype===t&&e.push(a[s])})):e=this.isShow(a),this.setToStore(e),this.selected=this.handleLoad(e)},setToStore:function(t){var e=[];for(var a in t)e[a]=t[a].pid;this.$store.commit("saveIdList",e)},tips:function(){alert("此功能暂未开放...")}}},E=P,j=(a("7bf9"),Object(r["a"])(E,k,x,!1,null,"8397d494",null)),A=j.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"div-default title"},[a("div",[a("router-link",{attrs:{to:"/"}},[t._v("返回首页")]),a("router-link",{staticClass:"msg",attrs:{to:"/about/message"}},[t._v("留言板")])],1)])]),t._m(0),a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"div-default"},[a("div",{staticClass:"box"},[a("div",{staticClass:"card-body"},[t._m(1),t._m(2),t._m(3),a("div",[a("h4",[t._v("联系方式")]),a("p",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:t.popup}},[t._v("公众号：渣狗啊喂")])]),t._m(4)])])])])])]),t._m(5),1==t.isPop?a("div",{staticClass:"popup",on:{click:t.popup}},[a("img",{attrs:{src:"static/img/qrcode.jpg",alt:"WeChat"}})]):t._e()])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("个人信息")]),a("img",{attrs:{src:"//cdn.jsdelivr.net/gh/asuperdog/myrepo@master/myPhoto.jpg",alt:"myPhoto"}}),a("div",{staticClass:"box"},[a("p",[a("b",[t._v("小宇 | 男 | 2000")])]),a("p",[t._v("坐标 : 广东 | 深圳")]),a("p",[t._v("在读 : 大三 | 软件专业")]),a("p",[t._v("人生最大的愿望是世界和平")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("欢迎光临")]),a("p",[t._v("我的名字叫渣狗，")]),a("p",[t._v("一个不会敲代码的小白。")]),a("p",[t._v("喜欢夏天，喜欢看不同的风景。")]),a("p",[t._v("耳机依赖患者，互联网冲浪资深选手。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("我的标签")]),a("p",[a("span",{staticClass:"badge"},[t._v('"帅比"')]),t._v(" "),a("span",{staticClass:"badge"},[t._v('"钢铁直"')]),t._v(" "),a("span",{staticClass:"badge"},[t._v("软件渣狗")]),t._v(" "),a("span",{staticClass:"badge"},[t._v("正经大学生")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("闲言碎语")]),a("p",[t._v('"不自律的人生是一种怎么样的体验？"'),a("br"),t._v(' "被命运反复羞辱，却毫无还手之力。" ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{href:"mailto:bombiu@126.com"}},[t._v("邮 箱：bombiu@126.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright"},[a("p",[t._v("Copyright © 2021 渣狗啊喂 All Rights Reserved.")])])}],S={name:"About",data:function(){return{isPop:!1}},methods:{popup:function(){this.isPop=!this.isPop}}},M=S,T=(a("d8b4"),Object(r["a"])(M,L,$,!1,null,"a8d893e2",null)),O=T.exports,I=a("323e"),N=a.n(I);a("a5d8");i["a"].use(h["a"]);var B=[{path:"/",name:"Home",component:y},{path:"/blog",name:"Blog",component:A,meta:{keepAlive:!0}},{path:"/about",name:"About",component:O},{path:"/about/message",name:"Message",component:function(){return a.e("chunk-08cd2f81").then(a.bind(null,"8e2a"))}},{path:"/blog/main/:id",name:"Passage",component:function(){return a.e("chunk-5a1c14f6").then(a.bind(null,"6fba"))}},{path:"/404",name:"notFound",component:function(){return a.e("chunk-39e84e6a").then(a.bind(null,"7746"))}},{path:"*",redirect:"/404"}],H=new h["a"]({routes:B});H.beforeEach((function(t,e,a){N.a.start(),a()})),H.afterEach((function(){N.a.done()}));var F=H;a("6609");i["a"].prototype.$axios=d.a,i["a"].config.productionTip=!1,new i["a"]({store:p,router:F,render:function(t){return t(l)}}).$mount("#app")},"592b":function(t,e,a){},"60ba":function(t,e,a){},6609:function(t,e,a){},"7bf9":function(t,e,a){"use strict";a("c198")},a6d3:function(t,e,a){t.exports=a.p+"static/img/me.8ea45db8.jpg"},c198:function(t,e,a){},d8b4:function(t,e,a){"use strict";a("60ba")}});