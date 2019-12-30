<template>
<div id="history-root">
  <div v-for="col in history" :key="col">
    <div @click="col.show = !col.show" class="card">
      <div class="card-col-preview" :style="{'background-color': col.hex}"></div>
      <div v-if="col.show" class="card-col-codes">
        <p>Hex-Code: {{ col.hex }}</p>
        <p>RGB-Code: {{ col.rgb }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppHistory',
  props: {
    history: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#history-root {
  border: 1px solid black;
  height: 100%;
  display: flex;
  padding: 20px 12px;
  flex-direction: row;
  overflow-x: auto;
}

.card {
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  width: 160px;
  max-height: 180px;
  margin: 0 12px;
  position: relative;
}

.card-col-preview {
  height: 60px;
  width: 100%;
  text-align: center;
  display: block;
}

.card-col-codes {
  padding: 0 12px 12px;
}
</style>
