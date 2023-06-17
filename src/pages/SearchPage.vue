<template>
  <div class="container">
    <h1 class="title">Search Page</h1>

    <div class="search-form">
      <div class="form-group">
        <label for="searchQuery">Search:</label>
        <input type="text" id="searchQuery" v-model="searchQuery" placeholder="What do you want to make?" class="wide-input" />
      </div>

      <div class="form-group">
        <label for="resultsCount">How many recipes do you want?</label>
        <div class="radio-group">
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
      </div>

      <div class="form-group">
        <label for="cuisine">Filter By Cuisine:</label>
        <select id="cuisine" v-model="selectedCuisine">
          <option value="">No Filter</option>
          <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="diet">Filter By Diet:</label>
        <select id="diet" v-model="selectedDiet">
          <option value="">No Filter</option>
          <option v-for="diet in diets" :key="diet" :value="diet">{{ diet }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="intolerance">Filter By Intolerance:</label>
        <select id="intolerance" v-model="selectedIntolerance">
          <option value="">No Filter</option>
          <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
        </select>
      </div>

      <!-- <div class="form-group">
        <button @click="SortByPopularity">Sort By Popularity</button>
        <button @click="SortByPreparationTime">Sort By Preparation Time</button>
      </div> -->

      <div class="form-group">
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
      resultsCount: 5,
      selectedCuisine: "",
      selectedDiet: "",
      selectedIntolerance: "",
      intolerances: [
        "dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"
      ],
      diets: [
        "dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"
      ],
      cuisines: [
        "dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"
      ],
    };
  },
  methods: {
    async search() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/query/" + this.searchQuery,
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          {
            params: {
              query: this.$route.params.query,
              number: this.resultsCount,
              cuisine: this.selectedCuisine ,
              diet: this.selectedDiet,
              intolerance: this.selectedIntolerance        
            } 
          }, 
          {
            withCredentials: true
          }
        );

        console.log(response);
        const recipess = response.data;
        this.recipes = [];
        this.recipes.push(...recipess);
         console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  /* Add styling for the title */
}

.search-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.radio-group {
  display: flex;
  gap: 10px;
  margin-left: 80px;
}

button {
  margin-top: 10px;
}

.wide-input {
  width: 100%;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.label {
  margin-left: 60px;
}

.form-group button {
  margin-right: 10px; 
}


</style>
