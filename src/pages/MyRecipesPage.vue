<template>
  <b-container>
    <h1>My Recipes</h1>
    <b-row>
      <b-col v-for="(recipe, index) in recipes" :key="recipe.id" :lg="6" :md="6" :sm="12">
        <div class="recipe-preview-wrapper">
          <RecipePreview class="recipePreview" :recipe="recipe" />
        </div>
        <b-col v-if="(index + 1) % 2 === 0" class="clearfix"></b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
  export default {
    name: "MyRecipesPage",
    components: {
      RecipePreview
    },
    data() {
        return {
            pageTitle: 'My Recipes',
            recipes: []
        };
    }, 

    created() {
      this.getFavoriteRecipes();
    },

    methods: {
      async getFavoriteRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/myRecipes",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          {withCredentials: true}
        );

        if (response.data.length == 0) {
          this.$router.replace("/");
          alert("You don't have recipes saved :(");
        }

        console.log(response);
        const recipess = response.data;
        this.recipes = [];
        this.recipes.push(...recipess);
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

  </script>
  
  <style>
  .container {
    margin: 0 auto;
    margin-top: 10%;
  }

  .recipe-preview-wrapper {
  margin-bottom: 15px;
}

.clearfix {
  clear: both;
}
  </style>
  