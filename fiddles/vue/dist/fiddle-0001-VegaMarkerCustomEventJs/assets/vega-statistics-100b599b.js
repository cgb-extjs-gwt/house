import{d as C,q as O,i as V,j as T,k as $}from"./d3-array-ee3dc224.js";function*Q(n,e){if(e==null)for(let t of n)t!=null&&t!==""&&(t=+t)>=t&&(yield t);else{let t=-1;for(let l of n)l=e(l,++t,n),l!=null&&l!==""&&(l=+l)>=l&&(yield l)}}function _(n,e,t){const l=Float64Array.from(Q(n,t));return l.sort(C),e.map(o=>O(l,o))}function x(n,e){return _(n,[.25,.5,.75],e)}function tt(n,e){const t=n.length,l=V(n,e),o=x(n,e),r=(o[2]-o[0])/1.34;return 1.06*(Math.min(l,r)||l||Math.abs(o[0])||1)*Math.pow(t,-.2)}function kt(n){const e=n.maxbins||20,t=n.base||10,l=Math.log(t),o=n.divide||[5,2];let r=n.extent[0],f=n.extent[1],u,s,i,a,c,h;const g=n.span||f-r||Math.abs(r)||1;if(n.step)u=n.step;else if(n.steps){for(a=g/e,c=0,h=n.steps.length;c<h&&n.steps[c]<a;++c);u=n.steps[Math.max(0,c-1)]}else{for(s=Math.ceil(Math.log(e)/l),i=n.minstep||0,u=Math.max(i,Math.pow(t,Math.round(Math.log(g)/l)-s));Math.ceil(g/u)>e;)u*=t;for(c=0,h=o.length;c<h;++c)a=u/o[c],a>=i&&g/a<=e&&(u=a)}a=Math.log(u);const p=a>=0?0:~~(-a/l)+1,M=Math.pow(t,-p-1);return(n.nice||n.nice===void 0)&&(a=Math.floor(r/u+M)*u,r=r<a?a-u:a,f=Math.ceil(f/u)*u),{start:r,stop:f===r?r+u:f,step:u}}var y=Math.random;function Ft(n){y=n}function It(n,e,t,l){if(!n.length)return[void 0,void 0];const o=Float64Array.from(Q(n,l)),r=o.length,f=e;let u,s,i,a;for(i=0,a=Array(f);i<f;++i){for(u=0,s=0;s<r;++s)u+=o[~~(y()*r)];a[i]=u/r}return a.sort(C),[T(a,t/2),T(a,1-t/2)]}function St(n,e,t,l){l=l||(h=>h);const o=n.length,r=new Float64Array(o);let f=0,u=1,s=l(n[0]),i=s,a=s+e,c;for(;u<o;++u){if(c=l(n[u]),c>=a){for(i=(s+i)/2;f<u;++f)r[f]=i;a=c+e,s=c}i=c}for(i=(s+i)/2;f<u;++f)r[f]=i;return t?et(r,e+e/4):r}function et(n,e){const t=n.length;let l=0,o=1,r,f;for(;n[l]===n[o];)++o;for(;o<t;){for(r=o+1;n[o]===n[r];)++r;if(n[o]-n[o-1]<e){for(f=o+(l+r-o-o>>1);f<o;)n[f++]=n[o];for(;f>o;)n[f--]=n[l]}l=o,o=r}return n}function jt(n){return function(){return n=(1103515245*n+12345)%2147483647,n/2147483647}}function zt(n,e){e==null&&(e=n,n=0);let t,l,o;const r={min(f){return arguments.length?(t=f||0,o=l-t,r):t},max(f){return arguments.length?(l=f||0,o=l-t,r):l},sample(){return t+Math.floor(o*y())},pdf(f){return f===Math.floor(f)&&f>=t&&f<l?1/o:0},cdf(f){const u=Math.floor(f);return u<t?0:u>=l?1:(u-t+1)/o},icdf(f){return f>=0&&f<=1?t-1+Math.floor(f*o):NaN}};return r.min(n).max(e)}const B=Math.sqrt(2*Math.PI),nt=Math.SQRT2;let F=NaN;function W(n,e){n=n||0,e=e??1;let t=0,l=0,o,r;if(F===F)t=F,F=NaN;else{do t=y()*2-1,l=y()*2-1,o=t*t+l*l;while(o===0||o>1);r=Math.sqrt(-2*Math.log(o)/o),t*=r,F=l*r}return n+t*e}function rt(n,e,t){t=t??1;const l=(n-(e||0))/t;return Math.exp(-.5*l*l)/(t*B)}function G(n,e,t){e=e||0,t=t??1;const l=(n-e)/t,o=Math.abs(l);let r;if(o>37)r=0;else{const f=Math.exp(-o*o/2);let u;o<7.07106781186547?(u=.0352624965998911*o+.700383064443688,u=u*o+6.37396220353165,u=u*o+33.912866078383,u=u*o+112.079291497871,u=u*o+221.213596169931,u=u*o+220.206867912376,r=f*u,u=.0883883476483184*o+1.75566716318264,u=u*o+16.064177579207,u=u*o+86.7807322029461,u=u*o+296.564248779674,u=u*o+637.333633378831,u=u*o+793.826512519948,u=u*o+440.413735824752,r=r/u):(u=o+.65,u=o+4/u,u=o+3/u,u=o+2/u,u=o+1/u,r=f/u/2.506628274631)}return l>0?1-r:r}function H(n,e,t){return n<0||n>1?NaN:(e||0)+(t??1)*nt*ot(2*n-1)}function ot(n){let e=-Math.log((1-n)*(1+n)),t;return e<6.25?(e-=3.125,t=-364441206401782e-35,t=-16850591381820166e-35+t*e,t=128584807152564e-32+t*e,t=11157877678025181e-33+t*e,t=-1333171662854621e-31+t*e,t=20972767875968562e-33+t*e,t=6637638134358324e-30+t*e,t=-4054566272975207e-29+t*e,t=-8151934197605472e-29+t*e,t=26335093153082323e-28+t*e,t=-12975133253453532e-27+t*e,t=-5415412054294628e-26+t*e,t=10512122733215323e-25+t*e,t=-4112633980346984e-24+t*e,t=-29070369957882005e-24+t*e,t=42347877827932404e-23+t*e,t=-13654692000834679e-22+t*e,t=-13882523362786469e-21+t*e,t=.00018673420803405714+t*e,t=-.000740702534166267+t*e,t=-.006033670871430149+t*e,t=.24015818242558962+t*e,t=1.6536545626831027+t*e):e<16?(e=Math.sqrt(e)-3.25,t=22137376921775787e-25,t=9075656193888539e-23+t*e,t=-27517406297064545e-23+t*e,t=18239629214389228e-24+t*e,t=15027403968909828e-22+t*e,t=-4013867526981546e-21+t*e,t=29234449089955446e-22+t*e,t=12475304481671779e-21+t*e,t=-47318229009055734e-21+t*e,t=6828485145957318e-20+t*e,t=24031110387097894e-21+t*e,t=-.0003550375203628475+t*e,t=.0009532893797373805+t*e,t=-.0016882755560235047+t*e,t=.002491442096107851+t*e,t=-.003751208507569241+t*e,t=.005370914553590064+t*e,t=1.0052589676941592+t*e,t=3.0838856104922208+t*e):Number.isFinite(e)?(e=Math.sqrt(e)-5,t=-27109920616438573e-27,t=-2555641816996525e-25+t*e,t=15076572693500548e-25+t*e,t=-3789465440126737e-24+t*e,t=761570120807834e-23+t*e,t=-1496002662714924e-23+t*e,t=2914795345090108e-23+t*e,t=-6771199775845234e-23+t*e,t=22900482228026655e-23+t*e,t=-99298272942317e-20+t*e,t=4526062597223154e-21+t*e,t=-1968177810553167e-20+t*e,t=7599527703001776e-20+t*e,t=-.00021503011930044477+t*e,t=-.00013871931833623122+t*e,t=1.0103004648645344+t*e,t=4.849906401408584+t*e):t=1/0,t*n}function lt(n,e){let t,l;const o={mean(r){return arguments.length?(t=r||0,o):t},stdev(r){return arguments.length?(l=r??1,o):l},sample:()=>W(t,l),pdf:r=>rt(r,t,l),cdf:r=>G(r,t,l),icdf:r=>H(r,t,l)};return o.mean(n).stdev(e)}function Et(n,e){const t=lt();let l=0;const o={data(r){return arguments.length?(n=r,l=r?r.length:0,o.bandwidth(e)):n},bandwidth(r){return arguments.length?(e=r,!e&&n&&(e=tt(n)),o):e},sample(){return n[~~(y()*l)]+e*t.sample()},pdf(r){let f=0,u=0;for(;u<l;++u)f+=t.pdf((r-n[u])/e);return f/e/l},cdf(r){let f=0,u=0;for(;u<l;++u)f+=t.cdf((r-n[u])/e);return f/l},icdf(){throw Error("KDE icdf not supported.")}};return o.data(n)}function ut(n,e){return n=n||0,e=e??1,Math.exp(n+W()*e)}function ft(n,e,t){if(n<=0)return 0;e=e||0,t=t??1;const l=(Math.log(n)-e)/t;return Math.exp(-.5*l*l)/(t*B*n)}function st(n,e,t){return G(Math.log(n),e,t)}function it(n,e,t){return Math.exp(H(n,e,t))}function Lt(n,e){let t,l;const o={mean(r){return arguments.length?(t=r||0,o):t},stdev(r){return arguments.length?(l=r??1,o):l},sample:()=>ut(t,l),pdf:r=>ft(r,t,l),cdf:r=>st(r,t,l),icdf:r=>it(r,t,l)};return o.mean(n).stdev(e)}function Rt(n,e){let t=0,l;function o(f){const u=[];let s=0,i;for(i=0;i<t;++i)s+=u[i]=f[i]==null?1:+f[i];for(i=0;i<t;++i)u[i]/=s;return u}const r={weights(f){return arguments.length?(l=o(e=f||[]),r):e},distributions(f){return arguments.length?(f?(t=f.length,n=f):(t=0,n=[]),r.weights(e)):n},sample(){const f=y();let u=n[t-1],s=l[0],i=0;for(;i<t-1;s+=l[++i])if(f<s){u=n[i];break}return u.sample()},pdf(f){let u=0,s=0;for(;s<t;++s)u+=l[s]*n[s].pdf(f);return u},cdf(f){let u=0,s=0;for(;s<t;++s)u+=l[s]*n[s].cdf(f);return u},icdf(){throw Error("Mixture icdf not supported.")}};return r.distributions(n).weights(e)}function at(n,e){return e==null&&(e=n??1,n=0),n+(e-n)*y()}function ct(n,e,t){return t==null&&(t=e??1,e=0),n>=e&&n<=t?1/(t-e):0}function ht(n,e,t){return t==null&&(t=e??1,e=0),n<e?0:n>t?1:(n-e)/(t-e)}function gt(n,e,t){return t==null&&(t=e??1,e=0),n>=0&&n<=1?e+n*(t-e):NaN}function Dt(n,e){let t,l;const o={min(r){return arguments.length?(t=r||0,o):t},max(r){return arguments.length?(l=r??1,o):l},sample:()=>at(t,l),pdf:r=>ct(r,t,l),cdf:r=>ht(r,t,l),icdf:r=>gt(r,t,l)};return e==null&&(e=n??1,n=0),o.min(n).max(e)}function pt(n,e,t){let l=0,o=0;for(const r of n){const f=t(r);e(r)==null||f==null||isNaN(f)||(l+=(f-l)/++o)}return{coef:[l],predict:()=>l,rSquared:0}}function I(n,e,t,l){const o=l-n*n,r=Math.abs(o)<1e-24?0:(t-n*e)/o;return[e-r*n,r]}function j(n,e,t,l){n=n.filter(g=>{let p=e(g),M=t(g);return p!=null&&(p=+p)>=p&&M!=null&&(M=+M)>=M}),l&&n.sort((g,p)=>e(g)-e(p));const o=n.length,r=new Float64Array(o),f=new Float64Array(o);let u=0,s=0,i=0,a,c,h;for(h of n)r[u]=a=+e(h),f[u]=c=+t(h),++u,s+=(a-s)/u,i+=(c-i)/u;for(u=0;u<o;++u)r[u]-=s,f[u]-=i;return[r,f,s,i]}function S(n,e,t,l){let o=-1,r,f;for(const u of n)r=e(u),f=t(u),r!=null&&(r=+r)>=r&&f!=null&&(f=+f)>=f&&l(r,f,++o)}function Y(n,e,t,l,o){let r=0,f=0;return S(n,e,t,(u,s)=>{const i=s-o(u),a=s-l;r+=i*i,f+=a*a}),1-r/f}function Mt(n,e,t){let l=0,o=0,r=0,f=0,u=0;S(n,e,t,(a,c)=>{++u,l+=(a-l)/u,o+=(c-o)/u,r+=(a*c-r)/u,f+=(a*a-f)/u});const s=I(l,o,r,f),i=a=>s[0]+s[1]*a;return{coef:s,predict:i,rSquared:Y(n,e,t,o,i)}}function Pt(n,e,t){let l=0,o=0,r=0,f=0,u=0;S(n,e,t,(a,c)=>{++u,a=Math.log(a),l+=(a-l)/u,o+=(c-o)/u,r+=(a*c-r)/u,f+=(a*a-f)/u});const s=I(l,o,r,f),i=a=>s[0]+s[1]*Math.log(a);return{coef:s,predict:i,rSquared:Y(n,e,t,o,i)}}function Tt(n,e,t){const[l,o,r,f]=j(n,e,t);let u=0,s=0,i=0,a=0,c=0,h,g,p;S(n,e,t,(b,w)=>{h=l[c++],g=Math.log(w),p=h*w,u+=(w*g-u)/c,s+=(p-s)/c,i+=(p*g-i)/c,a+=(h*p-a)/c});const[M,d]=I(s/f,u/f,i/f,a/f),m=b=>Math.exp(M+d*(b-r));return{coef:[Math.exp(M-d*r),d],predict:m,rSquared:Y(n,e,t,f,m)}}function Ut(n,e,t){let l=0,o=0,r=0,f=0,u=0,s=0;S(n,e,t,(c,h)=>{const g=Math.log(c),p=Math.log(h);++s,l+=(g-l)/s,o+=(p-o)/s,r+=(g*p-r)/s,f+=(g*g-f)/s,u+=(h-u)/s});const i=I(l,o,r,f),a=c=>i[0]*Math.pow(c,i[1]);return i[0]=Math.exp(i[0]),{coef:i,predict:a,rSquared:Y(n,e,t,u,a)}}function dt(n,e,t){const[l,o,r,f]=j(n,e,t),u=l.length;let s=0,i=0,a=0,c=0,h=0,g,p,M,d;for(g=0;g<u;)p=l[g],M=o[g++],d=p*p,s+=(d-s)/g,i+=(d*p-i)/g,a+=(d*d-a)/g,c+=(p*M-c)/g,h+=(d*M-h)/g;const m=a-s*s,b=s*m-i*i,w=(h*s-c*i)/b,N=(c*m-h*i)/b,q=-w*s,A=X=>(X=X-r,w*X*X+N*X+q+f);return{coef:[q-N*r+w*r*r+f,N-2*w*r,w],predict:A,rSquared:Y(n,e,t,f,A)}}function vt(n,e,t,l){if(l===0)return pt(n,e,t);if(l===1)return Mt(n,e,t);if(l===2)return dt(n,e,t);const[o,r,f,u]=j(n,e,t),s=o.length,i=[],a=[],c=l+1;let h,g,p,M,d;for(h=0;h<c;++h){for(p=0,M=0;p<s;++p)M+=Math.pow(o[p],h)*r[p];for(i.push(M),d=new Float64Array(c),g=0;g<c;++g){for(p=0,M=0;p<s;++p)M+=Math.pow(o[p],h+g);d[g]=M}a.push(d)}a.push(i);const m=wt(a),b=w=>{w-=f;let N=u+m[0]+m[1]*w+m[2]*w*w;for(h=3;h<c;++h)N+=m[h]*Math.pow(w,h);return N};return{coef:mt(c,m,-f,u),predict:b,rSquared:Y(n,e,t,u,b)}}function mt(n,e,t,l){const o=Array(n);let r,f,u,s;for(r=0;r<n;++r)o[r]=0;for(r=n-1;r>=0;--r)for(u=e[r],s=1,o[r]+=u,f=1;f<=r;++f)s*=(r+1-f)/f,o[r-f]+=u*Math.pow(t,f)*s;return o[0]+=l,o}function wt(n){const e=n.length-1,t=[];let l,o,r,f,u;for(l=0;l<e;++l){for(f=l,o=l+1;o<e;++o)Math.abs(n[l][o])>Math.abs(n[l][f])&&(f=o);for(r=l;r<e+1;++r)u=n[r][l],n[r][l]=n[r][f],n[r][f]=u;for(o=l+1;o<e;++o)for(r=e;r>=l;r--)n[r][o]-=n[r][l]*n[l][o]/n[l][l]}for(o=e-1;o>=0;--o){for(u=0,r=o+1;r<e;++r)u+=n[r][o]*t[r];t[o]=(n[e][o]-u)/n[o][o]}return t}const U=2,v=1e-12;function Ct(n,e,t,l){const[o,r,f,u]=j(n,e,t,!0),s=o.length,i=Math.max(2,~~(l*s)),a=new Float64Array(s),c=new Float64Array(s),h=new Float64Array(s).fill(1);for(let g=-1;++g<=U;){const p=[0,i-1];for(let d=0;d<s;++d){const m=o[d],b=p[0],w=p[1],N=m-o[b]>o[w]-m?b:w;let q=0,A=0,X=0,R=0,D=0;const J=1/Math.abs(o[N]-m||1);for(let k=b;k<=w;++k){const z=o[k],P=r[k],E=bt(Math.abs(m-z)*J)*h[k],L=z*E;q+=E,A+=L,X+=P*E,R+=P*L,D+=z*L}const[K,Z]=I(A/q,X/q,R/q,D/q);a[d]=K+Z*m,c[d]=Math.abs(r[d]-a[d]),Nt(o,d+1,p)}if(g===U)break;const M=$(c);if(Math.abs(M)<v)break;for(let d=0,m,b;d<s;++d)m=c[d]/(6*M),h[d]=m>=1?v:(b=1-m*m)*b}return qt(o,a,f,u)}function bt(n){return(n=1-n*n*n)*n*n}function Nt(n,e,t){const l=n[e];let o=t[0],r=t[1]+1;if(!(r>=n.length))for(;e>o&&n[r]-l<=l-n[o];)t[0]=++o,t[1]=r,++r}function qt(n,e,t,l){const o=n.length,r=[];let f=0,u=0,s=[],i;for(;f<o;++f)i=n[f]+t,s[0]===i?s[1]+=(e[f]-s[1])/++u:(u=0,s[1]+=l,s=[i,e[f]],r.push(s));return s[1]+=l,r}const Xt=.5*Math.PI/180;function Qt(n,e,t,l){t=t||25,l=Math.max(t,l||200);const o=M=>[M,n(M)],r=e[0],f=e[1],u=f-r,s=u/l,i=[o(r)],a=[];if(t===l){for(let M=1;M<l;++M)i.push(o(r+M/t*u));return i.push(o(f)),i}else{a.push(o(f));for(let M=t;--M>0;)a.push(o(r+M/t*u))}let c=i[0],h=a[a.length-1];const g=1/u,p=yt(c[1],a);for(;h;){const M=o((c[0]+h[0])/2);M[0]-c[0]>=s&&Yt(c,M,h,g,p)>Xt?a.push(M):(c=h,i.push(h),a.pop()),h=a[a.length-1]}return i}function yt(n,e){let t=n,l=n;const o=e.length;for(let r=0;r<o;++r){const f=e[r][1];f<t&&(t=f),f>l&&(l=f)}return 1/(l-t)}function Yt(n,e,t,l,o){const r=Math.atan2(o*(t[1]-n[1]),l*(t[0]-n[0])),f=Math.atan2(o*(e[1]-n[1]),l*(e[0]-n[0]));return Math.abs(r-f)}export{Ct as A,Pt as B,vt as C,Ut as D,dt as E,Qt as F,ut as G,W as H,at as I,Ft as J,It as a,kt as b,st as c,G as d,tt as e,ht as f,ft as g,rt as h,ct as i,St as j,H as k,gt as l,_ as m,x as n,zt as o,Et as p,it as q,y as r,jt as s,Lt as t,Rt as u,lt as v,Dt as w,pt as x,Tt as y,Mt as z};
