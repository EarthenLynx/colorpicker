<!-- Don't touch, it works -->
<template>
<div id="hex-input-root">
  <!-- Gives a preview of the color  -->
  <div id="col-preview" :style="{'background-color': hexCol}">Preview</div>
  <input id="hex-input" v-model="hexCol" placeholder="Select a color" @input="$emit('changeHex', hexCol)">
  <!-- Add color to the parent element's array if valid -->
  <div id="col-add">Add to history</div>
  Color in child Element: {{ hexCol }}
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
  },

  // Check whether the color input is valid
  computed: {
    checkCol: function() {
      let regExpCol = /^#[0-9a-f]{3,6}$/i;
      let checkCol = this.hexCol;
      return regExpCol.test(checkCol);
    }
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
