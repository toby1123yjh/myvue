<template>
  <div class="div1">

    <el-container class="outer_container">
      <el-header class="header">
        Header
      </el-header>

      <el-container class="inner_container">

        <el-aside width="200px" class="aside">
          <el-menu :default-openeds="['1']" :unique-opened=true background-color="#545c64" active-text-color="#ffd04b"
                   :router=true text-color="#fff" >
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-user-solid"></i>系统管理</template>
              <el-menu-item index="/user">用户管理</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-goods"></i>导航四</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {}
    };
</script>

<style>
  .div1 {
    height: 100%;
  }
  .outer_container {
    height: 100%;
  }
  .inner_container {
    height: 100%;
    background-color: darkgrey;
  }
  .header {
    background-color: slategrey;
    text-align: center;
  }
  .aside {
    background-color: #545c64;
  }
  .main {
  }
</style>
