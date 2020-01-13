<template>
<div id="sc-root">
  <div v-for="col in color" :key="col" class="card">
    <div :class="{'card-expanded': col.show}">
      <div class="card-col-preview" :style="{'background-color': col.hex}">
        <p :class="{'dark-font': !col.dark, 'bright-font': col.dark}">{{ col.name }}</p>
      </div>
      <div class="card-col-codes">
        <p>Hex-Code: {{ col.hex }}</p>
        <p>RGB-Code: {{ col.rgb }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import colorCollection from '../../assets/colorCollection.json';

export default {
  data() {
    return {
      color: colorCollection
    }
  },
}
</script>

<style scoped>
.card {
  margin: 12px;
  width: 160px;
  max-height: 180px;
  display: inline-grid;
  border: 1px solid black;
}

.card-col-codes {
  opacity: 0.8;
  padding: 0 12px;
  max-height: 100px;
  max-width: 134px;
  background-color: #fff;
  border-top: none;
}

.card-col-preview {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-font {
  color: #000;
}

.bright-font {
  color: #fff;
  text-shadow: 1px 1px 1px #000;
}
</style>
