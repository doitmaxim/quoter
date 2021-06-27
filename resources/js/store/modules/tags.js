import Api from '../../service/api'

export default {
    namespaced: true,
    state: {
        tags: []
    },
    getters: {
        tags: state => state.tags
    },
    mutations: {
        SET_TAGS(state, tags) {
            state.tags = tags
        }
    },
    actions: {
        loadTags( {commit} ) {
            Api().get('/tags')
                .then( response => {
                    commit('SET_TAGS', response.data)
                })
        }
    }
}