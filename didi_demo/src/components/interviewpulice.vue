<template>
	<div class="candidate_information">
        <div class="information">
        	<div>
         	    <img src="../assets/image/jl_photo.png"/>
         	</div>
         	<h4>{{interviewrd.CVDBNAME}}</h4>
         	<p><span>应聘岗位 : </span>{{interviewrd.POST_CODE}}</p>
         	<div>
         		<button class="btn btn-dafault">预览简历</button>
         		<button class="btn btn-dafault">下载简历</button>
         	</div>
        </div>
        <ul @click="infoTab">
     		<li class="active" v-for="(interviewList,index) in interviewList">
     			<span class="active:index==0"></span>
     			<router-link :to="interviewList.path">{{interviewList.title}}</router-link>
     		</li>
        </ul>
	</div>
</template>

<script>
 export default{
 	  props:["interviewrd","interviewList"],
 	  methods:{
   	 	infoTab(e){
          $(e.target).addClass('active').siblings('li').removeClass('active')
          $(e.target).children().addClass('active').parent().siblings().children().removeClass("active")
   	 	}

   	 },

 }
	
</script>

<style>
    .candidate_information{
      width:22rem;
      float: left;
    }
 	.candidate_information>.information{
 		  background: #fea44d;
 	}
 	.candidate_information>.information>div>img{
 		text-align: center;
 		margin-top: 25px;
 		margin-bottom: 17px;
 	}
 	.candidate_information>.information>h4{
 		text-align: center;
 		color: white;
 	}
 	.candidate_information>.information>p,
 	.candidate_information>.information>p>span{
 		color: white;
 		text-align: center;
 		font-size: 12px;
 	}
 	.candidate_information>.information>div{
 		  text-align: center;
 	}
 	.candidate_information>.information>div>.btn{
 		width: 80px;
 		border-radius:4px;
 		color: white;
 		border:0px;
 		margin: 20px 4px;
 		 background: #feb368;
 	}
 	.candidate_information>.information>div>.btn:hover{
 		background: #fd942f;
 	}
 	.candidate_information>ul{
 		padding: 0px;
 	}
 	.candidate_information>ul>li{
 		width:100%;
 	    height: 50px;
 	    line-height: 50px;
 	    background: white;
 	    border-top: 1px solid #dbdad6;
 	    text-indent: 2em;
 	    font-size: 14px;
 	    color: #636363;
 	    text-decoration: none;
 	}
 	.candidate_information>ul>li>span{
 		display: inline-block;
 		float: left;
 		width:4px;
 		height: 50px;
 		text-indent: 0em;
 	}
 	.candidate_information>ul>li>span.active{
 		background: #fea44d;
 	}
 	.candidate_information>ul>li.active,.candidate_information>ul>li:hover{
 		background: #f8f8f8;
 	}
	
</style>