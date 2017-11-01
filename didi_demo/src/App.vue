<template>
  <div id="app">
    <slideNav></slideNav>
    <div class="contents" >
       <keep-alive>
            <router-view></router-view>
       </keep-alive>
    </div>
  </div>
</template>

<script>
import slideNav from './components/slideNav.vue'
import api from './api/apis.js'
import Store from 'store'
export default {
    name: 'app',
    mounted(){
      contentWidth()
      function contentWidth(){
         $('.contents').css({"width":$(window).outerWidth()-$("#slide_nav").width()-($(window).outerWidth(true)-$(window).width())})
         $('.contents').height($(document).height())
      };
      $(window).resize(function(){
          contentWidth()
      });
    },
     components:{
        slideNav,
      },
    created(){
        var params = {
            username:"zhugeliang",
            userpwd:"123456",
        }
        api.login.confirmUser(params).then((response) => {
            var state=response.body.state

            console.log(response)
            if(state =='0000'){
                /*存储seesion*/
                Store.set("Access-Token",response.body.data);
                
                // this.$router.push({path:"/home"})
                  
            
                // this.$http.post('http://10.39.137.104:8080/didiopms/indexUserList.do').then(function(reponse){
                //      console.log(reponse)
                //   })
                
            
            }else{
                alert('error')
            }
       }, (err) => {
        
          console.log(err)
       })

    }
  }
</script>

<style>
   body,html{width: 100%;height: 100%; -moz-user-select:none ;-ms-user-select:none;user-select:none}
   #app{
   	   font-family: "microsoft yahei";
   	   cursor:pointer;
    }
    .table td{
        border-color: #f1f1f1;
    }
    #app>.contents{
      height:100%;
      position: absolute;
      top: 50px;
      right: 0px;
      bottom: 0px;
      display: inline-block;
      background:#edeef1;
    }
    .content{
       width: 96%;
    }

    .btn,input{
      border-radius: 0;
      font-size: 12px;
    }
    li{
      list-style: none;
    }
    label{
       color: #636363;
    }
    label,.btn,input{
        font-size: 12px;
    }
    input:focus,textarea:focus{
      outline:none;
       border: 1px solid #fa8919;
    }
    select{
      background: white;
      border-radius: 0px;
      border:1px solid #e2e3e5;
      /*changeselect*/
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;

    }
     select:focus {
        outline:none;
    }
    
</style>
