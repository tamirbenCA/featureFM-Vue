<template>
    <section class="nav-bar">
        <router-link to="/jamesblakecar" tag="li">James Blake</router-link>
        <router-link to="/savetherunts" tag="li">Awolnation</router-link>
        <router-link to="/jhenesativa" tag="li">Jhene Aiko</router-link>
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
    color: orange;
    font-weight: bold;
}

li {
    list-style: none;
    cursor: pointer;
    margin: 0px 10px;
    color: white;
}

</style>
