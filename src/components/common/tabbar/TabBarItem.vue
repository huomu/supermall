<template>
    <div class="tab-bar-item" @click="itemclick">
        <slot name="item-icon"></slot>
        <slot name="item-name"></slot>
        <!-- <img src="../../assets/imgs/logo.png" alt="">
        <div>首页</div> -->
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String
    },
    data(){
        return {
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexof(this.path) !== -1
        }
    },
    methods:{
        itemclick(){
            console.log("itemclick")
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        /* line-height: 49px;
        height: 49px; */
        font-size: 18px;
    }
    .tab-bar-item img{
        width: 45px;
        height: 26px;
    }

</style>