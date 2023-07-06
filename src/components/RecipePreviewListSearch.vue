<template>
    <b-container>
      <br>
      <b-row>
        <b-col v-for="r in recipes.slice(0,5)" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col v-for="r in recipes.slice(5,10)" :key="r.id" >
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col v-for="r in recipes.slice(10,15)" :key="r.id" >
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import RecipePreview from "./RecipePreview";
  export default {
    name: "RecipePreviewListSearch",
    components: {
      RecipePreview
    },
    props: {
      recipes: {
          type: Array,
          required: true
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
  }
  </style>