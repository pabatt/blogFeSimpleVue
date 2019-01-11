<template>
    <div class="app-layout">
        <page-header></page-header>
        <router-view></router-view>
    </div>
</template>
<script>
    import pageHeader from './components/pageHeader.vue'
    export default {
        components: {pageHeader}
    }
</script>

<style lang="scss">
@import '/css/fonts';
html,
body {
    padding: 0;
    margin: 0;
    font-family: $arial;
}

.app-layout {
    position: relative;
}
</style>