import Home from './views/Home.vue'
import Quote from './views/Quote.vue'
export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/quote',
            component: Quote
        }
    ]

}