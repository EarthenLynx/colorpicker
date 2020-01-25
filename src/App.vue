<template>
<div id="app">
  <h1>Color picker</h1>
  <div class="app-container">
    <!-- Preview -->
    <div class="preview-container">
      <color-preview :colRgb="colRgb" :colHex="colHex" :col="currentColor"></color-preview>
    </div>
    <!-- /Preview -->
    <!-- Input -->
    <div class="input-container">
      <rgb-input :col="currentColor" @changeRgb="currentColor=$event"></rgb-input>
      <hex-input :col="currentColor" @changeHex="currentColor=$event"></hex-input>
      <decrease-brightness :col="currentColor" @darkenCol="currentColor=$event"></decrease-brightness>
      <random-input @changeRan="currentColor=$event"></random-input>
      <color-to-history :col="currentColor" @validColor="addColor()"></color-to-history>
      <button @click="upload=!upload">
        <i class="material-icons">insert_photo</i>
      </button>
      <!-- <button @click="colorHistory=[]"><i class="material-icons">clear</i></button> -->
      <increase-brightness :col="currentColor" @brightenCol="currentColor=$event"></increase-brightness>
    </div>
    <!-- /Input -->

    <!-- Togglers  -->
    <button class="toggle toggle-sidebar">
      <i class="material-icons" @click="sidebar=!sidebar">dehaze</i>
    </button>
    <!-- /Togglers -->

    <!-- Suggested colors -->

    <transition name="slide-fade">
      <div id="suggested-container" v-if="sidebar">
        <suggested-colors :visible="sidebar" @hideSidebar="sidebar = $event"></suggested-colors>
      </div>
    </transition>
    <!-- /Suggested Colors -->

    <!-- Picture upload -->
    <div v-if="upload" @click="upload = !upload" class="picture-shade"> </div>
    <div v-if="upload" id="picture-container">
      <picture-input></picture-input>
    </div>
    <!-- /picture upload -->

    <!-- History -->
    <div class="history-container">
      <history :history="colorHistory"></history>
    </div>
    <!-- /History -->
  </div>
</div>
</template>

<script>
// Import Input components
import HexInput from './components/Input/HexInput.vue';
import RgbInput from './components/Input/RgbInput.vue';
import RandomInput from './components/Input/RandomInput.vue';
import PictureInput from './components/Input/PictureInput.vue';

// Import functional button components
import ColorToHistory from './components/Buttons/ColorToHistory.vue';
import IncreaseBrightness from './components/Buttons/IncreaseBrightness.vue';
import DecreaseBrightness from './components/Buttons/DecreaseBrightness.vue';

// Import other components
import ColorPreview from './components/ColorPreview.vue';
import History from './components/ColorCollections/History.vue';
import SuggestedColors from './components/ColorCollections/predefinedColors/SuggestedColors.vue'

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
    PictureInput,
    ColorToHistory,
    ColorPreview,
    IncreaseBrightness,
    DecreaseBrightness,
    SuggestedColors,
    History,
  },

  data: function() {
    return {
      colorIndex: 0,
      currentColor: '', // => This can either be hex OR Rgb
      savedColors: [],
      colorHistory: [],
      sidebar: false,
      upload: true,
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
/* General styles */
button {
  padding: 12px 16px 8px;
  background-color: #fff;
  border: 2px solid #a1a1a1;
  border-left: none;
  border-right: none;
  color: #121212;
  margin: 0 0 12px;
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

/* Styles for the layout */
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

/* Styles for the sidebar */
#suggested-container {
  background-color: #fff;
  height: 100vh;
  width: 300px;
  border-right: 2px solid #a1a1a1;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.toggle {
  cursor: pointer;
  height: 40px;
  width: 40px;
  padding: 5px 0;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  left: -2px;
  transition: all 0.2s;
  border: 2px solid #a1a1a1;
  background-color: #fff;
}

.toggle-sidebar {
  position: absolute;
  top: 40px;
}

.toggle-upload {
  position: absolute;
  top: 100px;
}

.toggle:hover {
  color: #fff;
  background-color: #a1a1a1;
  transition: all 0.2s
}

/* Styles for sidebar animation */

.slide-fade-enter-active {
  transition: all .4s linear;
}

.slide-fade-leave-active {
  transition: all .4s linear;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
}

/* Styles for the image upload */
.picture-shade {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  margin: 0;
  padding: 0;
}

#picture-container {
  padding: 36px 12px 12px;
  position: absolute;
  top: 60px;
  left: 20%;
  width: 60%;
  background-color: #f2f2f2;
}
</style>
