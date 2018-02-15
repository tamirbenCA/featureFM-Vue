<template>
    <section class="nav-bar">
        <router-link to="/jamesblakecar" tag="button">James Blake</router-link>
        <router-link to="/savetherunts" tag="button">Awolnation</router-link>
        <router-link to="/jhenesativa" tag="button">Jhene Aiko</router-link>
    </section>
</template>

<script>
export default {
  data() {
    return {
      };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;
    align-items: center;
}

.router-link-active {
    color: orange
}


</style>
