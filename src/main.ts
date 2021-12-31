///<reference path="global.d.ts"/>
///<reference path="../auto-imports.d.ts"/>

import './styles.scss';
import { createApp } from 'vue';
import App from './App.vue';
import store, { Store } from '@/store';
import { Streams } from '@laravel-streams/api-client';
import { streams } from '@/streams';
import installElementPlus from './plugins/element';


declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $store: Store;
        $streams: Streams;
    }
}

const app                            = createApp(App);
window['app'] = app;
window['streams'] = streams;
window['store'] = store;
app.config.globalProperties.$store   = store;
app.config.globalProperties.$streams = streams;
installElementPlus(app);
app.mount('#app');