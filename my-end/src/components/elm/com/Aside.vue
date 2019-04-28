<template>
    <div>
         <el-menu class="left">
                <el-menu-item index="0-1" @click="clk()"><i class="el-icon-menu"></i><span>首页</span></el-menu-item>
                <el-submenu index="1">
                    <template class="fl" slot="title">
                        <i class="el-icon-document"></i><span>数据管理</span></template>
                        <el-menu-item class="fg" index="1-1" @click="yh()"><span>用户列表</span></el-menu-item>
                        <el-menu-item class="fg" index="1-2" @click="sj()"><span>商家列表</span></el-menu-item>
                        <el-menu-item class="fg" index="1-3" @click="sp()"><span>食品列表</span></el-menu-item>
                        <el-menu-item class="fg" index="1-4" @click="dd()"><span>订单列表</span></el-menu-item>
                        <el-menu-item class="fg" index="1-5" @click="gl()"><span>管理员列表</span></el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template class="fl" slot="title">
                        <i class="el-icon-plus"></i><span>添加数据</span></template>
                        <el-menu-item class="fg" index="2-1" @click="sp()"><span>添加商铺</span></el-menu-item>
                        <el-menu-item class="fg" index="2-2"><span>添加商品</span></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template class="fl" slot="title">
                        <i class="el-icon-star-on"></i><span>图标</span></template>
                        <el-menu-item class="fg" index="3-1"><span>用户分布</span></el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template class="fl" slot="title">
                        <i class="el-icon-document "></i><span>编辑</span></template>
                        <el-menu-item class="fg" index="4-1"><span>文本编辑</span></el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template class="fl" slot="title">
                        <i class="el-icon-plus "></i><span>设置</span></template>
                        <el-menu-item class="fg" index="5-1"><span>管理员设置</span></el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template class="fl" slot="title">
                        <i class="el-icon-star-on "></i><span>说明</span></template>
                        <el-menu-item class="fg" index="6-1"><span>说明</span></el-menu-item>
                </el-submenu>
            </el-menu>
    </div>
</template>

<script>
export default {
    methods:{
        clk(){
            this.$router.push({name:'Home'})
        },
         yh(){
            this.$router.push({name:'userlist'})
        },
        sj(){
            this.$router.push({name:'shoplist'})
        },
        sp(){
            this.$router.push({name:'foodlist'})
        },
        dd(){
            this.$router.push({name:'orderlist'})
        },
        gl(){
            this.$router.push({name:'adminlist'})
        },
        sp(){
            this.$router.push({name:'addshop'})
        }
    }
}
</script>

<style lang="scss" scoped>
 .el-header {
  background-color:#EFF2F7;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.left{
    width: 250px;
    background:#324057;
} 
.fl{
    color: #BFCBD9;
}
.fg{
    color: #BFCBD9;
    background: #1F2D3D;
}
span{
  color: white;
}
.aa{
  color: black;
}
</style>
