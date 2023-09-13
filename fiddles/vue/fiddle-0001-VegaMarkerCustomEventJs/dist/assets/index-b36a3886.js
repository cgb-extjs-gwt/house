import{o as u,b as d,f as i,F as C,g as E,j as L,t as $,k as P,l as h,q as m,v as b,x as y,y as V,z as x,A as B,B as A}from"./@vue-7acaa73e.js";import{c as O}from"./pinia-07d3d6d2.js";import{c as R,a as w}from"./vue-router-c413f8f4.js";/* empty css                   */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const g=(s,r)=>{const n=s.__vccOpts||s;for(const[c,t]of r)n[c]=t;return n},I={name:"BreadCrumbs",props:{crumbs:{type:Array,required:!0}},methods:{isLast(s){return s===this.crumbs.length-1},selected(s){s.url&&window.open(s.url,"_blank")}}},T={class:"hide-0-to-750"},S={className:"navbar-nav me-auto"},D=["onClick"],F={key:0,class:"btn btn-primary disabled"};function q(s,r,n,c,t,e){return u(),d("nav",T,[i("ul",S,[(u(!0),d(C,null,E(n.crumbs,(o,a)=>(u(),d("li",{key:a,class:"nav-item"},[i("button",{type:"button",class:L(["btn btn-primary",{disabled:e.isLast(a)}]),onClick:v=>e.selected(o)},$(o.title),11,D),e.isLast(a)?P("",!0):(u(),d("button",F," \\ "))]))),128))])])}const M=g(I,[["render",q],["__scopeId","data-v-ac5f1133"]]);const J={name:"TopNav",props:{href:{type:String,required:!0}},components:{BreadCrumbs:M},data(){return{crumbs:[{title:"fiddle.sh",url:"https://bradyhouse.github.io/"},{title:"Vue",url:"https://bradyhouse.github.io/vue/index.html"},{title:"fiddle-0001-VegaMarkerCustomEventJs",url:null}]}},methods:{onLinkClick(){window.open(this.href,"_blank")}}},z=s=>(V("data-v-563e925b"),s=s(),x(),s),G={className:"navbar navbar-expand navbar-dark bg-primary navbar-top hide-0-to-350 no-radius",style:{"padding-left":"-5px","padding-right":"-5px"}},H={class:"container-fluid"},U={className:"collapse navbar-collapse"},W=z(()=>i("ul",{className:"navbar-nav me-auto"},null,-1)),j={className:"navbar-nav my-2 my-lg-0"},K={className:"nav-item"},Q={className:"nav-item"},X={className:"nav-item"},Y={className:"nav-item"};function Z(s,r,n,c,t,e){const o=h("BreadCrumbs"),a=h("RouterLink");return u(),d("nav",G,[i("div",H,[m(o,{crumbs:t.crumbs},null,8,["crumbs"]),i("div",U,[W,i("ul",j,[i("li",K,[m(a,{to:"/"},{default:b(()=>[y("Fiddle")]),_:1})]),i("li",Q,[m(a,{to:"/about"},{default:b(()=>[y("About")]),_:1})]),i("li",X,[m(a,{to:"/docs"},{default:b(()=>[y("Docs")]),_:1})]),i("li",Y,[i("a",{className:"nav-link custom-nav-link",rel:"noreferrer",alt:"Fork me on GitHub",target:"_blank",onClick:r[0]||(r[0]=(...v)=>e.onLinkClick&&e.onLinkClick(...v)),href:"return false"}," Fork Me On Github ")])])])])])}const ee=g(J,[["render",Z],["__scopeId","data-v-563e925b"]]);const te={name:"App",components:{TopNav:ee}};function se(s,r,n,c,t,e){const o=h("TopNav"),a=h("RouterView");return u(),d(C,null,[m(o,{href:"https://github.com/bradyhouse/house/tree/master/fiddles/vue/fiddle-0001-VegaMarkerCustomEventJs"}),(u(),B(a,{key:s.$route.fullPath}))],64)}const re=g(te,[["render",se],["__scopeId","data-v-46efe384"]]),oe="modulepreload",ne=function(s){return"/vue/fiddle-0001-VegaMarkerCustomEventJs/"+s},N={},f=function(r,n,c){if(!n||n.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=ne(e),e in N)return;N[e]=!0;const o=e.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!c)for(let _=t.length-1;_>=0;_--){const p=t[_];if(p.href===e&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":oe,o||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),o)return new Promise((_,p)=>{l.addEventListener("load",_),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},ae="/vue/fiddle-0001-VegaMarkerCustomEventJs/",ie=R({history:w(ae),routes:[{path:"/",name:"fiddle",component:()=>f(()=>import("./FiddleView-529c11d4.js"),["assets/FiddleView-529c11d4.js","assets/lodash-640c8ed3.js","assets/clone-450cff4c.js","assets/vega-embed-ff57f47b.js","assets/fast-json-patch-033b2d6f.js","assets/json-stringify-pretty-compact-c32375a1.js","assets/vega-67efe240.js","assets/vega-util-7f144c9d.js","assets/vega-dataflow-7e3fa937.js","assets/vega-loader-c11e76ba.js","assets/topojson-client-d92368b5.js","assets/vega-format-43826777.js","assets/vega-time-a8429f91.js","assets/d3-time-22f10c4f.js","assets/d3-array-ee3dc224.js","assets/d3-format-927789ae.js","assets/d3-time-format-f8f728fb.js","assets/d3-dsv-576afacd.js","assets/vega-transforms-3ffc6ddc.js","assets/vega-statistics-100b599b.js","assets/vega-view-transforms-78bd20e7.js","assets/vega-scenegraph-d3a31be7.js","assets/vega-canvas-6169e3a3.js","assets/vega-scale-1e252b35.js","assets/d3-interpolate-5b94efd8.js","assets/d3-color-26a9142b.js","assets/d3-scale-7849a529.js","assets/internmap-f6506551.js","assets/d3-shape-4d85e2c4.js","assets/d3-path-8d162d8b.js","assets/vega-encode-5d9580b4.js","assets/vega-geo-44efe29a.js","assets/vega-projection-280117a9.js","assets/d3-geo-55025d8a.js","assets/d3-geo-projection-e07100d1.js","assets/vega-force-75829265.js","assets/d3-force-99d3a5f1.js","assets/d3-quadtree-60097750.js","assets/d3-timer-91fe3b35.js","assets/d3-dispatch-4199cc96.js","assets/vega-hierarchy-70c2b42d.js","assets/d3-hierarchy-874b5d0d.js","assets/vega-label-562f3212.js","assets/vega-regression-bdc56b8a.js","assets/vega-voronoi-4f9f9b37.js","assets/d3-delaunay-a951443a.js","assets/delaunator-9e8f4533.js","assets/robust-predicates-5ebaed24.js","assets/vega-wordcloud-b44ab147.js","assets/vega-crossfilter-33932804.js","assets/vega-view-863a22e3.js","assets/vega-functions-181775c3.js","assets/vega-expression-6ae7ab31.js","assets/vega-selections-65026350.js","assets/vega-runtime-9525a1d6.js","assets/vega-parser-ced350e5.js","assets/vega-event-selector-ab613927.js","assets/vega-interpreter-639133e5.js","assets/vega-lite-c92f86a8.js","assets/fast-deep-equal-a731f113.js","assets/fast-json-stable-stringify-a89d3ca4.js","assets/vega-schema-url-parser-6a596cb2.js","assets/vega-themes-b87a000a.js","assets/vega-tooltip-3e36d24f.js","assets/axios-4a70c6fc.js","assets/@vue-7acaa73e.js","assets/pinia-07d3d6d2.js","assets/vue-router-c413f8f4.js","assets/FiddleView-bf0f09dc.css","assets/bootswatch-cef26a8e.css"])},{path:"/docs",name:"docs",component:()=>f(()=>import("./DocsView-291b1e03.js"),["assets/DocsView-291b1e03.js","assets/@vue-7acaa73e.js","assets/pinia-07d3d6d2.js","assets/vue-router-c413f8f4.js","assets/DocsView-8e9c2a09.css","assets/bootswatch-cef26a8e.css"])},{path:"/about",name:"about",component:()=>f(()=>import("./AboutView-216c809a.js"),["assets/AboutView-216c809a.js","assets/marked-c8013ea5.js","assets/@vue-7acaa73e.js","assets/pinia-07d3d6d2.js","assets/vue-router-c413f8f4.js","assets/AboutView-73cf44cc.css","assets/bootswatch-cef26a8e.css"])},{path:"/404",component:()=>f(()=>import("./404View-c3d70ff0.js"),["assets/404View-c3d70ff0.js","assets/@vue-7acaa73e.js","assets/pinia-07d3d6d2.js","assets/vue-router-c413f8f4.js","assets/bootswatch-cef26a8e.css"])},{path:"/:catchAll(.*)",beforeEnter:ce,redirect:"/404"}]});function ce(s,r,n){r.fullPath==="/"||r.fullPath.includes("index.html")?n("/"):n()}const k=A(re);k.use(O());k.use(ie);k.mount("#app");export{g as _};
