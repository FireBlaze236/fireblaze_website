<script lang="ts">
  import profilePhoto from '../assets/profile.jpg'
  let name = "Taufiqul Alam";
  let email = "taufiqul.alam1207@gmail.com";
  let currentTitle = "Software Engineer - Graphics";
  let currentCompany = "Snaptrude";
  let resumePath = 'https://drive.google.com/file/d/1_ReCB0Zn-2RmIYL2tgfUIrjWIVXD8wFv/view?usp=drive_link';

  let linkedIn = "https://www.linkedin.com/in/taufiqul-alam-988b5a1b0/";
  let github = "https://github.com/FireBlaze236";

  import {togglePortfolio} from '../stores.ts'
  const toggle = () => {
      togglePortfolio.update(state => !state);
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 50vh;
    text-align: center;
    gap: 4px;
  }

  .photo {
    width: 150px; 
    height: auto;
    border-radius: 10%;
    margin-bottom: 15px;
    transition: all 0.3s ease-in-out;
  }

  .photo:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
  .contact {
    font-size: 1.1em;
  }

  .company {
    font-size: 1.2em;
  }

  .title {
    margin-top: -5%;
  }

  .button-link {
   font-size: 1.2em;
   background-color: #ffffff;
   border-radius: 8px;
   padding-top: 4px;
   padding-left: 8px;
   padding-right: 8px;
   padding-bottom: 4px;
   color: #010101;
   text-decoration: none;
  }
  .button-link:hover {
   background-color: #9e9e9e;
  }
</style>

<div class="container">
  <a href={linkedIn} target="_blank" ><img src="{profilePhoto}" alt="Taufiqul Alam Photo" class="photo"/></a>
  <h2>{name}</h2>
  <h3 class="title">{currentTitle}</h3>
  <a class="company" href="https://www.snaptrude.com" target="_blank">{currentCompany}</a>
  <p class="contact">Email: <a href="mailto:{email}">{email}</a></p>
  <a class="button-link" href={resumePath} target="_blank">CV</a>
  <!--<button class="button-link" on:click={toggle} target="_blank">Portfolio</button> -->
</div>
