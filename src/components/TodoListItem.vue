<template>
    <li class="todos__list-item">
        <div class="todos__list-item-checkbox">
            <ElCheckbox
                v-model="todo.completed"
                :name="todo.id"
                @change="onCheckboxChange"
                size="mini"
            />
        </div>
        <div :class="titleClasses">
            <p v-show="!todo.editing"
               @dblclick="todo.editing=true"
            >{{ todo.title }}</p>
            <el-input type="textarea"
                      :ref="input"
                      v-show="todo.editing"
                      v-model="todo.title"
                      size="mini"
                      @blur="todo.editing=false"
            />
        </div>
    </li>
</template>

<script lang="ts">
import { ComponentPublicInstance, computed, defineComponent, PropType, ref } from 'vue';
import { TodoEntry } from '@/types';


export default defineComponent({
    name : 'TodoListItem',
    props: {
        todo: {
            type    : Object as PropType<TodoEntry>,
            required: true,
        },
    },
    data() {return {};},
    setup(props: { todo: TodoEntry }, ctx) {
        const { todo }          = props;
        const titleClasses      = computed(() => ({
            [ `todos__list-item-title` ]         : true,
            [ `todos__list-item-title--editing` ]: todo.editing,
        }));
        const onCheckboxChange  = (v) => {
            console.log(v);
            todo.completed = v;
            todo.editing   = false;
            todo.save();
        };
        const onTextDoubleClick = async (e) => {
            todo.editing = true;
            (input.value.$el as HTMLInputElement).focus();
        };
        const onInputBlur       = (e) => {
            todo.editing = false;
            todo.save();
        };
        const input             = ref<ComponentPublicInstance>();

        return {
            onCheckboxChange,
            onTextDoubleClick,
            onInputBlur,
            input,
            titleClasses
        };
    },
});

</script>

<style lang="scss">
//@import "../../styles/base";
</style>