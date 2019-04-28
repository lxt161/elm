<template>
    <div>
        <el-table :data="userlist" highlight-current-row style="width: 1250px">
            <el-table-column type="index" width="100"> </el-table-column>
            <el-table-column property="registe_time" label="日期" width="220">
            </el-table-column>
            <el-table-column property="username" label="姓名" width="200">
            </el-table-column>
            <el-table-column property="city" label="地址"> </el-table-column>
         </el-table>
        <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage":page-size="20" background  layout="total, prev, pager, next":total=count>
            </el-pagination>
        </div>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      userlist: [],
      currentPage:1,//默认显示第一页
      count:0//页数
    };
  },
  mounted() {
    this.axios
      .get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20")
      .then(res => {
        this.userlist = res.data;
      });
    
      this.axios
        .get("https://elm.cangdu.org/v1/users/count")
            .then(res => {
                this.count=res.data.count
      });
  },
  methods:{
    handleSizeChange(val) {
        this.axios
        .get('https://elm.cangdu.org/v1/users/list?offset='+(val-1)*20+'&limit=20')
        .then(res=>{
            this.userlist=res.data
        })
    },
    handleCurrentChange(val) {
        this.axios
        .get('https://elm.cangdu.org/v1/users/list?offset='+(val-1)*20+'&limit=20')
        .then(res=>{
            this.userlist=res.data
        })
    },
  }
};
</script>
<style lang="scss" scoped>
.el-table {
  margin-left: 20px;
  border: 1px solid #ddd;
}
.page{
    margin-top: 10px;
    margin-left:10px; 
}
</style>
