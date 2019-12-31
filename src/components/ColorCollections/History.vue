<template>
<div id="history-root">
  <transition-group class="history-container" name="list-complete" tag="div">
    <div v-for="col in history" :key="col" class="card list-complete-item">
      <div @click="col.show = !col.show">
        <div class="card-col-preview" :style="{'background-color': col.hex}"></div>
        <transition name="fade" tag="div">
          <div v-if="col.show" class="card-col-codes">
            <p v-if="col.show">Hex-Code: {{ col.hex }}</p>
            <p v-if="col.show">RGB-Code: {{ col.rgb }}</p>
          </div>
        </transition>
      </div>
    </div>
  </transition-group>
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
  border: 1px solid rgba(115, 115, 115, 0.5);
  min-height: 260px;
  height: 100%;
  width: 90%;
  margin: auto;
  overflow-x: auto;
  display: grid;
}

.card {
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  width: 160px;
  margin: 12px;
  max-height: 180px;
  display: inline-grid;
}

.card-col-preview {
  height: 60px;
  width: 100%;
  text-align: center;
  display: block;
}

.card-col-codes {
  padding: 0 12px 12px;
  height: 180px;
}

/* Transition animation for the group items */
.list-complete-item {
  transition: all 1s;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

/* Transition animation for the fading elements */
.fade-enter-active,
.fade-leave-active {
  transition: height 1s, opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  height: 0;
  opacity: 0;
}
</style>
