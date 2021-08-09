module.exports = {
    // 在此处配置别名
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {//配置别名
                // '@': 'src' 脚手架已经配置好了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                // 'router': '@/router',
                 'view': '@/view'
            }
        }
    }
}