<template>
<div id="rgb-input-root">
  <!-- Slider for red -->
  <input class="slider" type="range" min="0" max="255" v-model="colArr[0]" @change="$emit('changeRgb',colArrOut)">
  <!-- Slider for blue -->
  <input class="slider" type="range" min="0" max="255" v-model="colArr[1]" @change="$emit('changeRgb',colArrOut)">
  <!-- Slider for green -->
  <input class="slider" type="range" min="0" max="255" v-model="colArr[2]" @change="$emit('changeRgb',colArrOut)">

  <p>Array of colors coming in: {{ colArrIn }}</p>
  <p>String of colors going out: {{ colArrOut }}</p>
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

  methods: {
    setRedColor: function() {
      this.red = this.colArrIn[0];
      this.$emit('changeRgb', this.colArrOut)
    },
    setGreenColor: function() {},
    setBlueColor: function() {}
  },

  computed: {
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
</style>
