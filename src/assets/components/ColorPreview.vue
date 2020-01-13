<!-- Don't touch, it works -->
<template>
<div id="pre-input-root">
  <div class="pre-container">
    <div id="col-pre" :style="{'background-color': col}"></div>
    <div class="pre-codes">
      <div class="pre-left">{{ colHex }}</div>
      <div class="pre-right">{{ colRgb }}</div>
    </div>
  </div>
  <!-- Gives a preview of the color  -->
</div>
</template>

<script>
export default {
  name: 'HexInput',

  props: {
    "col": String,
    "colHex": String,
    "colRgb": String
  },
}
</script>

<style scoped>
#pre-input-root {}

#col-pre {
  height: 100px;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.pre-codes {
  background-color: #f2f2f2;
  padding: 12px;
  font-size: 1rem;
}

.pre-left {
  display: inline-block;
  width: 50%;
}

.pre-right {
  display: inline-block;
  width: 50%;
}
</style>
