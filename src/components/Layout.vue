<template>
  <div class="art-layout container-fluid">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'art-layout',
    data () {
      return {
        msg: 'kir'
      }
    }
  }
</script>

<style>
  .art-layout{
    background-color: red;
  }
</style>
