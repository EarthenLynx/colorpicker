<template>
<div id="app">
  <color-preview :colRgb="colRgb" :colHex="colHex" :col="currentColor"></color-preview>
  <div class="input-container">
    <rgb-input :col="currentColor" @changeRgb="currentColor=$event"></rgb-input>
    <hex-input :col="currentColor" @changeHex="currentColor=$event"></hex-input>
  </div>
  <random-input @changeRan="currentColor=$event"></random-input>
  <check-input :col="currentColor" @validColor="addColor()"></check-input>
  <history :history="colorHistory"></history>
  <app-buttons></app-buttons>
</div>
</template>

<script>
// Import Input components
import HexInput from './components/Input/HexInput.vue';
import RgbInput from './components/Input/RgbInput.vue';
import RandomInput from './components/Input/RandomInput.vue';

// Import functional button components
import CheckInput from './components/Input/CheckInput.vue';
import AppButtons from './components/AppButtons.vue';

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
    CheckInput,
    AppButtons,
    ColorPreview,
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
  margin: 6px 12px;
  background-color: #fff;
  border: 2px solid #6f111f;
  border-radius: 6px;
  color: #121212;
  font-size: 1rem;
  transition: all 0.2s
}

button:focus {
  outline: none;
}

button:hover {
  color: #fff;
  background-color: #6f111f;
  transition: all 0.2s
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.input-container {
  height: 220px;
  padding: 15px;
  display: block;
}
</style>
