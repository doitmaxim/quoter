<template>
    <div class="list">
        <quote-item v-for="quote in quotes.items" :key="quote.id" :quote="quote" />
        <ul class="pagination">
            <li v-for="n in quotes.last_page"  :class="n == quotes.current_page ?'active' : ''" class="page-item">
                <a @click="getResults(n)" class="page-link">{{n}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
import QuoteItem from '../components/QuoteItem.vue';
export default {
    components: {
        QuoteItem
    },
    computed: {
        quotes() {
            return this.$store.getters['quotes/quotes']
        }
    },
    mounted() {
        this.getResults();
    },
    methods: {
        getResults(page = 1) {
            this.$store.dispatch('quotes/loadQuotes', page);
        },
    }
}
</script>
