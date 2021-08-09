<template>
    <div class="goods-item" @click="itemClick">
        <!-- <img :src="goodsItem" alt="" @load="imageLoad"> -->
        <p>一张goodslistitem图片</p>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
         goodsItem: {
            type: Object,
            default() {
                return {}
            }
        },
    },
    methods: {
        imageLoad(){
            //img.onload原生监听图片加载完成
            //时间总线this.$bus.emit('aaaa')
            this.$bus.$emit('itemImageLoad')
            console.log('imageload');
        },
        itemClick(){
            console.log('跳转到详情页');
            this.toDetail()
        },
        toDetail(){
            this.$router.push('/detail')
        } 
    } 
}
</script>

<style scoped>

</style>