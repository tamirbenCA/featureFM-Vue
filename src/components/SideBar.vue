<template>
  <section class="side-bar">
      <h1>{{songData.title}}</h1>
      <h2>{{songData.description}}</h2>
      <router-link :to="buttonInfo.cta.url" tag="button" v-for="(buttonInfo, index) in songData.services" :key="index"><img class="button-logo" :src="buttonInfo.logo"></router-link>
  </section>
</template>

<script>
export default {
  props:['songData'],
  data () {
    return {
    }
  },
  // methods: {
  //   playSong() {
  //     console.log('Play Song');
  //     // this.$store.getters({ type: "createPlayers", count: this.playersAmount });
  //     // this.$router.push("/createPlayers");
  //   },
  //   downloadSong() {
  //     console.log('Download Song');

  //   }
  // },
  created() {
    // this.players = this.$store.state.players
    // this.players = JSON.parse(JSON.stringify(this.$store.state.players))
    // console.log('Players in createplayers created:', this.players)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
}

.button-logo {
  /* width: 30px; */
  height: 30px;
}
</style>
