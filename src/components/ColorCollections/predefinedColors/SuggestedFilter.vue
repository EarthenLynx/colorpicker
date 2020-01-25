<template>
<input type="text" v-model="filter" @input="$emit('filtArr', filteredColors)">
</template>

<script>
import {
  filterObjectTags
} from '../../../assets/filterFunctions.js';

export default {
  data() {
    return {
      filter: ''
    }
  },

  props: {
    colors: Array
  },

  computed: {
    filteredColors: function() {
      return filterObjectTags(this.colors, this.filter)
    }
  }
}
</script>

<style lang="css" scoped>
input {
  border: 1px solid black;
}
</style>
