<!-- Don't touch, it works -->
<template>
<div id="pre-input-root">
  <!-- Gives a preview of the color  -->
  <div id="col-pre" :style="{'background-color': col}"></div>
</div>
</template>

<script>
export default {
  name: 'HexInput',

  props: {
    "col": String
  },
}
</script>

<style scoped>
#pre-input-root {
  max-height: 200px;
  width: 100%;
  padding: 20px 0;
}

#col-pre {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  display: block;
  margin: auto;
  border: 3px solid #eee;
}
</style>
