<template>
    <div class="desc">
        <div v-if="title"><p>{{title}}</p></div>
        <div v-if="subTitle"><p>{{subTitle}}</p></div>
        <div v-if="contents"><p>{{contents}}</p></div>
        <div v-if="footer"><p>{{footer}}</p></div>
    </div>
</template>
<script>
export default {
    name: 'Description',
    props: {
        title: String,
        subTitle: String,
        contents: String,
        footer: String
    }
}
</script>
<style scoped>
    .desc {
        float: none;
        margin: auto;
        padding: 5px;
        text-align: center;
    }
</style>
