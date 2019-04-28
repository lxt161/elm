<template>
    <div class="main">
        <p class="p">数据统计</p>
        <div class="body-1">
             <div class="body1-1">
                当日数据：
             </div>
             <div class="body1-1 body1-2">
                <span>新增用户</span>
            </div>
             <div class="body1-1 body1-2">
                <span>新增订单</span>
            </div>
             <div class="body1-1 body1-2">
                <span>新增管理员</span>
            </div>
        </div>
         <div class="body-1">
             <div class="body1-1-1">
                总数据：
             </div>
             <div class="body1-1 body1-2">
                <span>注册用户</span>
            </div>
             <div class="body1-1 body1-2">
                <span>订单</span>
            </div>
             <div class="body1-1 body1-2">
                <span>管理员</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
         width: 100%;
        .p{
            font-size: 25px;
            text-align: center;
        }
    .body-1{
        width: 100%;
        font-size: 30px;
        padding-top: 20px;
        line-height: 30px;
        .body1-1{
            margin-left: 10px;
            display: inline-block;
            width: 250px;
            height: 35px;
            line-height: 35px;
            background-color: #ff9800;
            color: white;
            text-align: center;
            border-radius: 5px;
            font-size: 19px;
             span:nth-of-type(2){
                 font-size: 16px;
            }
        }
        .body1-1-1{
              margin-left: 10px;
            display: inline-block;
            width: 250px;
            height: 35px;
            line-height: 35px;
            background-color: #20A0FF;
            color: white;
            text-align: center;
            border-radius: 5px;
            font-size: 19px;
        }
            .body1-2{
                background-color: #e5e9f2;
                color: black;
            }
        }
    }
</style>
