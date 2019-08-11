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
            clearable placeholder="请输入内容" @click="searchUser()" v-model="query" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-button type=" primary" @click="addUserDia()">添加用户</el-button>
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
      <el-pagination class="block"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>

      <!--添加用户对话框-->
      <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
        <el-form :model="form">
          <el-form-item label="用户名" label-width="100px">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="100px">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisibleAdd = false">确 定</el-button>
        </div>
      </el-dialog>

    </el-card>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                //查询数据
                query: '',
                //分页数据
                pagenum: 1,  //当前页
                pagesize: 2,
                total: 6,
                //添加对话框的属性
                formLabelWidth:'100px',
                dialogFormVisibleAdd:false,
                //添加用户表单数据
                form:{
                    username:"",
                    password:"",
                    email:"",
                    mobile:"",
                },
                //列表数据
                tableData: [{
                    date: '2016-05-02',
                    name: 'toby',
                    address: '荔湾区站前路22'
                }, {
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
        methods: {

            async getUserList() {
                const AUTH_TOKEN = localStorage.getItem('token')
                this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
                //const res =await this.$http.get('users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}')
            },
            //分页方法
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            //搜索用户，query是双向绑定的，在getUserList()方法中已经写了
            searchUser() {
                this.getUserList()
            },
            //重新加载列表数据
            loadUserList() {
                this.getUserList()
            },
            //显示添加对象对话框
            addUserDia(){
                this.dialogFormVisibleAdd=true
            },
            //删除用户
            showDeleUserMsgBox(userId){
                this.$confirm('删除用户？','提示',{
                    confiremButton:'确定',
                    cancelButtonText:'确定',
                    type:'warning'
                }).then(async ()=>{
                    const res=await this.$http.delete('users/${userId}')
                    console.log(reg)
                    if(res.data.meta.status===200){
                        this.getUserList()
                        this.$message({
                            type:'success',
                            message:res.data.meta.msg

                        })
                    }
                }).catch(()=>{
                    this.$http.
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
