<template>
    <div class="box">
        <h2>elm后台管理系统</h2>
        <div class="top">
           <input type="text" placeholder="用户名" v-model="inp">
           <input type="text" placeholder="密码" v-model="pass">
            <button @click="clk()">登陆</button>
           <p>温馨提示</p>
           <p>未登录过的新用户，自动注册</p>
           <p>注册过的用户可凭账号密码登录</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inp:"",
            pass:""
        }
    },
    methods:{
            clk(){
                let data={user_name:this.inp,password:this.pass}
                this.axios.post("https://elm.cangdu.org/admin/login",data).then(res=>{
                console.log(res.data)
                if(res.data.status==1){
                    this.$router.push("/home")
                }
            })
        }  
    }
}
</script>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 100%;
        height: 100%;
         background: #324057;
    }
      h2{    
            text-align: center;
            color: white;
            margin-top: 200px;
        }
    .top{
        width: 400px;
        height:280px;
        border: 1px solid #ccc;
        margin: 0 auto;
        margin-top: 10px;
        border-radius: 10px;
        background: white;
    }
    input:nth-of-type(1){
        margin-top: 40px;
    }
   input{
       width: 350px;
       height: 35px;
       margin-top: 20px;
      margin-left: 25px;
      border-radius: 10px;
      border: none;
      border: 1px solid #ccc;
      text-indent: 10px;
      outline: none;
   }
   button{
        width: 350px;
        height: 35px;
        margin-top: 10px;
        margin-left: 25px;
        background: #20A0FF;
        color: white;
        border: none;
        border-radius: 10px;
        outline: none;
   }
   p:nth-of-type(1){
       margin-top: 30px;
   }
   p{
       font-size: 12px;
       color: #FF0000;
      text-align: center;
      margin-top: 5px;
   }
</style>

