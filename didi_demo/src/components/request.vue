<template>
  <div> 
      <puliceCatalog :scataLog="budgetRequest"></puliceCatalog>
       <div class="applied">
          <div class="appliedC">
            <div class="form-group form_hearda">
                      <img :src="catalogIcon">
                      <span>{{title}}</span>
            </div>
            <form class="form-inline request_table" method="post" action="http://10.39.137.104:8080/didiopms/budget/createBudget.do" >
                <div class="form-group">
                    <div class="form-group">
                      <label>一级部门:</label>
                      <input type="text"  class="form-control"  name="departmentId" disabled />
                    </div>
                    <div class="form-group">
                      <label>二级部门:</label>
                      <input type="text" class="form-control"  name="departmentId" disabled>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group">
                        <label>三级部门:</label>
                        <input type="text" class="form-control" name="departmentId" disabled>

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail2">预计人数:</label>
                        <input type="text" required class="form-control" name="expoct" id="exampleInputEmail2"/>
                    </div>
                </div>
                 <div class="form-group">
                    <div class="form-group">
                        <label>预算金额:</label>
                        <input type="text" required class="form-control" name="amount" id="exampleInputEmail2">
                        <select>
                             <option>人民币</option>
                             <option>美元</option>
                             <option>人民币</option>
                        </select>
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail2">费用分类:</label>
                        <input type="text" name="costCode" required class="form-control select-title">
                        <!-- <div class="dropdown">
                        
                            <div class="slideDown_icon" data-toggle="dropdown">
                            <img src=".././assets/image/select_arrow_down.png">
                        </div>
                        <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu ">   
                            <li class="dropdown-submenu">  
                                <a href="javascript:;" data-index="3" data-title="咨询人力及外包">咨询人力及外包</a>  
                                <ul class="dropdown-menu second">   
                                    <li class="dropdown-submenu">  
                                        <a href="javascript:;" data-index="3-1" data-title="研发服务的外包">研发服务的外包</a>  
                                        <ul class="dropdown-menu">  
                                            <li><a href="javascript:;" data-index="3-1-1" data-title="1">1</a></li>  
                                        </ul>  
                                    </li> 
                                    <li class="dropdown-submenu">  
                                        <a href="javascript:;" data-index="3-2" data-title="非研发服务的外包">非研发服务的外包</a>  
                                        <ul class="dropdown-menu">  
                                            <li><a href="javascript:;" data-index="3-2-1" data-title="人员外包">人员外包</a></li> 
                                            <li><a href="javascript:;" data-index="3-2-2" data-title="项目外包">项目外包</a></li>   
                                        </ul>  
                                  </li> 
                              </ul>  
                          </li> <!-咨询结束  -->
                     <!--  </ul>  
                  </div> --> 
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group">
                      <label>费用说明:</label>
                      <input type="text" class="form-control" required="require" name="description" >
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail2">预算年度:</label>
                      <input type="text" class="form-control" id="exampleInputEmail2" required name="years">
                    </div>
                </div>
                <div class="form-group">
                  <div>
                    <label>备注:</label>
                    <textarea></textarea>
                  </div>
                </div>
                <div class="form-group">
                    <div class="form-group">
                         <button class="btn btn-default" @click="cancels">取消</button>
                         <button class="btn btn-default">保存</button>
                         <button type="submit" class="btn btn-default submitBtn">提交</button>
                    </div>
                    
                </div>
                  
            </form>
          </div>
            
      </div>
  </div>
</template>

<script>
   import puliceCatalog from "./puliceCatalog.vue"
   export default{
        data(){
          return{
            currency:["人民币","美元","日元","韩元"],
            catalogIcon:require("../assets/image/title_address.png"),
            title:"年度预算申请",
            budgetRequest:[
                     {title:"首页",path:"/home"},
                     {title:"预算管理",path:"/budget/budgetList"},
                     {title:"年度预算管理",path:"/budget/budgetList"},
                     {title:"年度预算申请",path:"/budget/budgetList/require"}
              ],

          }
        },
        props:["degetSearch"],
        components:{
          puliceCatalog,
        },
        methods:{
          opt(e){
              $(e.target).addClass('sub').siblings().removeClass('sub')
              $(e.target).parent().children().removeClass('cancel')
          },
          changeBck(e){
                $(e.target).css('background','white')
          },
          cancels(){
              this.$router.push("/budget/budgetList")
          },
        },
        mounted(){
            let Index=[]

            //departmentId=20448&years=2017&costCode=2&currencyCode=1&amount=55000&expoct=8&description=年度预算&status=0&creater=7&updater=7
            
            $('.multi-level').delegate('a', 'click', function(event) {
                  let _this=$(this);
                  let Value="";
                  Index=[];
                  $('.multi-level').find('a').each(function(index, el) {
                      
                      if(el.getAttribute("data-index").slice(0,-2)===_this.attr('data-index').slice(0,-2)){
                             Index.push($(this)[0].innerHTML)
                              Value=el.getAttribute("data-index").slice(0, -4)
                              $('.select-title').html(Index)
                              
                        }
                       
                  });
            });


            $(".submitBtn").click(function(event) {
                if($(".request_table").find('input').val() === ""){
                    alert("不能为空！")

                }else{
                   this.$router.push("/budget/budgetList")
                }
            });
           
        }
    }
  
</script>

<style>
   .applied{
      display: block;
      width: 97%;
      height: 91%;
      background: white;
      position: absolute;
      margin-left:1.5%;
    }
    .appliedC{
      width: 96%;
      height: 100%;
       margin: 0px 20px;

    }
    .form_heard span{
      font-size: 14px;
   }
   .form_hearda{
    height:46px;
    margin-bottom: 15px;
    line-height: 46px;
    border-bottom:2px solid #edeef1;
   }
   .request_table{
    border: 0px;
   }
   .request_table>.form-group{
       width: 100%;
       margin-top: 20px;
   }
   .request_table>.form-group>.form-group{
      width: 49%;
      text-align: center;
   }
   .request_table>.form-group>.form-group>input{
      width: 63%;
      background: #fcfcfc;
      border-radius: 0px;
      border-color: #f1f1f1;
      box-shadow: none;
      -webkit-box-shadow:none;
      -moz-box-shadow:none;
      -ms-box-shadow:none;

   }
   .request_table>.form-group:first-child>.form-group>input{
      background: #e2e3e4;
   }
   .request_table>.form-group:nth-child(2)>.form-group:first-child>input{
      background: #e2e3e4;
   }
   .request_table>.form-group:last-child>.form-group{
     margin-left: 5.2%;
   }
   
   .request_table>.form-group:last-child>.form-group>.btn{
       width: 100px;
       height: 34px;
       border-color: #fa8919;
       background: white;
       color: #fa8919;
       margin-right: 10px;
   }
   .request_table>.form-group:nth-child(5)>div{
      width: 85%;
      margin: auto;
   }
   .request_table>.form-group:last-child>.form-group>.btn:first-child{
       border-color: #b0b0b0;
       color: #b0b0b0;
   }
   .request_table>.form-group:last-child>.form-group>.btn:hover{
       background: #fa8919;
       color: white;
   }
   .request_table>.form-group:last-child>.form-group>.btn:first-child{
    margin-right: 10px;
    color: #b0b0b0;
   } 
   .request_table>.form-group:last-child>.form-group>.btn:first-child:hover{
      background: #b0b0b0;
      color: white;
   }
   .request_table>.form-group:nth-child(3)>.form-group:first-child>input{
    width: 51%;
    position: relative;
    left: 3px;
   }
   .request_table>.form-group span{
       color: red;
       zoom: 1.2;
       position: relative;
       top: 3px;

   },
   .request_table label{
    display: inline-block;
    text-align: right;
    width: 70px;
    /*margin-right: 10px;*/
   }
   .request_table textarea{
      resize: none;
      height: 106px;
      border-color: #f1f1f1;
      background: #fcfcfc;
      width: 95%;
      float: right;
      text-indent: 0.5em;
   }
    .request_table select{
        width: 60px;
        height: 34px;
        position: relative;
        right: 2px;
        font-size: 12px;
        text-indent: 0.5em;
        background-color: #e2e3e4;

    }
    textarea:focus,input.form-control:focus{
      background:white;
    }
   .request_table .dropdown-toggle{
     height: 34px;
     border-color:#f1f1f1;

   }
    .request_table>.form-group:nth-child(3)>.form-group> .dropdownInput{
        width: 50%;
   }
   .input-group{
      width: 63%;
   }
   .form-control{
      border-color: #f1f1f1;
      box-shadow: none;
      background-color: #fcfcfc;
      border-radius: 0px;
   }
   .input-group .input-group-btn{
     border-color: #f1f1f1;
   }
  
</style>