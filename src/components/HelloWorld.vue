<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <el-form ref="form" :model="form">
    <el-form-item label="用户名" label-width="600px">
      <el-col :span="30">
        <el-input v-model="form.name" placeholder="请输入用户名" style="width:300px"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码" prop="pass" label-width="600px">
      <el-col :span="30">
        <el-input type="password" v-model="form.pass" autocomplete="off" style="width:300px"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">登录</el-button>
      <el-button>注册</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
        form: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit() {
      if (!this.form.name){
        this.$message.error("请输入用户名！");
        return;
      } else if(!this.form.pass){
        this.$message.error("请输入密码！");
        return;
      }else {
        this.$router.push({path: '/sucess'});
        }

      }
    }
  };
</script>
