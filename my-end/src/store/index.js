import Vue  from 'vue'
import vuex  from 'vuex'

Vue.use(vuex)
import VuePersist from 'vuex-persist'
const vuexLocal=new VuePersist({
    storage:window.localStorage
})

export default new vuex.Store({
    plugins:[vuexLocal.plugin],//使用插件
    state:{ //存储变量
      
      
    },
    //mutations声明改变数据的方法，必须是同步操作 
    mutations:{
           
        async(state){
            //最终改变数据
            console.log('进入 mutations')
        }
    },   
    // actions:{//和mutations类似 里面可以含有异步操作，最后还是要把数据的改变提交给mutations
    //     myAsync(state){
    //         //执行异步操作
    //         console.log('进入 actions')
    //         state.commit('async')
    //     }
    // }
})