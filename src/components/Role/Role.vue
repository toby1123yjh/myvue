<template>
  <el-card class="box-card">
    <my-bread label1="权限管理" label2="角色管理"></my-bread>
    <el-row class="search-row">
      <el-col>
        <el-input
          placeholder="请输入内容"
          v-model="query"
          class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加角色</el-button>
      </el-col>
    </el-row>

    <!--表格-->
    <el-table
      :data="roleList"
      height="280px"
      :fit=false
      :stripe=true>
      <el-table-column
        type="expand"
        width="50">
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="角色"
        width="100">
      </el-table-column>
      <el-table-column
        prop="createBy"
        label="创建人"
        width="100">
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="180">
        <template slot-scope="userList">
          {{userList.row.createTime|datefmt }}
        </template>
      </el-table-column>
      <el-table-column
        prop="lastUpdateBy"
        label="最近更新人"
        width="100">
      </el-table-column>
      <el-table-column
        label="更新时间"
        width="180">
        <template slot-scope="userList">
          {{userList.row.lastUpdateTime|datefmt}}
        </template>
      </el-table-column>
      <el-table-column
        prop="option"
        label="操作"
        width="150">
        <el-button-group>
          <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
          <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        query: '',
        roleList: []
      }
    },
    create() {
      this.getRoleList
    },
    methods: {
      async getRoleList() {
        const res = await this.$http.get('/sys/role/getPage')
        const {
          code,
          data: {
            content,
          },
          msg
        } = res.data
        this.roleList=content
      }

    }
  };
</script>

<style>
  .input-with-select {
    width: 400px;
  }

  .search-row {
    margin-top: 20px;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
