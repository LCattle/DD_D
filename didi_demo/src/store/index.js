import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import Test from './modules/test'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        
    },
    actions,
    mutations,
    getters,
    modules: {
      Test
    }
})
