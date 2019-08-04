import { baseService, RestEndPoint } from "../services/base-service";
import { generateRandomId } from "../utils/util";

export const actions = {
    loadTodos: function ({ commit }) {
        commit('SET_LOADING', true);
        baseService(RestEndPoint.LOAD_TODO, 'GET')
            .then(r => r.data)
            .then(todos => {
                commit('DELETE_ERROR');
                commit('SET_TODOS', todos);
                commit('SET_LOADING', false);
            }).catch(() => commit('RAISE_ERROR'))
    },
    addTodo: function ({ commit}, todoItem ) {
        if (!todoItem) {
            return;
        }
        const todo = {
            description: todoItem,
            completed: false,
            id: generateRandomId(9)
        };
        baseService(RestEndPoint.ADD_TODO, 'POST', todo).then((res) => {
            commit('DELETE_ERROR');
            commit('ADD_TODO', res.data);
        }).catch(() => commit('RAISE_ERROR'))
    },
    deleteTodo: function ({ commit }, todo) {
        baseService(RestEndPoint.DELETE_TODO+'/'+todo.id, 'DELETE').then(() => {
            commit('DELETE_ERROR');
            commit('DELETE_TODO', todo);
        }).catch(() => commit('RAISE_ERROR'))
    },
    updateTodo: function({ commit }, todo){
        baseService(RestEndPoint.UPDATE_TODO+'/'+todo.id, 'PUT', todo).then(() => {
            commit('DELETE_ERROR');
            commit('UPDATE_TODO', todo);
        }).catch(() => commit('RAISE_ERROR'))
    }
};
