(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32036a00"],{6619:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"margin-top":"100px"}},[e.recipe?i("div",[i("div",{staticClass:"recipe-header mt-3 mb-4"},[i("img",{staticClass:"center",attrs:{src:e.recipe.image}}),i("center",[i("h1",[e._v(e._s(e.recipe.title))])]),i("center",[e.$root.store.username?i("b-button",{attrs:{disabled:e.recipe.favorite},on:{click:e.handleFavoriteClick}},[e._v(" "+e._s(e.recipe.favorite?"Recipe In Your Favorites":e.addTofavoritesButtonTxt)+" ")]):e._e()],1)],1),i("center",[i("div",{staticClass:"recipe-body"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"wrapped"},[i("div",[i("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),e.recipe.popularity&&0!=e.recipe.popularity.length?i("div",[e._v("Likes: "+e._s(e.recipe.popularity)+" likes")]):i("div",[e._v("Likes: 0 likes")]),i("div",[e._v("Vegan "),e.recipe.vegan?i("svg",{staticClass:"bi bi-check-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e._v("> "),i("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}})]):i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]),i("div",[e._v("Vegetarian "),e.recipe.vegetarian?i("svg",{staticClass:"bi bi-check-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e._v("> "),i("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}})]):i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]),i("div",[e._v("Gluten Free "),e.recipe.glutenFree?i("svg",{staticClass:"bi bi-check-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e._v("> "),i("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}})]):i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]),e.$root.store.username?i("div",[e._v("Seen "),e.recipe.seen?i("svg",{staticClass:"bi bi-check-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e._v("> "),i("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}})]):i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]):e._e(),e.$root.store.username?i("div",[e._v("Favorite "),e.recipe.favorite?i("svg",{staticClass:"bi bi-check-circle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e._v("> "),i("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}})]):i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]):e._e(),i("div",[e.recipe.servings?i("div",[e._v(" Servings: "+e._s(e.recipe.servings)+" ")]):i("div",[e._v(" Servings: "+e._s(1)+" ")])])]),i("h3",[e._v(" Ingredients ")]),-2!=e.recipe.popularity?i("div",[i("ul",e._l(e.recipe.extendedIngredients,(function(t,r){return i("li",{key:r+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]):i("div",e._l(e.recipe.extendedIngredients,(function(t,r){return i("li",{key:r+"_"+t.ingredient_name},[e._v(" "+e._s(t.ingredient_name)+" : "+e._s(t.amount)+" "+e._s(t.units)+" ")])})),0)]),i("h3",{},[e._v(" Instructions ")]),i("br"),e.recipe.instructions&&0!=e.recipe.instructions.length?i("div",{staticClass:"wrapped"},[i("br"),i("p",[e._v(e._s(e.recipe.instructions))])]):i("div",[i("br"),e._v("There Are No Instructions Available For This Recipe. ")])])])]),i("pre",[e._v("\n  ")])],1):e._e()])},s=[],a={data(){return{recipe:null,isFavorite:!1,addTofavoritesButtonTxt:"Add To Favorites"}},async created(){try{let t;try{t=await this.axios.get(this.$root.store.server_domain+"/recipes/extendInfo/"+this.$route.params.recipeId,{params:{id:this.$route.params.recipeId}},{withCredentials:!0}),console.log("response"),console.log(t),200!==t.status&&this.$router.replace("/NotFound")}catch(e){return console.log("error.response.status",e.response.status),void this.$router.replace("/NotFound")}let{title:i,image:r,readyInMinutes:s,popularity:a,vegan:n,vegetarian:o,glutenFree:l,seen:c,favorite:v,servings:d,instructions:p,extendedIngredients:h}=t.data,g={title:i,image:r,readyInMinutes:s,popularity:a,vegan:n,vegetarian:o,glutenFree:l,seen:c,favorite:v,servings:d,instructions:p,extendedIngredients:h};this.recipe=g}catch(e){console.log(e)}},methods:{async handleFavoriteClick(){try{const e=await this.axios.post(this.$root.store.server_domain+"/users/favorites",{recipeId:this.$route.params.recipeId},{withCredentials:!0});this.isFavorite=!0,this.addTofavoritesButtonTxt="Already In Favorites",console.log(e)}catch(e){console.log(e)}}}},n=a,o=(i("bd32"),i("2877")),l=Object(o["a"])(n,r,s,!1,null,"dddc49aa",null);t["default"]=l.exports},baab:function(e,t,i){},bd32:function(e,t,i){"use strict";var r=i("baab"),s=i.n(r);s.a}}]);
//# sourceMappingURL=chunk-32036a00.11135c91.js.map