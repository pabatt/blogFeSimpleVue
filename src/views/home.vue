<template>
    <div class="page-wrapper" v-if="tiles">
        <tile  v-for="(tile, index) in tiles" :key="index" :tile="tile" :index="index"></tile>
    </div>
    <div class="response_error" v-else>сервер не отвечает, пожалуйста попробуйте позже =(</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import tile from '../components/tile.vue'
    export default {
        components: {
            tile : tile,
        },
        computed: {
            ...mapGetters({
                tiles : 'getTiles'
            }),
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
    .page-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .response_error {
            text-align: center;
                max-width: 1000px;
                margin: auto;
        }
</style>