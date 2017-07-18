<template>
  <form action="">
    <art-input art-name="First Name" v-model="user.firstName" :art-required="true"></art-input>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
  </form>
</template>

<script>
  import ArtInput from './elements/Input'

  export default {
    components: {
      ArtInput
    },
    data: function () {
      return {
        user: {
          firstName: ''
        }
      }
    }
  }
</script>

<style>

</style>
