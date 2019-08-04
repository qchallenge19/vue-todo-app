<template>
  <app-card v-bind:contents="data.description" v-bind:title="data.title"></app-card>
</template>
<script>
import AppCard from '../shared/AppCard';
export default {
  name: 'About',
  components: {
    'app-card': AppCard
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
