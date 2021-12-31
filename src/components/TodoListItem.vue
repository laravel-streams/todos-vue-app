<template>
    <li class="todos__list-item">
        <div class="todos__list-item-checkbox">
            <ElCheckbox
                v-model="todo.complete"
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
                      @blur="onInputBlur"
            />
        </div>
    </li>
</template>

<script lang="ts">
import { ComponentPublicInstance, PropType } from 'vue';
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
            //@ts-ignore
            todo.entry.complete = v;
            todo.editing   = false;
            todo.save();
        };
        const onTextDoubleClick = async (e) => {
            todo.editing = true;
            (input.value.$el as HTMLInputElement).focus();
        };
        const onInputBlur       = (e) => {
            todo.editing = false;
            //@ts-ignore
            todo.entry.title = todo.title
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