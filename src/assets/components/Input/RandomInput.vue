<template>
<button @click="randomColor()">
  <i class="material-icons">color_lens</i>
</button>
</template>

<script>
import {
  createRandomColor
} from '../../assets/appColorFunctions.js';
export default {
  props: {
    'col': String
  },

  methods: {
    randomColor: function() {
      let ranCol = createRandomColor();
      this.$emit('changeRan', ranCol)
    }
  }

}
</script>
