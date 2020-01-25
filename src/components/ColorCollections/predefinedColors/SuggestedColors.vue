<template>
<div id="sc-root">
  <i class="sidebar-close material-icons" @click="$emit('hideSidebar', !visible)">clear</i>
  <h2>Search for a color</h2>
  <suggested-filter :colors="color" @filtArr="filteredColors=$event"></suggested-filter>
  <div v-for="col in filteredColors" :key="col" class="card">
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
import colorCollection from './colorCollection.json';
import SuggestedFilter from './SuggestedFilter.vue';

export default {
  components: {
    SuggestedFilter
  },

  props: {
    visible: Boolean
  },

  data() {
    return {
      color: colorCollection,
      filteredColors: []
    }
  },
}
</script>

<style scoped>
i {
  font-size: 40px;
  cursor: pointer;
}

input[type="text"] {
  margin: 12px auto;
  font-size: 1.5rem;
  border: 2px solid #a1a1a1;
  float: none;
  width: 180px;
  padding: 12px;
}

#sc-red {
  display: block;
}

.card {
  margin: 12px auto;
  width: 160px;
  max-height: 180px;
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

.sidebar-close {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
