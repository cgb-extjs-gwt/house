import{R as J}from"./vue-router-ecbe8b82.js";import{k as q,r as w,q as _,v as I,L as j,M as H,N as U,x as n,F as K,y as W,O as Q,n as Z,J as A,E as R,P as X,u as G,f as Y,D as M,H as ee,I as te}from"./@vue-83787da5.js";import{V as ne,L as oe,I as P}from"./golden-layout-d7c3be82.js";import{d as se}from"./pinia-521f6665.js";import{_ as ae}from"./index-143004ba.js";/* empty css                   */const ie=q({__name:"GlComponent",setup(l,{expose:h}){const e=w(null),r=t=>t.toString(10)+"px";return h({setPosAndSize:(t,c,S,L)=>{if(e.value){const g=e.value;g.style.left=r(t),g.style.top=r(c),g.style.width=r(S),g.style.height=r(L)}},setVisibility:t=>{if(e.value){const c=e.value;t?c.style.display="":c.style.display="none"}},setZIndex:t=>{if(e.value){const c=e.value;c.style.zIndex=t}}}),(t,c)=>(_(),I("div",{ref_key:"GlComponent",ref:e,style:{position:"absolute",overflow:"hidden"}},[j(t.$slots,"default")],512))}}),le={style:{position:"relative"}},re={style:{position:"absolute",width:"100%",height:"100%"}},ce=q({__name:"GoldenLayout",props:{config:{type:Object,default:()=>({})}},setup(l,{expose:h}){const e=l,r=w(null);let f;const x=H(w("glc_")),v=new Map,t=w(new Map),c=[];let S=0,L;const g=Q(),F=g.slots,z=async(d,y)=>{const a=F[d];if(!a)throw new Error(`addComponent: Component '${d}' not found in slots`);let p=S;return c.length>0?p=c.pop():S++,t.value.set(p,()=>a(y)),p},O=async(d,y,a=void 0)=>{if(d.length==0)throw new Error("addGlComponent: Component's type is empty");const p=await z(d,a);await Z(),f.addComponent(d,{refId:p,...a||{}},y)},B=async d=>{f.clear(),t.value.clear();const y=d.resolved?oe.fromResolved(d):d;let a=[y.root.content],p=0;for(;a.length>0;){const k=a.shift();for(let m of k)m.type=="component"?(p=await z(m.componentType,m.componentState),typeof m.componentState=="object"?m.componentState.refId=p:m.componentState={refId:p}):m.content.length>0&&a.push(m.content)}await Z(),f.loadLayout(y)},D=()=>f.saveLayout();return U(()=>{if(r.value==null)throw new Error("Golden Layout can't find the root DOM!");const d=()=>{const o=r.value;let s=o?o.offsetWidth:0,i=o?o.offsetHeight:0;f.setSize(s,i)};window.addEventListener("resize",d,{passive:!0});const y=o=>{L=r.value.getBoundingClientRect()},a=(o,s,i)=>{const u=v.get(o);if(!u||!(u!=null&&u.glc))throw new Error("handleContainerVirtualRectingRequiredEvent: Component not found");const E=o.element.getBoundingClientRect(),C=E.left-L.left,b=E.top-L.top;u.glc.setPosAndSize(C,b,s,i)},p=(o,s)=>{const i=v.get(o);if(!i||!(i!=null&&i.glc))throw new Error("handleContainerVirtualVisibilityChangeRequiredEvent: Component not found");i.glc.setVisibility(s)},k=(o,s,i)=>{const u=v.get(o);if(!u||!(u!=null&&u.glc))throw new Error("handleContainerVirtualZIndexChangeRequiredEvent: Component not found");u.glc.setZIndex(i)},m=(o,s)=>{let i=-1;if(s&&s.componentState)i=s.componentState.refId;else throw new Error("bindComponentEventListener: component's ref id is required");const u=x.value+i,E=g==null?void 0:g.refs[u];return v.set(o,{refId:i,glc:E[0]}),o.virtualRectingRequiredEvent=(C,b,V)=>a(C,b,V),o.virtualVisibilityChangeRequiredEvent=(C,b)=>p(C,b),o.virtualZIndexChangeRequiredEvent=(C,b,V)=>k(C,b,V),{component:E,virtual:!0}},T=o=>{const s=v.get(o);if(!s||!(s!=null&&s.glc))throw new Error("handleUnbindComponentEvent: Component not found");v.delete(o),t.value.delete(s.refId),c.push(s.refId)};f=new ne(r.value,m,T),f.beforeVirtualRectingEvent=y,e.config&&B(e.config)}),h({addGlComponent:O,loadGLLayout:B,getLayoutConfig:D}),(d,y)=>(_(),I("div",le,[n("div",{ref_key:"GLRoot",ref:r,style:{position:"absolute",width:"100%",height:"100%"}},null,512),n("div",re,[(_(!0),I(K,null,W(t.value,a=>(_(),A(ie,{key:a[0],ref_for:!0,ref:G(x)+a[0]},{default:R(()=>[(_(),A(X(a[1])))]),_:2},1024))),128))])]))}}),de={root:{type:P.column,content:[{type:"component",title:"Top",header:{show:"top"},isClosable:!1,reorderEnabled:!1,componentType:"Content1",width:20,componentState:{main:!0,route:"/"}},{type:P.column,content:[{type:"component",title:"Component 2",header:{show:"top"},isClosable:!0,reorderEnabled:!0,componentType:"Content2",width:10,componentState:void 0}]}]}},$={default:de},ue=se("counter",()=>{const l=w(2),h=Y(()=>l.value*2);function e(){l.value++}function r(){l.value>2&&l.value--}function f(){l.value=2}return{count:l,doubleCount:h,increment:e,decrement:r,zero:f}}),N=l=>(ee("data-v-afbb6413"),l=l(),te(),l),fe={class:"full-height"},pe=N(()=>n("div",{class:"card text-white bg-danger mb-3",style:{height:"calc(100%) !important"}},[n("div",{class:"card-body"},[n("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content.")])],-1)),me=N(()=>n("div",{class:"card text-white bg-success mb-3",style:{height:"calc(100%)"}},[n("div",{class:"card-body"},[n("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content.")])],-1)),he=N(()=>n("div",{class:"card text-white bg-info mb-3",style:{height:"calc(100%)"}},[n("div",{class:"card-body"},[n("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content.")])],-1)),ve=q({__name:"FiddleView",setup(l){const h=ue(),e=w(null),r=()=>{e.value&&(h.zero(),e.value.loadGLLayout($.default))},f=()=>{if(!e.value)return;h.increment();const t="Component "+String(h.count);e.value.addGlComponent("Content3",t)},x=()=>{if(!e.value)return;const t=e.value.getLayoutConfig();localStorage.setItem("gl_config",JSON.stringify(t))},v=()=>{const t=localStorage.getItem("gl_config");if(!t||!e.value)return;const c=JSON.parse(t);e.value.loadGLLayout(c)};return(t,c)=>(_(),I("div",fe,[n("div",{id:"nav",className:"navbar navbar-expand bg-warning navbar-top hide-0-to-350"},[n("div",{class:"container-fluid"},[n("ul",{className:"navbar-nav me-auto"},[n("li",{className:"nav-item"},[n("button",{class:"btn btn-primary",onClick:r},"Reset")]),n("li",{className:"nav-item"},[n("button",{class:"btn btn-info",onClick:f}," Add ")]),n("li",{className:"nav-item"},[n("button",{class:"btn btn-danger",onClick:x},"Save")]),n("li",{className:"nav-item"},[n("button",{class:"btn btn-success",onClick:v},"Load")])])])]),M(ce,{ref_key:"GLayoutRoot",ref:e,config:G($).default,style:{width:"100%",height:"100vh"}},{Content1:R(()=>[pe]),Content2:R(()=>[me]),Content3:R(()=>[he]),route:R(()=>[M(G(J))]),_:1},8,["config"])]))}});const xe=ae(ve,[["__scopeId","data-v-afbb6413"]]);export{xe as default};