import { ElButton, ElCard,ElLoading, ElLoadingDirective,ElCheckbox, ElCheckboxButton, ElCol, ElForm, ElFormItem, ElInput, ElMessage, ElMessageBox, ElRow, ElScrollbar, ElSpace } from 'element-plus';
import 'element-plus/es/components/message-box/style/index.mjs'
import 'element-plus/es/components/loading/style/index.mjs'
import 'element-plus/theme-chalk/src/loading.scss';
export default (app) => {
    app.use(ElButton);
    app.use(ElCheckboxButton);
    app.use(ElCheckbox);
    app.use(ElCard);
    app.use(ElRow);
    app.use(ElCol);
    app.use(ElScrollbar);
    app.use(ElSpace);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.use(ElMessageBox);
    app.use(ElMessage);
    app.use(ElLoading);
    app.directive(ElLoading.directive)
}
