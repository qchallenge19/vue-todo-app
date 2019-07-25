<template>
  <div id="app">
    <el-container style="height: 100vh">
      <el-header style="height: 70px">
        <div id="navigation">
        <MenuList></MenuList>
      </div></el-header>
      <el-main style="background: #f0f8ff">
        <div id="container">
          <div id="errorBox" v-if="isError && routePath === '/todo'" style="text-align: center">Some error occurred, please try again.</div>
        <router-view/>
      </div></el-main>
    </el-container>
  </div>
</template>

<script>

import MenuList from "./components/shared/MenuList";
export default {
  name: 'app',
  components: {
    MenuList
  },
  computed: {
    routePath () {
      return this.$route.path;
    },
    isError () {
      return this.$store.state.isError
    }
  },
  watch: {
    immediate: true,
    deep: true,
    isError (newErrorState) {
      return newErrorState;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  margin: 0;
}

#navigation {
    padding: 15px;
  a {
    color: #6495ed;
    padding: 5px;
    &.router-link-active {
      color: blue;
    }
    text-decoration: none;
  }
}

#container {
  padding-top: 10px;
}

#errorBox {
  background-color: rgb(244, 67, 54);
  border-radius: 5px;
  color: #fff;
  height: 20px;
  margin: auto;
  width: 90%;
}

body {
    height: 100%;
    margin: 0;
}
</style>
