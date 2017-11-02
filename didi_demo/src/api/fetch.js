import Vue from 'vue'

export function fetchTests(opt) {
    return Vue.axios.get('/api/index-all-data', opt)
}