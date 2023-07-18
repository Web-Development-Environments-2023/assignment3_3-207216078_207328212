<template>

<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script> -->

<header id="myPage"  data-spy="scroll" data-target=".navbar" data-offset="60">

<nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="#">Restaurant Gabchu</a>
    <a class="nav-link" v-if="!$root.store.username" style="color:aliceblue">Hello Guest</a>
    <a class="nav-link" v-if="$root.store.username" style="color:aliceblue"> Hello {{ $root.store.username }}</a>  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar" stylt="height:50px;">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item" >
                <!-- <a class="nav-link" href="index.html">Home</a> -->
                <router-link :to="{ name: 'main' }" class="nav-link" >Home</router-link>

            </li>
            <li class="nav-item" >
            <router-link v-if="!$root.store.username" :to="{ name: 'login' }" class="nav-link" >Login</router-link>
          </li>
          <li class="nav-item" >
            <router-link v-if="!$root.store.username" :to="{ name: 'register' }" class="nav-link" >Register</router-link>
            </li>
            <li class="nav-item">     
              <router-link :to="{ name: 'search' }" class="nav-link" >Search</router-link>
            </li>  
            <li class="nav-item" >
              <router-link :to="{ name: 'about' }" class="nav-link" >About</router-link>
            </li>  
            <!-- <li class="nav-item"> 
               <router-link v-if="$root.store.username" :to="{ name: 'createRecipe' }" class="nav-link" @click="openModal">Create New Recipe</router-link>
            </li>  -->
            <li v-if="$root.store.username" class="nav-item">
                <!-- <router-link id="routLink" :to="{ name: 'createRecipe' }" class="nav-link" style="display:inline-block">Create Recipe</router-link> -->
                <b-button variant="light" v-b-modal.modal-prevent-closing class="custom-button">Create New Recipe</b-button>
                <CreateNewRecipeModal> </CreateNewRecipeModal>
            </li> 
            <!-- <CreateNewRecipeModal v-if="showModal" @closeModal="closeModal"></CreateNewRecipeModal> -->
            <li v-if="$root.store.username" class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Personal
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'favorites' }" class="dropdown-item">My Favorites</router-link>
              <router-link :to="{ name: 'myRecipes' }" class="dropdown-item">My Recipes</router-link>
              <router-link :to="{ name: 'familyRecipes' }" class="dropdown-item">Family Recipes</router-link>
            </div>
          </li>
          <li class="nav-item" >
            <a class="nav-link" v-if="$root.store.username" href="#" @click="Logout" >Logout</a>
          </li>
        </ul>
    </div>  
</nav>
  </header>
  </template>
  
  <script>
  import CreateNewRecipeModal from './CreateNewRecipeModal.vue';
  
  export default {
    components: {CreateNewRecipeModal},
    data() {
      return {
        isMenuOpen: false,
        showModal: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");
            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
      },
      // openModal() {
      //   const modal = new bootstrap.Modal(document.getElementById('createNewRecipeModal'));
      //   modal.show();
      //   this.showModal = true;
      // },
      // closeModal() {
      //   this.showModal = false;
      // }
    }
  }
  </script>
  
  <style scoped>


html, body {
	overflow-x: hidden;
	font-family: 'Lato', sans-serif;
	width: 100%;
	
}

a {
	text-decoration: none;
}

ul {
	list-style-type: none;
}

a:hover,
a:focus {
	text-decoration: none;
}

hr {
	border-color: #ffc266;
	border-width: 5px;
	max-width: 100%;
}


.nav-item{
  height: 60px;
}
.dropdown-menu {
  background-color: #2c3030;
  border: none;
}

.dropdown-item {
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #182c39;
  background-color: #848382;
}
.container-h1 {
    font-family: 'Lora', serif;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    margin: 50px auto;
    color: #333;
    font-family: 'Ubuntu', sans-serif;
    
}

.btn {
	color: #fff;
	background-color: #182c39;
	margin: 20px auto;
	border-radius: 0;
	font-weight: 500;
	display: table;
	padding: 10px;

	
}

.btn:hover{
	color: #182c39;
	background-color: transparent;
	border: 1px solid #182c39;
}


.hr-h3s {
	border: 3px solid #E94B3C;
	width: 70px;
	margin: 0 auto 35px auto;
}


textarea {
	resize: none;
}

section {
	align-items: center;
	padding: 50px 60px;
	
}
.bg-section h2 {
	font-family: 'Montserrat', sans-serif;
	text-transform: none;
	color: #ffc266;
	background-color: #182c39;
	margin: 50px 0;
	padding: 25px 20px;
	border-radius: 50px;
}

.slideanim {
	visibility: hidden;
}

.slide {
	animation-name: slide;
	-webkit-animation-name: slide;
	-moz-animation-name: slide;
	animation-duration: 1.5s;
	-webkit-animation-duration: 1.5s;
	-moz-animation-duration: 1.5s;
	visibility: visible;
}

@keyframes slide {
	0% {
		opacity: 0;
		transform: translateX(50%);
	}

	100% {
		opacity: 1;
		transform: translateX(0%);
	}
}

@-webkit-keyframes slide {
	0% {
		opacity: 0;
		-webkit-transform: translateX(50%);
		transform: translateX(50%);
	}

	100% {
		opacity: 1;
		-webkit-transform: translateX(0%);
		transform: translateX(0%);
	}
}


/*  ******* Header + Navigation ******* */

.navbar {
	background-color: #182c39;
    border-color: rgb(51, 17, 0);
	border-color: rgba(51, 17, 0, 0.2);
	font-weight: 700;
	padding: 15px 0;
	transition: padding .5s;
}

.navbar .navbar-brand {
	color: #fff;
	font-family: 'Leckerli One', cursive;
	font-weight: 500;
	text-transform: none;
	font-size: 25px;
	padding-left: 15px;
	text-shadow: black 0.3em 0.3em 0.3em;
}

.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
	color: #948c8c;
	transition: color 1s;
}

.navbar .navbar-nav {
	padding-right: 50px;
}

.navbar .navbar-nav > li > a {
	text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;
	color: #fff;
	margin: auto 5px;
    font-family: 'Lato', sans-serif; 
    text-shadow: #222 0.3em 0.3em 0.3em;   
}

.navbar .navbar-nav > li > a:hover,
.navbar .navbar-nav > li > a:focus:hover {
	color: #868582;
	transition: color 1s; 
}


.navbar .navbar-nav > li.active > a:hover,
.navbar .navbar-nav > li.active > a:focus:hover {
	background-color: transparent;
}

.navbar.scrolled {
	box-shadow: 0 3px 3px rgba(0,0,0,0.1);
	padding: 5px 0;
	opacity: 0.9;
}

.jumbotron {
	margin-bottom: 0px;
    background-image: url('https://res.cloudinary.com/dbte0ueti/image/upload/v1536951689/new/jumbotron.jpg');
    background-position: 0% 25%;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-shadow: black 0.3em 0.3em 0.3em;
    height: 700px;
}


.jumbotron .header-content-inner {
	font-weight: 700;
	text-transform: none;
	margin-bottom: 0;
	margin: 200px;
	font-family: 'Roboto', sans-serif;
}

.jumbotron h1 {
	font-size: 45px;
}

.jumbotron h3 {
	font-size: 25px;
}

.custom-button {
  border: none;
  box-shadow: none;
  padding: 0;
  background: transparent;
  margin-top: 15px;
  text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;
	color: #fff;
	margin: auto 5px;
  font-family: 'Lato', sans-serif; 
  text-shadow: #222 0.3em 0.3em 0.3em;  
  
  height: 37px;

}

.custom-button:hover,
.custom-button:active,
.custom-button:focus {
  border: none;
  box-shadow: none;
  background-color: transparent;
  outline: none;
  color: inherit !important;
  text-decoration: none;
  color: #868582;
	transition: color 1s; 
}

.custom-button:active {
  background-color: transparent !important;
  border-color: transparent !important;
  border: none;
}



  </style>
  