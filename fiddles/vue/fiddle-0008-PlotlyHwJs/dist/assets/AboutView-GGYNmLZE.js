import{z as o,c as r,o as a}from"./vendor-qCk20sHB.js";import{_ as c}from"./index-ZcecUZBw.js";const s={name:"AboutView",data(){return{content:"loading ..."}},mounted(){window.location.pathname.replace("/about",""),fetch("README.md").then(e=>e.text()).then(e=>this.bindText(e))},components:{},computed:{markdownToHtml(){return o.parse(this.content)}},methods:{bindText(t){console.log(t),this.content=t}}},d=["innerHTML"];function i(t,e,m,l,p,n){return a(),r("div",{innerHTML:n.markdownToHtml},null,8,d)}const h=c(s,[["render",i],["__scopeId","data-v-9dc45e38"]]);export{h as default};
