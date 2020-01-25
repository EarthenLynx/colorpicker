<!-- Don't touch, it works -->
<template>
<input id="hex-input" v-model="hexCol" placeholder="Hex - color Input" @input="$emit('changeHex', hexCol)">
</template>

<script>
export default {
  name: 'HexInput',

  data: function() {
    return {
      hexCol: this.col,
    }
  },

  props: {
    "col": String
  }
}
</script>

<style scoped>
input {
  display: block;
  margin: auto;
  font-size: 1.5rem;
  border: 2px solid #a1a1a1;
  border-bottom: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 12px;
  width: 200px;
}

input:focus {
  outline: none;
}
</style>
