<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <b-button :disabled="isFavorite" @click="handleFavoriteClick">{{ addTofavoritesButtonTxt }}</b-button>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
              <div>Vegan
                <svg v-if="recipe.vegan" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
              <div>Vegetarian
                <svg v-if="recipe.vegetarian" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
              <div>Gluten Free
                <svg v-if="recipe.glutenFree" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>

              <!-- <svg v-if="recipe.favorite" class="favorite-icon" style="position: absolute; top: 5px; left: 5px;">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" style="fill: yellow;" />
              </svg>
              <a @click="handleFavoriteClick" v-if="!recipe.favorite" class="favorite-icon" style="position: absolute; top: 5px; left: 5px;">
                <svg>
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" style="fill: yellow;" />
                </svg>
              </a> -->
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <!-- <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li> -->
            </ol>
          </div>
        </div>
      </div>
      <pre>
      {{ $route.params }}
      {{ recipe }}
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
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        // analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response.data;

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //     return fstep.steps;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        // _instructions,
        // analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async handleFavoriteClick() {
      console.log("hey, recipe added")
      console.log( this.$route.params.recipeId)
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

.container {
  margin-top: 0px;
}
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
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
