<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{label1}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{label2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name:'my-bread',


    props:['label1','label2']
  };
</script>

<style>

</style>
