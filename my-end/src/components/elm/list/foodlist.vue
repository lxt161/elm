<template>
 <div>
    <el-table :data="foodlist" style="width: 100%">
        <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
                <span>{{ props.row.name}}</span>
            </el-form-item>
            <el-form-item label="食品ID">
                <span>{{ props.row.item_id}}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
                <span></span>
            </el-form-item>
            <el-form-item label="食品评分">
                <span>{{props.row.rating}}</span>
            </el-form-item>
            <el-form-item label="月销量">
                <span>{{ props.row.month_sales}}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
                <span></span>
            </el-form-item>
            <el-form-item label="餐馆ID">
                <span>{{ props.row.restaurant_id}}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
                <span></span>
            </el-form-item>
            <el-form-item label="食品分类">
                <span></span>
            </el-form-item>
            </el-form>
            </template>
            </el-table-column>
                <el-table-column label="店铺名称" prop="name"> </el-table-column>
                <el-table-column label="店铺介绍" prop=""></el-table-column>
                <el-table-column  label="评分" prop="rating"> </el-table-column>
                <el-table-column label="操作" prop="desc">
                <div slot-scope="scope">
                    <el-button size="mini" >编辑</el-button>
                    <el-button size="mini" type="danger" >删除</el-button>
                </div>
            </el-table-column>
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
     foodlist: [],
     currentPage:1,//默认显示第一页
     count:0//页数
    };
  },
  mounted(){
    this.axios
      .get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined")
      .then(res => {
          console.log(res.data)
        this.foodlist = res.data;
      });
      this.axios
        .get("https://elm.cangdu.org/shopping/v2/foods/count?restaurant_id=undefined")
         .then((res)=>{
         this.count=res.data.count
    })

  },
  methods: {
    handleSizeChange(val) {//每页几条
        this.axios
        .get('https://elm.cangdu.org/shopping/v2/foods?offset='+(val-1)*20+'&limit=20&restaurant_id=undefined')
        .then(res=>{
            this.foodlist=res.data
        })
    },
    handleCurrentChange(val) {//当前页
        this.axios
        .get('https://elm.cangdu.org/shopping/v2/foods?offset='+(val-1)*20+'&limit=20&restaurant_id=undefined')
        .then(res=>{
            this.foodlist=res.data
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
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .page{
      margin-top: 10px;
      margin-left: 10px;
  }
</style>

