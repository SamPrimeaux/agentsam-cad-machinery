import{a as e,b as t,c as n,d as r,l as i,o as a,s as o,u as s}from"./HandPoses-DaabQczj.js";import{n as c,t as l}from"./SimulatorLightingEvents-Bs7HI1wS.js";var u=globalThis,d=u.ShadowRoot&&(u.ShadyCSS===void 0||u.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,f=Symbol(),ee=new WeakMap,te=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==f)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(d&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ee.set(t,e))}return e}toString(){return this.cssText}},ne=e=>new te(typeof e==`string`?e:e+``,void 0,f),p=(e,...t)=>new te(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,f),re=(e,t)=>{if(d)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=u.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ie=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ne(t)})(e):e,{is:ae,defineProperty:oe,getOwnPropertyDescriptor:se,getOwnPropertyNames:ce,getOwnPropertySymbols:le,getPrototypeOf:ue}=Object,m=globalThis,de=m.trustedTypes,fe=de?de.emptyScript:``,pe=m.reactiveElementPolyfillSupport,h=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},me=(e,t)=>!ae(e,t),he={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:me};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&oe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=se(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...ce(e),...le(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ie(e))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?g:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?g:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??me)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[h(`elementProperties`)]=new Map,_[h(`finalized`)]=new Map,pe?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var v=globalThis,ge=e=>e,y=v.trustedTypes,_e=y?y.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,b=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,S=`?`+x,ve=`<${S}>`,C=document,w=()=>C.createComment(``),T=e=>e===null||typeof e!=`object`&&typeof e!=`function`,E=Array.isArray,ye=e=>E(e)||typeof e?.[Symbol.iterator]==`function`,D=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,xe=/>/g,k=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Se=/'/g,Ce=/"/g,we=/^(?:script|style|textarea|title)$/i,A=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),j=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),Te=new WeakMap,N=C.createTreeWalker(C,129);function Ee(e,t){if(!E(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return _e===void 0?t:_e.createHTML(t)}var De=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=O;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===O?c[1]===`!--`?o=be:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=k):(we.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=k):o=xe:o===k?c[0]===`>`?(o=i??O,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?k:c[3]===`"`?Ce:Se):o===Ce||o===Se?o=k:o===be||o===xe?o=O:(o=k,i=void 0);let d=o===k&&e[t+1].startsWith(`/>`)?` `:``;a+=o===O?n+ve:l>=0?(r.push(s),n.slice(0,l)+b+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[Ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Oe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=De(t,n);if(this.el=e.createElement(l,r),N.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=N.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(b)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ae:r[1]===`?`?je:r[1]===`@`?Me:I}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(we.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=y?y.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],w()),N.nextNode(),c.push({type:2,index:++a});i.append(e[t],w())}}}else if(i.nodeType===8){if(i.data===S)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}}a++}}static createElement(e,t){let n=C.createElement(`template`);return n.innerHTML=e,n}};function P(e,t,n=e,r){if(t===j)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=T(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=P(e,i._$AS(e,t.values),i,r)),t}var ke=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);N.currentNode=r;let i=N.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new F(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ne(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=N.nextNode(),a++)}return N.currentNode=C,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},F=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),T(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==j&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Oe.createElement(Ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ke(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Te.get(e.strings);return t===void 0&&Te.set(e.strings,t=new Oe(e)),t}k(t){E(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(w()),this.O(w()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ge(e).nextSibling;ge(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=P(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==j,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=P(this,r[n+o],t,o),s===j&&(s=this._$AH[o]),a||=!T(s)||s!==this._$AH[o],s===M?e=M:e!==M&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ae=class extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},je=class extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Me=class extends I{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??M)===j)return;let n=this._$AH,r=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}},Pe={M:b,P:x,A:S,C:1,L:De,R:ke,D:ye,V:P,I:F,H:I,N:je,U:Me,B:Ae,F:Ne},Fe=v.litHtmlPolyfillSupport;Fe?.(Oe,F),(v.litHtmlVersions??=[]).push(`3.3.3`);var Ie=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new F(t.insertBefore(w(),e),e,void 0,n??{})}return i._$AI(e),i},L=globalThis,R=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};R._$litElement$=!0,R.finalized=!0,L.litElementHydrateSupport?.({LitElement:R});var Le=L.litElementPolyfillSupport;Le?.({LitElement:R}),(L.litElementVersions??=[]).push(`4.2.2`);var z=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Re={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:me},ze=(e=Re,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function B(e){return(t,n)=>typeof n==`object`?ze(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function V(e){return B({...e,state:!0,attribute:!1})}var Be={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ve=e=>(...t)=>({_$litDirective$:e,values:t}),He=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ue=Ve(class extends He{constructor(e){if(super(e),e.type!==Be.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return j}}),{I:We}=Pe,Ge=e=>e.strings===void 0,H=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),H(e,t);return!0},U=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ke=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ye(t)}};function qe(e){this._$AN===void 0?this._$AM=e:(U(this),this._$AM=e,Ke(this))}function Je(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)H(r[e],!1),U(r[e]);else r!=null&&(H(r,!1),U(r))}else H(this,e)}}var Ye=e=>{e.type==Be.CHILD&&(e._$AP??=Je,e._$AQ??=qe)},Xe=class extends He{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ke(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(H(this,e),U(this))}setValue(e){if(Ge(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ze=()=>new Qe,Qe=class{},W=new WeakMap,$e=Ve(class extends Xe{render(e){return M}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),M}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=W.get(t);n===void 0&&(n=new WeakMap,W.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?W.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),et=class e extends Event{static{this.type=`simulatorInstructionsNextEvent`}constructor(){super(e.type,{bubbles:!0,composed:!0})}},tt=class e extends Event{static{this.type=`simulatorInstructionsCloseEvent`}constructor(){super(e.type,{bubbles:!0,composed:!0})}};function G(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var K=class extends R{constructor(...e){super(...e),this.continueButtonText=`Continue`}static{this.styles=p`
    :host {
      position: relative;
      box-sizing: border-box;
      background: #ffffff;
      display: flex;
      /* Fixed popup size shared by every instruction card, sized to fit the
         tallest card's content without a scrollbar; scrolling remains only
         as a fallback for very short windows. */
      height: 36rem;
      width: 30rem;
      max-height: 100%;
      overflow-y: auto;
      overflow-wrap: break-word;
      border-radius: 1.6rem;
      color: #000000;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      font-size: 0.875rem;
      line-height: 1.35;
      padding: 1.25rem;
      flex-direction: column;
    }

    h1 {
      margin-top: 0px;
      font-size: 1.25rem;
    }

    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
      font-size: 1rem;
    }

    ul {
      margin-top: 0.2rem;
      margin-bottom: 0px;
      padding-left: 1.25rem;
    }

    .image-div {
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
    }

    .description-div {
      flex-grow: 1;
    }

    .close-button {
      position: absolute;
      right: 1.3rem;
      top: 1.3rem;
    }

    button {
      font-family: inherit;
      align-self: flex-end;
      width: min-content;
      height: min-content;
      font-size: 0.75rem;
      background: rgb(48, 40, 34);
      color: white;
      border-radius: 1rem;
      padding: 0.5rem 0.7rem;
      border: none;
    }

    video {
      display: block;
      /* Fixed demo-video size shared by every instruction card. */
      width: 20.25rem;
      height: auto;
      margin: 0 auto;
      max-width: 100%;
      aspect-ratio: 16/9;
    }

    p {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  `}continueButtonClicked(){this.dispatchEvent(new et)}closeButtonClicked(){this.dispatchEvent(new tt)}getHeaderContents(){return A` <h1>Welcome to XR Blocks!</h1> `}getImageContents(){return A``}getDescriptionContents(){return A``}render(){return A`
      <button class="close-button" @click=${this.closeButtonClicked}>X</button>
      <div class="header-div">${this.getHeaderContents()}</div>
      <div class="image-div">${this.getImageContents()}</div>
      <div class="description-div">${this.getDescriptionContents()}</div>
      <button type="button" @click=${this.continueButtonClicked}>
        ${this.continueButtonText}
      </button>
    `}};G([B({type:String})],K.prototype,`continueButtonText`,void 0),K=G([z(`xrblocks-simulator-instructions-card`)],K);var q=class extends K{getHeaderContents(){return A`<h1>${this.customInstruction.header}</h1>`}getImageContents(){return this.customInstruction.videoSrc?A`
          <video playsinline autoplay muted loop>
            <source src=${this.customInstruction.videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        `:A``}getDescriptionContents(){return A`<p>${this.customInstruction.description}</p>`}render(){return super.render()}};G([B()],q.prototype,`customInstruction`,void 0),q=G([z(`xrblocks-simulator-custom-instruction`)],q);var nt=t+`simulator/instructions/xr_blocks_simulator_hands.webm`,rt=class extends K{getImageContents(){return A`
      <video playsinline autoplay muted loop>
        <source src="${nt}" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    `}getDescriptionContents(){return A`
      <h2>Hands Mode</h2>
      <p>
        Hands Mode allows for precise manipulation of virtual hands while
        navigating the environment.
      </p>
      <ul>
        <li>
          <strong>Move Around:</strong> Hold Left Shift and use the W, A, S, D
          keys to navigate.
        </li>
        <li><strong>Look Around:</strong> Right-click and drag the mouse.</li>
        <li><strong>Rotate Hand:</strong> Left-click and drag the mouse.</li>
        <li><strong>Move Hand:</strong> Use the W, A, S, D keys.</li>
        <li>
          <strong>Elevate Hand:</strong> Use the Q (up) and E (down) keys.
        </li>
        <li>
          <strong>Switch Active Hand:</strong> Press the T key to toggle between
          hands.
        </li>
        <li><strong>Simulate Pinch:</strong> Press the Spacebar.</li>
      </ul>
    `}};rt=G([z(`xrblocks-simulator-hands-instructions`)],rt);var it=t+`simulator/instructions/xr_blocks_simulator_navigation.webm`,at=class extends K{getImageContents(){return A`
      <video playsinline autoplay muted loop>
        <source src=${it} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    `}getDescriptionContents(){return A`
      <h2>Navigation Mode</h2>
      <p>
        Press <strong>Left Shift</strong> to toggle Navigation Mode. In this
        mode, virtual hands appear and the mouse controls the camera view.
      </p>
      <ul>
        <li>
          <strong>Move Forward/Backward/Sideways:</strong> Use the W, A, S, D
          keys.
        </li>
        <li><strong>Move Up/Down:</strong> Use the Q and E keys.</li>
        <li><strong>Rotate Camera:</strong> Click and drag the mouse.</li>
      </ul>
    `}};at=G([z(`xrblocks-simulator-navigation-instructions`)],at);var ot=t+`simulator/instructions/xr_blocks_simulator_user.webm`,st=class extends K{getImageContents(){return A`
      <video playsinline autoplay muted loop>
        <source src=${ot} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    `}getDescriptionContents(){return A`
      <h2>User Mode</h2>
      <p>
        The simulator starts in <strong>User Mode</strong> by default. This mode
        is for moving the camera and interacting directly with scene objects.
      </p>
      <ul>
        <li>
          <strong>Move Forward/Backward/Sideways:</strong> Use the W, A, S, D
          keys.
        </li>
        <li><strong>Move Up/Down:</strong> Use the Q and E keys.</li>
        <li>
          <strong>Rotate Camera:</strong> Hold the right mouse button and drag.
        </li>
        <li>
          <strong>Scale a ModelViewer:</strong> Point at it and use the mouse
          wheel.
        </li>
        <li><strong>Select Object:</strong> Left-click the mouse.</li>
      </ul>
    `}};st=G([z(`xrblocks-simulator-user-instructions`)],st);var J=class extends R{static{this.styles=p`
    :host {
      background: #000000aa;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  `}getSteps(){let e=this.customInstructions.length===0?`Close`:`Continue`;if(this.simulatorMode)switch(this.simulatorMode){case`User`:case`Editor`:case`PointerLock`:return[A`<xrblocks-simulator-user-instructions
              .continueButtonText=${e}
            />`];case`Navigation`:return[A`<xrblocks-simulator-navigation-instructions
              .continueButtonText=${e}
            />`];case`Hands`:return[A`<xrblocks-simulator-hands-instructions
              .continueButtonText=${e}
            />`]}return[A`<xrblocks-simulator-user-instructions />`,A`<xrblocks-simulator-navigation-instructions />`,A`<xrblocks-simulator-hands-instructions
        .continueButtonText=${e}
      />`]}constructor(){super(),this.customInstructions=[],this.step=0,this.addEventListener(et.type,this.continueButtonClicked.bind(this)),this.addEventListener(tt.type,this.closeInstructions.bind(this))}closeInstructions(){this.remove()}continueButtonClicked(){let e=this.getSteps();this.step+1>=e.length+this.customInstructions.length?this.closeInstructions():this.step++}render(){let e=this.getSteps();return this.step<e.length?e[this.step]:A`<xrblocks-simulator-custom-instruction
          .customInstruction=${this.customInstructions[this.step-e.length]}
        />`}};G([B()],J.prototype,`simulatorMode`,void 0),G([B()],J.prototype,`customInstructions`,void 0),G([B()],J.prototype,`step`,void 0),J=G([z(`xrblocks-simulator-instructions`)],J);function ct(e){switch(e){case`Navigation`:return[[{keys:[`W`,`A`,`S`,`D`],label:`Move`}],[{keys:[`Mouse`],label:`Click and drag to look around`}]];case`PointerLock`:return[[{keys:[`W`,`A`,`S`,`D`],label:`Move`}],[{keys:[`Mouse`],label:`Click the screen, then move the mouse to look around`}]];case`Hands`:return[[{keys:[`W`,`A`,`S`,`D`],label:`Move hand`},{keys:[`Shift`,`W`,`A`,`S`,`D`],label:`Move`}],[{keys:[`Right Click`],label:`Look`},{keys:[`Left Click`],label:`Rotate hand`}],[{keys:[`Space`],label:`Pinch`},{keys:[`T`],label:`Switch hand`}]];default:return[[{keys:[`W`,`A`,`S`,`D`],label:`Move`}],[{keys:[`Right Click`],label:`Drag to look around`},{keys:[`Left Click`],label:`Select`}]]}}var Y=class extends R{constructor(...e){super(...e),this.simulatorMode=`User`,this.visible=!1}static{this.styles=p`
    :host {
      position: fixed;
      bottom: 4.75rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      pointer-events: none;
      user-select: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.65rem;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    :host([visible]) {
      opacity: 1;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.25rem;
    }

    .group {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .keys {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .key {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      min-width: 2rem;
      height: 2rem;
      padding: 0 0.55rem;
      border-radius: 0.45rem;
      border: 1.5px solid rgba(255, 255, 255, 0.85);
      background: rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(4px);
      color: #fff;
      font-size: 0.85rem;
      font-weight: 600;
      line-height: 1;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }

    .label {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
      white-space: nowrap;
    }
  `}renderGroup(e){return A`
      <div class="group">
        <div class="keys">
          ${e.keys.map(e=>A`<kbd class="key">${e}</kbd>`)}
        </div>
        <span class="label">${e.label}</span>
      </div>
    `}render(){return A`
      ${ct(this.simulatorMode).map(e=>A`<div class="row">
            ${e.map(e=>this.renderGroup(e))}
          </div>`)}
    `}};G([B({type:String})],Y.prototype,`simulatorMode`,void 0),G([B({type:Boolean,reflect:!0})],Y.prototype,`visible`,void 0),Y=G([z(`xrblocks-simulator-overlay-instructions`)],Y);var lt={0:`A`,1:`B`,2:`X`,3:`Y`,4:`LB`,5:`RB`,6:`LT`,7:`RT`,8:`Back`,9:`Start`,10:`L3`,11:`R3`,12:`D-Up`,13:`D-Down`,14:`D-Left`,15:`D-Right`};function ut(e){return lt[e]??`Btn ${e}`}var X=class extends R{constructor(...e){super(...e),this.visible=!1,this._timer=null,this.controls={},this._flashMessage=``}static{this.styles=p`
    :host {
      position: fixed;
      top: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      pointer-events: none;
    }

    .toast {
      background: rgba(0, 0, 0, 0.85);
      color: #fff;
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      font-family: system-ui, sans-serif;
      font-size: 0.9rem;
      backdrop-filter: blur(8px);
      opacity: 1;
      transition: opacity 0.4s ease-out;
      pointer-events: auto;
      cursor: pointer;
      max-width: 28rem;
    }

    .toast.hidden {
      opacity: 0;
    }

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1rem;
      font-weight: 600;
    }

    .controls {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.2rem 0.8rem;
    }

    .key {
      font-weight: 600;
      color: #8cf;
      text-align: right;
    }

    .action {
      color: #ccc;
    }
  `}show(e,t=5e3){this.controls=e,this._flashMessage=``,this.visible=!0,this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this.dismiss(),t)}flash(e,t=1500){this._flashMessage=e,this.controls={},this.visible=!0,this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this.dismiss(),t)}dismiss(){this.visible=!1,this._timer&&=(clearTimeout(this._timer),null)}render(){return this._flashMessage?A`
        <div
          class="toast ${this.visible?``:`hidden`}"
          @click=${this.dismiss}
        >
          <span class="action">${this._flashMessage}</span>
        </div>
      `:A`
      <div class="toast ${this.visible?``:`hidden`}" @click=${this.dismiss}>
        <h3>🎮 Gamepad Connected</h3>
        <div class="controls">
          ${Object.entries(this.controls).map(([e,t])=>A`
              <span class="key">${e}</span>
              <span class="action">${t}</span>
            `)}
        </div>
      </div>
    `}};G([B({type:Boolean})],X.prototype,`visible`,void 0),G([B({type:Object})],X.prototype,`controls`,void 0),G([B({type:String})],X.prototype,`_flashMessage`,void 0),X=G([z(`xrblocks-gamepad-toast`)],X);var dt={select:`Select / Interact`,cycleHandPoseLeft:`Previous Hand Pose`,cycleHandPoseRight:`Next Hand Pose`,cycleSimulatorMode:`Cycle Simulator Mode`,toggleUI:`Toggle UI`,toggleHand:`Swap Active Hand`,moveUp:`Move Up`,moveDown:`Move Down`,openSettings:`Open Settings`},ft=Object.keys(dt).filter(e=>e!==`openSettings`),Z=class extends R{constructor(...e){super(...e),this._listeningAction=null,this._bindingSnapshot={},this._focusedIndex=0,this._rafId=null,this._prevStickY=0,this._navPrevButtons=[]}static{this.styles=p`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    :host([hidden]) {
      display: none;
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      pointer-events: auto;
    }

    .panel {
      position: relative;
      background: rgba(20, 20, 30, 0.95);
      color: #fff;
      border-radius: 1rem;
      padding: 1.5rem;
      font-family: system-ui, sans-serif;
      min-width: 20rem;
      max-width: 28rem;
      backdrop-filter: blur(12px);
      pointer-events: auto;
      z-index: 1;
    }

    h2 {
      margin: 0 0 1rem;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .binding-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .binding-row:last-of-type {
      border-bottom: none;
    }

    .action-label {
      color: #ccc;
      font-size: 0.9rem;
    }

    .bind-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #8cf;
      border-radius: 0.5rem;
      padding: 0.3rem 0.8rem;
      font-size: 0.85rem;
      cursor: pointer;
      min-width: 4rem;
      text-align: center;
      font-family: inherit;
    }

    .bind-btn:hover,
    .bind-btn.focused {
      background: rgba(255, 255, 255, 0.2);
      outline: 2px solid #8cf;
      outline-offset: 2px;
    }

    .bind-btn.listening {
      color: #fc4;
      border-color: #fc4;
      animation: pulse 1s infinite alternate;
    }

    @keyframes pulse {
      from {
        opacity: 0.6;
      }
      to {
        opacity: 1;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      gap: 0.5rem;
    }

    .footer button {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      border-radius: 0.5rem;
      padding: 0.4rem 1rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-family: inherit;
    }

    .footer button:hover,
    .footer button.focused {
      background: rgba(255, 255, 255, 0.2);
      outline: 2px solid #8cf;
      outline-offset: 2px;
    }

    .hint {
      margin-top: 0.75rem;
      font-size: 0.75rem;
      color: #888;
      text-align: center;
    }
  `}_navJustPressed(e,t){let n=e.activeGamepad?.buttons[t]?.pressed??!1,r=this._navPrevButtons[t]??!1;return n&&!r}_navUpdatePrev(e){let t=e.activeGamepad?.buttons;if(t)for(let e=0;e<t.length;e++)this._navPrevButtons[e]=t[e]?.pressed??!1}get _totalItems(){return ft.length+2}show(){this.hidden=!1,this._refreshSnapshot(),this._focusedIndex=0,this._prevStickY=0,this._navPrevButtons=[],this.gamepadController&&(this.gamepadController.menuActive=!0,this._navUpdatePrev(this.gamepadController)),this._startNavLoop()}hide(){this.hidden=!0,this._listeningAction&&=(this.gamepadController?.cancelCapture(),null),this.gamepadController&&(this.gamepadController.menuActive=!1),this._stopNavLoop()}disconnectedCallback(){super.disconnectedCallback(),this._stopNavLoop(),this.gamepadController&&(this.gamepadController.menuActive=!1)}_startNavLoop(){if(this._rafId!==null)return;let e=()=>{this._rafId=requestAnimationFrame(e),this._pollNavigation()};this._rafId=requestAnimationFrame(e)}_stopNavLoop(){this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null)}_pollNavigation(){let e=this.gamepadController;if(!e||!e.userData.connected)return;if(this._listeningAction!==null){this._navUpdatePrev(e);return}let[,t]=e.getAxes(),n=.5;t<-.5&&this._prevStickY>=-.5?this._moveFocus(-1):t>n&&this._prevStickY<=n&&this._moveFocus(1),this._prevStickY=t,this._navJustPressed(e,12)&&this._moveFocus(-1),this._navJustPressed(e,13)&&this._moveFocus(1),this._navJustPressed(e,6)&&this._moveFocus(-1),this._navJustPressed(e,7)&&this._moveFocus(1),this._navJustPressed(e,0)&&this._activateFocused(),this._navJustPressed(e,1)&&this.hide();let r=this.bindings?.getBinding(`openSettings`)??-1;r>=0&&r!==0&&r!==1&&this._navJustPressed(e,r)&&this.hide(),this._navUpdatePrev(e)}_moveFocus(e){let t=this._totalItems-1;this._focusedIndex=Math.max(0,Math.min(t,this._focusedIndex+e))}_activateFocused(){let e=ft;this._focusedIndex<e.length?this._startListening(e[this._focusedIndex]):this._focusedIndex===e.length?this._resetDefaults():this.hide()}_refreshSnapshot(){this.bindings&&(this._bindingSnapshot={...this.bindings.getAllBindings()})}_startListening(e){this._listeningAction=e,this.gamepadController?.captureNextButtonPress(t=>{this.bindings?.setBinding(e,t),this._listeningAction=null,this._refreshSnapshot(),this.gamepadController&&this._navUpdatePrev(this.gamepadController)})}_resetDefaults(){this.bindings?.resetDefaults(),this._refreshSnapshot()}render(){let e=ft,t=e.length,n=e.length+1;return A`
      <div class="backdrop" @click=${this.hide}></div>
      <div class="panel">
        <h2>🎮 Gamepad Settings</h2>
        ${e.map((e,t)=>{let n=this._bindingSnapshot[e]??-1,r=this._listeningAction===e,i=this._focusedIndex===t;return A`
            <div class="binding-row">
              <span class="action-label">${dt[e]}</span>
              <button
                class="bind-btn ${r?`listening`:``} ${i?`focused`:``}"
                @click=${()=>r?null:this._startListening(e)}
              >
                ${r?`Press button...`:n>=0?ut(n):`Unbound`}
              </button>
            </div>
          `})}
        <div class="footer">
          <button
            class=${this._focusedIndex===t?`focused`:``}
            @click=${this._resetDefaults}
          >
            Reset Defaults
          </button>
          <button
            class=${this._focusedIndex===n?`focused`:``}
            @click=${this.hide}
          >
            Close
          </button>
        </div>
        <div class="hint">
          Stick / D-pad / LT-RT: Navigate · A: Select · B: Close
        </div>
      </div>
    `}};G([B({type:Object})],Z.prototype,`bindings`,void 0),G([B({type:Object})],Z.prototype,`gamepadController`,void 0),G([V()],Z.prototype,`_listeningAction`,void 0),G([V()],Z.prototype,`_bindingSnapshot`,void 0),G([V()],Z.prototype,`_focusedIndex`,void 0),Z=G([z(`xrblocks-gamepad-settings`)],Z);var Q=class extends R{constructor(...e){super(...e),this.posePanelRef=Ze(),this.handPose=Object.values(s)[0],this.visible=!1}static{this.styles=p`
    :host {
      position: absolute;
      bottom: 0;
      left: 50%;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      max-width: calc(100% - 24rem);
      width: fit-content;
    }

    .hand-pose-panel {
      box-sizing: border-box;
      border: none;
      margin: 1rem 0px;
      border-radius: 5rem;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      max-width: 100%;
      width: fit-content;
      height: 3rem;
      text-align: center;
      vertical-align: middle;
      padding-left: 1rem;
      padding-right: 1rem;
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: scroll;
    }

    .hand-pose-panel::-webkit-scrollbar {
      display: none;
    }

    .hand-pose-button {
      font-family: inherit;
      color: #ffffff44;
      font-size: 1.2em;
      line-height: 3rem;
      background: transparent;
      text-align: center;
      vertical-align: middle;
      border: none;
    }

    .hand-pose-button.selected {
      color: #ffffffff;
    }
  `}update(e){e.has(`handPose`)&&this.onHandPoseChanged(),super.update(e)}sendHandPoseRequest(e){this.dispatchEvent(new r(e))}getHandPoseButtons(){let t=[];for(let n of Object.values(s)){let r=e[n],i={"hand-pose-button":!0,selected:this.handPose===n};t.push(A`
        <button
          class=${Ue(i)}
          @click=${()=>this.sendHandPoseRequest(n)}
          data-pose=${n}
        >
          ${r}
        </button>
      `)}return t}onHandPoseChanged(){this.scrollToCurrentHandPose()}scrollToCurrentHandPose(){let e=this.posePanelRef.value;if(!e)return;let t=e.querySelector(`.hand-pose-button[data-pose=${this.handPose}]`);t&&t.scrollIntoView({behavior:`smooth`,inline:`center`,block:`nearest`})}render(){if(!this.visible)return A``;let e=this.getHandPoseButtons();return A`
      <div class="hand-pose-panel" ${$e(this.posePanelRef)}>
        ${e}
      </div>
    `}};G([B({type:String})],Q.prototype,`handPose`,void 0),G([B({type:Boolean})],Q.prototype,`visible`,void 0),Q=G([z(`xrblocks-simulator-hand-pose-panel`)],Q);var $=class extends R{constructor(...e){super(...e),this.environments=[],this.activeEnvironmentIndex=0,this.simulatorMode=`User`,this.instructionsEnabled=!1,this.handPhysicsAvailable=!1,this.handPhysicsEnabled=!1,this.dayNightAvailable=!1,this.dayNightEnabled=!1,this.timeOfDay=0,this._isOpen=!1}static{this.styles=p`
    :host {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10000;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    button,
    select {
      font-family: inherit;
    }

    .settings-btn {
      border: none;
      margin: 1rem;
      width: 3rem;
      height: 3rem;
      border-radius: 5rem;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .settings-btn:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    .settings-btn svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: currentColor;
      transition: transform 0.3s ease;
    }

    .settings-btn.open svg {
      transform: rotate(45deg);
    }

    .panel {
      position: absolute;
      bottom: 4.5rem;
      left: 1rem;
      background: rgba(0, 0, 0, 0.7);
      border: none;
      border-radius: 1.5rem;
      padding: 1.5rem;
      min-width: 16rem;
      color: #fff;
      opacity: 0;
      pointer-events: none;
      transform: translateY(10px);
      transition: all 0.3s ease;
      backdrop-filter: blur(8px);
    }

    .panel.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    h3 {
      margin: 0 0 1rem;
      font-size: 1.1rem;
      font-weight: 500;
      color: #fff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 0.5rem;
    }

    .form-group {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .form-group:last-of-type {
      margin-bottom: 0;
    }

    label {
      font-size: 0.85rem;
      color: #ccc;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      cursor: pointer;
    }

    .checkbox-label:has(input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }

    input[type='checkbox'] {
      width: 1rem;
      height: 1rem;
      margin: 0;
      accent-color: #8ab4f8;
      cursor: inherit;
    }

    input[type='range'] {
      width: 100%;
      margin: 0;
      accent-color: #8ab4f8;
      cursor: pointer;
    }

    .time-labels {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #999;
    }

    select {
      appearance: none;
      -webkit-appearance: none;
      background: rgba(0, 0, 0, 0.5)
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")
        no-repeat right 0.5rem center;
      background-size: 1rem;
      border: none;
      color: #fff;
      padding: 0.5rem 2.2rem 0.5rem 1.2rem;
      border-radius: 5rem;
      font-size: 0.9rem;
      outline: none;
      cursor: pointer;
    }

    select:hover,
    select:focus {
      background-color: rgba(0, 0, 0, 0.8);
    }

    option {
      background: #222;
      color: #fff;
    }

    .instructions-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 0.6rem 1.2rem;
      border-radius: 5rem;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .instructions-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }

    .instructions-btn:active {
      background: rgba(255, 255, 255, 0.15);
    }
  `}_togglePanel(){this._isOpen=!this._isOpen}_onEnvironmentChange(e){let t=e.target,n=parseInt(t.value,10);this.activeEnvironmentIndex=n,this.dispatchEvent(new a(n))}_onModeChange(e){let t=e.target.value;this.simulatorMode=t,this.dispatchEvent(new n(t))}_onHandPhysicsChange(e){let t=e.target;this.handPhysicsEnabled=t.checked,this.dispatchEvent(new o(this.handPhysicsEnabled))}_onDayNightChange(e){let t=e.target;this.dayNightEnabled=t.checked,t.checked||(this.timeOfDay=0),this.dispatchEvent(new l(this.dayNightEnabled))}_onTimeOfDayChange(e){let t=e.target;this.timeOfDay=parseFloat(t.value),this.dispatchEvent(new c(this.timeOfDay))}_onShowInstructions(){this._isOpen=!1,this.dispatchEvent(new i(this.simulatorMode))}render(){return A`
      <button
        class="settings-btn ${this._isOpen?`open`:``}"
        @click=${this._togglePanel}
        title="Simulator Settings"
      >
        <svg viewBox="0 0 24 24">
          <path
            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
          />
        </svg>
      </button>

      <div class="panel ${this._isOpen?`open`:``}">
        <h3>Simulator Settings</h3>

        <div class="form-group">
          <label>AR Simulation Environment</label>
          <select @change=${this._onEnvironmentChange}>
            ${this.environments.map((e,t)=>A`
                <option
                  value=${t}
                  ?selected=${t===this.activeEnvironmentIndex}
                >
                  ${e.name??e.manifestPath.split(`/`).pop()}
                </option>
              `)}
          </select>
        </div>

        <div class="form-group">
          <label>Interaction Mode</label>
          <select @change=${this._onModeChange}>
            ${[{label:`User`,value:`User`},{label:`Navigation`,value:`Navigation`},{label:`Hands`,value:`Hands`},{label:`Pointer Lock`,value:`PointerLock`},{label:`Editor`,value:`Editor`}].map(e=>A`
                <option
                  value=${e.value}
                  ?selected=${e.value===this.simulatorMode}
                >
                  ${e.label}
                </option>
              `)}
          </select>
        </div>

        ${this.dayNightAvailable?A`
              <div class="form-group">
                <label class="checkbox-label">
                  <span>Day / Night Lighting</span>
                  <input
                    type="checkbox"
                    .checked=${this.dayNightEnabled}
                    @change=${this._onDayNightChange}
                  />
                </label>
              </div>
              <div class="form-group">
                <label>Time of Day</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  .value=${String(this.timeOfDay)}
                  ?disabled=${!this.dayNightEnabled}
                  @input=${this._onTimeOfDayChange}
                />
                <div class="time-labels">
                  <span>Day</span>
                  <span>Night</span>
                </div>
              </div>
            `:``}

        <div class="form-group">
          <label class="checkbox-label">
            <span>Hand Physics</span>
            <input
              type="checkbox"
              .checked=${this.handPhysicsEnabled}
              ?disabled=${!this.handPhysicsAvailable}
              @change=${this._onHandPhysicsChange}
            />
          </label>
        </div>

        ${this.instructionsEnabled?A`
              <div class="form-group">
                <button
                  class="instructions-btn"
                  @click=${this._onShowInstructions}
                >
                  View Simulator Instructions
                </button>
              </div>
            `:``}
      </div>
    `}};G([B({type:Array})],$.prototype,`environments`,void 0),G([B({type:Number})],$.prototype,`activeEnvironmentIndex`,void 0),G([B({type:String})],$.prototype,`simulatorMode`,void 0),G([B({type:Boolean})],$.prototype,`instructionsEnabled`,void 0),G([B({type:Boolean})],$.prototype,`handPhysicsAvailable`,void 0),G([B({type:Boolean})],$.prototype,`handPhysicsEnabled`,void 0),G([B({type:Boolean})],$.prototype,`dayNightAvailable`,void 0),G([B({type:Boolean})],$.prototype,`dayNightEnabled`,void 0),G([B({type:Number})],$.prototype,`timeOfDay`,void 0),G([V()],$.prototype,`_isOpen`,void 0),$=G([z(`xrblocks-simulator-settings`)],$);