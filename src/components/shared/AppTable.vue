<template>
    <div>
        <el-table class="app-table"
                  :data="filterTableData"
                  empty-text="No items" row-key="id" @select="handleRowSelection" ref="todoTable">
            <el-table-column type="selection" width="35px">
                <!-- eslint-disable-next-line vue/no-unused-vars -->
                <template slot="header" slot-scope="header">
                </template>
            </el-table-column>
            <el-table-column prop="description" min-width="200" align="left">
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
                <!-- eslint-disable-next-line vue/no-unused-vars -->
                <template slot-scope="scope">
                    <span class="app-table_del-btn"
                          v-on:click="$emit('row-delete', filterTableData[scope.$index])"></span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'AppTable',
        props: {
            tableData: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                search: '',
            }
        },
        updated() {
            let todos = this.tableData;
            todos.forEach(todo => {
                this.$refs.todoTable.toggleRowSelection(todo, todo.completed);
            });
        },
        computed: {
            /**
             * method returns filtered data based on input entered in search input field
             * @returns {*}
             */
            filterTableData() {
                return this.tableData.filter(data => !this.search || data.description.toLowerCase().includes(this.search.toLowerCase()));
            }
        },
        methods: {
            /**
             * method emits an event on row selection which is handled by parent component
             * @param selection
             * @param row
             */
            handleRowSelection(selection, row) {
                this.$emit('row-select', row);
            }
        }
    }
</script>
<style lang="scss" scoped>
$col-dodger-blue: #409eff;
$col-cornflower-blue: #a0cfff;

.app-table {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  width: 100%;
}

.app-table_del-btn {
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

  &::after {
    content: '×';
  }

  &:hover {
    color: $col-dodger-blue;
  }
}

tr {
  &:hover {
    .app-table_del-btn {
      display: block;
    }
  }
}
</style>
