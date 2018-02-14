<template>
  <section v-if="!songData">
    <img src="../assets/loading.gif"/>
  </section>
  <section v-else>
    <img class="main-bg" :src="songData.featured_image_url"/>
    <div class=main-container>
      <div class="music-player">
        <music-player :songData=songData></music-player>
      </div>
      <div class="side-bar">
        <side-bar :songData=songData></side-bar>
      </div>
    </div>
  </section>
</template>

<script>
import MusicPlayer from './MusicPlayer';
import SideBar from './SideBar';
import { GET_DATA } from '../store/'

export default {
  components: {
    MusicPlayer,
    SideBar
  },
  data() {
    return {
      shortId: null
      };
  },
  methods: {
  },
  computed: {
    songData() {
      // console.log('getter:', this.$store.getters.getSongData)
      return this.$store.getters.getSongData;
    }
  },
  created() {
    this.shortId = this.$route.params.shortId;
    // console.log('shortId:', this.shortId);
    this.$store.dispatch({ type: GET_DATA, shortId: this.shortId})
    // console.log('song data:', this.songData)
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-bg {
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(20px);
  opacity: 0.7;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
}

.music-player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
}

.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  .main-bg {
    position: fixed;
  }
  .main-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .music-player {
    margin-right: 0px;
  }
}
</style>
