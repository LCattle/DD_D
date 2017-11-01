<template>
	<div>
		  1111111
		<!-- <puliceCatalog :scataLog="interview_rds"></puliceCatalog>
		 <div class="interview_rde">
      <interviewpulice :interviewrd="interviewrd" :interviewList="interviewList"></interviewpulice>
			<div class="candidate_details">
				<div>
					<textarea placeholder="请输入简历反馈"></textarea>
					<div class="from-group resumeStatus" :resumeData="interviewrd.CVDBID">
						<button type="button" class="btn btn-dafault">简历通过</button>
						<button type="button" class="btn btn-dafault">简历不通过</button>
						<button type="button" class="btn btn-dafault">转签</button>
					</div>
				</div>
				<div>
					<div class="user_info">
						<h5>候选人信息</h5>
						<keep-alive>
						       <router-view :interviewrd="interviewrd"></router-view>
					 </keep-alive>
					</div>
				</div>
				
			</div>
		</div> -->
    </div> 

	
</template>

<script>
   import puliceCatalog from "../components/puliceCatalog.vue"
   import interviewpulice from "../components/interviewpulice.vue"
   export default {
   	 data(){
   	 	 return{
   	 	 	interview_rds:[
                {title:"首页",path:"/home"},
                {title:"面试管理",path:"/interview/InterviewScreening"},
                {title:"简历筛选",path:"/interview/InterviewScreening"},
                {title:"简历筛选详情",path:"/interview/InterviewResumeDetails"}
            ],
        interviewList:[
             {title:"候选人信息",path:"/interview/InterviewResumeDetails/info"},
             {title:"需求详情",path:"/interview/InterviewResumeDetails/bulis"}
          ]
   	 	 }
   	 },
   	 computed:{
   	 	interviewrd:function(){
   	 		return this.$store.state.searchData
   	 	}
   	 },
   	 components:{
     	 	puliceCatalog,
        interviewpulice

   	 },
   	 mounted(){
   	 	 var _this=this.$store
   	 	 $(".resumeStatus").delegate('button.btn', 'click', function(event) {
            _this.dispatch("setAjax","interview/editInterviewStatusById.do?cvId=1&feedback="+$("textarea").val()+"&status=2")
   	 	 });
   	 }
   }
	
</script>

<style>
	.interview_rde{
		 width: 97%;
	   	height: 94%;
	    position: absolute;
	    margin-left: 1.5%;
	}
	
	.interview_rde>.candidate_details{
		  float: right;
		  width: 75%;
	}

 	.interview_rde>.candidate_details>div:first-child textarea{
 		  resize: none;
 		  width: 100%;
 		  height: 80px;
 		  background: white;
 		  border: none;
 		  text-indent: 1em;
 		  font-size: 12px;
 		  color: #b0b0b0;
 	}
 	.interview_rde>.candidate_details>div:first-child div{
 		width: 100%;
 		height: 60px;
 		background: #f8f8f8;
 		line-height: 60px;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn{
 		  width: 80px;
 		  color: white;
 		  font-size: 12px;
 		  margin-left: 20px;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn:first-child{
 		background: #2bc27f;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn:first-child:hover{
 		background: #01b263;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn:nth-child(2){
 		background: #fea146;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn:nth-child(2):hover{
 		background: #f87d03;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn:nth-child(3){
 		background: #fee8c1;
 		width: 70px;
 		float: right;
 		margin-top: 15px;
 		margin-right: 20px;
 		color: #fa8919;
 	}
 	.interview_rde>.candidate_details>div:first-child div>.btn:nth-child(3):hover{
 		background: #ffdc9f;
 	}
 	.interview_rde>.candidate_details>div:nth-child(2){
 		width: 100%;
 		background: white; 
 	}
 	.interview_rde>.candidate_details>div:nth-child(2) h5{
 		padding: 15px 0px;
 		border-bottom:2px solid #f1f1f1;
 	}
 	.interview_rde>.candidate_details>div:nth-child(2)>.user_info{
 		  width: 96%;
 		  margin: auto;
 		  padding-bottom: 10px;
 	}



	
</style>