<template>
    <div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>姓名</label>
		 		 : {{interviewrd.CVDBNAME}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>学历 </label>
		 		 : {{interviewrd.EDUCATION_CODE}}
		 	</div>
		 	
		</div>
		<div class="row">
		 	<div class="col-md-6">
		 		<label>工作经验 </label>
		 		 : {{interviewrd.WORKEXPERIENCE}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>在离职状态 </label>
		 		 : {{interviewrd.CURRENTSTATUS_CODE}}
		 	</div>
		 	
		 </div>
		 <div class="row">
		 	<div class="col-md-6">
		 		<label>最快到岗时间 </label>
		 		 : {{interviewrd.POSTTIME}}
		 	</div>
		 	<div class="col-md-6">
		 		<label>联系电话 </label>
		 		 : {{interviewrd.TELEPHONE}}
		 	</div>
		 	
		 </div>
		 <div class="row">
		 	<div class="col-md-6">
		 		<label>推荐理由 </label>
		 		 : {{interviewrd.REASON}}
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