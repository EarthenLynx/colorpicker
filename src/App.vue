<template>
<div id="app">
  <div class="input-container">
    <hex-input v-if="hexInput" :col="currentColor" @changeHex="currentColor=$event"></hex-input>
    <rgb-input v-if="!hexInput" :col="currentColor" @changeRgb="currentColor=$event"></rgb-input>
  </div>
  <button @click="hexInput = !hexInput"> Toggle between inputs</button>
  <check-input :col="currentColor" @validColor="addColor()"></check-input>
  <history :history="colorHistory"></history>
  <br>
  <hr> <br>
  <h2>Test Zone for parent app</h2>
  <color-preview :col="currentColor"></color-preview>
  <p>Current Color in parent Element: {{ currentColor }}</p>
  <p>Computed Rgb Color in parent: {{ colRgb }}</p>
  <p>Computed Hex Color in parent: {{ colHex }}</p>
  <app-buttons></app-buttons>
</div>
</template>

<script>
// Import components
import ColorPreview from './components/ColorPreview.vue';
import CheckInput from './components/Input/CheckInput.vue';
import HexInput from './components/Input/HexInput.vue';
import RgbInput from './components/Input/RgbInput.vue'
import AppButtons from './components/AppButtons.vue';
import History from './components/ColorCollections/History.vue';

// Import color functions
import {
  hexCheck,
  rgbToHex,
  hexToRgb,
  rgbStrToArr
} from './assets/appColorFunctions.js';

export default {
  components: {
    ColorPreview,
    CheckInput,
    AppButtons,
    History,
    RgbInput,
    HexInput
  },

  data: function() {
    return {
      hexInput: true,
      colorIndex: 0,
      currentColor: '', // => This can either be hex OR Rgb
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
        rgb: this.colRgb,
        show: true,
      });
      this.colorHistory.unshift({
        id: this.colorIndex,
        hex: this.colHex,
        rgb: this.colRgb,
        show: false,
      });
    },
  },

  // These are the variables that are passed to the object. Based on whether the
  // input variable is hex or not, values will be evaluated
  computed: {
    // Calculate rgb value => Returns a string
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
        let tempRgbStr = vm.currentColor;
        let tempRgbArr = rgbStrToArr(tempRgbStr);
        return rgbToHex(tempRgbArr[0], tempRgbArr[1], tempRgbArr[2]);
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

.input-container {
  max-height: 60px;
  padding: 15px;
}

.collections-container {
  box-shadow: 1px 1px 1px black;
  max-height: 120px;
  padding: 20px 40px;
}
</style>
