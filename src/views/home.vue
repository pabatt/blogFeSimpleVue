<template>
    <div class="page-wrapper">
        <tile v-for="tile in tiles" :key="tile.id" :tile="tile"></tile>
    </div>
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
</style>