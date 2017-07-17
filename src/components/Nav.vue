<template>
  <div class="art-nav">
    <nav>
      <router-link to="home">Home</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'art-nav',
    data () {
      return {
        msg: 'kir'
      }
    }
  }
</script>

<style>
  .art-nav {
    background-color: burlywood;
  }
</style>
