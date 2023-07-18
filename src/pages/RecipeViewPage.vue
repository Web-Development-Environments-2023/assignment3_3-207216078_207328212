<template>
  <div style="margin-top:100px">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4" >
        <img :src="recipe.image" class="center" />
        <center><h1>{{ recipe.title }}</h1></center>
        <center><b-button v-if="$root.store.username" :disabled="recipe.favorite" @click="handleFavoriteClick">
          {{ recipe.favorite ? 'Recipe In Your Favorites' : addTofavoritesButtonTxt }}
        </b-button></center>
      </div>
      <center>
      <div class="recipe-body" >
        <div class="wrapper">
          <div class="wrapped">
            <div >
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div v-if="recipe.popularity && recipe.popularity.length != 0">Likes: {{ recipe.popularity }} likes</div>
              <div v-else>Likes: 0 likes</div>
              <div>Vegan
                <svg v-if="recipe.vegan" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>Vegetarian
                <svg v-if="recipe.vegetarian" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>Gluten Free
                <svg v-if="recipe.glutenFree" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div v-if="$root.store.username">Seen
                <svg v-if="recipe.seen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div v-if="$root.store.username">Favorite
                <svg v-if="recipe.favorite" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>
                <div v-if="recipe.servings">
                  Servings: {{recipe.servings}} 
                 </div>
                 <div v-else>
                  Servings: {{1}} 
                 </div>
              </div>

            </div>
            <h3>
              Ingredients
            </h3>
            <div v-if="recipe.popularity!=-2">
              <ul>
                <li
                  v-for="(r, index) in recipe.extendedIngredients"
                  :key="index + '_' + r.id"
                >
                  {{ r.original }}
                </li>
              </ul>
            </div>
            <div v-else>
       
                <li
                  v-for="(r, index) in recipe.extendedIngredients"
                  :key="index + '_' + r.ingredient_name"
              
              >
                  {{ r.ingredient_name }} : {{ r.amount }} {{r.units}}
              </li>
             
            </div>
          </div>
          <!-- <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ (s.step != '') ? s.step : null }}
              </li>
            </ol>
          </div> -->
          <h3 class="">
             Instructions
          </h3>
            <br>
          <div class="wrapped" v-if="recipe.instructions && recipe.instructions.length != 0">
            <br>
            <p>{{recipe.instructions}}</p>
          </div>
          <div v-else><br>There Are No Instructions Available For This Recipe.
          </div>
        </div>
      </div>
    </center>
      <pre>

    </pre
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      isFavorite: false,
      addTofavoritesButtonTxt: "Add To Favorites"
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        // this.axios.defaults.withCredentials = true; 
        response = await this.axios.get(

          this.$root.store.server_domain + "/recipes/extendInfo/" + this.$route.params.recipeId,
          {
            params: { id: this.$route.params.recipeId }
          },
           {withCredentials: true}
        );

        // console.log("response.status", response.status);
        console.log("response");
        console.log(response);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        title,
        image,
        readyInMinutes,
        popularity,
        vegan,
        vegetarian,
        glutenFree,
        seen,
        favorite,
        servings,
        instructions,
        extendedIngredients
      } = response.data;

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //     return fstep.steps;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        title,
        image,
        readyInMinutes,
        popularity,
        vegan,
        vegetarian,
        glutenFree,
        seen,
        favorite,
        servings,
        instructions,
        extendedIngredients
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async handleFavoriteClick() {

      try {
    
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          { recipeId: this.$route.params.recipeId },
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          {withCredentials: true}
        );
        this.isFavorite = true;
        this.addTofavoritesButtonTxt = "Already In Favorites"
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
/* 
.container {
  margin-top: 0px;
}
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
} */
.wrapper {
  border: 1px solid #00ffea;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 800px;
}

.recipe-body {
  border: 1px solid #000000;
  padding: 10px;
  max-width: 850px;
}
.recipe-body h3 {
  color: #575353;
  font-weight: bold;
}

.recipe-body li {
  color: #6d9273;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
