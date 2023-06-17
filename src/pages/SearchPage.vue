<template>
  <div class="container">
    <h1 class="title">Search Page</h1>

    <div class="search-form">
      <div>
        <label for="searchQuery">Search:</label>
        <input type="text" id="searchQuery" v-model="searchQuery" placeholder="What do you want to make?" />
      </div>

      <div>
        <label for="resultsCount">How many recipes do you want?:</label>
        <label>
          <input type="radio" v-model="resultsCount" value="5" />
          5
        </label>
        <label>
          <input type="radio" v-model="resultsCount" value="10" />
          10
        </label>
        <label>
          <input type="radio" v-model="resultsCount" value="15" />
          15
        </label>
      </div>

      <div>
        <label for="cuisine">Filter By Cuisine:</label>
        <select id="cuisine" v-model="selectedCuisine">
          <option value="">No Filter</option>
          <option value="cuisine1">Cuisine 1</option>
          <option value="cuisine2">Cuisine 2</option>
          <option value="cuisine3">Cuisine 3</option>
        </select>
      </div>

      <div>
        <label for="diet">Filter By Diet:</label>
        <select id="diet" v-model="selectedDiet">
          <option value="">No Filter</option>
          <option value="diet1">Diet 1</option>
          <option value="diet2">Diet 2</option>
          <option value="diet3">Diet 3</option>
        </select>
      </div>

      <div>
        <label for="intolerance">Filter By Intolerance:</label>
        <select id="intolerance" v-model="selectedIntolerance">
          <option value="">No Filter</option>
          <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
        </select>
      </div>

      <div>
        <button @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      searchQuery: "",
      resultsCount: null,
      selectedCuisine: "",
      selectedDiet: "",
      selectedIntolerance: "",
      intolerances:[
          "dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut" , "wheat"
        ],       





    };
  },
  methods: {
    search() {
      // Handle search functionality here
      // You can access the selected values using this.selectedCuisine, this.selectedDiet, this.selectedIntolerance
    }
  }
};
</script>

<style>
.container {
  /* Add styling for the container */
}

.title {
  /* Add styling for the title */
}

.search-form {
  /* Add styling for the search form */
}
</style>
