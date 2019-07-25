<template>
    <div class="main">
        <div class="container">
            <div class="add-task-container">
                <el-row :gutter="20">
                    <el-col :xs="16" :sm="18" :md="20" :lg="21"><div>
                        <el-input v-model="newTodo" @keyup.enter="addTodo"></el-input>
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
                            <el-table
                                    :data="tableData.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
                                    empty-text="No items" row-key="id" @select="handleTodoUpdate" ref="todoTable">
                                <el-table-column type="selection" style="width: 35px">
                                    <!-- eslint-disable-next-line vue/no-unused-vars -->
                                    <template slot="header" slot-scope="header">
                                    </template>
                                </el-table-column>
                                <el-table-column prop="description" min-width="200" style="text-align: left">
                                    <!-- eslint-disable-next-line vue/no-unused-vars -->
                                    <template slot="header" slot-scope="header">
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        align="right">
                                    <!-- eslint-disable-next-line vue/no-unused-vars -->
                                    <template slot="header" slot-scope="scope">
                                        <el-input
                                                v-model="search"
                                                placeholder="Search"/>
                                    </template>
                                    <template slot-scope="scope">
                                        <span class="destroy" @click="handleDelete(tableData[scope.$index])"></span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo-item-list',
        data() {
            return {
                newTodo: '',
                search: '',
            }
        },
        created () {
            this.$store.dispatch('loadTodos');
        },
        updated () {
            let todos = this.$store.getters.todos;
            todos.forEach(todo => {
                this.$refs.todoTable.toggleRowSelection(todo, todo.completed);
            });
        },
        computed: {
            tableData () {
                return this.$store.getters.todos;
            }
        },
        methods: {
            /**
             * to delete item from the todo list
             */
            handleDelete(row) {
                this.$store.dispatch('deleteTodo', row)
            },
            /**
             * to add item to the todo list
             */
            addTodo () {
                this.$store.dispatch('addTodo', this.newTodo);
                this.newTodo = '';
            },
            /**
             * to handle status update of the todo item
             * @param selection
             * @param todo
             */
            handleTodoUpdate(selection, todo) {
                this.$store.dispatch('updateTodo', todo);
            }
        },
    }
</script>
<style lang="scss">
$col-white: #fff;
$col-cornflower-blue: #a0cfff;
$col-dodger-blue: #409eff;
$col-black: #000;

.add-task-container {
  margin: auto;
  width: 90%;
}

.main {
  margin-top: 20px;
}

.el-table {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  width: 100%;
}

.container {
  background: $col-white;
  border: 1px solid $col-cornflower-blue;
  border-radius: 5px;
  color: $col-black;
  float: none;
  margin: auto;
  padding-top: 25px;
  width: 90%;
}

.destroy {
  align-content: center;
  bottom: 0;
  color: $col-cornflower-blue;
  display: none;
  font-size: 30px;
  height: 40px;
  margin: auto 0;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: color .2s ease-out;
  width: 40px;
}

.destroy:hover {
  color: #409EFF;
}

.destroy:after {
  content: '×';
}

.el-table_2_column_4.el-table-column--selection.is-leaf .cell {
  display: none;
}

.el-table_1_column_1.el-table-column--selection.is-leaf .cell {
  display: none;
}

tr:hover .destroy {
  display: block;
}
</style>
