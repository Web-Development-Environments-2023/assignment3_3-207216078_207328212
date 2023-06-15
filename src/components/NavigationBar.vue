<template>
    <div>
      <nav>
        <h2><a href="#" id="logo">rosa</a></h2>
        <button class="nav-button fa fa-bars" @click="toggleMenu"></button>
        <div :class="{'show': isMenuOpen}">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button class="exit-menu fa fa-times" @click="toggleMenu"></button>
        </div>
      </nav>
  
      <header>
        <div class="center">
          <h1 class="custom-h1">Welcome to <span>Rosa</span></h1>
          <h2>Experience fine dining</h2>
          <p>Enjoy our delicious cuisine in a cozy and elegant atmosphere.</p>
        </div>
      </header>
  
      <!-- Rest of the sections and content here -->
  
    </div>
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

/* Global */
body {
  overflow-x: hidden;
}

/* Header */
header {
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent),
    url('http://zigis.com.au/wp-content/uploads/2014/05/holiday2013_front.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 15px 35px;
  display: flex;
  position: relative;
}
nav h2 {
  margin-bottom: 0;
  flex: 1;
  letter-spacing: 3px;
  font-family: 'Overpass Mono', monospace !important;
}

nav #logo {
  color: lightgray;
  text-transform: uppercase;
  border-bottom: solid 2px lightgray;
}

.nav-button {
  border: 0;
  background: 0;
  cursor: pointer;
  color: #c0c0c0;
  font-size: 23px;
}

nav div {
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  text-align: center;
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.2s;
}

nav div.show {
  transform: scale(1);
  opacity: 1;
}

nav div ul {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

nav div .exit-menu {
  position: absolute;
  top: 15px;
  right: 15px;
  color: lightgray;
  font-size: 20px;
  padding: 10px;
}

nav div ul li {
  font-family: 'PT Sans', sans-serif !important;
  text-transform: uppercase;
}

nav div ul li a {
  display: block;
  color: lightgray;
  padding: 15px 5px;
  transition: all 0.4s;
}

nav div ul li a:hover,
nav div ul li .active:hover {
  color: rgb(190, 128, 64);
  border-bottom-color: rgb(190, 128, 64);
}

.center {
  line-height: 0;
  margin: auto;
  text-align: center;
  color: rgb(255, 255, 255);
}

.center h1 {
  font-family: 'Alex Brush', cursive !important;
  color: rgb(190, 128, 64);
  font-size: 80px;
  margin-bottom: 34px;
}

.center h2 {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 28px;
}

#asterisk {
  color: rgb(190, 128, 64);
  line-height: 0.5;
  font-size: 30px;
  display: flex;
  justify-content: center;
}
#asterisk:before,
#asterisk:after {
  content: '';
  display: inline-block;
  position: relative;
  vertical-align: middle;
  height: 1px;
  width: 0;
  opacity: 0;
  background: rgb(255, 255, 255);
}
#asterisk:before {
  margin-right: 10px;
}

#asterisk:after {
  margin-left: 10px;
}

.center p {
  text-transform: uppercase;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
}

.custom-h1 {
  text-align: center;
  color: rgb(255, 255, 255);
  letter-spacing: 5px;
  margin-bottom: 0;
}

.custom-h1 span {
  letter-spacing: 0;
}
  </style>
  