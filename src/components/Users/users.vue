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
        <el-col>
          <el-input
            @clear="loadUserList()"
            clearable
            placeholder="请输入内容"
            v-model="query"
            class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="searchUser()"></el-button>
          </el-input>
          <el-button type=" primary" @click="addUserDia()">添加用户</el-button>
        </el-col>
      </el-row>

      <!--表格-->
      <el-table
        :data="userList"
        height="280px"
        :fit=false
        :stripe=true>
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
          prop="roleNames"
          label="角色名"
          width="100">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="userList">
            <el-switch
              @change="switch_change(userList.row)"
              v-model="userList.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="电话"
          width="100">
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
      <!--分页-->
      <el-pagination class="block"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="pagenum"
                     :page-sizes="[5, 10, 20]"
                     :page-size="pagesize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>

      <!--添加用户对话框-->
      <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
        <el-form :model="form">
          <el-form-item label="用户名" label-width="100px">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="100px">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </div>
      </el-dialog>

    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //列表数据
        userList: [],
        //分页数据
        total: 0,
        pagenum: 1,  //当前页码
        pagesize: 5, //每页大小
        //查询数据
        query: '',
        total: 0,
        //添加对话框的属性
        formLabelWidth: '100px',
        dialogFormVisibleAdd: false,
        //添加用户表单数据
        form: {
          username: "",
          password: "",
          email: "",
          mobile: "",
        },
      }
    },
    //生命周期函数
    created() {
      this.getUserList()
    },
    methods: {
      //获取用户列表
      async getUserList() {
        //const AUTH_TOKEN = localStorage.getItem('token')
        //this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
        //const res =await this.$http.get('users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}')
        // const res = await this.$http.get('/sys/user/getPage?page=${this.pagenum}&size=${this.pagesize}')
        const res = await this.$http.get('/sys/user/getPage?', {params: {page: this.pagenum - 1, size: this.pagesize}})
        const {code, data: {content, totalElements}, msg,} = res.data
        if (code === 200) {
          this.userList = content
          this.total = totalElements
          this.$message.success(msg)
        } else {
          this.$message.error(msg)
        }
      },
      //分页方法
      handleSizeChange(val) {
        this.pagesize = val
        this.pagenum = 1
        this.getUserList()
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.pagenum = val
        this.getUserList()
      },
      //开关发生
      switch_change(val) {

      },
      //添加用户
      async addUser(){
        const res=this.$http.post('/add',this.form)
        console.log(res)
      },
      //搜索用户，query是双向绑定的，在getUserList()方法中已经写了
      async searchUser() {
        // const res=await this.$http.get('/sys/user/get/djy')
        const res=await this.$http.get('/sys/user/get/${this.query}')
        console.log(res.data)
        const{
          code,
          data,
          msg
        }=res.data
      },
      //重新加载列表数据
      loadUserList() {
        this.getUserList()
      },
      //显示添加对象对话框
      addUserDia() {
        this.dialogFormVisibleAdd = true
      },
      //删除用户
      showDeleUserMsgBox(userId) {
        this.$confirm('删除用户？', '提示', {
          confiremButton: '确定',
          cancelButtonText: '确定',
          type: 'warning'
        }).then(async () => {
          const res = await this.$http.delete('users/${userId}')
          console.log(reg)
          if (res.data.meta.status === 200) {
            this.getUserList()
            this.$message({
              type: 'success',
              message: res.data.meta.msg

            })
          }
        }).catch(() => {
          // this.$http.
        })
      }
    }
  }
</script>

<style>
  .box-card {
    height: 100%;
  }

  .input-with-select {
    width: 400px;
  }

  .search-row {
    margin-top: 40px;
  }

  .block {
    text-align: center;
    margin-top: 50px;
  }
</style>
