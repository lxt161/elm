<template>
  <div class="box">
    <p>用户名:</p>
   <p><input type="text" v-model="name" placeholder="输入用户名"></p>
    您的用户名为：{{name}}
    <p>年龄：{{great}}</p>
    <p><input type="text" v-model="great" placeholder="输入年龄"></p>
    <p>
      你喜欢爸爸还是妈妈：<input type="radio" value="father" v-model="like">爸爸
      <input type="radio" value="mather" v-model="like">妈妈 已选：{{like}}
    </p>
    <p>你喜欢的动物有：<input type="checkbox" value="猴子" v-model="live">猴子<input type="checkbox" value="大象" v-model="live">大象
       <input type="checkbox" value="小狗" v-model="live">小狗  已选：{{live}}
    </p>
    <p>
      你喜欢的什么类型的异性：(多选一) 
      <select name="" id="" v-model="link" >
        <option value="成熟">成熟</option>
        <option value="高的">高的</option>
        <option  value="瘦的">瘦的</option>
      </select>
      已选：{{link}}
    </p>
    <p>
      简单介绍一下你自己(20个文字内)<textarea rows="3" cols="20" v-model="jieshao" maxlength="20"></textarea><span class="aa">你还可以输入{{size}}个字</span>
    </p>
    <button @click="clk" class="tj">添加</button><button class="cz" @click="add">重置</button>
 
    <div class="bottom">
       <h3>用户信息表</h3>
        <table border="1" width="600px" cellspacing="0" cellpadding="20"  >
            <tr>
              <th>序号</th>
              <th>名字</th>
              <th>年龄</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
              <td>{{index+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.great}}</td>
              <td><button @click="del(index)" class="del">删除</button></td>
            </tr>
        </table>
    </div>
 </div>
</template>

<script>
export default {
    data(){
      return{
        name:"",
        great:"",
        like:"",
        live:[],
        link:"",
        list:[],
        jieshao:"",
        number:20
      }
    },
   methods: {
     clk(){
       let obj={}
        obj.name=this.name
        obj.great=this.great
        this.list.push(obj)
     },
    del(n){
      this.list.splice(n,1)
    },
   add() {
      this.name = "";
      this.great = "";
      this.link = "";
      this.like = "";
    }  
  },
   computed: {
    size() {
      return this.number - this.jieshao.length;
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
box{
  width: 100%;
}
p{
  font-size: 1rem;
}
.tj{
  background: #4787C0;
  color: white;
  border: none;
  padding: 3px;
  border-radius: 0.5rem;
}
.cz{
  background: red;
  color: white;
   border: none;
  padding: 3px;
  border-radius: 0.5rem;
}
th{
  color: brown;
}
h3{
  margin-left: 250px;
}
.del{
  background: #4787C0;
  color: white;
  border: none;
  padding: 0.3rem;
  border-radius: 0.5rem;
}
.aa{
  font-size:0.8rem;
}
</style>
