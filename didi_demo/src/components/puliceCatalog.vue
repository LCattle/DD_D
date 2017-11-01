<template>
	<div class="search_log">
		<img src="../assets/image/title_home.png"/>
		<router-link :to="{path:details.path}" v-for="details in scataLog" :key="details.id">
			{{details.title}}
			<span>/</span>
		</router-link>
	</div>
</template>

<script>
   export default{
      props:["scataLog"],
   }
	
</script>

<style>
   .search_log{
   	width: 97%;
   	margin: auto;
   	line-height: 38px;
    font-size: 12px;
    
   }
   .search_log span{
      color: #d3d5d8;
      display: inline-block;
      margin:0px 5px;
    }
   .search_log a{
     color: #a8acb0;
   }
   .search_log a:hover{
   	 text-decoration: none;
   	 color: black;
   }
   .search_log>a:last-child span{
        color:#edeef1;
    }
    .search_log a:last-child{
      color: black;
    }
	
</style>