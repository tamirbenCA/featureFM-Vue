<template>
  <section>
    <img class="cover-responsive" :src="songData.featured_image_url"/>
    <audio-player :sources="audioSources" :loop="true"></audio-player>
  </section>
</template>

<script>
  import AudioPlayer from './audio-player.vue'
 
  export default {
    props:['songData'],
    components: {
      AudioPlayer
    },
    data () {
      return {
          audioSources: [
            this.songData.media.url
            ]
      }
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover-responsive {
  max-width: 412px;
  height: auto;
  cursor: pointer;
  width: 100%;
}
</style>
