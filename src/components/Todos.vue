<template>
    <div class="todos">
        <el-card class="box-card ">
            <template #header>
                <div class="card-header">
                    <span>Todos</span>
                    <el-button class="button" type="info" @click="handleAddClick">Add</el-button>
                </div>
            </template>
            <el-scrollbar height="300px" v-loading="loading">
                <TodoList :todos="todos"/>
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
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';
import { ElLoadingDirective, ElMessageBox } from 'element-plus';

export default defineComponent({
    name      : 'Todos',
    components: { TodoForm, TodoList },
    directives: { ElLoadingDirective },
    props     : {},
    data() {return {};},
    beforeCreate() {
    },
    setup(props, ctx) {
        const $       = getCurrentInstance();
        const loading = ref(true);
        onBeforeMount(async() => {
            await $.proxy.$store.paginate(1);
            loading.value = false;
        });
        const ul                  = ref<HTMLUListElement>();
        let classes               = computed((c) => ({
            //`\${this.prefix}-v`: true
        }));
        const handleSizeChange    = async (val) => {
            loading.value           = true;
            $.proxy.$store.per_page = val;
            await $.proxy.$store.paginate(1);
            loading.value = false;
        };
        const handleCurrentChange = async (val) => {
            loading.value = true;
            await $.proxy.$store.paginate(val);
            loading.value = false;
            console.log(`current page: ${val}`);
        };
        const todos               = computed((c) => {
            return $.proxy.$store.todos;
        });
        const handleAddClick      = async (e) => {
            const data   = await ElMessageBox.prompt('Please input your task', 'Add todo task', {
                confirmButtonText: 'OK',
                cancelButtonText : 'Cancel',
            });
            loading.value = true;
            await $.proxy.$store.addTodo(data.value);
            loading.value = false;
        };
        return {
            classes,
            ul,
            todos,
            handleCurrentChange,
            handleSizeChange,
            handleAddClick,
            loading,
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