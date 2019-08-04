<template>
    <div id="displayError" class="error"><p>{{errorText}}</p></div>
</template>
<script>
    export default {
        name: 'ErrorDisplay',
        props: {
            errorText: {
                type: String,
                default: 'Some error occurred, please try again.'
            }
        }
    }
</script>
<style lang="scss" scoped>
$red-orange: #f44336;
$white: #fff;

.error {
  background-color: $red-orange;
  border-radius: 5px;
  color: $white;
  height: 20px;
  margin: auto;
  text-align: center;
  width: 90%;
}
</style>
