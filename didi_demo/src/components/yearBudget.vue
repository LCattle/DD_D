<template>
	<div class="form-group" >
        <div class="yearBudget">
            <div id="condition" class="form-group" >
                 <div>
                     <div class="form-group"></div>
                      <label>费用类别:</label>
                        <select>
                          <option>研发外包项目</option>  
                          <option>服务外包员工</option>  
                      </select>
  				</div>
  			  <div>
  	            <label>部门:</label>
  	            <select>
  	                <option>AAA运营管理</option>  
  	            </select>
  		  	</div>
              <!--日期-->
  			  <date></date>
              <button type="button" class="btn btn-default search">查询</button> 
          </div>
  		    
            <!--申请状态-->
            <div class="form-group nav_search">
                <ul class="nav nav-tabs">
                     <li v-for="(tab,index) in tabs" :class="{active:index==0}" ><a href="javascript:void(0)"   :sign="tab">{{tab}}</a></li>
              </ul>
            </div>
                <budgetTable :tableTitle="tableTitle" :tableBody="tableBody"></budgetTable>
                <!--分页-->
                <page></page>
        </div>
    </div>

</template>

<script>
   import budgetTable from './budgetTable.vue'
   import page from './page.vue'
   import date from './date.vue'
   import api from '../api/apis.js'
   export default{
   	    data(){
   	    	return{
                tabs:["全部","待审核","审核中","已驳回","已审核","已撤销" ],
                tableTitle:["一级部门","二级部门","三级部门","预算类别","费用类别","金额","预算人数","申请时间","状态","操作"],
                yearActive:true,
                yearDataActive:false,
                Status:["待审批","审核中","已驳回","已撤销","待发布","已发布","待审核","已审核","已删除","已上传"]
   	    	}
   	    },
        computed:{
           tableBody:function(){
              return this.$store.state.BudgetYear
           }
        },
        mounted(){
          var _this=this
          let StatusNum=0;
          $(".nav-tabs").delegate('li', 'click', function(event) {
              $(this).addClass('active').siblings().removeClass('active')

               if($(this).children("a")[0].innerText === "待审核"){
                    StatusNum=0
               }else if($(this).children("a")[0].innerText === "审核中"){
                    StatusNum=1
               }else if($(this).children("a")[0].innerText === "已驳回"){
                    StatusNum=2
               }else if($(this).children("a")[0].innerText === "已撤销"){
                   StatusNum=3
               }else if($(this).children("a")[0].innerText === "已审核"){
                     StatusNum=7
               }else{
                  api.login.indexUserList("/budget/budgetList").then((response) => {

                        // console.log(response)

                      $.each(response.body.data.list,function(index, el) {
                       el.STATUS=_this.Status[el.STATUS]

                       this.PATHS=el.PATHS.split('>')
                        if(this.PATHS.length===1){
                            this.PATHS.push("","")
                        }else if(this.PATHS.length===2){
                            this.PATHS.push("")
                        }


                        if(el.COST_CODE == "costC_0301"){
                            this.COST_CODE="研发外包项目"
                        }else if(el.COST_CODE == "costC_0302"){
                             this.COST_CODE="研发外包员工"
                        }else if(el.COST_CODE == "costC_0303"){
                             this.COST_CODE="服务外包项目"
                        }else{
                            this.COST_CODE="服务外包员工"
                        }
                      });
                       _this.$store.state.BudgetYear=response.body.data.list

                       // console.log(response)
                  })
                   
               }

              api.login.tableList({status:StatusNum}).then( (responese) => {
                  $.each(responese.body.data.list,function(index, el) {
                      el.STATUS=_this.Status[el.STATUS]
                      this.PATHS=el.PATHS.split('>')
                        if(this.PATHS.length===1){
                            this.PATHS.push("","")
                        }else if(this.PATHS.length===2){
                            this.PATHS.push("")
                        }

                        if(el.COST_CODE == "costC_0301"){
                            this.COST_CODE="研发外包项目"

                        }else if(el.COST_CODE == "costC_0302"){
                             this.COST_CODE="研发外包员工"
                        }else if(el.COST_CODE == "costC_0303"){
                             this.COST_CODE="服务外包项目"
                        }else{
                            this.COST_CODE="服务外包员工"
                        }
                  });
                  _this.$store.state.BudgetYear=responese.body.data.list
              }, (err) => {
              })

          });
        },
   	    components:{
           budgetTable,
           page,
           date,

        }
  }
	
</script>

<style>
   .yearBudget{
      width: 100%;
   }
   .form_heard .btn,option,.form-group>div:nth-child(3) i,.form-group div:nth-child(3) span,
   .form-group div:nth-child(3) div:last-child,.search,.input-group input,.input-group .btn{
   	   position: relative;
   }
   select{
   	width: 190px;
   }
   select,.nav-tabs,.nav-tabs a{
   	  border:0px;
   }
   select,.form-group>div:nth-child(3) input{
   	height: 34px;
   }
   #condition>div,#condition>div>.form-group div:last-child span{
   	display: inline-block;
   }
    .search{
     border-color: #fa8919;
     padding: 7.5px 20px;
     bottom: 2px;
   }
   .search:hover,.operation:hover{
   	  background: #fa8919;
   	  border-color: #fa8919;
   	  color: white;
   	  -webkit-box-shadow:0;
   }
   .search,.nav-tabs>li>a:hover{
   	   color: #fa8919;
       background: white;
   }
   #condition{
      width: 100%;
   	  border-bottom: 1px solid #edeef1;
   	  padding-bottom: 15px;
   }
    .year_content form .form-group:last-child nav{
         text-align: center;
    }
   
    .remarks{
      width: 68%;
      height: 106px;
      resize: none;
      border-color: #e2e3e5;
      margin-left: 8px;
      background-color: #fcfcfc;
    }
    .tex{
      position: relative;
      bottom: 90px;
      right: 2px;
    }
    
    input:focus,textarea:focus,.btn:focus{  
      outline: none;   
      box-shadow: 0; 
      -webkit-box-shadow:0;
      -moz-box-shadow:0;
      -ms-box-shadow:0;
      border-radius: 0px;  
    }
    .currency{
       border-radius: 0;
       font-size: 12px;
       
    }
    .currency li a{
      line-height: 28px;
    }
    .slideBth .btn,.classify .bth{
       width: 70px;
    }
    .slideBth,.classify{
      position: relative;
      right: 96px;
      height: 34px;
      bottom: 2px;
    }
    .tuo{
        position: absolute;
        left: -159px;
        top: 55px;
        border-radius: 0;
    }
    .three{
       position: absolute;
    left: -318px;
    top: 100px;
    border-radius: 0;
    }
    
    .nav-tabs>li>a{
       color: #3a3a3a;
       border-radius: 0;
       border: 0px;
    }
     .nav-tabs>li>a,.nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover,.nav-tabs>li>a{
         border: 0px;
    }
    .nav-tabs li.active{
      color: #fa8919;
      border-bottom: 2px solid #fa8919;
    }
   select{
      width: 190px;
      height: 34px;
      background: white;
      border-radius: 0px;
      border:1px solid #e2e3e5;
      margin-right: 10px;
      /*changeselect*/
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
       padding-right: 14px;
       text-indent: 0.5em;

    }
    .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
      border: 0px;
    }
	
</style>