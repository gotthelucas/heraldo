webpackJsonp([1],{"1uuo":function(t,e){},"4YfG":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r={name:"Header",props:{msg:String}},i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("p",[this._v("News Tok")])])}]};var a=s("VU/8")(r,i,!1,function(t){s("bvZr")},"data-v-d60517a8",null).exports,o={name:"News",props:{titular:Array,hashes:Array,persistTags:Array,displayTags:Boolean,link:String,fuente:String,time:String},data:function(){return{pulseActive:!0,type:"",typeI:0}},methods:{typeWrite:function(){var t=this;this.typeI<this.titular[0].length&&(this.type+=this.titular[0].charAt(this.typeI),this.typeI++,setTimeout(function(){t.typeWrite()},35))}},watch:{titular:function(t){if(void 0===t[0])return this.type="",void(this.typeI=0);this.type="",this.typeI=0,this.typeWrite()}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"titular"},[t.displayTags?t._e():s("div",{staticClass:"fadeInUpBig"},t._l(t.hashes,function(e){return s("p",{staticClass:"hash fadeInUpBig"},[t._v("#"+t._s(e))])}),0),t._v(" "),t.displayTags?s("div",{staticClass:"fadeInUpBig"},[s("p",{staticClass:"tit",domProps:{innerHTML:t._s(t.type)}})]):t._e(),t._v(" "),t.displayTags?s("div",{staticClass:"tags fadeIn"},[s("div",{staticClass:"fuente"},[t._v(t._s(t.time))]),t._v(" "),s("div",{staticClass:"fuente"},[s("b",[t._v("Fuente:")]),t._v(" "+t._s(t.fuente)+" > "),s("a",{attrs:{href:t.link,target:"_blank"}},[t._v("Ver noticia completa")])]),t._v(" "),t._l(t.persistTags,function(e){return s("p",[t._v("#"+t._s(e))])})],2):t._e()])])},staticRenderFns:[]};var u=s("VU/8")(o,h,!1,function(t){s("4YfG")},"data-v-151222f3",null).exports,c=s("mtWM"),l=s.n(c),v={name:"App",components:{Header:a,News:u},data:function(){return{mainJson:{},currentStory:0,currentContent:0,currentTag:0,persistTags:[],titular:[],hashes:[],link:"",fuente:"",time:"",displayTags:!1}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;l.a.get("/static/latest.json").then(function(e){t.mainJson=e.data,t.hashes.push(decodeURIComponent(t.mainJson.stories[t.currentStory].tags[0]))})},next:function(){return this.titular=[],this.displayTags=!1,this.mainJson.stories[this.currentStory].tags.length>this.currentTag+1?(this.currentTag++,this.titular=[],this.hashes.push(decodeURIComponent(this.mainJson.stories[this.currentStory].tags[this.currentTag])),void(this.currentTag+1==this.mainJson.stories[this.currentStory].tags.length&&(this.currentContent=-1,this.persistTags=this.hashes))):this.mainJson.stories[this.currentStory].content.length>this.currentContent+1?(this.displayTags=!0,this.currentContent++,this.fuente=this.mainJson.stories[this.currentStory].content[this.currentContent].fuente,this.time=this.mainJson.stories[this.currentStory].content[this.currentContent].time,this.link=this.mainJson.stories[this.currentStory].content[this.currentContent].link,this.titular=[decodeURIComponent(this.mainJson.stories[this.currentStory].content[this.currentContent].title)],void(this.hashes=[])):this.mainJson.stories.length>this.currentStory+1?(this.currentStory++,this.currentContent=0,this.currentTag=0,this.titular=[],void(this.hashes=[decodeURIComponent(this.mainJson.stories[this.currentStory].tags[0])])):void 0}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"},on:{click:t.next}},[s("Header"),t._v(" "),s("News",{attrs:{titular:t.titular,hashes:t.hashes,persistTags:t.persistTags,displayTags:t.displayTags,link:t.link,fuente:t.fuente,time:t.time}})],1)},staticRenderFns:[]};var _=s("VU/8")(v,p,!1,function(t){s("bJaA")},null,null).exports,d=s("/ocq"),f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var m=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},f,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;n.a.use(d.a);var g=new d.a({routes:[{path:"/",name:"HelloWorld",component:m}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:g,components:{App:_},template:"<App/>"})},bJaA:function(t,e){},bvZr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6623cd5cd95f342c98a8.js.map