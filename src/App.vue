<template>
  <div id='app'>
    <div class='logo'>
      <img class='logo' alt='Wardrobe logo' src='./assets/logo.png'>
    </div>
    <nav class='side-navbar'>
      <ul><u>Go to:</u>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>
            {{ link }}
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: { },
  data: function() {
    return{
      links: ['home', 'all outfits', 'filtered outfits', 'favorites'],
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 60px;
}
.logo {
  text-align: center;
  background-color: rgb(35, 37, 44);
}
.welcome-message {
  text-align: center;
  margin-top: 1em;
}

.side-navbar {
  width: 12%;
  border-radius: 5px;
  position: fixed;
  top: 20%;
  right: 0;
  background-color:rgba(216, 216, 216, 0.616);
  font-size: calc(11px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
}

@media (max-width: 600px) {
  .side-navbar {
    width: 20%;
  }
}

.side-navbar ul {
  text-transform: capitalize;
  list-style: none;
  padding-right: 0.5em;
  padding-left: 0.5em;
}

.side-navbar ul li {
  padding: 0.2em;
}

.side-navbar ul li a{
  text-decoration: none;
}

.side-navbar ul li a:hover {
  font-weight: bold;
}
.side-navbar ul li a:visited,
.side-navbar ul li a:active,
.side-navbar ul li a:link {
  color:rgb(39, 39, 39);
}

.side-navbar ul li a.router-link-active {
  text-decoration: none;
  color:rgba(82, 54, 31, 0.712);
  font-weight: bold;
}
</style>
