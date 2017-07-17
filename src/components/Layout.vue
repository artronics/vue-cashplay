<template>
  <div class="art-layout container-fluid d-flex flex-column">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="d-flex flex-row main-content">
      <slot></slot>
    </main>
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
    height: 100vh;
  }

  .container-fluid {
    margin: 0;
    padding: 0;
  }

  .main-content {
    height: 100%;
  }
</style>
