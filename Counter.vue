<template>
    <div>
        Clicked: {{ count }} timesincrementAsync
        <button @click="increment">+</button>
        <div>{{name}}</div>
        <br>
        <br>
        <br>
        <br>
        <p>
            <router-view></router-view>
        </p>
    </div>
</template>

<script>
    // 这是 就是通过script  这个组建业务逻辑  必须有 GETTERS 这个 否则数据是过不来的
  //  import {increment} from './actions'
    import  {count} from './getters'
    import  {mapGetters, mapActions, mapState} from 'vuex'
    // 这样可以使用所有的方法action
    export default {
        name: 'counter',
        vuex: {
//            getters: {//这边肯定是一个函数 从组件中获取最新的state
//                count: count
//            },
          //  actions: {increment}
        },
        data(){
            return {
                name: 'yanchongduo'
            }
        },
        // 这个本来就是马上执行
        computed: {// 这个位置，哪个文件使用哪个getter，获取最新的状态
            ...mapGetters([
                'count',
            ]),
        },
        methods: {//请看注释 直接可以用action这个方法了
            ...mapActions([
                'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
            ]),
            // 方案3
//            increment(){// 这样函数名字是 add 也是可以
//                var data = {name: 'yanchongd'}
//                this.increment(data)
//            }
            // 方案2 这个是可以的 但是函数名字是 increment 不需要action
//            add(){// 名字不能相等 如果需要加东西的就 使用this
//                var data = {name: 'xxxx'}
//                this.$store.dispatch('increment', data)
//            }
        }
    }
</script>
