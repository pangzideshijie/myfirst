<template>
    <div class="tab-bar-item"  @click="tabClick">
        <div class="text"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
    export default {
        name:"TabBarItem",
        props: {
            path: String,
        },
        methods: {
            tabClick(){
                if(this.$route.path===this.path) return
                this.$router.replace(this.path)
            }
        }
    }
</script>
<style scoped>
.tab-bar-item{
    display:flex;
    text-align: center;
    height:49px;
    line-height: 49px;
    font-size:14px;
}
</style>