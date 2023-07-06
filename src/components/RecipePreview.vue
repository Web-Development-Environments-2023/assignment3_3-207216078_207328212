<template>

    <div>
      <b-card no-body class="overflow-hidden" style=" margin-top: 10%; min-width: 528px; max-width: 600px;">
        <b-row no-gutters>
          <b-col md="6">
            <div style="position: relative;">
              <router-link
                :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
                class="recipe-preview"
                style="text-decoration: none; color: black;">
              <b-card-img v-if="recipe.image != null && recipe.image != 'null' && recipe.image != undefined && recipe.image != 'undefined'" :src="recipe.image" alt="Image" class="rounded-0 img-fluid" style="height: 200px; object-fit: cover;"></b-card-img>
            </router-link> 
            </div>
          </b-col>
          <b-col md="6">
              <b-card-body :title="recipe.title" class="recipe-title">

              <b-card-text>
                <li> Prepartion time: {{ recipe.readyInMinutes }} minutes</li>
                <li>{{ recipe.popularity }} likes</li>
                <li v-if="recipe.seen">come see recipe again!</li>
                <li v-if="!recipe.seen">you never seen this recipe! </li>
                <svg v-if="recipe.vegan" style="margin-right: 5px; position: flex; bottom: 2px; left: 5px; width: 60px; height: 30px;">
                  <ellipse cx="30" cy="15" rx="30" ry="10" style="fill:green;" />
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12px">
                    Vegan
                  </text>
                </svg>
                <svg v-if="recipe.vegetarian" style="margin-right: 5px; position: flex; bottom: 2px; left: 90px; width: 80px; height: 30px;">
                  <ellipse cx="40" cy="15" rx="36" ry="10" style="fill:green;" />
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12px">
                  Vegetarian
                  </text>
                </svg>
                <svg v-if="recipe.glutenFree" style="margin-right: 5px; position: flex; bottom: 2px; left: 120px; width: 90px; height: 30px;">
                  <ellipse cx="40" cy="15" rx="40" ry="10" style="fill:green;" />
                  <text x="40%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12px">
                  Gluten Free
                  </text>
                </svg>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div> 
</template>


<script>
export default {

  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTitleStyle() {
      return {
        width: '130%',
        fontSize: this.calculateFontSize()
      };
    },
    calculateFontSize() {
      // Adjust the desired font sizes based on the card width
      const cardWidth = 600; // The width of the card
      const baseFontSize = 16; // The base font size
      const baseWidth = 130; // The base width in percentage

      // Calculate the proportional font size
      const widthRatio = cardWidth / baseWidth;
      const fontSize = baseFontSize * widthRatio;

      // Limit the font size to a maximum value if needed
      const maxFontSize = 20;
      const finalFontSize = Math.min(fontSize, maxFontSize);

      return `${finalFontSize}px`; // Convert to string with "px" unit
    }
  ,
    async handleFavoriteClick() {
      try {
        // this.axios.defaults.withCredentials = true; 
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          // {withCredentials: true}
        );

        if (response.data.length == 0) {
          this.$router.replace("/");
          alert("You don't have favorite recipes yet :(");
        }

        console.log(response);
        const recipess = response.data;
        this.recipes = [];
        this.recipes.push(...recipess);
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.recipe-overview {
  display: flex;
  justify-content: space-between;
}

.rounded-0 {
  height: 100%;
}

/* .card-body {
  font-size: 16px;
  padding: 10px;
}

.card-title {
  font-size: 18px;
  overflow-wrap: break-word;
} */

</style>

