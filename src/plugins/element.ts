import { ElButton, ElCard, ElCheckbox, ElCheckboxButton, ElCol, ElForm, ElFormItem, ElInput, ElRow, ElScrollbar, ElSpace } from 'element-plus';

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
}
