<template >
    <div class="main">
        <span class="aa">我不管，我要吃糖！</span>
    </div>
</template>
<script>
function fetchTestDatas(store, opt) {
    return store.dispatch('GET_TEST_DATA', opt);
}
export default {
    data() {
        return {

        }
    },
    beforeMount() {
        fetchTestDatas(this.$store, {}).then(() => {
            console.log('能拿到数据？');
            console.log(this.$store);
        });
    },
    mounted() {
        console.log('come in!');
    }
}
</script>
<style lang="scss">
.main {
    width: 100%;
    height: 50px;
    margin-top: 100px;
    text-align: center;
    .aa{
        color: green;
        font-size: 18px;
    }
}
</style>

