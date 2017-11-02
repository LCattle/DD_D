
import { fetchTests } from './../../api/fetch'


const state = {
    testData: {}
}
const actions = {
    GET_TEST_DATA: ({commit, state}, opt) => {
        return fetchTests(opt).then(test => commit('GET_TESTS', { test }));
    }
}

const mutations = {
    GET_TESTS: (state, { test }) => {
        state.testData = test.data;
    }
}

const getters = {
    getTestData (state) {
        return state.testData;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}