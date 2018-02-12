
<template>
  <div>
    <img class="songCover" :src="songData.featured_image_url"/>
    <audio-player :sources="audioSources" :loop="true"></audio-player>
  </div>
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
 