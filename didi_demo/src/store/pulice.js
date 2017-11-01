import Vue from 'vue'
import Vuex from 'vuex'


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
  }
})

export default store
