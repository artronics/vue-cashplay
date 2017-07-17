<template>
  <div class="hello">
    <button v-on:click="getUser" class="btn btn-primary">kir</button>
  </div>
</template>

<script>
  import Api from '../api'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      getUser: function () {
        Api.get('/users/1').then(function (response) {
          console.log(response)
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
