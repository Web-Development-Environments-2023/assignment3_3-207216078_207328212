(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d0b290"],{2413:function(e,t,r){},37906:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"search-form"},[r("h1",{staticClass:"title"},[e._v("Search Page")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"searchQuery"}},[e._v("Search:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"wide-input",staticStyle:{width:"220px","margin-left":"20px"},attrs:{type:"text",id:"searchQuery",placeholder:"What do you want to make?"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"resultsCount"}},[e._v("How many recipes do you want?")]),r("div",{staticClass:"radio-group"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.resultsCount,expression:"resultsCount"}],attrs:{type:"radio",value:"5"},domProps:{checked:e._q(e.resultsCount,"5")},on:{change:function(t){e.resultsCount="5"}}}),e._v(" 5 ")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.resultsCount,expression:"resultsCount"}],attrs:{type:"radio",value:"10"},domProps:{checked:e._q(e.resultsCount,"10")},on:{change:function(t){e.resultsCount="10"}}}),e._v(" 10 ")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.resultsCount,expression:"resultsCount"}],attrs:{type:"radio",value:"15"},domProps:{checked:e._q(e.resultsCount,"15")},on:{change:function(t){e.resultsCount="15"}}}),e._v(" 15 ")])])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cuisine"}},[e._v("Filter By Cuisine:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCuisine,expression:"selectedCuisine"}],staticStyle:{"margin-left":"20px"},attrs:{id:"cuisine"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCuisine=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("No Filter")]),e._l(e.cuisines,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"diet"}},[e._v("Filter By Diet:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedDiet,expression:"selectedDiet"}],staticStyle:{"margin-left":"20px"},attrs:{id:"diet"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedDiet=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("No Filter")]),e._l(e.diets,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"intolerance"}},[e._v("Filter By Intolerance:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedIntolerance,expression:"selectedIntolerance"}],staticStyle:{"margin-left":"20px"},attrs:{id:"intolerance"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedIntolerance=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("No Filter")]),e._l(e.intolerances,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),r("div",[r("div",{staticStyle:{display:"inline-block",padding:"20px"}},[r("b-button",{attrs:{variant:"success"},on:{click:e.search}},[e._v("Search")])],1),r("div",{staticStyle:{display:"inline-block"}},[r("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:e.resetSearch}},[e._v("Reset")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0!=this.$root.store.array_search.length,expression:"this.$root.store.array_search.length != 0"}],staticStyle:{float:"right",display:"inline-block","margin-top":"10px","margin-left":"50px"}},[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Sort",variant:"warning"}},[r("b-button",{on:{click:e.SortByPopularity}},[e._v("Popularity")]),r("b-button",{on:{click:e.SortByPreparationTime}},[e._v("Time")])],1)],1)]),r("div",{attrs:{id:"res"}},[r("center",[r("RecipePreviewListSearch",{attrs:{recipes:this.$root.store.array_search}})],1)],1)])])},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("br"),r("b-row",e._l(e.recipes.slice(0,5),(function(e){return r("b-col",{key:e.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1),r("br"),r("b-row",e._l(e.recipes.slice(5,10),(function(e){return r("b-col",{key:e.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1),r("br"),r("b-row",e._l(e.recipes.slice(10,15),(function(e){return r("b-col",{key:e.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},n=[],o=r("832a"),l={name:"RecipePreviewListSearch",components:{RecipePreview:o["a"]},props:{recipes:{type:Array,required:!0}}},c=l,u=(r("6644"),r("2877")),p=Object(u["a"])(c,i,n,!1,null,"1402c501",null),d=p.exports,h={name:"SearchPage",components:{RecipePreviewListSearch:d},data(){return{searchQuery:null,resultsCount:5,selectedCuisine:null,selectedDiet:null,selectedIntolerance:null,response:[],intolerances:["dairy","egg","gluten","grain","peanut","seafood","sesame","shellfish","soy","sulfite","tree nut","wheat"],diets:["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Whole30"],cuisines:["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"]}},methods:{async search(){try{if(!this.searchQuery)return void alert("Please fill the query of the serach field.");if(this.response=await this.axios.get(this.$root.store.server_domain+"/recipes/search/"+this.searchQuery,{params:{query:this.$route.params.query,number:this.resultsCount,cuisine:this.selectedCuisine,diet:this.selectedDiet,intolerance:this.selectedIntolerance}},{withCredentials:!0}),0==this.response.data.length)return void alert("No recipes found to your search, please try again");console.log("serachpage - respons"),console.log(this.response),200!==this.response.status&&this.$router.replace("/NotFound"),this.response=this.response.data,this.$root.store.array_search=this.response}catch(e){console.log(e),this.$router.replace("/NotFound")}},SortByPopularity(){console.log("sortbypopularity"),this.response=[];let e=this.$root.store.array_search;e.sort((function(e,t){return parseInt(t.popularity)-parseInt(e.popularity)})),this.response=e,this.$forceUpdate()},SortByPreparationTime(){this.response=[];let e=this.$root.store.array_search;e.sort((function(e,t){return parseInt(t.readyInMinutes)-parseInt(e.readyInMinutes)})),this.response=e,this.$forceUpdate()},resetSearch(){this.searchQuery=null,this.resultsCount=5,this.selectedCuisine=null,this.selectedDiet=null,this.selectedIntolerance=null}}},v=h,m=(r("fb3f"),Object(u["a"])(v,s,a,!1,null,null,null));t["default"]=m.exports},6644:function(e,t,r){"use strict";var s=r("ec19"),a=r.n(s);a.a},ec19:function(e,t,r){},fb3f:function(e,t,r){"use strict";var s=r("2413"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-57d0b290.50b99361.js.map