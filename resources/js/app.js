/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from './store/index.js'
Vue.use(VueRouter);
Vue.use(require('vue-resource'));


Vue.component('modal-root', require('./components/ModalRoot.vue').default);
Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    store: store,
    el: '#app',
    router: new VueRouter(routes)
});
