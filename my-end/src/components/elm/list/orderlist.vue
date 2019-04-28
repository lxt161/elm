<template>
    <div>
         <el-table :data="orderlist" highlight-current-row style="width: 1250px">
            <el-table-column type="index" width="100"></el-table-column>
            <el-table-column property="unique_id" label="订单ID" width="220">
            </el-table-column>
            <el-table-column property="total_amount" label="总价格" width="200">
            </el-table-column>
            <el-table-column property="status_bar.title" label="订单状态"> </el-table-column>
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
     orderlist: [],
     currentPage:1,
     count:0
    };
  },
  mounted(){
    this.axios
      .get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined")
      .then(res => {
          console.log(res.data)
        this.orderlist = res.data;
      });
       this.axios
      .get("https://elm.cangdu.org/bos/orders/count?restaurant_id=undefined")
      .then(res => {
          console.log(res.data)
          this.count=res.data.count
      });
  },
  methods: {
      handleSizeChange(val){
        this.axios
            .get('https://elm.cangdu.org/bos/orders?offset='+(val-1)*20+'&limit=20&restaurant_id=undefined')
                .then(res=>{
                    this.orderlist=res.data
            })
        },
      handleCurrentChange(val) {
        this.axios
            .get('https://elm.cangdu.org/bos/orders?offset='+(val-1)*20+'&limit=20&restaurant_id=undefined')
                .then(res=>{
                    this.orderlist=res.data
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
      margin-left: 10px;
  }
</style>

