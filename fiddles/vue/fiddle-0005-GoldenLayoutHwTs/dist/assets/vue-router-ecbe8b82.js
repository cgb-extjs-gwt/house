import{s as tt,u as Q,j as nt,n as rt,k as He,a as st,i as Y,f as N,l as qe,p as ce,r as ot,w as it}from"./@vue-83787da5.js";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof window<"u";function ct(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ae(e,t){const n={};for(const r in t){const s=t[r];n[r]=L(s)?s.map(e):e(s)}return n}const W=()=>{},L=Array.isArray,at=/\/$/,lt=e=>e.replace(at,"");function le(e,t,n="/"){let r,s={},l="",d="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(r=t.slice(0,c),l=t.slice(c+1,m>-1?m:t.length),s=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=dt(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function ut(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ft(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z(t.matched[r],n.matched[s])&&ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ht(e[n],t[n]))return!1;return!0}function ht(e,t){return L(e)?Ce(e,t):L(t)?Ce(t,e):e===t}function Ce(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function dt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function pt(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lt(e)}const mt=/^[^#]+#/;function gt(e,t){return e.replace(mt,"#")+t}function vt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function yt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=vt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function be(e,t){return(history.state?history.state.position-t:-1)+e}const fe=new Map;function Rt(e,t){fe.set(e,t)}function Et(e){const t=fe.get(e);return fe.delete(e),t}let wt=()=>location.protocol+"//"+location.host;function Ge(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let m=s.includes(e.slice(l))?e.slice(l).length:1,c=s.slice(m);return c[0]!=="/"&&(c="/"+c),Se(c,"")}return Se(n,e)+r+s}function Pt(e,t,n,r){let s=[],l=[],d=null;const m=({state:u})=>{const g=Ge(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=k?u.position-k.position:0}else r(g);s.forEach(E=>{E(n.value,R,{delta:b,type:X.pop,direction:b?b>0?F.forward:F.back:F.unknown})})};function c(){d=n.value}function f(u){s.push(u);const g=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return l.push(g),g}function o(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:te()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:c,listen:f,destroy:a}}function ke(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?te():null}}function St(e){const{history:t,location:n}=window,r={value:Ge(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,f,o){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+c:wt()+e+c;try{t[o?"replaceState":"pushState"](f,"",u),s.value=f}catch(g){console.error(g),n[o?"replace":"assign"](u)}}function d(c,f){const o=S({},t.state,ke(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});l(c,o,!0),r.value=c}function m(c,f){const o=S({},s.value,t.state,{forward:c,scroll:te()});l(o.current,o,!0);const a=S({},ke(r.value,c,null),{position:o.position+1},f);l(c,a,!1),r.value=c}return{location:r,state:s,push:m,replace:d}}function un(e){e=pt(e);const t=St(e),n=Pt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=S({location:"",base:e,go:r,createHref:gt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Ct(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ve=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function G(e,t){return S(new Error,{type:e,[Ve]:!0},t)}function I(e,t){return e instanceof Error&&Ve in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",bt={sensitive:!1,strict:!1,start:!0,end:!0},kt=/[.+*?^${}()[\]/\\]/g;function At(e,t){const n=S({},bt,t),r=[];let s=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(s+="/"),s+=u.value.replace(kt,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=u;l.push({name:R,repeatable:k,optional:b});const P=E||Oe;if(P!==Oe){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let _=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(_=b&&f.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),s+=_,g+=20,b&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}o.push(g)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function m(f){const o=f.match(d),a={};if(!o)return null;for(let u=1;u<o.length;u++){const g=o[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function c(f){let o="",a=!1;for(const u of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const g of u)if(g.type===0)o+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in f?f[R]:"";if(L(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=L(E)?E.join("/"):E;if(!P)if(b)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);o+=P}}return o||"/"}return{re:d,score:r,keys:l,parse:m,stringify:c}}function Ot(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _t(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Ot(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(_e(r))return 1;if(_e(s))return-1}return s.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const xt={type:0,value:""},Mt=/[a-zA-Z0-9_]/;function Lt(e){if(!e)return[[]];if(e==="/")return[[xt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let m=0,c,f="",o="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&a(),d()):c===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:c==="("?n=2:Mt.test(c)?u():(a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+c:n=3:o+=c;break;case 3:a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),s}function Nt(e,t,n){const r=At(Lt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function jt(e,t){const n=[],r=new Map;t=Le({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function l(o,a,u){const g=!u,R=It(o);R.aliasOf=u&&u.record;const k=Le(t,o),b=[R];if("alias"in o){const _=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of _)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,P;for(const _ of b){const{path:M}=_;if(a&&M[0]!=="/"){const B=a.record.path,j=B[B.length-1]==="/"?"":"/";_.path=a.record.path+(M&&j+M)}if(E=Nt(_,a,k),u?u.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&o.name&&!Me(E)&&d(o.name)),R.children){const B=R.children;for(let j=0;j<B.length;j++)l(B[j],E,u&&u.children[j])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return P?()=>{d(P)}:W}function d(o){if(Ke(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function m(){return n}function c(o){let a=0;for(;a<n.length&&_t(o,n[a])>=0&&(o.record.path!==n[a].record.path||!Ue(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!Me(o)&&r.set(o.record.name,o)}function f(o,a){let u,g={},R,k;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw G(1,{location:o});k=u.record.name,g=S(xe(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),o.params&&xe(o.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in o)R=o.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw G(1,{location:o,currentLocation:a});k=u.record.name,g=S({},a.params,o.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:$t(b)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:s}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function It(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Tt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $t(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const De=/#/g,Bt=/&/g,Ht=/\//g,qt=/=/g,zt=/\?/g,Qe=/\+/g,Gt=/%5B/g,Kt=/%5D/g,We=/%5E/g,Vt=/%60/g,Fe=/%7B/g,Ut=/%7C/g,Ye=/%7D/g,Dt=/%20/g;function pe(e){return encodeURI(""+e).replace(Ut,"|").replace(Gt,"[").replace(Kt,"]")}function Qt(e){return pe(e).replace(Fe,"{").replace(Ye,"}").replace(We,"^")}function he(e){return pe(e).replace(Qe,"%2B").replace(Dt,"+").replace(De,"%23").replace(Bt,"%26").replace(Vt,"`").replace(Fe,"{").replace(Ye,"}").replace(We,"^")}function Wt(e){return he(e).replace(qt,"%3D")}function Ft(e){return pe(e).replace(De,"%23").replace(zt,"%3F")}function Yt(e){return e==null?"":Ft(e).replace(Ht,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Qe," "),d=l.indexOf("="),m=ee(d<0?l:l.slice(0,d)),c=d<0?null:ee(l.slice(d+1));if(m in t){let f=t[m];L(f)||(f=t[m]=[f]),f.push(c)}else t[m]=c}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Wt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(l=>l&&he(l)):[r&&he(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Zt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Jt=Symbol(""),je=Symbol(""),me=Symbol(""),Xe=Symbol(""),de=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,m)=>{const c=a=>{a===!1?m(G(4,{from:n,to:t})):a instanceof Error?m(a):Ct(a)?m(G(2,{from:t,to:a})):(l&&r.enterCallbacks[s]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[s],t,n,c);let o=Promise.resolve(f);e.length<3&&(o=o.then(c)),o.catch(a=>m(a))})}function ue(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(en(m)){const f=(m.__vccOpts||m)[t];f&&s.push($(f,n,r,l,d))}else{let c=m();s.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=ct(f)?f.default:f;l.components[d]=o;const u=(o.__vccOpts||o)[t];return u&&$(u,n,r,l,d)()}))}}return s}function en(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ie(e){const t=Y(me),n=Y(Xe),r=N(()=>t.resolve(Q(e.to))),s=N(()=>{const{matched:c}=r.value,{length:f}=c,o=c[f-1],a=n.matched;if(!o||!a.length)return-1;const u=a.findIndex(z.bind(null,o));if(u>-1)return u;const g=Te(c[f-2]);return f>1&&Te(o)===g&&a[a.length-1].path!==g?a.findIndex(z.bind(null,c[f-2])):u}),l=N(()=>s.value>-1&&sn(n.params,r.value.params)),d=N(()=>s.value>-1&&s.value===n.matched.length-1&&ze(n.params,r.value.params));function m(c={}){return rn(c)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const tn=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ie,setup(e,{slots:t}){const n=st(Ie(e)),{options:r}=Y(me),s=N(()=>({[$e(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$e(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),nn=tn;function rn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!L(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function Te(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $e=(e,t,n)=>e??t??n,on=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(de),s=N(()=>e.route||r.value),l=Y(je,0),d=N(()=>{let f=Q(l);const{matched:o}=s.value;let a;for(;(a=o[f])&&!a.components;)f++;return f}),m=N(()=>s.value.matched[d.value]);ce(je,N(()=>d.value+1)),ce(Jt,m),ce(de,s);const c=ot();return it(()=>[c.value,m.value,e.name],([f,o,a],[u,g,R])=>{o&&(o.instances[a]=f,g&&g!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=g.leaveGuards),o.updateGuards.size||(o.updateGuards=g.updateGuards))),f&&o&&(!g||!z(o,g)||!u)&&(o.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,a=m.value,u=a&&a.components[o];if(!u)return Be(n.default,{Component:u,route:f});const g=a.props[o],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=qe(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[o]=null)},ref:c}));return Be(n.default,{Component:b,route:f})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cn=on;function fn(e){const t=jt(e.routes,e),n=e.parseQuery||Xt,r=e.stringifyQuery||Ne,s=e.history,l=D(),d=D(),m=D(),c=tt(T);let f=T;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=ae.bind(null,i=>""+i),a=ae.bind(null,Yt),u=ae.bind(null,ee);function g(i,p){let h,v;return Ke(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function R(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function E(i,p){if(p=S({},p||c.value),typeof i=="string"){const y=le(n,i,p.path),O=t.resolve({path:y.path},p),U=s.createHref(y.fullPath);return S(y,O,{params:u(O.params),hash:ee(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in i)h=S({},i,{path:le(n,i.path,p.path).path});else{const y=S({},i.params);for(const O in y)y[O]==null&&delete y[O];h=S({},i,{params:a(y)}),p.params=a(p.params)}const v=t.resolve(h,p),C=i.hash||"";v.params=o(u(v.params));const A=ut(r,S({},i,{hash:Qt(C),path:v.path})),w=s.createHref(A);return S({fullPath:A,hash:C,query:r===Ne?Zt(i.query):i.query||{}},v,{redirectedFrom:void 0,href:w})}function P(i){return typeof i=="string"?le(n,i,c.value.path):S({},i)}function _(i,p){if(f!==i)return G(8,{from:p,to:i})}function M(i){return K(i)}function B(i){return M(S(P(i),{replace:!0}))}function j(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function K(i,p){const h=f=E(i),v=c.value,C=i.state,A=i.force,w=i.replace===!0,y=j(h);if(y)return K(S(P(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:w}),p||h);const O=h;O.redirectedFrom=p;let U;return!A&&ft(r,v,h)&&(U=G(16,{to:O,from:v}),we(v,v,!0,!1)),(U?Promise.resolve(U):ve(O,v)).catch(x=>I(x)?I(x,2)?x:se(x):re(x,O,v)).then(x=>{if(x){if(I(x,2))return K(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),p||O)}else x=Re(O,v,!0,w,C);return ye(O,v,x),x})}function Ze(i,p){const h=_(i,p);return h?Promise.reject(h):Promise.resolve()}function ge(i){const p=J.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(i):i()}function ve(i,p){let h;const[v,C,A]=an(i,p);h=ue(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(O=>{h.push($(O,i,p))});const w=Ze.bind(null,i,p);return h.push(w),H(h).then(()=>{h=[];for(const y of l.list())h.push($(y,i,p));return h.push(w),H(h)}).then(()=>{h=ue(C,"beforeRouteUpdate",i,p);for(const y of C)y.updateGuards.forEach(O=>{h.push($(O,i,p))});return h.push(w),H(h)}).then(()=>{h=[];for(const y of A)if(y.beforeEnter)if(L(y.beforeEnter))for(const O of y.beforeEnter)h.push($(O,i,p));else h.push($(y.beforeEnter,i,p));return h.push(w),H(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=ue(A,"beforeRouteEnter",i,p),h.push(w),H(h))).then(()=>{h=[];for(const y of d.list())h.push($(y,i,p));return h.push(w),H(h)}).catch(y=>I(y,8)?y:Promise.reject(y))}function ye(i,p,h){m.list().forEach(v=>ge(()=>v(i,p,h)))}function Re(i,p,h,v,C){const A=_(i,p);if(A)return A;const w=p===T,y=q?history.state:{};h&&(v||w?s.replace(i.fullPath,S({scroll:w&&y&&y.scroll},C)):s.push(i.fullPath,C)),c.value=i,we(i,p,h,w),se()}let V;function Je(){V||(V=s.listen((i,p,h)=>{if(!Pe.listening)return;const v=E(i),C=j(v);if(C){K(S(C,{replace:!0}),v).catch(W);return}f=v;const A=c.value;q&&Rt(be(A.fullPath,h.delta),te()),ve(v,A).catch(w=>I(w,12)?w:I(w,2)?(K(w.to,v).then(y=>{I(y,20)&&!h.delta&&h.type===X.pop&&s.go(-1,!1)}).catch(W),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(w,v,A))).then(w=>{w=w||Re(v,A,!1),w&&(h.delta&&!I(w,8)?s.go(-h.delta,!1):h.type===X.pop&&I(w,20)&&s.go(-1,!1)),ye(v,A,w)}).catch(W)}))}let ne=D(),Ee=D(),Z;function re(i,p,h){se(i);const v=Ee.list();return v.length?v.forEach(C=>C(i,p,h)):console.error(i),Promise.reject(i)}function et(){return Z&&c.value!==T?Promise.resolve():new Promise((i,p)=>{ne.add([i,p])})}function se(i){return Z||(Z=!i,Je(),ne.list().forEach(([p,h])=>i?h(i):p()),ne.reset()),i}function we(i,p,h,v){const{scrollBehavior:C}=e;if(!q||!C)return Promise.resolve();const A=!h&&Et(be(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return rt().then(()=>C(i,p,A)).then(w=>w&&yt(w)).catch(w=>re(w,i,p))}const oe=i=>s.go(i);let ie;const J=new Set,Pe={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:B,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:Ee.add,isReady:et,install(i){const p=this;i.component("RouterLink",nn),i.component("RouterView",cn),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),q&&!ie&&c.value===T&&(ie=!0,M(s.location).catch(C=>{}));const h={};for(const C in T)Object.defineProperty(h,C,{get:()=>c.value[C],enumerable:!0});i.provide(me,p),i.provide(Xe,nt(h)),i.provide(de,c);const v=i.unmount;J.add(i),i.unmount=function(){J.delete(i),J.size<1&&(f=T,V&&V(),V=null,c.value=T,ie=!1,Z=!1),v()}}};function H(i){return i.reduce((p,h)=>p.then(()=>ge(h)),Promise.resolve())}return Pe}function an(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>z(f,m))?r.push(m):n.push(m));const c=e.matched[d];c&&(t.matched.find(f=>z(f,c))||s.push(c))}return[n,r,s]}export{cn as R,un as a,fn as c};
