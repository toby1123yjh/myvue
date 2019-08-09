<template>
  <div>
    <el-button type="primary" @click="handleclick()">点击发送</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username:'yjh'
      }
    },
    methods: {
      async handleclick() {
        const res=await this.$http.get('http://localhost:8080/sys/user/get/'+this.username)
        const {
          code,
          msg,
          data:{
            createBy,
            createTime,
            email,
            mobile
          }
        }=res.data
        if(code===200){

        }
      }
    }

  };
</script>

<style>

</style>
