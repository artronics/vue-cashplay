<template>
  <div class="art-main content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'art-main',
    data () {
      return {
        msg: 'kir'
      }
    }
  }
</script>

<style>
 .art-main{
   background-color: tomato;
   width: 100%;
 }
</style>
