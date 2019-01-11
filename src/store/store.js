import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tiles: []
    }, 
    getters: {
        getTiles: state => state.tiles,
        getTileInfo: state => id => state.tiles[id-1]

    },
    actions: {
        loadTiles(context, tiles) {
            axios
                .get('/api/tiles')
                .then(response => {
                    if (response.data.success) {
                        context.commit('loadTiles', response.data.tiles)
                    } else {
                        console.log ('response error')
                    }
                })
                .catch(er =>{
                    console.log(er)
                })
        }
    },
    mutations: {
        loadTiles(state, tiles) {
            state.tiles = tiles
        }
    }
})