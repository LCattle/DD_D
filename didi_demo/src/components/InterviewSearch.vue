<template>
	<form class="form-inline">
		<div class="form-group">
			<label>需求单号:</label>
			<input type="text" name="" class="form-control"/>
		</div>
		<div class="form-group">
			<label>岗位名称:</label>
			<select>
					<option>全部</option>
			</select>
		</div>
		<div class="form-group">
			<label>供应商:</label>
			<select>
					<option>全部</option>
			</select>
		</div>
		<div class="form-group">
			<label>工作年限:</label>
			<select>
					<option>全部</option>
			</select>
		</div>
		<div class="form-group">
			<label >学历:</label>
			<select>
					<option>全部</option>
			</select>
		</div>
		<div class="form-group">
			<button class="btn btn-default interview_search_btn" name="search" >查询</button>
			
		</div>
		
	</form>
</template>

<script>
  export default{
  	
  }
	
</script>

<style>
   form>.form-group{
    margin-bottom: 15px;
   }
   .form-inline>.form-group>input.form-control{
      width: 190px;
   }
   form>.form-group{
    margin: 15px 20px;
   }
   form>.form-group>.interview_search_btn{
      border: 1px solid #fa8919;
      color: #fa8919;
   }
   form.form-inline input{
      border-radius: 0px;
      box-shadow: none;
      background: white;
      -webkit-box-shadow:none;
      -moz-box-shadow:none;
      -ms-box-shadow:none;
   }
    form>.form-group>input,form>.form-group>select{
      width:190px;
      height: 34px;
      margin-right:30px;
      background: #fcfcfc;
      text-indent: 0.5em;
      font-size: 12px;
      color: #3a3a3a;
   }
   
	

</style>