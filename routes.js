import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {path: '/home', component: require('./App.vue'),
            children:[
                {path: 'counter',  component:require('./Counter.vue')},
                {path: 'con', component: require('./1.vue')}
            ]
        },

    ]
});
export default router;