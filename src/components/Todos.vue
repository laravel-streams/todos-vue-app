<template>
    <div class="todos">
        <el-card class="box-card ">
            <template #header>
                <div class="card-header">
                    <span>Todos</span>
                    <el-button class="button" type="info">Add</el-button>
                </div>
            </template>
            <el-scrollbar height="300px">
                <TodoList :todos="todos" />
            </el-scrollbar>
            <el-pagination
                class="todos__pagination"
                v-model:currentPage="$store.current_page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="$store.per_page"
                layout="total, sizes, prev, pager, next"
                :total="$store.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
            <TodoForm>

            </TodoForm>
        </el-card>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onBeforeMount, ref } from 'vue';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';

export default defineComponent({
    name      : 'Todos',
    components: { TodoForm, TodoList },
    props     : {},
    data() {return {};},
    beforeCreate() {
    },
    setup(props, ctx) {
        const $ = getCurrentInstance()

// $.appContext.app.use
        onBeforeMount(() => {
            $.proxy.$store.paginate(1)
        })
        const ul    = ref<HTMLUListElement>();
        let classes = computed((c) => ({
            //`\${this.prefix}-v`: true
        }));
        const handleSizeChange = (val) => {
            $.proxy.$store.per_page = val;
            $.proxy.$store.paginate(1)
        }
        const handleCurrentChange = (val) => {
            $.proxy.$store.paginate(val)
            console.log(`current page: ${val}`)
        }
        const todos = computed((c) => {
            return $.proxy.$store.todos
        })
        return {
            classes,
            ul,
            todos,
            handleCurrentChange,
            handleSizeChange
        };
    },
});

</script>

<style lang="scss">
.card-header {
    display         : flex;
    justify-content : space-between;
    align-items     : center;
}

.text {
    font-size : 14px;
}

.item {
    margin-bottom : 18px;
}

.box-card {
    width : 480px;
}
</style>