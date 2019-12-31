<template>
<div id="rgb-input-root">
  <!-- Slider for red -->
  <div class="slider-container">
    <div class="slider-group">
      <div class="slider-group-head">
        <label class="slider-label" for="red" :style="{'background-color': redCom}"></label>
        <input class="slider-text" name="red" type="text" v-model="colArr[0]" @change="$emit('changeRgb',colArrOut)">
      </div>
      <div class="slider-group-body">
        <input class="slider" type="range" min="0" max="255" v-model="colArr[0]" @change="$emit('changeRgb',colArrOut)">
      </div>
    </div>
    <!-- Slider for blue -->
    <div class="slider-group">
      <div class="slider-group-head">
        <label class="slider-label" for="green" :style="{'background-color': greenCom}"></label>
        <input class="slider-text" type="text" v-model="colArr[1]" @change="$emit('changeRgb',colArrOut)">
      </div>
      <div class="slider-group-body">
        <input class="slider" type="range" min="0" max="255" v-model="colArr[1]" @change="$emit('changeRgb',colArrOut)">
      </div>
    </div>
    <!-- Slider for green -->
    <div class="slider-group">
      <div class="slider-group-head">
        <label class="slider-label" for="blue" :style="{'background-color': blueCom}"></label>
        <input class="slider-text" type="text" v-model="colArr[2]" @change="$emit('changeRgb',colArrOut)">
      </div>
      <div class="slider-group-body">
        <input class="slider" type="range" min="0" max="255" v-model="colArr[2]" @change="$emit('changeRgb',colArrOut)">
      </div>
    </div>
  </div>
  <p>Color in Rgb - Element: {{ colArr }}</p>
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
  width: 60%;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}

.slider-group:hover {
  box-shadow: 0 0 5px 1px black;
}

.slider-group {
  margin: 12px;
  height: 120px;
  width: 175px;
  display: inline-block;
  border: 2px solid #f2f2f2;
  border-radius: 12px;
}

.slider-head {
  height: 95px;
  width: 300px;
  border-radius: 12px;
}

.slider-label {
  height: 95px;
  width: 60%;
  margin: 0;
  float: left;
  border-top-left-radius: 12px;
}

/* Specific styles for text inputs */

input[type=text] {
  font-size: 1.4rem;
  height: 95px;
  width: 40%;
  border: none;
  text-align: center;
  border-radius: 12px;
}

input[type=text]:focus {
  outline: none;
}

/* Specific styles for the slider (don't touch!) */
input[type=range].slider {
  -webkit-appearance: none;
  width: 175px;
  margin: -0.3px 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

/* Height of the line element */
input[type=range].slider::-webkit-slider-runnable-track {
  width: 150px;
  height: 25px;
  cursor: pointer;
  background: #f2f2f2;
  border: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

input[type=range].slider::-moz-range-track {
  width: 150px;
  height: 25px;
  cursor: pointer;
  background: #f2f2f2;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

input[type=range].slider::-ms-track {
  width: 150px;
  height: 25px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

/* Sizes of the Pointer */
input[type=range].slider::-webkit-slider-thumb {
  height: 26px;
  width: 26px;
  background: rgba(115, 115, 115, 0.5);
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 50%;
}

input[type=range].slider::-moz-range-thumb {
  height: 26px;
  width: 26px;
  background: rgba(115, 115, 115, 0.5);
  cursor: pointer;
  border-radius: 50%;
}

input[type=range].slider::-ms-thumb {
  height: 26px;
  width: 26px;
  background: rgba(115, 115, 115, 0.5);
  cursor: pointer;
  border-radius: 50%;
}

/* Slider Focus */
input[type=range].slider:focus {
  outline: none;
}

input[type=range].slider:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}

input[type=range].slider::-ms-fill-upper {
  background: #f2f2f2;
}

input[type=range].slider:focus::-ms-fill-lower {
  background: #f2f2f2;
}

input[type=range].slider:focus::-ms-fill-upper {
  background: #ffffff;
}
</style>
