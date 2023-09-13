import{a0 as P,a2 as O,a1 as W,a4 as D,t as z,r as A,k as u,e as m,$ as B,z as S,p as L,C as R,w as U,A as E}from"./vega-util-7f144c9d.js";import{f as $,m as C}from"./topojson-client-d92368b5.js";import{t as H}from"./vega-format-43826777.js";import{d as M}from"./d3-dsv-576afacd.js";const V=/^(data:|([A-Za-z]+:)?\/\/)/,Z=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,q=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,w="file://";function G(e,t){return n=>({options:n||{},sanitize:Q,load:K,fileAccess:!!t,file:X(t),http:_(e)})}async function K(e,t){const n=await this.sanitize(e,t),s=n.href;return n.localFile?this.file(s):this.http(s,t)}async function Q(e,t){t=m({},this.options,t);const n=this.fileAccess,s={href:null};let i,r,o;const l=Z.test(e.replace(q,""));(e==null||typeof e!="string"||!l)&&u("Sanitize failure, invalid URI: "+B(e));const c=V.test(e);return(o=t.baseURL)&&!c&&(!e.startsWith("/")&&!o.endsWith("/")&&(e="/"+e),e=o+e),r=(i=e.startsWith(w))||t.mode==="file"||t.mode!=="http"&&!c&&n,i?e=e.slice(w.length):e.startsWith("//")&&(t.defaultProtocol==="file"?(e=e.slice(2),r=!0):e=(t.defaultProtocol||"http")+":"+e),Object.defineProperty(s,"localFile",{value:!!r}),s.href=e,t.target&&(s.target=t.target+""),t.rel&&(s.rel=t.rel+""),t.context==="image"&&t.crossOrigin&&(s.crossOrigin=t.crossOrigin+""),s}function X(e){return e?t=>new Promise((n,s)=>{e.readFile(t,(i,r)=>{i?s(i):n(r)})}):Y}async function Y(){u("No file system access.")}function _(e){return e?async function(t,n){const s=m({},this.options.http,n),i=n&&n.response,r=await e(t,s);return r.ok?S(r[i])?r[i]():r.text():u(r.status+""+r.statusText)}:ee}async function ee(){u("No HTTP fetch method available.")}const te=e=>e!=null&&e===e,se=e=>e==="true"||e==="false"||e===!0||e===!1,ne=e=>!Number.isNaN(Date.parse(e)),k=e=>!Number.isNaN(+e)&&!(e instanceof Date),re=e=>k(e)&&Number.isInteger(+e),x={boolean:P,integer:O,number:O,date:W,string:D,unknown:z},h=[se,re,k,ne],ie=["boolean","integer","number","date"];function oe(e,t){if(!e||!e.length)return"unknown";const n=e.length,s=h.length,i=h.map((r,o)=>o+1);for(let r=0,o=0,l,c;r<n;++r)for(c=t?e[r][t]:e[r],l=0;l<s;++l)if(i[l]&&te(c)&&!h[l](c)&&(i[l]=0,++o,o===h.length))return"string";return ie[i.reduce((r,o)=>r===0?o:r,0)-1]}function le(e,t){return t.reduce((n,s)=>(n[s]=oe(e,s),n),{})}function F(e){const t=function(n,s){const i={delimiter:e};return d(n,s?m(s,i):i)};return t.responseType="text",t}function d(e,t){return t.header&&(e=t.header.map(B).join(t.delimiter)+`
`+e),M(t.delimiter).parse(e+"")}d.responseType="text";function ce(e){return typeof Buffer=="function"&&S(Buffer.isBuffer)?Buffer.isBuffer(e):!1}function b(e,t){const n=t&&t.property?L(t.property):z;return R(e)&&!ce(e)?fe(n(e),t):n(JSON.parse(e))}b.responseType="json";function fe(e,t){return!U(e)&&E(e)&&(e=[...e]),t&&t.copy?JSON.parse(JSON.stringify(e)):e}const ae={interior:(e,t)=>e!==t,exterior:(e,t)=>e===t};function v(e,t){let n,s,i,r;return e=b(e,t),t&&t.feature?(n=$,i=t.feature):t&&t.mesh?(n=C,i=t.mesh,r=ae[t.filter]):u("Missing TopoJSON feature or mesh parameter."),s=(s=e.objects[i])?n(e,s,r):u("Invalid TopoJSON object: "+i),s&&s.features||[s]}v.responseType="json";const g={dsv:d,csv:F(","),tsv:F("	"),json:b,topojson:v};function I(e,t){return arguments.length>1?(g[e]=t,this):A(g,e)?g[e]:null}function de(e){const t=I(e);return t&&t.responseType||"text"}function be(e,t,n,s){t=t||{};const i=I(t.type||"json");return i||u("Unknown data format type: "+t.type),e=i(e,t),t.parse&&ue(e,t.parse,n,s),A(e,"columns")&&delete e.columns,e}function ue(e,t,n,s){if(!e.length)return;const i=H();n=n||i.timeParse,s=s||i.utcParse;let r=e.columns||Object.keys(e[0]),o,l,c,p,j,N;t==="auto"&&(t=le(e,r)),r=Object.keys(t);const J=r.map(T=>{const a=t[T];let y,f;if(a&&(a.startsWith("date:")||a.startsWith("utc:")))return y=a.split(/:(.+)?/,2),f=y[1],(f[0]==="'"&&f[f.length-1]==="'"||f[0]==='"'&&f[f.length-1]==='"')&&(f=f.slice(1,-1)),(y[0]==="utc"?s:n)(f);if(!x[a])throw Error("Illegal format pattern: "+T+":"+a);return x[a]});for(c=0,j=e.length,N=r.length;c<j;++c)for(o=e[c],p=0;p<N;++p)l=r[p],o[l]=J[p](o[l])}const je=G(typeof fetch<"u"&&fetch,null);export{I as a,le as b,de as c,g as f,oe as i,je as l,be as r,x as t};
