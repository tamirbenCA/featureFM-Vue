

<template>
  <section v-if="!getSongData">
    LOADING
  </section>
  <section v-else class=main-container>
    <div class="music-player">
      <music-player :songData=getSongData></music-player>
    </div>
    <div class="side-bar">
      <side-bar :songData=getSongData></side-bar>
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
    getSongData() {
      // console.log('getter:', this.$store.getters.getSongData)
      return this.$store.getters.getSongData;
    }
  },
  created() {
    this.shortId = this.$route.params.shortId;
    // console.log('shortId:', this.shortId);
    this.$store.dispatch({ type: GET_DATA, shortId: this.shortId})
    // this.songData = featureFMService.getData(this.shortId)
    // console.log('song data:', this.songData)
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;  
}

.music-player {
  margin-right: 20px;
}

</style>
