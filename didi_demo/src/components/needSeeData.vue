<template>
  <div>
    <puliceCatalog :scataLog="puliceCatalog"></puliceCatalog>
		<form class="detailData" >
		 	 <div class="form-group seeData_header">
  		 	 	<span>需求详情:</span>
        </div>
    		 	<div class="form-group" >
    		 	 	<table class="table tab_s" >
    	            <tr>
    		              <td>岗位名称:</td>
    		              <td>岗位分类: </td>
    		              <td>预算范围: </td>
    	            </tr>
                  <tr>
                      <td>费用分类: </td>
                      <td>直属上级: </td>
                      <td>期望入场时间: </td>
                  </tr>
                  <tr>
                      <td>需求数量: </td>
                      <td>预计工作期限: </td>
                      <td>供应商: </td>
                  </tr>
                 <tr>
                      <td>工作年限: </td>
                      <td>工作地点: </td>
                      <td>发布日期: </td>
                  </tr>
                  <tr>
                      <td colspan="2">岗位说明:</td>
                  </tr>
                  <tr>
                      <td colspan="2">任职要求:</td>
                  </tr>
    	      </table>
    		  </div>
    		 	<div class="form-group">
    		 	 	<span>审批进度:</span>
    		 	</div>
  	 	<div class="form-group">
  	 	 	<table class="table table-bordered">
  	 	 		<tr>
  	 	 			<td>部门</td>
                      <td>时间</td>
  	 	 			<td>审批人</td>
  	 	 			<td>职位</td>
                      <td>操作</td>
  	 	 			<td>说明</td>
  	 	 		</tr>
  	 	 		<tr>
  	 	 			<td>1</td>
  	 	 			<td>10/2</td>
  	 	 			<td>阿</td>
  	 	 			<td>1</td>
  	 	 			<td>1</td>
            <td>1</td>
  	 	 		</tr>
          <tr>
            <td>1</td>
            <td>10/2</td>
            <td>阿</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>10/2</td>
            <td>阿</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
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
            searchData:this.$store.state.budgetSeeData
          	    
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
  /* #myModal{
        display: none;
   }
   .detailData{
      margin: 0px 20px 0px 20px;
      background: white;
      width: 97%;
      height: 100%;
      position: absolute;

    }

   .seeData_header{
    padding:14px 0px;
    margin: 0px 20px;
    border-bottom:2px solid #edeef1;
   }
*/

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
   .detailData .form-group:nth-child(4){
   	  margin-top: 30px;
    }
     /*btn foot*/ 

    .table-bordered{
       border:0p;
    }


    .tab_s{
       background: #f9fbfd;
       margin-top: 20px;
       border: 1px solid #ecf2f8;
    }
    .tab_s>tr>td{
       width: 100px;
       line-height: 40px;
       text-indent: 2em;
       font-size: 12px;
    }
    .tab_s>tr:nth-child(4)>td, .tab_s>tr:last-child>td{
        width: 100%;
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