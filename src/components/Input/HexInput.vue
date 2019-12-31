<!-- Don't touch, it works -->
<template>
<div id="hex-input-root">
  <!-- Gives a preview of the color  -->
  <input id="hex-input" v-model="hexCol" placeholder="Select a color" @input="$emit('changeHex', hexCol)">
  <p>Hex-color in child element: {{ hexCol }}</p>
</div>
</template>

<script>
import {
  rgbToHex
} from '../../assets/appColorFunctions.js';

export default {
  name: 'HexInput',

  data: function() {
    return {
      hexCol: this.comHexCol(),
    }
  },

  props: {
    "col": String
  },

  computed: {
    compHexCol: function() {
      return rgbToHex(this.col);
    }
  }
}
</script>

<style scoped>

</style>
