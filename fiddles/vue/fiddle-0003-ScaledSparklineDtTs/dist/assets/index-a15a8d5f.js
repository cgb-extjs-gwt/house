import{o as d,c as u,y as i,F as E,z as L,A as C,B as $,C as w,D as h,f as p,E as b,G as y,H as A,I as P,J as S,K as B}from"./@vue-25c34304.js";import{c as T}from"./pinia-a9e9ac91.js";import{c as O,a as R}from"./vue-router-bac0aef5.js";/* empty css                   */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const g=(o,n)=>{const s=o.__vccOpts||o;for(const[c,t]of n)s[c]=t;return s},I={name:"BreadCrumbs",props:{crumbs:{type:Array,required:!0}},methods:{isLast(o){return o===this.crumbs.length-1},selected(o){o.url&&window.open(o.url,"_blank")}}},x={class:"hide-0-to-750"},V={className:"navbar-nav me-auto"},D=["onClick"],F={key:0,class:"btn btn-primary disabled"};function G(o,n,s,c,t,e){return d(),u("nav",x,[i("ul",V,[(d(!0),u(E,null,L(s.crumbs,(r,a)=>(d(),u("li",{key:a,class:"nav-item"},[i("button",{type:"button",class:C(["btn btn-primary",{disabled:e.isLast(a)}]),onClick:v=>e.selected(r)},$(r.title),11,D),e.isLast(a)?w("",!0):(d(),u("button",F," \\ "))]))),128))])])}const q=g(I,[["render",G],["__scopeId","data-v-9d62a9fa"]]),H={name:"TopNav",props:{href:{type:String,required:!0}},components:{BreadCrumbs:q},data(){return{crumbs:[{title:"fiddle.sh",url:"https://bradyhouse.github.io/"},{title:"Vue",url:"https://bradyhouse.github.io/vue/index.html"},{title:"Fiddle #2 ~ Sparkline Scaling",url:null}]}},methods:{onLinkClick(){window.open(this.href,"_blank")}}};const U=o=>(A("data-v-9ad5bb31"),o=o(),P(),o),z={className:"navbar navbar-expand navbar-dark bg-primary navbar-top hide-0-to-350"},K={class:"container-fluid"},W={className:"collapse navbar-collapse"},J=U(()=>i("ul",{className:"navbar-nav me-auto"},null,-1)),M={className:"navbar-nav my-2 my-lg-0"},j={className:"nav-item"},Q={className:"nav-item"},X={className:"nav-item"},Y={className:"nav-item"};function Z(o,n,s,c,t,e){const r=h("BreadCrumbs"),a=h("RouterLink");return d(),u("nav",z,[i("div",K,[p(r,{crumbs:t.crumbs},null,8,["crumbs"]),i("div",W,[J,i("ul",M,[i("li",j,[p(a,{to:"/"},{default:b(()=>[y("Fiddle")]),_:1})]),i("li",Q,[p(a,{to:"/about"},{default:b(()=>[y("About")]),_:1})]),i("li",X,[p(a,{to:"/docs"},{default:b(()=>[y("Docs")]),_:1})]),i("li",Y,[i("a",{className:"nav-link custom-nav-link",rel:"noreferrer",alt:"Fork me on GitHub",target:"_blank",onClick:n[0]||(n[0]=(...v)=>e.onLinkClick&&e.onLinkClick(...v)),href:"return false"}," Fork Me On Github ")])])])])])}const ee=g(H,[["render",Z],["__scopeId","data-v-9ad5bb31"]]),te={name:"App",components:{TopNav:ee}};function oe(o,n,s,c,t,e){const r=h("TopNav"),a=h("RouterView");return d(),u(E,null,[p(r,{href:"https://github.com/bradyhouse/house/tree/master/fiddles/vue/fiddle-0003-ScaledSparklineDtTs"}),(d(),S(a,{key:o.$route.fullPath}))],64)}const re=g(te,[["render",oe],["__scopeId","data-v-37209f5c"]]),ne="modulepreload",se=function(o){return"/vue/fiddle-0002-AgGridSparklineTs/"+o},N={},f=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=se(e),e in N)return;N[e]=!0;const r=e.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(!!c)for(let _=t.length-1;_>=0;_--){const m=t[_];if(m.href===e&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":ne,r||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),r)return new Promise((_,m)=>{l.addEventListener("load",_),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},ae=O({history:R("/vue/fiddle-0002-AgGridSparklineTs/"),routes:[{path:"/",name:"fiddle",component:()=>f(()=>import("./FiddleView-b7dc47c6.js"),["assets/FiddleView-b7dc47c6.js","assets/ag-grid-community-c307c704.js","assets/ag-grid-community-34c83a96.css","assets/@ag-grid-community-ba315227.js","assets/ag-grid-enterprise-d0bef2a8.js","assets/@vueform-ad2a7b63.js","assets/@vue-25c34304.js","assets/@vueform-a9a17144.css","assets/ag-grid-vue3-9d069204.js","assets/pinia-a9e9ac91.js","assets/vue-router-bac0aef5.js","assets/FiddleView-6be53793.css","assets/bootswatch-594a24dd.css"])},{path:"/docs",name:"docs",component:()=>f(()=>import("./HomeView-be3b0f11.js"),["assets/HomeView-be3b0f11.js","assets/@vue-25c34304.js","assets/pinia-a9e9ac91.js","assets/vue-router-bac0aef5.js","assets/HomeView-73b91eb8.css","assets/bootswatch-594a24dd.css"])},{path:"/about",name:"about",component:()=>f(()=>import("./AboutView-9d59a82e.js"),["assets/AboutView-9d59a82e.js","assets/marked-fcaba525.js","assets/@vue-25c34304.js","assets/pinia-a9e9ac91.js","assets/vue-router-bac0aef5.js","assets/AboutView-927f5dac.css","assets/bootswatch-594a24dd.css"])},{path:"/404",component:()=>f(()=>import("./404View-ba7f94dc.js"),["assets/404View-ba7f94dc.js","assets/@vue-25c34304.js","assets/pinia-a9e9ac91.js","assets/vue-router-bac0aef5.js","assets/bootswatch-594a24dd.css"])},{path:"/:catchAll(.*)",beforeEnter:ie,redirect:"/404"}]});function ie(o,n,s){n.fullPath==="/"||n.fullPath.includes("index.html")?s("/"):s()}const k=B(re);k.use(T());k.use(ae);k.mount("#app");console.log("UserAgent: ",window.navigator.userAgent);export{g as _};