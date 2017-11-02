import Vue from 'vue'
import Vuex from 'vuex'

import Test from './modules/test'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
     BudgetYear:[],
     NeedsSearch:[],
     BudgetSearch:[],
     NeedsRequest:[],
     NeedsRelease:[],
     InterviewResume:[],
     budgetSeeData:[],
     searchDataPation:[],
  },
  modules: {
    Test
  }
})

export default store
