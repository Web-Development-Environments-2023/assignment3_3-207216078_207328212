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
            
            <div v-if="$root.store.username" style="display: flex; align-items: center; justify-content: center;">
              <span v-if="recipe.favorite" style="margin-left: 5px;">Recipe is in your favorites! </span>
              <svg v-if="recipe.favorite" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <span v-if="!recipe.favorite" style="margin-left: 5px;">Add recipe to your favorites! </span>
              <svg v-if="!recipe.favorite" @click="handleFavoriteClick(recipe.id)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" class="bi bi-star custom-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>            
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
    async handleFavoriteClick(recipeIdparam) {
      try {
        console.log(recipeIdparam);
        const response = await this.axios.post(
        this.$root.store.server_domain + "/users/favorites",
        { recipeId: recipeIdparam },
        // "https://test-for-3-2.herokuapp.com/recipes/random"
        {withCredentials: true}
        );
        this.recipe.favorite = true; 
        console.log(response);
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

.custom-star:hover {
    cursor: pointer;
  }

</style>

