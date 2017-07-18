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
   background-color: grey;
   width: 100%;
   padding: 10px;
 }
</style>
