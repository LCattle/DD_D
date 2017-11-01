<template>
	<div class="form-group needs_title">
          <div class="form-group">
              <label>需求单号:</label>
              <input type="text" class="input-group">
          </div>
          <div class="form-group">
              <label>岗位名称:</label>
              <span class="slide_texa" @click="Down">
                  <span>所有</span>
                  <span >
                      <i class="glyphicon glyphicon-menu-down"></i>
                  </span>
                  <ul class="down_hiden" @click="classify">
                      <li class="active">所有</li>
                      <li v-for="postC in postCo">{{postC.POST_CODE}}</li>
                  </ul>
              </span>
          </div>
          <button type="button" class="btn btn-default">查询</button>
      </div>
</template>

<script>
   export default{
   	   props:["tbActive","postCo"],
   	   methods:{
   	   	    Down(e){
                $('.down_hiden').slideToggle()
                if(this.$flag){
                    $("i").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-up")
                }else{
                    $("i").removeClass("glyphicon glyphicon-menu-up").addClass("glyphicon glyphicon-menu-down")
                }
               this.$flag=!this.$flag
            },
            classify(e){
                $('.slide_texa').find('span:first-child').html($(e.target)[0].innerText)
            },
   	   },
   }
	
</script>

<style scoped>
   .needs_title{
    width: 100%;
    height: 66px;
    font-size: 12px;
    border-bottom: 1px solid #edeef1;
   }
   .needs_title>div{
       display: inline-block;
   }
   .needs_title>div:first-child{
      line-height: 69px;
   }
   .needs_title>div:first-child input{
      width: 150px;
      height: 34px;
      float: right;
      position: relative;
      top: 16px;
      margin-right: 20px;

   }
   .needs_title>div:nth-child{
      height: 100%;
   }
   .needs_title>.btn{
     border-color: #fa8919;
     height: 34px;
     padding: 0px 20px;
    background: #fa8919;
    color: white;
    margin-left: 20px;
    margin-bottom: 4px;
    font-size: 12px;
   }
    .slide_texa{
    display: inline-block;
    width: 150px;
    height: 34px;
    border: 1px solid #e2e3e5;
    line-height: 30px;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
   }
   .slide_texa>ul.down_hiden{
       display: inline-block;
       position: absolute;
       width: 150px;
       background: white;
       z-index: 1;
       padding: 0px;
       margin-right: 20px;
       border: 1px solid #e2e3e5;
       display: none;
   }
   .slide_texa>ul.down_hiden>li{
      width: 149px;
      list-style: none;
      text-indent: 1em;
   }
   .slide_texa>span:first-child{
       margin-left: 4px;
       width: 80%;
       display: inline-block;

   }
   .slide_texa>span:nth-of-type(2){
       float: right;
   }
    .slide_texa>span:nth-of-type(2) i{
       right: 8px;
    }
    .down_hiden>li:hover{
     background:#fa8919;
     color: white;
   }
    .down_hiden>li.active{
        background: #fa8919;
        color: white;
    }
    .down_hiden{
       margin-left: -3px;
    }
    .needs_title label{
       margin-right: 8px;
       color: #636363;
       font-size: 12px;
       height: 36px;
       line-height: 36px;

    }
    input{
        text-indent: 0.5em;
    }
	
</style>