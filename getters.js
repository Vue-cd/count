/*export  const count=(state)=>{
    console.log('getters');
    console.log(state.count)
    console.log(typeof state.count)
    return state.count*2
}*/
// 计入没有getter是不是也是可以的 这个时候就是 内部的store了 不是全局的getters 了
export  const  count =(state)=>{
    // 这不是成功了吗 每次action最后的就是getter 这个
    console.log('---------------------')
    console.log(state.count)
    // 注意这个位置是 不使用...mapGetters 的情况下
   // var data=state.count.count*2//count 第一个count是我在modules定义的 第二个是定义的这个mutation里面的数据
    // 这种情况是使用...mapGetters state就只变成这个
    var data=state.count*2
    console.log(data) // 这里是改变不了 reducer里面的state的 因为这个已经是外边的
    return data
}