(function(t){function e(e){for(var r,o,i=e[0],u=e[1],l=e[2],v=0,p=[];v<i.length;v++)o=i[v],a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ui/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"524c":function(t,e,n){"use strict";var r=n("8f77"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.testData,function(t){return n("div",{key:t.Name,staticClass:"column is-half"},[n("TestBox",{attrs:{test:t}})],1)}))])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://avocet.io"}},[n("p",{staticClass:"title",staticStyle:{padding:"0.5rem",margin:"0.5rem"}},[t._v("canary")])])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},l=u,c=(n("524c"),n("2877")),v=Object(c["a"])(l,o,i,!1,null,"b6a59770",null);v.options.__file="HelloWorld.vue";var p=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-text-white",class:t.testClasses(t.test),staticStyle:{"border-radius":"3px",padding:"2rem"}},[n("h1",{staticClass:"title is-4 has-text-white"},[t._v("\n\t\t"+t._s(t.test.Name)+"\n\t")]),n("div",{staticClass:"columns",staticStyle:{height:"100px"}},[n("div",{staticClass:"column is-one-third"},[n("p",{staticClass:"is-size-7"},[t._v("state: "+t._s(t.test.State))]),n("p",{staticClass:"is-size-7"},[t._v("pass rate: "+t._s(Math.round(t.test.Successes/(t.test.Successes+t.test.Failures)*100||0))+"%")])]),t.isFailingOrRunning(t.test)?n("Log",{attrs:{name:t.test.Name,baseOutput:t.test.LastFailureOutput,state:t.test.State}}):t._e()],1)])},h=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logbox has-background-grey-dark column is-two-thirds"},[n("p",{staticClass:"is-size-7",staticStyle:{"white-space":"pre"}},[t._v(t._s(t.output))])])},d=[],g=(n("7f7f"),{name:"Log",data:function(){return{output:""}},props:{name:"",state:"",baseOutput:""},mounted:function(){"RUNNING"!=this.state&&(this.output=this.baseOutput);var t=this;m(t),setInterval(function(){m(t)},1e3)},methods:{}}),m=function(t){if("RUNNING"==t.state){var e=new Request("/api/log/"+t.name);fetch(e).then(function(t){return t.text()}).then(function(e){t.$nextTick(function(){t.output=e})})}},b=g,k=(n("7111"),Object(c["a"])(b,_,d,!1,null,"411b00eb",null));k.options.__file="Log.vue";var j=k.exports,y={name:"TestBox",props:{test:{}},components:{Log:j},methods:{testClasses:function(t){return{"has-background-danger":"FAILED"==t.State,"has-background-success":"PASSED"==t.State,"has-background-grey-light":"RUNNING"==t.State,"has-background-grey-dark":""==t.State}},isFailing:function(t){return"FAILED"==t.State},isFailingOrRunning:function(t){return"RUNNING"==t.State||"FAILED"==t.State}}},x=y,w=Object(c["a"])(x,f,h,!1,null,null,null);w.options.__file="TestBox.vue";var S=w.exports,C={name:"app",data:function(){return{testData:[]}},components:{HelloWorld:p,TestBox:S},mounted:function(){O(this);var t=this;setInterval(function(){O(t)},1e4)},methods:{}},O=function(t){var e=new Request("/api/status");fetch(e).then(function(t){return t.json()}).then(function(e){t.$nextTick(function(){t.testData=e})})},N=C,E=Object(c["a"])(N,a,s,!1,null,null,null);E.options.__file="App.vue";var $=E.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},7111:function(t,e,n){"use strict";var r=n("f3b9"),a=n.n(r);a.a},"8f77":function(t,e,n){},f3b9:function(t,e,n){}});
//# sourceMappingURL=app.980c6895.js.map