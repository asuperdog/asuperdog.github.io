(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},n={app:0},r=[];function o(t){return c.p+"static/js/"+({}[t]||t)+"."+{"chunk-08cd2f81":"c5ac8f24","chunk-4ecd983c":"91fe8c28","chunk-5c87389e":"fe71336c","chunk-77bff7d5":"d9ccad58"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-4ecd983c":1,"chunk-5c87389e":1,"chunk-77bff7d5":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="static/css/"+({}[t]||t)+"."+{"chunk-08cd2f81":"31d6cfe0","chunk-4ecd983c":"5e756a11","chunk-5c87389e":"a0aab046","chunk-77bff7d5":"1bf79ad7"}[t]+".css",n=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===n))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===s||d===n)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],h.parentNode.removeChild(h),a(r)},h.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(h);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,a[1](u)}n[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0359":function(t,e,a){},"048b":function(t,e,a){"use strict";a("592b")},"1e65":function(t,e,a){"use strict";a("0359")},"453a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skeleton"},["text"==t.type?a("div",{staticClass:"text"},[a("div",{staticClass:"line80"}),a("div",{staticClass:"line100"}),a("div",{staticClass:"line70"})]):t._e(),"img"==t.type?a("div",{staticClass:"img"},[a("div",{staticClass:"line100"})]):t._e()])},i=[],n={name:"skeleton",props:["type","line"]},r=n,o=(a("048b"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,"3986dfba",null);e["a"]=c.exports},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[t.$route.meta.keepAlive?a("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():a("router-view")],1)},n=[],r=a("2877"),o={},c=Object(r["a"])(o,i,n,!1,null,null,null),l=c.exports,d=a("bc3a"),u=a.n(d),h=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("img",{class:{play:t.isPlay},attrs:{src:"//q.qlogo.cn/g?b=qq&k=okgIcASK66f8PQmk1As8FA&s=0",alt:"avatar"}}),a("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"name"},[t._v("Go Big or Go Home")]),a("h1",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],staticClass:"music"},[a("i",{staticClass:"fa fa-music"}),t._v(" "+t._s(t.title)+" "),a("i",{staticClass:"fa fa-music"})]),a("nav",[a("router-link",{attrs:{to:"/blog"}},[t._v("Blog")]),a("router-link",{attrs:{to:"/403"}},[t._v("Work")]),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("div",{staticClass:"introduce"},[a("div",{staticClass:"animated"},[a("p",{staticStyle:{"font-size":"14px"}},[t._v("- ABOUT ME -")]),t._m(0),t._m(1),t._m(2),t._m(3),a("p",[t._v(" Mini Players "),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-play",on:{click:t.play}})]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-pause",on:{click:t.play}})])]),t._m(4)])]),a("p",{staticClass:"poem"},[t._v(t._s(t.dailyPoems.content))]),a("a",{staticClass:"hide-768",attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("粤ICP备19138440号")]),a("audio",{ref:"audio",attrs:{type:"audio/ogg",src:""}})])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Like Writing Bugs "),a("i",{staticClass:"fa fa-code"}),t._v(", ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Enjoy Live House "),a("i",{staticClass:"fa fa-hand-peace-o"}),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Resume "),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-drivers-license-o"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" My GitHub "),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{attrs:{href:"https://github.com/asuperdog",target:"_blank"}},[a("i",{staticClass:"fa fa-github-alt"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",{staticClass:"gradient-text mail"},[t._v(" Gmail dearsimons ")]),a("i",{staticClass:"fa fa-hand-o-right"}),a("a",{attrs:{href:"mailto:dearsimons@gmail.com",target:"_blank"}},[a("i",{staticClass:"fa fa-envelope"})])])}],p={name:"Home",data(){return{title:"",isPlay:!1,audioSrc:[],audioName:[],dailyPoems:[],currAudioIndex:0}},mounted(){this.getPoem(),this.getMusic()},methods:{getPoem(){const t=a("a1a0");t.load(t=>{this.dailyPoems=t.data})},getMusic(){this.$axios({method:"get",url:"//sup-1313771335.cos.ap-guangzhou.myqcloud.com/myMusic.json"}).then(t=>{t.data.forEach(t=>{this.audioSrc.push(t.src),this.audioName.push(t.name)}),this.init()})},init(){let t=this.audioName.length,e=Math.floor(Math.random()*t);this.currAudioIndex=e,this.audio=this.$refs.audio,this.title=this.audioName[this.currAudioIndex],this.audio.src=this.audioSrc[this.currAudioIndex],this.audio.addEventListener("ended",()=>{this.currAudioIndex===t-1?(this.isPlay=!1,this.currAudioIndex=0,this.title=this.audioName[0],this.audio.src=this.audioSrc[0]):(this.currAudioIndex+=1,this.title=this.audioName[this.currAudioIndex],this.audio.src=this.audioSrc[this.currAudioIndex],this.audio.play())})},play(){switch(this.isPlay){case!1:this.audio.play();break;case!0:this.audio.pause();break}this.isPlay=!this.isPlay}}},m=p,_=(a("900f"),Object(r["a"])(m,f,v,!1,null,"19a0f886",null)),g=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[t._m(0),a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("标签")]),a("div",{staticClass:"box"},[a("span",{staticClass:"divider",on:{click:function(e){return t.select("all")}}},[t._v("全部")]),t._l(t.category,(function(e){return a("span",{key:e.id,staticClass:"divider",domProps:{textContent:t._s(e.ptype)},on:{click:function(a){return t.select(e.ptype)}}})}))],2)]),a("div",{staticClass:"div-default hide-768"},[a("div",{staticClass:"title"},[t._v("朋友")]),a("div",{staticClass:"box friendLink"},[a("p",t._l(t.friendType1,(function(e){return a("a",{key:e.id,attrs:{href:e.href,target:"_blank"}},[a("i",{staticClass:"fa",class:0==e.icotype?"fa-link":"fa-weibo"}),t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"line"}),a("p",t._l(t.friendType0,(function(e){return a("a",{key:e.id,attrs:{href:e.href,target:"_blank"}},[a("i",{staticClass:"fa fa-link"}),t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"gradient-text tips-links"},[t._v("欢迎邮件联系添加友链")])])]),a("div",{staticClass:"div-default hide-768"},[a("div",{staticClass:"title"},[t._v("公告")]),a("div",{staticClass:"box"},[a("p",[t._v("如果某天更新了博文，那就说明博主终于想起密码了，哈哈哈~")]),a("div",{staticClass:"line"}),a("router-link",{staticClass:"divider",attrs:{to:"/"}},[t._v("返回首页")]),a("a",{staticClass:"divider",on:{click:t.tips}},[t._v("全文搜索")])],1)])]),a("div",{staticClass:"col-md-8 div-article"},[a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("博文")]),a("div",{staticClass:"box"},[t.loading?a("div",t._l(6,(function(t){return a("div",{key:t},[a("skeleton",{attrs:{type:"text",line:"1"}}),a("div",{staticClass:"line-skeleton"})],1)})),0):t._e(),t._l(t.articles,(function(e){return a("article",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:e.pid,staticClass:"article"},[a("header",[a("h1",[a("span",{staticClass:"a-title",domProps:{textContent:t._s(e.ptitle)},on:{click:function(a){return t.detail(e.pid)}}})]),a("div",{staticClass:"a-time",domProps:{textContent:t._s(e.ptime)}})]),a("div",{staticClass:"a-subtitle",domProps:{textContent:t._s(e.pkeywords)}}),a("footer")])}))],2),a("div",{staticClass:"more",domProps:{textContent:t._s(t.message)},on:{click:t.loadMore}})])])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"div-default div-avatar"},[a("img",{staticClass:"avatar",attrs:{src:"//q.qlogo.cn/g?b=qq&k=okgIcASK66f8PQmk1As8FA&s=0",alt:"avatar"}})])}],y=a("453a"),k={name:"Blog",components:{skeleton:y["a"]},data(){return{num:0,articles:[],selected:[],category:[],friendLink:[],allArticle:[],loading:!0,message:"More"}},computed:{friendType0(){return this.friendLink.filter(t=>0===t.type)},friendType1(){return this.friendLink.filter(t=>1===t.type)}},created(){this.getBlog()},methods:{getBlog(){this.$axios({method:"get",url:"static/src/blog/article.json"}).then(t=>{this.allArticle=this.isShow(t.data),this.selected=this.handleLoad(this.isShow(t.data)),setTimeout(()=>{this.loading=!1},800)}),this.$axios({method:"get",url:"static/src/blog/category.json"}).then(t=>{this.category=t.data}),this.getFriends()},getFriends(){this.$axios({method:"get",url:"static/src/blog/friend.json"}).then(t=>{this.friendLink=t.data})},isShow(t){let e=[];return t.forEach((a,s)=>{0!==t[s].pshow&&e.push(t[s])}),e},handleLoad(t){let e=[],a=t.length,s=(a-6)/5;if(this.articles=t.splice(0,6),s>0)for(s;s>=0;s--)e.push(t.splice(0,5));return e},loadMore(){let t=this.selected.length;if(this.num<t)this.articles=this.articles.concat(this.selected[this.num]),this.num++;else if(this.num===t)this.message="No More",setTimeout(()=>{this.message="Close 😇"},500),this.num++;else{this.message="More",this.num=0;let t=setInterval(()=>{this.articles.length>6?this.articles.pop():clearInterval(t)},16)}},detail(t){this.$router.push("/blog/main/"+t)},select(t){let e=[],a=this.allArticle;"all"!==t?a.forEach((s,i)=>{a[i].ptype===t&&e.push(a[i])}):e=this.isShow(a),this.selected=this.handleLoad(e)},tips(){alert("正在开发中...")}}},w=k,x=(a("ff70"),Object(r["a"])(w,C,b,!1,null,"b602345c",null)),P=x.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"div-default title"},[a("div",[a("router-link",{attrs:{to:"/"}},[t._v("返回首页")]),a("router-link",{staticClass:"msg",attrs:{to:"/about/message"}},[a("i",{staticClass:"fa fa-commenting"}),t._v(" 留言板")])],1)])]),t._m(0),a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"div-default"},[a("div",{staticClass:"box"},[a("div",{staticClass:"card-body"},[t._m(1),t._m(2),t._m(3),a("div",[t._m(4),a("p",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:t.popup}},[t._v("公众号：渣狗啊喂")])]),t._m(5)])])])])])]),t._m(6),1==t.isPop?a("div",{staticClass:"popup",on:{click:t.popup}},[a("img",{attrs:{src:"static/img/qrcode.jpg",alt:"WeChat"}})]):t._e()])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"div-default"},[a("div",{staticClass:"title"},[t._v("个人信息")]),a("img",{attrs:{src:"//sup-1313771335.cos.ap-guangzhou.myqcloud.com/myPhoto.jpg",alt:"myPhoto"}}),a("div",{staticClass:"box"},[a("p",[a("b",[t._v("小宇 | 男 | 2000")])]),a("p",[t._v("坐标 : 广东 深圳")]),a("p",[t._v("在读 : SZTU 计算机")]),a("p",[t._v("人生最大愿望是世界和平")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[a("i",{staticClass:"fa fa-fw fa-coffee"}),t._v(" 欢迎光临")]),a("p",[t._v("我的网名叫渣狗，")]),a("p",[t._v("一个不会敲代码的小白。")]),a("p",[t._v("喜欢夏天，喜欢看不同的风景。")]),a("p",[t._v("耳机依赖患者，互联网冲浪资深选手。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[a("i",{staticClass:"fa fa-fw fa-tags"}),t._v(" 我的标签")]),a("p",[a("span",{staticClass:"badge"},[t._v("慢热")]),t._v(" "),a("span",{staticClass:"badge"},[t._v("搞笑男")]),t._v(" "),a("span",{staticClass:"badge"},[t._v("有趣灵魂")]),t._v(" "),a("span",{staticClass:"badge"},[t._v("正经大学生")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[a("i",{staticClass:"fa fa-fw fa-comments"}),t._v(" 闲言碎语")]),a("p",[t._v('"不自律的人生是一种怎么样的体验？"'),a("br"),t._v(' "被命运反复羞辱，却毫无还手之力。" ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("i",{staticClass:"fa fa-fw fa-share-alt"}),t._v(" 联系方式")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{href:"mailto:dearsimons@gmail.com"}},[t._v("邮 箱：dearsimons")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright"},[a("p",[t._v("Copyright © 2023 渣狗啊喂 All Rights Reserved.")])])}],$={name:"About",data(){return{isPop:!1}},methods:{popup(){this.isPop=!this.isPop}}},j=$,S=(a("1e65"),Object(r["a"])(j,E,A,!1,null,"55414b09",null)),M=S.exports,N=a("323e"),O=a.n(N);a("a5d8");s["a"].use(h["a"]);const L=[{path:"/",name:"Home",component:g},{path:"/blog",name:"Blog",component:P,meta:{keepAlive:!0}},{path:"/about",name:"About",component:M},{path:"/about/message",name:"Message",component:()=>a.e("chunk-08cd2f81").then(a.bind(null,"8e2a"))},{path:"/blog/main/:id",name:"Passage",props:!0,component:()=>a.e("chunk-4ecd983c").then(a.bind(null,"6fba"))},{path:"/403",name:"Forbidden",component:()=>a.e("chunk-77bff7d5").then(a.bind(null,"d97a"))},{path:"/404",name:"NotFound",component:()=>a.e("chunk-5c87389e").then(a.bind(null,"7746"))},{path:"*",redirect:"/404"}],T=new h["a"]({routes:L});O.a.configure({showSpinner:!1}),T.beforeEach((t,e,a)=>{O.a.start(),a()}),T.afterEach(()=>{O.a.done()});var I=T;a("6609");s["a"].prototype.$axios=u.a,s["a"].config.productionTip=!1,new s["a"]({router:I,render:t=>t(l)}).$mount("#app")},"592b":function(t,e,a){},6609:function(t,e,a){},"900f":function(t,e,a){"use strict";a("cc19")},b44b:function(t,e,a){},cc19:function(t,e,a){},ff70:function(t,e,a){"use strict";a("b44b")}});