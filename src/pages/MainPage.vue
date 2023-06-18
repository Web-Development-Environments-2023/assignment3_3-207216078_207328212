<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
      <div class="split-container">
        <div class="recipes-column">
          <RecipePreviewList ref="randomPreview" title="Explore this recipes" class="RandomRecipes center" />
          <div class="refresh-button">
            <button @click="refreshRecipes">Refresh Recipes</button>
          </div>
        </div>
        <div class="login-column">
          <!-- <Login v-if="!$root.store.username" style="margin-top: 20%;"></Login> -->
          <!-- <RecipePreviewListLoggedIn v-else title="Last Watched Recipes"></RecipePreviewListLoggedIn> -->
          <RecipePreviewListLoggedIn v-if="!$root.store.username" title="Last watched recipes"></RecipePreviewListLoggedIn>
        </div>
      </div>
  </div>
</template>



<script>
import RecipePreviewList from "../components/RecipePreviewList";
// import Login from "../components/Login";
import RecipePreviewListLoggedIn from "../components/RecipePreviewListLoggedIn";


export default {
  components: {
    RecipePreviewList,
    // Login
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
  margin-top: 100px;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  margin-bottom: 20px;
}

.recipes-column {
  float: left;
  width: 50%;
}

.login-column {
  float: left;
  width: 50%;
}

.split-container {
  display: flex;
  margin-left: 0px;
}

.refresh-button {
  margin-top: 20px;
  text-align: center;
}

.container::after {
  content: "";
  display: table;
  clear: both;
}
</style>

