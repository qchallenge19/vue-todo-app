<template>
  <Description v-bind:contents="data.description" v-bind:title="data.title"></Description>
</template>
<script>
import Description from '../shared/Description';
export default {
  name: 'About',
  components: {
  Description
  },
  data: () => {
    return {
      data: {
        title : 'Todo App',
        description: 'The Todo app lets user to add, update and remove the Todo items from the list dynamically. Todo list items persist\n' +
                '    even after refresh of the app. Contents are being served from local JSON file.'
      }
    }
  }
  }
</script>
