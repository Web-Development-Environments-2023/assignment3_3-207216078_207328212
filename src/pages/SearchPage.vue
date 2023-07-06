<template>
  <div class="container">

      <div class="search-form" >
      
        <h1 class="title">Search Page</h1>

      <div class="form-group">
        <label for="searchQuery">Search:</label>
        <input type="text" id="searchQuery" v-model="searchQuery" placeholder="What do you want to make?" class="wide-input" style="width: 220px;"/>
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
      <div>
        <div style="display:inline-block; padding:20px">
          <!-- <button @click="search">Search</button> -->
          <b-button variant="success" @click="search">Search</b-button>
        </div>

        <div style="display:inline-block"> 
              <b-button type="reset" variant="danger" @click="resetSearch">Reset</b-button>
            </div>
        <div style="float:right; display:inline-block; margin-top: 10px; margin-left:50px;" v-show="this.$root.store.array_search.length != 0">
              <b-dropdown id="dropdown-1" text="Sort" class="m-md-2" variant="warning" >
                <b-button @click="SortByPopularity">Popularity</b-button>
                <b-button @click="SortByPreparationTime">Time</b-button>
              </b-dropdown>
        </div>
      </div>
      <div id="res">
        <center><RecipePreviewListSearch :recipes="this.$root.store.array_search"></RecipePreviewListSearch></center>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewListSearch from "../components/RecipePreviewListSearch";
export default {
  
  name: "SearchPage",
  components: { RecipePreviewListSearch },
  data() {
    return {
      searchQuery: null,
      resultsCount: 5,
      selectedCuisine: null,
      selectedDiet: null,
      selectedIntolerance: null,
      response:[],
      // intolerance: null,
      // diet: null,
      // cuisine: null,

      intolerances: [
        "dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"
      ],
      diets: [
        "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"
      ],
      cuisines: [
        "African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German",
        "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern",
        "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
      ],
    };
  },
  methods: {

    async search() {
      try {
        if (!this.searchQuery) {
          alert("Please fill the query of the serach field.");
          return;
        }

        this.response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/search/" + this.searchQuery,
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

        if (this.response.data.length == 0) {
          alert("No recipes found to your search, please try again");
          return;
        }
        console.log("serachpage - respons");
        console.log(this.response);
        if (this.response.status !== 200) {
          this.$router.replace("/NotFound");
        }

        this.response = this.response.data;
        this.$root.store.array_search = this.response;

      } catch (error) {
        // this.resetSearch();
        console.log(error);
        this.$router.replace("/NotFound");
      };
      
      // seems that the params works good :)
      // console.log(this.searchQuery);
      // console.log(this.$route.params.query);
      // console.log(this.resultsCount);
      // console.log(this.selectedCuisine);
      // console.log(this.selectedDiet);
      // console.log(this.selectedIntolerance );
    },

    SortByPopularity() {
      console.log("sortbypopularity")
      this.response = [];
        let sorted_arr = this.$root.store.array_search;
        sorted_arr.sort(function comparePopularity(a,b) {
          return parseInt(a.popularity) - parseInt(b.popularity);
        });
        this.response = sorted_arr;
        this.$forceUpdate();
    }, 

    SortByPreparationTime() {
      this.response = [];
        let sorted_arr = this.$root.store.array_search;
        sorted_arr.sort(function compareTime(a,b) {
          return parseInt(a.readyInMinutes) - parseInt(b.readyInMinutes);
        });
        this.response = sorted_arr;
        this.$forceUpdate();
    },

    resetSearch() {
      this.searchQuery = null,
      this.resultsCount = 5,
      this.selectedCuisine = null,
      this.selectedDiet = null,
      this.selectedIntolerance = null
    }
  }
};
</script>

<style>

.container {
  margin-top: 5%;
}

.search-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  position:relative;
   align-items: center;
   justify-content: center; 

}
.title{
  margin-bottom: 20px;
}
/* .form-group {
  margin-bottom: 10px;
} */

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
  /* display: inline-block; */
  /* align-items: center;
  justify-content: flex-start; */
  display: flex;
  align-items: center;
}

.label {
  margin-left: 60px;
}

.form-group button {
  margin-right: 10px; 
}


</style>
