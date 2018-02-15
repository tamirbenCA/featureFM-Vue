<template>
  <div id="app">
    <nav>
      <span><nav-bar/></span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','Open Sans','sans-serif';
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
}
nav span {
  visibility: hidden;
}

nav:hover span {
  visibility: visible;
}
</style>
