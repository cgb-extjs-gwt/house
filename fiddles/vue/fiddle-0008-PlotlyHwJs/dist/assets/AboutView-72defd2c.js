import{z as o,o as c,c as a}from"./vendor-f871e513.js";import{_ as r}from"./index-a467a400.js";const s={name:"AboutView",data(){return{content:"loading ..."}},mounted(){window.location.pathname.replace("/about",""),fetch("README.md").then(t=>t.text()).then(t=>this.bindText(t))},components:{},computed:{markdownToHtml(){return o.parse(this.content)}},methods:{bindText(e){console.log(e),this.content=e}}},d=["innerHTML"];function _(e,t,i,m,l,n){return c(),a("div",{innerHTML:n.markdownToHtml},null,8,d)}const h=r(s,[["render",_],["__scopeId","data-v-9dc45e38"]]);export{h as default};
