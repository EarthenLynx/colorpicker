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
import HexInput from './components/Input/HexInput.vue'
// import RgbInput from './components/Input/RgbInput.vue'
import AppButtons from './components/AppButtons.vue'
import AppHistory from './components/AppHistory.vue'

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
    // Define the checks for the colors
    // By rules of the app: If the color is not hex, it must be rgb
    hexCheck: function(color) {
      let regExpHex = /^#[0-9a-f]{3,6}$/i;
      return regExpHex.test(color);
    },

    // Convert rgb value to hex
    rgbToHex: function(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },

    // Convert hex value to rgb
    hexToRgb: function(hex) {
      // Change the hex value into an integer
      let hexInt = parseInt(hex.slice(1, hex.length), 16);
      // Convert each of the hex into decimals, put these into an array
      let rgbArr = [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255]
      return rgbArr;
      // Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
      // Thanks at xameeramir for the explicit answer
    }
  },

  // These are the variables that are passed to the object. Based on whether the
  // input variable is hex or not, values will be evaluated
  computed: {
    // Calculate rgb value => Returns Array
    colRgb: function() {
      let vm = this;
      if (vm.hexCheck(vm.currentColor)) {
        return vm.hexToRgb(vm.currentColor);
      } else {
        return vm.currentColor;
      }
    },

    // Calculate hex value => Returns String
    colHex: function() {
      let vm = this;
      if (!vm.hexCheck(vm.currentColor)) {
        return vm.rgbToHex(vm.currentColor);
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
