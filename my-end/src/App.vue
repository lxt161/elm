<template>
  <div class="app">
        <!-- <div class="content"> -->
            <transition name="router-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        <!-- </div> -->
  </div>
</template>

<script>
export default {
//   components:{
// }

}
</script>

<style lang="scss">
body{
    margin: 0;
    padding: 0;
}
//  @import './style/common'; //在css样式中在引入css样式
//   .router-fade-enter-active,.router-fade-leave-active{
//     transition: opacity 0.3s;
//   }
//   .router-fade-enter,.router-fade-leave-active{
//     opacity:0;   }
// // /* 通用样式 */
//  *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
html,body,.app{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
//  .content{
//      width: 100%;
//     flex: 1;
//     overflow: auto;
// }
// .footer{
//     line-height: 1.5rem;
//     text-align: center;
//     border-top: 1px solid #ccc;
//  }
</style>
