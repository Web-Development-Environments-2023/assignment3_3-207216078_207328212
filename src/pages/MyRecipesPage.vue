<template>
  <b-container>
    <center><h1>My Recipes</h1></center>
    <b-row class="recipe-preview-wrapper">
      <b-col v-for="(recipe, index) in recipes" :key="recipe.id" :lg="6" :md="6" :sm="12">
        <div >
          <RecipePreview class="recipe-preview" :recipe="recipe[0]" />
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
      this.getRecipes();
    },

    methods: {
      async getRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/myRecipesPreview",
          {withCredentials: true}
        );

        if (response.data.length == 0) {
          this.$router.replace("/");
          alert("You don't have recipes saved :(");
        }

        const recipess = response.data;

        // Loop over recipes and update the popularity value - 100
        this.recipess = recipess.map(recipe => {
          recipe[0].popularity = 100;
          return recipe[0];
        });
        console.log(recipess);
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
    margin: 0 auto;
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
  