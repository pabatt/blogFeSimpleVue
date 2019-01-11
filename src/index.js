import Vue from 'vue';
import store from './store/store'
import router from './router/router'
import App from './App.vue';

const app = new Vue({
    store,
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
