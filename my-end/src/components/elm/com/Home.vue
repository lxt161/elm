<template>
    <div class="dd">
      <el-container>
        <el-aside width="250px"><Aside></Aside></el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
import Aside from './Aside'
export default {
  components:{
     Aside
  },
  data() {
    return {

    };
  },
  methods:{
  }
};
</script>


<style lang="scss" scoped>
.dd{
  width: 100%;
  height: 100%;
   box-sizing: border-box;
  display: flex;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color:#324057;
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    /* line-height: 160px; */
  }
</style>


