import Vue from 'vue'
import Vuex from 'vuex'

import count from './store/index.js'//这个位置不就是reducer那个定法
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        count,//这是state里面的名字和 reducer差不多的
    }
})
// 使用的场景是不一样的 就是大部分都会用到的就通过mapGetters这样就可以了
/*
export default new Vuex.Store({
    actions, // 这种是阶
    getters,
    modules: {
        count,
    }
})*/
/*
* 总结:场景的使用，一个getter，可以被很多组件使用时候，我们就可以使用上面的方法操作，这样在组件内部就可以通过mapGetters这样操作就可以了，在computed里面， 假如不适用通用的话，initialState，mutations
* actions就可以通过mapActions这个方法，
* */