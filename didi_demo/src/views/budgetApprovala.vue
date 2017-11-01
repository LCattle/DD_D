<template>
  <div>
    <puliceCatalog :scataLog="budgetApp"></puliceCatalog>
  	<div class="approvala">
        <div class="approvala_content">
            <div class="form-group form_heard">
                <img :src="catalogIcon">
                <span>{{title}}</span>
            </div>
            <div class="form-group">
                    <div>
                        <label>费用类别:</label>
                        <select @change>
                            <option></option>
                        </select>
                        <label>申请部门:</label>
                        <select>
                            <option></option>  
                        </select>
                    <!--日期-->
                     <date></date>
                    <button type="button" class="btn btn-default search">搜索</button> 
                </div>
            </div>
            <budgetTable :tableTitle="tableTitle" :tableBody="budgetApprovala" ></budgetTable>
           
    </div>
  	</div>
  </div>
	
	
</template>
<script>
   import puliceCatalog from "../components/puliceCatalog.vue"
   import seeData from "../components/seedata.vue"
   import date from "../components/date.vue"
   import budgetTable from '../components/budgetTable.vue'
   export default{
    data(){
       return{
            budgetApp:[
                     {title:"首页",path:"/home"},
                     {title:"预算管理",path:"/budget/year"},
                     {title:"预算审批",path:"/budget/approval"}
             ],
             title:"预算审批",
             catalogIcon:require("../assets/image/title_address.png"),
             tableTitle:["一级部门","二级部门","三级部门","费用类别","金额","预算人数","申请人","申请时间","状态","操作"],

          }
    },
     computed:{
        budgetApprovala:function(){
           return this.$store.state.BudgetYear
        }
     },
    components:{
       	   seeData,
           puliceCatalog,
           date,
           budgetTable
       },
       
   }
	
</script>
<style>
    .approvala{
   	 width: 97%;
     height: 92%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;
    margin-bottom: 1%;

   }
   .approvala_content{
       width: 96%;
       margin: 0px 20px;
   }
   .approvala_content>div:nth-child(2){
    border-bottom: 1px solid #edeef1;
    padding:15px 0px;
   }
   .approvala_content>div:nth-child(2) select{
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
    select:focus {
        outline:none;
    }
   /*select::-ms-expand { display: none; }*/
   .approvala_content>div:nth-child(2) div{
      display: inline-block;
   
   }
   .approvala_content>div:nth-child(2)>.btn{
      width: 66px;
      height: 34px;
      border-color: #fa8919;
      background-color: white;
   }
   .approvala_content>div:nth-child(2)>.btn:hover{
     background-color: #fa8919;
     color: white;
   }
   .approvala_content>div:nth-child(2) div input{
      height: 34px;
   }
   .approvala_content>div:nth-child(2) div:nth-child(2){
      margin: 0px 10px;
   }
   .approvala_content>div:nth-child(3){
    margin-top: 20px;
   }
    .form_heard span{
      font-size: 14px;
   }
   .form_heard{
    height:46px;
    margin-bottom: 0px;
    line-height: 46px;
    border-bottom:2px solid #edeef1;
   }

	
</style>