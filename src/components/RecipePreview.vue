<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
    style="text-decoration: none; color: black;"
  >
    <div>
      <b-card no-body class="overflow-hidden" style="width: 600px; margin-top: 10%;">
        <b-row no-gutters>
          <b-col md="6">
            <div style="position: relative;">
              <svg v-if="recipe.favorite" class="favorite-icon" style="position: absolute; top: 5px; left: 5px;">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" style="fill: yellow;" />
              </svg>
              <b-card-img v-if="recipe.image != null && recipe.image != 'null' && recipe.image != undefined && recipe.image != 'undefined'" :src="recipe.image" alt="Image" class="rounded-0 img-fluid" style="height: 200px; object-fit: cover;"></b-card-img>
            </div>
          </b-col>
          <b-col md="6">
            <b-card-body :title="recipe.title" style="width: 130%; font-size: 16Spx  ;">
              <b-card-text>
                <li> Prepartion time: {{ recipe.readyInMinutes }} minutes</li>
                <li>{{ recipe.popularity }} likes</li>
                <li v-if="recipe.seen">come see recipe again!</li>
                <li v-if="!recipe.seen">you never seen this recipe! </li>
                <svg v-if="recipe.vegan" style="position: absolute; bottom: 5px; left: 5px; width: 40px; height: 30px;">
                  <ellipse cx="20" cy="15" rx="16" ry="10" style="fill:green;" />
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12px">
                    Vegan
                  </text>
                </svg>
                <svg v-if="recipe.vegetarian" style="position: absolute; bottom: 5px; left: 50px; width: 80px; height: 30px;">
                  <ellipse cx="40" cy="15" rx="36" ry="10" style="fill:green;" />
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12px">
                  Vegetarian
                  </text>
                </svg>
                <svg v-if="recipe.glutenFree" style="position: absolute; bottom: 5px; left: 140px; width: 70px; height: 30px;">
                  <ellipse cx="35" cy="15" rx="32" ry="10" style="fill:green;" />
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12px">
                  Gluten Free
                  </text>
                </svg>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </router-link>  
</template>


<script>
export default {

  props: {
    recipe: {
      type: Object,
      required: true
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





















<!-- <template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
      <img v-if="recipe.image != null && recipe.image != 'null' && recipe.image != undefined && recipe.image != 'undefined'" :src="recipe.image" style="width: 170px; height: 150px"/>
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
/* .recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
} */

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style> -->
