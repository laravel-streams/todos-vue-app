<template>
    <div class="todos__form"></div>
</template>

<script lang="ts">

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
