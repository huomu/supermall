<template>
    
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            isLoad: false
        }
    },
    methods: {
        imageLoad(){
            if(!this.isLoad){
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
        }
    }
}
</script>

<style scoped>

</style>