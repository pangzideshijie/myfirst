<template>
    <tab-bar>
        <tab-bar-item path="/homea">
            <div slot="item-text">我是A页面</div>
        </tab-bar-item>
        <tab-bar-item path="/homeb">
            <div slot="item-text">我是B页面</div>
        </tab-bar-item>
        <tab-bar-item path="/homec">
            <div slot="item-text">我是C页面</div>
        </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '../tabBar/TabBar.vue';
import TabBarItem from '../tabBar/TabBarItem.vue'
    export default {
        name:'MainTabBar',
        components: {
            TabBar,
            TabBarItem,
        }
    }
</script>

<style>

</style>