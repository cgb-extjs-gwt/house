import{$ as U,M as ot}from"./vega-scenegraph-d3a31be7.js";import{d as q}from"./vega-canvas-6169e3a3.js";import{T as at,r as lt}from"./vega-dataflow-7e3fa937.js";import{u as ft,k as ut,d as nt,z as st}from"./vega-util-7f144c9d.js";const K=4278190080;function ct(t,a){const l=t.bitmap();return(a||[]).forEach(f=>l.set(t(f.boundary[0]),t(f.boundary[3]))),[l,void 0]}function mt(t,a,l,f,i){const n=t.width,e=t.height,c=f||i,A=q(n,e).getContext("2d"),r=q(n,e).getContext("2d"),s=c&&q(n,e).getContext("2d");l.forEach(y=>j(A,y,!1)),j(r,a,!1),c&&j(s,a,!0);const h=Q(A,n,e),o=Q(r,n,e),u=c&&Q(s,n,e),m=t.bitmap(),p=c&&t.bitmap();let g,M,x,b,w,R,O,d;for(M=0;M<e;++M)for(g=0;g<n;++g)w=M*n+g,R=h[w]&K,d=o[w]&K,O=c&&u[w]&K,(R||O||d)&&(x=t(g),b=t(M),!i&&(R||d)&&m.set(x,b),c&&(R||O)&&p.set(x,b));return[m,p]}function Q(t,a,l){return new Uint32Array(t.getImageData(0,0,a,l).data.buffer)}function j(t,a,l){if(!a.length)return;const f=a[0].mark.marktype;f==="group"?a.forEach(i=>{i.items.forEach(n=>j(t,n.items,l))}):ot[f].draw(t,{items:l?a.map(ht):a})}function ht(t){const a=lt(t,{});return a.stroke&&a.strokeOpacity!==0||a.fill&&a.fillOpacity!==0?{...a,strokeOpacity:1,stroke:"#000",fillOpacity:0}:a}const L=5,T=31,H=32,C=new Uint32Array(H+1),I=new Uint32Array(H+1);I[0]=0;C[0]=~I[0];for(let t=1;t<=H;++t)I[t]=I[t-1]<<1|1,C[t]=~I[t];function dt(t,a){const l=new Uint32Array(~~((t*a+H)/H));function f(n,e){l[n]|=e}function i(n,e){l[n]&=e}return{array:l,get:(n,e)=>{const c=e*t+n;return l[c>>>L]&1<<(c&T)},set:(n,e)=>{const c=e*t+n;f(c>>>L,1<<(c&T))},clear:(n,e)=>{const c=e*t+n;i(c>>>L,~(1<<(c&T)))},getRange:(n,e,c,A)=>{let r=A,s,h,o,u;for(;r>=e;--r)if(s=r*t+n,h=r*t+c,o=s>>>L,u=h>>>L,o===u){if(l[o]&C[s&T]&I[(h&T)+1])return!0}else{if(l[o]&C[s&T]||l[u]&I[(h&T)+1])return!0;for(let m=o+1;m<u;++m)if(l[m])return!0}return!1},setRange:(n,e,c,A)=>{let r,s,h,o,u;for(;e<=A;++e)if(r=e*t+n,s=e*t+c,h=r>>>L,o=s>>>L,h===o)f(h,C[r&T]&I[(s&T)+1]);else for(f(h,C[r&T]),f(o,I[(s&T)+1]),u=h+1;u<o;++u)f(u,4294967295)},clearRange:(n,e,c,A)=>{let r,s,h,o,u;for(;e<=A;++e)if(r=e*t+n,s=e*t+c,h=r>>>L,o=s>>>L,h===o)i(h,I[r&T]|C[(s&T)+1]);else for(i(h,I[r&T]),i(o,C[(s&T)+1]),u=h+1;u<o;++u)i(u,0)},outOfBounds:(n,e,c,A)=>n<0||e<0||A>=a||c>=t}}function yt(t,a,l){const f=Math.max(1,Math.sqrt(t*a/1e6)),i=~~((t+2*l+f)/f),n=~~((a+2*l+f)/f),e=c=>~~((c+l)/f);return e.invert=c=>c*f-l,e.bitmap=()=>dt(i,n),e.ratio=f,e.padding=l,e.width=t,e.height=a,e}function xt(t,a,l,f){const i=t.width,n=t.height;return function(e){const c=e.datum.datum.items[f].items,A=c.length,r=e.datum.fontSize,s=U.width(e.datum,e.datum.text);let h=0,o,u,m,p,g,M,x;for(let b=0;b<A;++b)o=c[b].x,m=c[b].y,u=c[b].x2===void 0?o:c[b].x2,p=c[b].y2===void 0?m:c[b].y2,g=(o+u)/2,M=(m+p)/2,x=Math.abs(u-o+p-m),x>=h&&(h=x,e.x=g,e.y=M);return g=s/2,M=r/2,o=e.x-g,u=e.x+g,m=e.y-M,p=e.y+M,e.align="center",o<0&&u<=i?e.align="left":0<=o&&i<u&&(e.align="right"),e.baseline="middle",m<0&&p<=n?e.baseline="top":0<=m&&n<p&&(e.baseline="bottom"),!0}}function _(t,a,l,f,i,n){let e=l/2;return t-e<0||t+e>i||a-(e=f/2)<0||a+e>n}function P(t,a,l,f,i,n,e,c){const A=i*n/(f*2),r=t(a-A),s=t(a+A),h=t(l-(n=n/2)),o=t(l+n);return e.outOfBounds(r,h,s,o)||e.getRange(r,h,s,o)||c&&c.getRange(r,h,s,o)}function gt(t,a,l,f){const i=t.width,n=t.height,e=a[0],c=a[1];function A(r,s,h,o,u){const m=t.invert(r),p=t.invert(s);let g=h,M=n,x;if(!_(m,p,o,u,i,n)&&!P(t,m,p,u,o,g,e,c)&&!P(t,m,p,u,o,u,e,null)){for(;M-g>=1;)x=(g+M)/2,P(t,m,p,u,o,x,e,c)?M=x:g=x;if(g>h)return[m,p,g,!0]}}return function(r){const s=r.datum.datum.items[f].items,h=s.length,o=r.datum.fontSize,u=U.width(r.datum,r.datum.text);let m=l?o:0,p=!1,g=!1,M=0,x,b,w,R,O,d,y,v,k,E,S,B,F,z,D,N,G;for(let W=0;W<h;++W){for(x=s[W].x,w=s[W].y,b=s[W].x2===void 0?x:s[W].x2,R=s[W].y2===void 0?w:s[W].y2,x>b&&(G=x,x=b,b=G),w>R&&(G=w,w=R,R=G),k=t(x),S=t(b),E=~~((k+S)/2),B=t(w),z=t(R),F=~~((B+z)/2),y=E;y>=k;--y)for(v=F;v>=B;--v)N=A(y,v,m,u,o),N&&([r.x,r.y,m,p]=N);for(y=E;y<=S;++y)for(v=F;v<=z;++v)N=A(y,v,m,u,o),N&&([r.x,r.y,m,p]=N);!p&&!l&&(D=Math.abs(b-x+R-w),O=(x+b)/2,d=(w+R)/2,D>=M&&!_(O,d,u,o,i,n)&&!P(t,O,d,o,u,o,e,null)&&(M=D,r.x=O,r.y=d,g=!0))}return p||g?(O=u/2,d=o/2,e.setRange(t(r.x-O),t(r.y-d),t(r.x+O),t(r.y+d)),r.align="center",r.baseline="middle",!0):!1}}const bt=[-1,-1,1,1],pt=[-1,1,-1,1];function Mt(t,a,l,f){const i=t.width,n=t.height,e=a[0],c=a[1],A=t.bitmap();return function(r){const s=r.datum.datum.items[f].items,h=s.length,o=r.datum.fontSize,u=U.width(r.datum,r.datum.text),m=[];let p=l?o:0,g=!1,M=!1,x=0,b,w,R,O,d,y,v,k,E,S,B,F;for(let z=0;z<h;++z){for(b=s[z].x,R=s[z].y,w=s[z].x2===void 0?b:s[z].x2,O=s[z].y2===void 0?R:s[z].y2,m.push([t((b+w)/2),t((R+O)/2)]);m.length;)if([v,k]=m.pop(),!(e.get(v,k)||c.get(v,k)||A.get(v,k))){A.set(v,k);for(let D=0;D<4;++D)d=v+bt[D],y=k+pt[D],A.outOfBounds(d,y,d,y)||m.push([d,y]);if(d=t.invert(v),y=t.invert(k),E=p,S=n,!_(d,y,u,o,i,n)&&!P(t,d,y,o,u,E,e,c)&&!P(t,d,y,o,u,o,e,null)){for(;S-E>=1;)B=(E+S)/2,P(t,d,y,o,u,B,e,c)?S=B:E=B;E>p&&(r.x=d,r.y=y,p=E,g=!0)}}!g&&!l&&(F=Math.abs(w-b+O-R),d=(b+w)/2,y=(R+O)/2,F>=x&&!_(d,y,u,o,i,n)&&!P(t,d,y,o,u,o,e,null)&&(x=F,r.x=d,r.y=y,M=!0))}return g||M?(d=u/2,y=o/2,e.setRange(t(r.x-d),t(r.y-y),t(r.x+d),t(r.y+y)),r.align="center",r.baseline="middle",!0):!1}}const At=["right","center","left"],kt=["bottom","middle","top"];function wt(t,a,l,f){const i=t.width,n=t.height,e=a[0],c=a[1],A=f.length;return function(r){const s=r.boundary,h=r.datum.fontSize;if(s[2]<0||s[5]<0||s[0]>i||s[3]>n)return!1;let o=r.textWidth??0,u,m,p,g,M,x,b,w,R,O,d,y,v,k,E;for(let S=0;S<A;++S){if(u=(l[S]&3)-1,m=(l[S]>>>2&3)-1,p=u===0&&m===0||f[S]<0,g=u&&m?Math.SQRT1_2:1,M=f[S]<0?-1:1,x=s[1+u]+f[S]*u*g,d=s[4+m]+M*h*m/2+f[S]*m*g,w=d-h/2,R=d+h/2,y=t(x),k=t(w),E=t(R),!o)if(rt(y,y,k,E,e,c,x,x,w,R,s,p))o=U.width(r.datum,r.datum.text);else continue;if(O=x+M*o*u/2,x=O-o/2,b=O+o/2,y=t(x),v=t(b),rt(y,v,k,E,e,c,x,b,w,R,s,p))return r.x=u?u*M<0?b:x:O,r.y=m?m*M<0?R:w:d,r.align=At[u*M+1],r.baseline=kt[m*M+1],e.setRange(y,k,v,E),!0}return!1}}function rt(t,a,l,f,i,n,e,c,A,r,s,h){return!(i.outOfBounds(t,l,a,f)||(h&&n||i).getRange(t,l,a,f))}const V=0,X=4,Y=8,Z=0,J=1,$=2,Rt={"top-left":V+Z,top:V+J,"top-right":V+$,left:X+Z,middle:X+J,right:X+$,"bottom-left":Y+Z,bottom:Y+J,"bottom-right":Y+$},Ot={naive:xt,"reduced-search":gt,floodfill:Mt};function St(t,a,l,f,i,n,e,c,A,r,s){if(!t.length)return t;const h=Math.max(f.length,i.length),o=vt(f,h),u=Et(i,h),m=Tt(t[0].datum),p=m==="group"&&t[0].datum.items[A].marktype,g=p==="area",M=zt(m,p,c,A),x=r===null||r===1/0,b=g&&s==="naive";let w=-1,R=-1;const O=t.map(k=>{const E=x?U.width(k,k.text):void 0;return w=Math.max(w,E),R=Math.max(R,k.fontSize),{datum:k,opacity:0,x:void 0,y:void 0,align:void 0,baseline:void 0,boundary:M(k),textWidth:E}});r=r===null||r===1/0?Math.max(w,R)+Math.max(...f):r;const d=yt(a[0],a[1],r);let y;if(!b){l&&O.sort((S,B)=>l(S.datum,B.datum));let k=!1;for(let S=0;S<u.length&&!k;++S)k=u[S]===5||o[S]<0;const E=(m&&e||g)&&t.map(S=>S.datum);y=n.length||E?mt(d,E||[],n,k,g):ct(d,e&&O)}const v=g?Ot[s](d,y,e,A):wt(d,y,u,o);return O.forEach(k=>k.opacity=+v(k)),O}function vt(t,a){const l=new Float64Array(a),f=t.length;for(let i=0;i<f;++i)l[i]=t[i]||0;for(let i=f;i<a;++i)l[i]=l[f-1];return l}function Et(t,a){const l=new Int8Array(a),f=t.length;for(let i=0;i<f;++i)l[i]|=Rt[t[i]];for(let i=f;i<a;++i)l[i]=l[f-1];return l}function Tt(t){return t&&t.mark&&t.mark.marktype}function zt(t,a,l,f){const i=n=>[n.x,n.x,n.x,n.y,n.y,n.y];return t?t==="line"||t==="area"?n=>i(n.datum):a==="line"?n=>{const e=n.datum.items[f].items;return i(e.length?e[l==="start"?0:e.length-1]:{x:NaN,y:NaN})}:n=>{const e=n.datum.bounds;return[e.x1,(e.x1+e.x2)/2,e.x2,e.y1,(e.y1+e.y2)/2,e.y2]}:i}const tt=["x","y","opacity","align","baseline"],it=["top-left","left","bottom-left","top","bottom","top-right","right","bottom-right"];function et(t){at.call(this,null,t)}et.Definition={type:"Label",metadata:{modifies:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"sort",type:"compare"},{name:"anchor",type:"string",array:!0,default:it},{name:"offset",type:"number",array:!0,default:[1]},{name:"padding",type:"number",default:0,null:!0},{name:"lineAnchor",type:"string",values:["start","end"],default:"end"},{name:"markIndex",type:"number",default:0},{name:"avoidBaseMark",type:"boolean",default:!0},{name:"avoidMarks",type:"data",array:!0},{name:"method",type:"string",default:"naive"},{name:"as",type:"string",array:!0,length:tt.length,default:tt}]};ft(et,at,{transform(t,a){function l(n){const e=t[n];return st(e)&&a.modified(e.fields)}const f=t.modified();if(!(f||a.changed(a.ADD_REM)||l("sort")))return;(!t.size||t.size.length!==2)&&ut("Size parameter should be specified as a [width, height] array.");const i=t.as||tt;return St(a.materialize(a.SOURCE).source||[],t.size,t.sort,nt(t.offset==null?1:t.offset),nt(t.anchor||it),t.avoidMarks||[],t.avoidBaseMark!==!1,t.lineAnchor||"end",t.markIndex||0,t.padding===void 0?0:t.padding,t.method||"naive").forEach(n=>{const e=n.datum;e[i[0]]=n.x,e[i[1]]=n.y,e[i[2]]=n.opacity,e[i[3]]=n.align,e[i[4]]=n.baseline}),a.reflow(f).modifies(i)}});const Wt=Object.freeze(Object.defineProperty({__proto__:null,label:et},Symbol.toStringTag,{value:"Module"}));export{Wt as l};