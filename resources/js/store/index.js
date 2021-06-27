import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modal'
import tags from './modules/tags';
import quotes from './modules/quotes';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
    tags,
    quotes
  }
})
