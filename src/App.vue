<template>
<div id="app">
  <h1>Color picker</h1>
  <div class="app-container">
    <!-- Preview -->
    <div class="preview-container">
      <color-preview :colRgb="colRgb" :colHex="colHex" :col="currentColor"></color-preview>
    </div>
    <!-- Input -->
    <div class="input-container">
      <rgb-input :col="currentColor" @changeRgb="currentColor=$event"></rgb-input>
      <hex-input :col="currentColor" @changeHex="currentColor=$event"></hex-input>
      <decrease-brightness :col="currentColor" @darkenCol="currentColor=$event"></decrease-brightness>
      <random-input @changeRan="currentColor=$event"></random-input>
      <color-to-history :col="currentColor" @validColor="addColor()"></color-to-history>
      <increase-brightness :col="currentColor" @brightenCol="currentColor=$event"></increase-brightness>
    </div>
    <!-- History -->
    <div class="history-container">
      <history :history="colorHistory"></history>
    </div>

    <app-buttons></app-buttons>
  </div>
</div>
</template>

<script>
// Import Input components
import HexInput from './components/Input/HexInput.vue';
import RgbInput from './components/Input/RgbInput.vue';
import RandomInput from './components/Input/RandomInput.vue';

// Import functional button components
import ColorToHistory from './components/Buttons/ColorToHistory.vue';
import AppButtons from './components/Buttons/AppButtons.vue';
import IncreaseBrightness from './components/Buttons/IncreaseBrightness.vue';
import DecreaseBrightness from './components/Buttons/DecreaseBrightness.vue';

// Import other components
import ColorPreview from './components/ColorPreview.vue';
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
    HexInput,
    RgbInput,
    RandomInput,
    ColorToHistory,
    AppButtons,
    ColorPreview,
    IncreaseBrightness,
    DecreaseBrightness,
    History,
  },

  data: function() {
    return {
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
button {
  padding: 12px 16px;
  background-color: #fff;
  border: 2px solid #a1a1a1;
  border-left: none;
  border-right: none;
  color: #121212;
  margin: 0 0 12px;
  font-size: 1rem;
  transition: all 0.2s
}

button:focus {
  outline: none;
}

button:hover {
  color: #fff;
  background-color: #a1a1a1;
  transition: all 0.2s
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app-container {
  width: 90%;
  border-radius: 12px;
  border: 3px solid #a2a2a2;
  margin: auto;
}
</style>
