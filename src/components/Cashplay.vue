<template>
  <art-layout>
    <art-header slot="header"></art-header>

    <div class="row">
      <art-nav class="col-3"></art-nav>
      <art-main class="col-9"></art-main>
    </div>

    <p slot="footer">footer</p>
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
  .container-fluid{
    margin: 0;
    padding:0;
  }
</style>
