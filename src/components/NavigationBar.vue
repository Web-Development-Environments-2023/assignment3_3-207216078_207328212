<template>
    <header>
      <nav>
          <div class="navigation-bar">
            
              <ul>
                <div class="logo">
              <a href="index.html"><img src="../images/logo.png"></a>
              <a v-if="!$root.store.username">Hello Guest<span class="underline"></span></a>
              <a v-if="$root.store.username"> Hello {{ $root.store.username }}<span class="underline"></span></a>
          </div>
                  <li class="active"><a href="index.html">Home<span class="underline"></span></a></li>
                  <li v-if="!$root.store.username"><router-link :to="{ name: 'login' }">Login</router-link><span class="underline"></span></li>
                  <li v-if="!$root.store.username"><router-link :to="{ name: 'register' }">Register</router-link><span class="underline"></span></li>
                  <!-- <li><a href="#">Search<span class="underline"></span></a></li> -->
                  <li><router-link :to="{ name: 'search' }">Search</router-link><span class="underline"></span></li>
                  <!-- <li><a href="#">About<span class="underline"></span></a></li> -->
                  <li><router-link :to="{ name: 'about' }">About</router-link><span class="underline"></span></li>
            <li v-if="$root.store.username" class="dropdown-item">
              <a href="#" class="dropdown-toggle">Personal<span class="underline"></span></a>
              <ul class="dropdown-menu">
                <li><router-link :to="{ name: 'myFavorites' }">My Favorites<span class="underline"></span></router-link></li>
                <li><router-link :to="{ name: 'myRecipes' }">My Recipes<span class="underline"></span></router-link></li>
                <li><router-link :to="{ name: 'familyRecipes' }">Family Recipes<span class="underline"></span></router-link></li>
                <li><router-link :to="{ name: 'myMeal' }">My Meal<span class="underline"></span></router-link></li>
              </ul>
            </li>
              </ul>
          </div>
      </nav>
      <!-- <div class="text">
          <h2>Welcome</h2>
          <h1>THE ROSA</h1>
          <div class="arrow">
              <span class="left"></span>
              <i class="fas fa-asterisk"></i>
              <span class="right"></span>
          </div>
          <span>Ready To Be Opened</span>
          <div class="button"><button>Explore</button></div>
      </div> -->
      <!-- <svg class="svg-down" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xml:space="preserve"><path fill="currentColor" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path></svg>
      <div class="arrow-down">
      </div> -->
  </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>
  
  <style scoped>

/*Start Global*/
* {
    /* box-sizing: border-box; */
}
body {
    margin: 0;
    padding: 12px;
}
body.hide-scroll::-webkit-scrollbar {
    display: none;
}
a {
    text-decoration: none;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
img {
    max-width: 100%;
    width: 20%;
}
/* h2 {
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size: 100px;
    font-weight: normal;
    margin: 0 0 -55px;
}
h1, h3 {
    font-family: "Source Code Pro", sans-serif;
    font-size: 47px;
    font-weight: bold;
    letter-spacing: 9.4px;
    margin: 0 0 15px;
} */
p {
    color: #515151;
    line-height: 27px;
}
.a-CTA {
    border-bottom: 2px solid #a96700;
    padding-bottom: 4px;
    letter-spacing: 1.5px;
    font-size: 18px;
}
/*End Global*/

/*Start Mutual*/
p, .a-CTA, input, header .navigation-bar a, .copyright li, .contact .form form label, .contact .form form button {
    font-family: Cabin, sans-serif;
}
.fa-asterisk, .a-CTA, h2, header .navigation-bar a:hover, header nav.active .navigation-bar a:hover, footer .social-media .links a:hover, .copyright .info li a, .copyright .CTA li a:hover {
    color: #a96700;
}
header nav .navigation-bar .underline, header .text .button button:hover, .contact .form form button:hover, .contact .text i:hover {
    background-color: #a96700;
}
header .navigation-bar ul li, header .text, .about-us .text, .reservation .text, .menu .box-model, .menu .text, .fixed-image .text, footer, .copyright, .contact .text i {
    text-align: center;
}
header nav, header .navigation-bar ul, .about-us, .reservation, .about-us .image-container, .reservation .image-container, .menu, .menu .menu-image-container, footer .contact-container, .copyright ul, .contact {
    display: flex;
}
header nav .toggle, header nav .toggle span, header .navigation-bar, header .navigation-bar ul, .menu .box-model .close, footer .social-media .links a, .copyright .CTA li a {
    transition: .3s;
}
header, header nav .toggle span, header .navigation-bar a, header .text, header .text .arrow .left, header .text .arrow .right, .recipes, .menu .box-image-container, .fixed-image .text, .copyright, .copyright .arrow-up {
    position: relative;
}
header nav .toggle, header .navigation-bar .underline, header .text .arrow .left:after, header .text .arrow .right:after, header .svg-down, header .arrow-down, .recipes .text, .menu .box-model .close, .menu .box-model .arrow .arrow-right,.menu .box-model .arrow .arrow-left, .menu .box-image-container .box-image, .copyright .svg-up {
    position: absolute;
}
.recipes .text, .fixed-image .text, .menu .box-image-container, .menu .box-image-container .box-image {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
header nav, header .navigation-bar a:hover .underline, header .navigation-bar li.active .underline, .menu .box-model, .menu .box-image-container, .menu .box-image-container .box-image {
    width: 100%;
}
button, .dots > div, header nav .toggle, header .arrow-down, .menu .box-model .close, .menu .box-model .arrow .arrow-right,.menu .box-model .arrow .arrow-left, .menu .menu-image-container .image img, footer .newsletter i, .copyright .arrow-up {
    cursor: pointer;
}
.dots .active, header nav.active, header nav.active .toggle.active span, header nav .toggle span, header .navigation-bar .underline, header .text .arrow .left, header .text .arrow .right, header .text .button button, .contact form button {
    background-color: #fff;
}
h1, h3, header .navigation-bar a, header .text span, .menu .box-model .close:hover, footer .text h2, footer .text p, footer .social-media .links a, .contact .text i, .contact .form form button {
    color: #000000;
}
header nav, header .navigation-bar.show, header .navigation-bar a:hover .underline, header .navigation-bar li.active .underline, header .text .arrow .left:after, .menu .box-model, .copyright .arrow-up {
    left: 0;
}
header .text .arrow .left:after, header .text .arrow .right:after, header .text span, footer .social-media .links a, footer .newsletter i, .copyright .arrow-up, .contact .text i, .contact .form form label {
    display: inline-block;
}
/*End Mutual*/

/*Start Home Page*/

/*Start Header*/
header nav .dropdown-item {
  position: relative;
}

header nav .dropdown-item .dropdown-toggle {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px;

}

header nav .dropdown-item .dropdown-toggle:hover {
  background-color: #00000000;
}

header nav .dropdown-item .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  min-width: 160px;
  padding: 8px 0;
  margin: 2px 0 0;
  font-size: 16px;
  color: #000;
  text-align: left;
  background-color: #000000;
  border: 1px solid #040303;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(255, 255, 255, 0.175);
}

header nav .dropdown-item:hover .dropdown-menu {
  display: block;
}

header nav .dropdown-item .dropdown-menu li {
  padding: 4px 16px;
}

header nav .dropdown-item .dropdown-menu li a {
  text-decoration: none;
  color: #fefefe;
}

header nav .dropdown-item .dropdown-menu li a:hover {
  color: #faf8f8;
}

/* Add the following styles to fix the visibility issue */
header nav .dropdown-item:hover .dropdown-menu {
  display: block;
}

header nav .dropdown-item .dropdown-menu li:hover {
  background-color: #010101;
}


header {
  height: 80px;
    background-size: cover;
    background: url("https://img.freepik.com/free-vector/diagonal-motion-lines-white-background_1017-33198.jpg?w=2000") fixed bottom;
    background-color: #cccccc; /* Used if the image is unavailable */
    background-position: center; 
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
}
header nav {
    position: fixed;
    top: 0;
    padding: 36px 36px 20px;
    z-index: 20;
}

header nav .logo {
    flex-basis: 56%;
    padding-left: 20px;

}
header .navigation-bar.show {
    width: 40%;
}
header .navigation-bar.show a {
    color: #ccc !important;
}
header .navigation-bar.show a:hover {
    color: #fff !important;
}
header .navigation-bar ul li {
    flex: 1;
    padding: 0 10px;
    /* margin-left:20%; */
}
header .navigation-bar a {
    text-decoration: none;
    transition: all .5s;
    font-size: 16px;
}
header nav.active .navigation-bar a {
    color: #000;
}
header .navigation-bar .underline {
    height: 2px;
    width: 0;
    left: 50%;
    bottom: -4px;
    transition: all .3s;
    display: block;
}

/*End Home Page Responsive*/
  </style>
  