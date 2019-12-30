<!-- Don't touch, it works -->
<template>
<div id="hex-input-root">
  <!-- Gives a preview of the color  -->
  <input id="hex-input" v-model="hexCol" placeholder="Select a color" @input="$emit('changeHex', hexCol)">
  <p>Hex-color in child element: {{ hexCol }}</p>
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
/* #hex-input-root {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#col-preview {
  height: 42px;
  width: 108px;
  padding: 12px 24px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border: 3px groove #000;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hex-input {
  height: 42px;
  width: 216px;
  padding: 12px 24px;
  font-size: 2rem;
  text-align: center;
  border: none;
  border-top: 3px groove #000;
  border-bottom: 3px groove #000;
}

#col-input:focus {
  outline: none;
}

#col-add {
  height: 42px;
  width: 108px;
  padding: 12px 24px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  border: 3px groove #000;
  border-left: none;
} */
</style>
