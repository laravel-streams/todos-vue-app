// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers');
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer       : {
        host: '127.0.0.1',
        port: 3000
    },
    configureWebpack: {
        devtool: 'inline-source-map',
        node   : {
            process  : true,
            __dirname: true,
            os       : true,
        },
        plugins: [
            AutoImport({ // targets to transform
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/, /\.vue\?vue/, // .vue
                    /\.md$/, // .md
                ],

                // global imports to register
                imports  : [
                    // presets
                    'vue',
                ],
                resolvers: [ElementPlusResolver({
                    importStyle: 'sass',
                    ssr        : false,
                    version    : '1.2.0-beta.6',
                    directives : false
                })]
            }),
            Components({
                resolvers: [ElementPlusResolver({
                    importStyle: 'sass',
                    ssr        : false,
                    version    : '1.2.0-beta.6',
                    directives : false
                })]
            })
        ],
    },
};