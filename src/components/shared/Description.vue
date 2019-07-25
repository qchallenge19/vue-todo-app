<template>
    <div class="desc">
        <div><p>{{title}}</p></div>
        <div><p>{{contents}}</p></div>
    </div>
</template>
<script>
export default {
    name: 'description',
    props: ['title','contents']
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
