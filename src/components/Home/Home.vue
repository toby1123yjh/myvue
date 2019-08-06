<template>
  <div class="div1">
    <el-container class="container">
      <el-header class="header" height="90px">
        <el-row>
          <el-col :span="8" class="row1">
            <div class="grid-content bg-purple">

            </div>
          </el-col>
          <el-col :span="8" class="row2"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8" class="row3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-header>
      <el-container >
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-container class="main">
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .div1{
    height: 100%;
  }
  .container{
    height:100%;
  }
  .header{
    background-color: cornflowerblue;
  }
  .aside{
    background-color: darkorange;
  }
  .main{
    background-color: darkgreen;
  }
  .row1{
    background-color: fuchsia;
  }
  .grid-content bg-purple{

  }
</style>
