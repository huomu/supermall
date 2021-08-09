<template>
    <div class="detail">
       <detail-nav-bar></detail-nav-bar>
       <div>swiper轮播图</div>
    </div>
</template>

<script>
import DetailNavBar from '../detail/childComps/DetailNavBar.vue'
import DetailSwiper from '../detail/childComps/DetailSwiper.vue'

import {  getDetail } from '../../network/detail'
export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper
    },
    data(){
        return {
            iid: null,
            res: null,
            topImages: []
        }
    },
    created() {
        // 1.获取路由传过来的值, 并保存下来
        // this.iid = this.$router.params.iid

        // 2. 根据iid请求详情数据
       /*  getDetail(this.iid).then(res => {
            console.log(res);
            this.topImages = res.results;
        }) */
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>