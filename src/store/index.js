import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        todoList: [],
        loading: true,
        isError: false
    },
    actions,
    mutations,
    getters: {
        todos: state => state.todoList,
        isError: state => state.isError
    },
});
