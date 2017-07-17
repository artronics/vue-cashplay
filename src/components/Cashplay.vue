<template>
  <art-layout>
    <art-header slot="header"></art-header>

    <art-nav></art-nav>
    <art-main></art-main>

  </art-layout>
</template>

<script>
  import ArtHeader from './Header'
  import ArtNav from './Nav'
  import ArtMain from './Main'
  import ArtLayout from './Layout'

  export default {
    components: {
      ArtHeader,
      ArtNav,
      ArtMain,
      ArtLayout
    },
    name: 'cashplay',
    data () {
      return {
        msg: 'kir'
      }
    }
  }
</script>

<style>
</style>
