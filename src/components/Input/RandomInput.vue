<template>
<div id="random-root">
  <button @click="randomColor()">Create random Color</button>
</div>
</template>

<script>
import {
  createRandomColor
} from '../../assets/appColorFunctions.js';
export default {
  props: {
    'col': String
  },

  methods: {
    randomColor: function() {
      let ranCol = createRandomColor()
      this.$emit('changeRan', ranCol)
    }
  }

}
</script>

<style>
</style>
