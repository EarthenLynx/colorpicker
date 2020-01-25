<template>
<transition name="slide-fade" v-if="showHist">
  <div id="history-root">
    <transition-group class="history-container" name="list-complete" tag="div">
      <div v-for="col in history" :key="col" class="card list-complete-item">
        <div :class="{'card-expanded': col.show}">
          <div @click="col.show = !col.show" class="card-col-preview" :style="{'background-color': col.hex}"></div>
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
</transition>
</template>

<script>
export default {
  name: 'AppHistory',
  props: {
    history: Array
  },

  computed: {
    showHist: function() {
      let hist = this.history;
      return hist.length > 0 ? true : false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  position: absolute;
}

p {
  margin: 6px 0;
}

#history-root {
  border: 2px solid #a2a2a2;
  height: 100%;
  width: 90%;
  margin: auto;
  display: grid;
  grid-gap: 50px;
}

.card {
  margin: 12px;
  width: 160px;
  max-height: 180px;
  display: inline-block;
}

.card-expanded {
  -webkit-box-shadow: 0px 0px 6px 1px #f2f2f2;
  -moz-box-shadow: 0px 0px 6px 1px #f2f2f2;
  box-shadow: 0px 0px 6px 1px #f2f2f2;
}

.card-col-preview {
  height: 60px;
  width: 100%;
  text-align: center;
  display: block;
}

.card-col-codes {
  opacity: 0.8;
  padding: 0 12px 12px;
  max-height: 100px;
  max-width: 134px;
  position: absolute;
  background-color: #fff;
  border: 1px solid black;
  border-top: none;
}

/* Transition animation for the group items */
.list-complete-item {
  transition: all 1s;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Transition animation for the fading elements */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(-5px);
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
