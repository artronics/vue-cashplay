<template>
  <div class="art-nav content-wrapper">
    <nav>
      <router-link to="home">Home</router-link>
      <router-link to="user">New User</router-link>
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
    width: 20%;
  }

  .art-nav a {
    display: block;
  }
</style>
