<template>
  <div>
    <div class="modal fade" id="createNewRecipeModal" tabindex="-1" aria-labelledby="createNewRecipeModalLabel" aria-hidden="true" @show="reset" @hidden="reset">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createNewRecipeModalLabel">Create New Recipe</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal">X</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control " id="title" v-model="recipe.title" style="width: 50%; margin-left: 27%;">
            </div>
            <div class="form-group">
              <label for="image">Image URL</label>
              <input type="text" class="form-control" id="image" v-model="recipe.image" style="width: 50%; margin-left: 20%;">
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="popularity">Popularity</label>
                  <input type="number" class="form-control" id="popularity" v-model="recipe.popularity" style="width: 20%; margin-left: 15%;">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="readyInMinutes">Ready In Minutes</label>
                  <input type="number" class="form-control" id="readyInMinutes" v-model="recipe.readyInMinutes" style="width: 20%; margin-left: 15%;">
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-4">
                <label for="vegan">Vegan</label>
                <input type="checkbox" id="vegan" v-model="recipe.vegan" style="margin-left: 15%;">
              </div>
              <div class="col-sm-4">
                <label for="vegetarian">Vegetarian</label>
                <input type="checkbox" id="vegetarian" v-model="recipe.vegetarian" style="margin-left: 15%;">
              </div>
              <div class="col-sm-4">
                <label for="glutenFree">Gluten Free</label>
                <input type="checkbox" id="glutenFree" v-model="recipe.glutenFree" style="margin-left: 15%;">
              </div>
            </div>
            <div class="form-group">
              <label for="servings">Servings</label>
              <input type="number" class="form-control" id="servings" v-model="recipe.servings" style="width: 10%; margin-left: 8%;">
            </div>
            <div class="form-group">
              <label for="instructions">Instructions</label>
              <textarea class="form-control" id="instructions" rows="4" v-model="recipe.instructions" style="margin-left: 10%;"></textarea>
            </div>
            <!-- <div class="form-group">
              <label for="extendedIngredients">Extended Ingredients</label>
              <textarea class="form-control" id="extendedIngredients" rows="4" v-model="recipe.extendedIngredients" style="margin-left: 5%;"></textarea>
            </div> -->
        <b-form-group label="Ingredients" label-for="name-input" invalid-feedback="value is required">
          <b-form-input id="ingredient-name" v-model="ingredient_name" placeholder="name" style="width: 150px; display:inline;" ></b-form-input>
          <b-form-input id="ingredient-amount" v-model="ingredient_amount" placeholder="amount" style="width: 100px;display:inline;margin-left:10px"></b-form-input>
          <b-form-select id="ingredient-units" v-model="ingredient_units" :options="ingredientsDoses" style="width:150px; margin-left:10px; height:40px; margin-bottom:5px"></b-form-select>
          <b-button @click="addIngredient" style="width: 70px;display:inline;margin-left:0px ">Add</b-button>
        </b-form-group>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary" @click="addRecipe">Save Recipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';
  export default {
    mounted() {
      const modal = new bootstrap.Modal(document.getElementById('createNewRecipeModal'));
      modal.show();
    },
    data() {
      return {
        recipe: {
          title: '',
          image: '',
          popularity: 0,
          readyInMinutes: 0,
          vegan: false,
          vegetarian: false,
          glutenFree: false,
          servings: 0,
          instructions: '',
          extendedIngredients: [],
        },
          ingredient_name: '',
          ingredient_amount: '',
          ingredient_units: '',
          ingredientsDoses: [
            {value: '', text: 'no doses'},
            {value: 'spoon', text: 'spoon'},
            {value: 'liter', text: 'liter'},
          ],
          // nameState: null
        }
      },
    methods: {
    closeModal() {
      const modal = document.getElementById('createNewRecipeModal');
      // const bootstrapModal = bootstrap.Modal.getInstance(modal);
      modal.hide();
      this.$emit('closeModal');
    },
    addIngredient() {
      if (this.ingredient_name && this.ingredient_amount && this.ingredient_units) {
        const cur_ingrediant = {
        name: this.ingredient_name,
        amount: this.ingredient_amount,
        units: this.ingredient_units
      }
        this.recipe.extendedIngredients.push(cur_ingrediant);
        this.ingredient_name = '';
        this.ingredient_amount = '';
        this.ingredient_units = '';
      }
    }, 
    async addRecipe() {
      // the values saved good in the variables! :) 
      // console.log(this.recipe.title);
      // console.log(this.recipe.image);
      // console.log(this.recipe.popularity);
      // console.log(this.recipe.readyInMinutes);
      // console.log(this.recipe.vegan);
      // console.log(this.recipe.vegetarian);
      // console.log(this.recipe.glutenFree);
      // console.log(this.recipe.servings);
      // console.log(this.recipe.instructions);
      // console.log(this.recipe.extendedIngredients);

      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/createRecipe/",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
          {
            params: {
              title: this.recipe.title,
              image: this.recipe.image,
              popularity: this.recipe.popularity,
              readyInMinutes: this.recipe.readyInMinutes,
              vegan: this.recipe.vegan,
              vegetarian: this.recipe.vegetarian,
              glutenFree: this.recipe.glutenFree,
              servings: this.recipe.servings,
              instructions: this.recipe.instructions,
              extendedIngredients: this.recipe.extendedIngredients    
            } 
          }, 
          {
            withCredentials: true
          }
        );
        if (this.response.status !== 200) {
          this.$router.replace("NotFound");
        }
      } catch (error) {
        console.log(error);
      }

    },
    reset() {
      this.title = '';
      this.image = '';
      this.popularity = '';
      this.readyInMinutes = '';
      this.vegan = false;
      this.vegetarian = false;
      this.glutenFree = false;
      this.servings = '';
      this.instructions = '';
      this.extendedIngredients = '';
    }
  }
  };
  </script>
  
  <style>

  </style>
  