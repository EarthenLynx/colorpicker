<template>
<button @click="decrease()">-</button>
</template>

<script>
import {
  darkenRgbArr,
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
    decrease: function() {

      if (hexCheck(this.col)) {
        let colRgb = hexToRgb(this.col);
        let colArr = rgbStrToArr(colRgb);
        let colBright = darkenRgbArr(colArr, 10);
        let brCol = rgbArrToStr(colBright);
        this.$emit('darkenCol', brCol)
      } else {
        let colArr = rgbStrToArr(this.col);
        let colBright = darkenRgbArr(colArr, 10);
        let brCol = rgbArrToStr(colBright);
        this.$emit('darkenCol', brCol)
      }
    }
  }
}
</script>

<style scoped>
button {
  border-left: 2px solid #a1a1a1;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
</style>
