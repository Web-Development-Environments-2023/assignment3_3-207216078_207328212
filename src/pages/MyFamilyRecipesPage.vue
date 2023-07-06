<template>
  <div style="margin-top:100px">
    <div >
        <center>
        <div v-for="recipe in this.recipes" :key="recipe[0].id">
            <br>
            <div style="font-style: italic; font-weight: bold; margin-top: 50px; font-size: 20px" >
                <h1 >{{ recipe[0].title }}</h1>
                <br>
                <br>
                <img :src="getImgUrl(recipe[0])" width="550" height="500"  />

            </div>
            <div style="font-style: italic; font-weight: bold; font-size: 20px" >
                <br>
                <br>
                Whose recipe? {{recipe[0].instructions[0]}}
                <br >
                When usually prepared? {{recipe[0].instructions[1]}}
            </div>
            <br>
            <div class="recipe-body" style="font-style: italic; font-weight: bold; font-size: 20px" >
                <div class="wrapper" >
                    <div class="wrapped" >
                        <div >
                            <div >ready in {{ recipe[0].readyInMinutes }} minutes
                            </div>
                            <div >Vegan
                                <svg  v-if="recipe[0].vegan" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <svg  v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                            <div > Vegetarian
                                <svg  v-if="recipe[0].vegetarian" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <svg  v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                            <div >Gloten Free
                                <svg v-if="recipe[0].glutenFree" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <svg  v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                            <div >Servings
                                {{recipe[0].servings}}
                            </div>
                        
                            <br>
                            <div >
                                <h3>
                                  Ingredients
                                </h3>
                                <li
                                    v-for="(r, index) in recipe[0].extendedIngredients
"
                                    :key="index + '_' + r.ingredient_name"
                                
                                >
                                    {{ r.ingredient_name }} : {{ r.amount }} {{r.units}}
                                </li>
                                
                            </div>
                        </div>
                    </div>
                    <br>
                    <div style="max-width: 600px;">
                      <h3 class="">
                        Instructions
                      </h3>
                        <p >{{recipe[0].instructions[2]}}</p>
                    </div>
                </div>
            </div>
        </div>  
        <br>
        </center>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            recipes : []
        };
    },
    async mounted(){
        try{
            const response = await this.axios.get(this.$root.store.server_domain + "/users/familyRecipes");

            const recipes = response.data;
            console.log(recipes);
            this.recipes = [];
            this.recipes.push(...recipes);
            this.splitInstructions();
        }
        catch (error){
            console.log(error);
        }
    },
    methods: {
        splitInstructions(){
            for (let i = 0; i < this.recipes.length; i++){
                this.recipes[i][0].instructions = this.recipes[i][0].instructions.split("|");
            }
        },
        getImgUrl(recipe){
          return require('../assets/'+recipe.image);
    }
    }
}
</script>

<style>
.wrapper {
  border: 1px solid #00ffea;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 800px;
}

.recipe-body {
  border: 1px solid #000000;
  padding: 10px;
  max-width: 850px;
}

.recipe-body h3 {
  color: #575353;
  font-weight: bold;
}

.recipe-body li {
  color: #6d9273;
}
.ingredient-name {
  color: blue; /* Change the color as per your preference */
}

.instructions {
  border: 1px solid #000000;
  padding: 10px;
  background-color: #c49f9f; /* Change the background color as per your preference */
}
</style>