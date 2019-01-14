import Vue from 'vue'
import VueRouer from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import post from '../views/post.vue'
import notFound from '../views/notFound.vue'

Vue.use(VueRouer)

export default new VueRouer ({
    mode: 'history',
    routes: [
        { 
            path: '/',
            name: 'home',
            component: home 
        },
        { 
            path: '/about',
            name: 'about',
            component: about 
        },
        { 
            path: '/post:id',
            name: 'post',
            component: post 
        },
        { 
            path: '*',
            component: notFound
        }, 
    ]
})