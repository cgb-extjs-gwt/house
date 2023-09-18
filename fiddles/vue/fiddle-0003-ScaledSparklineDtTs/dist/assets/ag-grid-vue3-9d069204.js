import{e as g,f as w,g as f,h as C,i as h,j as u,k as O}from"./@vue-25c34304.js";import{ag as D,ah as l,ai as y,a4 as A}from"./ag-grid-community-c307c704.js";class p{static getComponentDefinition(e,s){let t;return typeof e=="string"?t=this.searchForComponentInstance(s,e):t={extends:g(Object.assign({},e))},t||console.error(`Could not find component with name of ${e}. Is it in Vue.components?`),t.extends?(t.extends.setup&&(t.setup=t.extends.setup),t.extends.props=this.addParamsToProps(t.extends.props)):t.props=this.addParamsToProps(t.props),t}static addParamsToProps(e){return!e||Array.isArray(e)&&e.indexOf("params")===-1?e=["params",...e||[]]:typeof e=="object"&&!e.params&&(e.params={type:Object}),e}static createAndMountComponent(e,s,t,i){const r=p.getComponentDefinition(e,t);if(!r)return;const{vNode:o,destroy:a,el:d}=this.mount(r,{params:Object.freeze(s)},t,i||{});return{componentInstance:o.component.proxy,element:d,destroy:a}}static mount(e,s,t,i){let r=w(e,s);r.appContext=t.$.appContext,r.appContext.provides=Object.assign(Object.assign(Object.assign({},i),r.appContext.provides?r.appContext.provides:{}),t.$parent.$options.provide?t.$parent.$options.provide:{});let o=document.createElement("div");return f(r,o),{vNode:r,destroy:()=>{o&&f(null,o),o=null,r=null},el:o}}static searchForComponentInstance(e,s,t=10,i=!1){let r=null,o=e.$parent,a=0;for(;!r&&o&&o.$options&&++a<t;){const d=o;r=d.$options&&d.$options.components?d.$options.components[s]:null,o=o.$parent}if(!r){const d=e.$.appContext.components;d&&d[s]&&(r=d[s])}return!r&&!i?(console.error(`Could not find component with name of ${s}. Is it in Vue.components?`),null):r}}class c extends D{constructor(e,s){super(),this.parent=e,c.provides||(c.provides=s)}createWrapper(e){const s=this;class t extends v{init(o){super.init(o)}hasMethod(o){return i.getFrameworkComponentInstance()[o]!=null}callMethod(o,a){const d=this.getFrameworkComponentInstance();return i.getFrameworkComponentInstance()[o].apply(d,a)}addMethod(o,a){i[o]=a}overrideProcessing(o){return s.parent.autoParamsRefresh&&o==="refresh"}processMethod(o,a){return o==="refresh"&&(this.getFrameworkComponentInstance().params=a[0]),this.hasMethod(o)?this.callMethod(o,a):o==="refresh"}createComponent(o){return s.createComponent(e,o)}}const i=new t;return i}createComponent(e,s){return p.createAndMountComponent(e,s,this.parent,c.provides)}createMethodProxy(e,s,t){return function(){return e.overrideProcessing(s)?e.processMethod(s,arguments):e.hasMethod(s)?e.callMethod(s,arguments):(t&&console.warn("AG Grid: Framework component is missing the method "+s+"()"),null)}}destroy(){this.parent=null}}class v{getGui(){return this.element}destroy(){this.getFrameworkComponentInstance()&&typeof this.getFrameworkComponentInstance().destroy=="function"&&this.getFrameworkComponentInstance().destroy(),this.unmount()}getFrameworkComponentInstance(){return this.componentInstance}init(e){const{componentInstance:s,element:t,destroy:i}=this.createComponent(e);this.componentInstance=s,this.unmount=i,this.element=t.firstElementChild}}const I=n=>n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),b=n=>`on${n.charAt(0).toUpperCase()}${n.substring(1,n.length)}`,P=()=>{const n={};l.PUBLIC_EVENTS.map(t=>b(I(t))).forEach(t=>n[t]=void 0);const s={};return l.ALL_PROPERTIES.filter(t=>t!="gridOptions").forEach(t=>{n[t]={},s[t]={handler(i,r){this.processChanges(t,i,r)},deep:t!=="popupParent"&&t!=="context"}}),[n,s]};class M extends y{constructor(e){super(),this.parent=e}frameworkComponent(e,s){let t=p.searchForComponentInstance(this.parent,e,10,!0)?e:null;if(!t&&s&&s[e]){const i=s[e];t=p.searchForComponentInstance(this.parent,i,10,!0)?i:null}return t}isFrameworkComponent(e){return typeof e=="object"}}const R=["rowDataChanged","rowDataUpdated","cellValueChanged","rowValueChanged"],m="onUpdate:modelValue",F="update:modelValue",[$,k]=P(),T=g({render(){return C("div")},props:Object.assign({gridOptions:{type:Object,default:()=>({})},autoParamsRefresh:{type:Boolean,default:()=>!1},componentDependencies:{type:Array,default:()=>[]},plugins:[],modules:{type:Array,default:()=>[]},modelValue:{type:Array,default:void 0,required:!1}},$),data(){return{gridCreated:!1,isDestroyed:!1,gridReadyFired:!1,emitRowModel:void 0}},watch:Object.assign({modelValue:{handler(n,e){this.processChanges("rowData",n,e)},deep:!0}},k),methods:{globalEventListener(n,e){this.isDestroyed||(n==="gridReady"&&(this.gridReadyFired=!0),this.updateModelIfUsed(n))},processChanges(n,e,s){if(this.gridCreated){if(this.skipChange(n,e,s))return;const t={};t[n]={currentValue:n==="rowData"?Object.isFrozen(e)?e:h(u(e)):e,previousValue:s},l.processOnChange(t,this.gridOptions.api)}},checkForBindingConflicts(){const n=this;(n.rowData||this.gridOptions.rowData)&&n.modelValue&&console.warn("AG Grid: Using both rowData and v-model. rowData will be ignored.")},getRowData(){const n=[];return this.gridOptions.api.forEachNode(e=>{n.push(e.data)}),n},updateModelIfUsed(n){this.gridReadyFired&&this.$attrs[m]&&R.indexOf(n)!==-1&&this.emitRowModel&&this.emitRowModel()},getRowDataBasedOnBindings(){const n=this,e=n.modelValue;return e||(n.rowData?n.rowData:n.gridOptions.rowData)},getProvides(){let n=O(),e={};for(;n;)n&&n.provides&&(e=Object.assign(Object.assign({},e),n.provides)),n=n.parent;return e},skipChange(n,e,s){if(this.gridReadyFired&&n==="rowData"&&this.$attrs[m]){if(e===s)return!0;if(e&&s){const t=e,i=s;if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])return!1;return!0}}}return!1},debounce(n,e){let s;return()=>{const t=function(){n()};window.clearTimeout(s),s=window.setTimeout(t,e)}}},mounted(){this.emitRowModel=this.debounce(()=>{this.$emit(F,Object.freeze(this.getRowData()))},20);const n=this.getProvides(),e=new c(this,n),s=h(l.copyAttributesToGridOptions(u(this.gridOptions),this,!0));this.checkForBindingConflicts();const t=this.getRowDataBasedOnBindings();s.rowData=t&&(Object.isFrozen(t)?t:h(u(t)));const i={globalEventListener:this.globalEventListener.bind(this),frameworkOverrides:new M(this),providedBeanInstances:{frameworkComponentWrapper:e},modules:this.modules};new A(this.$el,s,i),this.gridCreated=!0},unmounted(){this.gridCreated&&(this.gridOptions.api&&this.gridOptions.api.destroy(),this.isDestroyed=!0)}});export{T as A};
