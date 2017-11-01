<template>
  <div>
    <puliceCatalog :scataLog="puliceCatalog"></puliceCatalog>
		<form class="detailData" >
		 	 <div class="form-group seeData_header">
  		 	 	<span>需求详情:</span>
        </div>
    		 	<div class="form-group" >
    		 	 	<table class="table tab_n" >
    	            <tr>
    		              <td>一级部门 : {{searchData.PATHS}}</td>
    		              <td>申请人 : {{searchData.USERNAME}} </td>
    		              <td>费用分类 : {{searchData.COSTLABLE}} </td>
    	            </tr>
                  <tr>
                      <td>二级部门 : {{searchData.PATHS}} </td>
                      <td>预计人数 : {{searchData.EXPOCT}} </td>
                      <td>费用说明 : {{searchData.DESCRIPTION}} </td>
                  </tr>
                  <tr>
                      <td>三级部门 : {{searchData.PATHS}} </td>
                      <td>使用日期 : {{searchData.YEARS}} </td>
                      <td>预算金额 : {{searchData.AMOUNT}} </td>
                  </tr>
                  <tr>
                      
                  </tr>
    	      </table>
    		  </div>
    		 	<div class="form-group">
    		 	 	<span>审批进度:</span>
    		 	</div>
        <!--Progress strat-->
           <div class="form-group prog">
                <div class="prog_parent">
                    <div class="prog_info">
                        <p>发起</p>
                        <div class="un_radius"></div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width:100%" >
                        </div>
                    </div>
                </div>
                <div class="end_radius"></div>
           </div>
        <!--Progress end-->
	 	<div class="form-group">
	 	 	<table class="table table-bordered">
	 	 		<tr>
	 	 			<td>序号</td>
          <td>时间</td>
	 	 			<td>审批人</td>
	 	 			<td>职位</td>
          <td>操作</td>
	 	 			<td>说明</td>
	 	 		</tr>
	 	 		<tr v-for="(searchDataPation,index) in searchDataPation">
	 	 			<!-- <td>{{searchDataPation.}}</td> -->
	 	 			<td>{{index}}</td>
	 	 			<td>{{searchDataPation.CREATEDATE}}</td>
	 	 			<td>{{searchDataPation.USERNAME}}</td>
	 	 			<!-- <td>{{searchDataPation}}</td> -->
          <td>{{searchDataPation.EXECUTEIDEA}}</td>
	 	 		</tr>

	 	 	</table>
	 	</div>
	</form>
</div>
</template>

<script>
  import puliceCatalog from "./puliceCatalog.vue"
   export default {
  	  data(){
          return{
            puliceCatalog:[
                     {title:"首页",path:"/home"},
                     {title:"需求管理",path:"/budget/budgetList"},
                     {title:"需求详情",path:"/budget/budgetList/seeData"}
            ],
          	    
          }
  	  },
      computed:{
        searchData:function(){
            return this.$store.state.budgetSeeData
        },
        searchDataPation:function(){
            return this.$store.state.budgetPation
        }
      },
      components:{
        puliceCatalog,
      },
      mounted(){
        //Model事件
         var than=this.$router
         var _this=this
        
        $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').focus()
        });
        
        $(".seeData_btn .btn").click(function() {
             than.push('/needs/request')
        });

      }
  }
	
</script>

<style>
 /*Model start*/
   #myModal{
        display: none;
   }
   .detailData{
      margin: 0px 20px 0px 20px;
      background: white;
      width: 97%;
      height: 100%;
      position: absolute;
      background: white;

    }

   .seeData_header{
    padding:14px 0px;
    margin: 0px 20px;
    border-bottom:2px solid #edeef1;
   }


/*progress start*/
    .progress{
        width:93%;
        height: 4px;
        border-radius: 0px;
        margin-left:19.5px;
        position:relative;
        bottom: 10px;
    }
    .prog_parent{
        width: 16%;
        display: inline-block;

    }
    .progress div, .un_radius,.end_radius{
        background: #6fc041;
    }
    .un_radius,.end_radius{
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
    .end_radius{
        position: relative;
        bottom: 24px;
        display: inline-block;
    }
    .un_radius{
        margin-left: 10%;
    }
    .prog_info{
        width:50px;
    }
    .prog_info>p{
       padding-bottom: 10px;
    }
    .prog>.prog_parent:nth-child(3){
        margin-left: 0px;
    }
/*progress end*/

    span{
        /*font-weight: bold;*/
        font-size: 13px;
    }
   .form-group .table-bordered>tr>td{
       	 padding: 6px;
       	 text-align: center;
         font-size: 12px;
         border: 1px solid #f1f1f1;
   }
   .form-group .table-bordered>tr:first-child{
     background: #fcfcfc;
   }
   .form-group .table-bordered>.tab_n>tr{
     display: inline-block;
   }
   .detailData .form-group:nth-child(4){
   	  margin-top: 30px;
    }
     /*btn foot*/ 

    .table-bordered{
       border:0p;
    }


    .tab_n{
       background: #f9fbfd;
       margin-top: 20px;
       border: 1px solid #ecf2f8;
    }
    .tab_n>tr>td{
       width: 100px;
       line-height: 40px;
       text-indent: 2em;
       font-size: 12px;
    }
    .tab_n>tr:nth-child(4)>td, .tab_n>tr:last-child>td{
        /*width: 100%;*/
        line-height: 50px;
    }
    .detailData>div.form-group{
        margin:0px 20px;
    }
    .detailData>div.form-group:nth-child(7){
        margin-top: 32px;
    }
    .prog{
      margin-top: 30px;
    }
	  
</style>