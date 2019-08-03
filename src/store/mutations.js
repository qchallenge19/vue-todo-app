export const mutations = {
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
        let todos = state.todoList;
        todos.forEach((element, index) => {
            if(element.id === todo.id) {
                todos[index] = todo;
            }
        });
        state.todoList = todos;
    },
    DELETE_TODO (state, todo) {
        let todos = state.todoList;
        todos.splice(todos.indexOf(todo), 1)
    },
    RAISE_ERROR (state) {
        state.isError = true;
    },
    DELETE_ERROR (state) {
        state.isError = false;
    }
};
