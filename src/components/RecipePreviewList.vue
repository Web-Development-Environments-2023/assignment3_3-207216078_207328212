<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div class="recipe-preview-list">
      <RecipePreview v-for="r in recipes" :key="r.id" class="recipePreview" :recipe="r" />
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
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
          this.$root.store.server_domain + "/recipes/random",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          {withCredentials: true}
        );

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

<style scoped>
.recipe-preview-list {
  
  display: inline-flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;

}


</style>
