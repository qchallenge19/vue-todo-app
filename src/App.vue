<template>
  <div id="app" class="app-root">
    <el-container class="app-root__container">
      <el-header class="app-root__header">
        <div id="nav" class="app-root__nav">
        <MenuList></MenuList>
      </div>
      </el-header>
      <el-main class="app-root__main">
        <div id="content" class="app-root__content">
          <ErrorDisplay v-if="isError && routePath === '/todo'"></ErrorDisplay>
        <router-view/>
      </div></el-main>
    </el-container>
  </div>
</template>

<script>

import MenuList from "./components/shared/MenuList";
import ErrorDisplay from './components/shared/ErrorDisplay';
import { mapGetters  } from 'vuex';
export default {
  name: 'app',
  components: {
    MenuList,
    ErrorDisplay
  },
  computed: {
    ...mapGetters({
           serverError: "isError"
  }),
    routePath () {
      return this.$route.path;
    },
    isError () {
      return this.serverError;
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
  $alice-blue: #f0f8ff;
  $cornflower-blue: #6495ed;
  $cyan-blue: #2c3e50;
  $red-orange-approx: #f44336;
  $white: #fff;

  .app-root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    color: $cyan-blue;
    margin: 0;
  }
  .app-root__container {
    height: 100vh;
  }
  .app-root_header {
    height: 70px;
  }
  .app-root__main {
    background-color: $alice-blue;
  }
  .app-root__nav {
    padding: 15px;
    a {
      color: $cornflower-blue;
      padding: 5px;
      &.router-link-active {
        color: blue;
      }
      text-decoration: none;
    }
  }
  .app-root__content {
    padding-top: 10px;
  }

  body {
    height: 100%;
    margin: 0;
  }
</style>
