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
        getTileInfo: state => id => {
            if (id > state.tiles.length-1) {
                return false
            }
            return state.tiles[id]
        }

    },
    actions: {
        loadTiles(context, tiles) {
            axios
                .get('/api/tiles')
                .then(response => {
                    if (response.data.success) {
                        context.commit('loadTiles', response.data.tiles)
                    } else {
                        context.commit('loadTiles', false);
                    }
                })
                .catch(er =>{
                    context.commit('loadTiles', false);
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