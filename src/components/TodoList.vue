<template>
    <ul :ref="ul" class="todos__list">
        <template v-for="(todo,index) in todos" :key="todo.id">
            <TodoListItem :todo="todo"/>
        </template>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import TodoListItem from '@/components/TodoListItem.vue';

export default defineComponent({
    name      : 'TodoList',
    components: { TodoListItem },
    props     : {
        modelValue: Array as PropType<Todo[]>,
        todos: {
            type: Array as PropType<Todo[]>,
            required: true
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const ul = ref<HTMLUListElement>();
        return {
            ul,
        };
    },
});

</script>