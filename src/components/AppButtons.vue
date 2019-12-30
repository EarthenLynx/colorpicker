<template>
<div id="buttons-root">
  <button name="button">Widget One</button>
  <button name="button">Widget Two</button>
  <button name="button">Widget Three</button>
  <button name="button">Widget Four</button>
</div>
</template>

<script>
export default {
  name: 'AppButtons',
  props: {
    activeButtons: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
