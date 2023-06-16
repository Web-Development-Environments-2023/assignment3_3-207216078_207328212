<template>
    <b-container>
      <h3>
        {{ title }}:
        <slot></slot>
      </h3>
      <b-col>
        <b-row v-for="r in recipes" :key="r.id">
        <div class="recipe-preview-list-Logged-in">
          <RecipePreview class="recipePreview" :recipe="r" />
        </div>
        </b-row>
      </b-col>
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
          console.log("why")
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/seen",
            // "https://test-for-3-2.herokuapp.com/recipes/random"
            // {withCredentials: true}
            {withCredentials: true}
          );
  
          console.log(response);
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 200px;
  width: 200px;
  margin-left: auto;
}

  </style>
  