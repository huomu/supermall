<template>
<div>
     <scroll class="content" 
     ref="scroll"
     :probe-type="3" 
     :pull-up-load="true"
     @scroll="contentScroll"
     @pullingUp='loadMore'>
        <h2>我是about</h2>
        <ul>
            <li>我是scroll1</li>
            <li>我是scroll2</li>
            <li>我是scroll3</li>
            <li>我是scroll4</li>
            <li>我是scroll5</li>
            <li>我是scroll6</li>
            <li>我是scroll7</li>
            <li>我是scroll8</li>
            <li>我是scroll9</li>
            <li>我是scroll10</li>
            <li>我是scroll11</li>
            <li>我是scroll12</li>
            <li>我是scroll13</li>
            <li>我是scroll14</li>
            <li>我是scroll15</li>
            <li>我是scroll16</li>
            <li>我是scroll17</li>
            <li>我是scroll18</li>
            <li>我是scroll19</li>
            <li>我是scroll20</li>
            <li>我是scroll21</li>
            <li>我是scroll22</li>
            <li>我是scroll23</li>
            <li>我是scroll24</li>
            <li>我是scroll25</li>
            <li>我是scroll26</li>
            <li>我是scroll27</li>
            <li>我是scroll28</li>
            <li>我是scroll29</li>
            <li>我是scroll30</li>
            <li>我是scroll31</li>
            <li>我是scroll32</li>
            <li>我是scroll33</li>
            <li>我是scroll34</li>
            <li>我是scroll35</li>
            <li>我是scroll36</li>
            <li>我是scroll37</li>
            <li>我是scroll38</li>
            <li>我是scroll39</li>
            <li>我是scroll40</li>
            <li>我是scroll41</li>
            <li>我是scroll42</li>
            <li>我是scroll43</li>
            <li>我是scroll44</li>
            <li>我是scroll45</li>
            <li>我是scroll46</li>
            <li>我是scroll47</li>
            <li>我是scroll48</li>
            <li>我是scroll49</li>
            <li>我是scroll50</li>
            <li>我是scroll51</li>
            <li>我是scroll52</li>
            <li>我是scroll53</li>
            <li>我是scroll54</li>
            <li>我是scroll55</li>
            <li>我是scroll56</li>
            <li>我是scroll57</li>
            <li>我是scroll58</li>
            <li>我是scroll59</li>
            <li>我是scroll60</li>
            <li>我是scroll61</li>
            <li>我是scroll62</li>
            <li>我是scroll63</li>
            <li>我是scroll64</li>
            <li>我是scroll65</li>
            <li>我是scroll66</li>
            <li>我是scroll67</li>
            <li>我是scroll68</li>
            <li>我是scroll69</li>
            <li>我是scroll70</li>
            <li>我是scroll71</li>
            <li>我是scroll72</li>
            <li>我是scroll73</li>
            <li>我是scroll74</li>
            <li>我是scroll75</li>
            <li>我是scroll76</li>
            <li>我是scroll77</li>
            <li>我是scroll78</li>
            <li>我是scroll79</li>
            <li>我是scroll80</li>
            <li>我是scroll81</li>
            <li>我是scroll82</li>
            <li>我是scroll83</li>
            <li>我是scroll84</li>
            <li>我是scroll85</li>
            <li>我是scroll86</li>
            <li>我是scroll87</li>
            <li>我是scroll88</li>
            <li>我是scroll89</li>
            <li>我是scroll90</li>
            <li>我是scroll91</li>
            <li>我是scroll92</li>
            <li>我是scroll93</li>
            <li>我是scroll94</li>
            <li>我是scroll95</li>
            <li>我是scroll96</li>
            <li>我是scroll97</li>
            <li>我是scroll98</li>
            <li>我是scroll99</li>
            <li>我是scroll100</li>
        </ul>
    </scroll>
    <back-top @click.native="backtop" v-show="isShowBackTop"></back-top>
</div>
   
</template>

<script>
import Scroll from '../components/common/scroll/Scroll.vue'
import BackTop from '../components/content/backtop/BackTop.vue'

export default {
    name: 'Category',
    components: {
        Scroll,
        BackTop
    },
    data(){
        return {
            isShowBackTop: false
        }
    },
    methods:{
   
    },
    created() {
        // 1.请求多个数据

        // 2.请求商品数据
 
    },
    mounted(){
      
    }
}
</script>

<style scoped>
    .content{
        height: 300px;
        /* height: calc(100% - 93px); */
        overflow: hidden;
    }
</style>