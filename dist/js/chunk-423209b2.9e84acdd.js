(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423209b2"],{cdce:function(e,t,s){"use strict";var i=s("d537"),c=s.n(i);c.a},d537:function(e,t,s){},fda7:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("center",[s("h1",[e._v("My Recipes")])]),s("b-row",{staticClass:"recipe-preview-wrapper"},e._l(e.recipes,(function(t,i){return s("b-col",{key:t.id,attrs:{lg:6,md:6,sm:12}},[s("div",[s("RecipePreview",{staticClass:"recipe-preview",attrs:{recipe:t[0]}})],1),(i+1)%2===0?s("b-col",{staticClass:"clearfix"}):e._e()],1)})),1)],1)},c=[],r=s("832a"),a={name:"MyRecipesPage",components:{RecipePreview:r["a"]},data(){return{pageTitle:"My Recipes",recipes:[]}},created(){this.getRecipes()},methods:{async getRecipes(){try{const e=await this.axios.get(this.$root.store.server_domain+"/users/myRecipesPreview",{withCredentials:!0});0==e.data.length&&(this.$router.replace("/"),alert("You don't have recipes saved :("));const t=e.data;this.recipess=t.map(e=>(e[0].popularity=100,e[0])),console.log(t),this.recipes=[],this.recipes.push(...t)}catch(e){console.log(e)}}}},n=a,o=(s("cdce"),s("2877")),p=Object(o["a"])(n,i,c,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-423209b2.9e84acdd.js.map