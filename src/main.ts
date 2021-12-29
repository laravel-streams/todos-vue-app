///<reference path="global.d.ts"/>

import './styles.scss';
import { createApp } from 'vue';
import App from './App.vue';
import store, { Store } from '@/store';
import { Streams } from '@laravel-streams/api-client';
import { streams } from '@/streams';
import installElementPlus from './plugins/element';

const app                            = createApp(App);
app.config.globalProperties.$store   = store;
app.config.globalProperties.$streams = streams;
installElementPlus(app);
app.mount('#app');

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $store: Store;
        $streams: Streams;
    }
}