<template>
  <div>
    <el-button type="primary" @click="handleclick()">点击发送</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username:'djy'
      }
    },
    methods: {
      async handleclick() {
        const res=await this.$http.get('http://localhost:8080/sys/user/get/djy',{
        })
        console.log(res)
      }
    }

  };
</script>

<style>

</style>
