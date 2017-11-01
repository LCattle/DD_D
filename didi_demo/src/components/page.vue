<template>
	<div class="form-group page">
      <nav aria-label="Page navigation">
			<ul class="pagination">
			    <li><a href="javascript:void(0)" aria-label="Previous">上一页</a> </li>
			    <li><a href="javascript:void(0)" class="active">1</a></li>
			    <li><a href="javascript:void(0)" aria-label="Next">下一页</a> </li>
		  </ul>
	<!-- 	   <div class="input-group">
                <input type="text" placeholder="输入页码">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go</button>
                </span>
            </div> -->
		</nav>
	</div>
</template>

<script>
	export default{}
</script>

<style>
   .page{
      width: 92%;
    }
    .page>nav{
        width: 400px;
        margin: auto;
    }
    .pagination>li>a{
    	color: #3a3a3a;
    	padding: 7.5px 14.49px
    }
    .pagination>li:first-child>a{
    	border-radius: 0px;
    	margin: 0px 10px;
    }
    .pagination>li:last-child>a{
        border-radius: 0px;
        margin-left:10px;
    }
    .pagination>li>a.active{
         background: #fa8919;
         color: white;
    }
    .input-group input,.input-group .btn{
    	height: 34px;
    	width: 38px;
    }
    .input-group input{
    	 width: 70px;
    	 background: #f7f7f7;
    	 border-width: 0;
    	 border:1px solid #e2e3e5;
    	 bottom: 2px;
    	 text-align: center;
    	 color: #b0b0b0;
    }
    .input-group .btn{
    	border-left:0;
        position: relative;
        right: 3px;
        bottom: 4px;

    }
    .page .input-group {
        position: relative;
        bottom: 30px;
    }
	
</style>
