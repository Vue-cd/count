import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import Counter from './Counter.vue'
import Con from './1.vue'
//import router from './routes'
Vue.use(VueRouter)
//
/*const router = new VueRouter({
 routes: [
 {path: '/home', component: require('./App.vue')
 children:[
 {path: 'counter',  component:require('./Counter.vue')},
 {path: 'con', component: require('./1.vue')}
 ]
 },

 ]
 });*/
// 这个位置不能有 app 而 app就是我们写路由的地方
const router = new VueRouter({
    mode:'history',
    routes: [
        //{path:'/',component:require('./home.vue')},
        {path: '/home', component: require('./home.vue')},
        {path: '/count', component: Counter,
        children:[
            {path:'con',component:Con}
        ]
        }
    ]
})

new Vue({
    el: '#app',
    router,
    store,//将 store 从根组件『注入』到每一个子组件中 没有一个 connect 这个
    render: h => h(App)
});
