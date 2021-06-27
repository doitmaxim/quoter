import Api from '../../service/api'

export default {
    namespaced: true,
    state: {
        quotes: []
    },
    getters: {
        quotes: state => state.quotes
    },
    mutations: {
        SET_QUOTES(state, quotes) {
            state.quotes = quotes
            console.log(state.quotes)
        }
    },
    actions: {
        loadQuotes( {commit}, page ) {
            Api().get('/quotes?page='+page)
                .then( response  => {
                    console.log(page)
                    commit('SET_QUOTES', response.data)
                })
        }
    }
}

