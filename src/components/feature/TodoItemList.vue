<template>
    <div class="todo">
        <div class="todo__container">
            <div class="todo__add-task">
                <el-row :gutter="20">
                    <el-col :xs="16" :sm="18" :md="20" :lg="21"><div>
                        <el-input v-model="newTodo"></el-input>
                    </div></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3"><div>
                        <el-button type="primary" @click="addTodo" :disabled="newTodo.length === 0" style="width: 100%">Add</el-button></div>
                    </el-col>
                </el-row>
            </div>
            <div>
                <el-row>
                    <el-col :span="24">
                        <div>
                            <AppTable v-bind:tableData="tableData" v-on:row-select="handleTodoUpdate" v-on:row-delete="handleDelete"
                            ></AppTable>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters  } from 'vuex';
    import AppTable from "../shared/AppTable";
    export default {
        name: 'TodoItemList',
        components: {
            AppTable
        },
        data() {
            return {
                newTodo: ''
            }
        },
        created () {
            this.loadTodoAction();
        },
        computed: {
            ...mapGetters({
                fetchTodos: 'todos'
            }),
            tableData () {
                return this.fetchTodos;
            }
        },
        methods: {
            ...mapActions({
                loadTodoAction: 'loadTodos',
                addTodoAction: 'addTodo',
                deleteTodoAction: 'deleteTodo',
                updateTodoAction: 'updateTodo'
            }),
            /**
             * to delete item from the todo list
             */
            handleDelete(row) {
                this.deleteTodoAction(row);
            },
            /**
             * to add item to the todo list
             */
            addTodo() {
                this.addTodoAction(this.newTodo);
                this.newTodo = '';
            },
            /**
             * to handle status update of the todo item
             * @param todo
             */
            handleTodoUpdate(todo) {
                todo = {...todo, completed: !todo.completed};
                this.updateTodoAction(todo);
            }
        },
    }
</script>
<style lang="scss" scoped>
    $col-white: #fff;
    $col-cornflower-blue: #a0cfff;
    $col-black: #000;

    .todo {
      margin-top: 20px;
    }

    .todo__add-task {
      margin: auto;
      width: 90%;
    }

    .todo__container {
      background: $col-white;
      border: 1px solid $col-cornflower-blue;
      border-radius: 5px;
      color: $col-black;
      float: none;
      margin: auto;
      padding-top: 25px;
      width: 90%;
    }
</style>
<style lang="scss">
    $col-solitude: #ebeef5;
    th:first-child {
        visibility: hidden;
    }

    tr:first-child td:first-child {
        border-top: 1px solid $col-solitude;
    }
</style>
