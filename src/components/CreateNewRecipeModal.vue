<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create Your Recipe"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Recipe Name"
          label-for="name-input"
          invalid-feedback="Name required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="URL"
          label-for="url"
          invalid-feedback="URL required"
          :state="nameState"
        >
         <b-form-input
            id="url"
            v-model="url"
            :state="nameState"
            placeholder="https://www.example.com/233.jpg"
            required
          ></b-form-input>
        
        </b-form-group>
        <b-form-group
          label="Ready In Minutes"
          label-for="ready"
          invalid-feedback="Time required"
          :state="nameState"
        >
          <b-form-input
            id="ready"
            v-model="time"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <!-- <b-form-group
          label="Popularity"
          label-for="popularity"
          invalid-feedback="Popularity required"
          :state="nameState"
        >
          <b-form-input
            id="popularity"
            v-model="likes"
            placeholder="Likes"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group> -->
        <b-form-group
          label="Vegan / Vegetarian / None"
          invalid-feedback="Value required"
          :state="nameState"
        >
          <b-form-select v-model="vegan" :options="options_v" style="width:150px; margin-left:0px; height:40px; margin-bottom:5px"></b-form-select>
        </b-form-group>
        <b-form-group
          label="Gluten Free"
          label-for="name-input"
          invalid-feedback="Value required"
          :state="nameState"
        >
        <b-form-select v-model="gluten" :options="options_g" style="width:150px; margin-left:0px; height:40px; margin-bottom:5px"></b-form-select>
        </b-form-group>
        <b-form-group
          label="Ingredients"
          label-for="name-input"
          invalid-feedback="Value required"
          :state="nameState"
        >
          <b-form-input
            id="ing-name"
            v-model="ing_name"
            :state="nameState"
            placeholder="Name"
            
            style="width: 150px; display:inline;"
          ></b-form-input>
          <b-form-input
            id="ing-amount"
            v-model="ing_amount"
            :state="nameState"
            
            placeholder="Amount"
            style="width: 100px;display:inline;margin-left:10px "
          ></b-form-input>
        
        <b-form-select v-model="ing_unit" :options="options" style="width:150px; margin-left:10px; height:40px; margin-bottom:5px"></b-form-select>
          <b-button @click="addIngredients" style="width: 70px;display:inline;margin-left:0px ">Add</b-button>
        </b-form-group>
        <b-form-group
          label="Servings"
          label-for="servings"
          invalid-feedback="Servings required"
          :state="nameState"
        >
          <b-form-input
            id="servings"
            v-model="servings"
            placeholder="Insert number of servings"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        </form>
        <!-- <b-form-group
          label-for="instructions"
          invalid-feedback="Instructions required"
        >
        <label for="instructions" style="width: 70px;display:inline;margin-left:0px ">Instructions</label>
        </b-form-group> -->

        <b-form-group
          label="Instructions"
          label-for="instructions"
          invalid-feedback="Instructions required"
          :state="nameState"
        >
          <b-form-input
            id="popularity"
            v-model="instructions"
            placeholder="type here to fill instructions..."
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
  
    </b-modal>
  </div>
</template>

  
  <script>
  import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';
  export default {

    data() {
      return {
        name: '',
        url:'',
        time:'',
        likes:-2,
        vegan: false,
        vegetarian: false,
        gluten: '',
        ing_name:'',
        ing_amount:'',
        ing_unit: '',
        instructions: '',
        servings: '',
        ingredients: [],
        options_v: [
          {value: false, text: 'None'},
          {value: 'vegan', text: 'vegan'},
          {value: 'vegetarian', text: 'vegetarian'}
        ],
        options_g: [
          {value: true, text: 'Yes'},
          {value: false, text: 'No'}
        ],
        options: [
            {value: '', text: 'no doses'},
            {value: 'liter', text: 'liter'},
            {value: 'teaspoon', text: 'teaspoon'},
            {value: 'cupspoon', text: 'cupspoon'},
            {value: 'package', text: 'package'},
        ],
        options_tmp_units: [
          { value: 'celsius', text: 'celsius' },
          { value: 'fahrenheit', text: 'fahrenheit' }
        ],
        nameState: null,
        }
      },
    methods: {
      resetModal() {
        this.name= '';
        this.url='';
        this.time='';
        this.likes=-2;
        this.vegan=false;
        this.vegetarian = false;
        this.gluten='';
        this.ing_name='';
        this.ing_amount='';
        this.ing_unit= '';
        this.instructions = '';
        this.servings = '';
        this.ingredients= [];
        this.nameState = null
      },
      handleOk(bvModalEvent) {
        bvModalEvent.preventDefault()
        this.handleSubmit()
      },
      async handleSubmit() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
         if (!valid) {
          return
        }
        
        if (this.vegan == 'vegan')
        {this.vegan = true;
          this.vegetarian = true;}
        else if (this.vegan == 'vegetarian')
        {this.vegan = false;
          this.vegetarian = true;}
        else
        {this.vegan = false;
          this.vegetarian = false;}
        try {
        this.response = await this.axios.post(
          this.$root.store.server_domain + "/users/createRecipe/",
          {
            title: this.name,                 
            readyInMinutes: this.time,
            image: this.url,
            popularity: this.likes,
            vegan: this.vegan,
            vegetarian: this.vegetarian,
            glutenFree: this.gluten,
            instructions: this.instructions,
            extendedIngredients: this.ingredients,
            servings: this.servings
            
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
      this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
    },
    addIngredients() {
      this.ingredients.push({
          name: this.ing_name,
          amount: this.ing_amount,
          units: this.ing_unit
        });
        this.ing_name = '';
        this.ing_amount = '';
        this.ing_unit = '';
    }, 
  }
  };
  </script>
  
  <style>

  .b-form-group {
    margin-bottom: 10px;
  }

  .b-form-input,
  .b-form-select {
    margin-bottom: 5px;
    /* Add any necessary padding */
    padding: 5px;
  }

  </style>
  