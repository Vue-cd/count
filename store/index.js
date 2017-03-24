import Vue from 'vue'
import * as actions from '../actions'
import * as getters from '../getters'
import {INCREMENT} from '../types'
import Vuex from '../../../src'
Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
// 这个是初始化状态
const state = {
    count: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes. 这是reducer 纯函数 获取最新的state 然后返回到页面
/*
 * 数据驱动就是 只要这个数据一旦发生改变，页面马上就会变化
 * 断言库是我们来行为驱动 chain 这个也有再用 我的写写
 * */
const mutations = {
    [INCREMENT] (state) {
        state.count++
    },
    DECREMENT (state) {
        state.count--
    }
}

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
/*
 * import {createStore}  from 'redux'
 * const store =createStore(reducer);
 *react-redux provdier connect mapStateToProps mapActionToProps  完蛋了忘了哈哈
 * 马上就可以学了 createStore functionreducer（state）
 * */
// Vuex vuex是一个类 那koa2也是一个class Store 也是一个类

export default {
    actions,//因为我这位置做了 action了所以会mapAction 才好用
    getters,// 我必须放开才好用 这个位置 mapGetters
    state,
    mutations
}
/*export default new Vuex.Store({
 state,
 mutations
 })*/
