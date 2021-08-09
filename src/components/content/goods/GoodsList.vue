<template>
    <div class="goodslist">
        <goods-list-item></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
    name: 'GoodsList',  
    components: {
        GoodsListItem,
    }  
}
</script>

<style scoped>

</style>