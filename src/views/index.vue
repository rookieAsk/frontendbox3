<template>
  <div class="index">
    <img src="../assets/images/you.png" alt="">
    <h1>This is an index page</h1>
  </div>
</template>

<script>
// 引入axios
// @ is an alias to /src
import axios from 'axios';
import {getQueryString, api} from '../assets/js/baseUrl.js';

export default {
  name: 'index',
  data () {
    return {
      localInit : window.location.hostname == 'localhost' ? '/api/bigdata/beicai-garbage/garbage/' : '/bigdata/beicai-garbage/garbage/',
    }
  },
  filters:{ },
  watch:{ },
  computed: { },
  methods:{ 
  // 获取天气数据--调用中国天气网api
    getWeather(){
      console.log(window.location.href)
      let _this = this;
      axios.get('https://www.tianqiapi.com/api/?version=v6&appid=56962779&appsecret=odhFe6G4').then(function(res){
        console.log(res,'中国天气网api')
      }).catch(function(err){
        throw (err)
      })
    },
  // 工单处置时长和效率
    effecSclect(){
      let _this = this;
      axios.get(_this.localInit+'process-time',{params:{type:1,cun:'全部'}}).then(function(res){
        console.log(res,'工单处置时长和效率')
      })
    }
  },
  created(){ 
    this.getWeather();
    // this.effecSclect();
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
