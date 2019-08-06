<template>
  <div class="login-wrap" v-on:keyup.enter="func_enter()">
    <el-form label-position="left"
             :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h3>用户登录</h3>
      <el-form-item label="用户名" prop="username" >
        <el-input type="text" v-model="ruleForm.username" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age" >
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button class="login-btn1" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button class="login-btn2" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Home from "../Home/Home";

  export default {
    name:'Login',
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.password !== '') {
            this.$refs.ruleForm.validateField('password');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        key_num:0,
        ruleForm: {
          username: '',
          password: '',
          age: ''
        },
        rules: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      func_enter(){
        this.submitForm("ruleForm");
      },
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            //发送登录请求给服务器服务器验证请求并返回结果
            this.$message.success("成功登录")
            this.$router.push({name:'Home'})
            console.log('login succeed')
          } else {
            this.$message.error("验证失败")
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      }
    }
  };
</script>

<style>
  .login-wrap{
    height:100%;
    background-color: #2c3e50;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .login-wrap .demo-ruleForm{
    width:400px;
    background-color: aliceblue;
    border-radius: 5px;
    padding:30px;
  }

  .login-wrap .login-btn1{
    width: 45%;
    ;
  }
  .login-wrap .login-btn2{
    width: 45%;
  }

</style>
