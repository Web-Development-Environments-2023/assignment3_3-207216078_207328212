<template>
  <b-container>
    <center><h1>My Favorites Recipes</h1></center>
    <b-row class="recipe-preview-wrapper">
      <b-col v-for="(recipe, index) in recipes" :key="recipe.id" :lg="6" :md="6" :sm="12">
        <div >
          <RecipePreview class="recipe-preview" :recipe="recipe"/>
        </div>
        <b-col v-if="(index + 1) % 2 === 0" class="clearfix"></b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
  export default {
    name: "MyFavoritesPage",
    components: {
      RecipePreview
    },
    data() {
        return {
            pageTitle: 'My Favorite Recipes',
            recipes: []
        };
    }, 

    created() {
      this.getFavoriteRecipes();
    },

    methods: {
      async getFavoriteRecipes() {
      try {
        // this.axios.defaults.withCredentials = true; 
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favorites",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          {withCredentials: true}
        );

        if (response.data.length == 0) {
          this.$router.replace("/");
          alert("You don't have favorite recipes yet :(");
        }
        
        const recipess = response.data;
        this.recipes = [];
        this.recipes.push(...recipess);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

  </script>
  
  <style>
.container {
  margin-top: 10%;
}

.recipe-preview-wrapper {
  margin-bottom: 15px;
}

.recipe-preview-wrapper .recipe-preview {
  margin-right: 20%;
}
.clearfix {
  clear: both;
}
  </style>
  