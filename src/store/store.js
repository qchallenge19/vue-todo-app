import Vue from 'vue';
import Vuex from 'vuex';
import { baseService, RestEndPoint } from '../services/base-service';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: [],
        loading: true,
        isError: false
    },
    getters: {
        todos: state => state.todoList
    },
    mutations: {
        SET_LOADING (state, flag) {
            state.loading = flag
        },
        SET_TODOS (state, todos) {
            state.todoList = todos
        },
        ADD_TODO (state, todoObject) {
            state.todoList.push(todoObject)
        },
        UPDATE_TODO (state, todo) {
            let todos = state.todoList
            todos.forEach((element, index) => {
                if(element.id === todo.id) {
                    todos[index] = todo;
                }
            });
            state.todoList = todos;
        },
        DELETE_TODO (state, todo) {
            let todos = state.todoList
            todos.splice(todos.indexOf(todo), 1)
        },
        RAISE_ERROR (state) {
            state.isError = true;
        },
        DELETE_ERROR (state) {
            state.isError = false;
        }
    },
    actions: {
        loadTodos: function ({ commit }) {
            commit('SET_LOADING', true)
            baseService(RestEndPoint.LOAD_TODO, 'GET')
                .then(r => r.data)
                .then(todos => {
                    commit('DELETE_ERROR');
                    commit('SET_TODOS', todos)
                    commit('SET_LOADING', false)
                }).catch(() => commit('RAISE_ERROR'))
        },
        addTodo: function ({ commit}, todoItem ) {
            if (!todoItem) {
                return;
            }
            const todo = {
                description: todoItem,
                completed: false,
                id: randomId()
            }
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
            const todoRef = todo;
            todoRef.completed = !todoRef.completed;
            baseService(RestEndPoint.UPDATE_TODO+'/'+todo.id, 'PUT', todoRef).then(() => {
                commit('DELETE_ERROR');
                commit('UPDATE_TODO', todo);
            }).catch(() => commit('RAISE_ERROR'))
        }
    }
})


function randomId () {
    return Math.random()
        .toString()
        .substr(2, 9)
}


