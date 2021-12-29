<template>
    <Todos />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Todos from '@/components/Todos.vue';

export default defineComponent({
    name      : 'App',
    components: {
        Todos,
    },
    mounted() {
    },
});
</script>

<style lang="scss">
#app {
    font-family             : Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2C3E50;
    margin-top              : 60px;
}
</style>
