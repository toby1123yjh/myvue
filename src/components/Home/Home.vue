<template>
  <div class="div1">
    <el-container class="outer_container">
      <el-header class="header">
        Header
      </el-header>
      <el-container class="inner_container">
        <el-aside width="200px" class="aside">
          <el-menu :default-openeds="['1']" unique-opened="open_flag" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-user-solid"></i>导航一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-goods"></i>导航四</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          Main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        open_flag: true
      };
    },
    methods: {
    }
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
  }
  .header {
    background-color: slategrey;
    text-align: center;
  }
  .aside {
  }
  .main {
    background-color: palevioletred;
  }
</style>
