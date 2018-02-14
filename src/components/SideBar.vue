<template>
  <section class="side-bar">
      <h2>{{songData.title}}</h2>
      <p class="p-description">{{songData.description}}</p>
      <!-- <router-link :to="buttonInfo.cta.url" tag="button" v-for="(buttonInfo, index) in songData.services" :key="index"><img class="button-logo" :src="buttonInfo.logo"></router-link> -->
      <button v-for="(buttonInfo, index) in songData.services" :key="index"><a :href="buttonInfo.cta.url"><img class="button-logo" :src="buttonInfo.logo"></a></button>
      <div class="disclaimer">
        <p class="p-terms">By using this service you agree to our Privacy Policy and Terms of Use.</p>
          <div class="terms-links">
            <a href="https://featurefm.zendesk.com/hc/en-us/articles/209558828-Privacy-Policy">Privacy Policy</a>
            <a>|</a>
            <a href="https://featurefm.zendesk.com/hc/en-us/articles/209558908-Terms-of-Use">Terms</a>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  props:['songData'],
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h2, p {
  color: white;
}

h2 {
  font-size: 1.5em;
}

.p-description {
  margin-top: 20px;
  height: auto;
}

.button-logo {
  height: 30px;
}

button {
  width: 320px;
  height: 60px;
  cursor: pointer;
  margin: 10px 0px;
}

button:first-of-type {
  background-color: #30d567;
}

button:nth-child(3) > a > img {
  filter: brightness(0) invert(1);
}
.terms-links {
  display: flex;
  justify-content: flex-start;
  margin-top: 0px;
  font-size: 12px;
}

.terms-links > a {
  text-decoration-line: none;
  color: #fff;
  margin-right: 10px;
}

.terms-links > a:hover {
  font-weight: bold;
}

.p-terms {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 0px;
  color: #ccc;
}

@media screen and (max-width: 480px) {
  .side-bar {
    align-items: center;
  }
  button {
    width: 90vw;
    height: 10vh;
  }
  .terms-links > a:hover {
    font-weight: normal;
  }
}

</style>
