<template>
  <div id="home">
    <home-swiper></home-swiper>
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

import TabControl from '../../components/content/tabControl/TabControl.vue'

export default {
  Name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  data() {
    return {
      recommend: "",
      titles: ''
    };
  },
};
</script>

<style scoped>
</style>