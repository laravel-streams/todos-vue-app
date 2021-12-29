<template>
  <div class="todos__form"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name : 'TodoForm',
  props: {},
  data() {return {};},
  setup(props, ctx) {
    let classes = computed((c) => ({
      //`\${this.prefix}-v`: true
    }));
    return {
      classes,
    };
  },
});

</script>

<style lang="scss">
//@import "../../styles/base";
</style>