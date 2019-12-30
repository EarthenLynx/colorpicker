<template>
<div id="app">
  <hex-input :col="currentColor" @changeHex="currentColor = $event"></hex-input>
  <!-- <rgb-input :col="currentColor"></rgb-input> -->
  <app-buttons></app-buttons>
  <app-history :history="colorHistory"></app-history>
  Color in parent Element: {{ currentColor }}
  <hr>
  Computed Rgb Color in parent: {{ colRgb }}
  <br>
  Computed Hex Color in parent: {{ colHex }}
</div>
</template>

<script>
import HexInput from './components/Input/HexInput.vue';
// import RgbInput from './components/Input/RgbInput.vue'
import AppButtons from './components/AppButtons.vue';
import AppHistory from './components/AppHistory.vue';
import {
  hexCheck,
  rgbToHex,
  hexToRgb
} from './assets/appColorFunctions.js';

export default {
  components: {
    AppButtons,
    AppHistory,
    // RgbInput,
    HexInput
  },

  // computed: {
  //
  // },

  data: function() {
    return {
      colorIndex: 0,
      currentColor: 'No Color', // => This can either be hex OR Rgb
      savedColors: [],
      colorHistory: [],
    }
  },

  methods: {
    // When button is clicked, add the selected color to the array as an object
    addColor: function() {
      this.colorIndex += 1;
      this.savedColors.push({
        id: this.colorIndex,
        hex: this.colHex,
        rgb: this.colRgb
      });
      this.colorHistory.push({
        id: this.colorIndex,
        hex: this.colHex,
        rgb: this.colRgb
      });
    },
  },

  // These are the variables that are passed to the object. Based on whether the
  // input variable is hex or not, values will be evaluated
  computed: {
    // Calculate rgb value => Returns Array
    colRgb: function() {
      let vm = this;
      if (hexCheck(vm.currentColor)) {
        return hexToRgb(vm.currentColor);
      } else {
        return vm.currentColor;
      }
    },

    // Calculate hex value => Returns String
    colHex: function() {
      let vm = this;
      if (!hexCheck(vm.currentColor)) {
        return rgbToHex(vm.currentColor);
      } else {
        return vm.currentColor;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
