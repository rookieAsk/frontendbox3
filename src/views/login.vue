<template>
  <div id="login">
    <p>This is an login page</p>
    <button @click="login()">点此登录</button>
  </div>
</template>

<script>
// 引入axios
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      message:''
    }
  },
  filters:{ },
  watch:{ },
  computed:{ },
  methods:{
  // 登录功能
    login(){
      this.$router.push('/')
    }
  },
  created(){ 
    // axios.get('http://localhost:8888/test/get').then(res => {  
    //   console.log(res);
    // });
    // axios.post('http://localhost:8888/test/post').then(res => {  
    //   console.log(res);
    // });
  },
  mounted(){ },
  components: { }
}
</script>
<style lang="scss" scoped>
  // 
</style>
