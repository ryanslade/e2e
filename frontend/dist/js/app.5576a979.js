(function(t){function e(e){for(var a,i,l=e[0],o=e[1],u=e[2],v=0,p=[];v<l.length;v++)i=l[v],n[i]&&p.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,l=1;l<r.length;l++){var o=r[l];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ui/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"524c":function(t,e,r){"use strict";var a=r("8f77"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-multiline"},t._l(t.objectData,function(e){return r("div",{key:e.Name,staticClass:"column is-half"},[r("div",{staticClass:"has-text-white",class:{"has-background-danger":e.Failing,"has-background-success":!e.Failing},staticStyle:{"border-radius":"3px",padding:"2rem"}},[r("h1",{staticClass:"title is-4 has-text-white"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.Name)+"\n\t\t\t\t\t\t\t")]),r("div",{staticClass:"columns",staticStyle:{height:"100px"}},[r("div",{staticClass:"column is-one-third"},[r("p",{staticClass:"is-size-7"},[t._v("failing: "+t._s(e.Failing))]),r("p",{staticClass:"is-size-7"},[t._v("pass rate: "+t._s(Math.round(e.Successes/(e.Successes+e.Failures)*100||0))+"%")])]),e.Failing?r("div",{staticClass:"has-background-grey-dark column is-two-thirds",staticStyle:{"overflow-y":"scroll","overflow-x":"scroll",padding:"0.5rem","margin-right":"1.5rem","border-radius":"3px"}},[e.Failing?r("p",{staticClass:"is-size-7",staticStyle:{"white-space":"pre"}},[t._v(t._s(e.LastFailureOutput))]):t._e()]):t._e()])])])}))])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item",attrs:{href:"https://avocet.io"}},[r("p",{staticClass:"title",staticStyle:{padding:"0.5rem",margin:"0.5rem"}},[t._v("canary")])])])])}],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],o={name:"HelloWorld",props:{msg:String}},u=o,c=(r("524c"),r("2877")),v=Object(c["a"])(u,i,l,!1,null,"b6a59770",null);v.options.__file="HelloWorld.vue";var p=v.exports,h={name:"app",components:{HelloWorld:p}},f=h,_=Object(c["a"])(f,n,s,!1,null,null,null);_.options.__file="App.vue";var d=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(d)}}).$mount("#app")},"8f77":function(t,e,r){}});
//# sourceMappingURL=app.5576a979.js.map