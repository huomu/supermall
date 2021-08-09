# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 结构
    1. 划分目录结构 
        router  -- 路由相关的东西
        store -- 状态管理
        network -- 网络相关的
        common -- 公用的js文件
            const.js
            utils.js 公用方法
        assets--资源文件
            css
            img
        components -组件 公用组件
            common - 公共的 不止当前项目可用，其他项目也可用
            content - 和业务相关的组件
        view -- 大的视图
            category
            home


### tabControl的吸顶效果

9.1 获取到tabControl的offsetTop
    必须知道滚动到多少时，开始有吸顶效果,这个时候就需要过去tabControl的offsetTop，但是如果直接mounted中获取tabControl的offsetTop,那么值不正确
    如何获取正确的值？
        监听HomeSwiper中img的加载完成
    加载完成后，发出事件，在Home.vue中，获取正确的值

### 十.让Home保持原有的状态

10.1 让Home不要随意销毁掉

keep-alive

10.2 让home



