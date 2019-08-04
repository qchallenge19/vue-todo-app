<template>
    <el-row :gutter="12">
        <el-col :span="24">
            <el-button v-if="btnPrimary" type="primary" @click="handleBtnClick" :disabled="isDisabled" class="app-button">{{btnText}}</el-button>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name: 'AppButton',
        props: {
            btnType: {
                type: String,
                default: 'primary'
            },
            btnText: {
                type: String,
                required: true
            },
            isDisabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            /**
             * method to return true if btn type is to be of primary type
             * @returns {boolean}
             */
            btnPrimary() {
                return this.btnType === 'primary';
            }
        },
        methods: {
            /**
             * method will emit and event when button is clicked which can be handled by parent component
             */
            handleBtnClick() {
                this.$emit('btn-clicked');
            }
        }
    }
</script>
<style scoped>
    .app-button {
        width: 100%;
    }
</style>
