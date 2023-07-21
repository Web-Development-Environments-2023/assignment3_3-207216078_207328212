<template>
    <div class="about-us">
      <h2>About Us</h2>
      <div class="paragraph">
        <p>Welcome to our recipes website!</p>
        <p>We are 3rd year students in Software and Information System Engineering and we created this website as part of the course "Web Development Environments".</p>
        <p>Here are some links to our previous assignments:</p>
        <p>Avital's first website: <a href="https://web-development-environments-2023.github.io/207328212/" target="_blank">https://web-development-environments-2023.github.io/207328212/</a></p>
        <p>Noy's first website: <a href="https://web-development-environments-2023.github.io/207216078/" target="_blank">https://web-development-environments-2023.github.io/207216078/</a></p>
        <p>Online game: <a href="https://web-development-environments-2023.github.io/assignment2-207328212_207216078/" target="_blank">https://web-development-environments-2023.github.io/assignment2-207328212_207216078/</a></p>
      </div>
      <div class="team-members">
        <div v-for="member in teamMembers" :key="member.id" class="member">
          <img :src="member.image" alt="Team Member" class="student-image" />
          <h3>{{ member.name }}</h3>
          <div class="social-links">
            <a :href="member.instagram" target="_blank">
              <img src="../images/Instgram_icon.png" alt="Instagram" class="social-icon" />
            </a>
            <a :href="member.facebook" target="_blank">
              <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
    data() {
      return {
        teamMembers: [
          {
            id: 1,
            image: require("../images/student1.jpg"),
            name: "Noy Gabay",
            instagram: "https://www.instagram.com/noygabay33/",
            facebook: "https://www.facebook.com/noy.gabay.5/",
          },
          {
            id: 2,
            image: require("../images/student2.jpg"),
            name: "Avital Galper",
            instagram: "https://www.instagram.com/avital_galper/",
            facebook: "https://www.facebook.com/avital.galper",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
 .about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
  .paragraph {
  margin-bottom: 20px;
}

.paragraph p {
  margin: 20px;
  font-size: 22px;
  line-height: 1.5;
  color: #333;
  font-weight: bold;
}
  
.team-members {
  display: flex;
  justify-content: center;
  gap: 30px;
}

  
  .member {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  
  .student-image {
    width: 300px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .member h3 {
    margin-top: 10px;
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .social-links a {
    margin: 0 5px;
  }
  
  .social-links .social-icon {
    width: 40px;
    height: 40px;
  }

  body {
  margin-bottom: 30px; 
}

  </style>
  