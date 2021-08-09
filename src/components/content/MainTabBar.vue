<template>
    <tab-bar>
    <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/logo.png" alt="">
        <div slot="item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
        <img slot="item-icon" src="../../assets/img/logo.png" alt="">
        <div slot="item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="../../assets/img/logo.png" alt="">
        <div slot="item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../assets/img/logo.png" alt="">
        <div slot="item-name">我的</div>
    </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'

export default {
    name: 'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }

}
</script>

<style scoped>

</style>