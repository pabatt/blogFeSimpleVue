<template>
    <header class="page-header">
        <nav class="menu">
            <router-link class="menu__link" to="/">Главная</router-link>
            <router-link class="menu__link" to="/about">О проекте</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss">
    @import '../css/variables';
    .page-header {
        position: sticky;
        top: 0;
        background-color: $color-white;
        z-index: 100;

        .menu {
            margin-bottom: 30px;
            display: flex;
            box-shadow: 0 0 15px rgba(0,0,0,.3);

            &__link {
                display: block;
                text-decoration: none;
                color: $color-black;
                padding: 20px 0;
                font-size: 20px;
                transition: .2s;
                margin-left: 20px;

                &:hover {
                    box-shadow: inset 0 -9px 0 rgba(0,0,0,.3);
                }

                &.router-link-exact-active {
                    text-decoration: underline;
                    color: $color-gray;
                }
            }
        }
    }
    
</style>