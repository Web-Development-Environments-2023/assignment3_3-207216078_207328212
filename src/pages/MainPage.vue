<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="content-wrapper">
      <div class="recipes-column">
        <RecipePreviewList ref="randomPreview" title="Explore this recipes" class="RandomRecipes center" />
        
      </div>
      <div class="login-column">
        <Login v-if="!$root.store.username"></Login>
        <RecipePreviewListLoggedIn v-else title="Last Watched Recipes"></RecipePreviewListLoggedIn>
      </div>
    </div>
    <div class="refresh-button">
      <button @click="refreshRecipes">Refresh Recipes</button>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Login from "../components/Login";
import RecipePreviewListLoggedIn from "../components/RecipePreviewListLoggedIn";


export default {
  components: {
    RecipePreviewList,
    Login,
    RecipePreviewListLoggedIn
  },
  methods: {
    async refreshRecipes() {
      // Call the method to update the random recipes
      this.$refs.randomPreview.updateRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.recipes-column {
  flex: 1;
  margin-right: 20px;
}

.login-column {
  flex: 1;
}

.refresh-button {
  margin-top: 20px;
  text-align: center;
}
</style>
