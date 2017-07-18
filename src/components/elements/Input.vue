<template>
  <div class="form-group" :class="{'has-danger':hasError}">
    <label :for=artName>{{artName}}</label>
    <component is="input" :type="artType ? artType : 'text'"
               class="form-control" :class="{'form-control-danger':hasError}" :id=artName
               :aria-describedby="artName + 'Help'" :placeholder="artName"
               @input.trim="updateValue($event.target.value)" @blur="checkRequired">
    </component>
    <small v-if="artHelp" :id="artName + 'Help'" class="form-text text-muted">{{artHelp}}</small>
    <div class="form-control-feedback" v-if="hasError">{{errorMsg}}</div>
  </div>
</template>

<script>
  export default {
    props: ['value', 'artName', 'artHelp', 'artRequired', 'artValidator', 'artRequired', 'artType'],
    data: function () {
      return {
        input: '',
        hasError: false,
        errorMsg: ''
      }
    },
    methods: {
      updateValue: function (value) {
        this.input = value
        this.validate(value)
        this.$emit('input', value)
      },
      validate: function (input) {
        if (!this.artValidator) {
          this.hasError = false
          this.errorMsg = ''
          return
        }
        var msg = this.artValidator(input)
        if (msg !== '' || msg != null) {
          this.hasError = true
          this.errorMsg = msg
        } else {
          this.hasError = false
          this.errorMsg = ''
        }
      },
      checkRequired: function () {
        if (this.artRequired && this.input === '') {
          this.hasError = true
          this.errorMsg = 'This field is required.'
        }
      }
    }
  }
</script>

<style>
</style>
