<template>
  <div class="div1">
    <el-container class="container">
      <el-header class="header" height="90px">
        <el-row  :gutter="24" class="row">
          <el-col :span="4" class="row1">
            <p2>图标</p2>
          </el-col>
          <el-col :span="14" class="row2">
            <p4>中</p4>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="6" class="row3">
            <el-link type="primary" href="http://localhost:8090/">退出登录</el-link>
          </el-col>
        </el-row>
      </el-header>
      <el-container>

        <el-aside  class="aside">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   :collapse="isCollapse" :unique-opened="flag">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">导航二</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

        </el-aside>
        <el-container class="main">
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        flag:true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
  .div1{
    height: 100%;
  }
  .container{
    height:100%;
  }
  .header{
    background-color: slategrey;
  }
  .aside{
  }
  .main{
    background-color: darkgreen;
  }
  .row{
    height:100%;
  }
  .row1{
  }
  .row2{
  }
  .row3{
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
