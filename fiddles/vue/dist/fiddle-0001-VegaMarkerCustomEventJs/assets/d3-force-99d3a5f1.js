import{q as b}from"./d3-quadtree-60097750.js";import{t as F}from"./d3-timer-91fe3b35.js";import{d as L}from"./d3-dispatch-4199cc96.js";function Z(n,a){var c,x=1;n==null&&(n=0),a==null&&(a=0);function v(){var g,h=c.length,t,s=0,i=0;for(g=0;g<h;++g)t=c[g],s+=t.x,i+=t.y;for(s=(s/h-n)*x,i=(i/h-a)*x,g=0;g<h;++g)t=c[g],t.x-=s,t.y-=i}return v.initialize=function(g){c=g},v.x=function(g){return arguments.length?(n=+g,v):n},v.y=function(g){return arguments.length?(a=+g,v):a},v.strength=function(g){return arguments.length?(x=+g,v):x},v}function N(n){return function(){return n}}function C(n){return(n()-.5)*1e-6}function P(n){return n.x+n.vx}function R(n){return n.y+n.vy}function k(n){var a,c,x,v=1,g=1;typeof n!="function"&&(n=N(n==null?1:+n));function h(){for(var i,y=a.length,D,p,u,M,e,r,f=0;f<g;++f)for(D=b(a,P,R).visitAfter(t),i=0;i<y;++i)p=a[i],e=c[p.index],r=e*e,u=p.x+p.vx,M=p.y+p.vy,D.visit(l);function l(m,o,d,A,j){var w=m.data,E=m.r,z=e+E;if(w){if(w.index>p.index){var I=u-w.x-w.vx,B=M-w.y-w.vy,S=I*I+B*B;S<z*z&&(I===0&&(I=C(x),S+=I*I),B===0&&(B=C(x),S+=B*B),S=(z-(S=Math.sqrt(S)))/S*v,p.vx+=(I*=S)*(z=(E*=E)/(r+E)),p.vy+=(B*=S)*z,w.vx-=I*(z=1-z),w.vy-=B*z)}return}return o>u+z||A<u-z||d>M+z||j<M-z}}function t(i){if(i.data)return i.r=c[i.data.index];for(var y=i.r=0;y<4;++y)i[y]&&i[y].r>i.r&&(i.r=i[y].r)}function s(){if(a){var i,y=a.length,D;for(c=new Array(y),i=0;i<y;++i)D=a[i],c[D.index]=+n(D,i,a)}}return h.initialize=function(i,y){a=i,x=y,s()},h.iterations=function(i){return arguments.length?(g=+i,h):g},h.strength=function(i){return arguments.length?(v=+i,h):v},h.radius=function(i){return arguments.length?(n=typeof i=="function"?i:N(+i),s(),h):n},h}function X(n){return n.index}function T(n,a){var c=n.get(a);if(!c)throw new Error("node not found: "+a);return c}function q(n){var a=X,c=D,x,v=N(30),g,h,t,s,i,y=1;n==null&&(n=[]);function D(r){return 1/Math.min(t[r.source.index],t[r.target.index])}function p(r){for(var f=0,l=n.length;f<y;++f)for(var m=0,o,d,A,j,w,E,z;m<l;++m)o=n[m],d=o.source,A=o.target,j=A.x+A.vx-d.x-d.vx||C(i),w=A.y+A.vy-d.y-d.vy||C(i),E=Math.sqrt(j*j+w*w),E=(E-g[m])/E*r*x[m],j*=E,w*=E,A.vx-=j*(z=s[m]),A.vy-=w*z,d.vx+=j*(z=1-z),d.vy+=w*z}function u(){if(h){var r,f=h.length,l=n.length,m=new Map(h.map((d,A)=>[a(d,A,h),d])),o;for(r=0,t=new Array(f);r<l;++r)o=n[r],o.index=r,typeof o.source!="object"&&(o.source=T(m,o.source)),typeof o.target!="object"&&(o.target=T(m,o.target)),t[o.source.index]=(t[o.source.index]||0)+1,t[o.target.index]=(t[o.target.index]||0)+1;for(r=0,s=new Array(l);r<l;++r)o=n[r],s[r]=t[o.source.index]/(t[o.source.index]+t[o.target.index]);x=new Array(l),M(),g=new Array(l),e()}}function M(){if(h)for(var r=0,f=n.length;r<f;++r)x[r]=+c(n[r],r,n)}function e(){if(h)for(var r=0,f=n.length;r<f;++r)g[r]=+v(n[r],r,n)}return p.initialize=function(r,f){h=r,i=f,u()},p.links=function(r){return arguments.length?(n=r,u(),p):n},p.id=function(r){return arguments.length?(a=r,p):a},p.iterations=function(r){return arguments.length?(y=+r,p):y},p.strength=function(r){return arguments.length?(c=typeof r=="function"?r:N(+r),M(),p):c},p.distance=function(r){return arguments.length?(v=typeof r=="function"?r:N(+r),e(),p):v},p}const Y=1664525,G=1013904223,$=4294967296;function H(){let n=1;return()=>(n=(Y*n+G)%$)/$}function J(n){return n.x}function K(n){return n.y}var O=10,Q=Math.PI*(3-Math.sqrt(5));function _(n){var a,c=1,x=.001,v=1-Math.pow(x,1/300),g=0,h=.6,t=new Map,s=F(D),i=L("tick","end"),y=H();n==null&&(n=[]);function D(){p(),i.call("tick",a),c<x&&(s.stop(),i.call("end",a))}function p(e){var r,f=n.length,l;e===void 0&&(e=1);for(var m=0;m<e;++m)for(c+=(g-c)*v,t.forEach(function(o){o(c)}),r=0;r<f;++r)l=n[r],l.fx==null?l.x+=l.vx*=h:(l.x=l.fx,l.vx=0),l.fy==null?l.y+=l.vy*=h:(l.y=l.fy,l.vy=0);return a}function u(){for(var e=0,r=n.length,f;e<r;++e){if(f=n[e],f.index=e,f.fx!=null&&(f.x=f.fx),f.fy!=null&&(f.y=f.fy),isNaN(f.x)||isNaN(f.y)){var l=O*Math.sqrt(.5+e),m=e*Q;f.x=l*Math.cos(m),f.y=l*Math.sin(m)}(isNaN(f.vx)||isNaN(f.vy))&&(f.vx=f.vy=0)}}function M(e){return e.initialize&&e.initialize(n,y),e}return u(),a={tick:p,restart:function(){return s.restart(D),a},stop:function(){return s.stop(),a},nodes:function(e){return arguments.length?(n=e,u(),t.forEach(M),a):n},alpha:function(e){return arguments.length?(c=+e,a):c},alphaMin:function(e){return arguments.length?(x=+e,a):x},alphaDecay:function(e){return arguments.length?(v=+e,a):+v},alphaTarget:function(e){return arguments.length?(g=+e,a):g},velocityDecay:function(e){return arguments.length?(h=1-e,a):1-h},randomSource:function(e){return arguments.length?(y=e,t.forEach(M),a):y},force:function(e,r){return arguments.length>1?(r==null?t.delete(e):t.set(e,M(r)),a):t.get(e)},find:function(e,r,f){var l=0,m=n.length,o,d,A,j,w;for(f==null?f=1/0:f*=f,l=0;l<m;++l)j=n[l],o=e-j.x,d=r-j.y,A=o*o+d*d,A<f&&(w=j,f=A);return w},on:function(e,r){return arguments.length>1?(i.on(e,r),a):i.on(e)}}}function nn(){var n,a,c,x,v=N(-30),g,h=1,t=1/0,s=.81;function i(u){var M,e=n.length,r=b(n,J,K).visitAfter(D);for(x=u,M=0;M<e;++M)a=n[M],r.visit(p)}function y(){if(n){var u,M=n.length,e;for(g=new Array(M),u=0;u<M;++u)e=n[u],g[e.index]=+v(e,u,n)}}function D(u){var M=0,e,r,f=0,l,m,o;if(u.length){for(l=m=o=0;o<4;++o)(e=u[o])&&(r=Math.abs(e.value))&&(M+=e.value,f+=r,l+=r*e.x,m+=r*e.y);u.x=l/f,u.y=m/f}else{e=u,e.x=e.data.x,e.y=e.data.y;do M+=g[e.data.index];while(e=e.next)}u.value=M}function p(u,M,e,r){if(!u.value)return!0;var f=u.x-a.x,l=u.y-a.y,m=r-M,o=f*f+l*l;if(m*m/s<o)return o<t&&(f===0&&(f=C(c),o+=f*f),l===0&&(l=C(c),o+=l*l),o<h&&(o=Math.sqrt(h*o)),a.vx+=f*u.value*x/o,a.vy+=l*u.value*x/o),!0;if(u.length||o>=t)return;(u.data!==a||u.next)&&(f===0&&(f=C(c),o+=f*f),l===0&&(l=C(c),o+=l*l),o<h&&(o=Math.sqrt(h*o)));do u.data!==a&&(m=g[u.data.index]*x/o,a.vx+=f*m,a.vy+=l*m);while(u=u.next)}return i.initialize=function(u,M){n=u,c=M,y()},i.strength=function(u){return arguments.length?(v=typeof u=="function"?u:N(+u),y(),i):v},i.distanceMin=function(u){return arguments.length?(h=u*u,i):Math.sqrt(h)},i.distanceMax=function(u){return arguments.length?(t=u*u,i):Math.sqrt(t)},i.theta=function(u){return arguments.length?(s=u*u,i):Math.sqrt(s)},i}function tn(n){var a=N(.1),c,x,v;typeof n!="function"&&(n=N(n==null?0:+n));function g(t){for(var s=0,i=c.length,y;s<i;++s)y=c[s],y.vx+=(v[s]-y.x)*x[s]*t}function h(){if(c){var t,s=c.length;for(x=new Array(s),v=new Array(s),t=0;t<s;++t)x[t]=isNaN(v[t]=+n(c[t],t,c))?0:+a(c[t],t,c)}}return g.initialize=function(t){c=t,h()},g.strength=function(t){return arguments.length?(a=typeof t=="function"?t:N(+t),h(),g):a},g.x=function(t){return arguments.length?(n=typeof t=="function"?t:N(+t),h(),g):n},g}function rn(n){var a=N(.1),c,x,v;typeof n!="function"&&(n=N(n==null?0:+n));function g(t){for(var s=0,i=c.length,y;s<i;++s)y=c[s],y.vy+=(v[s]-y.y)*x[s]*t}function h(){if(c){var t,s=c.length;for(x=new Array(s),v=new Array(s),t=0;t<s;++t)x[t]=isNaN(v[t]=+n(c[t],t,c))?0:+a(c[t],t,c)}}return g.initialize=function(t){c=t,h()},g.strength=function(t){return arguments.length?(a=typeof t=="function"?t:N(+t),h(),g):a},g.y=function(t){return arguments.length?(n=typeof t=="function"?t:N(+t),h(),g):n},g}export{Z as a,k as b,nn as c,q as d,tn as e,_ as f,rn as g};
