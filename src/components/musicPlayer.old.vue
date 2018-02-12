<template>
    <section>
        <img class="songCover" :src="songData.featured_image_url"/>
    </section>
</template>

<script>

export default {
    props:['songData'],
    data () {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    created() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.songCover {
  max-width: 352px;
  /* height: 100px; */
  cursor: pointer;
}
</style>
