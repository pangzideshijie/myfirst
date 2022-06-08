<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "TabBar",
        
    }
</script>
<style scope>
    .tab-bar {
        background: red;
        display:flex;
        justify-content: space-around;
        height: 49px;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>