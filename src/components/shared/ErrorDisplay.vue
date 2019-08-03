<template>
    <div id="displayError" class="errorBox"><p>Some error occurred, please try again.</p></div>
</template>
<script>
    export default {
        name: 'ErrorDisplay'
    }
</script>
<style lang="scss" scoped>
    $red-orange: #F44336;
    $white: #fff;
    .errorBox {
        background-color: $red-orange;
        border-radius: 5px;
        color: $white;
        height: 20px;
        margin: auto;
        text-align: center;
        width: 90%;
    }
</style>
