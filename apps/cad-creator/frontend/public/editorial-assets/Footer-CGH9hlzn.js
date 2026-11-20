const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["editorial-assets/FooterBackdrop3D-D01W_VjD.js","editorial-assets/index-DWz992Y9.js","editorial-assets/index-RnO0WDXK.css"])))=>i.map(i=>d[i]);
import{a as e,d as t,f as n,l as r,n as i,o as a,p as o,r as s,t as c,u as l}from"./index-DWz992Y9.js";var u=i(),d=o(r(),1),f=(0,d.createContext)({});function p(e){let t=(0,d.useRef)(null);return t.current===null&&(t.current=e()),t.current}var m=typeof window<`u`?d.useLayoutEffect:d.useEffect,h=(0,d.createContext)(null);function g(e,t){e.indexOf(t)===-1&&e.push(t)}function _(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var v=(e,t,n)=>n>t?t:n<e?e:n,y=()=>{},b={},x=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function S(e){return typeof e==`object`&&!!e}var C=e=>/^0[^.\s]+$/u.test(e);function w(e){let t;return()=>(t===void 0&&(t=e()),t)}var T=e=>e,ee=(e,t)=>n=>t(e(n)),E=(...e)=>e.reduce(ee),D=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},te=class{constructor(){this.subscriptions=[]}add(e){return g(this.subscriptions,e),()=>_(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},O=e=>e*1e3,k=e=>e/1e3;function A(e,t){return t?1e3/t*e:0}var ne=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,re=1e-7,ie=12;function j(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=ne(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>re&&++s<ie);return o}function ae(e,t,n,r){if(e===t&&n===r)return T;let i=t=>j(t,0,1,e,n);return e=>e===0||e===1?e:ne(i(e),t,r)}var oe=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,se=e=>t=>1-e(1-t),ce=ae(.33,1.53,.69,.99),M=se(ce),N=oe(M),le=e=>e>=1?1:(e*=2)<1?.5*M(e):.5*(2-2**(-10*(e-1))),ue=e=>1-Math.sin(Math.acos(e)),P=se(ue),de=oe(ue),fe=ae(.42,0,1,1),pe=ae(0,0,.58,1),me=ae(.42,0,.58,1),he=e=>Array.isArray(e)&&typeof e[0]!=`number`,ge=e=>Array.isArray(e)&&typeof e[0]==`number`,_e={linear:T,easeIn:fe,easeInOut:me,easeOut:pe,circIn:ue,circInOut:de,circOut:P,backIn:M,backInOut:N,backOut:ce,anticipate:le},ve=e=>typeof e==`string`,ye=e=>{if(ge(e)){e.length;let[t,n,r,i]=e;return ae(t,n,r,i)}return ve(e)?(_e[e],`${e}`,_e[e]):e},be=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],xe={value:null,addProjectionMetrics:null};function Se(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&xe.value&&xe.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Ce=40;function we(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=be.reduce((e,n)=>(e[n]=Se(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=b.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ce),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:be.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<be.length;t++)o[be[t]].cancel(e)},state:i,steps:o}}var{schedule:F,cancel:Te,state:I,steps:Ee}=we(typeof requestAnimationFrame<`u`?requestAnimationFrame:T,!0),De;function Oe(){De=void 0}var L={now:()=>(De===void 0&&L.set(I.isProcessing||b.useManualTiming?I.timestamp:performance.now()),De),set:e=>{De=e,queueMicrotask(Oe)}},ke={layout:0,mainThread:0,waapi:0},Ae=e=>t=>typeof t==`string`&&t.startsWith(e),je=Ae(`--`),Me=Ae(`var(--`),Ne=e=>Me(e)?Pe.test(e.split(`/*`)[0].trim()):!1,Pe=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Fe(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Ie={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Le={...Ie,transform:e=>v(0,1,e)},Re={...Ie,default:1},ze=e=>Math.round(e*1e5)/1e5,Be=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ve(e){return e==null}var He=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ue=(e,t)=>n=>!!(typeof n==`string`&&He.test(n)&&n.startsWith(e)||t&&!Ve(n)&&Object.prototype.hasOwnProperty.call(n,t)),We=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Be);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Ge=e=>v(0,255,e),Ke={...Ie,transform:e=>Math.round(Ge(e))},qe={test:Ue(`rgb`,`red`),parse:We(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Ke.transform(e)+`, `+Ke.transform(t)+`, `+Ke.transform(n)+`, `+ze(Le.transform(r))+`)`};function Je(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Ye={test:Ue(`#`),parse:Je,transform:qe.transform},Xe=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ze=Xe(`deg`),Qe=Xe(`%`),R=Xe(`px`),$e=Xe(`vh`),et=Xe(`vw`),tt={...Qe,parse:e=>Qe.parse(e)/100,transform:e=>Qe.transform(e*100)},nt={test:Ue(`hsl`,`hue`),parse:We(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Qe.transform(ze(t))+`, `+Qe.transform(ze(n))+`, `+ze(Le.transform(r))+`)`},z={test:e=>qe.test(e)||Ye.test(e)||nt.test(e),parse:e=>qe.test(e)?qe.parse(e):nt.test(e)?nt.parse(e):Ye.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?qe.transform(e):nt.transform(e),getAnimatableNone:e=>{let t=z.parse(e);return t.alpha=0,z.transform(t)}},rt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function it(e){return isNaN(e)&&typeof e==`string`&&(e.match(Be)?.length||0)+(e.match(rt)?.length||0)>0}var at=`number`,ot=`color`,st=`var`,ct=`var(`,lt="${}",ut=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function dt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(ut,e=>(z.test(e)?(r.color.push(a),i.push(ot),n.push(z.parse(e))):e.startsWith(ct)?(r.var.push(a),i.push(st),n.push(e)):(r.number.push(a),i.push(at),n.push(parseFloat(e))),++a,lt)).split(lt),indexes:r,types:i}}function ft(e){return dt(e).values}function pt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===at?ze(r[a]):e===ot?z.transform(r[a]):r[a]}return i}}function mt(e){return pt(dt(e))}var ht=e=>typeof e==`number`?0:z.test(e)?z.getAnimatableNone(e):e,gt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:ht(e);function _t(e){let t=dt(e);return pt(t)(t.values.map((e,n)=>gt(e,t.split[n])))}var B={test:it,parse:ft,createTransformer:mt,getAnimatableNone:_t};function vt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function yt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=vt(s,r,e+1/3),a=vt(s,r,e),o=vt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function bt(e,t){return n=>n>0?t:e}var V=(e,t,n)=>e+(t-e)*n,xt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},St=[Ye,qe,nt],Ct=e=>St.find(t=>t.test(e));function wt(e){let t=Ct(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===nt&&(n=yt(n)),n}var Tt=(e,t)=>{let n=wt(e),r=wt(t);if(!n||!r)return bt(e,t);let i={...n};return e=>(i.red=xt(n.red,r.red,e),i.green=xt(n.green,r.green,e),i.blue=xt(n.blue,r.blue,e),i.alpha=V(n.alpha,r.alpha,e),qe.transform(i))},Et=new Set([`none`,`hidden`]);function Dt(e,t){return Et.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ot(e,t){return n=>V(e,t,n)}function kt(e){return typeof e==`number`?Ot:typeof e==`string`?Ne(e)?bt:z.test(e)?Tt:Nt:Array.isArray(e)?At:typeof e==`object`?z.test(e)?Tt:jt:bt}function At(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>kt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function jt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=kt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Mt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Nt=(e,t)=>{let n=B.createTransformer(t),r=dt(e),i=dt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Et.has(e)&&!i.values.length||Et.has(t)&&!r.values.length?Dt(e,t):E(At(Mt(r,i),i.values),n):(`${e}${t}`,bt(e,t))};function Pt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?V(e,t,n):kt(e)(e,t)}var Ft=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>F.update(t,e),stop:()=>Te(t),now:()=>I.isProcessing?I.timestamp:L.now()}},It=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Lt=2e4;function Rt(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function zt(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Rt(r),Lt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:k(i)}}var H={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Bt(e,t){return e*Math.sqrt(1-t*t)}var Vt=12;function Ht(e,t,n){let r=n;for(let n=1;n<Vt;n++)r-=e(r)/t(r);return r}var Ut=.001;function Wt({duration:e=H.duration,bounce:t=H.bounce,velocity:n=H.velocity,mass:r=H.mass}){let i,a;H.maxDuration;let o=1-t;o=v(H.minDamping,H.maxDamping,o),e=v(H.minDuration,H.maxDuration,k(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Bt(t,o),c=Math.exp(-i);return Ut-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Bt(t**2,o);return(-i(t)+Ut>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Ht(i,a,s);if(e=O(e),isNaN(c))return{stiffness:H.stiffness,damping:H.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Gt=[`duration`,`bounce`],Kt=[`stiffness`,`damping`,`mass`];function qt(e,t){return t.some(t=>e[t]!==void 0)}function Jt(e){let t={velocity:H.velocity,stiffness:H.stiffness,damping:H.damping,mass:H.mass,isResolvedFromDuration:!1,...e};if(!qt(e,Kt)&&qt(e,Gt)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*v(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:H.mass,stiffness:i,damping:a}}else{let n=Wt({...e,velocity:0});t={...t,...n,mass:H.mass},t.isResolvedFromDuration=!0}}return t}function Yt(e=H.visualDuration,t=H.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Jt({...n,velocity:-k(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=k(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?H.restSpeed.granular:H.restSpeed.default,i||=v?H.restDelta.granular:H.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Bt(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>O(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=O(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=O(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Rt(T),Lt),t=It(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}Yt.applyToOptions=e=>{let t=zt(e,100,Yt);return e.ease=t.ease,e.duration=O(t.duration),e.type=`keyframes`,e};var Xt=5;function Zt(e,t,n){let r=Math.max(t-Xt,0);return A(n-e(r),t-r)}function Qt({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Yt({keyframes:[f.value,m(f.value)],velocity:Zt(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function $t(e,t,n){let r=[],i=n||b.mix||Pt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=E(Array.isArray(t)?t[n]||T:t,a)),r.push(a)}return r}function en(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=$t(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=D(e[r],e[r+1],n);return s[r](i)};return n?t=>l(v(e[0],e[a-1],t)):l}function tn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=D(0,t,r);e.push(V(n,1,i))}}function nn(e){let t=[0];return tn(t,e.length-1),t}function rn(e,t){return e.map(e=>e*t)}function an(e,t){return e.map(()=>t||me).splice(0,e.length-1)}function on({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=he(r)?r.map(ye):ye(r),a={done:!1,value:t[0]},o=en(rn(n&&n.length===t.length?n:nn(t),e),t,{ease:Array.isArray(i)?i:an(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var sn=e=>e!==null;function cn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(sn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var ln={decay:Qt,inertia:Qt,tween:on,keyframes:on,spring:Yt};function un(e){typeof e.type==`string`&&(e.type=ln[e.type])}var dn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},fn=e=>e/100,pn=class extends dn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==L.now()&&this.tick(L.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},ke.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;un(e);let{type:t=on,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||on;s!==on&&typeof o[0]!=`number`&&(this.mixKeyframes=E(fn,Pt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Rt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,b=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(b=a)),y=v(0,1,n)*o}let x;_?(this.delayState.value=l[0],x=this.delayState):x=b.next(y),i&&!_&&(x.value=i(x.value));let{done:S}=x;!_&&s!==null&&(S=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let C=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&S);return C&&p!==Qt&&(x.value=cn(l,this.options,h,this.speed)),m&&m(x.value),C&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return k(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+k(e)}get time(){return k(this.currentTime)}set time(e){e=O(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Zt(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(L.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=k(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ft,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(L.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,ke.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function mn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var hn=e=>e*180/Math.PI,gn=e=>vn(hn(Math.atan2(e[1],e[0]))),_n={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:gn,rotateZ:gn,skewX:e=>hn(Math.atan(e[1])),skewY:e=>hn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},vn=e=>(e%=360,e<0&&(e+=360),e),yn=gn,bn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),xn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Sn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:bn,scaleY:xn,scale:e=>(bn(e)+xn(e))/2,rotateX:e=>vn(hn(Math.atan2(e[6],e[5]))),rotateY:e=>vn(hn(Math.atan2(-e[2],e[0]))),rotateZ:yn,rotate:yn,skewX:e=>hn(Math.atan(e[4])),skewY:e=>hn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Cn(e){return+!!e.includes(`scale`)}function wn(e,t){if(!e||e===`none`)return Cn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Sn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=_n,i=t}if(!i)return Cn(t);let a=r[t],o=i[1].split(`,`).map(En);return typeof a==`function`?a(o):o[a]}var Tn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return wn(n,t)};function En(e){return parseFloat(e.trim())}var Dn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],On=new Set(Dn),kn=e=>e===Ie||e===R,An=new Set([`x`,`y`,`z`]),jn=Dn.filter(e=>!An.has(e));function Mn(e){let t=[];return jn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Nn={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>wn(t,`x`),y:(e,{transform:t})=>wn(t,`y`)};Nn.translateX=Nn.x,Nn.translateY=Nn.y;var Pn=new Set,Fn=!1,In=!1,Ln=!1;function Rn(){if(In){let e=Array.from(Pn).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Mn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}In=!1,Fn=!1,Pn.forEach(e=>e.complete(Ln)),Pn.clear()}function zn(){Pn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(In=!0)})}function Bn(){Ln=!0,zn(),Rn(),Ln=!1}var Vn=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Pn.add(this),Fn||(Fn=!0,F.read(zn),F.resolveKeyframes(Rn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}mn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Pn.delete(this)}cancel(){this.state===`scheduled`&&(Pn.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Hn=e=>e.startsWith(`--`);function Un(e,t,n){Hn(t)?e.style.setProperty(t,n):e.style[t]=n}var Wn={};function Gn(e,t){let n=w(e);return()=>Wn[t]??n()}var Kn=Gn(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),qn=Gn(()=>window.ViewTimeline!==void 0,`viewTimeline`),Jn=Gn(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Yn=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Xn={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Yn([0,.65,.55,1]),circOut:Yn([.55,0,1,.45]),backIn:Yn([.31,.01,.66,-.59]),backOut:Yn([.33,1.53,.69,.99])};function Zn(e,t){if(e)return typeof e==`function`?Jn()?It(e,t):`ease-out`:ge(e)?Yn(e):Array.isArray(e)?e.map(e=>Zn(e,t)||Xn.easeOut):Xn[e]}function Qn(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Zn(s,i);Array.isArray(d)&&(u.easing=d),xe.value&&ke.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return xe.value&&p.finished.finally(()=>{ke.waapi--}),p}function $n(e){return typeof e==`function`&&`applyToOptions`in e}function er({type:e,...t}){return $n(e)&&Jn()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var tr=class extends dn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=er(e);this.animation=Qn(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=cn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Un(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return k(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+k(e)}get time(){return k(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=O(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Kn()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),T):r(this)}},nr={anticipate:le,backInOut:N,circInOut:de};function rr(e){return e in nr}function ir(e){typeof e.ease==`string`&&rr(e.ease)&&(e.ease=nr[e.ease])}var ar=10,or=class extends tr{constructor(e){ir(e),un(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new pn({...a,autoplay:!1}),s=Math.max(ar,L.now()-this.startTime),c=v(0,ar,s-ar),l=o.sample(s).value,{name:u}=this.options;i&&u&&Un(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},sr=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(B.test(e)||e===`0`)&&!e.startsWith(`url(`));function cr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function lr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=sr(i,t),s=sr(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:cr(e)||(n===`spring`||$n(n))&&r}function ur(e){e.duration=0,e.type=`keyframes`}var dr=new Set([`opacity`,`clipPath`,`filter`,`transform`]),fr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function pr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&fr.test(e[t]))return!0;return!1}var mr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),hr=w(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function gr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return hr()&&n&&(dr.has(n)||mr.has(n)&&pr(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var _r=40,vr=class extends dn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=L.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Vn;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=L.now();let u=!0;lr(e,i,a,o)||(u=!1,(b.instantAnimations||!s)&&l?.(cn(e,n,t)),e[0]=e[e.length-1],ur(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>_r?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&gr(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new or({...d,element:p})}catch{m=new pn(d)}else m=new pn(d);m.finished.then(()=>{this.notifyFinished()}).catch(T),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Bn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function yr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var br=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xr(e){let t=br.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Sr(e,t,n=1){`${e}`;let[r,i]=xr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return x(e)?parseFloat(e):e}return Ne(i)?Sr(i,t,n+1):i}var Cr={type:`spring`,stiffness:500,damping:25,restSpeed:10},wr=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Tr={type:`keyframes`,duration:.8},Er={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Dr=(e,{keyframes:t})=>t.length>2?Tr:On.has(e)?e.startsWith(`scale`)?wr(t[1]):Cr:Er;function Or(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function kr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Or(n,e)}var Ar=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function jr(e){for(let t in e)if(!Ar.has(t))return!0;return!1}var Mr=(e,t,n,r={},i,a)=>o=>{let s=kr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=O(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};jr(s)||Object.assign(u,Dr(e,u)),u.duration&&=O(u.duration),u.repeatDelay&&=O(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ur(u),u.delay===0&&(d=!0)),(b.instantAnimations||b.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,ur(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=cn(u.keyframes,s);if(e!==void 0){F.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new pn(u):new vr(u)};function Nr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Pr(e,t,n,r){if(typeof t==`function`){let[i,a]=Nr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Nr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Fr(e,t,n){let r=e.getProps();return Pr(r,t,n===void 0?r.custom:n,e)}var Ir=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Dn]),Lr=30,Rr=e=>!isNaN(parseFloat(e)),zr={current:void 0},Br=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=L.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=L.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Rr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new te);let n=this.events[e].add(t);return e===`change`?()=>{n(),F.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return zr.current&&zr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=L.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Lr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Lr);return A(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Vr(e,t){return new Br(e,t)}var Hr=e=>Array.isArray(e);function Ur(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Vr(n))}function Wr(e){return Hr(e)?e[e.length-1]||0:e}function Gr(e,t){let{transitionEnd:n={},transition:r={},...i}=Fr(e,t)||{};i={...i,...n};for(let t in i)Ur(e,t,Wr(i[t]))}var U=e=>!!(e&&e.getVelocity);function Kr(e){return!!(U(e)&&e.add)}function qr(e,t){let n=e.getValue(`willChange`);if(Kr(n))return n.add(t);if(!n&&b.WillChange){let n=new b.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Jr(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Yr=`data-`+Jr(`framerAppearId`);function Xr(e){return e.props[Yr]}function Zr({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Qr(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Or(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Zr(d,t))continue;let o={delay:n,...kr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){F.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Xr(e);if(n){let e=window.MotionHandoffAnimation(n,t,F);e!==null&&(o.startTime=e,f=!0)}}qr(e,t);let p=l??e.shouldReduceMotion;r.start(Mr(t,r,i,p&&Ir.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>F.update(()=>{o&&Gr(e,o)});u.length?Promise.all(u).then(t):t()}return u}function $r(e,t,n={}){let r=Fr(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Qr(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ei(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function ei(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push($r(c,t,{...o,delay:n+(typeof r==`function`?0:r)+yr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ti(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>$r(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=$r(e,t,n);else{let i=typeof t==`function`?Fr(e,t,n.custom):t;r=Promise.all(Qr(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var ni={test:e=>e===`auto`,parse:e=>e},ri=e=>t=>t.test(e),ii=[Ie,R,Qe,Ze,et,$e,ni],ai=e=>ii.find(ri(e));function oi(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||C(e)}var si=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ci(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Be)||[];if(!r)return e;let i=n.replace(r,``),a=+!!si.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var li=/\b([a-z-]*)\(.*?\)/gu,ui={...B,getAnimatableNone:e=>{let t=e.match(li);return t?t.map(ci).join(` `):e}},di={...B,getAnimatableNone:e=>{let t=B.parse(e);return B.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},fi={...Ie,transform:Math.round},pi={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,inset:R,insetBlock:R,insetBlockStart:R,insetBlockEnd:R,insetInline:R,insetInlineStart:R,insetInlineEnd:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,paddingBlock:R,paddingBlockStart:R,paddingBlockEnd:R,paddingInline:R,paddingInlineStart:R,paddingInlineEnd:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,marginBlock:R,marginBlockStart:R,marginBlockEnd:R,marginInline:R,marginInlineStart:R,marginInlineEnd:R,fontSize:R,backgroundPositionX:R,backgroundPositionY:R,rotate:Ze,rotateX:Ze,rotateY:Ze,rotateZ:Ze,scale:Re,scaleX:Re,scaleY:Re,scaleZ:Re,skew:Ze,skewX:Ze,skewY:Ze,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:Le,originX:tt,originY:tt,originZ:R,zIndex:fi,fillOpacity:Le,strokeOpacity:Le,numOctaves:fi},mi={...pi,color:z,backgroundColor:z,outlineColor:z,fill:z,stroke:z,borderColor:z,borderTopColor:z,borderRightColor:z,borderBottomColor:z,borderLeftColor:z,filter:ui,WebkitFilter:ui,mask:di,WebkitMask:di},hi=e=>mi[e],gi=new Set([ui,di]);function _i(e,t){let n=hi(e);return gi.has(n)||(n=B),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var vi=new Set([`auto`,`none`,`0`]);function yi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!vi.has(t)&&dt(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=_i(n,i)}var bi=class extends Vn{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ne(r))){let i=Sr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ir.has(n)||e.length!==2)return;let[r,i]=e,a=ai(r),o=ai(i);if(Fe(r)!==Fe(i)&&Nn[n])this.needsMeasurement=!0;else if(a!==o){if(kn(a)&&kn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Nn[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||oi(e[t]))&&n.push(t);n.length&&yi(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Nn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Nn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function xi(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Si=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ci(e){return S(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:wi,cancel:Ti}=we(queueMicrotask,!1),W={x:!1,y:!1};function Ei(){return W.x||W.y}function Di(e){return e===`x`||e===`y`?W[e]?null:(W[e]=!0,()=>{W[e]=!1}):W.x||W.y?null:(W.x=W.y=!0,()=>{W.x=W.y=!1})}function Oi(e,t){let n=xi(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ki(e){return!(e.pointerType===`touch`||Ei())}function Ai(e,t,n={}){let[r,i,a]=Oi(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{e.pointerType!==`touch`&&(n?r=!0:s(e))};e.addEventListener(`pointerenter`,n=>{if(!ki(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var ji=(e,t)=>t?e===t||ji(e,t.parentElement):!1,Mi=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ni=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Pi(e){return Ni.has(e.tagName)||e.isContentEditable===!0}var Fi=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Ii(e){return Fi.has(e.tagName)||e.isContentEditable===!0}var Li=new WeakSet;function Ri(e){return t=>{t.key===`Enter`&&e(t)}}function zi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Bi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ri(()=>{if(Li.has(n))return;zi(n,`down`);let e=Ri(()=>{zi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>zi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Vi(e){return Mi(e)&&!Ei()}var Hi=new WeakSet;function Ui(e,t,n={}){let[r,i,a]=Oi(e,n),o=e=>{let r=e.currentTarget;if(!Vi(e)||Hi.has(e))return;Li.add(r),n.stopPropagation&&Hi.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Li.has(r)&&Li.delete(r),Vi(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||ji(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ci(e)&&(e.addEventListener(`focus`,e=>Bi(e,i)),!Pi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Wi(e){return S(e)&&`ownerSVGElement`in e}var Gi=new WeakMap,Ki,qi=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Wi(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Ji=qi(`inline`,`width`,`offsetWidth`),Yi=qi(`block`,`height`,`offsetHeight`);function Xi({target:e,borderBoxSize:t}){Gi.get(e)?.forEach(n=>{n(e,{get width(){return Ji(e,t)},get height(){return Yi(e,t)}})})}function Zi(e){e.forEach(Xi)}function Qi(){typeof ResizeObserver<`u`&&(Ki=new ResizeObserver(Zi))}function $i(e,t){Ki||Qi();let n=xi(e);return n.forEach(e=>{let n=Gi.get(e);n||(n=new Set,Gi.set(e,n)),n.add(t),Ki?.observe(e)}),()=>{n.forEach(e=>{let n=Gi.get(e);n?.delete(t),n?.size||Ki?.unobserve(e)})}}var ea=new Set,ta;function na(){ta=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ea.forEach(t=>t(e))},window.addEventListener(`resize`,ta)}function ra(e){return ea.add(e),ta||na(),()=>{ea.delete(e),!ea.size&&typeof ta==`function`&&(window.removeEventListener(`resize`,ta),ta=void 0)}}function ia(e,t){return typeof e==`function`?ra(e):$i(e,t)}function aa(e){return Wi(e)&&e.tagName===`svg`}var oa=[...ii,z,B],sa=e=>oa.find(ri(e)),ca=()=>({translate:0,scale:1,origin:0,originPoint:0}),la=()=>({x:ca(),y:ca()}),ua=()=>({min:0,max:0}),G=()=>({x:ua(),y:ua()}),da=new WeakMap;function fa(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function pa(e){return typeof e==`string`||Array.isArray(e)}var ma=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ha=[`initial`,...ma];function ga(e){return fa(e.animate)||ha.some(t=>pa(e[t]))}function _a(e){return!!(ga(e)||e.variants)}function va(e,t,n){for(let r in t){let i=t[r],a=n[r];if(U(i))e.addValue(r,i);else if(U(a))e.addValue(r,Vr(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Vr(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ya={current:null},ba={current:!1},xa=typeof window<`u`;function Sa(){if(ba.current=!0,xa){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>ya.current=e.matches;e.addEventListener(`change`,t),t()}else ya.current=!1}}var Ca=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],wa={};function Ta(e){wa=e}function Ea(){return wa}var Da=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Vn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=L.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,F.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=ga(t),this.isVariantNode=_a(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&U(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,da.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(ba.current||Sa(),this.shouldReduceMotion=ya.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Te(this.notifyUpdate),Te(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&dr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new tr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:O(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=On.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&F.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in wa){let t=wa[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):G()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ca.length;t++){let n=Ca[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=va(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Vr(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(x(n)||C(n))?n=parseFloat(n):!sa(n)&&B.test(t)&&(n=_i(e,t)),this.setBaseTarget(e,U(n)?n.get():n)),U(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Pr(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!U(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new te),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){wi.render(this.render)}},Oa=class extends Da{constructor(){super(...arguments),this.KeyframeResolver=bi}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;U(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},ka=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Aa({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ja({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ma(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Na(e){return e===void 0||e===1}function Pa({scale:e,scaleX:t,scaleY:n}){return!Na(e)||!Na(t)||!Na(n)}function Fa(e){return Pa(e)||Ia(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ia(e){return La(e.x)||La(e.y)}function La(e){return e&&e!==`0%`}function Ra(e,t,n){return n+t*(e-n)}function za(e,t,n,r,i){return i!==void 0&&(e=Ra(e,i,r)),Ra(e,n,r)+t}function Ba(e,t=0,n=1,r,i){e.min=za(e.min,t,n,r,i),e.max=za(e.max,t,n,r,i)}function Va(e,{x:t,y:n}){Ba(e.x,t.translate,t.scale,t.originPoint),Ba(e.y,n.translate,n.scale,n.originPoint)}var Ha=.999999999999,Ua=1.0000000000001;function Wa(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(K(e.x,-a.scroll.offset.x),K(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Va(e,o)),r&&Fa(a.latestValues)&&qa(e,a.latestValues,a.layout?.layoutBox))}t.x<Ua&&t.x>Ha&&(t.x=1),t.y<Ua&&t.y>Ha&&(t.y=1)}function K(e,t){e.min+=t,e.max+=t}function Ga(e,t,n,r,i=.5){Ba(e,t,n,V(e.min,e.max,i),r)}function Ka(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function qa(e,t,n){let r=n??e;Ga(e.x,Ka(t.x,r.x),t.scaleX,t.scale,t.originX),Ga(e.y,Ka(t.y,r.y),t.scaleY,t.scale,t.originY)}function Ja(e,t){return Aa(Ma(e.getBoundingClientRect(),t))}function Ya(e,t,n){let r=Ja(e,n),{scroll:i}=t;return i&&(K(r.x,i.offset.x),K(r.y,i.offset.y)),r}var Xa={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Za=Dn.length;function Qa(e,t,n){let r=``,i=!0;for(let a=0;a<Za;a++){let o=Dn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Si(s,pi[o]);if(!c){i=!1;let t=Xa[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function $a(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(On.has(e))o=!0;else if(je(e))i[e]=n;else{let t=Si(n,pi[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Qa(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function eo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function to(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var no={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(R.test(e))e=parseFloat(e);else return e}return`${to(e,t.target.x)}% ${to(e,t.target.y)}%`}},ro={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=B.parse(e);if(i.length>5)return r;let a=B.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=V(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},io={borderRadius:{...no,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:no,borderTopRightRadius:no,borderBottomLeftRadius:no,borderBottomRightRadius:no,boxShadow:ro};function ao(e,{layout:t,layoutId:n}){return On.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!io[e]||e===`opacity`)}function oo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(U(r[t])||i&&U(i[t])||ao(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function so(e){return window.getComputedStyle(e)}var co=class extends Oa{constructor(){super(...arguments),this.type=`html`,this.renderInstance=eo}readValueFromInstance(e,t){if(On.has(t))return this.projection?.isProjecting?Cn(t):Tn(e,t);{let n=so(e),r=(je(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ja(e,t)}build(e,t,n){$a(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return oo(e,t,n)}},lo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},uo={offset:`strokeDashoffset`,array:`strokeDasharray`};function fo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?lo:uo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var po=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function mo(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if($a(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of po)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&fo(d,i,a,o,!1)}var ho=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),go=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function _o(e,t,n,r){eo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(ho.has(n)?n:Jr(n),t.attrs[n])}function vo(e,t,n){let r=oo(e,t,n);for(let n in e)if(U(e[n])||U(t[n])){let t=Dn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var yo=class extends Oa{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=G}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(On.has(t)){let e=hi(t);return e&&e.default||0}return t=ho.has(t)?t:Jr(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return vo(e,t,n)}build(e,t,n){mo(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){_o(e,t,n,r)}mount(e){this.isSVGTag=go(e.tagName),super.mount(e)}},bo=ha.length;function xo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&xo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<bo;n++){let r=ha[n],i=e.props[r];(pa(i)||i===!1)&&(t[r]=i)}return t}function So(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Co=[...ma].reverse(),wo=ma.length;function To(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ti(e,t,n)))}function Eo(e){let t=To(e),n=ko(),r=!0,i=!1,a=t=>(n,r)=>{let i=Fr(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=xo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<wo;t++){let p=Co[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=pa(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||fa(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Do(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},ee=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Hr(t)&&Hr(n)?!So(t,n):t!==n,r?t==null?u.add(e):ee(e):t!==void 0&&u.has(e)?ee(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let E=v&&y;b&&(!E||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Fr(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=yr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Fr(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=ko(),i=!0}}}function Do(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!So(t,e):!1}function Oo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ko(){return{animate:Oo(!0),whileInView:Oo(),whileHover:Oo(),whileTap:Oo(),whileDrag:Oo(),whileFocus:Oo(),exit:Oo()}}function Ao(e,t){e.min=t.min,e.max=t.max}function q(e,t){Ao(e.x,t.x),Ao(e.y,t.y)}function jo(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Mo=.9999,No=1.0001,Po=-.01,Fo=.01;function J(e){return e.max-e.min}function Io(e,t,n){return Math.abs(e-t)<=n}function Lo(e,t,n,r=.5){e.origin=r,e.originPoint=V(t.min,t.max,e.origin),e.scale=J(n)/J(t),e.translate=V(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Mo&&e.scale<=No||isNaN(e.scale))&&(e.scale=1),(e.translate>=Po&&e.translate<=Fo||isNaN(e.translate))&&(e.translate=0)}function Ro(e,t,n,r){Lo(e.x,t.x,n.x,r?r.originX:void 0),Lo(e.y,t.y,n.y,r?r.originY:void 0)}function zo(e,t,n,r=0){e.min=(r?V(n.min,n.max,r):n.min)+t.min,e.max=e.min+J(t)}function Bo(e,t,n,r){zo(e.x,t.x,n.x,r?.x),zo(e.y,t.y,n.y,r?.y)}function Vo(e,t,n,r=0){let i=r?V(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+J(t)}function Ho(e,t,n,r){Vo(e.x,t.x,n.x,r?.x),Vo(e.y,t.y,n.y,r?.y)}function Uo(e,t,n,r,i){return e-=t,e=Ra(e,1/n,r),i!==void 0&&(e=Ra(e,1/i,r)),e}function Wo(e,t=0,n=1,r=.5,i,a=e,o=e){if(Qe.test(t)&&(t=parseFloat(t),t=V(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=V(a.min,a.max,r);e===a&&(s-=t),e.min=Uo(e.min,t,n,s,i),e.max=Uo(e.max,t,n,s,i)}function Go(e,t,[n,r,i],a,o){Wo(e,t[n],t[r],t[i],t.scale,a,o)}var Ko=[`x`,`scaleX`,`originX`],qo=[`y`,`scaleY`,`originY`];function Jo(e,t,n,r){Go(e.x,t,Ko,n?n.x:void 0,r?r.x:void 0),Go(e.y,t,qo,n?n.y:void 0,r?r.y:void 0)}function Yo(e){return e.translate===0&&e.scale===1}function Xo(e){return Yo(e.x)&&Yo(e.y)}function Zo(e,t){return e.min===t.min&&e.max===t.max}function Qo(e,t){return Zo(e.x,t.x)&&Zo(e.y,t.y)}function $o(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function es(e,t){return $o(e.x,t.x)&&$o(e.y,t.y)}function ts(e){return J(e.x)/J(e.y)}function ns(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Y(e){return[e(`x`),e(`y`)]}function rs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var is=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],as=is.length,os=e=>typeof e==`string`?parseFloat(e):e,ss=e=>typeof e==`number`||R.test(e);function cs(e,t,n,r,i,a){i?(e.opacity=V(0,n.opacity??1,us(r)),e.opacityExit=V(t.opacity??1,0,ds(r))):a&&(e.opacity=V(t.opacity??1,n.opacity??1,r));for(let i=0;i<as;i++){let a=is[i],o=ls(t,a),s=ls(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||ss(o)===ss(s)?(e[a]=Math.max(V(os(o),os(s),r),0),(Qe.test(s)||Qe.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=V(t.rotate||0,n.rotate||0,r))}function ls(e,t){return e[t]===void 0?e.borderRadius:e[t]}var us=fs(0,.5,P),ds=fs(.5,.95,T);function fs(e,t,n){return r=>r<e?0:r>t?1:n(D(e,t,r))}function ps(e,t,n){let r=U(e)?e:Vr(e);return r.start(Mr(``,r,t,n)),r.animation}function ms(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var hs=(e,t)=>e.depth-t.depth,gs=class{constructor(){this.children=[],this.isDirty=!1}add(e){g(this.children,e),this.isDirty=!0}remove(e){_(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hs),this.isDirty=!1,this.children.forEach(e)}};function _s(e,t){let n=L.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Te(r),e(a-t))};return F.setup(r,!0),()=>Te(r)}function vs(e){return U(e)?e.get():e}var ys=class{constructor(){this.members=[]}add(e){g(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;r&&r.isConnected!==!1||n.snapshot||(_(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(_(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},bs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},xs={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Ss=[``,`X`,`Y`,`Z`],Cs=1e3,ws=0;function Ts(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Es(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Xr(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,F,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Es(r)}function Ds({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=ws++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xe.value&&(xs.nodes=xs.calculatedTargetDeltas=xs.calculatedProjections=0),this.nodes.forEach(As),this.nodes.forEach(zs),this.nodes.forEach(Bs),this.nodes.forEach(js),xe.addProjectionMetrics&&xe.addProjectionMetrics(xs)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new gs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new te),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Wi(t)&&!aa(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;F.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=_s(i,250),bs.hasAnimatedSinceResize&&(bs.hasAnimatedSinceResize=!1,this.nodes.forEach(Rs)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||qs,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!es(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...kr(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Rs(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Te(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Vs),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Es(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Ps),this.nodes.forEach(Ns);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Fs);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Is),this.nodes.forEach(Ls),this.nodes.forEach(Os),this.nodes.forEach(ks)):this.nodes.forEach(Fs),this.clearAllSnapshots();let e=L.now();I.delta=v(0,1e3/60,e-I.timestamp),I.timestamp=e,I.isProcessing=!0,Ee.update.process(I),Ee.preRender.process(I),Ee.render.process(I),I.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ms),this.sharedNodes.forEach(Hs)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!J(this.snapshot.measuredBox.x)&&!J(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=G(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Xo(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Fa(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Zs(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return G();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some($s))){let{scroll:e}=this.root;e&&(K(t.x,e.offset.x),K(t.y,e.offset.y))}return t}removeElementScroll(e){let t=G();if(q(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&q(t,e),K(t.x,i.offset.x),K(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||G();q(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(K(r.x,-n.scroll.offset.x),K(r.y,-n.scroll.offset.y)),Fa(n.latestValues)&&qa(r,n.latestValues,n.layout?.layoutBox)}return Fa(this.latestValues)&&qa(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=G();q(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Fa(n.latestValues))continue;let r;n.instance&&(Pa(n.latestValues)&&n.updateSnapshot(),r=G(),q(r,n.measurePageBox())),Jo(t,n.latestValues,n.snapshot?.layoutBox,r)}return Fa(this.latestValues)&&Jo(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==I.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=I.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=G(),this.targetWithTransforms=G()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Bo(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):q(this.target,this.layout.layoutBox),Va(this.target,this.targetDelta)):q(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),xe.value&&xs.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Pa(this.parent.latestValues)||Ia(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=G(),this.relativeTargetOrigin=G(),Ho(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),q(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===I.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;q(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Wa(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=G());let{target:s}=e;s?(!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jo(this.prevProjectionDelta.x,this.projectionDelta.x),jo(this.prevProjectionDelta.y,this.projectionDelta.y)),Ro(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&ns(this.projectionDelta.x,this.prevProjectionDelta.x)&&ns(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),xe.value&&xs.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=la(),this.projectionDelta=la(),this.projectionDeltaWithTransform=la()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=la();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=G(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!(!s||l||this.options.crossfade!==!0||this.path.some(Ks));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Us(a.x,e.x,n),Us(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ho(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Gs(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Qo(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=G(),q(d,this.relativeTarget)),s&&(this.animationValues=i,cs(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Te(this.pendingAnimation),void 0),this.pendingAnimation=F.update(()=>{bs.hasAnimatedSinceResize=!0,ke.layout++,this.motionValue||=Vr(0),this.motionValue.jump(0,!1),this.currentAnimation=ps(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ke.layout--},onComplete:()=>{ke.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Cs),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Qs(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||G();let t=J(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=J(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}q(t,n),qa(t,i),Ro(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ys),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Ts(`z`,e,r,this.animationValues);for(let t=0;t<Ss.length;t++)Ts(`rotate${Ss[t]}`,e,r,this.animationValues),Ts(`skew${Ss[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=vs(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=vs(t?.pointerEvents)||``),this.hasProjected&&!Fa(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=rs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in io){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=io[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?vs(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Ns),this.root.sharedNodes.clear()}}}function Os(e){e.updateLayout()}function ks(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Y(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=J(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ao(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Qs(i,t.layoutBox,n)&&Y(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=J(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=la();Ro(o,n,t.layoutBox);let s=la();a?Ro(s,e.applyTransform(r,!0),t.measuredBox):Ro(s,n,t.layoutBox);let c=!Xo(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=G();Ho(s,t.layoutBox,i.layoutBox,o);let c=G();Ho(c,n,a.layoutBox,o),es(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function As(e){xe.value&&xs.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function js(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ms(e){e.clearSnapshot()}function Ns(e){e.clearMeasurements()}function Ps(e){e.isLayoutDirty=!0,e.updateLayout()}function Fs(e){e.isLayoutDirty=!1}function Is(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Ls(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Rs(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function zs(e){e.resolveTargetDelta()}function Bs(e){e.calcProjection()}function Vs(e){e.resetSkewAndRotation()}function Hs(e){e.removeLeadSnapshot()}function Us(e,t,n){e.translate=V(t.translate,0,n),e.scale=V(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ws(e,t,n,r){e.min=V(t.min,n.min,r),e.max=V(t.max,n.max,r)}function Gs(e,t,n,r){Ws(e.x,t.x,n.x,r),Ws(e.y,t.y,n.y,r)}function Ks(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var qs={duration:.45,ease:[.4,0,.1,1]},Js=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ys=Js(`applewebkit/`)&&!Js(`chrome/`)?Math.round:T;function Xs(e){e.min=Ys(e.min),e.max=Ys(e.max)}function Zs(e){Xs(e.x),Xs(e.y)}function Qs(e,t,n){return e===`position`||e===`preserve-aspect`&&!Io(ts(t),ts(n),.2)}function $s(e){return e!==e.root&&e.scroll?.wasRoot}var ec=Ds({attachResizeListener:(e,t)=>ms(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),tc={current:void 0},nc=Ds({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!tc.current){let e=new ec({});e.mount(window),e.setOptions({layoutScroll:!0}),tc.current=e}return tc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),rc=(0,d.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function ic(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function ac(...e){return t=>{let n=!1,r=e.map(e=>{let r=ic(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ic(e[t],null)}}}}function oc(...e){return d.useCallback(ac(...e),e)}var sc=class extends d.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ci(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ci(e)&&e.offsetWidth||0,r=Ci(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function cc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,d.useId)(),s=(0,d.useRef)(null),c=(0,d.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,d.useContext)(rc),f=oc(s,e.props?.ref??e?.ref);return(0,d.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,u.jsx)(sc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:d.cloneElement(e,{ref:f})})}var lc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let f=p(uc),m=(0,d.useId)(),g=!0,_=(0,d.useMemo)(()=>(g=!1,{id:m,initial:t,isPresent:n,custom:i,onExitComplete:e=>{f.set(e,!0);for(let e of f.values())if(!e)return;r&&r()},register:e=>(f.set(e,!1),()=>f.delete(e))}),[n,f,r]);return a&&g&&(_={..._}),(0,d.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),d.useEffect(()=>{!n&&!f.size&&r&&r()},[n]),e=(0,u.jsx)(cc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,u.jsx)(h.Provider,{value:_,children:e})};function uc(){return new Map}function dc(e=!0){let t=(0,d.useContext)(h);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,d.useId)();(0,d.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,d.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var fc=e=>e.key||``;function pc(e){let t=[];return d.Children.forEach(e,e=>{(0,d.isValidElement)(e)&&t.push(e)}),t}var mc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[h,g]=dc(o),_=(0,d.useMemo)(()=>pc(e),[e]),v=o&&!h?[]:_.map(fc),y=(0,d.useRef)(!0),b=(0,d.useRef)(_),x=p(()=>new Map),S=(0,d.useRef)(new Set),[C,w]=(0,d.useState)(_),[T,ee]=(0,d.useState)(_);m(()=>{y.current=!1,b.current=_;for(let e=0;e<T.length;e++){let t=fc(T[e]);v.includes(t)?(x.delete(t),S.current.delete(t)):x.get(t)!==!0&&x.set(t,!1)}},[T,v.length,v.join(`-`)]);let E=[];if(_!==C){let e=[..._];for(let t=0;t<T.length;t++){let n=T[t],r=fc(n);v.includes(r)||(e.splice(t,0,n),E.push(n))}return a===`wait`&&E.length&&(e=E),ee(pc(e)),w(_),null}let{forceRender:D}=(0,d.useContext)(f);return(0,u.jsx)(u.Fragment,{children:T.map(e=>{let d=fc(e),f=o&&!h?!1:_===T||v.includes(d);return(0,u.jsx)(lc,{isPresent:f,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:f?void 0:()=>{if(S.current.has(d))return;if(x.has(d))S.current.add(d),x.set(d,!0);else return;let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(D?.(),ee(b.current),o&&g?.(),r&&r())},anchorX:s,anchorY:c,children:e},d)})})},hc=(0,d.createContext)({strict:!1}),gc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},_c=!1;function vc(){if(_c)return;let e={};for(let t in gc)e[t]={isEnabled:e=>gc[t].some(t=>!!e[t])};Ta(e),_c=!0}function yc(){return vc(),Ea()}function bc(e){let t=yc();for(let n in e)t[n]={...t[n],...e[n]};Ta(t)}var xc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Sc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||xc.has(e)}var Cc=t({default:()=>wc}),wc,Tc=l((()=>{throw wc={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Ec=e=>!Sc(e);function Dc(e){typeof e==`function`&&(Ec=t=>t.startsWith(`on`)?!Sc(t):e(t))}try{Dc((Tc(),n(Cc)).default)}catch{}function Oc(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||U(e[i])||(Ec(i)||n===!0&&Sc(i)||!t&&!Sc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var kc=(0,d.createContext)({});function Ac(e,t){if(ga(e)){let{initial:t,animate:n}=e;return{initial:t===!1||pa(t)?t:void 0,animate:pa(n)?n:void 0}}return e.inherit===!1?{}:t}function jc(e){let{initial:t,animate:n}=Ac(e,(0,d.useContext)(kc));return(0,d.useMemo)(()=>({initial:t,animate:n}),[Mc(t),Mc(n)])}function Mc(e){return Array.isArray(e)?e.join(` `):e}var Nc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Pc(e,t,n){for(let r in t)!U(t[r])&&!ao(r,n)&&(e[r]=t[r])}function Fc({transformTemplate:e},t){return(0,d.useMemo)(()=>{let n=Nc();return $a(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Ic(e,t){let n=e.style||{},r={};return Pc(r,n,e),Object.assign(r,Fc(e,t)),r}function Lc(e,t){let n={},r=Ic(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Rc=()=>({...Nc(),attrs:{}});function zc(e,t,n,r){let i=(0,d.useMemo)(()=>{let n=Rc();return mo(n,t,go(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Pc(t,e.style,e),i.style={...t,...i.style}}return i}var Bc=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Vc(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Bc.indexOf(e)>-1||/[A-Z]/u.test(e))}function Hc(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Vc(e)?zc:Lc)(t,r,i,e),c=Oc(t,typeof e==`string`,a),l=e===d.Fragment?{}:{...c,...s,ref:n},{children:u}=t,f=(0,d.useMemo)(()=>U(u)?u.get():u,[u]);return(0,d.createElement)(e,{...l,children:f})}function Uc({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Wc(n,r,i,e),renderState:t()}}function Wc(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=vs(a[e]);let{initial:o,animate:s}=e,c=ga(e),l=_a(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!fa(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Pr(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Gc=e=>(t,n)=>{let r=(0,d.useContext)(kc),i=(0,d.useContext)(h),a=()=>Uc(e,t,r,i);return n?a():p(a)},Kc=Gc({scrapeMotionValuesFromProps:oo,createRenderState:Nc}),qc=Gc({scrapeMotionValuesFromProps:vo,createRenderState:Rc}),Jc=Symbol.for(`motionComponentSymbol`);function Yc(e,t,n){let r=(0,d.useRef)(n);(0,d.useInsertionEffect)(()=>{r.current=n});let i=(0,d.useRef)(null);return(0,d.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Xc=(0,d.createContext)({});function Zc(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Qc(e,t,n,r,i,a){let{visualElement:o}=(0,d.useContext)(kc),s=(0,d.useContext)(hc),c=(0,d.useContext)(h),l=(0,d.useContext)(rc),u=l.reducedMotion,f=l.skipAnimations,p=(0,d.useRef)(null),g=(0,d.useRef)(!1);r||=s.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:f,isSVG:a}),g.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));let _=p.current,v=(0,d.useContext)(Xc);_&&!_.projection&&i&&(_.type===`html`||_.type===`svg`)&&$c(p.current,n,i,v);let y=(0,d.useRef)(!1);(0,d.useInsertionEffect)(()=>{_&&y.current&&_.update(n,c)});let b=n[Yr],x=(0,d.useRef)(!!b&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(b)&&window.MotionHasOptimisedAnimation?.(b));return m(()=>{g.current=!0,_&&(y.current=!0,window.MotionIsMounted=!0,_.updateFeatures(),_.scheduleRenderMicrotask(),x.current&&_.animationState&&_.animationState.animateChanges())}),(0,d.useEffect)(()=>{_&&(!x.current&&_.animationState&&_.animationState.animateChanges(),x.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(b)}),!1),_.enteringChildren=void 0)}),_}function $c(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:el(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Zc(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function el(e){if(e)return e.options.allowProjection===!1?el(e.parent):e.projection}function tl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&bc(r);let a=n?n===`svg`:Vc(e),o=a?qc:Kc;function s(n,s){let c,l={...(0,d.useContext)(rc),...n,layoutId:nl(n)},{isStatic:f}=l,p=jc(n),m=o(n,f);if(!f&&typeof window<`u`){rl(l,r);let t=il(l);c=t.MeasureLayout,p.visualElement=Qc(e,m,l,i,t.ProjectionNode,a)}return(0,u.jsxs)(kc.Provider,{value:p,children:[c&&p.visualElement?(0,u.jsx)(c,{visualElement:p.visualElement,...l}):null,Hc(e,n,Yc(m,p.visualElement,s),m,f,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,d.forwardRef)(s);return c[Jc]=e,c}function nl({layoutId:e}){let t=(0,d.useContext)(f).id;return t&&e!==void 0?t+`-`+e:e}function rl(e,t){(0,d.useContext)(hc).strict}function il(e){let{drag:t,layout:n}=yc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function al(e,t){if(typeof Proxy>`u`)return tl;let n=new Map,r=(n,r)=>tl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,tl(a,void 0,e,t)),n.get(a))})}var ol=(e,t)=>t.isSVG??Vc(e)?new yo(t):new co(t,{allowProjection:e!==d.Fragment}),sl=class extends ka{constructor(e){super(e),e.animationState||=Eo(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();fa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},cl=0,ll={animation:{Feature:sl},exit:{Feature:class extends ka{constructor(){super(...arguments),this.id=cl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=Fr(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function ul(e){return{point:{x:e.pageX,y:e.pageY}}}var dl=e=>t=>Mi(t)&&e(t,ul(t));function fl(e,t,n,r){return ms(e,t,dl(n),r)}var pl=({current:e})=>e?e.ownerDocument.defaultView:null,ml=(e,t)=>Math.abs(e-t);function hl(e,t){let n=ml(e.x,t.x),r=ml(e.y,t.y);return Math.sqrt(n**2+r**2)}var gl=new Set([`auto`,`scroll`]),_l=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=vl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=bl(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=hl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=I;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=vl(t,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=bl(e.type===`pointercancel`?this.lastMoveEventInfo:vl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Mi(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=vl(ul(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=I;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,bl(s,this.history)),this.removeListeners=E(fl(this.contextWindow,`pointermove`,this.handlePointerMove),fl(this.contextWindow,`pointerup`,this.handlePointerUp),fl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(gl.has(e.overflowX)||gl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),F.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Te(this.updatePoint)}};function vl(e,t){return t?{point:t(e.point)}:e}function yl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function bl({point:e},t){return{point:e,delta:yl(e,Sl(t)),offset:yl(e,xl(t)),velocity:Cl(t,.1)}}function xl(e){return e[0]}function Sl(e){return e[e.length-1]}function Cl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Sl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>O(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>O(t)*2&&(r=e[1]);let a=k(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function wl(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?V(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?V(n,e,r.max):Math.min(e,n)),e}function Tl(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function El(e,{top:t,left:n,bottom:r,right:i}){return{x:Tl(e.x,n,i),y:Tl(e.y,t,r)}}function Dl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ol(e,t){return{x:Dl(e.x,t.x),y:Dl(e.y,t.y)}}function kl(e,t){let n=.5,r=J(e),i=J(t);return i>r?n=D(t.min,t.max-r,e.min):r>i&&(n=D(e.min,e.max-i,t.min)),v(0,1,n)}function Al(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var jl=.35;function Ml(e=jl){return e===!1?e=0:e===!0&&(e=jl),{x:Nl(e,`left`,`right`),y:Nl(e,`top`,`bottom`)}}function Nl(e,t,n){return{min:Pl(e,t),max:Pl(e,n)}}function Pl(e,t){return typeof e==`number`?e:e[t]||0}var Fl=new WeakMap,Il=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=G(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(ul(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Di(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Y(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Qe.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=J(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&F.update(()=>i(e,t),!1,!0),qr(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;r&&this.currentDirection===null?(this.currentDirection=Bl(o),this.currentDirection!==null&&i&&i(this.currentDirection)):(this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&F.update(()=>a(e,t),!1,!0))},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new _l(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:pl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&F.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!zl(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=wl(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Zc(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?El(n.layoutBox,e):!1,this.elastic=Ml(t),r!==this.constraints&&!Zc(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Y(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Al(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Zc(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ya(n,r.root,this.visualElement.getTransformPagePoint()),a=Ol(r.layout.layoutBox,i);if(t){let e=t(ja(a));this.hasMutatedConstraints=!!e,e&&(a=Aa(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Y(o=>{if(!zl(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return qr(this.visualElement,e),n.start(Mr(e,n,0,t,this.visualElement,!1))}stopAnimation(){Y(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Y(t=>{let{drag:n}=this.getProps();if(!zl(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-V(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Zc(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Y(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=kl({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Y(t=>{if(!zl(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(V(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Fl.set(this.visualElement,this);let e=this.visualElement.current,t=fl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ii(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Zc(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Rl(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),F.read(r);let o=ms(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Y(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=jl,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Ll(e){let t=!0;return()=>{t?t=!1:e()}}function Rl(e,t,n){let r=ia(e,Ll(n)),i=ia(t,Ll(n));return()=>{r(),i()}}function zl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Bl(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Vl=class extends ka{constructor(e){super(e),this.removeGroupControls=T,this.removeListeners=T,this.controls=new Il(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||T}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Hl=e=>(t,n)=>{e&&F.update(()=>e(t,n),!1,!0)},Ul=class extends ka{constructor(){super(...arguments),this.removePointerDownListener=T}onPointerDown(e){this.session=new _l(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Hl(e),onStart:Hl(t),onMove:Hl(n),onEnd:(e,t)=>{delete this.session,r&&F.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=fl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Wl=!1,Gl=class extends d.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Wl&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bs.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a&&(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Wl=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||F.postRender(()=>{let e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),wi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Wl=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Kl(e){let[t,n]=dc(),r=(0,d.useContext)(f);return(0,u.jsx)(Gl,{...e,layoutGroup:r,switchLayoutGroup:(0,d.useContext)(Xc),isPresent:t,safeToRemove:n})}var ql={pan:{Feature:Ul},drag:{Feature:Vl,ProjectionNode:nc,MeasureLayout:Kl}};function Jl(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&F.postRender(()=>i(t,ul(t)))}var Yl=class extends ka{mount(){let{current:e}=this.node;e&&(this.unmount=Ai(e,(e,t)=>(Jl(this.node,t,`Start`),e=>Jl(this.node,e,`End`))))}unmount(){}},Xl=class extends ka{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=E(ms(this.node.current,`focus`,()=>this.onFocus()),ms(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Zl(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&F.postRender(()=>i(t,ul(t)))}var Ql=class extends ka{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Ui(e,(e,t)=>(Zl(this.node,t,`Start`),(e,{success:t})=>Zl(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},$l=new WeakMap,eu=new WeakMap,tu=e=>{let t=$l.get(e.target);t&&t(e)},nu=e=>{e.forEach(tu)};function ru({root:e,...t}){let n=e||document;eu.has(n)||eu.set(n,{});let r=eu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(nu,{root:e,...t})),r[i]}function iu(e,t,n){let r=ru(t);return $l.set(e,n),r.observe(e),()=>{$l.delete(e),r.unobserve(e)}}var au={some:0,all:1},ou=class extends ka{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:au[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=iu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(su(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function su({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var cu={inView:{Feature:ou},tap:{Feature:Ql},focus:{Feature:Xl},hover:{Feature:Yl}},lu={layout:{ProjectionNode:nc,MeasureLayout:Kl}},uu=al({...ll,...cu,...ql,...lu},ol),du=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),fu=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),pu=e=>{let t=fu(e);return t.charAt(0).toUpperCase()+t.slice(1)},mu=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),hu=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},gu={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},_u=(0,d.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,d.createElement)(`svg`,{ref:c,...gu,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:mu(`lucide`,i),...!a&&!hu(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,d.createElement)(e,t)),...Array.isArray(a)?a:[a]])),vu=(e,t)=>{let n=(0,d.forwardRef)(({className:n,...r},i)=>(0,d.createElement)(_u,{ref:i,iconNode:t,className:mu(`lucide-${du(pu(e))}`,`lucide-${e}`,n),...r}));return n.displayName=pu(e),n},yu=vu(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),bu=vu(`github`,[[`path`,{d:`M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,key:`tonef`}],[`path`,{d:`M9 18c-4.51 2-5-2-7-2`,key:`9comsn`}]]),xu=vu(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),Su=vu(`linkedin`,[[`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,key:`c2jq9f`}],[`rect`,{width:`4`,height:`12`,x:`2`,y:`9`,key:`mk3on5`}],[`circle`,{cx:`4`,cy:`4`,r:`2`,key:`bt5ra8`}]]),Cu=vu(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),wu=vu(`twitter`,[[`path`,{d:`M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z`,key:`pff0z6`}]]),Tu=vu(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Eu=`/editorial-assets/author_studio_portrait_1794695293041-C7odJMsF.webp`,Du=`/editorial-assets/cover_asbd_hero_1794695346470-Ce0BGM0B.webp`,Ou=`/editorial-assets/cover_cms_platform_1794695291502-EroTdMHP.webp`,ku=`/editorial-assets/cover_infra_cookbooks_1794695290006-OJPbFawn.webp`,Au=`/editorial-assets/cover_native_runtime_1794695290674-Cva6Jtjo.webp`,ju=`/editorial-assets/cover_structured_decisions_1794695289898-_-tn98ed.webp`,Mu=`/editorial-assets/cover_ux_principles_1794695290502-D7yJsm5J.webp`,Nu={schema:`inneranimal.site.v1`,theme:`iapj`,brand:{title:`InnerAnimalMedia`,blogTitle:`Journal`,blogSubtitle:`Ideas, field notes and perspectives on design, systems and media.`,tagline:`Design, systems and media—built to work together.`,copyrightHolder:`InnerAnimalMedia`,logo:{mode:`wordmark-only`,href:`/`,wordmark:`InnerAnimalMedia`,wordmarkCase:`none`,showIcon:!1,showWordmark:!0,icon:{mediaRef:`media://brand-icon`,darkMediaRef:`media://brand-icon-dark`,svgPath:`M12 2a10 10 0 1 0 0 20V2z`,svgViewBox:`0 0 24 24`,sizePx:20},fullLogo:{mediaRef:`media://brand-logo-light`,darkMediaRef:`media://brand-logo-dark`,alt:`inneranimal logo`,heightPx:24}},attribution:{prefix:`Designed and built by`,sourceLabel:`InnerAnimalMedia`,sourceRef:`/about`}},contact:{heading:`Have something worth making?`,email:`hey@inneranimalmedia.com`,emailRef:`social://email`,secondaryLine:`Louisiana-based · Working everywhere`,socials:[]},author:{name:`InnerAnimalMedia`,avatarRef:`media://author-portrait`,portraitRef:`media://author-portrait`,bio:`We bring brand, design, content and technology together to make digital experiences feel as capable as they look.`,aboutHeading:`A studio for considered digital work.`,aboutParagraphs:[`We design and build digital products that feel as capable as they look. Strategy, identity, content and engineering are considered together—not handed off as disconnected pieces.`,`Our work spans brand identity, websites, digital products, photography, motion, commerce and custom software. Every decision should make the experience clearer, faster and easier to trust.`,`We partner with teams that care about quality, consistency and long-term value—from the first rough draft through launch and beyond.`]},navigation:{topBar:[{label:`Work`,path:`/work`},{label:`Services`,path:`/services`},{label:`Studio`,path:`/about`},{label:`Journal`,path:`/blog`},{label:`Media`,path:`/photography`}],headerCta:{label:`Start a project`,path:`/contact`},categories:[{slug:`all`,label:`All stories`,path:`/blog`,description:`Ideas, field notes and practical perspectives from the studio.`},{slug:`ai`,label:`AI & Systems`,path:`/blog/category/ai`,description:`Agent architecture, applied AI and the systems that make complex work dependable.`},{slug:`runtime`,label:`Edge & Runtime`,path:`/blog/category/runtime`,description:`Infrastructure, integrations and reliable software across cloud and local environments.`},{slug:`ui-ux`,label:`UI/UX`,path:`/blog/category/ui-ux`,description:`Research, interaction design and the decisions behind useful digital products.`},{slug:`design-systems`,label:`Design Systems`,path:`/blog/category/design-systems`,description:`Identity, interface systems, visual language and consistent product experiences.`},{slug:`platform`,label:`CMS & Publishing`,path:`/blog/category/platform`,description:`Content systems, commerce, themes and the infrastructure behind modern publishing.`}],overlayMenu:[{label:`Selected work`,path:`/work`},{label:`Services`,path:`/services`},{label:`About the studio`,path:`/about`},{label:`Journal`,path:`/blog`},{label:`Photography & media`,path:`/photography`},{label:`Search`,path:`/search`},{label:`Contact`,path:`/contact`}],footerPrimary:[{label:`Work`,path:`/work`},{label:`Services`,path:`/services`},{label:`Studio`,path:`/about`},{label:`Journal`,path:`/blog`},{label:`Media`,path:`/photography`},{label:`Contact`,path:`/contact`}],footerSecondary:[{label:`AI & Systems`,path:`/blog/category/ai`},{label:`Edge & Runtime`,path:`/blog/category/runtime`},{label:`UI/UX`,path:`/blog/category/ui-ux`},{label:`Design Systems`,path:`/blog/category/design-systems`},{label:`CMS & Publishing`,path:`/blog/category/platform`}],footerPillars:[{title:`Brand & Identity`,line1:`Strategy · Identity · Design systems`,line2:`A clear point of view, carried consistently`,path:`/services#brand`},{title:`Digital Products`,line1:`Websites · Platforms · Applications`,line2:`Experiences built to work in the real world`,path:`/services#digital`},{title:`Content & Media`,line1:`Photography · Motion · Editorial`,line2:`Visuals and stories with a point of view`,path:`/photography`},{title:`Growth & Search`,line1:`SEO · Campaigns · Email`,line2:`Reach the right people with clarity`,path:`/services#growth`},{title:`Commerce & CMS`,line1:`Publishing · Commerce · Automation`,line2:`The systems behind a stronger presence`,path:`/services#commerce`},{title:`Custom Software`,line1:`AgentSam · Integrations · Workflows`,line2:`Purpose-built tools for complex work`,path:`/services#software`}],legalLinks:[{label:`About`,path:`/about`},{label:`Journal`,path:`/blog`},{label:`Search`,path:`/search`}]},linkCatalog:{"internal://about":`/about`,"social://github":`https://github.com/inneranimal`,"social://twitter":`https://x.com/inneranimal`,"social://linkedin":`https://linkedin.com`,"social://substack":`https://inneranimalmedia.com`,"social://email":`mailto:hey@inneranimalmedia.com`},mediaCatalog:{"media://brand-icon":{provider:`theme-default`,url:``,alt:`Brand icon mark`,width:64,height:64},"media://brand-icon-dark":{provider:`theme-default`,url:``,alt:`Brand icon mark (dark surface)`,width:64,height:64},"media://brand-logo-light":{provider:`theme-default`,url:``,alt:`Full horizontal brand logo (light surface)`,width:320,height:64},"media://brand-logo-dark":{provider:`theme-default`,url:``,alt:`Full horizontal brand logo (dark surface)`,width:320,height:64},"media://author-portrait":{provider:`studio-generated`,url:`/src/assets/images/author_studio_portrait_1794695293041.webp`,alt:`Editorial studio portrait at a minimalist drafting desk`,caption:`Studio Drafting Desk — InnerAnimalMedia`,width:900,height:1200},"media://cover-structured-decisions":{provider:`studio-generated`,url:`/src/assets/images/cover_structured_decisions_1794695289898.webp`,alt:`Brushed black anodized aluminum routing switchboard with muted violet pins`,caption:`Typed Decision Switchboard — Deterministic Routing Study`,width:1600,height:900},"media://cover-infra-cookbooks":{provider:`studio-generated`,url:`/src/assets/images/cover_infra_cookbooks_1794695290006.webp`,alt:`Architectural grid blueprints, steel calipers, and matte dark keyboard on concrete`,caption:`Infrastructure Blueprints & Caliper Inspection Bench`,width:1600,height:900},"media://cover-native-runtime":{provider:`studio-generated`,url:`/src/assets/images/cover_native_runtime_1794695290674.webp`,alt:`Matte obsidian and machined titanium edge compute module on travertine stone`,caption:`Hybrid Edge-to-Local Compute Enclosure`,width:1600,height:900},"media://cover-ux-principles":{provider:`studio-generated`,url:`/src/assets/images/cover_ux_principles_1794695290502.webp`,alt:`Grid paper, matte black pen, brass ruler, and modular cards on alabaster`,caption:`Modular Layout Grid & Editorial Hierarchy Specimen`,width:1600,height:900},"media://cover-asbd-hero":{provider:`studio-generated`,url:`/src/assets/images/cover_asbd_hero_1794695346470.webp`,alt:`Exploded 3D mechanical assembly rendered in brushed steel and dark slate`,caption:`AgentSam Learn — Asymmetric Exploded Mechanical Assembly`,width:1600,height:900},"media://cover-cms-platform":{provider:`studio-generated`,url:`/src/assets/images/cover_cms_platform_1794695291502.webp`,alt:`Modular concrete and glass architectural pavilions under overcast light`,caption:`Modular Concrete Pavilions — Multi-Domain Section Study`,width:1200,height:900}}},Pu=`iapj:manifest-updated`,Fu=Object.assign({"/src/assets/images/author_studio_portrait_1794695293041.webp":Eu,"/src/assets/images/cover_asbd_hero_1794695346470.webp":Du,"/src/assets/images/cover_cms_platform_1794695291502.webp":Ou,"/src/assets/images/cover_infra_cookbooks_1794695290006.webp":ku,"/src/assets/images/cover_native_runtime_1794695290674.webp":Au,"/src/assets/images/cover_structured_decisions_1794695289898.webp":ju,"/src/assets/images/cover_ux_principles_1794695290502.webp":Mu});function Iu(e,t){if(!e)return{src:``,alt:``};if(e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`data:`)||e.startsWith(`blob:`)||e.startsWith(`/`))return{src:Fu[e]??e,alt:``};if(typeof window<`u`&&window.__IA_MEDIA_MAP__?.[e]){let t=window.__IA_MEDIA_MAP__[e],n=`src`in t?t.src:t.url;return{src:Fu[n]??n,alt:t.alt??``,caption:t.caption,width:t.width,height:t.height}}let n=(t??Nu.mediaCatalog)[e];return n?{src:n.url?Fu[n.url]??n.url:``,alt:n.alt??``,caption:n.caption,width:n.width,height:n.height}:{src:``,alt:``}}function Lu(e,t){return typeof window<`u`&&window.__IA_LINK_MAP__?.[e]?window.__IA_LINK_MAP__[e]:(t??Nu.linkCatalog)[e]??`#`}function Ru(){let e=Nu;if(typeof window>`u`||!window.__IA_SITE_MANIFEST__)return e;let t=window.__IA_SITE_MANIFEST__,n=e.brand.logo??{},r=t.brand?.logo??{};return{...e,...t,brand:{...e.brand,...t.brand,logo:{...n,...r,icon:{...n.icon,...r.icon},fullLogo:{...n.fullLogo,...r.fullLogo}},attribution:{...e.brand.attribution,...t.brand?.attribution}},contact:{...e.contact,...t.contact},author:{...e.author,...t.author},navigation:{...e.navigation,...t.navigation}}}function zu(){if(typeof document>`u`)return!1;let e=document.documentElement.getAttribute(`data-theme`);return e===`dark`||e!==`light`&&typeof window<`u`&&window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches}function Bu(e=`auto`,t){let n=Ru(),r=n.brand.logo??{},i={...r,...t,icon:{...r.icon,...t?.icon},fullLogo:{...r.fullLogo,...t?.fullLogo}},a=e===`dark`||e===`auto`&&zu(),o=i.mode??`lockup`,s=i.wordmark??n.brand.title,c=i.wordmarkCase??`lowercase`,l=o===`wordmark-only`?!1:i.showIcon??!0,u=o===`icon-only`?!1:i.showWordmark??!0,d=Iu(a&&i.icon?.darkMediaRef||i.icon?.mediaRef||``),f=!d.src&&a&&i.icon?.mediaRef?Iu(i.icon.mediaRef):d,p=Iu(a&&i.fullLogo?.darkMediaRef||i.fullLogo?.mediaRef||``),m=!p.src&&a&&i.fullLogo?.mediaRef?Iu(i.fullLogo.mediaRef):p;return{mode:o,href:i.href??`/blog`,wordmark:s,wordmarkCase:c,showIcon:l,showWordmark:u,iconSrc:f.src,iconAlt:f.alt||`${s} icon`,iconSvgPath:i.icon?.svgPath??``,iconSvgViewBox:i.icon?.svgViewBox??`0 0 24 24`,iconSizePx:i.icon?.sizePx??20,fullLogoSrc:m.src,fullLogoAlt:i.fullLogo?.alt||m.alt||s,fullLogoHeightPx:i.fullLogo?.heightPx??24}}function Vu(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Vu(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Hu(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Vu(e))&&(r&&(r+=` `),r+=t);return r}var Uu=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Wu=(e,t)=>({classGroupId:e,validator:t}),Gu=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Ku=`-`,qu=[],Ju=`arbitrary..`,Yu=e=>{let t=Qu(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Zu(e);let n=e.split(Ku);return Xu(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Uu(i,t):t:i||qu}return n[e]||qu}}},Xu=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Xu(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Ku):e.slice(t).join(Ku),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Zu=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Ju+r:void 0})(),Qu=e=>{let{theme:t,classGroups:n}=e;return $u(n,t)},$u=(e,t)=>{let n=Gu();for(let r in e){let i=e[r];ed(i,n,r,t)}return n},ed=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];td(i,t,n,r)}},td=(e,t,n,r)=>{typeof e==`string`?nd(e,t,n):typeof e==`function`?rd(e,t,n,r):id(e,t,n,r)},nd=(e,t,n)=>{let r=e===``?t:ad(t,e);r.classGroupId=n},rd=(e,t,n,r)=>{od(e)?ed(e(r),t,n,r):(t.validators===null&&(t.validators=[]),t.validators.push(Wu(n,e)))},id=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];ed(o,ad(t,a),n,r)}},ad=(e,t)=>{let n=e,r=t.split(Ku),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Gu(),n.nextPart.set(t,i)),n=i}return n},od=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,sd=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},cd=`!`,ld=`:`,ud=[],dd=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),fd=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===ld){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(cd)?(c=s.slice(0,-1),l=!0):s.startsWith(cd)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return dd(t,l,c,u)};if(t){let e=t+ld,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):dd(ud,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},pd=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},md=e=>({cache:sd(e.cacheSize),parseClassName:fd(e),sortModifiers:pd(e),...Yu(e)}),hd=/\s+/,gd=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(hd),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m||(h=r(f),!h)){c=t+(c.length>0?` `+c:c);continue}m=!1}let g=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),_=d?g+cd:g,v=_+h;if(o.indexOf(v)>-1)continue;o.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];o.push(_+t)}c=t+(c.length>0?` `+c:c)}return c},_d=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=vd(n))&&(i&&(i+=` `),i+=r);return i},vd=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=vd(e[r]))&&(n&&(n+=` `),n+=t);return n},yd=(e,...t)=>{let n,r,i,a,o=o=>(n=md(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=gd(e,n);return i(e,a),a};return a=o,(...e)=>a(_d(...e))},bd=[],X=e=>{let t=t=>t[e]||bd;return t.isThemeGetter=!0,t},xd=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Sd=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Cd=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,wd=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Td=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ed=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Dd=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Od=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,kd=e=>Cd.test(e),Z=e=>!!e&&!Number.isNaN(Number(e)),Ad=e=>!!e&&Number.isInteger(Number(e)),jd=e=>e.endsWith(`%`)&&Z(e.slice(0,-1)),Md=e=>wd.test(e),Nd=()=>!0,Pd=e=>Td.test(e)&&!Ed.test(e),Fd=()=>!1,Id=e=>Dd.test(e),Ld=e=>Od.test(e),Rd=e=>!Q(e)&&!$(e),zd=e=>ef(e,af,Fd),Q=e=>xd.test(e),Bd=e=>ef(e,of,Pd),Vd=e=>ef(e,sf,Z),Hd=e=>ef(e,lf,Nd),Ud=e=>ef(e,cf,Fd),Wd=e=>ef(e,nf,Fd),Gd=e=>ef(e,rf,Ld),Kd=e=>ef(e,uf,Id),$=e=>Sd.test(e),qd=e=>tf(e,of),Jd=e=>tf(e,cf),Yd=e=>tf(e,nf),Xd=e=>tf(e,af),Zd=e=>tf(e,rf),Qd=e=>tf(e,uf,!0),$d=e=>tf(e,lf,!0),ef=(e,t,n)=>{let r=xd.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},tf=(e,t,n=!1)=>{let r=Sd.exec(e);return r?r[1]?t(r[1]):n:!1},nf=e=>e===`position`||e===`percentage`,rf=e=>e===`image`||e===`url`,af=e=>e===`length`||e===`size`||e===`bg-size`,of=e=>e===`length`,sf=e=>e===`number`,cf=e=>e===`family-name`,lf=e=>e===`number`||e===`weight`,uf=e=>e===`shadow`,df=yd(()=>{let e=X(`color`),t=X(`font`),n=X(`text`),r=X(`font-weight`),i=X(`tracking`),a=X(`leading`),o=X(`breakpoint`),s=X(`container`),c=X(`spacing`),l=X(`radius`),u=X(`shadow`),d=X(`inset-shadow`),f=X(`text-shadow`),p=X(`drop-shadow`),m=X(`blur`),h=X(`perspective`),g=X(`aspect`),_=X(`ease`),v=X(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),$,Q],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[$,Q,c],T=()=>[kd,`full`,`auto`,...w()],ee=()=>[Ad,`none`,`subgrid`,$,Q],E=()=>[`auto`,{span:[`full`,Ad,$,Q]},Ad,$,Q],D=()=>[Ad,`auto`,$,Q],te=()=>[`auto`,`min`,`max`,`fr`,$,Q],O=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],k=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],A=()=>[`auto`,...w()],ne=()=>[kd,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],re=()=>[kd,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],ie=()=>[kd,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],j=()=>[e,$,Q],ae=()=>[...b(),Yd,Wd,{position:[$,Q]}],oe=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],se=()=>[`auto`,`cover`,`contain`,Xd,zd,{size:[$,Q]}],ce=()=>[jd,qd,Bd],M=()=>[``,`none`,`full`,l,$,Q],N=()=>[``,Z,qd,Bd],le=()=>[`solid`,`dashed`,`dotted`,`double`],ue=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],P=()=>[Z,jd,Yd,Wd],de=()=>[``,`none`,m,$,Q],fe=()=>[`none`,Z,$,Q],pe=()=>[`none`,Z,$,Q],me=()=>[Z,$,Q],he=()=>[kd,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Md],breakpoint:[Md],color:[Nd],container:[Md],"drop-shadow":[Md],ease:[`in`,`out`,`in-out`],font:[Rd],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Md],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Md],shadow:[Md],spacing:[`px`,Z],text:[Md],"text-shadow":[Md],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,kd,Q,$,g]}],container:[`container`],columns:[{columns:[Z,Q,$,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Ad,`auto`,$,Q]}],basis:[{basis:[kd,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[Z,kd,`auto`,`initial`,`none`,Q]}],grow:[{grow:[``,Z,$,Q]}],shrink:[{shrink:[``,Z,$,Q]}],order:[{order:[Ad,`first`,`last`,`none`,$,Q]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":te()}],"auto-rows":[{"auto-rows":te()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...O(),`normal`]}],"justify-items":[{"justify-items":[...k(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...k()]}],"align-content":[{content:[`normal`,...O()]}],"align-items":[{items:[...k(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...k(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":O()}],"place-items":[{"place-items":[...k(),`baseline`]}],"place-self":[{"place-self":[`auto`,...k()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mbs:[{mbs:A()}],mbe:[{mbe:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:ne()}],"inline-size":[{inline:[`auto`,...re()]}],"min-inline-size":[{"min-inline":[`auto`,...re()]}],"max-inline-size":[{"max-inline":[`none`,...re()]}],"block-size":[{block:[`auto`,...ie()]}],"min-block-size":[{"min-block":[`auto`,...ie()]}],"max-block-size":[{"max-block":[`none`,...ie()]}],w:[{w:[s,`screen`,...ne()]}],"min-w":[{"min-w":[s,`screen`,`none`,...ne()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...ne()]}],h:[{h:[`screen`,`lh`,...ne()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...ne()]}],"max-h":[{"max-h":[`screen`,`lh`,...ne()]}],"font-size":[{text:[`base`,n,qd,Bd]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,$d,Hd]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,jd,Q]}],"font-family":[{font:[Jd,Ud,t]}],"font-features":[{"font-features":[Q]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,$,Q]}],"line-clamp":[{"line-clamp":[Z,`none`,$,Vd]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,$,Q]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,$,Q]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...le(),`wavy`]}],"text-decoration-thickness":[{decoration:[Z,`from-font`,`auto`,$,Bd]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[Z,`auto`,$,Q]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,$,Q]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,$,Q]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:ae()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:se()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Ad,$,Q],radial:[``,$,Q],conic:[Ad,$,Q]},Zd,Gd]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:ce()}],"gradient-via-pos":[{via:ce()}],"gradient-to-pos":[{to:ce()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:M()}],"rounded-s":[{"rounded-s":M()}],"rounded-e":[{"rounded-e":M()}],"rounded-t":[{"rounded-t":M()}],"rounded-r":[{"rounded-r":M()}],"rounded-b":[{"rounded-b":M()}],"rounded-l":[{"rounded-l":M()}],"rounded-ss":[{"rounded-ss":M()}],"rounded-se":[{"rounded-se":M()}],"rounded-ee":[{"rounded-ee":M()}],"rounded-es":[{"rounded-es":M()}],"rounded-tl":[{"rounded-tl":M()}],"rounded-tr":[{"rounded-tr":M()}],"rounded-br":[{"rounded-br":M()}],"rounded-bl":[{"rounded-bl":M()}],"border-w":[{border:N()}],"border-w-x":[{"border-x":N()}],"border-w-y":[{"border-y":N()}],"border-w-s":[{"border-s":N()}],"border-w-e":[{"border-e":N()}],"border-w-bs":[{"border-bs":N()}],"border-w-be":[{"border-be":N()}],"border-w-t":[{"border-t":N()}],"border-w-r":[{"border-r":N()}],"border-w-b":[{"border-b":N()}],"border-w-l":[{"border-l":N()}],"divide-x":[{"divide-x":N()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":N()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...le(),`hidden`,`none`]}],"divide-style":[{divide:[...le(),`hidden`,`none`]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-bs":[{"border-bs":j()}],"border-color-be":[{"border-be":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...le(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[Z,$,Q]}],"outline-w":[{outline:[``,Z,qd,Bd]}],"outline-color":[{outline:j()}],shadow:[{shadow:[``,`none`,u,Qd,Kd]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":[`none`,d,Qd,Kd]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:N()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[Z,Bd]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":N()}],"inset-ring-color":[{"inset-ring":j()}],"text-shadow":[{"text-shadow":[`none`,f,Qd,Kd]}],"text-shadow-color":[{"text-shadow":j()}],opacity:[{opacity:[Z,$,Q]}],"mix-blend":[{"mix-blend":[...ue(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":ue()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[Z]}],"mask-image-linear-from-pos":[{"mask-linear-from":P()}],"mask-image-linear-to-pos":[{"mask-linear-to":P()}],"mask-image-linear-from-color":[{"mask-linear-from":j()}],"mask-image-linear-to-color":[{"mask-linear-to":j()}],"mask-image-t-from-pos":[{"mask-t-from":P()}],"mask-image-t-to-pos":[{"mask-t-to":P()}],"mask-image-t-from-color":[{"mask-t-from":j()}],"mask-image-t-to-color":[{"mask-t-to":j()}],"mask-image-r-from-pos":[{"mask-r-from":P()}],"mask-image-r-to-pos":[{"mask-r-to":P()}],"mask-image-r-from-color":[{"mask-r-from":j()}],"mask-image-r-to-color":[{"mask-r-to":j()}],"mask-image-b-from-pos":[{"mask-b-from":P()}],"mask-image-b-to-pos":[{"mask-b-to":P()}],"mask-image-b-from-color":[{"mask-b-from":j()}],"mask-image-b-to-color":[{"mask-b-to":j()}],"mask-image-l-from-pos":[{"mask-l-from":P()}],"mask-image-l-to-pos":[{"mask-l-to":P()}],"mask-image-l-from-color":[{"mask-l-from":j()}],"mask-image-l-to-color":[{"mask-l-to":j()}],"mask-image-x-from-pos":[{"mask-x-from":P()}],"mask-image-x-to-pos":[{"mask-x-to":P()}],"mask-image-x-from-color":[{"mask-x-from":j()}],"mask-image-x-to-color":[{"mask-x-to":j()}],"mask-image-y-from-pos":[{"mask-y-from":P()}],"mask-image-y-to-pos":[{"mask-y-to":P()}],"mask-image-y-from-color":[{"mask-y-from":j()}],"mask-image-y-to-color":[{"mask-y-to":j()}],"mask-image-radial":[{"mask-radial":[$,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":P()}],"mask-image-radial-to-pos":[{"mask-radial-to":P()}],"mask-image-radial-from-color":[{"mask-radial-from":j()}],"mask-image-radial-to-color":[{"mask-radial-to":j()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Z]}],"mask-image-conic-from-pos":[{"mask-conic-from":P()}],"mask-image-conic-to-pos":[{"mask-conic-to":P()}],"mask-image-conic-from-color":[{"mask-conic-from":j()}],"mask-image-conic-to-color":[{"mask-conic-to":j()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:ae()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,$,Q]}],filter:[{filter:[``,`none`,$,Q]}],blur:[{blur:de()}],brightness:[{brightness:[Z,$,Q]}],contrast:[{contrast:[Z,$,Q]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Qd,Kd]}],"drop-shadow-color":[{"drop-shadow":j()}],grayscale:[{grayscale:[``,Z,$,Q]}],"hue-rotate":[{"hue-rotate":[Z,$,Q]}],invert:[{invert:[``,Z,$,Q]}],saturate:[{saturate:[Z,$,Q]}],sepia:[{sepia:[``,Z,$,Q]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,$,Q]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[Z,$,Q]}],"backdrop-contrast":[{"backdrop-contrast":[Z,$,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,Z,$,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Z,$,Q]}],"backdrop-invert":[{"backdrop-invert":[``,Z,$,Q]}],"backdrop-opacity":[{"backdrop-opacity":[Z,$,Q]}],"backdrop-saturate":[{"backdrop-saturate":[Z,$,Q]}],"backdrop-sepia":[{"backdrop-sepia":[``,Z,$,Q]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,$,Q]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[Z,`initial`,$,Q]}],ease:[{ease:[`linear`,`initial`,_,$,Q]}],delay:[{delay:[Z,$,Q]}],animate:[{animate:[`none`,v,$,Q]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,$,Q]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:fe()}],"rotate-x":[{"rotate-x":fe()}],"rotate-y":[{"rotate-y":fe()}],"rotate-z":[{"rotate-z":fe()}],scale:[{scale:pe()}],"scale-x":[{"scale-x":pe()}],"scale-y":[{"scale-y":pe()}],"scale-z":[{"scale-z":pe()}],"scale-3d":[`scale-3d`],skew:[{skew:me()}],"skew-x":[{"skew-x":me()}],"skew-y":[{"skew-y":me()}],transform:[{transform:[$,Q,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:he()}],"translate-x":[{"translate-x":he()}],"translate-y":[{"translate-y":he()}],"translate-z":[{"translate-z":he()}],"translate-none":[`translate-none`],accent:[{accent:j()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,$,Q]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,$,Q]}],fill:[{fill:[`none`,...j()]}],"stroke-w":[{stroke:[Z,qd,Bd,Vd]}],stroke:[{stroke:[`none`,...j()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function ff(...e){return df(Hu(e))}function pf({surface:e=`auto`,override:t,onClick:n,className:r}){let[,i]=(0,d.useState)(0);(0,d.useEffect)(()=>{let t=()=>i(e=>e+1);window.addEventListener(Pu,t);let n=e===`auto`&&typeof MutationObserver<`u`?new MutationObserver(()=>i(e=>e+1)):null;return n&&typeof document<`u`&&n.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),()=>{window.removeEventListener(Pu,t),n?.disconnect()}},[e]);let a=Bu(e,t),[o,c]=(0,d.useState)(!1),[l,f]=(0,d.useState)(!1);(0,d.useEffect)(()=>{c(!1)},[a.iconSrc]),(0,d.useEffect)(()=>{f(!1)},[a.fullLogoSrc]);let p=a.wordmarkCase===`lowercase`?`lowercase`:a.wordmarkCase===`uppercase`?`uppercase`:``,m=a.mode===`full-logo`&&!!a.fullLogoSrc&&!l,h=a.showIcon&&!!a.iconSrc&&!o,g=a.showIcon&&!h&&!!a.iconSvgPath;return(0,u.jsx)(s,{to:a.href,onClick:n,"aria-label":!a.showWordmark||m?a.wordmark:void 0,className:ff(`flex items-center gap-2.5 whitespace-nowrap shrink-0`,r),children:m?(0,u.jsx)(`img`,{src:a.fullLogoSrc,alt:a.fullLogoAlt,referrerPolicy:`no-referrer`,onError:()=>f(!0),style:{height:`${a.fullLogoHeightPx}px`},className:`w-auto object-contain shrink-0`}):(0,u.jsxs)(u.Fragment,{children:[h&&(0,u.jsx)(`img`,{src:a.iconSrc,alt:a.iconAlt,referrerPolicy:`no-referrer`,onError:()=>c(!0),style:{width:`${a.iconSizePx}px`,height:`${a.iconSizePx}px`},className:`object-contain shrink-0`}),g&&(0,u.jsx)(`svg`,{viewBox:a.iconSvgViewBox,style:{width:`${a.iconSizePx}px`,height:`${a.iconSizePx}px`},className:`fill-current shrink-0`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:a.iconSvgPath})}),a.showWordmark&&a.wordmark&&(0,u.jsx)(`span`,{className:ff(`text-xl font-bold tracking-tight`,p),children:a.wordmark})]})})}function mf({id:e}){switch(e){case`github`:return(0,u.jsx)(bu,{className:`h-4 w-4`,"aria-hidden":`true`});case`twitter`:return(0,u.jsx)(wu,{className:`h-4 w-4`,"aria-hidden":`true`});case`linkedin`:return(0,u.jsx)(Su,{className:`h-4 w-4`,"aria-hidden":`true`});default:return(0,u.jsx)(xu,{className:`h-4 w-4`,"aria-hidden":`true`})}}function hf({isOpen:t,onClose:n,onOpenSearch:r,brandLogoOverride:i}){let a=e(),o=Ru(),[c,l]=(0,d.useState)(null);return(0,d.useEffect)(()=>(t?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[t]),(0,d.useEffect)(()=>{let e=e=>{e.key===`Escape`&&n()};return t&&window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t,n]),(0,u.jsx)(mc,{children:t&&(0,u.jsxs)(uu.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25,ease:[.16,1,.3,1]},role:`dialog`,"aria-modal":`true`,"aria-label":`Site navigation`,className:`fixed inset-0 z-[100] flex flex-col bg-[var(--iapj-menu-bg)] text-[var(--iapj-menu-text)]`,children:[(0,u.jsxs)(`div`,{className:`mx-auto flex h-20 w-full max-w-[var(--iapj-container-max)] items-center justify-between px-4 sm:px-6 lg:px-8`,children:[(0,u.jsx)(pf,{surface:`dark`,override:i,onClick:n,className:`text-[var(--iapj-menu-text)]`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[r&&(0,u.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Search journal`,className:`p-2 text-[var(--iapj-menu-muted)] hover:text-[var(--iapj-menu-text)] transition-colors cursor-pointer`,children:(0,u.jsx)(Cu,{className:`h-5 w-5`})}),(0,u.jsx)(s,{to:o.navigation.headerCta.path,onClick:n,className:`whitespace-nowrap shrink-0 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#111115] transition-transform duration-150 hover:scale-[1.02]`,children:o.navigation.headerCta.label}),(0,u.jsx)(`button`,{type:`button`,onClick:n,"aria-label":`Close navigation menu`,className:`p-2 text-[var(--iapj-menu-muted)] hover:text-[var(--iapj-menu-text)] transition-colors cursor-pointer`,children:(0,u.jsx)(Tu,{className:`h-6 w-6`})})]})]}),(0,u.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:(0,u.jsxs)(`div`,{className:`mx-auto grid h-full max-w-[var(--iapj-container-max)] grid-cols-1 gap-12 px-4 py-10 sm:px-6 md:grid-cols-12 md:items-center lg:px-8`,children:[(0,u.jsxs)(uu.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.06,duration:.4},className:`md:col-span-5 flex flex-col gap-3`,children:[(0,u.jsx)(`a`,{href:Lu(o.contact.emailRef),className:`w-fit text-xl sm:text-2xl font-normal underline underline-offset-8 decoration-1 hover:opacity-75 transition-opacity`,children:o.contact.email}),(0,u.jsx)(`p`,{className:`text-base text-[var(--iapj-menu-muted)]`,children:o.contact.secondaryLine})]}),(0,u.jsx)(`nav`,{className:`md:col-span-7 flex flex-col gap-2`,"aria-label":`Primary menu links`,children:o.navigation.overlayMenu.map((e,t)=>{let r=e.path===`/blog`?a.pathname===`/`||a.pathname===`/blog`:a.pathname.startsWith(e.path),i=c===e.path||c===null&&r;return(0,u.jsx)(uu.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.04+t*.04,duration:.35},children:(0,u.jsx)(s,{to:e.path,onClick:n,onMouseEnter:()=>l(e.path),onMouseLeave:()=>l(null),className:ff(`block rounded-xl px-5 py-3 text-3xl sm:text-4xl font-semibold tracking-tight transition-all duration-150 border`,i?`border-white/15 bg-white/[0.04] text-white`:`border-transparent text-white/80 hover:text-white`),children:e.label})},e.path)})})]})}),(0,u.jsxs)(`div`,{className:`mx-auto flex w-full max-w-[var(--iapj-container-max)] flex-col items-start justify-between gap-4 border-t border-[var(--iapj-menu-border)] px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8`,children:[(0,u.jsx)(`div`,{className:`flex items-center gap-5`,children:o.contact.socials.map(e=>(0,u.jsx)(`a`,{href:Lu(e.urlRef),target:`_blank`,rel:`noreferrer`,"aria-label":e.label,className:`text-[var(--iapj-menu-text)] hover:opacity-70 transition-opacity`,children:(0,u.jsx)(mf,{id:e.id})},e.id))}),(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--iapj-menu-muted)]`,children:[o.navigation.legalLinks.map(e=>(0,u.jsx)(s,{to:e.path,onClick:n,className:`underline underline-offset-4 hover:text-white transition-colors`,children:e.label},e.label)),(0,u.jsx)(`span`,{children:o.brand.tagline})]})]})]})})}var gf=Object.assign({"/src/content/ux-guide/customer-journey-map.md":`---
title: "Customer Journey Mapping Without the Wall of Sticky Notes"
slug: customer-journey-map
route: /blog/ux-guide/customer-journey-map
guide: ux-guide
chapter: 4
category: ui-ux-guides
dek: "What a journey map is for, which parts matter, how to build one from evidence, and how to keep it alive after the workshop."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "Customer Journey Mapping: A Practical Guide | InnerAnimalMedia"
seoDescription: "How to build a customer journey map from real evidence: scope, stages, touchpoints, emotions, opportunities, common types, and how to make it drive decisions."
cover:
  key: ux-guide/customer-journey-map-cover
  alt: "Cover illustration for customer journey mapping"
  ratio: "1.8:1"
related: [user-personas, ux-task-analysis, user-behavior-data]
---

A journey map is a picture of what a person goes through to reach a goal, laid out over time, with what they do, what they think and feel, and what they touch along the way. Its value is not the artifact. It is the shared view it forces a team to build: one honest account of the experience that marketing, product, support and engineering can all point at.

Most journey maps fail for the same reason most workshops fail. They are produced from opinion, admired on a wall, and never opened again. This chapter is about making one that changes decisions.

::media{key="ux-guide/customer-journey-map-hero" alt="A journey map with stages, actions, emotions and opportunities" caption="Anatomy of a journey map" ratio="16:9"}

## What a Journey Map Is For

Use it when you need to:

- **See across silos.** Each team owns a slice. The map shows the seams between slices, which is where people fall through.
- **Find the moments that matter.** Not every stage deserves equal investment. The map highlights the highest-pain and highest-impact points.
- **Align on a problem before debating solutions.** It is much easier to agree on where the experience hurts than on what to build.
- **Communicate with people who were not in the research.** A good map carries evidence to executives and new hires.

Do not use it as a substitute for research, as a one-time deliverable, or as a way to document every possible path. It is a lens, not an encyclopedia.

## The Parts of a Map

A map has a consistent anatomy. Keep what serves your question and drop the rest.

**Scope and persona.** Whose journey, and toward what goal? A map without a defined actor and endpoint will wander. Anchor it to a specific user type, built from research, and to a specific goal such as "launch a first site" or "resolve a billing problem."

**Stages.** The big phases, named in the person's terms: Discover, Evaluate, Set up, Use, Get help, Renew. Four to eight is the usual range.

**Actions.** What the person does at each stage, including offline steps and detours.

**Thoughts and questions.** What they are wondering, worrying about or deciding. This is where language from interviews earns its keep.

**Emotions.** How they feel, plotted as a line that rises and falls across stages. The dips are the prioritization signal. Keep the scale simple and base each point on evidence.

**Touchpoints.** Every place they meet your product or organization: ads, site pages, emails, in-app screens, support chat, invoices, documentation.

**Pain points.** Specific friction, with evidence.

**Opportunities.** Ideas for improvement, attached to the pain that motivates them. Keep these separate from findings, so evidence and speculation don't blur.

**Owners and metrics.** Who is responsible for each stage and how it is measured. This is what turns the map into an operating tool.

## Build It From Evidence

A map based on what the team believes is a persuasive piece of fiction. A map based on observation is a research asset.

### Gather

- **Interviews** with people who recently completed the journey, asked to walk through what happened in order.
- **Behavior data** to see where people actually drop off or loop.
- **Support tickets and chat transcripts** for the unprompted friction.
- **Session replays** for specific stages.
- **Frontline staff**, who see patterns before the data does.

### Draft Together, Then Check

A workshop with people from across the journey is an efficient way to assemble a first draft and to build shared ownership. Treat the workshop output as a hypothesis. Then check each stage against the evidence and revise.

### Mark Confidence

Annotate parts of the map with how well they are supported. A solid line for observed behavior, a dotted line for inference. It keeps the map honest and tells you where to research next.

### Keep It Small

One persona, one goal, one page where possible. If it will not fit, you are probably mapping two journeys.

## Types of Maps

| Type | Describes | Use when |
|---|---|---|
| **Current state** | The experience as it is today, with its pain | You need to diagnose |
| **Future state** | An intended, improved experience | You are designing a solution or aligning on a target |
| **Day in the life** | A person's whole day, with your product as one part | Your product competes with other things for attention |
| **Service blueprint** | The journey plus the backstage processes, systems and people that support each step | You need to understand operational causes and handoffs |

Many projects use a current-state map to diagnose, then a future-state map to design, then a blueprint to plan delivery.

## Journeys in Different Contexts

The mechanics are the same, but the shape changes with the product.

**Consumer products** tend to have a short consideration phase and a long tail of habit. The most important stage is often the first-use moment.

**B2B and platforms** have multiple actors: the evaluator, the buyer, the administrator and the daily user are often different people. Map each, and map the handoffs between them.

**Self-serve developer and builder tools** have a distinctive arc: curiosity, a first small success, a stretch of learning, and then a decision to depend on it. The time to first working result is the pivotal point, and onboarding friction there is expensive.

**Agent-based products** add a delegation loop inside the journey: state a goal, watch, approve, review, correct. The emotional curve often dips at the first approval and the first mistake. Those two moments deserve their own sub-map.

## An Example, in Brief

Take someone using a theme editor to launch a first site. A condensed slice of their journey:

| Stage | Action | Thinking | Feeling | Touchpoint | Opportunity |
|---|---|---|---|---|---|
| Start | Opens the editor with a starter theme | "Will I break something?" | Anxious | Editor home | Make undo and preview visible immediately |
| First change | Tries editing a headline | "Is this what visitors will see?" | Curious | Canvas, panel | Show live preview and a clear live/draft indicator |
| Stuck | Cannot find how to change a color | "Where is it hiding?" | Frustrated | Settings tree | Searchable settings and an assistant they can ask |
| Publish | Looks for how to make it live | "Is it saved? Is it public?" | Uncertain | Header, dialogs | Single obvious publish action with confirmation of state |
| After | Visits the live site | "It's actually there." | Proud | Live site | Prompt to share and a path to the next improvement |

The map immediately suggests three design priorities, each tied to a specific stage and feeling, and each testable.

## Turning the Map Into Action

### Find the Moments That Matter

Look for the lowest emotional points, the highest drop-off, and the moments where an expectation is violated. Then weigh them against frequency and business impact. The biggest opportunities are usually at transitions: between marketing and onboarding, between setup and first success, between a problem and its resolution.

### Convert Opportunities Into Hypotheses and Experiments

"Improve onboarding" is not an action. "Reduce time to first published change by showing a one-click starter on first open" is. Attach a metric.

### Assign Owners

A map that nobody owns decays. Name an owner for each stage and for the map itself.

### Connect to Metrics

Give each stage a measure: completion, time, satisfaction, support contacts. When the map and the dashboard tell the same story, it becomes part of how the team works.

### Revisit on a Cadence

Refresh after major changes or on a schedule such as every six months. Version the map, and note what changed and why.

## Common Mistakes

- **Mapping what you intend, not what happens.** The aspirational map is a future-state map. Label it as one.
- **Averaging everyone into a mush.** Different goals and personas produce different journeys.
- **Ignoring the before and after.** The journey starts before first contact and continues after the sale.
- **Too much detail.** If people cannot read it from a few feet away, it will not be read.
- **Emotion with no evidence.** A smiley face is not data.
- **No follow-through.** Decide, before the workshop, what decisions the map will feed.

## A Lightweight Recipe

If you want something useful in a week:

1. Pick one persona and one goal.
2. Interview five people who recently did it. Ask for the story in order.
3. Pull the matching funnel and a handful of tickets.
4. Draft stages, actions, thoughts and touchpoints.
5. Plot emotion from what you heard, not what you guessed.
6. Mark the three worst moments and the evidence for each.
7. Write one experiment per moment, with a metric and an owner.
8. Put the date you will revisit it on the map.

That is a journey map people will actually use.
`,"/src/content/ux-guide/future-of-ux-design.md":`---
title: "Where UX Is Heading: Agents, Generative Interfaces and the Durable Parts"
slug: future-of-ux-design
route: /blog/ux-guide/future-of-ux-design
guide: ux-guide
chapter: 2
category: ui-ux-guides
dek: "Separating the shifts that will last from the ones that are merely loud: agentic interfaces, generative UI, multimodal input, and what stays the same."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "Where UX Is Heading: Agents, Generative UI and What Lasts | InnerAnimalMedia"
seoDescription: "A grounded look at the future of UX design: agentic interface principles, generative and adaptive UI, multimodal input, design-code convergence and accessibility law."
cover:
  key: ux-guide/future-of-ux-design-cover
  alt: "Cover illustration for the future of UX design"
  ratio: "1.8:1"
related: [ux-disciplines, ux-myths, product-designer]
---

Forecasts about design are mostly marketing with a calendar attached. This chapter takes a more modest approach. It sorts what is changing into three piles: shifts that follow from a real change in what software does, shifts that are fashion, and parts of the craft that will outlast both. Predictions are stated as bets, with the reasoning shown, so you can disagree with the reasoning.

::media{key="ux-guide/future-of-ux-design-hero" alt="Three overlapping layers labeled durable, shifting and fashionable" caption="Three layers of change" ratio="16:9"}

## Durable, Shifting, Fashionable

**Durable** things follow from human limits. People have finite attention, limited working memory, a need to feel in control, and a strong preference for the familiar. Interfaces that respect those limits will keep working. Hierarchy, feedback, clarity and consistency are not going out of date.

**Shifting** things follow from changes in capability. When software can plan and act on its own, the interface has to expose different things: intent, progress, authority, reversibility. That is a genuine redesign of the interaction model, not a new coat of paint.

**Fashionable** things follow from taste. A particular gradient, a card radius, an animation style. They date quickly and cost little to adopt or drop. Do not confuse them with the other two.

The test when you read a trend: does it follow from a human limit, a capability change, or taste? Spend your effort in that order.

## Agentic Interfaces

The largest shift in interaction is software that does things instead of waiting to be told each step. A person states a goal; the system plans, calls tools, changes things, and reports. The design problem moves from "how do I perform this task" to "how do I delegate it, supervise it and recover from it."

A set of principles has emerged from building these systems, and they are consistent enough to treat as a working checklist.

**Legibility.** The user should be able to see what the agent is doing and has done, in language they understand. A step log that names actions and targets beats a spinner and a final message. People cannot trust what they cannot inspect.

**Scoped authority.** Make the boundary of what the agent may do explicit and adjustable. Read-only access, access to one workspace, access to production. The default should be the narrowest scope that lets the task succeed, with a clear path to widen it.

**Approvals proportional to risk.** Low-risk, reversible actions should not interrupt. High-risk or irreversible ones should. Prompting for everything trains people to click through; prompting for nothing erodes trust. Watch approval rates and timing: instant approvals on everything suggest the prompt has lost its meaning.

**Interruptibility.** Users must be able to stop, redirect or take over mid-task, and the agent must be able to explain where it stopped.

**Undo and audit.** Reversibility changes behavior: people try more when they can take it back. Pair undo with a durable record of who or what changed something, when and why.

**Honest uncertainty.** When the agent is unsure, guessing, or working from stale information, the interface should say so. Confidence that is not earned is the fastest way to lose a user.

**Handoff quality.** When the agent cannot finish, the handoff should state what was done, what remains, and what it needs. A failure that leaves the user to reconstruct state is a design defect.

\`\`\`mermaid
flowchart TD
  G[Goal stated] --> P[Plan shown]
  P --> X{Risk level}
  X -- low --> R[Run + log]
  X -- high --> A[Ask for approval]
  A -- yes --> R
  A -- no --> N[Explain + offer options]
  R --> C[Report + undo available]
\`\`\`

## Generative and Adaptive Interfaces

Interfaces that are assembled at the moment of use, in response to context or request, are now technically plausible. The promise is real: surfaces that fit the task. The risks are equally real: inconsistency, unpredictability, and the loss of a stable mental model.

The sensible approach is constrained generation. The system composes interfaces from a fixed vocabulary of components and tokens, within layout rules, rather than inventing arbitrary UI. That keeps the result accessible, on-brand and predictable, while letting the arrangement adapt.

Principles that keep generative UI trustworthy:

- **A stable core.** Navigation, identity and primary actions stay put. Adaptation happens inside a frame.
- **Explainable change.** If the interface changed itself, the user can see why and revert it.
- **Accessibility is non-negotiable and automatic.** Generated layouts must meet contrast, target size and focus requirements by construction, because nobody will review each one.
- **Tokens as the guardrail.** If every color and spacing value comes from a theme, generated output inherits the theme's coherence for free.

## Conversational and Multimodal Input

Text, voice, images, files and direct manipulation are converging in one interaction. A person might sketch, speak and type in a single request. The design questions are about choosing the right channel and combining them well.

- Voice is excellent for hands-busy and eyes-busy contexts and poor for precision and privacy.
- Conversation is excellent for open-ended goals and poor for browsing a known set of options. A chat box is not a navigation system.
- Direct manipulation remains the best way to make precise visual changes. The strongest products let people point at something and describe a change, combining the channels.

Do not replace a well-designed control with a prompt box because it seems modern. Add the prompt box where free-form intent is the thing people actually have.

## Spatial and Ambient Computing

Headsets, glasses and ambient devices introduce depth, gaze and gesture as inputs, and real-world context as a layout constraint. The craft problems are familiar in new clothes: target size and distance, comfort over long sessions, feedback for non-touch input, avoiding sensory overload. Most teams will encounter this by adapting an existing product, so the practical skill is knowing which interactions translate and which do not.

## Design and Code Are Converging

The handoff, in which a designer produces a picture and an engineer re-creates it, is eroding. Shared tokens, component libraries and code-aware design tools mean a design decision can be expressed once and consumed by both.

Practical consequences for teams:

- **Tokens become an API.** Changing a token is a product release. It deserves versioning and a deprecation path.
- **Components own their states.** A component that ships with complete states and accessibility behavior removes whole categories of review.
- **The design engineer role grows.** People who can reason about layout, motion and semantics in code are unusually valuable, especially on small teams.
- **Prototypes get real.** It is increasingly cheaper to build the interaction than to simulate it.

## Personalization and Privacy

Interfaces can adapt to the person: surfacing what they use, hiding what they do not, adjusting density and language. Done well, it reduces effort. Done carelessly, it creates surprise, filter bubbles and surveillance feelings.

Keep adaptation inspectable and reversible, base it on the minimum necessary data, prefer on-device or session-scoped adaptation where possible, and never make a core function move without warning. Predictability is a feature.

## Accessibility Becomes a Requirement

Accessibility has been moving from guideline to obligation for years. The European Accessibility Act began applying to many consumer-facing digital products and services in June 2025, and accessibility lawsuits are routine in other markets. WCAG 2.2 added criteria around target size, focus visibility and authentication that many products still miss.

The efficient response is to treat accessibility as a property of the system rather than a review stage. Accessible components, token-level contrast guarantees, keyboard behavior tested once in the component, and a short manual audit before release. It costs a fraction of retrofitting, and it improves the product for everyone.

## Performance and Sustainability

Speed is an experience quality people feel before they can describe it. Core Web Vitals give a shared language: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1. As interfaces get heavier with generated content and media, the discipline of performance budgets becomes part of design, not just engineering.

There is a related and growing awareness of the energy cost of digital products. Fewer, lighter assets and less wasted computation tend to improve speed and sustainability together.

## What to Learn, What to Ignore

**Worth your time:**

- Designing for delegation: approvals, scopes, logs, undo.
- Systems thinking: tokens, components, constraints.
- Research literacy: being able to tell evidence from anecdote.
- Writing: product language is interface.
- Enough code to prototype and to understand constraints.
- Accessibility as craft.

**Worth watching without rebuilding your practice:**

- Any single tool's interface conventions, which will shift.
- Specific visual styles.
- Claims that research or design will be fully automated. Tools will absorb tasks. The job of deciding what to build, for whom, and whether it worked is not a task.

## A Note on Predictions

Anyone who tells you exactly what interfaces will look like in five years is guessing. The more reliable approach is to know the durable constraints, track real capability changes, and run small experiments cheaply. The teams that adapt best are not the ones with the best forecasts. They are the ones with the shortest loop between an idea and a test.
`,"/src/content/ux-guide/interaction-designer.md":`---
title: "What an Interaction Designer Actually Does"
slug: interaction-designer
route: /blog/ux-guide/interaction-designer
guide: ux-guide
chapter: 9
category: ui-ux-guides
dek: "The behavior layer of design: states, transitions, timing, feedback and the edge cases that decide whether an interface feels trustworthy."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "What an Interaction Designer Actually Does | InnerAnimalMedia"
seoDescription: "A clear guide to the interaction designer role: states, transitions, microinteractions, motion, input models, deliverables, tools and how it differs from UI and UX."
cover:
  key: ux-guide/interaction-designer-cover
  alt: "Cover illustration for the interaction designer role"
  ratio: "1.8:1"
related: [ux-task-analysis, product-designer, ux-disciplines]
---

An interaction designer owns behavior. Where a UI designer decides what something looks like at rest, an interaction designer decides what happens when someone touches, types, drags, waits, makes a mistake or changes their mind. They design the conversation between a person and a system, one exchange at a time.

The term is often credited to Bill Moggridge and Bill Verplank, who used it in the 1980s to describe designing for how digital products behave rather than how they are shaped. The idea has aged well: interfaces are not pictures, they are responsive systems, and the quality of the response is the experience.

::media{key="ux-guide/interaction-designer-hero" alt="A control moving through default, hover, pressed, loading and success states" caption="One control, many moments" ratio="16:9"}

## What the Role Covers

**States.** Every element exists in several conditions: default, hover, focus, pressed, disabled, loading, empty, error, success, selected, expanded, dragging. An interaction designer specifies them all, and what moves a component from one to another.

**Transitions.** The movement between states, and between screens. How a panel enters, how a list reorders, how a deleted item leaves, and what each conveys about cause and effect.

**Feedback.** How the system tells the person it heard them: a pressed state, a progress indicator, a confirmation, an error. Feedback has to be immediate, proportionate and honest.

**Input models.** Mouse, touch, keyboard, voice, pen, gamepad, gesture. Each has its own conventions, precision and failure modes, and the same feature often needs to work in several.

**Flow and logic.** What happens next, what is preserved, what can be undone, what is blocked and why.

**Edge cases.** The conditions most designs skip: very long text, no data, thousands of items, slow networks, lost connections, simultaneous edits, permission changes mid-task.

## How It Differs From UI and UX

The roles overlap and often live in one person on small teams. The distinctions are useful for knowing what you are doing at a given moment.

| | UX design | UI design | Interaction design |
|---|---|---|---|
| Core question | Is this the right thing, for the right people? | Does it look and read clearly? | Does it behave in a way people can predict and trust? |
| Works in | Research, strategy, flows | Layout, type, color, components | States, motion, input, logic |
| Typical artifact | Insights, journey maps | Visual designs, tokens | State tables, prototypes, motion specs |

A quick way to tell: if you are deciding what the button looks like, it is UI. If you are deciding what happens when someone double-clicks it, holds it, tabs to it, or presses it with no connection, it is interaction design.

## The Craft: Principles That Hold Up

**Direct and immediate response.** Within about a tenth of a second, a person should feel that the system responded. Around a second, they notice the delay. Beyond about ten, they lose their train of thought. Show something at once, even if the result takes longer.

**Visible state.** People should be able to tell what mode they are in, what is selected, what is saved and what is pending. Invisible state is where people get lost.

**Reversibility.** The easiest way to make an interface feel safe is to make actions undoable. It changes how boldly people explore.

**Constraints and affordances.** Make the right action obvious and the wrong action hard. Disable or hide what cannot work, and say why when it matters.

**Consistency.** The same gesture should do the same thing everywhere. Surprise costs trust.

**Forgiveness.** Accept varied input, preserve work on error, and let people recover without starting over.

**Progressive disclosure.** Show what matters now, reveal complexity when asked.

**Respect for attention.** Interrupt only when it is worth it.

## Microinteractions

Dan Saffer popularized the idea that small, single-purpose moments, such as toggling a setting, pulling to refresh or liking a post, deserve design attention of their own. He describes four parts:

- **Trigger:** what starts it, by the user or the system.
- **Rules:** what happens once it starts.
- **Feedback:** what the person sees, hears or feels.
- **Loops and modes:** how it repeats, changes over time or behaves in special cases.

Apply the lens to something ordinary: sending a message in an agent composer. The trigger is pressing send or the keyboard shortcut. The rules decide whether empty input is blocked, whether the draft clears, and whether a second submit is allowed while the first is running. The feedback shows the message appear, the field reset and a response begin streaming. The loops decide what happens on failure: does the text come back, with an explanation?

## Motion With a Purpose

Motion is the most visible tool and the easiest to misuse. Use it for four jobs:

- **Orientation:** show where something came from or went.
- **Feedback:** confirm an action.
- **Causality:** connect a change to its cause.
- **Attention:** direct the eye to what matters.

Practical defaults:

- Most interface transitions fall between 100 and 300 milliseconds. Shorter feels abrupt, longer feels sluggish.
- Use ease-out for elements entering and ease-in for elements leaving.
- Animate transform and opacity, which are cheap, rather than properties that force layout.
- Keep movement proportional to distance and importance.
- Honor the reduced-motion preference by replacing movement with a fade or an instant change.
- For waits over a second, use progress, not endless motion.

If you cannot say which of the four jobs a piece of motion does, cut it.

## Designing for Waiting, Failure and Recovery

Many interfaces are designed for the instant when everything works. Real use includes waiting and failure.

**Waiting.** Skeletons and progress indicators for known layouts, determinate progress when you can measure, step lists for long tasks. Say what is happening, and whether the person can leave.

**Failure.** Name what went wrong in plain terms, say whether anything was lost, and offer a way forward. "Something went wrong" is a missed opportunity.

**Recovery.** Preserve input. Allow retry. Offer undo. Make partial success visible.

**Empty states.** The first-use screen is an interaction too. Say what belongs here and how to start.

## Interaction Design for Agents and AI

When the system takes actions, interaction design extends to supervision.

- **Streaming and progress.** Show that work is happening and what stage it is in.
- **Approval moments.** Design the prompt so the person can understand what they are authorizing, in plain language, with the target and the consequence. Make the safe choice easy and the dangerous one deliberate.
- **Interruption.** A stop control that works, and clear state about what had and had not happened when it was pressed.
- **Correction.** Let people edit a plan, redirect mid-run and undo outcomes.
- **Transparency.** A readable log, not a wall of internals.

The timing of an approval prompt, its wording and its default state shape whether people stay in control or click through.

## Deliverables

Interaction designers communicate behavior, which pictures do poorly. Typical outputs:

- **State tables** that enumerate every state and transition for a component.
- **Flow diagrams** with decisions and error branches.
- **Interactive prototypes** that let people feel the behavior.
- **Motion specs** with duration, easing, properties and triggers.
- **Annotated wireframes** that describe logic in words.
- **Behavior notes** for edge cases: truncation, overflow, validation timing.
- **Input maps** for keyboard, touch and pointer.

A small state table already beats most mockups:

| State | Appearance | Behavior |
|---|---|---|
| Default | Primary fill | Click submits |
| Hover | Slightly lifted | Pointer cursor |
| Focus | Visible ring, never hidden | Enter or Space submits |
| Pressed | Depressed | Submits on release |
| Loading | Spinner replaces label, width fixed | Further clicks ignored |
| Disabled | Muted, with reason available | Not focusable, or focusable with explanation |
| Error | Inline message beside the control | Retry available |

## Tools

Whatever lets you express behavior cheaply: a design tool with variables and prototyping for flows, a coded prototype when feel matters, paper for early logic, a motion tool or small animation library to test timing, and a screen reader plus keyboard-only testing to check that behavior holds for everyone.

For many teams, the real component library with fake data is the best prototype, because it brings real focus order, real timing and real states for free.

## Working With Engineers

Interaction design lives or dies in implementation. A few habits help:

- **Specify behavior, not just appearance,** and write it where engineers will find it.
- **Prototype the risky interaction,** so debates are about something real.
- **Agree on the vocabulary** for states and transitions.
- **Review the build** with the actual interaction, not screenshots.
- **Know the cost.** Understanding what is simple and what is expensive makes proposals more credible.

## Skills to Build

- Observation: noticing small hesitations and misclicks.
- Systems thinking: seeing every state, not just the main one.
- Prototyping: the fastest route from idea to evidence.
- Knowledge of platform conventions and accessibility.
- Basic code literacy, enough to reason about events, state and timing.
- Writing: labels, errors and confirmations are part of behavior.

## A Closing Test

Pick any control in a product you are building and ask: what does it do when I press it, hold it, tab to it, press it twice, press it with no connection, and press it while something else is happening? If you do not know all six answers, there is interaction design left to do.
`,"/src/content/ux-guide/product-designer.md":`---
title: "What a Product Designer Actually Does"
slug: product-designer
route: /blog/ux-guide/product-designer
guide: ux-guide
chapter: 10
category: ui-ux-guides
dek: "The role that owns the outcome, not just the screens: how product designers frame problems, work with product and engineering, and are judged by results."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "What a Product Designer Actually Does | InnerAnimalMedia"
seoDescription: "A grounded look at the product designer role: responsibilities, skills, how it differs from UX and UI design, working with PMs and engineers, and how success is measured."
cover:
  key: ux-guide/product-designer-cover
  alt: "Cover illustration for the product designer role"
  ratio: "1.8:1"
related: [roadmap-to-becoming-uiux-designer, interaction-designer, ux-disciplines]
---

A product designer is responsible for how a product works and whether it works for the people it is meant for, from the first fuzzy problem to the shipped result and the measurement afterward. The job title overlaps with UX designer and UI designer, and in some companies it is just a newer name for the same thing. In its fuller meaning, it is a different scope: not a set of deliverables but a responsibility for an outcome.

It is also the role most small teams actually need, because small teams do not have room for a handoff chain.

::media{key="ux-guide/product-designer-hero" alt="A product designer at the center of research, build and measurement" caption="Problem to outcome" ratio="16:9"}

## Scope: Problem to Outcome

A product designer tends to participate across the whole loop.

**Framing.** Helping decide what problem to solve and for whom. Questioning the brief: is this the right problem? What would success look like?

**Discovery.** Planning or running research, reading analytics, and synthesizing what the team knows.

**Definition.** Shaping scope with product and engineering: what is in, what is out, what can ship first.

**Design.** Flows, structure, interface, interaction, content and the system parts that support them.

**Validation.** Testing concepts and builds, and revising.

**Delivery.** Working with engineers through the build, making trade-offs, reviewing the result.

**Measurement.** Defining success metrics, checking them after launch, and deciding what comes next.

## Product Designer vs. UX vs. UI

| | UX designer | UI designer | Product designer |
|---|---|---|---|
| Responsibility | Experience quality | Interface craft | Outcome and the whole path to it |
| Reach | Research through flows | Visual layer and components | Strategy through measurement |
| Typical partners | Researchers, PMs | Brand, engineers | PM and engineering as a core trio |
| Judged by | Usability, satisfaction | Consistency, clarity | Product results plus quality |

The distinction is about accountability. A UX designer can deliver a well-researched flow and be done. A product designer is on the hook for whether it shipped, worked and moved the metric.

## Working With Product and Engineering

The core unit of product work is a small trio: someone responsible for the problem and priorities (product), someone for the build (engineering), and someone for the experience (design). The healthiest teams share responsibility instead of passing work along.

**With product management.** Share ownership of the problem. Bring evidence, challenge solutions, and be explicit about trade-offs. Designers who only react to requirements are executing, not designing.

**With engineering.** Involve engineers early, when they can shape the approach. Understand the constraints. Write down behavior, not just appearance. Prototype hard parts together. Review the build with care.

**With research,** where it exists. Pair on questions and bring raw sessions to the team, not only summaries.

**With data.** Learn to read the dashboard well enough to ask good questions of it.

**With support and sales.** They hear the unfiltered problems.

When disagreements arise, argue with evidence and be willing to be convinced.

## What the Work Looks Like

A typical stretch of work on a feature:

1. **A problem arrives,** as a request, a metric dip or an observation. Restate it. Ask what is known and what would be learned cheaply.
2. **A small plan:** the questions, the method, the timeline, the decision the work will inform.
3. **Research and analysis,** with the smallest sufficient sample.
4. **Options.** Sketch several approaches before committing, including a much simpler one.
5. **A chosen direction,** with a short rationale and what is being traded off.
6. **A prototype** of the risky part, tested with a handful of people.
7. **Specification** that includes states, edge cases, copy and accessibility.
8. **Build collaboration,** with frequent check-ins and early looks at working software.
9. **Launch** with a measurement plan, possibly behind a flag or to a subset.
10. **Follow-up:** did it work, what did we learn, what next?

The outputs along the way are lightweight. The value is in the decisions and the learning.

## Skills That Matter Most

**Problem framing.** Turning a request into a problem worth solving, and spotting when it is the wrong one.

**Research literacy.** Choosing methods, running them or working with someone who does, and distinguishing evidence from anecdote.

**Systems thinking.** Seeing how a change affects the rest of the product, the design system and the data model.

**Interaction and UI craft.** Making the thing clear, consistent, accessible and good to use.

**Writing.** Labels, errors, onboarding, rationale. Clear writing is clear thinking.

**Communication and facilitation.** Explaining a decision, running a critique, getting a group to a choice.

**Technical fluency.** Enough about the platform to design within it and push it.

**Commercial awareness.** Understanding how the product makes or saves money, and what a good result means for the business.

**Judgment under uncertainty.** Deciding with incomplete information, and knowing what is reversible.

## How Product Designers Are Judged

A craft portfolio matters, but so does impact. Useful questions:

- Did the thing ship, and was it good?
- Did it solve the problem it was meant to?
- Did the metric move in the right direction, and by how much?
- Did the team make better decisions because of the design work?
- Did the system get better, more consistent and easier to build on?
- Did people who use it say so?

Good product designers keep a record of decisions and outcomes. It serves as a portfolio, a memory and a defense against hindsight.

## In a Very Small Team

On a team of one to five, a product designer is often also researcher, UI designer, content writer, design-system maintainer and part-time front-end developer. That is workable with the right habits.

- **Keep artifacts tiny.** A one-page brief and a state table beat a binder.
- **Build a system once.** Tokens and components pay back every day after.
- **Prototype in code** when it is faster than drawing.
- **Test with small groups, often.** Three people every week beats twelve people once a quarter.
- **Write decisions down.** You are your own handoff.
- **Protect time for quality.** Maintenance, accessibility and polish are not extras.
- **Say no.** Everything cannot be first.

When a product is built with AI assistance, designers also take on directing it: specifying clearly, reviewing critically, and keeping standards for states, copy and accessibility so generated work does not drift.

## Common Pitfalls

- **Designing in a vacuum.** Producing beautiful flows disconnected from constraints and data.
- **Solution addiction.** Falling in love with the first idea.
- **Hiding behind deliverables.** Counting artifacts instead of outcomes.
- **Skipping the build.** The design is not done until it is real and checked.
- **Treating metrics as the only truth,** or ignoring them entirely.
- **Silos.** Waiting for a spec instead of walking over.
- **Over-polishing early work,** which makes it harder to change.

## Becoming One

Many product designers start as UI, UX or visual designers and grow outward. The common path is to broaden: pick up research, learn to prototype in code, get closer to the metrics, and take on responsibility for results. If you are early in your career, the [twelve-month roadmap](/blog/ux-guide/roadmap-to-becoming-uiux-designer) covers the foundations. The extra layer is accountability: choose projects where you can follow the work all the way to a measurable result.

## A Test of the Role

When someone hands you a feature request, do you ask what problem it solves, for whom, how you will know it worked, and what is the smallest thing that could teach you something? If so, you are already doing the job.
`,"/src/content/ux-guide/product-roadmap.md":`---
title: "Product Roadmaps for Small Teams: Now, Next, Later"
slug: product-roadmap
route: /blog/ux-guide/product-roadmap
guide: ux-guide
chapter: 6
category: ui-ux-guides
dek: "How to build a roadmap that communicates direction instead of promising dates, frames work as outcomes, and survives contact with a small team."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "Product Roadmaps for Small Teams: Now, Next, Later | InnerAnimalMedia"
seoDescription: "A practical guide to product roadmaps: outcome-based items, the Now/Next/Later format, prioritization, stakeholder communication, and how to say no."
cover:
  key: ux-guide/product-roadmap-cover
  alt: "Cover illustration for product roadmaps"
  ratio: "1.8:1"
related: [user-personas, customer-journey-map, product-designer]
---

A roadmap is a statement of direction and priority. It is not a schedule, a contract or a list of everything someone has asked for. The most common reason roadmaps fail is that they get treated as promises, so the team spends its time defending dates instead of learning what to build.

For a small team, a good roadmap does three things: it tells everyone what matters most right now, it shows what is likely to come next without pretending certainty, and it makes the reasoning visible so people can challenge it.

::media{key="ux-guide/product-roadmap-hero" alt="A three-column roadmap labeled now, next and later" caption="Now, Next, Later" ratio="16:9"}

## What a Roadmap Is, and Is Not

**It is** a communication tool, a prioritization record, and a way to align stakeholders around outcomes.

**It is not** a project plan with task-level estimates, a backlog dump, or a guarantee of delivery dates. Detailed plans belong in the work tracker, close to the people doing the work, and they change weekly.

If your roadmap needs a Gantt chart to be read, it is doing a different job.

## Why Date-Based Roadmaps Mislead

A timeline with dates implies precision that does not exist. Product work is uncertain: you discover things as you build, priorities change, and the best next step depends on what you learn. When a date slips, trust erodes, even if the delay was the right call. When it is met, you may have shipped the wrong thing on time.

Dates are appropriate when a hard external deadline exists, such as a regulation taking effect, a launch tied to an event, or a contractual commitment. Treat those as constraints and mark them clearly. Don't turn everything else into a calendar.

## The Now, Next, Later Format

Now, Next, Later divides work by confidence and commitment rather than by calendar.

| Column | Meaning | Confidence | Detail level |
|---|---|---|---|
| **Now** | Actively being worked on | High | Specific: scope, owner, success measure |
| **Next** | Planned once Now capacity frees up | Medium | Outcome and rationale; scope still forming |
| **Later** | Important direction, not yet scheduled | Low | Problem statement and why it matters |

The format is deliberately honest. Nothing in Later is a promise, and everything in Now has an owner. Items move left as evidence accumulates and right (or out) when priorities change, and nobody is surprised.

A few rules keep it healthy:

- **Limit Now.** A small team with eight items in Now has no priorities. Two or three is plenty.
- **Make Later short.** A graveyard of fifty ideas is a backlog wearing a roadmap's clothes.
- **Review on a rhythm.** Every few weeks, move things and explain why.

## Outcomes, Not Features

A feature-based roadmap lists what you will build. An outcome-based roadmap lists what you want to be true.

| Feature framing | Outcome framing |
|---|---|
| "Add a template gallery" | "New users publish a first change within ten minutes" |
| "Build approvals for tool calls" | "People feel in control of what the agent does" |
| "Redesign the settings page" | "Users find and change a setting without help" |

Outcome framing gives the team room to find the best solution, keeps the focus on value, and gives you a way to evaluate whether the work succeeded. Each outcome should have:

- **A problem or opportunity**, with evidence.
- **A measure** and a target direction.
- **Candidate solutions**, held loosely.

If you cannot state how you will know it worked, you are not ready to commit to it.

## How to Prioritize

A small team can overbuild a prioritization process. Start with a few honest questions.

1. **Does it serve our primary user and their main job?**
2. **How strong is the evidence of the problem?** Frequency and severity both count.
3. **What is the effort and risk?** Include design, build, migration and support.
4. **What does it unlock or block?** Some work is worth doing because it makes the next three things cheaper.
5. **What is the cost of delay?** Some opportunities expire.

If you want a scoring framework, RICE (Reach, Impact, Confidence, Effort) and impact-versus-effort grids are the familiar options. They are useful for making your assumptions explicit and comparing items. They are not oracles. A score is the beginning of a conversation, and a spreadsheet cannot tell you what your product is for.

Balance the portfolio, too. A healthy roadmap has a mix: improvements to the core experience, bets on new value, foundational work such as performance, accessibility and the design system, and a share of capacity reserved for the unexpected.

## Say No Well

A roadmap is as much about what you decline. Every request has an owner who cares about it, so a good "no" is respectful and specific.

- **Acknowledge the problem** behind the request, not just the solution proposed.
- **Show where it sits.** "That is in Later because it affects fewer than a handful of users today, and we are prioritizing first-use success."
- **Say what would change your mind.** Evidence, volume, a strategy shift.
- **Offer a smaller step** when one exists.

A visible "not now" list, with reasons, saves repeated conversations.

## Communicating the Roadmap

The same roadmap needs different framing for different audiences.

- **The team** wants context, tradeoffs and clear ownership. Give them the reasoning, not just the list.
- **Leadership** wants outcomes, risks, and what needs a decision. Lead with the goals and where the bets are.
- **Customers and users** want to know direction and whether their problem is being heard. Share themes and outcomes, avoid dates, and be careful not to promise.
- **Partners and sales** need to know what is solid and what is not. Give them language that is honest about confidence.

State the confidence level of every item. If you do share it externally, say plainly that it describes direction and may change.

## The Roadmap in a Small Team

Small teams have advantages and hazards.

**Advantages:** shorter feedback loops, less process, and direct contact with users.

**Hazards:** everything feels urgent, the loudest voice wins, and the roadmap lives in one person's head.

Practical habits:

- Write it down in one shared place, and keep it short.
- Tie each Now item to a measure you will actually look at.
- Reserve time for maintenance and quality, or it will quietly consume everything.
- Revisit the strategy when priorities feel arbitrary. Usually the strategy is unclear.
- Keep a short decision log: what changed, when, and why.

For a platform that other people build on, also keep a visible "stability" lane. Customers who depend on you need to know what will not break.

## Roadmap Pitfalls

- **Promises hidden as plans.** If a stakeholder reads a roadmap as a commitment, the roadmap failed to say otherwise.
- **Solution-first items.** Fixing on an answer before understanding the problem.
- **Everything is priority one.** Not choosing is choosing badly.
- **No retirement.** Stale items that never move should be removed or reframed.
- **Roadmap as backlog.** If it has hundreds of entries, nobody can read it.
- **Ignoring dependencies.** Design systems, infrastructure and data work often gate other items. Make that visible.

## A Starter Template

For each item, a short card is enough:

> **Outcome:** what we want to be true.
> **Why now:** the evidence and the opportunity.
> **For whom:** the persona or segment.
> **Measure:** how we will know, with a baseline.
> **Candidate approaches:** options we are considering.
> **Risks and dependencies:** what could go wrong or block it.
> **Owner and status.**

Arrange cards in three columns. Review every two weeks. Write down what moved, and why. That habit alone will give you a better roadmap than most large organizations manage.
`,"/src/content/ux-guide/roadmap-to-becoming-uiux-designer.md":`---
title: "Becoming a UI/UX Designer: A Realistic 12-Month Roadmap"
slug: roadmap-to-becoming-uiux-designer
route: /blog/ux-guide/roadmap-to-becoming-uiux-designer
guide: ux-guide
chapter: 8
category: ui-ux-guides
dek: "A month-by-month path for getting good at UI/UX from almost any starting point, including self-taught, with projects to build and habits that compound."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "Becoming a UI/UX Designer: A 12-Month Roadmap | InnerAnimalMedia"
seoDescription: "A practical roadmap to becoming a UI/UX designer in a year: foundations, tools, research, projects, portfolio building and how to land the first role."
cover:
  key: ux-guide/roadmap-to-becoming-uiux-designer-cover
  alt: "Cover illustration for becoming a UI/UX designer"
  ratio: "1.8:1"
related: [product-designer, ux-books, ux-disciplines]
---

There is no required credential for UI/UX design. People arrive from graphic design, front-end development, writing, research, product management, architecture and drafting, and plenty are entirely self-taught. What employers and clients look for is evidence of how you think and how you ship: a small body of work that shows you can find a problem, make decisions for reasons, and deliver something usable.

This roadmap is a twelve-month plan built around making things, not collecting certificates. It assumes ten to fifteen hours a week. If you can do more, compress it; if you can do less, stretch it.

::media{key="ux-guide/roadmap-to-becoming-uiux-designer-hero" alt="A twelve-month path from foundations to first role" caption="The twelve-month path" ratio="16:9"}

## Before You Start

**Choose a direction, loosely.** UX is a family of disciplines: research, interaction design, visual and UI design, content, systems. You do not need to pick one now, but notice which parts you enjoy. You will likely end up with one deep skill and several working ones.

**Pick a learning rhythm.** Consistency beats intensity. A short session every day is worth more than a weekend marathon.

**Make a place to keep things.** A folder or notebook for sketches, notes, screenshots and decisions. You are building a record of your thinking, which becomes your portfolio.

## Months 1 to 2: Foundations

Learn how people and interfaces work before learning tools.

**Concepts to learn:**

- The basics of usability and the established heuristics.
- How people perceive and decide: attention, memory limits, affordances, feedback.
- Hierarchy, contrast, alignment, proximity, repetition and whitespace.
- Typography: scale, line length, line height, pairing.
- Color: contrast, roles, and accessibility.
- Information architecture basics: grouping, labeling, navigation models.

**How to learn it:** read a couple of foundational books (see [the reading list](/blog/ux-guide/ux-books)), and practice with *teardowns*. Pick a product you use. Write down five things it does well and five things that frustrate you, and for each, the principle involved and what you would change. Do one a week.

**Output:** eight to ten written teardowns with annotated screenshots.

## Months 3 to 4: Tools and Craft

Now get your hands moving.

**Tools to learn:**

- A design tool, such as Figma or Penpot: frames, auto layout, components, variants, styles and variables.
- A whiteboarding tool for flows and sketches.
- Paper and pen. Sketching is the fastest thinking tool you have.

**Skills to practice:**

- **Recreate** a handful of interface screens from products you admire, pixel for pixel. It teaches spacing, type and component behavior faster than anything else.
- **Build a small component library:** buttons with all their states, form fields, a card, a modal, navigation. Name things consistently.
- **Learn tokens:** define your colors as roles (surface, text, accent, border) rather than raw values, and see how swapping a theme changes everything.
- **Design for responsive screens.** Do the same screen at phone, tablet and desktop widths.

**Output:** a small, coherent component kit and three recreated screens.

## Months 5 to 6: Research and Process

Design is not only drawing. This is where you learn to find the right problem.

**Skills to learn:**

- Interviewing: asking open questions, listening, following up.
- Usability testing: writing tasks, facilitating, taking notes. See [user testing](/blog/ux-guide/user-testing).
- Synthesizing: affinity mapping, turning observations into insights.
- Flows and task thinking. See [task analysis](/blog/ux-guide/ux-task-analysis).
- Basic analytics literacy. See [behavior data](/blog/ux-guide/user-behavior-data).

**Practice:** run a real mini-project with real people.

1. Choose a small, real problem for real people. Something a friend's business, a community group or a club struggles with.
2. Interview three to five people.
3. Map what you learned.
4. Sketch and prototype a solution.
5. Test with three to five people.
6. Revise.

Keep notes at every step, including what you got wrong.

**Output:** one complete case study with evidence of research, decisions and a test.

## Months 7 to 8: Learn Enough Code

You do not have to become an engineer. You do have to speak the language.

**Learn:**

- HTML and CSS well enough to build a page and understand layout, the box model, flexbox and grid.
- How responsive behavior works and what a design token is in code.
- Enough JavaScript to read a component and make a small prototype.
- How to inspect a live page in browser developer tools and see why something looks the way it does.

**Practice:** build your own portfolio site, or rebuild one of your designs in code. When a design is hard to build, you will understand why. When an engineer says "that is a day, not an hour," you will know whether to push back.

**Output:** a small coded prototype and a better sense of constraints.

## Months 9 to 10: Depth and Specialization

Go deeper on the area that pulls you hardest.

- **Interaction and motion:** states, transitions, timing, microinteractions. See [what an interaction designer does](/blog/ux-guide/interaction-designer).
- **Research:** study design, recruiting, analysis.
- **Design systems:** tokens, component architecture, documentation, governance.
- **Content and UX writing:** labels, errors, onboarding, voice.
- **Accessibility:** WCAG 2.2, keyboard and screen reader testing, accessible components.
- **Product thinking:** metrics, prioritization, working with product managers. See [product designer](/blog/ux-guide/product-designer).

**Practice:** one more substantial project in your chosen area, with a clearly stated problem and measurable outcome.

**Output:** a second case study that shows depth.

## Months 11 to 12: Portfolio and the First Role

### Build the Portfolio

Two or three strong case studies beat ten shallow ones. Each should answer:

- **What was the problem,** and for whom?
- **What did you do,** specifically, and what was your role?
- **What did you learn** from the research?
- **What decisions did you make,** and what did you reject and why?
- **What was the result,** and how do you know?
- **What would you do differently?**

Show the messy middle: sketches, wrong turns, test findings. Polished final screens without the thinking are the least convincing part of a portfolio.

Keep the site itself fast, accessible and easy to navigate. The portfolio is itself a sample of your work.

### Get Real Experience

Offer to help a small business, nonprofit or open-source project. Contribute to a design system. Volunteer. Real constraints, real feedback and a real outcome are worth more than another personal project.

### Find the Role

- **Be specific about what you offer.** "I'm a designer who is strong in research and prototypes in code" is more memorable than "I'm passionate about design."
- **Network by being useful.** Share what you are learning. Ask people for feedback on your work. Many roles are filled through people who have seen your work.
- **Prepare to talk through your process.** Practice explaining one project in ten minutes, and be ready for questions about trade-offs and mistakes.
- **Expect design exercises,** and treat them as a chance to show reasoning, including what you would research if you had time.

## Habits That Compound

- **Critique often,** giving and receiving it. Learn to separate yourself from your work.
- **Write about what you learn.** Explaining something is the quickest check that you understand it.
- **Keep a swipe file** of interfaces, patterns and details you admire, annotated with why.
- **Study real products in use,** not just galleries. Galleries show the finished surface. Use shows the behavior.
- **Watch people use things.** Parents, colleagues, strangers. It trains observation.
- **Learn to estimate,** to know what is cheap and what is expensive to build.
- **Care about accessibility from day one.**

## Mistakes to Avoid

- **Tool-first learning.** Tools change. Principles last.
- **Tutorial loops.** Following step-by-step projects without making your own decisions teaches imitation, not judgment.
- **Skipping research.** Beautiful solutions to imaginary problems do not impress.
- **Portfolio of concepts only.** Include something that shipped, however small.
- **Waiting to feel ready.** Competence follows contact with real work.
- **Comparing your month three to someone's year five.**

## A Note for Self-Taught Designers

Self-taught people often have an advantage that formal paths rarely teach: they know how to find answers and build under constraints. Lean into it. Document your learning publicly, build real things, and be explicit about the skills you are still developing. Honest, specific self-assessment is a sign of maturity, and it reads as such.

The path is not a straight line, and no twelve-month plan will fit exactly. Treat this as a scaffold. Adjust it, and keep making things.
`,"/src/content/ux-guide/user-behavior-data.md":`---
title: "Reading User Behavior Data Without Fooling Yourself"
slug: user-behavior-data
route: /blog/ux-guide/user-behavior-data
guide: ux-guide
chapter: 1
category: ui-ux-guides
dek: "What behavior data can and cannot tell you, how to instrument a product so the numbers mean something, and the traps that turn charts into false confidence."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "Reading User Behavior Data Without Fooling Yourself | InnerAnimalMedia"
seoDescription: "A practical guide to user behavior analytics: event design, funnels, cohorts, qualitative pairing, privacy, and the statistical traps to avoid."
cover:
  key: ux-guide/user-behavior-data-cover
  alt: "Cover illustration for reading user behavior data"
  ratio: "1.8:1"
related: [user-testing, ux-myths, customer-journey-map]
---

Behavior data is the most honest research you can get and the easiest to misread. It records what people did, at scale, without anyone performing for an observer. It cannot tell you why they did it, what they were trying to do, or what they would have done if the product were different. Treat it as a very good question-generator and a very good fact-checker, and a poor oracle.

This chapter covers what to collect, how to collect it cleanly, which analyses are worth running, and how to avoid the mistakes that produce confident nonsense.

::media{key="ux-guide/user-behavior-data-hero" alt="A funnel, a retention curve and a session timeline side by side" caption="Three views of the same behavior" ratio="16:9"}

## What Behavior Data Is, and What It Is Not

Behavior data is a record of actions: pages viewed, controls used, items created, errors hit, time spent, paths taken. It is observational. Nobody was asked to do anything, so it reflects real habits, including the ones people would not report in an interview.

Its limits are structural.

- **It has no motive.** A user who abandons a form might be confused, interrupted, comparing prices in another tab, or done. The data cannot distinguish them.
- **It only sees what you instrumented.** Every silence in your data is either a lack of behavior or a lack of measurement.
- **It describes the people who showed up.** Anyone who bounced before your first event fired, or who never found the product, is absent.

The working rule: use behavior data to find where to look and to confirm whether a change moved something. Use qualitative research to learn why.

## Four Kinds of Behavior Data

It helps to separate the sources, because each has a different failure mode.

| Kind | Examples | Good for | Weak at |
|---|---|---|---|
| **Event data** | Clicks, submissions, feature use, errors | Funnels, adoption, retention | Context and intent |
| **Session data** | Replays, heatmaps, scroll depth | Spotting confusion and rage clicks | Scale, privacy-sensitive content |
| **Performance data** | Load times, interaction latency, error rates | Finding frustration the user cannot name | Explaining value |
| **Feedback data** | Surveys, tickets, reviews, in-product ratings | Language and sentiment | Representativeness |

Pair at least two. An event funnel that shows a steep drop at step three becomes useful when a handful of replays show people stopping at the same unlabeled field.

## Instrument Before You Need It

You cannot reconstruct events you did not record. A little discipline at the start saves a lot of archaeology later.

**Use a naming convention and keep it boring.** An object and a past-tense verb works well: \`theme_published\`, \`tool_call_denied\`, \`composer_draft_abandoned\`. Never encode UI position or copy in the name, because the UI will change and the event should survive.

**Give events properties, not variants.** One \`tool_call_decided\` event with a \`decision\` property of approved or denied is better than two events. It makes comparison trivial.

**Keep identity separate from content.** Record who and what happened. Do not record what the user typed.

\`\`\`ts
type AnalyticsEvent = {
  name: \`\${string}_\${string}\`;            // object_verb
  at: string;                              // ISO timestamp, server-side where possible
  actorId: string;                         // pseudonymous id, never an email
  sessionId: string;
  properties?: Record<string, string | number | boolean>;
};

track({
  name: "tool_call_decided",
  at: new Date().toISOString(),
  actorId,
  sessionId,
  properties: { tool: "d1_query", decision: "denied", msToDecide: 4200 },
});
\`\`\`

**Write the tracking plan before the code.** One page listing each event, what triggers it, its properties and the question it exists to answer. Events that answer no question are cost without value, and every property is a privacy surface.

**Make failures first-class.** Errors, timeouts, empty results and denied actions are the events that explain most frustration. Teams that only track success see a flattering, useless picture.

## The Analyses Worth Running

You do not need a data warehouse to learn a great deal. These six cover most product questions.

### Funnels

Take an ordered series of steps toward a goal and measure how many people reach each. The shape tells you where to look. A cliff between two steps is a candidate for a usability problem. A gentle slope everywhere suggests the goal itself is not compelling.

Always define the window (same session, within seven days) and be explicit about whether steps must occur in order. Two funnels with different definitions are two different numbers wearing the same label.

### Cohorts and Retention

Group people by when they started (or by a behavior, like using a feature in week one) and follow each group forward. The retention curve answers whether people come back. A curve that flattens above zero means you have a durable core. A curve that slides to zero means you have a leaky bucket, whatever your sign-up numbers say.

Compare cohorts against each other, not against the all-time average, so you can see whether last month's change helped.

### Time to First Value

Measure from sign-up (or first open) to the first moment of real success. For an editor it might be first published change. For an agent platform, first completed task. This is one of the strongest leading indicators of retention, and every unnecessary step before it has a cost.

### Feature Adoption

For each feature, how many eligible users tried it, how many used it more than once, and how many made it part of a routine. A feature with high trial and no repeat has a discoverability success and a value failure. Low trial with high repeat has the opposite problem: it is good and nobody can find it.

### Paths

Look at what people do before and after a key event. Where do they come from before they reach a settings screen? What do they do immediately after an error? Paths are noisy, so use them to form hypotheses, not conclusions.

### Segmentation

Averages hide the interesting split. Break any metric down by new versus returning, by plan, by device, by acquisition channel, by role. Most surprising findings turn out to be one segment behaving very differently from the rest.

## Pair the Numbers With a Window Into the Behavior

A number points at a place. A replay, a heatmap or a conversation tells you what was happening there.

- **Session replays** are best for specific, narrow questions. "Show me ten sessions that hit the error on this step." Do not watch random sessions looking for insight; it is slow and mostly dull.
- **Heatmaps and scroll maps** reveal where attention and clicks cluster, and where people click things that are not interactive. Dead clicks are a gift: they show where the interface promises something it does not deliver.
- **Rage clicks and repeated submits** are cheap frustration detectors. A burst of fast repeated clicks on the same element is rarely joy.
- **Support tickets** are a free, ongoing, self-selected research stream. Tag them by theme and count.

A solid habit: for every analytic anomaly, watch five relevant sessions or read ten relevant tickets before deciding what it means.

## Examples From an Agent Platform

Agent products produce behavior that traditional web analytics barely touches, and the signals are revealing.

- **Approval decisions.** The share of tool calls approved, denied or ignored, and how long people take to decide. A very high approval rate with near-instant decisions may mean people are rubber-stamping, which is a trust-calibration problem. A high denial rate on one tool may mean its prompt is unclear.
- **Draft abandonment.** How often a composer has text that is never sent, and at what length. Long abandoned drafts suggest the person wanted something the product made hard to say.
- **Undo and retry.** Frequent undo after an agent action is a quality signal on the agent, not on the interface.
- **Time to first working result.** In a builder, from start to the first output a person kept.

None of these is a vanity metric, because each ties to a decision about the design.

## The Traps

### Vanity Metrics

Total sign-ups, page views and all-time users only go up. They flatter and they do not guide. Prefer rates and cohorts that can fall.

### Survivorship Bias

If you only analyze people who completed onboarding, onboarding looks great. The interesting group is everyone who did not.

### Simpson's Paradox

A trend can reverse when you combine groups. A feature can look better in every segment and worse overall if its users are concentrated in a lower-performing segment. When a total disagrees with intuition, split it.

### Novelty and Primacy Effects

A new design often gets a bump simply for being new, or a dip because regulars have to relearn it. Run experiments long enough to outlast the effect, and watch whether the difference decays.

### Peeking and Multiple Comparisons

If you check an experiment every day and stop when it looks significant, you will find significance in noise. Decide the sample size and duration in advance. If you test twenty metrics, expect one to look interesting by chance.

### Sample Ratio Mismatch

If a 50/50 split produces 52/48 at large scale, something is wrong in assignment or logging, and every downstream result is suspect. Check the split before you read the result.

### Correlation Dressed Up as Cause

People who use feature X retain better. That does not mean showing everyone feature X will improve retention. Engaged people use more features. Only an experiment, or a very careful natural experiment, supports a causal claim.

## Privacy Is Part of the Design

Collect the least that answers the question. Pseudonymous identifiers, no raw free-text input, no personal data in event properties, and redaction on replays by default. Get consent where law or good practice requires it, honor deletion requests, and set retention limits so data does not accumulate forever.

This is not just compliance. People notice when a product treats their behavior carefully, and when it does not. And data you never collected cannot leak.

## Turning Numbers Into Decisions

Raw analysis rarely changes a roadmap. A clear hypothesis does.

A usable format:

> **Because** we observed [evidence], **we believe** [change] **will cause** [behavior change] **for** [segment]. **We'll know** when [metric] moves from [baseline] to [target] within [window]. **We'll stop** if [guardrail] drops below [threshold].

Keep a short log of decisions with the data that supported them. Six months later, you will want to know why you believed what you believed.

## A Short Checklist

- A tracking plan exists and every event answers a named question.
- Errors and denials are tracked as carefully as successes.
- Every funnel states its window and its ordering rule.
- Every significant number has a qualitative companion.
- Experiments have a predeclared duration and guardrails.
- Nothing personal is in an event property.

Behavior data will not make decisions for you. It will, when handled with care, make it much harder to fool yourself.
`,"/src/content/ux-guide/user-personas.md":`---
title: "User Personas That Actually Change Decisions"
slug: user-personas
route: /blog/ux-guide/user-personas
guide: ux-guide
chapter: 5
category: ui-ux-guides
dek: "Why most personas are decoration, what a useful one contains, how to build it from research, and when to use jobs instead."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "User Personas That Actually Change Decisions | InnerAnimalMedia"
seoDescription: "A practical guide to user personas: what to include, how to build them from research, proto-personas, anti-personas, and when jobs-to-be-done works better."
cover:
  key: ux-guide/user-personas-cover
  alt: "Cover illustration for user personas"
  ratio: "1.8:1"
related: [customer-journey-map, user-testing, ux-task-analysis]
---

A persona is a model of a group of users, built from research, used to keep a team's decisions tied to real people. Done well, it settles arguments, prevents "I would never use that" from steering a roadmap, and gives everyone a shared shorthand for who they are building for. Done badly, it is a stock photo, a made-up name and a hobby, pinned to a wall and ignored.

The difference is what the persona lets you decide. A useful persona answers questions. A decorative one answers none.

::media{key="ux-guide/user-personas-hero" alt="A persona card showing goals, context, behaviors and frustrations" caption="A persona built to be used" ratio="16:9"}

## Why Personas Fail

- **They are invented.** Written in a workshop from assumptions, they encode the team's biases with a friendly face on top.
- **They are demographic.** Age, job title and favorite brand rarely predict how someone uses a product. Goals, context and behavior do.
- **They are too numerous.** Eight personas means none of them gets prioritized.
- **They are not connected to decisions.** Nobody references them in a design review, so they quietly disappear.
- **They go stale.** The product and its users change, and the persona doesn't.

If your personas are not cited in meetings when someone says "which user does this serve?", they are wallpaper.

## What a Useful Persona Contains

Keep it to a page. Every element should earn its place by affecting a design choice.

**A name and a one-line summary.** A name makes the persona easy to refer to. The summary captures the essence: "Maya, a solo founder who wants a site live this week and has no appetite for technical detail."

**Goals.** What they are trying to achieve, in their terms. Include the end goal and the practical goal.

**Context.** Where, when and on what device they use the product, and what else competes for their attention. A person using the product in ten-minute gaps between meetings needs a different design than someone who sits with it for two hours.

**Behaviors.** What they actually do now: tools they use, workarounds, habits, how they search for help.

**Skills and knowledge.** Domain expertise, technical comfort, familiarity with similar products. This drives vocabulary, defaults and how much hand-holding makes sense.

**Frustrations.** Specific problems in the current experience, drawn from research.

**Motivations and constraints.** What pushes them to act, and what holds them back: time, budget, risk, approval from someone else.

**A quote.** One real quote from research, to keep the persona grounded.

**Evidence and confidence.** How many people informed this, what methods, and how recent. Say plainly if it is a hypothesis.

Notice what is missing. A stock portrait, favorite music, a pet's name. Include a detail only if it would change a decision.

## Build Personas From Research

### Collect

Interview people across your audience. Supplement with behavior data, support conversations, survey responses and, if you have one, a sales team's notes. Aim to see patterns, not to sample everything.

Six to twelve interviews per segment is usually enough to see the shape.

### Find the Patterns

Look for clusters in goals and behaviors, not in demographics. A common technique is to list the behavioral variables that matter, such as how technical they are, how often they use the product, whether they work alone or on a team, and place each interviewee along those spectrums. Groups that cluster across several variables are persona candidates.

### Write Them Down

Draft a one-page persona for each cluster. Use the real language from interviews.

### Prioritize

Pick a **primary** persona whose needs the design must serve, a small number of **secondary** personas whose needs should be accommodated without compromising the primary, and, if relevant, an **anti-persona**: someone the product is deliberately not designed for. Naming who you are not serving is surprisingly clarifying, because it lets you say no.

Most products need two to four personas. If you have more, you probably have segments, not personas.

### Validate

Show the draft to people who match it and to colleagues who talk to users. Ask what is wrong or missing. Adjust.

## Proto-Personas and Lightweight Starts

When there is no time or access for research, a **proto-persona** is an honest fallback: a hypothesis, built from the team's best knowledge, and explicitly labeled as unproven. It is better than an unspoken set of assumptions because it can be argued with and tested. Mark everything as a belief, list the assumptions that most need checking, and schedule the research that will replace it.

A lightweight upgrade path: write the proto-persona, run five interviews, revise, and drop the "proto" label when the evidence supports it.

## How to Use Personas Day to Day

A persona is only valuable when it influences work.

- **In design reviews,** ask "How does this serve Maya?" and "What would Maya get wrong?"
- **In prioritization,** tie features to personas and goals. Features that serve no persona deserve skepticism.
- **In copy,** write for the persona's vocabulary and knowledge level.
- **In testing,** recruit participants who match them, and test tasks that matter to them.
- **In defaults,** choose settings that fit the primary persona, not the average of everyone.

Put the one-page version where people already work: the first page of the design file, the top of the product spec, the board's header. If you need a meeting to find it, it will not be used.

## Personas and Jobs to Be Done

A **job to be done** frames a need as a situation, a motivation and an outcome: "When I have a new idea and want to see it live, I want to try changes without risk, so I can move quickly and not feel I've broken anything."

Jobs and personas answer different questions.

| | Persona | Job |
|---|---|---|
| Focus | A type of person | A situation and motivation |
| Strength | Tone, vocabulary, constraints, context | Stable needs that cut across user types |
| Weakness | Can drift into stereotype | Can feel abstract without people attached |
| Best for | Design details, copy, testing recruitment | Strategy, prioritization, feature scoping |

They work well together: jobs describe what must be accomplished, personas describe who tends to be accomplishing it and how. A single persona typically has several jobs, and the same job may appear across personas.

## Personas for Different Products

**Platforms and tools with many roles** often need role-based personas: the administrator who configures, the daily user who works in it, the evaluator who decides to adopt, the developer who integrates. Their goals can conflict. Surface the conflicts early.

**Products for builders** have a continuum from beginner to expert. A single persona is often misleading. A better approach is a small set along a skill spectrum, with attention to how a person moves along it as they grow.

**AI-assisted products** add a dimension: trust and delegation style. Some people want to hand over a task and check the result. Others want to approve every step. Others want to work alongside the assistant. Including how a persona prefers to delegate prevents building for a single, imagined user.

## Common Mistakes

- **Starting with the face.** Choosing a photo before the findings.
- **Averaging.** Blending different users into a person who doesn't exist.
- **Fiction as fact.** Describing assumed traits as findings.
- **Unlimited detail.** Every extra line makes the persona harder to remember.
- **Treating the persona as the user.** Personas are tools. Real users still need to be in the room.
- **Never retiring them.** Review at least yearly, and after significant changes in product or market.

## A Quick Quality Test

Hold your persona up and ask:

1. Could I make a design decision differently because of this?
2. Is every line backed by something we observed?
3. Would the person it describes recognize themselves?
4. Can a new teammate understand it in a minute?
5. Does it say what this person will not do or want?

If the answer to the first question is no, rewrite it or delete it. A short list of strong personas, kept alive by regular research, is one of the cheapest ways to keep a product honest.
`,"/src/content/ux-guide/user-testing.md":`---
title: "User Testing: Methods, Sample Sizes and Session Craft"
slug: user-testing
route: /blog/ux-guide/user-testing
guide: ux-guide
chapter: 3
category: ui-ux-guides
dek: "Choosing the right test for the question, recruiting the right people, writing tasks that don't lead, and turning what you watched into fixes."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "User Testing: Methods, Sample Sizes and Session Craft | InnerAnimalMedia"
seoDescription: "A hands-on guide to usability and user testing: techniques by question, sample sizes, task writing, moderated vs unmoderated sessions, severity ratings and synthesis."
cover:
  key: ux-guide/user-testing-cover
  alt: "Cover illustration for user testing"
  ratio: "1.8:1"
related: [user-behavior-data, ux-task-analysis, user-personas]
---

User testing is the practice of watching real people try to use something and learning from where they succeed and where they stall. It is cheap, fast, humbling and consistently the highest-return research habit a product team can build. Most of the skill is not in the tooling. It is in choosing the right question, giving people fair tasks, staying quiet, and writing down what you saw.

::media{key="ux-guide/user-testing-hero" alt="A participant, a facilitator and a note-taker around a screen" caption="A moderated session" ratio="16:9"}

## What User Testing Tells You, and What It Doesn't

**It tells you** where people get confused, which parts of a design work, what language they use, and how severe a problem is in practice. It is excellent at finding problems.

**It does not tell you** how many people will have a problem, whether anyone will want the thing, or what the business impact will be. Small samples find issues. They do not size them. Behavior data and larger studies answer those questions.

It also tests a design, not the person. When someone fails a task, the interface has failed. Say this to participants out loud, because many of them assume otherwise.

## Pick the Technique by the Question

| The question | Technique | What you do |
|---|---|---|
| Can people complete real tasks? | **Usability test** | Give tasks, observe, note problems |
| Is the structure understandable? | **Card sort** | Ask people to group and label content |
| Can they find things in my structure? | **Tree test** | Test navigation with the visuals removed |
| Where would they click first? | **First-click test** | Show a screen, record the first action |
| Is the message clear? | **Five-second test** | Show briefly, ask what they remember |
| How do they behave over time? | **Diary study** | Have participants log use over days |
| What do they do in their own setting? | **Contextual inquiry** | Observe where they actually work |
| Which of two designs performs better? | **A/B test** | Split live traffic, measure behavior |

Start with the question, then choose the cheapest technique that can answer it. A first-click test takes minutes to set up and often settles an argument that a meeting could not.

## Who to Test With

Recruit people who resemble your real users in the ways that matter for the tasks. For a general consumer flow, almost anyone in the target group will do. For a specialist workflow, a passerby is useless; you need people who do that work.

Write a short screener: a few questions that include the right people and exclude the wrong ones without revealing the right answers. Avoid testing with colleagues, friends and your own team, who know too much and will be too kind.

Include a range. If your product claims to serve novices and experts, test both, because they fail differently. Include people who use assistive technology when the flow should work for them, which it should.

## How Many Participants

The classic finding is that a small group uncovers most of the usability problems in a single design. In the model by Nielsen and Landauer, each person finds a share of the problems, and the returns diminish quickly: about five participants find roughly 85 percent of the issues that a test of that design is capable of finding.

Use that carefully.

- It applies to **one user group and one design**. Two meaningfully different groups need their own small samples.
- It is a reason to **test several times with few people**, fixing between rounds, rather than once with many.
- It does **not** support quantitative claims. If you need to report a task success rate with confidence, you need far more participants, often twenty or more per group.

A practical pattern is three to five people, fix what you found, repeat.

## Writing Tasks That Don't Lead

Tasks are the heart of the test and the easiest place to spoil it.

**Give a goal, not instructions.** "Change the site so it looks like your brand" is a task. "Click the theme tab and choose a color" is a script, and it tells you nothing about whether anyone could find the tab.

**Avoid the interface's vocabulary.** If the button is labeled "Publish," don't write "Publish your page." Say "Make your changes visible to visitors." Otherwise you are testing whether people can match words.

**Give a motive and context.** "You run a small bakery and want customers to see your new holiday menu on your site" is easier to act on than an abstract instruction, and closer to real behavior.

**Make success observable.** Decide what counts as completion in advance, and also what counts as success with difficulty.

**Order matters.** Start with an easy task to settle nerves, put the most important tasks early before fatigue sets in, and keep a spare in case something breaks.

**Pilot first.** Run the script on one colleague to catch broken links, ambiguous wording and impossible timing.

## Moderated and Unmoderated Testing

| | Moderated | Unmoderated |
|---|---|---|
| Format | Live session with a facilitator | Participants complete tasks alone, recorded |
| Strengths | Follow-up questions, rich insight, complex or early designs | Speed, scale, low cost, natural setting |
| Weaknesses | Scheduling effort, small numbers, facilitator influence | No probing, unclear tasks go unnoticed, lower-quality participants |
| Best for | Concepts, prototypes, why questions | Validating specific flows, benchmarking, larger samples |

A common good path: moderated early to discover problems and refine tasks, unmoderated later to validate at scale.

Remote testing removed most geographic limits, and for many products it is simply better, since people use the product on their own device in their own space. In-person is still valuable when you need to see context, hardware or body language.

## Where Most Tests Break

- **The facilitator talks too much.** Explaining, rescuing and leading are the usual culprits. Every sentence you add contaminates the result.
- **Leading questions.** "Was that easy to find?" invites yes. "Tell me about finding that" does not.
- **Testing what people say instead of what they do.** Opinions about a design are cheap and unreliable. Behavior is the evidence.
- **Testing the wrong people.** Friendly coworkers are not users.
- **Fixing problems mid-study.** Change one thing at a time and track versions, or you cannot interpret the sessions.
- **No pass criteria.** Without a prior definition of success, any result can be rationalized.
- **Too many tasks.** Fatigue makes the late tasks worthless. Four to six is plenty for an hour.

## Running the Session

A reliable structure for a 45-to-60 minute moderated session:

1. **Welcome (3 minutes).** Explain the purpose, say plainly you are testing the product not the person, ask permission to record, and tell them there are no wrong answers.
2. **Context questions (5 minutes).** A few easy questions about their experience and habits, used to warm up and to understand them.
3. **Tasks (30 to 40 minutes).** One at a time, with the scenario read aloud and also visible in writing. Encourage thinking aloud. When they ask what to do, answer with "What would you do if I weren't here?"
4. **Wrap-up (5 minutes).** Open questions: what stood out, what was frustrating, anything missing.
5. **Thanks and incentive.** Pay people fairly.

During tasks:

- **Stay quiet.** Silence is uncomfortable and productive. Count to ten before you speak.
- **Watch behavior more than words.** Hesitation, backtracking, hovering, rereading and repeated clicks are data.
- **Probe after, not during.** When someone stalls, note the time and ask about it at the end of the task: "At that point you paused. What were you thinking?"
- **Don't defend the design.** If participants criticize something, thank them. Your job is to learn.
- **Know when to move on.** If someone is stuck for several minutes, note the failure and help them move to the next task. Stuck is a result, not something to prolong.

Use a second person as a note-taker. Facilitating and note-taking at once degrades both.

## Capturing Notes You Can Use Later

Record sessions with permission. Take notes in a consistent form so they can be compared:

- **Timestamp.**
- **Task.**
- **Observation** (what they did or said, not your interpretation).
- **Tag** (finding, quote, question, idea).

Mark successes as well as failures. Teams that only note problems overcorrect and break what worked.

## Turning Findings Into Fixes

### Group and Count

After sessions, collect observations on a shared board and cluster similar ones. Count how many participants hit each issue. Frequency matters, but so does consequence.

### Rate Severity

A zero-to-four scale keeps discussion short:

| Rating | Meaning |
|---|---|
| 0 | Not a usability problem |
| 1 | Cosmetic, fix if time allows |
| 2 | Minor, low priority |
| 3 | Major, important to fix |
| 4 | Catastrophe, must fix before release |

Combine how often it occurred, how badly it hurt, and whether people could recover.

### Write the Finding in Full

A good finding has an observation, evidence, a cause hypothesis and a recommendation.

> **Finding.** Four of six participants did not find the publish control. Three scrolled the settings panel twice before giving up. **Cause (hypothesis).** The control sits below the fold and is styled as a tertiary action. **Recommendation.** Move publish into the persistent header and style it as the primary action. **Severity.** 4.

### Prioritize and Assign

Take the top few findings, assign owners, and agree what you will retest. A report listing forty issues is a document nobody reads. A report that names five and gets them fixed is research doing its job.

### Retest

The fix is a hypothesis. Run a short follow-up to confirm that the change solved the problem and did not create a new one.

## Testing Agent and AI Experiences

Testing products where software acts on the user's behalf has a few extra considerations.

- **Test the supervision, not just the result.** Can people understand what the agent is doing, notice a mistake, stop it and recover? Give tasks that include a deliberate agent error and watch whether participants catch it.
- **Test trust calibration.** Observe whether people over-rely or under-rely. Both are failures.
- **Use Wizard of Oz early.** A human operating behind the interface lets you test behavior and expectations before the agent exists.
- **Expect variability.** The same task may produce different agent outputs per session. Record what happened, and don't assume a problem is a bug in the study.

## Synthetic Users and AI Moderation

AI tools can now simulate participants and moderate sessions. They are useful for pressure-testing a script, drafting tasks, and summarizing recordings. They are not substitutes for real people, because synthetic participants reproduce plausible averages and miss the specific, odd, memorable ways real people get stuck. Use them to prepare and to analyze. Keep humans in the sessions that decide what you build.

## A Minimal Setup That Works

You can run a credible test with a prototype or build, a video-call tool that records, a task script, a note-taking template, and three to five carefully chosen participants. Half a day, including synthesis. Repeat every few weeks, and testing stops being an event and becomes a habit.
`,"/src/content/ux-guide/ux-books.md":`---
title: "The UX Reading List: What to Read and Why"
slug: ux-books
route: /blog/ux-guide/ux-books
guide: ux-guide
chapter: 11
category: ui-ux-guides
dek: "An annotated reading list grouped by the problem each book solves, with honest notes on who each one is for and what to skip."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "The UX Reading List: What to Read and Why | InnerAnimalMedia"
seoDescription: "A curated, annotated list of books on UX, research, interaction design, systems and visual craft, grouped by problem and with notes on who each book suits."
cover:
  key: ux-guide/ux-books-cover
  alt: "Cover illustration for the UX reading list"
  ratio: "1.8:1"
related: [roadmap-to-becoming-uiux-designer, ux-myths, ux-disciplines]
---

Books are a slow, compressed way to borrow other people's years of mistakes. The best UX reading is not a pile of canonical titles. It is a few well-chosen books, each aimed at a specific gap, read with a project beside them so the ideas get tested.

This list is grouped by the problem you are trying to solve. The commentary is ours, written from using these books in practice, and it is deliberately opinionated about who each is for.

::media{key="ux-guide/ux-books-hero" alt="A shelf of books grouped by the problem they solve" caption="Grouped by problem" ratio="16:9"}

## How to Read These

- **Read with a project.** A chapter applied to a real task teaches more than three chapters read in a row.
- **Annotate.** Write down what you would try Monday morning.
- **Don't finish everything.** Skim what you know, slow down where it stings.
- **Watch the age.** Interface fashion dates fast, but principles from decades ago still hold. The older the book, the more you read for thinking and less for examples.

## Start Here: Why Things Work or Don't

**The Design of Everyday Things — Don Norman.** The foundation. It explains why doors, stoves and software confuse people, and gives you vocabulary that sticks: affordances, signifiers, feedback, mapping, mental models. Its central message, that bad design is usually not the user's fault, is worth absorbing early. Best for everyone, at the start.

**Don't Make Me Think — Steve Krug.** Short, funny and practical on web usability. Its strength is how clearly it describes how people actually scan and satisfice rather than read. Quick to finish, easy to quote, and a good book to hand to a colleague who does not do design.

**Emotional Design — Don Norman.** A follow-up on how feeling shapes use: why attractive things seem to work better, and how emotion enters the loop. A good counterweight if you were raised purely on usability.

**Laws of UX — Jon Yablonski.** A compact reference to the psychological principles behind common design decisions, well illustrated. A handy desk reference. Treat the laws as lenses, not rules.

## Research: Finding Out What's True

**Just Enough Research — Erika Hall.** Direct, funny and wise about doing research without a research department. It reframes research as reducing risk and being less wrong. Our top pick for small teams.

**The Mom Test — Rob Fitzpatrick.** A tight book about asking questions that cannot be answered with polite lies. Short, specific and useful immediately. Read it before your next interview.

**Rocket Surgery Made Easy — Steve Krug.** A do-it-yourself guide to running small, frequent usability tests. If the idea of testing intimidates you, this is the friendliest route in.

**Observing the User Experience — Mike Kuniavsky, Elizabeth Goodman and Andrea Moed.** A comprehensive field manual of research methods, from interviews to diary studies. Dense, but a trustworthy reference to keep.

## Structure and Systems

**The Elements of User Experience — Jesse James Garrett.** A short, clear model for thinking about product decisions in layers from strategy to surface. Useful for explaining to non-designers why you cannot fix a strategy problem with a visual change.

**Information Architecture — Louis Rosenfeld, Peter Morville and Jorge Arango.** The standard text on organizing, labeling and navigating large bodies of content. Heavier than most, but if you build anything with many pages, objects or settings, it will earn its shelf space.

**Atomic Design — Brad Frost.** A clear way to think about building interfaces from small parts into larger ones. Even if you do not adopt the vocabulary, it will sharpen your approach to components.

**Design Systems — Alla Kholmatova.** A thoughtful look at how real teams build shared languages for design, including the social side that tools skip. Read it before starting a system, not after you are knee deep.

## Interaction and Behavior

**About Face — Alan Cooper and co-authors.** A large, rigorous treatment of interaction design, goal-directed design and personas. Long, and partly dated in its examples, but its thinking about goals, flows and posture of software is still excellent.

**Microinteractions — Dan Saffer.** A concise treatment of the small, single-purpose moments inside products and how to design them well. Direct and applicable the week you read it.

**Designing Interfaces — Jenifer Tidwell.** A pattern catalog: common interface problems with proven solutions and when to use each. A good lookup book when you are stuck on how to present something.

## Visual and Craft

**Refactoring UI — Adam Wathan and Steve Schoger.** Practical, example-led advice on making interfaces look good for people who are not trained visual designers. Especially useful for developers and solo builders.

**Practical Typography — Matthew Butterick.** A readable guide to type fundamentals, also available online. A small time investment that improves everything you make.

## Process and Teamwork

**Lean UX — Jeff Gothelf and Josh Seiden.** How to fold design into fast, hypothesis-driven product work. Helpful for teams that want shorter loops, with a healthy emphasis on outcomes over deliverables.

**Sprint — Jake Knapp, with John Zeratsky and Braden Kowitz.** A structured five-day method for answering big questions with a prototype and real users. Useful as a template, even if you adapt it heavily.

**Inspired — Marty Cagan.** On how strong product teams work: discovery, risk and empowered teams. Read this to understand the people you will work with.

## Inclusion and Ethics

**Mismatch — Kat Holmes.** A thoughtful book on inclusive design: how exclusion happens when products assume a narrow user, and how designing for a mismatch can spark better ideas for everyone. Probably the most important book on this list for how you frame your work.

**Deceptive Patterns — Harry Brignull.** A catalog of manipulative interface tricks and how to recognize them, by the person who coined the earlier term for them. Valuable both as a warning and as a checklist of what not to build.

## Psychology Beyond Design

**Thinking, Fast and Slow — Daniel Kahneman.** Not a design book, but a deep source for how people make judgments and why they are predictably biased. Dense and long. Read selectively, and it will change how you think about defaults, framing and choice.

## Suggested Reading Orders

**New to UX:** *The Design of Everyday Things*, *Don't Make Me Think*, *Just Enough Research*, then *Refactoring UI* or *Laws of UX*.

**Developer moving toward design:** *Refactoring UI*, *Don't Make Me Think*, *Atomic Design*, *Microinteractions*.

**Researcher or aspiring researcher:** *Just Enough Research*, *The Mom Test*, *Observing the User Experience*, *Rocket Surgery Made Easy*.

**Building a design system:** *Atomic Design*, *Design Systems*, *Information Architecture*, then the documentation of the platforms you build for.

**Leading a small product team:** *Inspired*, *Lean UX*, *Sprint*, *Mismatch*.

## Beyond Books

Reading is one input. Pair it with:

- **Teardowns** of products you use.
- **Usability testing** of your own work, even informally.
- **Documentation** from platforms and accessibility standards, which are free and authoritative.
- **Critique** from people who will tell you what is wrong.
- **Building** things and shipping them.

A last piece of advice: when a book disagrees with what you observe in a test, believe the test. Books are about general patterns. Your users are specific.
`,"/src/content/ux-guide/ux-disciplines.md":`---
title: "The Disciplines Inside UX, and How They Fit Together"
slug: ux-disciplines
route: /blog/ux-guide/ux-disciplines
guide: ux-guide
chapter: 13
category: ui-ux-guides
dek: "UX is a family of crafts. A tour of the major disciplines, what each one owns, how they hand off, and how a small team covers them without a headcount for each."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "The Disciplines Inside UX and How They Fit Together | InnerAnimalMedia"
seoDescription: "A clear tour of UX disciplines: research, information architecture, interaction, content design, UI, accessibility, design systems and design engineering, and how small teams cover them."
cover:
  key: ux-guide/ux-disciplines-cover
  alt: "Cover illustration for UX disciplines"
  ratio: "1.8:1"
related: [product-designer, interaction-designer, roadmap-to-becoming-uiux-designer]
---

"UX designer" describes a family, not a single job. Behind the label sit several distinct crafts, each with its own methods, vocabulary and ways of failing. Knowing them helps in three ways: you can see what is missing from a product, you can tell what kind of person to hire or become, and you can cover the gaps deliberately when you cannot staff each one.

::media{key="ux-guide/ux-disciplines-hero" alt="A map of UX disciplines arranged from research to engineering" caption="The disciplines, arranged by what they own" ratio="16:9"}

## The Map

| Discipline | Owns | Key question |
|---|---|---|
| **UX research** | Evidence about people and behavior | What is true? |
| **Information architecture** | Structure, labels, navigation | Can people find and understand it? |
| **Interaction design** | Behavior, states, motion | How does it respond? |
| **Content design and UX writing** | Words in the product | What should it say? |
| **Visual and UI design** | Appearance, hierarchy, components | How does it look and read? |
| **Accessibility** | Usability for the full range of people | Who can't use this, and why? |
| **Design systems and ops** | Shared parts, rules, workflow | How do we stay consistent at speed? |
| **Design engineering** | The bridge between design and code | Can we build it, and can it be built well? |
| **Service design** | The end-to-end service, including backstage | What has to happen for this to work? |

Real roles blend these. The point of the table is to name the muscles.

## UX Research

Research reduces the risk of building the wrong thing. It spans generative work (what do people need?), evaluative work (does this design work?) and quantitative work (how many, how often?). Methods range from interviews and field observation to usability tests, surveys and analytics. See [user testing](/blog/ux-guide/user-testing) and [behavior data](/blog/ux-guide/user-behavior-data).

**Skills:** study design, interviewing, synthesis, statistics literacy, storytelling with evidence.

**When it is missing:** teams argue from opinion, ship features nobody asked for, and discover problems from support tickets.

## Information Architecture

IA is how things are organized: what exists, how it is grouped, what it is called and how people move between pieces. It determines whether a large product feels coherent or like a drawer of unlabeled cables. Methods include card sorting, tree testing, content inventories and sitemaps.

**Skills:** categorization, labeling, taxonomy, systems thinking.

**When it is missing:** features pile up in whatever menu had room, labels use internal jargon, and people cannot find things that exist.

## Interaction Design

Interaction design defines how a product behaves: states, transitions, feedback, input models and edge cases. See [what an interaction designer does](/blog/ux-guide/interaction-designer).

**Skills:** state modeling, prototyping, timing and motion, platform conventions.

**When it is missing:** interfaces look finished but feel brittle, with unclear loading, silent failures and inconsistent responses.

## Content Design and UX Writing

Words are interface. Content design covers labels, instructions, empty states, errors, onboarding and the tone of the whole product. Beyond microcopy, it involves deciding what content is needed, in what order, and in what form.

**Skills:** clear writing, editing, information hierarchy, voice and tone, localization awareness.

**When it is missing:** buttons say "Submit", errors say "Something went wrong", and every team names the same thing differently.

## Visual and UI Design

UI designers shape the visible layer: layout, hierarchy, typography, color, iconography, spacing and component appearance. In a systematic practice, that means designing the rules and parts so everything built later inherits quality.

**Skills:** typography, composition, color, craft in a design tool, component thinking, an eye for detail.

**When it is missing:** screens feel inconsistent, hierarchy is murky, and nothing quite lines up.

## Accessibility

Accessibility is the practice of making products usable by people with a wide range of abilities and circumstances: vision, hearing, motor, cognitive, and temporary or situational limits. It is rooted in standards such as WCAG, now at version 2.2, and in assistive technologies such as screen readers, switch devices and voice control.

In practice: sufficient contrast, keyboard operation, visible focus, meaningful structure and labels, targets that are big enough, no reliance on color alone, motion that respects preferences, and clear language. It works best as a property of components and tokens, with testing at the end, not a review stage that finds problems too late.

**Skills:** standards knowledge, assistive technology use, semantic markup, inclusive research.

**When it is missing:** whole groups of people cannot complete basic tasks, legal exposure grows, and retrofits cost many times more than doing it right.

## Design Systems and Design Operations

Design systems keep a growing product coherent: tokens, components, patterns, documentation and governance. Design operations is the surrounding practice of workflow, tooling, standards, research logistics and team health.

**Skills:** component architecture, token design, documentation, versioning, change management, diplomacy.

**When it is missing:** every screen reinvents buttons, themes are impossible, and design debt compounds silently.

## Design Engineering

Design engineers work in both worlds. They build prototypes and production components, close the gap between what was designed and what shipped, and make interactions feel right in code. The role is growing because the cost of translating between disciplines is real.

**Skills:** front-end engineering, animation, accessibility implementation, visual taste, system design.

**When it is missing:** designs are hard to build, details get lost in translation, and motion and states regress in the build.

## Service Design

Service design looks past the interface at the whole system that delivers an experience: people, processes, policies and tools, front stage and back stage. It uses blueprints, journey maps and ecosystem maps. See [journey mapping](/blog/ux-guide/customer-journey-map).

**Skills:** systems mapping, facilitation, operations understanding, cross-team influence.

**When it is missing:** good interfaces sit on top of slow, broken or contradictory processes, and the experience fails at the seams.

## Other Specialties Worth Knowing

- **Conversational and voice design:** structuring dialog, handling misunderstanding, designing for turn-taking.
- **Motion design:** timing, easing and choreography that express brand and behavior.
- **Data and AI experience design:** making probabilistic systems legible, supervisable and trustworthy.
- **Game and spatial design:** designing for depth, gaze and embodiment.
- **Localization and internationalization:** design that survives other languages, scripts and cultures.

## How They Hand Off, and Where They Fight

The craft lines are drawn where work changes hands, and that is where friction collects.

- **Research to design:** findings need to arrive as decisions, not reports. Pair early.
- **IA to content:** labels and structure are co-dependent. Decide them together.
- **Interaction to UI:** behavior and appearance are intertwined. Co-design states.
- **Design to engineering:** the most expensive handoff. Prototype together and review builds.
- **Accessibility to everyone:** needs to be shared from the start, not owned by one person at the end.

The healthiest teams treat the lines as a guide to who leads a decision, not a wall.

## Covering the Map on a Small Team

Most teams cannot hire for each discipline. A workable approach:

1. **Identify the highest risk.** Is it that you are building the wrong thing (research), that people cannot find things (IA), or that it feels brittle (interaction)? Invest there first.
2. **Build the system once.** Tokens, components with complete states and accessible behavior cover a large share of UI, interaction and accessibility work automatically.
3. **Use checklists as scaffolding.** A short pre-release list for states, copy, accessibility and responsiveness catches most problems.
4. **Borrow research.** Five hours of watching people beats five weeks of debate.
5. **Make writing someone's job,** even if part-time. Consistent language is a cheap, visible win.
6. **Pair a designer with an engineer** early and often.
7. **Use AI as a force multiplier:** to draft states, audit tokens, generate test scripts and check accessibility, with people reviewing the results.

## Choosing Your Path

If you are building a career, find the discipline whose problems you find absorbing, and go deep enough that you are useful. Then widen enough to understand your neighbors. "T-shaped" is the familiar phrase: one deep stem, broad collaboration across the top.

- Drawn to people and evidence: research.
- Drawn to structure and language: IA or content design.
- Drawn to behavior and feel: interaction or motion.
- Drawn to craft and systems: UI, design systems, design engineering.
- Drawn to fairness and edge cases: accessibility.
- Drawn to the whole picture: service design or product design.

For the start of that journey, see [the twelve-month roadmap](/blog/ux-guide/roadmap-to-becoming-uiux-designer).

## The Takeaway

A product's experience is the sum of all these disciplines, whether or not anyone is named for them. The ones nobody owns do not disappear. They are done implicitly, by whoever is nearest, with whatever time they have. Naming them is the first step toward doing them on purpose.
`,"/src/content/ux-guide/ux-guide.md":`---
title: "The Working UI/UX Design Guide for 2026"
slug: ux-guide
route: /blog/ux-guide
guide: ux-guide
chapter: 0
category: ui-ux-guides
dek: "How we approach UX when the product is an agent platform, a CMS and a theme editor: the process, the deliverables, the methods and the roles, with the reasoning shown."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "The Working UI/UX Design Guide for 2026 | InnerAnimalMedia"
seoDescription: "A practical UI/UX guide covering process, deliverables, research methods, roles and tools, written from the work of shipping an AI agent platform."
cover:
  key: ux-guide/hub-cover
  alt: "Cover illustration for the UI/UX guide"
  ratio: "1.8:1"
guideCard:
  key: ux-guide/hub-guide-card
  alt: "Portrait guide card for the UI/UX guide"
  ratio: "3:4"
related: [ux-disciplines, user-behavior-data, ux-myths]
---

Most UX guides read like glossaries. This one is a working manual: how we move from a vague problem to a shipped interface when the product is an AI agent platform, a CMS, a theme editor and a stack of dashboards that other people have to live inside every day.

It covers the process from first question to measured result, the artifacts each stage should produce, the research and evaluation methods worth learning, and the roles that do the work. Where a method deserves the long version, there is a chapter. Where it doesn't, the hub says everything you need and moves on.

A note on voice. We build with a very small team and a lot of automation, so the advice here is biased toward things that survive that: short artifacts, cheap tests, explicit rules, and interfaces that are complete before they are clever.

::media{key="ux-guide/hub-intro-scene" alt="Opening scene for the guide" caption="Opening scene" ratio="16:9"}

## UX Fundamentals

### What Is UX Design?

UX design is the practice of shaping how a product works for the people using it, across the whole span of contact: finding it, understanding it, getting set up, doing the real job, recovering when something goes wrong, and deciding whether to come back. The unit of work is not a screen. It is a person trying to get something done in a context you do not control.

Three layers help when you are diagnosing a product. **Utility** asks whether it does something the person needs at all. **Usability** asks whether they can do it without friction, mistakes or guesswork. **Meaning** asks whether the experience earns a second visit. Teams routinely polish the third layer while the first is shaky, and the result is a beautiful product nobody can finish a task in.

The experience also includes things nobody thinks of as design. The latency of a response, the wording of a failure message, the email that arrives after a payment fails, the state of the interface while an agent is halfway through a job. In an agent platform, one of the most important experiences is what the user sees when a tool call is denied. That is UX, and it is rarely in anyone's mockups until it goes wrong.

### What Is UI Design?

UI design is the surface: layout, typography, color, spacing, components, states, motion, and the words on the controls. It answers what is on the screen, how it is arranged, and how it responds when someone touches it.

Good UI makes hierarchy obvious. A person should be able to tell, within a second or two, what is primary, what is secondary, what is destructive, and what is merely informational. They should also never meet a component in a state nobody designed. Every control ships with its full state table: default, hover, focus, pressed, disabled, loading, empty, error and success. If any of those are missing, a user will find them in production.

In a themeable product, UI design is partly the authoring of a contract rather than the painting of screens. Components do not own colors. They request roles such as base surface, inverse surface, text on base and hairline, and the active theme answers. That is a design decision with real consequences: it means a screen you never saw can still look intentional in a theme you never imagined.

### UX vs. UI

They are two views of one job, and they fail differently.

| | UX design | UI design |
|---|---|---|
| Main question | Can people get the thing done, and do they want to? | Is it clear, legible and consistent while they do it? |
| Typical outputs | Research, flows, information architecture, test findings | Layouts, components, tokens, states, motion |
| Failure looks like | Users abandon a task they wanted to complete | Users complete it but squint, hesitate or misclick |
| Evidence | Task success, drop-off, interviews | Contrast checks, consistency audits, first-click tests |

A concrete split: UX decides that an editor needs an undo that survives a page refresh, because people will experiment more freely if experiments are reversible. UI decides where the undo control sits, how it looks when there is nothing to undo, and how it announces itself to a screen reader.

You cannot repair a UX problem with UI paint. A confusing three-step setup does not become clear because the buttons are rounder. The reverse also holds: a sound flow with inconsistent spacing and unlabeled icons still feels untrustworthy.

### What Do UI/UX Designers Do?

The job, stripped of titles, is a cycle of eleven activities: frame the problem, gather evidence, structure the information, define the flows, design the interface, prototype the risky parts, test them, specify the result for engineering, review the build, measure after launch, and feed what was learned back into the next frame.

The unglamorous half is where most of the quality lives. It is the empty state, the permission-denied state, the long-name case, the 10,000-row case, the slow-network case, the error copy, the keyboard path and the focus order. A designer who only draws the happy path has done a third of the work.

On a small team one person often does all of it. That is workable if the artifacts stay small and the system does the repetitive work. It stops being workable when everything is bespoke, which is why design systems and shared tokens matter more to tiny teams than to large ones.

### Why UX Design Matters

The business argument is simple and it does not need invented statistics. Changing a flow in a prototype costs an afternoon. Changing it after it has shipped costs engineering time, migration work, support load and some amount of user trust. UX work moves discovery to the cheap end of the timeline.

The second argument is trust, and it is sharper for AI products. When software acts on someone's behalf, the interface is the only evidence they have about what it is doing. Visible status, clear approvals, honest errors and reliable undo are not decoration on an agent platform. They are the product.

The third is access. Roughly one in six people worldwide lives with a significant disability, according to the World Health Organization, and accessibility requirements are increasingly legal requirements rather than good manners. The European Accessibility Act began applying to many consumer-facing digital products and services in June 2025. Designing for keyboard, screen reader, zoom and reduced motion from the start is far cheaper than retrofitting.

::media{key="ux-guide/hub-trust-states" alt="An agent task in progress, awaiting approval, denied and completed" caption="The same task across four trust-critical states" ratio="16:9"}

## UI/UX Design Process

The process is a loop, not a ladder. It borrows the double-diamond shape: diverge to understand the problem, converge on a definition, diverge to explore solutions, converge on one to ship. Then measure, and go around again with better questions.

We work in seven stages. Strategy decides why. Definition decides what. Analysis learns what exists. Research and methods fill the gaps. Design makes the thing. Validation checks it. Measurement tells us whether it worked.

::media{key="ux-guide/hub-process-loop" alt="Seven-stage design loop from strategy to measurement" caption="The seven-stage loop" ratio="16:9"}

### UX Strategy

Strategy is a short, falsifiable bet. Who is this for, what problem are we solving, why are we the ones to solve it, what are we explicitly not doing, and how will we know if we were right?

A useful strategy fits on one page:

- **User and context.** Who, in what situation, with what alternatives.
- **Problem.** Stated as an observed difficulty, not a missing feature.
- **Bet.** What we think will help, and why.
- **Success metric.** One primary number with a direction and a window.
- **Non-goals.** The tempting things we are leaving out.
- **Constraints.** Platform, latency, cost, legal, team size.

An illustrative example for a theme editor aimed at people who are not developers: the bet is that direct manipulation, with an agent offering suggestions in the same surface, will beat a settings form. The metric is time from opening the editor to publishing a first change. The non-goal is arbitrary custom CSS in the first version. Notice that every line can be wrong, and that is the point.

### Product Definition

Definition converts the bet into scope. We use job statements ("When I want to change how my site looks, I want to try a change without risking the live version, so I can experiment freely") because they describe motivation and context rather than a feature, and a feature list is what you write after you know the job.

From jobs we derive requirements and then sort them honestly. The Kano model is a handy lens: must-haves that cause anger when missing, performance features where more is better, and delighters nobody asks for. A small team should ship the must-haves completely and one delighter at most.

Acceptance criteria are where UX gets enforced. Ours name states, not just behavior. A feature is not done when the happy path works. It is done when the empty, loading, error and denied states exist, when there is a keyboard path, and when the copy has been read aloud by someone who did not write it.

### Analysis

Before designing anything, learn what exists. Analysis is audit work: how the current product behaves, where people leave, what they complain about, and what the constraints really are.

- **Product and UX audit.** Walk the core journeys as a new user and record friction with screenshots and severity.
- **Analytics baseline.** Funnel conversion, time to first success, feature adoption. Capture the number before you change anything, or you cannot claim a win.
- **Support and feedback mining.** Tag the last few dozen tickets and messages by theme. Repeats are signal.
- **Competitive and adjacent teardown.** Look at products solving the same job, and at products solving different jobs with a pattern you could borrow.
- **Technical constraints.** What the platform can actually do, what it costs per request, and what is slow.

The output is a ranked list of problems with the evidence attached, plus a baseline. If the list has no evidence, it is a list of opinions.

### UX Research & Methods

Pick the method from the question, not from habit. The useful axes are generative versus evaluative (are we discovering or checking?), qualitative versus quantitative (why versus how many?), and attitudinal versus behavioral (what people say versus what they do).

| The question | A good fit |
|---|---|
| What are people trying to do, and how? | Interviews, contextual inquiry, diary studies |
| Where do they get stuck? | Moderated usability tests, session replays |
| What do they call things? | Card sorting |
| Can they find it? | Tree tests, first-click tests |
| How many, how often, how fast? | Product analytics, surveys, benchmarks |
| Does this idea resonate at all? | Five-second tests, fake-door tests |

Small samples are fine for finding problems and bad for sizing them. Five or six participants will surface most of the major usability issues in a single design; they will tell you nothing reliable about percentages. The chapters on [user testing](/blog/ux-guide/user-testing) and [behavior data](/blog/ux-guide/user-behavior-data) go deeper on each side.

### UI/UX Design

This is the making stage, and it runs from structure to surface in a fixed order, because each step constrains the next.

1. **Information architecture.** What things exist and how they relate. Name them in users' words.
2. **Flows.** The paths between states, including the unhappy ones.
3. **Wireframes.** Layout and priority, in grayscale, with real content.
4. **Visual design.** Hierarchy, type, spacing and color, expressed through tokens.
5. **Components.** Reusable parts with complete state tables.
6. **Prototype.** Enough interactivity to test the risky decision.

The principles that earn their keep are hierarchy, consistency, feedback, constraint and progressive disclosure. Show what matters now, hide what matters later, and make the next action obvious. Design for the extremes, not the median: the very long name, the empty account, the table with ten thousand rows, the connection that drops mid-action.

Accessibility lives inside this stage, not after it. Text at 4.5:1 contrast against its background, interactive targets at least 24 by 24 CSS pixels under WCAG 2.2 (and closer to 44 for comfortable touch), visible focus that is not hidden behind sticky headers, and meaning that never depends on color alone.

### Validation

Validate with the cheapest artifact that can answer the question. A paper sketch can tell you whether the structure makes sense. A click-through can tell you whether the flow is followable. A coded prototype with fake data can tell you whether an interaction feels right. A staged build behind a flag can tell you how it holds up on real content.

Decide the pass criteria before the session. "Four of five participants publish a change without help" is a criterion. "People seemed to like it" is a mood.

Run an accessibility pass every time, and keep it small and repeatable: complete the main task using only the keyboard, run a screen reader through the primary flow, zoom to 200 percent and 400 percent and check reflow, and turn on reduced motion. Then review the build with the engineer who wrote it. The differences between the design and the build are usually informative, not embarrassing.

### How to Measure UX

Four families of measures cover almost everything.

- **Behavioral:** task success rate, time on task, error rate, feature adoption, retention.
- **Attitudinal:** System Usability Scale (a ten-question survey scored 0 to 100, with a long-run average near 68), the Single Ease Question after a task, CSAT, NPS.
- **Performance:** Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1.
- **Business:** conversion, activation, support volume, revenue per account.

Google's HEART framework organizes them by what you care about: Happiness, Engagement, Adoption, Retention and Task success. Pick one primary metric per initiative, add a guardrail or two so you do not win one number by damaging another, and instrument before launch so day one has data.

Benchmarks matter less than direction. Compare against your own last release.

## UI/UX Deliverables

A deliverable is a tool for communication, not proof of effort. Produce the ones that change a decision or unblock a person, and skip the rest.

### Design Systems & Pattern Libraries

A design system is tokens, components, patterns and the documentation and rules that keep them coherent. A pattern library is the narrower thing: a catalog of reusable components and their usage notes. The system adds the decisions behind them.

Tokens come in tiers. **Primitive** tokens are raw values (a specific gray, a spacing step). **Semantic** tokens are roles (surface, text, hairline, accent). **Component** tokens bind a role to a part (button background). Components should only reference semantic or component tokens. That one rule is what makes theming possible.

\`\`\`css
:root {
  /* semantic roles: the only things components may reference */
  --surface-base: var(--theme-surface-base);
  --surface-inverse: var(--theme-surface-inverse);
  --text-on-base: var(--theme-text-on-base);
  --text-on-inverse: var(--theme-text-on-inverse);
  --hairline-on-inverse: var(--theme-hairline-on-inverse);
}
\`\`\`

Governance is the unglamorous part: how a change is proposed, who reviews it, how it is versioned, how deprecated parts are retired. A system that nobody can safely change gets forked, and a forked system is two systems.

### UI/UX Research Document

A research document records what you set out to learn, how, with whom, what you found, how confident you are, and what it implies. One page for the summary, evidence linked underneath.

Keep the questions at the top. Keep the findings separate from the interpretation. And say what you did not look at, because the next reader will assume silence means coverage.

### User Research Takeaways

Takeaways turn raw observation into something a team can act on. We use a three-part form: **observation** (what happened, with a timestamp or a quote), **insight** (why it matters), **implication** (what we should do about it).

Weak takeaway: "Users want it to be faster." Strong takeaway: "Four of six participants paused for several seconds after pressing Publish with no indication anything was happening, then pressed it again. Implication: show progress immediately and disable the control while the action runs."

Group by affinity, rank by frequency and severity, and keep the original quotes within reach. A takeaway no one can trace to evidence will not survive its first challenge.

### User Flow Document

A flow shows how a person moves through a task: entry points, decisions, system responses, and exits, including failure. In a product where software acts autonomously, add lanes for each actor so responsibility is visible.

\`\`\`mermaid
flowchart LR
  U[User asks for a change] --> A[Agent drafts plan]
  A --> D{Needs a risky tool?}
  D -- no --> R[Agent runs and reports]
  D -- yes --> P[Approval prompt]
  P -- approve --> R
  P -- deny --> E[Agent explains and offers alternatives]
  R --> V[User reviews result]
  V -- undo --> U
\`\`\`

::media{key="ux-guide/hub-flow-example" alt="User, agent and approval lanes in a tool-approval flow" caption="A flow with lanes for each actor" ratio="16:9"}

Draw the unhappy branches first. They are where trust is made or lost.

### Wireframes

Wireframes settle structure, hierarchy and content priority before anyone argues about color. Keep them grayscale, use real content, and annotate behavior in words next to the shapes.

Start low fidelity so changing your mind is cheap. Move to mid fidelity once the structure holds, with real labels, real data lengths and real states. Resist high fidelity early; it invites feedback about typefaces when you needed feedback about order.

### Interactive Prototype

A prototype should be exactly as real as the question requires. To test whether a flow is followable, linked frames are enough. To test whether a drag interaction feels right, you need it coded. For AI products, a very useful trick is the Wizard of Oz prototype, where a person behind the curtain plays the agent so you can learn how people react to its behavior before you build it.

For us the cheapest prototype is often the real component with fake data, since it inherits the real tokens and the real keyboard behavior. Time-box it, and throw it away on purpose.

### User Testing Report

A good report is short. Summary of what we learned, what was tested and with whom, findings ranked by severity with evidence attached, recommendations, and what we did not test.

Severity on a zero-to-four scale (not a problem to usability catastrophe) keeps debates short. Attach a clip or a quote to every finding above a two. The report is not a transcript of the sessions. It is an argument, with evidence, about what to change first.

### Common UI Elements

The standard parts are worth knowing by job rather than by name.

| Job | Elements |
|---|---|
| Navigate | Top bar, sidebar, tabs, breadcrumbs, pagination |
| Enter data | Text field, select, combobox, checkbox, radio, toggle, slider, file upload |
| Act | Primary, secondary and destructive buttons, menus, links |
| Give feedback | Inline validation, toast, banner, progress, skeleton |
| Group | Card, table, list, accordion |
| Interrupt | Modal, drawer, popover, tooltip |

A few decisions come up constantly. Use a toggle for an immediate change and a checkbox for something submitted later. Prefer inline feedback to a toast when the message is tied to a specific control, because toasts vanish before they can be read. Prefer a drawer to a modal when the person needs the page behind it for reference. Choose destructive styling for actions that destroy data, and always offer undo or a confirmation proportional to the damage.

### UI Animations

Motion earns its place when it orients, confirms, or shows cause and effect. A panel that slides in from the edge it was summoned from explains where it lives. A button that changes state under the finger confirms the press. Anything purely decorative should justify itself.

Practical defaults: most interface transitions land between 100 and 300 milliseconds, ease-out for things entering, ease-in for things leaving, animate transform and opacity rather than layout properties, and honor the reduced-motion preference by replacing movement with a simple fade or nothing at all. Anything that takes over a second needs progress, not a spinner.

A useful anatomy for small interactions is trigger, rules, feedback and loops. Take a streaming indicator on an agent response: the trigger is a submitted message, the rules decide what shows while the model is thinking versus writing, the feedback is the moving cue, and the loop is what happens when a response runs long.

## UX Design Methods

Methods are tools with specific jobs. This section gives you the short version of each and points to a chapter where there is more.

### Value Proposition

A value proposition states who it is for, what they get, and why it beats their current way of doing it, in a sentence a stranger could repeat. Write one for the thing you are building, then test it before you build further. A five-second test (show the page, ask what it is for) and a fake-door test (offer the feature, measure clicks, explain honestly afterward) are both cheap.

If you cannot write the sentence, you do not have a proposition yet. You have a feature.

### Customer Journey Maps

A journey map lays out what a person does, thinks and feels across the stages of reaching a goal, with the touchpoints and the pain along the way. It is a tool for finding the gaps between teams' views of the product. See the full chapter on [customer journey mapping](/blog/ux-guide/customer-journey-map).

### User Personas

A persona is a research-based model of a group of users, used to keep decisions grounded. The failure mode is decoration: a stock photo, a name and a hobby, with nothing a designer can use. See [user personas that change decisions](/blog/ux-guide/user-personas).

### Heuristic Evaluation

A heuristic evaluation is an expert review against a short list of established principles. It is fast, needs no participants, and is a strong first pass before testing. Three to five reviewers working independently will find considerably more than one.

Jakob Nielsen's ten heuristics are still the standard checklist. Here they are with a product lens:

| Heuristic | What it looks like when it fails |
|---|---|
| Visibility of system status | A long agent run with no visible progress or step log |
| Match with the real world | Internal jargon in the settings labels |
| User control and freedom | No way to cancel or undo a started action |
| Consistency and standards | The same action named three ways across screens |
| Error prevention | A destructive action one click away, no confirmation |
| Recognition over recall | Making people remember a command instead of showing it |
| Flexibility and efficiency | No shortcuts for the people who use it eight hours a day |
| Minimalist design | Every setting on one page at equal weight |
| Help with errors | "Something went wrong" with no cause or next step |
| Help and documentation | Docs that describe features, not tasks |

Rate each issue for severity, merge duplicates, and hand the team a short list in priority order.

### Product Roadmap

A roadmap communicates direction and priority, not a delivery contract. For small teams, a Now, Next, Later layout beats date-based charts because it admits uncertainty honestly. The chapter on [product roadmaps for small teams](/blog/ux-guide/product-roadmap) covers outcome-based items and how to say no.

### Usability Testing

Watch representative people try to do realistic tasks, say little, and note where they struggle. It is the single highest-value research habit. Read the long form in [user testing: methods, sample sizes and session craft](/blog/ux-guide/user-testing).

### Guerrilla Testing

Guerrilla testing is usability testing stripped to the bone: short, informal sessions with whoever is available, in a public place or a hallway or a community channel, often with a small thank-you. It trades participant fit for speed.

It is a good fit for early concepts, navigation labels and first-impression questions. It is a poor fit for specialist workflows, because a passerby does not know your domain. Keep it to five minutes, one question, and a clear script. Write down what you saw rather than what you hoped to see, and treat results as directional.

A sound routine: prepare three tasks and a one-line introduction, ask permission and say plainly that you are testing the product and not the person, watch silently, ask "what were you expecting?" only after a stumble, and finish with one open question. Ten sessions in an afternoon will tell you whether the concept is clear.

### Task Analysis

Task analysis breaks a goal into the steps, decisions and knowledge it takes to complete it, so you can design for the real work instead of the imagined one. The chapter on [task analysis](/blog/ux-guide/ux-task-analysis) walks through a hierarchical breakdown and where the design opportunities hide.

## Essential Takeaways for UI/UX Designers

### How to Become a UI/UX Designer

There is no single required path. People arrive from graphic design, front-end development, research, writing and product management, and plenty are self-taught. What matters is a body of work that shows how you think. The chapter on [becoming a UI/UX designer](/blog/ux-guide/roadmap-to-becoming-uiux-designer) lays out a twelve-month plan.

### Skills for a UX Designer

Three groups. **Craft:** layout, typography, color, prototyping, component thinking. **Thinking:** problem framing, systems thinking, research literacy, writing clearly. **Collaboration:** explaining a decision, taking critique, working with engineers on what is feasible.

Add enough code to read a component and understand a constraint. You do not have to be an engineer. You do have to know why a design that looks simple is expensive to build.

### What Is a UI Designer?

A UI designer owns the visual and component layer: hierarchy, type, spacing, color, iconography, states and the system that keeps them consistent. The deliverable is not a pretty frame. It is a set of parts and rules an engineer can build from without guessing.

### What Is an Interaction Designer?

An interaction designer owns behavior: what happens on input, how state changes, what feedback appears and how it feels over time. They think in transitions, timing and edge cases. The longer description is in [what an interaction designer actually does](/blog/ux-guide/interaction-designer).

### What Is a UX Researcher?

A UX researcher designs studies, recruits participants, runs sessions, analyzes evidence and turns it into decisions. They are as much a translator as an investigator. A good researcher makes the team's assumptions testable and keeps them honest about what the evidence does and does not say.

### What Is a UX Writer?

A UX writer owns the language of the product: labels, instructions, empty states, errors, confirmations and tone. Words are interface. A well-written error message that names the cause and the next step does more for trust than most visual polish.

### What Is a Product Designer?

A product designer takes responsibility for the outcome, from problem framing to shipped result, drawing on research, interaction and UI skills as needed. It is the closest match to what a small team needs from one person. See [what a product designer actually does](/blog/ux-guide/product-designer).

### Key UI/UX Design Tools

Tools change; the jobs do not. Think by job.

- **Design and prototyping:** Figma, Penpot (open source), Framer. For us, coded prototypes in the real component library are often faster.
- **Diagramming and thinking:** FigJam, Excalidraw, Mermaid for flows that live next to the code.
- **Research:** a video-call tool for moderated sessions, a survey tool, a transcript and tagging tool, and product analytics with session replay.
- **Accessibility:** axe DevTools, Lighthouse, WAVE, a contrast checker, and a screen reader (VoiceOver, NVDA).
- **Collaboration with agents:** an AI agent is a strong partner for first drafts of states, copy variants, test scripts and token audits. It is a weak substitute for watching a real person use the thing.

### Best UX Books to Read

Start with the classics on how people and objects interact, add one on research, one on systems, and one on visual craft. We keep an annotated list in [the UX reading list](/blog/ux-guide/ux-books).

### Wrapping Up

UX design is a discipline of making hidden costs visible: confusion, hesitation, abandoned tasks, support load, lost trust. The process is a loop, the deliverables are tools, the methods are matched to questions, and the roles blur on small teams. Learn the loop, then shorten it until you can run it in a day.

## Frequently Asked Questions About UI/UX Design

### What are the five elements of UX design?

Jesse James Garrett's model describes five planes that build on each other. **Strategy** is what you and your users want. **Scope** is the features and content that follow. **Structure** is how those pieces are organized and how people move between them. **Skeleton** is the layout of interface, navigation and information. **Surface** is the visible sensory design. Decisions at the lower planes constrain the upper ones, so a problem at the surface is often a strategy problem in disguise.

### What are the laws of UX?

A handful of well-supported observations, used as lenses and not as commandments.

- **Jakob's Law:** people spend most of their time on other products, so they expect yours to work like those.
- **Hick's Law:** decision time grows with the number and complexity of choices.
- **Fitts's Law:** time to hit a target depends on its distance and size.
- **Miller's Law:** working memory holds a limited number of chunks. It is about memory, not a rule for menu length.
- **Postel's Law:** be liberal in what you accept and conservative in what you send.
- **Tesler's Law:** complexity cannot be removed, only moved. Decide who carries it.
- **Doherty Threshold:** responses under about 400 milliseconds keep people in flow.
- **Peak-end rule:** people judge an experience by its most intense moment and its ending.
- **Aesthetic-usability effect:** attractive interfaces are perceived as easier to use.
- **Von Restorff effect:** the item that differs from its neighbors is the one remembered.

### What are the common myths about UX?

That it is only about looks, that users know what they want, that more features means more value, that people never scroll, that five users is always enough. We take them apart in [UX myths worth retiring](/blog/ux-guide/ux-myths).

### What are the latest UX design trends in 2026?

The durable shifts are interfaces for autonomous agents (delegation, approval, audit trails, undo), generative and adaptive interfaces constrained by design tokens, multimodal input, design and code converging around shared tokens, personalization that respects privacy, and accessibility moving from guideline to legal requirement. The fashionable layer on top changes every season. See [where UX is heading](/blog/ux-guide/future-of-ux-design) for how to tell them apart.

## More on UI/UX

Keep going with [the disciplines inside UX](/blog/ux-guide/ux-disciplines), [reading user behavior data](/blog/ux-guide/user-behavior-data), and [UX myths worth retiring](/blog/ux-guide/ux-myths).
`,"/src/content/ux-guide/ux-myths.md":`---
title: "UX Myths Worth Retiring"
slug: ux-myths
route: /blog/ux-guide/ux-myths
guide: ux-guide
chapter: 12
category: ui-ux-guides
dek: "Twelve persistent beliefs about UX that quietly shape bad decisions, what the evidence says instead, and what to do about each."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "UX Myths Worth Retiring | InnerAnimalMedia"
seoDescription: "Twelve common UX myths, from 'users don't scroll' to 'five users is always enough', with the evidence-based reality and practical advice."
cover:
  key: ux-guide/ux-myths-cover
  alt: "Cover illustration for UX myths"
  ratio: "1.8:1"
related: [user-testing, user-behavior-data, ux-disciplines]
---

Design folklore travels fast. A tidy rule from a talk, a blog post or a senior colleague gets repeated until it sounds like fact, and then it quietly steers decisions: what goes above a fold, how many clicks a flow may take, whether a feature gets research. Some of these beliefs started as sound observations and lost their context. Some were never true.

Each myth below comes with the kernel of truth that keeps it alive, what is wrong with it, and what to do instead.

::media{key="ux-guide/ux-myths-hero" alt="Twelve cards, each marked with a myth and a correction" caption="Myth, reality, action" ratio="16:9"}

## 1. "UX Is Just Making Things Look Nice"

**The kernel.** Visual polish is the most visible part of design, so it gets mistaken for all of it.

**The reality.** Appearance affects perception, but UX covers whether people can accomplish what they came to do, how they feel doing it, and whether they return. A product can be attractive and unusable, or plain and excellent. Surface is one layer among several, and fixing a deeper problem with a coat of paint does not work.

**Do instead.** Judge UX by outcomes: task success, time, errors, satisfaction, retention.

## 2. "Users Know What They Want"

**The kernel.** People are the authorities on their own problems.

**The reality.** They are reliable about frustrations and goals, and unreliable about solutions and predictions. Asking "would you use this?" yields polite optimism. People also struggle to describe habits they have never examined, and they cannot request what they have never imagined.

**Do instead.** Observe behavior, ask about past events rather than hypothetical futures, and test prototypes rather than asking for opinions.

## 3. "We Are the User"

**The kernel.** Team members often do use their own product.

**The reality.** The team knows far too much: the architecture, the vocabulary, where things live and why. They use it all day, in the best conditions, on fast devices. Their intuition is a poor stand-in for a newcomer's, or for a person with a different goal, skill level or ability.

**Do instead.** Watch real people who are not on your team do real tasks. Even five minutes of observation is humbling.

## 4. "Five Users Is Always Enough"

**The kernel.** Research by Nielsen and Landauer showed small groups find most of the usability problems in a design, with sharply diminishing returns.

**The reality.** That holds for one user group testing one design for problem discovery. It does not hold for quantitative claims, for several distinct user groups, or for varied and complex products. And the real lesson was not "test five once". It was "test a few, fix, and test again".

**Do instead.** Use three to five per group per round, iterate, and use larger samples when you need numbers.

## 5. "People Don't Scroll"

**The kernel.** Early web studies showed that attention concentrated near the top of the screen, and "above the fold" became gospel.

**The reality.** People scroll readily, especially on phones, when the content signals there is more worth seeing. Attention does decay down the page, so the top still matters. The failure is not scrolling. It is a layout that fools people into thinking the page has ended, such as a hard visual break or a big blank band.

**Do instead.** Put the most important content early, make continuation obvious, and check with scroll-depth data and tests, not with a rule.

## 6. "Everything Should Be Three Clicks Away"

**The kernel.** Shorter paths generally beat longer ones.

**The reality.** Studies of navigation have not found that people abandon at a particular click count. They abandon when they feel lost or the path stops making sense. Three obvious clicks beat one confusing one. Clicks are the wrong unit. Decisions and uncertainty are the right ones.

**Do instead.** Make each step clear and show progress. Reduce the number of decisions, not necessarily the number of clicks.

## 7. "More Features Means More Value"

**The kernel.** Capabilities attract buyers and sell upgrades.

**The reality.** Each feature adds interface, documentation, maintenance and decisions. Past a point, additions make the core job harder. Users value a product for solving their problem well, not for the length of the list.

**Do instead.** Tie every feature to a job and a metric. Remove or hide what is not earning its keep, and measure whether additions help or crowd.

## 8. "Good Design Is Intuitive"

**The kernel.** The best interfaces feel effortless.

**The reality.** "Intuitive" usually means "familiar". People find interfaces easy when they resemble things they already know. A truly novel interaction is not intuitive on first contact, and it does not need to be, as long as it is learnable and the learning is rewarded. Familiarity is a resource, not a virtue.

**Do instead.** Follow conventions where they exist and spend novelty where it earns something. Test for learnability, not just first-time ease.

## 9. "Accessibility Is a Niche Concern"

**The kernel.** It can seem to affect only a small group.

**The reality.** The World Health Organization estimates that roughly one in six people worldwide lives with a significant disability. Add temporary situations (a broken arm, bright sunlight, a noisy room), age-related changes and plain preference, and the number grows. Accessible design improves usability for everyone, and increasingly it is a legal expectation.

**Do instead.** Build accessibility into components and tokens, test with keyboard and screen reader, and treat it as a quality bar, not a feature.

## 10. "Attractive Design Compensates for Poor Usability"

**The kernel.** The aesthetic-usability effect is real: attractive things are perceived as easier to use, and people forgive minor faults.

**The reality.** The forgiveness is limited and temporary. When a task is hard, polish stops helping, and people feel misled. The effect can also mask problems in testing, since people may report that something is easy while struggling.

**Do instead.** Watch what people do, not just what they say, and fix real friction.

## 11. "Research Is Slow and Expensive"

**The kernel.** Large formal studies are.

**The reality.** Many of the highest-value methods are cheap and fast: five short interviews, an hour of watching recordings, a first-click test, a tree test, a quick usability session. The costly path is skipping research and rebuilding the wrong thing.

**Do instead.** Size the study to the decision. Start small, and look for the cheapest method that could change your mind.

## 12. "AI Will Replace the Need for Research and Design"

**The kernel.** AI tools genuinely speed up drafting, synthesis, variation and prototyping, and that will keep growing.

**The reality.** They absorb tasks, not the underlying job of deciding what is worth building, for whom, and whether it worked. Synthetic users reproduce plausible averages and miss real people's odd, specific struggles. Generated interfaces still need accessibility, consistency and trust to be designed.

**Do instead.** Use AI to prepare and accelerate: scripts, copy variants, state coverage, transcript summaries, token audits. Keep real people in the sessions that decide what you build.

## Bonus: "Users Read"

**The reality.** People scan. They look for words that match their goal, skim headings and links, and read closely only when something earns it. Write for scanning, with clear headings, short paragraphs and front-loaded information, and keep the detail available for people who want it.

## Spotting the Next Myth

New myths appear constantly. Some warning signs:

- **It is a number with no source.** "Users decide in seven seconds."
- **It is a rule with no condition.** "Always" and "never" claims about people.
- **It has aged without testing.** Based on an old device or context.
- **It flatters a favorite practice.**
- **It is used to end a discussion, not start one.**

The defense is cheap: ask what evidence supports it, in what context, and what the exceptions are. When you can, test it against your own users. Most folklore does not survive five honest sessions.
`,"/src/content/ux-guide/ux-task-analysis.md":`---
title: "Task Analysis: Breaking Work Into Steps You Can Design For"
slug: ux-task-analysis
route: /blog/ux-guide/ux-task-analysis
guide: ux-guide
chapter: 7
category: ui-ux-guides
dek: "How to decompose a goal into tasks, decisions and knowledge, spot where the design opportunities hide, and use the result to simplify real workflows."
author: InnerAnimalMedia
created: 2026-11-14
updated: 2026-11-14
seoTitle: "Task Analysis in UX: A Step-by-Step Guide | InnerAnimalMedia"
seoDescription: "Learn task analysis for UX: hierarchical task breakdowns, observation methods, finding friction, and applying the results to flows and interfaces."
cover:
  key: ux-guide/ux-task-analysis-cover
  alt: "Cover illustration for task analysis"
  ratio: "1.8:1"
related: [customer-journey-map, user-testing, interaction-designer]
---

Task analysis is the practice of taking a goal and breaking it down into the steps, decisions and knowledge required to achieve it. It answers a deceptively simple question: what does it actually take to do this? The answers are often surprising, because people are poor at describing their own routines, and designers are poor at imagining work they do not do.

It is one of the most reliable ways to stop designing for the imagined task and start designing for the real one.

::media{key="ux-guide/ux-task-analysis-hero" alt="A goal broken into subtasks in a hierarchical tree" caption="A hierarchical task breakdown" ratio="16:9"}

## What Task Analysis Is For

Use it to:

- **Understand how work is really done,** including workarounds, interruptions and tools you did not know were involved.
- **Find unnecessary steps,** and steps that exist only because of how the current system works.
- **Identify what people must know,** remember or decide at each step, which tells you what the interface should provide.
- **Find error-prone points,** where mistakes are likely and costly.
- **Define flows and information architecture** from the work outward, not from the screen inward.
- **Prepare for testing** by turning a vague goal into specific, observable tasks.

It is particularly valuable for complex or professional workflows, safety-critical tools, and any product replacing an existing process.

## Two Kinds of Analysis

**Hierarchical task analysis (HTA)** breaks a goal into subgoals and operations, nested to the level of detail you need. It describes the structure of the task and the plans that sequence it.

**Cognitive task analysis** looks at the thinking involved: decisions, judgments, information needs and mental models. It asks what a person has to know and notice.

Most useful analyses combine them: the structure of what is done, and the thinking behind each step.

## Build a Hierarchical Task Analysis

### 1. Define the Goal and Scope

Choose a goal at the right level, in the person's terms. "Launch a first website" is a goal. "Click publish" is an operation. Decide where the analysis starts and ends. A common mistake is to begin at the first screen rather than at the moment the person decides to do the thing.

### 2. Observe and Ask

Learn from the people who do the work.

- **Watch them do it** in their own environment, if possible. Observation catches what interviews miss.
- **Ask them to narrate** while they work: what they are doing and why.
- **Ask about the unusual,** not just the usual. "What happens when this goes wrong?" often reveals the real task.
- **Collect artifacts:** checklists, templates, spreadsheets, sticky notes. They are fossils of the process.

Several people doing the same task will often do it differently. That variation is data.

### 3. Break the Goal Into Subgoals

Decompose into three to seven main subgoals, a size people can hold in mind. Name each with a verb phrase.

### 4. Decompose Further Where It Matters

Take each subgoal down a level, and continue only where the detail is useful. Stop when further breakdown would not change a design decision, when the step is trivially simple, or when the step is outside your control.

### 5. Add Plans

A plan states the order and conditions under which subgoals happen: do them in sequence, choose one of several, repeat until a condition is true, do these in any order. Plans capture the logic that a flat list of steps hides.

### 6. Annotate

For each step, note what matters:

- **Information needed** to perform it.
- **Decisions** made and how.
- **Tools and inputs** used.
- **Triggers and dependencies.**
- **Errors** that occur and how they are recovered.
- **Frequency and importance.**
- **Pain points.**

### 7. Check It

Walk the analysis back to the people who do the work. Does it match what they do? What did you miss?

## An Example

Take the goal "Publish a first version of my site" for someone using a theme editor.

\`\`\`text
0. Publish a first version of my site
   Plan 0: do 1, then 2, then 3 and 4 in either order, then 5.

   1. Choose a starting point
      1.1 Browse starter themes
      1.2 Preview one or two
      1.3 Pick one
   2. Make it theirs
      2.1 Edit text and images
      2.2 Adjust colors and fonts
      2.3 Reorder or remove sections
   3. Check it works
      3.1 Preview on desktop
      3.2 Preview on a phone
      3.3 Check links and forms
   4. Set up the basics
      4.1 Add a site name and favicon
      4.2 Add a contact method
   5. Make it live
      5.1 Review what will change
      5.2 Publish
      5.3 Confirm it is visible
\`\`\`

Even this small breakdown generates design questions. In step 1.2, how many previews do people typically open before choosing, and can they compare? In 3.2, how do people check mobile if they have no phone nearby? In 5.1, what do they need to see to feel safe publishing? In 5.3, does the product tell them that the site is live and give them the link, or leave them to hunt?

Each of those is a testable decision grounded in the structure of the task.

## Find the Design Opportunities

Once you have the breakdown, read it with a set of questions.

- **Which steps are unnecessary?** Some exist because of past constraints. Can the system do them?
- **Which steps are repetitive?** Candidates for automation, defaults or bulk actions.
- **Where does the person need information they do not have?** Surface it, or prefetch it.
- **Where do they switch tools or contexts?** Every switch is a cost and a place to lose work.
- **Where do errors occur or cost the most?** Add prevention, confirmation or undo in proportion.
- **Where is expertise needed?** Decide whether to teach, guide or hide the complexity.
- **Which steps are rare but critical?** They need clarity, not speed.
- **Where is the person waiting?** Waiting needs progress and permission to leave.

For AI-assisted work, add: **which steps could the agent do, which need human judgment, and which need human approval?** The task breakdown is the natural place to draw that line deliberately rather than by accident.

## From Analysis to Design

The result feeds directly into other artifacts.

- **Flows:** the hierarchy and plans become the skeleton of user flows.
- **Information architecture:** the vocabulary people use for steps and objects informs labels and structure.
- **Interface priority:** frequent and critical steps get prominence.
- **Defaults and shortcuts:** repeated sequences suggest what to automate.
- **Test tasks:** each subgoal can become a scenario.
- **Requirements:** needs identified at each step become acceptance criteria.

Compare the current-state analysis with a proposed one. Count steps, switches and decisions. If your redesign has more of them, you have a problem even if the screens look cleaner.

## Task Analysis and Journey Mapping

They are neighbors with different jobs. A journey map spans a whole relationship over time and emphasizes experience and emotion. A task analysis zooms in on one goal and emphasizes structure, knowledge and action. Use a journey map to find which tasks matter. Use a task analysis to design them.

## Common Mistakes

- **Analyzing the system, not the person.** Describing screens instead of goals.
- **Too much detail, too early.** Descend only where it informs a decision.
- **Only the happy path.** The exceptions are half the task.
- **Skipping observation.** What people say they do and what they do differ.
- **One-size-fits-all.** Novices and experts do the same task differently. Capture both.
- **A beautiful diagram nobody uses.** Tie it to decisions.

## A Short Recipe

1. Pick one goal that matters, in the person's words.
2. Watch three to five people do it. Take notes without interrupting.
3. Draft the hierarchy and the plans.
4. Annotate pain, errors, information needs and decisions.
5. Validate with participants.
6. List the five biggest opportunities and the evidence for each.
7. Turn them into design hypotheses and test tasks.

When you have done this once, the difference in what you notice is hard to unlearn.
`});function _f(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,``).trim().replace(/\s+/g,`-`)}function vf(e){let t=e.trim();return t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`)?t.slice(1,-1):t}function yf(e){if(!e)return`Nov 14, 2026`;let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!t)return e;let n=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],r=t[1],i=Math.max(0,Math.min(11,parseInt(t[2],10)-1)),a=parseInt(t[3],10);return`${n[i]} ${a}, ${r}`}function bf(e){let t=e.replace(/\r\n/g,`
`);if(!t.startsWith(`---
`))return{meta:{},nested:{},related:[],body:t};let n=t.indexOf(`
---
`,4);if(n===-1)return{meta:{},nested:{},related:[],body:t};let r=t.slice(4,n).split(`
`),i=t.slice(n+5).trim(),a={},o={},s=[],c=null;for(let e of r){if(!e.trim())continue;if(e.startsWith(`  `)&&c){let t=e.trim().match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);t&&(o[c]||(o[c]={}),o[c][t[1]]=vf(t[2]));continue}c=null;let t=e.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);if(!t)continue;let n=t[1],r=t[2].trim();r?n===`related`&&r.startsWith(`[`)&&r.endsWith(`]`)?s=r.slice(1,-1).split(`,`).map(e=>vf(e)).filter(Boolean):a[n]=vf(r):(c=n,o[n]={})}return{meta:a,nested:o,related:s,body:i}}function xf(e){let t=e.trim().match(/^::media\{(.+)\}$/);if(!t)return null;let n=t[1],r={},i=/([a-zA-Z0-9_-]+)="([^"]*)"/g,a;for(;(a=i.exec(n))!==null;)r[a[1]]=a[2];return{type:`media`,mediaKey:r.key||``,alt:r.alt||``,caption:r.caption,ratio:r.ratio}}function Sf(e){return e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim())}function Cf(e){let t=e.split(`
`),n=[],r=0;for(;r<t.length;){let e=t[r].trim();if(!e){r++;continue}if(e.startsWith("```")){let i=e.slice(3).trim()||`text`,a=[];for(r++;r<t.length&&!t[r].trim().startsWith("```");)a.push(t[r]),r++;r++,i===`mermaid`?n.push({type:`mermaid`,chart:a.join(`
`)}):n.push({type:`code`,language:i,content:a.join(`
`)});continue}if(e.startsWith(`::media{`)){let t=xf(e);t&&n.push(t),r++;continue}if(e.startsWith(`### `)){let t=e.slice(4).trim();n.push({type:`heading`,level:3,text:t,id:_f(t)}),r++;continue}if(e.startsWith(`## `)){let t=e.slice(3).trim();n.push({type:`heading`,level:2,text:t,id:_f(t)}),r++;continue}if(e.startsWith(`>`)){let e=[];for(;r<t.length&&t[r].trim().startsWith(`>`);)e.push(t[r].trim().replace(/^>\s?/,``)),r++;n.push({type:`blockquote`,lines:e});continue}if(e.startsWith(`|`)&&r+1<t.length&&/^\|?[\s:-]+\|/.test(t[r+1].trim())){let i=Sf(e);r+=2;let a=[];for(;r<t.length&&t[r].trim().startsWith(`|`);)a.push(Sf(t[r])),r++;n.push({type:`table`,headers:i,rows:a});continue}if(/^[-*]\s+/.test(e)){let e=[];for(;r<t.length&&/^[-*]\s+/.test(t[r].trim());)e.push(t[r].trim().replace(/^[-*]\s+/,``)),r++;n.push({type:`list`,ordered:!1,items:e});continue}if(/^\d+\.\s+/.test(e)){let e=[];for(;r<t.length&&/^\d+\.\s+/.test(t[r].trim());)e.push(t[r].trim().replace(/^\d+\.\s+/,``)),r++;n.push({type:`list`,ordered:!0,items:e});continue}let i=[e];for(r++;r<t.length;){let e=t[r].trim();if(!e||e.startsWith(`#`)||e.startsWith("```")||e.startsWith(`::media{`)||e.startsWith(`>`)||e.startsWith(`|`)||/^[-*]\s+/.test(e)||/^\d+\.\s+/.test(e))break;i.push(e),r++}n.push({type:`paragraph`,text:i.join(` `)})}return n}function wf(e){return[0,2,6,7].includes(e)?`process`:[1,3,4,5].includes(e)?`research`:[8,9,10,13].includes(e)?`craft`:`reference`}function Tf(e,t){let n=[`UI/UX Guides`];return t===`process`&&n.push(`UX Strategy`),t===`research`&&n.push(`UX Research`),t===`craft`&&n.push(`Product Craft`),t===`reference`&&n.push(`UX Reference`),e===0&&n.push(`2026 Working Guide`),e===2&&n.push(`Agentic UI`),e===4&&n.push(`Journey Mapping`),n}var Ef=Object.values(gf).map(e=>{let{meta:t,nested:n,related:r,body:i}=bf(e),a=t.slug||`ux-guide`,o=parseInt(t.chapter??`0`,10),s=Cf(i),c=i.split(/\s+/).filter(Boolean).length,l=Math.max(4,Math.round(c/215)),u=wf(o);return{slug:a,canonicalPath:t.route||(a===`ux-guide`?`/blog/ux-guide`:`/blog/ux-guide/${a}`),title:t.title||a,excerpt:t.dek||``,coverKey:n.cover?.key||`ux-guide/${a}-cover`,coverAlt:n.cover?.alt||t.title||a,guideCardKey:n.guideCard?.key,chapterNumber:Number.isNaN(o)?0:o,date:yf(t.created),updatedDate:yf(t.updated),year:(t.created||`2026`).slice(0,4),readTime:`${l} min read`,category:`ui-ux`,categoryLabel:`UI/UX Guides`,isGuide:o===0,tags:Tf(o,u),relatedSlugs:r,topicGroup:u,blocks:s}}).sort((e,t)=>e.chapterNumber-t.chapterNumber);function Df(e){return Ef.map(t=>({id:`ux-${t.chapterNumber}-${t.slug}`,slug:t.slug,canonicalPath:t.canonicalPath,title:t.title,excerpt:t.excerpt,coverImageRef:t.coverKey,date:t.date,updatedDate:t.updatedDate,year:t.year,readTime:t.readTime,category:t.category,categoryLabel:t.categoryLabel,isGuide:t.isGuide,chapterNumber:t.chapterNumber,guideSeries:`ux-guide`,topicGroup:t.topicGroup,relatedSlugs:t.relatedSlugs,author:e,tags:t.tags,sections:[],markdownBlocks:t.blocks}))}var Of=Ru(),kf={name:Of.author.name,avatarRef:Of.author.avatarRef,portraitRef:Of.author.portraitRef,bio:Of.author.bio,socials:Of.contact.socials},Af=[`media://cover-structured-decisions`,`media://cover-asbd-hero`,`media://cover-infra-cookbooks`,`media://cover-native-runtime`,`media://cover-ux-principles`,`media://cover-cms-platform`,`media://author-portrait`],jf=[{id:`1`,slug:`structured-decisions`,canonicalPath:`/blog/structured-decisions`,title:`Stop Making LLMs Improvise Everything: How AgentSam Uses Typed Decision Primitives`,excerpt:`Pairing generative AI with Systematic Autonomous Machinery (SAM)—a fast, deterministic, typed decision layer for routing, scoring, confidence checks, and policy gates.`,coverImageRef:`media://cover-structured-decisions`,date:`Nov 10, 2026`,updatedDate:`Nov 12, 2026`,year:`2026`,readTime:`10 min read`,category:`ai`,categoryLabel:`AI`,isGuide:!0,author:kf,tags:[`SAM Architecture`,`AgentSam`,`TypeScript`],sections:[{paragraphs:[`Large language models are extraordinary at open-ended reasoning, code generation, tool use, and explaining complex bugs. What they should not be doing is improvising routine routing, risk scoring, or policy enforcement in free-form prose.`,`Asking an LLM to repeatedly guess which terminal lane to use or whether a deployment is safe introduces latency, token waste, and unpredictability. AgentSam solves this by pairing generative AI with Systematic Autonomous Machinery (SAM)—a fast, deterministic, typed decision layer that handles routing, scoring, confidence checks, and policy gates before software takes action.`],callout:{label:`The Core Principle`,text:`Use the LLM for open-ended reasoning and generation; use typed decision primitives whenever the answer must fit a known shape and directly control system behavior.`},code:{language:`plaintext`,label:`Execution Architecture`,content:`user / repo / runtime / tool state
                 │
                 ▼
         AgentSam context
                 │
       ┌─────────┴─────────┐
       │                   │
       ▼                   ▼
 LLM reasoning       typed decision
 • explain           • choose
 • plan              • score
 • generate          • gate
 • edit              • rank
 • call tools        • confidence
       │                   │
       └─────────┬─────────┘
                 ▼
            action / tool
                 │
                 ▼
     terminal · skill · model
     retrieval · workflow · deploy`}},{heading:`1. This Is Not Another Chat Model`,paragraphs:[`The structured decision layer is never responsible for holding a conversation, scaffolding a React component, or authoring a database migration. Those remain pure LLM jobs.`,`Instead, its responsibility is tightly bounded: receive an explicit machine state, evaluate a constrained question, and return a typed result that software can execute immediately without parsing prose.`],table:{headers:[`Engineering Question`,`Execution Layer`,`Why`],rows:[[`"Explain why this terminal session failed."`,`LLM`,`Requires open-ended synthesis and human-readable diagnosis.`],[`"Which execution lane should handle this command?"`,`choice primitive`,`Finite set of known runtime targets (local, remote, sandbox).`],[`"How risky is this deployment?"`,`score primitive`,`Maps observable repo and test metrics onto a bounded numeric rubric.`],[`"Is confidence high enough to act without asking?"`,`gate primitive`,`Converts risk, reversibility, and policy into an explicit permission check.`],[`"Rewrite this package boundary cleanly."`,`LLM + Tools`,`Requires multi-file code generation and architectural judgment.`]]}},{heading:`2. Where Typed Decisions Fit Inside AgentSam`,paragraphs:[`Wherever possible outputs are constrained to a finite set or numeric rubric, AgentSam replaces open-ended generation with structured evaluation:`],bullets:[{label:`Skills`,text:`Select the exact skill, slash route, or workflow from a known registry.`},{label:`Terminal`,text:`Choose between local, remote, or sandbox execution based on observed machine health.`},{label:`Retrieval`,text:`Route queries to memory, AST-RAG, documentation, repository indexes, or skip retrieval altogether.`},{label:`Models`,text:`Route tasks across fast, standard, heavy reasoning, or local offline models.`},{label:`Deploy`,text:`Score release readiness and enforce verification or human approval gates.`},{label:`Planning`,text:`Rank candidate actions during Goal-Oriented Action Planning (GOAP) or utility-based execution.`}]},{heading:`3. The Five Decision Primitives`,subheading:`Primitive 1: State`,paragraphs:[`Decisions must be grounded in explicit, machine-readable facts rather than hidden prompt assumptions. A state object combines repository status, runtime health, user intent, tool availability, cost budgets, and security policies.`],code:{language:`typescript`,label:`decision-state.ts`,content:`const state = {
  intent: "inspect_repository",
  repo: { dirty: true, tests: "unknown", packageCount: 31 },
  terminal: { local: "healthy", remote: "healthy", sandbox: "available" },
  policy: { allowProductionWrite: false }
};`}},{subheading:`Primitive 2: Choice & Primitive 3: Score`,paragraphs:[`A choice selects one winner from a finite candidate list, while a score maps current state onto a normalized 0..1 rubric so competing actions can be compared mathematically.`],code:{language:`typescript`,label:`utility.ts`,content:`type ActionScore = {
  action: string;
  utility: number;       // 0..1
  risk: number;          // 0..1
  cost: number;          // 0..1
  reversibility: number; // 0..1
};`}},{subheading:`Primitive 4: Gate & Primitive 5: Confidence`,paragraphs:[`A gate turns a structured assessment into explicit permission to proceed, while confidence signals whether the agent should execute immediately, gather one more check, or escalate to the operator.`],table:{headers:[`Confidence Level`,`System Behavior`],rows:[[`High`,`Proceed automatically when policy allows; record the decision and supporting evidence as a receipt.`],[`Medium`,`Gather one additional piece of evidence, run a fast verification check, or compare top alternatives.`],[`Low`,`Escalate to the user, defer execution, or route the problem to a stronger reasoning model.`]]}},{heading:`4. Eight Design Rules for Structured Systems`,bullets:[{label:`01. Constrain the output space`,text:`Use typed decisions only when legal outputs are genuinely bounded.`},{label:`02. Keep state explicit`,text:`Never bury critical runtime facts inside sprawling system prompts.`},{label:`03. Separate confidence from permission`,text:`High confidence never grants authority on its own—policy gates do.`},{label:`04. Prefer deterministic checks`,text:`Never use learned judgment when a direct test or static check exists.`},{label:`05. Reserve LLMs for synthesis`,text:`Keep generative models focused on code creation, explanation, and complex reasoning.`},{label:`06. Record decisions as receipts`,text:`Every candidate set, chosen result, score, policy, and evidence source must remain inspectable.`},{label:`07. Escalate uncertainty`,text:`Low confidence should automatically trigger evidence gathering, model escalation, or user input.`},{label:`08. Decouple control from presentation`,text:`CLI, Studio, and mobile interfaces can render the exact same underlying decision receipt differently.`}],imageRef:`media://cover-asbd-hero`}]},{id:`2`,slug:`infrastructure-cookbooks`,canonicalPath:`/blog/infrastructure-cookbooks`,title:`Beyond Brute-Force Prompting: 9 Engineering Drills to Prove Your Agent Understands Large Codebases`,excerpt:`A command exiting with code 0 does not prove an autonomous coding agent did good work. Nine hands-on drills and a 10-point scorecard to benchmark precision and restraint.`,coverImageRef:`media://cover-infra-cookbooks`,date:`Nov 6, 2026`,updatedDate:`Nov 8, 2026`,year:`2026`,readTime:`12 min read`,category:`ai`,categoryLabel:`AI`,isGuide:!0,author:kf,tags:[`SAM Architecture`,`Benchmarking`,`Infrastructure`],sections:[{paragraphs:[`A command completing with exit code 0 does not prove an autonomous coding agent did good work. In complex repositories, brute-force LLM exploration burns massive token budgets, modifies unrelated files, and introduces subtle boundary regressions.`,`True machine intelligence is measured by restraint and precision: Did the system identify the smallest affected code surface before editing, preserve unrelated work, and back every change with verifiable proof? These 9 hands-on drills benchmark AgentSam’s machine layer across real infrastructure tasks.`],callout:{label:`The Golden Rule of SAM Testing`,text:`Never judge success by whether a command ran. Judge success by whether SAM changed the intended state while leaving unrelated authority untouched.`},code:{language:`plaintext`,label:`SAM Perception & Receipt Pipeline`,content:`human goal
   │
   ▼
SAM perception
   ├─ repository state
   ├─ Merkle delta
   ├─ AST / dependency graph
   ├─ indexed retrieval
   └─ runtime health
   │
   ▼
plan / execute / verify
   │
   ▼
work receipt
   ├─ predicted vs. actual impact
   ├─ focused tests & verification
   └─ remaining uncertainty`}},{heading:`Drills 01–04: Baseline, Merkle Deltas, Blast Radius & Retrieval`,paragraphs:[`Before editing a line of code, SAM captures a reproducible repository baseline, proves Merkle diffs isolate modified subtrees without redundant indexing, and routes queries to the highest-signal index.`],code:{language:`bash`,label:`Baseline & Merkle Snapshot Drills`,content:`git status --short
git rev-parse HEAD

agentsam inspect

agentsam merkle snapshot . \\
  --semantic \\
  --out /tmp/sam-before.json

agentsam index plan --cwd . --json
agentsam index run --cwd . --json
agentsam search "terminal enrollment authentication" \\
  --cwd . --top-k 8 --token-budget 4000`},table:{headers:[`Question Category`,`Highest-Signal Retrieval Mode`],rows:[[`Exact symbol, function, or import`,`AST / Structural`],[`Downstream dependency or reachability`,`Dependency Graph`],[`High-level architectural concept`,`Semantic Embeddings`],[`Past architectural decision or context`,`Memory / Work History`]]}},{heading:`Drills 05–09 & The 10-Point Benchmark Scorecard`,bullets:[{label:`Drill 05 — Deterministic GOAP Planning`,text:"Identical repository states yield identical plans, costs, and preconditions via `agentsam brand plan --goap --json`."},{label:`Drill 06 — Package-Release Torture Test`,text:`Single-point failures in exports, pack checks, or boundary checks are isolated directly by native repo scripts.`},{label:`Drill 07 — Security & Trust-Boundary Drill`,text:"Combines AST and Merkle evidence (`agentsam security scan --path . --json`) to catch client/server leaks early."},{label:`Drill 08 — Local vs. Remote Parity`,text:`Verifies git HEAD, node version, and working tree status before treating execution lanes as interchangeable.`},{label:`Drill 09 — Failure-Recovery Loop`,text:`Targeted stage classification and evidence extraction rather than speculative multi-file rewrites.`}],table:{headers:[`Dimension`,`Core Evaluation Question`],rows:[[`1. Perception`,`Did SAM identify the exact authority surface before editing?`],[`2. Precision`,`How little irrelevant code did it inspect?`],[`3. Incrementality`,`Did it reuse prior Merkle/index evidence instead of repeating work?`],[`4. Planning`,`Did it compute a minimal, valid execution path?`],[`5. Execution`,`Did it select the optimal terminal lane and toolset?`],[`6. Recovery`,`Did it narrow failures methodically before modifying code?`],[`7. Verification`,`Did it prove the final state with focused tests and diffs?`],[`8. Scope Control`,`Did actual modified files match the predicted blast radius?`],[`9. Cost`,`Total tool calls, model tokens, embeddings, and wall-clock time.`],[`10. Friction`,`How little internal SAM jargon did the human operator need to know?`]]},callout:{label:`The Ultimate Product Test`,text:`A technically brilliant primitive that forces users to memorize twelve CLI flags has not finished becoming a product. Great UX hides Merkle graphs, AST walkers, and GOAP solvers behind clear progress states—exposing the underlying machinery only when the operator explicitly asks /why.`}}]},{id:`3`,slug:`native-runtime`,canonicalPath:`/blog/native-runtime`,title:`Go Where Machine Work Benefits From Go: Inside AgentSam’s Hybrid Edge-to-Local Runtime`,excerpt:`TypeScript remains the single protocol contract authority while a native Go runtime executes high-frequency SHA-256 hashing, static inspections, and persistent daemon work.`,coverImageRef:`media://cover-native-runtime`,date:`Nov 2, 2026`,updatedDate:`Nov 4, 2026`,year:`2026`,readTime:`7 min read`,category:`runtime`,categoryLabel:`Edge & Runtime`,author:kf,tags:[`Edge & Runtime`,`Go`,`Cloudflare Workers`],sections:[{paragraphs:[`TypeScript excels at protocol schemas, developer ergonomics, and high-level agent orchestration. However, when an autonomous system needs to compute deterministic SHA-256 hashes across thousands of files, run high-frequency static inspections, or manage persistent local daemons, raw systems performance matters.`,`AgentSam bridges both worlds through a clean architectural boundary: the TypeScript protocol layer remains the single contract authority, while a native Go runtime executes performance-critical machine work.`],callout:{label:`Current Production Shape`,text:`Cloudflare Worker edge adapter → native Linux Go Container—with the exact same runtime core engineered to power the local agentsamd user-machine daemon.`}},{heading:`1. What the Native Go Runtime Delivers Today`,bullets:[{label:`System Introspection`,text:`Reports real-time runtime health, cryptographic source identity, environment metadata, and supported capabilities.`},{label:`Deterministic SHA-256 Hashing`,text:`Computes fast, repeatable content digests across files and workspace artifacts.`},{label:`Deterministic Static Inspection`,text:`Performs rapid, zero-ambiguity structural checks on repository files without spinning up heavy language servers.`},{label:`Unified Error Contracts`,text:`Returns structured failures conforming strictly to the AgentSam ErrorEnvelope schema so upstream TypeScript orchestrators handle errors predictably.`}]},{heading:`2. Three Deployment & Ownership Modes, One Shared Contract`,bullets:[{label:`Mode 1 — Local Native Development`,text:`Compile and run directly on bare metal with an automated handshake verifying source identity matches the active repository.`},{label:`Mode 2 — Cloudflare Edge Development`,text:`Wrangler runs the TypeScript Worker edge adapter bound to the GO_RUNTIME Container for pre-flight integration verification.`},{label:`Mode 3 — Hosted & Self-Hosting`,text:`Standard users consume the managed hosted service seamlessly; advanced self-hosters deploy explicitly with dry-run checks.`}],code:{language:`bash`,label:`Self-Hosted Edge Deployment`,content:`agentsam go --cloudflare agentsam-go-worker --dry-run --account <account-id>`}},{heading:`3. What Actually Counts as Shipped: The Production Receipt Standard`,paragraphs:[`In AgentSam’s release architecture, a passing build, a valid Dockerfile, or a deployment script does not count as proof of deployment. A production release is accepted only after the externally reachable endpoint reports healthy and both the edge Worker and the underlying native Go binary confirm matching source identities.`],bullets:[{label:`Source Provenance`,text:`Git commit or npm package identity paired with a deterministic source digest.`},{label:`Binary Integrity`,text:`Native compiled Go binary SHA-256 checksum.`},{label:`Container Hardening`,text:`linux/amd64 non-root container execution verification.`},{label:`Cloudflare Identity`,text:`Explicit Cloudflare account ID, deployment ID, and Worker version ID.`},{label:`Live Verification`,text:`Deployed public URL backed by timestamped health and capability endpoint probes.`}],quote:{quote:`agentsamd will embed this exact Go core directly on user machines for ultra-low-latency local execution, while the hosted Go Worker continues operating as a cleanly isolated cloud service.`}}]},{id:`4`,slug:`essential-ux-design-principles`,canonicalPath:`/blog/essential-ux-design-principles`,title:`The 7 Essential UX Design Principles: A Master Guide for Developers & Designers`,excerpt:`A canonical reference covering User-Centricity, Consistency, Hierarchy, Context, User Control, Accessibility, and Usability—plus the editorial structure for dual human and AI audiences.`,coverImageRef:`media://cover-ux-principles`,date:`Oct 28, 2026`,updatedDate:`Nov 1, 2026`,year:`2026`,readTime:`9 min read`,category:`ui-ux`,categoryLabel:`UI/UX Guides`,isGuide:!0,author:kf,tags:[`UI/UX Guides`,`Hierarchy`,`Accessibility`],sections:[{paragraphs:[`Mastering user experience (UX) design comes down to a core set of universal principles. Whether you are architecting a high-density mobile app, designing a dashboard, or planning an AI-powered assistant, these foundational rules ensure you put your end-users first.`],bullets:[{label:`1. User-Centricity`,text:`Put real user needs and behaviors ahead of internal assumptions. Like Google Docs' AI writing assistant, surface suggestions transparently in context and require explicit user action to accept or refine.`},{label:`2. Consistency`,text:`Reduce cognitive load across screens and related tools. Shared visual language across Google Workspace lets users transfer knowledge effortlessly without relearning patterns.`},{label:`3. Hierarchy`,text:`Guide the eye from primary actions to progressive disclosure—just as Stripe keeps high-level user goals prominent while tucking granular developer specs deeper down.`},{label:`4. Context`,text:`Adapt dynamically to environment, lighting, and device limits—like Google Maps shifting between high-contrast driving blocks and intricate walking layouts.`},{label:`5. User Control`,text:`Provide clear visibility and frictionless emergency exits to undo mistakes or override automated choices.`},{label:`6. Accessibility`,text:`Design high-contrast palettes, scalable typography, and keyboard tab-orders from day one—never treat WCAG compliance as a post-launch patch.`},{label:`7. Usability`,text:`Usability always trumps decoration across five core pillars: Learnability, Efficiency, Memorability, Error Recovery, and Satisfaction.`}]},{heading:`AI & Emerging Tech: Do These Principles Still Apply?`,paragraphs:[`Yes. As artificial intelligence, multimodal interfaces, and automated workflows alter the digital landscape, these 7 core principles become even more critical. When AI generates content dynamically behind the scenes, leaning heavily on Hierarchy (what to show first), User Control (overriding automation), and Consistency (predictable UI patterns) keeps users feeling empowered rather than replaced.`],callout:{label:`The Anatomy of an Editorial Design Article`,text:`Start with a high-impact editorial hook, break ideas into modular numbered blocks (3–4 lines max per paragraph), pair every section with real-world product proof, and close with an actionable Golden Rule.`}},{heading:`Writing for Dual Audiences: Humans & AI Agents`,paragraphs:[`Structured tutorials work brilliantly for both human readers and modern AI collaborators because they are scannable and token-friendly. Use crisp Markdown headings, explicit bullet lists, bolded terminology (Cognitive Load, Visual Hierarchy), and clear callout rules so every published essay doubles as canonical architectural context.`],galleryRefs:[`media://cover-ux-principles`,`media://cover-cms-platform`,`media://cover-structured-decisions`]}]},{id:`5`,slug:`asbd-design-system`,canonicalPath:`/blog/asbd-design-system`,title:`ASBD Dual-Mode Color Spec & AgentSam Learn Hero Architecture`,excerpt:`Calibrating WCAG AA-compliant violet accents across light and dark surfaces, syncing user appearance preferences with zero flash, and composing an asymmetric split media hero.`,coverImageRef:`media://cover-asbd-hero`,date:`Oct 22, 2026`,updatedDate:`Oct 25, 2026`,year:`2026`,readTime:`8 min read`,category:`design-systems`,categoryLabel:`Design Systems`,author:kf,tags:[`Design Systems`,`CSS Tokens`,`Hero Spec`],sections:[{paragraphs:[`The ASBD theme system calibrates light-mode surface tokens (#F8FAFC / #ECEFF4) and deep obsidian dark surfaces (#050507 / #0D0D11) with WCAG AA-compliant violet accents (6.1:1 contrast ratio on light surfaces, 7.2:1 on dark surfaces), while keeping global header and footer chrome invariant.`],table:{headers:[`Token Variable`,`Light Mode`,`Dark Mode`,`Component Usage`],rows:[[`--asbd-bg`,`#F8FAFC`,`#050507`,`Primary canvas background & left nav rail`],[`--asbd-surface`,`#ECEFF4`,`#0D0D11`,`Code blocks, command rows & inset cards`],[`--asbd-border`,`#D5DCE6`,`#222229`,`1px column dividers, card outlines & rules`],[`--asbd-accent`,`#6842FF`,`#9D86E9`,`Eyebrows, active links, breadcrumbs & focus rings`],[`--asbd-text-primary`,`#0F172A`,`#FFFFFF`,`H1–H3 headings, active breadcrumbs & titles`],[`--asbd-text-body`,`#334155`,`#D4D4DA`,`Standard paragraph prose & list items`]]}},{heading:`Zero-Flash Appearance Sync`,paragraphs:[`Bind colorMode ("system" | "light" | "dark") to the authenticated user's Appearance Settings record and execute a synchronous <head> boot script before stylesheets render so no session flashes between themes on load.`],code:{language:`typescript`,label:`user-preferences.ts`,content:`export type ColorModePreference = "system" | "light" | "dark";

const STORAGE_KEY = "ia.appearance.colorMode";

export function applyUserColorMode(mode: ColorModePreference): void {
  const root = document.documentElement;
  localStorage.setItem(STORAGE_KEY, mode);

  if (mode === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", mode);
  }
}`}},{heading:`AgentSam Learn: Asymmetric Split-Composition Media Hero`,paragraphs:[`On AgentSam Learn, the hero pairs an art-directed <picture> backdrop of an exploded 3D mechanical assembly composed on the right 60% of the frame with a left-to-right midnight-navy legibility scrim (#060A14 at 94% down to 12%) and tight stacked display typography (Design. / Create. / Ship.) with two-tone periods.`],bullets:[{label:`Primary Button (Open Workbench)`,text:`Cool metallic slate-silver (#9AA6B6) with deep obsidian ink (#090D16) and 10px soft-squircle corners.`},{label:`Secondary Button (Browse modules)`,text:`Translucent smoked glass (rgba(15, 23, 42, 0.55)) with blur(8px) and hairline slate border.`},{label:`Sub-Hero Path Dock`,text:`5-item horizontal row (Themes, SDK, Knowledge, CAD, Cloud) rendered as 42px × 42px rounded-square glass tiles.`}],imageRef:`media://cover-asbd-hero`}]},{id:`6`,slug:`cms-footer-and-asset-architecture`,canonicalPath:`/blog/cms-footer-and-asset-architecture`,title:`Multi-Domain CMS Sections: Separating Platform Chrome from Merchant Themes`,excerpt:`Don't standardize HTML layouts across themes—standardize the CMS data contract and logical media_asset IDs so every domain can re-theme freely with zero hardcoded URLs.`,coverImageRef:`media://cover-cms-platform`,date:`Oct 14, 2026`,updatedDate:`Oct 18, 2026`,year:`2026`,readTime:`6 min read`,category:`platform`,categoryLabel:`CMS & Themes`,author:kf,tags:[`CMS & Themes`,`IAPJ`,`Architecture`],sections:[{paragraphs:[`To support many domains and custom themes (beautifultheme1, iasf, iapj) inside one CMS without locking every storefront into a single layout, separate your architecture into two layers: Platform Chrome and Merchant Theme Sections.`],table:{headers:[`Layer`,`Who Uses It`,`Layout Freedom`,`How It Is Controlled`],rows:[[`1. Platform Shell (.ia-universal-footer)`,`Core InnerAnimalMedia & AgentSam domains`,`Standardized layout (CTA + Contact + 3 Link Groups)`,`Skinned per domain via --footer-* CSS custom properties.`],[`2. Theme Footer Sections (iapj, iasf, etc.)`,`Merchant stores & custom domain sites`,`100% custom HTML/CSS layout per theme`,`Driven by standardized footer.schema.json blocks and media IDs.`]]}},{heading:`Standardized CMS Footer Schema & Asset Reference Rules`,paragraphs:[`Themes must never bake raw CDN URLs or .glb filenames into JS bundles or TSX components. Every 3D scene, portrait, and cover image is declared via logical asset IDs resolved through the CMS media layer at runtime.`],code:{language:`json`,label:`footer.schema.json (excerpt)`,content:`{
  "section": "footer",
  "name": "Site Footer",
  "settings": [
    { "type": "color", "id": "bg", "label": "Background", "default": "#070709" },
    { "type": "color", "id": "accent", "label": "Accent", "default": "#7c5cff" },
    {
      "type": "media_asset",
      "id": "backdrop_glb",
      "label": "3D Scene (.glb)",
      "accept": ["model/gltf-binary"]
    }
  ]
}`},callout:{label:`The Zero-Hardcoded-URLs Standard`,text:`All media and navigation targets flow through site.manifest.json and resolveMedia(mediaRef), supporting window.__IA_MEDIA_MAP__ runtime injection without editing theme code.`}}]}],Mf=Df(kf);jf.push(...Mf);function Nf({isOpen:e,onClose:t}){let[n,r]=(0,d.useState)(``),i=a();(0,d.useEffect)(()=>(e?(document.body.style.overflow=`hidden`,r(``)):document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[e]),(0,d.useEffect)(()=>{let n=e=>{e.key===`Escape`&&t()};return e&&window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t]);let o=n.trim().toLowerCase(),c=o.length>1?jf.filter(e=>e.title.toLowerCase().includes(o)||e.excerpt.toLowerCase().includes(o)||e.categoryLabel.toLowerCase().includes(o)||e.tags.some(e=>e.toLowerCase().includes(o))):[];return(0,u.jsx)(mc,{children:e&&(0,u.jsxs)(uu.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},className:`fixed inset-0 z-[100] bg-[var(--iapj-surface-elevated)]/95 backdrop-blur-xl flex flex-col`,children:[(0,u.jsx)(`div`,{className:`flex justify-end p-6`,children:(0,u.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Close search`,className:`p-2 text-[var(--iapj-text-muted)] hover:text-[var(--iapj-text-primary)] transition-colors cursor-pointer`,children:(0,u.jsx)(Tu,{className:`h-7 w-7`})})}),(0,u.jsx)(`div`,{className:`flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-24`,children:(0,u.jsxs)(`div`,{className:`mx-auto max-w-3xl pt-8 sm:pt-12`,children:[(0,u.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),t(),i(o?`/search?q=${encodeURIComponent(n.trim())}`:`/search`)},className:`relative`,children:[(0,u.jsx)(Cu,{className:`absolute left-0 top-1/2 -translate-y-1/2 h-7 w-7 text-[var(--iapj-text-muted)]`}),(0,u.jsx)(`input`,{type:`text`,placeholder:`Search the journal, guides and media...`,value:n,onChange:e=>r(e.target.value),autoFocus:!0,className:`w-full bg-transparent border-b-2 border-[var(--iapj-border)] py-4 pl-11 pr-4 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--iapj-text-primary)] placeholder:text-[var(--iapj-text-muted)]/60 focus:border-[var(--iapj-border-strong)] focus:outline-none transition-colors`})]}),(0,u.jsx)(`div`,{className:`mt-4 flex justify-end`,children:(0,u.jsxs)(s,{to:o?`/search?q=${encodeURIComponent(n.trim())}`:`/search`,onClick:t,className:`inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-[var(--iapj-text-muted)] hover:text-[var(--iapj-text-primary)] transition-colors`,children:[(0,u.jsx)(`span`,{children:`Open full archive search`}),(0,u.jsx)(yu,{className:`h-3.5 w-3.5`})]})}),(0,u.jsxs)(`div`,{className:`mt-12 flex flex-col gap-8`,children:[o.length>1&&c.length===0&&(0,u.jsxs)(`p`,{className:`text-[var(--iapj-text-muted)] text-lg`,children:[`No entries found for “`,n,`”.`]}),c.map((e,n)=>(0,u.jsx)(uu.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:n*.04},className:`border-b border-[var(--iapj-border)] pb-6`,children:(0,u.jsxs)(s,{to:e.canonicalPath??`/blog/${e.slug}`,onClick:t,className:`group block`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-medium text-[var(--iapj-text-muted)] mb-2`,children:[(0,u.jsx)(`span`,{children:e.categoryLabel}),(0,u.jsx)(`span`,{"aria-hidden":`true`,children:`·`}),(0,u.jsx)(`span`,{children:e.date}),(0,u.jsx)(`span`,{"aria-hidden":`true`,children:`·`}),(0,u.jsx)(`span`,{className:`tabular-nums`,children:e.readTime})]}),(0,u.jsx)(`h3`,{className:`text-2xl font-semibold tracking-tight text-[var(--iapj-text-primary)] group-hover:text-[var(--iapj-link-hover)] transition-colors mb-2`,children:e.title}),(0,u.jsx)(`p`,{className:`text-[var(--iapj-text-body)] line-clamp-2 text-sm leading-relaxed`,children:e.excerpt})]})},e.id))]})]})})]})})}function Pf(e={}){return typeof document<`u`&&document.querySelector(`meta[name="iam-chrome"][content="external"]`)?null:(0,u.jsx)(Ff,{...e})}function Ff({brandLogoOverride:t}={}){let[n,r]=(0,d.useState)(!1),[i,a]=(0,d.useState)(!1),[o,c]=(0,d.useState)(!1),[l,f]=(0,d.useState)(!1),p=(0,d.useRef)(0),m=e(),h=Ru();return(0,d.useEffect)(()=>{let e=()=>{let e=window.scrollY;if(f(e>18),n||i){c(!1),p.current=e;return}let t=e-p.current;e<=72?c(!1):t>6?c(!0):t<-4&&c(!1),p.current=e};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[n,i]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`header`,{className:ff(`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`,o?`-translate-y-full opacity-0 pointer-events-none`:`translate-y-0 opacity-100`,l?`iapj-glass-header`:`bg-transparent border-b border-transparent`),children:(0,u.jsxs)(`div`,{className:`mx-auto flex h-20 max-w-[var(--iapj-container-max)] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8`,children:[(0,u.jsx)(pf,{surface:`auto`,override:t,className:`text-[var(--iapj-text-primary)]`,onClick:()=>window.scrollTo({top:0,behavior:`smooth`})}),(0,u.jsx)(`nav`,{className:`hidden md:flex items-center gap-7 text-sm font-medium text-[var(--iapj-text-body)]`,"aria-label":`Primary navigation`,children:h.navigation.topBar.map(e=>{let t=e.path===`/blog`?m.pathname===`/`||m.pathname===`/blog`||m.pathname.startsWith(`/blog/`):m.pathname.startsWith(e.path);return(0,u.jsx)(s,{to:e.path,className:ff(`whitespace-nowrap shrink-0 py-1 transition-colors border-b`,t?`text-[var(--iapj-text-primary)] border-[var(--iapj-border-strong)]`:`border-transparent hover:text-[var(--iapj-text-primary)]`),children:e.label},e.path)})}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[(0,u.jsx)(s,{to:h.navigation.headerCta.path,className:`whitespace-nowrap shrink-0 rounded-full bg-[var(--iapj-accent)] px-5 py-2 text-sm font-medium text-[var(--iapj-accent-contrast)] shadow-sm transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]`,children:h.navigation.headerCta.label}),(0,u.jsx)(`button`,{type:`button`,onClick:()=>r(!0),"aria-label":`Open menu`,className:`flex h-10 w-10 items-center justify-center rounded-full text-[var(--iapj-text-primary)] hover:bg-[var(--iapj-surface-subtle)] transition-colors cursor-pointer`,children:(0,u.jsxs)(`span`,{className:`flex flex-col gap-1.5 w-5`,"aria-hidden":`true`,children:[(0,u.jsx)(`span`,{className:`h-[1.5px] w-full bg-current block`}),(0,u.jsx)(`span`,{className:`h-[1.5px] w-full bg-current block`})]})})]})]})}),(0,u.jsx)(`div`,{className:`h-20`,"aria-hidden":`true`}),(0,u.jsx)(hf,{isOpen:n,onClose:()=>r(!1),brandLogoOverride:t,onOpenSearch:()=>{r(!1),a(!0)}}),(0,u.jsx)(Nf,{isOpen:i,onClose:()=>a(!1)})]})}var If=(0,d.lazy)(()=>c(()=>import(`./FooterBackdrop3D-D01W_VjD.js`).then(e=>({default:e.FooterBackdrop3D})),__vite__mapDeps([0,1,2])));function Lf(){let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let t=e.current;if(!t)return;if(!(`IntersectionObserver`in window)){n(!0);return}let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),r.disconnect())},{rootMargin:`480px 0px`});return r.observe(t),()=>r.disconnect()},[]),(0,u.jsx)(`div`,{ref:e,"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 overflow-hidden`,children:t?(0,u.jsx)(d.Suspense,{fallback:null,children:(0,u.jsx)(If,{})}):null})}function Rf({id:e}){switch(e){case`github`:return(0,u.jsx)(bu,{className:`h-4 w-4`,"aria-hidden":`true`});case`twitter`:return(0,u.jsx)(wu,{className:`h-4 w-4`,"aria-hidden":`true`});case`linkedin`:return(0,u.jsx)(Su,{className:`h-4 w-4`,"aria-hidden":`true`});default:return(0,u.jsx)(xu,{className:`h-4 w-4`,"aria-hidden":`true`})}}function zf(){let{brand:e,contact:t,navigation:n}=Ru();return(0,u.jsxs)(`footer`,{className:`relative overflow-hidden border-t border-[var(--iapj-footer-border)] bg-[var(--iapj-footer-bg)] text-[var(--iapj-footer-text)]`,children:[(0,u.jsx)(Lf,{}),(0,u.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[var(--iapj-container-max)] px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-24`,children:[(0,u.jsxs)(`div`,{className:`grid grid-cols-1 gap-14 lg:grid-cols-12`,children:[(0,u.jsx)(`div`,{className:`lg:col-span-5 flex flex-col justify-between gap-8`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h2`,{className:`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl`,children:t.heading}),(0,u.jsxs)(`div`,{className:`mt-6 flex flex-col gap-2`,children:[(0,u.jsx)(`a`,{href:Lu(t.emailRef),className:`w-fit text-xl font-normal underline underline-offset-8 decoration-1 hover:opacity-75 transition-opacity sm:text-2xl`,children:t.email}),(0,u.jsx)(`p`,{className:`mt-2 text-base text-[var(--iapj-footer-muted)]`,children:t.secondaryLine})]})]})}),(0,u.jsxs)(`div`,{className:`lg:col-span-7 flex flex-col gap-14`,children:[(0,u.jsxs)(`div`,{className:`grid grid-cols-2 gap-8 max-w-md`,children:[(0,u.jsx)(`nav`,{className:`flex flex-col gap-3.5`,"aria-label":`Primary footer navigation`,children:n.footerPrimary.map(e=>(0,u.jsx)(s,{to:e.path,className:`w-fit text-lg font-medium underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity`,children:e.label},e.path))}),(0,u.jsx)(`nav`,{className:`flex flex-col gap-3.5`,"aria-label":`Category footer navigation`,children:n.footerSecondary.map(e=>(0,u.jsx)(s,{to:e.path,className:`w-fit text-lg font-medium underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity`,children:e.label},e.path))})]}),(0,u.jsx)(`div`,{className:`grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3`,children:n.footerPillars.map(e=>(0,u.jsxs)(s,{to:e.path,className:`group flex flex-col gap-1.5 w-fit`,children:[(0,u.jsx)(`span`,{className:`text-sm font-semibold tracking-tight group-hover:opacity-75 transition-opacity`,children:e.title}),(0,u.jsxs)(`span`,{className:`text-xs text-[var(--iapj-footer-muted)] underline underline-offset-2 decoration-1 leading-relaxed`,children:[e.line1,(0,u.jsx)(`br`,{}),e.line2]})]},e.title))})]})]}),(0,u.jsxs)(`div`,{className:`mt-20 flex flex-col items-start justify-between gap-6 border-t border-[var(--iapj-footer-border)] pt-8 sm:flex-row sm:items-center`,children:[t.socials.length>0?(0,u.jsx)(`div`,{className:`flex items-center gap-5`,children:t.socials.map(e=>(0,u.jsx)(`a`,{href:Lu(e.urlRef),target:`_blank`,rel:`noreferrer`,"aria-label":e.label,className:`text-[var(--iapj-footer-text)] hover:opacity-70 transition-opacity`,children:(0,u.jsx)(Rf,{id:e.id})},e.id))}):null,(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--iapj-footer-muted)]`,children:[(0,u.jsxs)(`span`,{children:[`© 2016–`,new Date().getFullYear(),` `,e.copyrightHolder]}),n.legalLinks.map(e=>(0,u.jsx)(s,{to:e.path,className:`underline underline-offset-4 hover:text-[var(--iapj-footer-text)] transition-colors`,children:e.label},e.label))]})]})]})]})}export{D as A,qn as C,F as D,Te as E,p as F,y as M,v as N,I as O,m as P,Kn as S,en as T,rc as _,Af as a,zr as b,Ru as c,Tu as d,Cu as f,mc as g,uu as h,jf as i,T as j,A as k,Lu as l,vu as m,Pf as n,Mf as o,yu as p,Nf as r,ff as s,zf as t,Iu as u,ia as v,nn as w,Vr as x,Ci as y};