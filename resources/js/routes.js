import Home from './views/Home.vue'
import Quote from './views/Quote.vue'
import NotFound from './views/NotFound.vue';
export default {
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/quote/:id',
            component: Quote
        },
    ]

}
