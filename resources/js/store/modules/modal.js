export default {
    namespaced: true,
    state: {
        modalVisible: false,
        modalComponent: null,
        title: null,
        innerProps: null
    },
    mutations: {
        showModal(state, data) {
            state.modalVisible = true
            state.modalComponent = data.componentName,
            state.title = data.title
            state.innerProps = data.innerProps
        },
        hideModal(state) {
            state.modalVisible = false
            state.modalComponent = null,
            state.title = null,
            state.innerProps = null
        }
    },
    getters: {
        checkVisible: state => state.modalVisible,
        getModalComponent: state => state.modalComponent,
        getModalTitle: state => state.title,
        getInnerProps: state => state.innerProps
    }
}