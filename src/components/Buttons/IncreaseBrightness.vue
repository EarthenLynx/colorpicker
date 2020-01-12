<template>
<button @click="increase()">+</button>
</template>

<script>
import {
  brightenRgbArr,
  hexCheck,
  rgbStrToArr,
  rgbArrToStr,
  hexToRgb
} from '../../assets/appColorFunctions.js';
export default {
  props: {
    'col': String
  },

  methods: {
    increase: function() {

      if (hexCheck(this.col)) {
        let colRgb = hexToRgb(this.col);
        let colArr = rgbStrToArr(colRgb);
        let colBright = brightenRgbArr(colArr, 5);
        let brCol = rgbArrToStr(colBright);
        this.$emit('brightenCol', brCol)
      } else {
        let colArr = rgbStrToArr(this.col);
        let colBright = brightenRgbArr(colArr, 5);
        let brCol = rgbArrToStr(colBright);
        this.$emit('brightenCol', brCol)
      }
    }
  }
}
</script>

<style scoped>
button {
  border-right: 2px solid #a1a1a1;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
