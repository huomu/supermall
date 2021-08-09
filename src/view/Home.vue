<template>
  <keep-alive>
    <div id="homee">
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <scroll
        class="contents"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
        @scroll="contentScroll"
        @pullingUp="loadMore"
      >
      <goods-list></goods-list>
      </scroll>
      <back-top @click.native="backtop" v-show="isShowBackTop"></back-top>
    </div>
  </keep-alive>
</template>

<script>
import NavBar from "../components/common/navbar/NavBar.vue";
import Scroll from "../components/common/scroll/Scroll.vue";
import GoodsList from "../components/content/goods/GoodsList.vue"
import BackTop from "../components/content/backtop/BackTop.vue";

import { getHomeMultidata } from "../network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sss: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
    };
  },
  methods: {
    /* *
     * 事件监听相关的方法
     */
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(postion) {
      this.isShowBackTop = -postion.y > 1000;
    },
    loadMore() {
      // this.getHomeGoods(this.currentType)
      //重新计算可滚动的高度
      //    this.$refs.scroll.scroll.refresh()
    },

    /**
     * 网络请求相关的方法
     *  */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      this.getHomeGoods("pop", type).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
      // 完成加载更多
      this.$refs.scroll.scroll.finishPullUp();
    },
    // 防抖函数
    debounce(func, delay) {
      let timer = null;

      return function (...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          func.appley(this, args);
        }, delay);
      };
    },
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
    });

    // 1.请求多个数据

    // 2.请求商品数据
  },
  mounted() {
    // this.debounce(this.$refs.scroll.refresh,500)
    // 3.监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      // 防抖函数  对于refresh非常频繁的防抖操作  debounc/节流throttle

      this.$refs.scroll.scroll.refresh();
    });
  },
};
</script>

<style scoped>
.home-nav {
  background: pink;
  color: #fff;
}
.contents {
  height: 300px;
  overflow: hidden;
}
</style>