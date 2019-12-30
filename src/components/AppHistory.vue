<template>
<div id="history-root">
  <div v-for="col in history" :key="col">
    <div class="card" :style="{'background-color': col.hex}">
      {{ col.id }}: {{ col.colorHex }}
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

</style>
