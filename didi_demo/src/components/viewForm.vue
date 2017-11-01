<template>
   <div class="applied">
        <div class="form-group">
            <label for="one">一级部门 :</label> 
            <input type="text" class="form-control"  placeholder="" disabled="disabled">
            <label for="tuo">二级部门 :</label>
            <input type="text" class="form-control"  placeholder="" disabled="disabled">
        </div>
        <div class="form-group">
          <label for="three">三级部门 :</label>
          <input type="text" class="form-control"  placeholder="" disabled="disabled">
          <label for="user">预算人数 :</label>
          <input type="text" class="form-control" placeholder="请输入预算人数">
        </div>
        
        <div class="form-group">
        <label>预算总费用 :</label>
        <input type="text" name="" class="form-control" placeholder="请输入预算总费用">
        <div class="btn-group slideBth">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            {{monetaryUnit}} <span class="caret "></span>
          </button>
          <ul class="dropdown-menu currency">
             <li v-for='money in currenc'><a href="javascript:void(0)" @click="changeCurrency">{{money}}</a></li>
          </ul>
        </div>
        <label>费用分类 :</label>
        <div class="form-group classification">  
            <input type="hidden"  value="" />  
            <div class="dropdown">
                 <p class="select-title">项目外包</p>
                <div class="slideDown_icon" data-toggle="dropdown"></div>
                <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu ">   
                    <li class="dropdown-submenu">  
                        <a href="javascript:;" data-index="2" data-title="咨询人力及外包">咨询人力及外包</a>  
                        <ul class="dropdown-menu second">   
                            <li class="dropdown-submenu">  
                                <a href="javascript:;" data-index="3-2" data-title="研发服务的外包">研发服务的外包</a>  
                                <ul class="dropdown-menu">  
                                    <li><a href="javascript:;" data-index="3-2-1" data-title="1">1</a></li>  
                                </ul>  
                            </li> 
                            <li class="dropdown-submenu">  
                                <a href="javascript:;" data-index="3-2" data-title="非研发服务的外包">非研发服务的外包</a>  
                                <ul class="dropdown-menu">  
                                    <li><a href="javascript:;" data-index="3-2-1" data-title="人员外包">人员外包</a></li> 
                                    <li><a href="javascript:;" data-index="3-2-1" data-title="项目外包">项目外包</a></li>   
                                </ul>  
                            </li> 
                        </ul>  
                    </li> <!--咨询结束-->  
                </ul>  
            </div>  
          </div>
        </div>
       <div class="form-group">
          <label for="one">费用说明 :</label>
          <input type="text" class="form-control" id="one" placeholder="请输入费用说明">
          <label for="one">预算年度 :</label>
          <input type="text" class="form-control" id="one" placeholder="" >
        </div>
        <div class="form-group">
            <label class="tex">备注 :</label>
            <textarea class="remarks" @focus="changeBck"></textarea> 
        </div>
        <div class="form-group">
            <div class="applied_opt">
              <button type="button" class="btn btn-default" @click="optCancel">取消</button>
              <button type="button" class="btn btn-default"  @click="opt">保存</button>
              <button type="submit" class="btn btn-default"  @click="opt">提交</button>
            </div>
        </div>
  </div>
</template>

<script>
   export default{
        opt(e){
              $(e.target).addClass('sub').siblings().removeClass('sub')
              $(e.target).parent().children().removeClass('cancel')
        },
        optCancel(e){
              $(e.target).addClass('cancel')
              $(e.target).parent().children().removeClass('sub')
        },
        changeBck(e){
              $(e.target).css('background','white')
        }
   }
  
</script>

<style>
   .applied{
      display: block;
      text-align: center;
      background: white;
      width: 96%;
      height: 98%;
      margin: auto;
    }
    .applied input{
      color: #b0b0b0;
      font: 12px;
      text-align: left;
      width: 30%;
      border-radius: 0px;
      display: inline-block;
    }
    .applied label{
      width: 100px;
       text-align: right;
    }
    .applied .form-control{
        box-shadow: none;
        -webkit-box-shadow:none;
        background: #fcfcfc;
        border-color: #e6e8ed;
    }
     .applied_opt{
      text-align: right;
      width: 80%;
      margin: auto;
    }
    .applied_opt button{
        width: 100px;
        margin: 0px 3px;
    }
    .applied_opt button:first-child{
         border-color: #b0b0b0;
         color: #b0b0b0;
    }
    .applied_opt button:nth-child(2),.applied_opt button:nth-child(3){
         border-color: #fa8919;
         color: #fa8919;

    }
    .applied_opt button:first-child:hover,.applied_opt button.cancel{
        background: #b0b0b0;
        color: white;
        box-shadow: none;
    }
    .applied_opt button:nth-child(2):hover,.applied_opt button:nth-child(3):hover{
       background: #fa8919;
       color: white;
    }
    .applied_opt button.sub{
       background: #fa8919;
       color: white;
    }
    .applied div:first-child input{
         background-color: #e2e3e5;
    }
    .applied div:nth-child(2)>input:nth-child(1){
        background-color: #e2e3e5;
    }
    .slideDown_icon{
         display: inline-block;
         width: 12px;
         height: 12px;
         background-image: url(../assets/image/select_arrow_down.png);
        position: absolute;
        right: 0;
        top: 10px;
        left: 124px;
       }
    .select-title{
        line-height:32px;
    }
    .dropdown-submenu {  
            position: relative;  
        }  
        .dropdown-submenu > .dropdown-menu {  
            top: 0;  
            left: 100%;  
            margin-top: -6px;  
            margin-left: -1px;  
            -webkit-border-radius: 0 6px 6px 6px;  
            -moz-border-radius: 0 6px 6px;  
            border-radius: 0 6px 6px 6px;  
        }  
        .dropdown-submenu:hover > .dropdown-menu {  
            display: block;  
        }  
        .dropdown-submenu > a:after {  
            display: block;  
            content: " ";  
            float: right;  
            width: 0;  
            height: 0;  
            border-color: transparent;  
            border-style: solid;  
            border-width: 5px 0 5px 5px;  
            border-left-color: #ccc;  
            margin-top: 5px;  
            margin-right: -10px;  
        }  
        .dropdown-submenu:hover > a:after {  
            border-left-color: #fff;  
        }  
        .dropdown-submenu.pull-left {  
            float: none;  
        }  
        .dropdown-submenu.pull-left > .dropdown-menu {  
            left: -102%;  
            margin-left: 10px;  
            -webkit-border-radius: 6px 0 6px 6px;  
            -moz-border-radius: 6px 0 6px 6px;  
            border-radius: 6px 0 6px 6px;  
        } 
        .open{
          display: block;
        }
        .classification{
          width: 28%;
          border: 1px solid #e6e8ed;
         margin: 0px 7px;
        }
        .dropdown-submenu > .dropdown-menu{
            left: -100%;
        }
        .dropdown-submenu > a::after{
            border-width: 0;
            background-image: url(../assets/image/select_arrow_left.png);
            width: 12px;
            height: 12px;
            float: left;
            display: inline-block;
            margin-right: 10px;
        }
       .dropdown .dropdown-menu li{
        height: 28px;
       }
       .dropdown-menu>li>a{
         padding: 3px 0px;
       }
  
</style>