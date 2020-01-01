<!-- Don't touch, it works -->
<template>
<div id="hex-input-root">
  <input id="hex-input" v-model="hexCol" placeholder="Select a color" @input="$emit('changeHex', hexCol)">
  <!-- Gives a preview of the color  -->
</div>
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
#hex-input-root {
  height: 60px;
}

input#hex-input {
  padding: 12px 16px;
  margin: 6px 12px;
  background-color: #fff;
  border: 2px solid #6f111f;
  border-radius: 6px;
  color: #121212;
  font-size: 1rem;
}

input#hex-input:focus {
  outline: none;
}

input#hex-input:hover {
  border: 2px dashed #6f111f;
}

.text-container {
  margin: 30px auto;
}
</style>
