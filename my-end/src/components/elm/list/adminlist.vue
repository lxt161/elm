<template>
    <div>
        <el-table :data="adminlist" highlight-current-row style="width: 1250px">
            <el-table-column type="index" width="100"> </el-table-column>
            <el-table-column property="user_name" label="姓名" width="220">
            </el-table-column>
            <el-table-column property="create_time" label="注册日期" width="200">
            </el-table-column>
            <el-table-column property="city" label="地址"> </el-table-column>
            <el-table-column property="admin" label="权限"> </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage":page-size="20" background  layout="total, prev, pager, next":total=count>
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            adminlist:[],
            currentPage:1,
            count:0
        }
    },
    mounted(){
        this.axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then(res=>{
            console.log(res.data.data)
            this.adminlist=res.data.data
        })
         this.axios.get("https://elm.cangdu.org/admin/count").then(res=>{
            console.log(res.data)
            this.count=res.data.count
        })
    },
    methods:{
         handleSizeChange(val){
             this.axios
             .get('https://elm.cangdu.org/admin/all?offset='+(val-1)*20+'&limit=20')
                .then(res=>{
                    this.adminlist=res.data.data
              })
         },
           handleCurrentChange(val) {//当前页
             this.axios
                .get('https://elm.cangdu.org/admin/all?offset='+(val-1)*20+'&limit=20')
                 .then(res=>{
                     this.adminlist=res.data.data
             })
         },
    }
}
</script>
<style lang="scss" scoped>
.el-table {
  margin-left: 20px;
  border: 1px solid #ddd;
}
.page{
    margin-top: 10px;
    margin-left: 10px;
}
</style>
