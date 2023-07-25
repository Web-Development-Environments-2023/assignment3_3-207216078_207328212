<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <RecipePreviewList ref="randomPreview" title="Explore these recipes" class="RandomRecipes center" />
        <div style="display: inline-block; justify-content: center; align-items: center; height: 100%;">
          <b-button type="reset" variant="warning" @click="refreshRecipes">Refresh Recipes</b-button>
        </div>
      </div>
      <div class="col-lg-6">
        <Login v-if="!$root.store.username" style="margin-top: 20%;"></Login>
        <RecipePreviewListLoggedIn v-if="$root.store.username" title="Last watched recipes"></RecipePreviewListLoggedIn>
      </div>
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
  margin-top: 100px;
  margin-bottom: 20px;
}

.recipes-column {
  float: left;
  width: 50%;
  margin-right: 10%;
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

.container-fluid {
  padding: 0; 
}

.title {
  text-align: center;
  padding: 20px;
}

.row {
  margin-left: 30px;
  margin-right: 0; 
}

.col-lg-6 {
  padding: 15px;
}
</style>

