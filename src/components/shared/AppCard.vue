<template>
    <el-row :gutter="12">
        <el-col :span="24">
            <el-card shadow="always">
                <div class="desc">
                    <div v-if="title"><p>{{title}}</p></div>
                    <div v-if="subTitle"><p>{{subTitle}}</p></div>
                    <div v-if="contents"><p>{{contents}}</p></div>
                    <div v-if="footer"><p>{{footer}}</p></div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'AppCard',
    props: {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String
        },
        contents: {
            type: String
        },
        footer: {
            type: String
        }
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
