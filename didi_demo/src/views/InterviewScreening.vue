
<template>
	<div>
		<puliceCatalog :scataLog="interviewSe"></puliceCatalog>
		<div class="interview_se">
			<div class="interview_se_content">
	            <div class="form-group form_heard">
	                <img src="../assets/image/title_address.png">
	                <span>简历筛选</span>
	            </div>
	            <div class="form-group interview_search" >
	            	<InterviewSearch></InterviewSearch>
	            </div>
	            <div class="form-group interview_table">
	            	<form>
		            	<table class="table table-condensed">
		            		<thead>
			            		<tr>
			            		<!-- colspan="2" rowspan="2"-->
			            			<td>
			            				<input type="checkbox" @click="checkboxAll">
			            				<label>全选</label>
			            			</td>
			            			<td colspan="8">
			            				<button type="button" class="btn btn-default">
			            			        <img src="../assets/image/jl_yes.png"/>通过
			            			    </button>
			            				<button type="button" class="btn btn-default">
			            				    <img src="../assets/image/jl_no.png"/>不通过
			            			    </button>
			            				<button type="button" class="btn btn-default">
			            				    转签<img src="../assets/image/jl_zhuanqian.png">
			            			    </button>
			            			</td>
			            			<td>
			            				<img src="../assets/image/jl_xqdh2.png">
			            				<label>需求单号</label>
			            			</td>
			            			<td>
			            				<img src="../assets/image/jl_scsj1.png">
			            				<label>上传时间</label>
			            			</td>
			            			<td>
			            				<label>共有<span></span>份简历</label>
			            			</td>
			            		</tr>
		            		
		            		</thead>
		            		<tbody class="tbody_content">
			            		<tr>
			            			<td></td>
		            				<td>需求单号</td>
		            				<td>姓名</td>
		            				<td>岗位名称</td>
		            				<td>供应商</td>
		            				<td>工作年限</td>
		            				<td>学历</td>
		            				<td>上传时间</td>
		            				<td>预览下载</td>
		            				<td colspan="3">操作</td>
			            		</tr>

			            		<tr v-for="dataList in interviewSelistData" :needsId="dataList.NEEDSCVID" >
		            				<td>
		            					<input type="checkbox" name="" />
		            				</td>
		            				<td>{{dataList.NEEDS_CODE}}</td>
		            				<td>{{dataList.NAME}}</td>
		            				<td>{{dataList.POST_CODE}}</td>
		            				<td>{{dataList.SUPNAME}}</td>
		            				<td>{{dataList.WORKEXPERIENCE}}</td>
		            				<td>{{dataList.EDUCATIONLABLE}}</td>
		            				<td>{{dataList.CREATEDATE}}</td>
		            				<td>
                        <img src="../assets/image/jl_download1.png"/>
		            				<img src="../assets/image/jl_look1.png"/>
		            				</td>
		            				<td colspan="3" class="interviewListBtn" :needsId="dataList.NEEDSCVID">
		            					<button type="button" class="btn btn-default" data-toggle="modal" data-target="#interViewModal">通过</button>
										      <button type="button" class="btn btn-default" data-toggle="modal" data-target="#interViewModal">不通过</button>
		            					<button type="button" class="btn btn-default" data-toggle="modal" data-target="#interViewModal">转签</button>
		            					<!-- Modal -->
      											<div class="modal fade" id="interViewModal"aria-labelledby="myModalLabel">
      											  <div class="modal-dialog" role="document">
      											    <div class="modal-content">
      											    	<div>
      													      <div class="modal-header">
      													        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      													        <h5 class="modal-title">简历筛选</h5>
      													      </div>
      													       <div class="modal-body">
      													      	 <h5>确定将此简历标记为{{}}吗？</h5>
      													      	 <div class="form-group">
      													      	 	<p>简历反馈:</p>
      													      	 	<textarea placeholder="请输入简历反馈" v-model="Ifeedback"></textarea>
      													      	 </div>
      													      </div>
      															<!-- <VueTree :model="treeData"></VueTree> -->
      														    <div class="modal-footer">
      														        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
      														        <button type="button" class="btn" @click="interviewRequir">确定</button>
      														    </div>
      													    </div>
      											    </div>
      											  </div>
      											</div>
										<!--endModal-->
		            				   </td>
  


			            		</tr>

		            		</tbody>	
		            		
		            	</table>
	            	</form>

	            	
	            </div>
	        </div>
		 	 
		</div>
	</div>
	
</template>

<script >
  import puliceCatalog from "../components/puliceCatalog.vue"
  import InterviewSearch from "../components/InterviewSearch.vue"
  import VueTree from "../components/vueTree.vue"
  import api from "../api/apis.js"
  export default{
  	 data(){
  	 	return{
        
  	 		interviewSe:[
                {title:"首页",path:"/home"},
                {title:"面试管理",path:"/interview/InterviewScreening"},
                {title:"简历筛选",path:"/interview/InterviewScreening"}
            ],
            checkFlag:true,
            Ifeedback:'',
   //          treeData:{
			//   name: 'My Tree',
			//   children: [
			//     { name: 'hello' },
			//     { name: 'wat' },
			//     {
			//       name: 'child folder',
			//       children: [
			//         {
			//           name: 'child folder',
			//           children: [
			//             { name: 'hello' },
			//             { name: 'wat' }
			//           ]
			//         },
			//         { name: 'hello' },
			//         { name: 'wat' },
			//         {
			//           name: 'child folder',
			//           children: [
			//             { name: 'hello' },
			//             { name: 'wat' }
			//           ]
			//         }
			//       ]
			//     }
			//   ]
			// }
         }
   
  	 },
     computed:{
        interviewSelistData:function(){
           return this.$store.state.InterviewResume
        },
        feedback:function(){
            return this.$data.Ifeedback
        }
     },
  	 components:{
    	 	puliceCatalog,
    	 	InterviewSearch,
  	 	// VueTree
  	 },
  	 methods:{
  	 	  checkboxAll(){
            if(this.$data.checkFlag){
              $("tbody>tr>td").find('input').attr({"checked":"checked"})
             }else{
            	$("tbody>tr>td").find('input').removeAttr("checked")
            }
            this.$data.checkFlag=!this.$data.checkFlag
  	 	  },
        //简历操作状态请求
        interviewRequir(e){

          // this.$store.dispatch("setAjax","interview/editInterviewStatusById.do?cvId="+$('.interviewListBtn').attr("needsId")+"&feedback="+this.feedback+"&status=2")
            
        }
  	 },
  	 mounted(){
    	 	    var _this=this.$router
            var _then=this.$store
            //Model--通过/不通过/转签 
        	 	$('#myModal').on("shaw.bs.modal",function(){
        	 		$('#myModal').focus()
        	 	});
                 
             //跳转简历详情
            $(".tbody_content").delegate('tr','click', function(e) {
                if($(e.target).is('input')||$(e.target).is('.btn')){
                     return
                }else{
                   console.log(111)
                   api.setting.getInterviewDatails({needsCvId:"1"}).then( (response) => {
                        console.log(response)
              
                   })
                  // _then.dispatch("setAjax","cvdb/listNeedsCvdbDetails.do?needsCvId=1")
                   _this.push("/interview/InterviewResumeDetails")

                   console.log($(this).attr("needsId"))
                }
    	    	});

  	 }
  }
	
</script>

<style>
   .interview_se{
   	width: 97%;
   	height: 94%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;
   }
   .interview_search{
   	  width: 100%;
   	  white-space:normal;
   }
    .form_heard span{
      font-size: 14px;
   }
   .form_heard{
    height:46px;
    width: 100%;
    margin-bottom: 0px;
    line-height: 46px;
    border-bottom:2px solid #edeef1;
   }

   .interview_se_content{
      width: 96%;
      margin: 0px 20px;
   }
   
   .modal-content{
   	  width:710px;
   	  margin-top: 48%;
   }
   .modal-content>div{
   	  width: 96%;
   	  margin: auto;
   }
   .modal-header{
   	  border-bottom: 2px solid #fb9b3e;
   	  text-align: left;
   }
   .modal-body{
   	  text-align: left;
   }
   .modal-body textarea{
   	  width: 594px;
   	  height: 60px;
   	  border-color: #f1f1f1;
   	  margin-top: 20px;
   	  resize: none;
   	  text-indent: 0.5em;
   	  color: #b0b0b0;
   }
   .modal-body textarea:hover{
   	  border-color: #fb9b3e;
   	  color: #fb9b3e;
   }
   .modal-body>h5{
   	  font-size: 16px;
   }
   .modal-body p{
   	 display: inline-block;
   	 position: relative;
   	 bottom: 27px;
   	 font-size: 12px;
   	 color: #b0b0b0;
   }
   .modal-footer>.btn{
   	  width: 64px;
   	  height: 34px;
   	  color: #b0b0b0;
   	  border: 1px solid #b0b0b0;
   }
   .modal-footer>.btn:first-child:hover{
      background: #b0b0b0;
      color: white;
   }
    .modal-footer>.btn:last-child{
    	 background: #fb9b3e;
    	 border: 0px;
    	 color: white;
    }
    .modal-footer>.btn:last-child:hover{
    	background: #fb8612;
    };
    form>.table-condensed>thead>tr>td>button.btn,.btn{
   	  color: white;
   	  border: 0px;
   }
    form>.table-condensed>thead>tr>td>button.btn{
   	 font-size: 12px;
   	 width: 80px;
   	 margin-right: 8px;
   }
    form>.table-condensed>thead>tr>td:nth-child(2),
    form>.table-condensed>thead>tr>td:nth-child(3),
    form>.table-condensed>thead>tr>td:nth-child(4){
     	width: 100px;
     }
    form>.table-condensed>tbody>tr>td{
   	  font-size: 12px;
       border: 0px;
       width: 7%;
   }
   form>.table-condensed>tbody>tr:first-child{
   	  color: #b0b0b0;
   	  text-align: center;
   }
   form>.table-condensed>tbody>tr:first-child>td{
   	  line-height: 40px;
   }
   form>.table-condensed>thead>tr,form>.table-condensed>thead>tr>td,form>.table-condensed>tbody>tr{
   	 border: 1px solid #f1f1f1;
   }
   form>.table-condensed>thead>tr{
   	   background:#fafafa;
   }
   form>.table-condensed>thead>tr>td{
   	  line-height: 30px;
   	  text-align: center;
   }
   form>.table-condensed>thead>tr>td>button.btn{
   	border:0px;
   	color: white;
   	float: left;
   }
   form>.table-condensed>thead>tr>td>button.btn:first-child{
   	  background-color: #2bc27f;
   }
   form>.table-condensed>thead>tr>td>button.btn:first-child:hover{
   	  background: #01b163;
   }
   form>.table-condensed>thead>tr>td>button.btn:nth-child(2){
   	  background-color: #fb9b3e;
   }
   form>.table-condensed>thead>tr>td>button.btn:nth-child(2):hover{
   	  background-color: #fa8109;
   }
   form>.table-condensed>thead>tr>td>button.btn:nth-child(3){
   	  background-color: #fee8c1;
   	  color: #fa8919;
   }
   form>.table-condensed>thead>tr>td>button.btn:nth-child(3):hover{
   	  background: #ffc7a2;
   }
   form>.table-condensed>tbody>tr>td>button.btn{
   	   padding: 4px 11px;
   	   margin: 0px 4px ;
   	   border:0px;
   	   width: 54px;
   	   color: white;
   }
   form>.table-condensed>tbody>tr>td{
   	 text-align: center;
   }
   form>.table-condensed>tbody>tr>td>button.btn:first-child{
   	   background-color: #ff9332;
   }
   form>.table-condensed>tbody>tr>td>button.btn:nth-child(2){
   	   background-color: #f25d44;
   }
   form>.table-condensed>tbody>tr>td>button.btn:nth-child(3){
   	   background-color: #00c57d;
   }
   form>.table-condensed>tbody>tr>td:last-child{
   	  width: 22%;
   }
   form>.table-condensed>tbody>tr>td:first-child{
   	  width: 6%;
   }
    form>.table-condensed>tbody>tr>td>button.btn:focus{
    	outline:none;
    	color: white;
    }
    form>.table-condensed>tbody>tr>td>button.btn:hover{
    	color: white;
    }
    .tbody_content>tr:first-child:hover{
    	background: white;
    }
   .tbody_content>tr:hover{
   	 background: #fafafa;
   }

	
</style>