<template>
	<div>
		<puliceCatalog :scataLog="needsRelease"></puliceCatalog>
			<div class="needs_release"> 
				<div class="release_content">
				<div class="form-group form_heard">
	                <img :src="catalogIcon">
	                <span>{{title}}</span>
	            </div>
				<needsTitle :postCo="postCode"></needsTitle>
	          <tables :tableTitle="tableTitle" :tableBody="tableBodyData" :operationBtn="operationBtn"></tables>
	        </div>
        </div>
	</div>
</template>

<script>
   import puliceCatalog from "../components/puliceCatalog.vue"
   import needsTitle from "../components/needsTitle.vue"
   import tables from '../components/tables.vue'
   export default{
   	   data(){
   		   return{
   		   	    title:"需求发布",
   		   	    needsRelease:[
   		   	    	{title:"首页",path:"/home"},
   		   	    	{title:"需求管理",path:"/needs/release"},
   		   	    	{title:"需求发布",path:"/needs/release"}
   		   	    ],
   		 	    tableTitle:["需求单号","一级部门","二级部门","三级部门","岗位名称","需求人员","申请时间","状态","操作"],
            catalogIcon:require("../assets/image/title_address.png"),
   		}
   	},
    computed:{
         tableBodyData:function(){
              return this.$store.state.NeedsRelease
         },
         operationBtn:function(){
             return this.$store.state.operationBtn
         },
         postCode:function(){
            return this.$store.state.requestData
         }
    },
   	 mounted(){
  	    	var than=this.$data
  	    	var then=this.$router
           $("tbody>tr>td:last-child").on("click",function(){
               then.push("request/requrstList")
           })

  	    },
      components:{
      	puliceCatalog,
      	needsTitle,
      	tables,
      }
   }
	
</script>

<style>
   .needs_release{
   	width: 97%;
   	height: 91%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;

   }
   .release_content{
   	 width: 96%;
   	 height: 100%;
   	 margin: auto;

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