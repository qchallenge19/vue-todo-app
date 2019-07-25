<template>
    <div id="menuList">
        <el-button type="text"><router-link to="/about">About</router-link></el-button>
        <el-button type="text"><router-link to="/todo">Todo</router-link></el-button>
    </div>
</template>
<script>
    export default {
        name: 'menu-list'
    }
</script>
