<template >
<div id="check-input-root">
  <button @click="validateColor()">Add color to history</button>
  {{ valid }}
</div>
</template>

<script>
import {
  rgbCheck,
  hexCheck
} from '../../assets/appColorFunctions.js';

export default {
  props: {
    "col": String
  },

  methods: {
    validateColor: function() {
      let vm = this;

      if (rgbCheck(vm.col) || hexCheck(vm.col)) {
        vm.$emit('validColor');
      }
    }
  },

  computed: {
    valid: function() {
      return (rgbCheck(this.col) || hexCheck(this.col))
    }
  }
}
</script>

<style scoped>

</style>
