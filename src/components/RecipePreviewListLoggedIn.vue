<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div class="recipe-preview-list">
      <RecipePreview v-for="r in recipes" :key="r.id" class="recipePreview" :recipe="r"/>
    </div>
  </b-container>
</template>
  
  <script>
  import RecipePreview from "./RecipePreview.vue";
  export default {
    name: "RecipePreviewListLoggedIn",
    components: {
      RecipePreview
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
      async updateRecipes() {
        try {
          // this.axios.defaults.withCredentials = true; 
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/seen",
            // "https://test-for-3-2.herokuapp.com/recipes/random"
            {withCredentials: true}
          );
          // this.axios.defaults.withCredentials = false;
          const recipess = response.data;
          this.recipes = [];
          this.recipes.push(...recipess);
          //  console.log(this.recipes);
        } catch (error) {
          // console.log(error);
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
  }

  .recipe-preview-list-Logged-in {
    display: inline-flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 500px;
  width: 200px;
}

  </style>
  