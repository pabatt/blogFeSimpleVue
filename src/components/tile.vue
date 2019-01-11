<template>
    <router-link :to="{ name: 'post', params: {id : tile.id}}" :class="tile.type" class="tile">
        <div class="tile__background" :style="{'background-image': 'url(https://picsum.photos/1200/320/?image=' + randomNumber}"></div>
        <h3 class="tile__title">{{tile.title}}</h3>
        <p class="tile__description">{{tile.description}}</p>
    </router-link>
</template>

<script>
    export default {
        props: ['tile'],
        data() {
            return {
            }
        },
        computed: {
            randomNumber : function(){
                return Math.floor(Math.random()*20);
            }
        }
    }
</script>

<style lang="scss">
    @import '../css/variables';
    .tile{
        position: relative;
        height: 300px;
        margin: 20px;
        text-decoration: none;
        color: $color-white;
        text-shadow: $color-black 1px 1px 0, $color-black -1px -1px 0, 
                     $color-black -1px 1px 0, $color-black 1px -1px 0;
        overflow: hidden;
        transition: .5s;

        &__background {
            position: absolute;
            height: 100%;
            width: 100%; 
            background-position: center;
            background-size: cover;
            z-index: -1;
            transition: .5s;
        }

        &:hover {
            background-color: rgba(0,0,0,.5);
            .tile__background{
                transform: scale(1.2);
            }
        }

        &.normal {
            width: calc(33% - 40px);

            @media (max-width: 1024px) {
                width: calc(50% - 40px);
            }

            @media (max-width: 479px) {
                width: calc(100% - 40px);
            }
        }

        &.double {
           width: calc(66% - 40px);

           @media (max-width: 1024px) {
                width: calc(100% - 40px);
            }
        }        
        
        &__title {
            font-size: 36px;
            margin: 10px 0;
            padding: 0 20px;

            @media (max-width: 1024px) {
                font-size: 30px;
            }
        }
        &__description {
            font-size: 24px;
            padding: 0 20px;

            @media (max-width: 1024px) {
               font-size: 20px;
            }
        }
    }
</style>