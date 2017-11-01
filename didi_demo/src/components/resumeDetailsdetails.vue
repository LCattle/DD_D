<template>
    <div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>岗位名称</label>
		 		 : {{interviewrd.POST_CODE}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>岗位分类 </label>
		 		 : {{interviewrd.POST_TYPE}}
		 	</div>
		 	
		</div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>费用分类 </label>
		 		 : {{interviewrd.COST_TYPE}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>直属上级 </label>
		 		 : {{interviewrd.HIGHERUP_NAME}}
		 	</div>
		 	
		 </div>
		 <div class="row">
		 	<div class="col-md-6">
		 		<label>需求数量 </label>
		 		 : {{interviewrd.NEEDSNUMBER}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>预计工作期限 </label>
		 		 : {{interviewrd.TELEPHONE}} 月
		 	</div>
		 	
		 </div>
		 <div class="row">
		 	<div class="col-md-6">
		 		<label>工作年限 </label>
		 		 : {{interviewrd.PROJECTEDDEADLINES}} 年
		 	</div>
		 	<div class="col-md-6">
		 		<label>工作地点 </label>
		 		 : {{interviewrd.WORKINGPLACE}}
		 	</div>
		</div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>预算范围 </label>
		 		 : {{interviewrd.SALARYRANGEB}}-{{interviewrd.SALARYRANGEE}} 元
		 	</div>
		 	<div class="col-md-6">
		 		<label>供应商 </label>
		 		 : {{interviewrd.SUPPLIER_NAME}}
		 	</div>
		</div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>期望入职日期 </label>
		 		 : {{interviewrd.BEGINTIME}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>发布日期 </label>
		 		 : {{interviewrd.BEGINTIME}}
		 	</div>
		</div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>岗位说明 </label>
		 		 : {{interviewrd.POSITIONINFORMATION}}
		 	</div>
		</div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>任职要求 </label>
		 		 : {{interviewrd.REQUIREMENTS}}
		 	</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:["interviewrd"]
	}
</script>

<style>
	div.row{
 		padding: 10px 0px;
 		font-size: 12px;
 	}
 	div.row>div>label{
 		 width: 100px;
 	}
</style>