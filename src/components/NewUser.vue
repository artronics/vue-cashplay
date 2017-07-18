<template>
  <form action="">
    <art-input art-name="First Name" :art-required="true"></art-input>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    s
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
        msg: 'new user'
      }
    }
  }
</script>

<style>

</style>
