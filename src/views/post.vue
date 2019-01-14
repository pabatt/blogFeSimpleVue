<template>
    <div class="post">
        <div class="post__wrapper" v-if="postInfo">
            <p class="post__info">Статья №{{postInfo.id}}</p>
            <h1 class="post__title">{{postInfo.title}}</h1>
            <p class="post__text">{{postInfo.text}}</p>
        </div>
        <div class="post__wrapper" v-else>
            <h1 class="post__title">Статья не найдена</h1>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters({
                tileInfo : 'getTileInfo'
            }),
            postInfo(){
                if (this.tileInfo(this.$route.params.id)) {
                    return this.tileInfo(this.$route.params.id)
                }
            }
        },
        methods: {
            ...mapActions(['loadTiles'])
        },
        created() {
            this.loadTiles()
        }
    }
</script>

<style lang="scss">
    @import '../css/variables';
    .post {
        max-width: 1600px;
        margin: auto;

        &__wrapper {
        padding: 0 20px;
        margin: 0 40px;
        border-left: 1px solid $color-black;

            @media (max-width: 479px) {
                margin: 0;
                border-left: none;
            }
        }

        &__info {
            font-size: 12px;
            color: $color-gray;
            opacity: .5;
        }

        &__title {
            font-size: 46px;

            @media (max-width: 479px) {
                font-size: 36px;
            }
        }

        &__text {
            font-size: 20px;
            line-height: 1.5;
        }
    }
</style>