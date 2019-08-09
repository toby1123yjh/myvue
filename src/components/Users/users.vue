<template>
  <div>
    <el-card class="box-card">
      <!--面包屑-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!--搜索-->
      <el-row class="search-row">
        <el-col >
            <el-input placeholder="请输入内容" v-model="query" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type=" primary">添加用户</el-button>
        </el-col>
      </el-row>

      <!--表格-->
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <!--分页-->
    </el-card>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                query:'',
                tableData: [{
                    date: '2016-05-02',
                    name: 'toby',
                    address: '荔湾区站前路22'
                }
                ]
            }
        },
        created() {
            this.getUserList()
        },
        methods :{
            async getUserList() {
            //    this.&http
                const res =await this.$http.get('users?query=')
            }
        }
    }
</script>

<style>
  .box-card {
    height: 100%;
  }
  .input-with-select{
    width: 400px;
  }
  .search-row{
    margin-top:40px;
  }
</style>
