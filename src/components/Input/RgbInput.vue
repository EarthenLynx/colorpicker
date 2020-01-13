<template>
<div id="rgb-input-root">
  <!-- Slider for red -->
  <div class="slider-container">
    <div class="slider-group">
      <input class="slider" type="range" min="0" max="255" v-model="colArr[0]" @change="$emit('changeRgb',colArrOut)" :style="{'background': 'rgb(' + colArr[0] + ' , 0, 0'}">
      <input class="slider-text" name="red" type="text" v-model="colArr[0]" @change="$emit('changeRgb',colArrOut)">
    </div>
    <!-- Slider for blue -->
    <div class="slider-group">
      <input class="slider" type="range" min="0" max="255" v-model="colArr[1]" @change="$emit('changeRgb',colArrOut)" :style="{'background': 'rgb(0, ' + colArr[1] + ', 0)'}">
      <input class="slider-text" type="text" v-model="colArr[1]" @change="$emit('changeRgb',colArrOut)">
    </div>
    <!-- Slider for green -->
    <div class="slider-group">
      <input class="slider" type="range" min="0" max="255" v-model="colArr[2]" @change="$emit('changeRgb',colArrOut)" :style="{'background': 'rgb(0, 0, ' + colArr[2] + ')'}">
      <input class="slider-text" type="text" v-model="colArr[2]" @change="$emit('changeRgb',colArrOut)">
    </div>
  </div>
</div>
</template>

<script>
import {
  rgbStrToArr,
  hexCheck,
  hexToRgb,
  rgbArrToStr
} from '../../assets/appColorFunctions.js';

export default {
  data: function() {
    return {
      colArr: [123, 123, 123],
    }
  },

  props: {
    "col": String
  },

  computed: {
    redCom: function() {
      let colOp = this.colArr[0] / 255;
      return 'rgba(255,0, 0,' + colOp + ')';
    },

    greenCom: function() {
      let colOp = this.colArr[1] / 255;
      return 'rgba(0,255, 0,' + colOp + ')';
    },

    blueCom: function() {
      let colOp = this.colArr[2] / 255;
      return 'rgba(0,0, 255,' + colOp + ')';
    },

    // Define the array of manipulateable colors based on input
    colArrIn: function() {
      // return this.col === '0' ? [123, 123, 123] :
      return hexCheck(this.col) ?
        rgbStrToArr(hexToRgb(this.col)) :
        rgbStrToArr(this.col)
    },

    colArrOut: function() {
      let colsToArr = [this.colArr[0], this.colArr[1], this.colArr[2]];
      return rgbArrToStr(colsToArr);
    }
  }
}
</script>

<style>
/* General styles for the sliders */

.slider-container {
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.slider-group {
  margin: 12px 0 10px;
  display: flex;
  width: 30%;
  box-shadow: 0 0 5px 1px black;
  border: 1px solid #2B292E;
}

.slider-group:hover {
  border: 1px dashed #fff;
}

/* media query for the slider group */
@media (max-width: 985px) {
  .slider-group {
    width: 90%;
  }
}

/* Specific styles for text inputs */

input[type=text] {
  float: right;
  width: 20%;
  margin: 0;
  height: 25px;
  border: 0;
  font-size: 1rem;
  text-align: center;
}

input[type=text]:focus {
  outline: none;
}

/* Specific styles for the slider (don't touch!) */
input[type=range].slider {
  -webkit-appearance: none;
  width: 80%;
  margin: 0;
}

/* Height of the line element */
input[type=range].slider::-webkit-slider-runnable-track {
  width: 150px;
  height: 25px;
  cursor: pointer;
  border: none;
}

input[type=range].slider::-moz-range-track {
  width: 150px;
  height: 25px;
  cursor: pointer;
}

input[type=range].slider::-ms-track {
  width: 150px;
  height: 25px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* Sizes of the Pointer */
input[type=range].slider::-webkit-slider-thumb {
  height: 25px;
  width: 13px;
  background: #f2f2f2;
  border: 1px solid #000;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 4px;
}

input[type=range].slider::-moz-range-thumb {
  height: 25px;
  width: 13px;
  background: #f2f2f2;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 4px;
}

input[type=range].slider::-ms-thumb {
  height: 25px;
  width: 13px;
  background: #f2f2f2;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 4px;
}

/* Slider Focus */
input[type=range].slider:focus {
  outline: none;
}
</style>
