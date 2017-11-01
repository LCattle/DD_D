<template>
	<div>
		<puliceCatalog :scataLog="needsSearchRequest"></puliceCatalog>
		<div class="needs_search_request">
			<div class="needsSearchr_content">
				<div class="form-group form_heard">
	                <img :src="catalogIcon">
	                <span>{{title}}</span>
                </div>
                <div class="form-group needs_template">
                	<button class="btn btn-default">一键生成模版</button>
                	<div>
                		<div class="form-group">
				            <label class="slide_l">使用模版</label>
				            <span class="slide_te" @click="Down">
				                <span>全部</span>
				                <span >
				                    <i class="glyphicon glyphicon-menu-down"></i>
				                </span>
				                <ul class="down_hiden" @click="classify">
				                    <li class="active">11111</li>
				                    <li>22222</li>
				                    <li>333333</li>
				                    <li>44444</li>
				                </ul>
				            </span>
				        </div>
                	</div>
                	
                </div>
                <form class="form-group request_table form-inline" action="http://10.39.137.104:8080/didiopms/needs/createdemt.do" >
                	<div class="form-group">
                        <div class="form-group">
    				        <label>岗位名称:</label>
    				        <div class="input-group">
                                <input type="text" name="postCode" class="form-control" aria-label="..." placeholder="请选择岗位名称">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span>
                                        </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                      <li>Action</li>
                                      <li>Another action</li>
                                      <li>Something else here</li>
                                      <li>Separated link</li>
                                    </ul>
                                  </div>
                             </div>
                         </div>
                         <div class="form-group">
                           <label>岗位分类:</label>
                            <div class="input-group">
                                <input type="text" name="postType" class="form-control" aria-label="..." placeholder="请选择岗位分类">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span>
                                        </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                      <li>Action</li>
                                      <li>Another action</li>
                                      <li>Something else here</li>
                                      <li>Separated link</li>
                                    </ul>
                                  </div>
                             </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group">
                            <label>费用分类:</label>
                            <div class="input-group">
                                <input type="text" name="costType" class="form-control" aria-label="..." placeholder="请选择费用分类">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span>
                                        </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                      <li>Action</li>
                                      <li>Another action</li>
                                      <li>Something else here</li>
                                      <li>Separated link</li>
                                    </ul>
                                  </div>
                             </div>
                         </div>
                         <div class="form-group">
                           <label>直属上级:</label>
                            <div class="input-group">
                                <input type="text" name="higherupId" class="form-control" aria-label="..." placeholder="请选择直属上级">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span>
                                        </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                      <li>Action</li>
                                      <li>Another action</li>
                                      <li>Something else here</li>
                                      <li>Separated link</li>
                                    </ul>
                                  </div>
                             </div>
                        </div>
                    </div>
                    <!--3-->
                    <div class="form-group">
                        <div class="form-group">
                            <label>需求数量:</label>
                            <input name="needsnumber" type="text" class="form-control inp" placeholder="请选择需求数量"/> 人
                        </div>
                        <div class="form-group">
                            <label>预计工作期限:</label>
                            <input name="projecteddeadlines" type="text" class="form-control inp" placeholder="请输入预计工作期限">
                        </div>
                    </div>
                     <!--4-->
                    <div class="form-group">
                        <div class="form-group">
                            <label>工作年限:</label>
                            <input name="workLife" type="text" class="form-control inp" placeholder="请输入工作年限"/> 年
                        </div>
                        <div class="form-group">
                            <label>工作地点 :</label>
                            <input name="workingplace" type="text" class="form-control inp" placeholder="请输入工作地点">
                        </div>
                    </div>
                     <!--5-->
                    <div class="form-group">
                        <div class="form-group">
                            <label>工资范围:</label>
                            <input name="salaryrangeb" type="text" class="form-control"/>
                            <span class="mony">至</span>
                            <input name="salaryrangee" type="text" class="form-control "/>
                            元
                        </div>
                         <div class="form-group">
                           <label>供应商:</label>
                            <div class="input-group">
                                <input name="suppliertypeCode" type="text" class="form-control" aria-label="..." placeholder="请选择供应商">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span>
                                        </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                      <li>Action</li>
                                      <li>Another action</li>
                                      <li>Something else here</li>
                                      <li>Separated link</li>
                                    </ul>
                                  </div>
                             </div>
                        </div>
                    </div>
                     <!--6-->
                    <div class="form-group">
                        <div class="form-group">
                            <label>期望入场日期:</label>
                            <input name="begintime" type="text" class="form-control inp" placeholder="请选择期望入场日期"/>
                        </div>
                        <div class="form-group">
                            <label>发布日期:</label>
                            <input name="uploadTime" type="text" class="form-control inp" placeholder="请选择发布日期">
                        </div>
                    </div>
                     <!--7-->
                    <div class="form-group explain">
                        <div class="form-group">
                            <label>岗位说明:</label>
                            <textarea name="positioninformation" placeholder="请输入岗位说明"></textarea>
                        </div>
                    </div>
                    <!--8-->
                    <div class="form-group explain">
                        <div class="form-group">
                            <label>任职要求:</label>
                            <textarea name="requirements" placeholder="请输入任职要求"></textarea>
                        </div>
                    </div>
                    <!--btn-->
                    <div class="form-group">
                            <button class="btn btn-default" type="submit">提交</button>
                            <button class="btn btn-default">取消</button>
                    </div>


                    
                </form>
		    



            </div>
			
		</div>
	</div>
	
</template>

<script>
    import puliceCatalog from "../components/puliceCatalog.vue"
    export default{
    	data(){
    		return{
    			needsSearchRequest:[
                    {title:"首页",path:"/home"},
                    {title:"需求管理",path:"/needs/search"},
                    {title:"需求查询",path:"/needs/search"},
                    {title:"需求申请",path:"/needs/search/request"}
                ],
                catalogIcon:require("../assets/image/title_address.png"),
                title:"需求申请",
    		}
    	},
    	methods:{
            Down(e){
                $('.down_hiden').slideToggle()
                if(this.$flag){
                    $("i").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-up")
                }else{
                    $("i").removeClass("glyphicon glyphicon-menu-up").addClass("glyphicon glyphicon-menu-down")
                }
               this.$flag=!this.$flag
            },
            classify(e){
                $('.slide_texa').find('span:first-child').html($(e.target)[0].innerText)
            },
    	},
       components:{
       	 puliceCatalog,
       }
    }
	
</script>

<style>
   .needs_search_request{
   	width: 97%;
   	height: 100%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;

   }
   .needsSearchr_content{
   	width: 96%;
    margin: auto;
   }
   .needs_template{
   	  width: 100%;
      height: 40px;

   }
    .needs_template .form-group{
    	float: right;
    	position: relative;
   	  bottom: 46px;
    }
    .slide_te{
    	display: inline-block;
    	width: 220px;
    	height: 34px;
    	border: 1px solid red;
    }
    .down_hiden{
          display: none;
    }
    .slide_te>span:first-child{
    width: 88%;
    display: inline-block;
    height: 100%;
    text-indent: 0.5em;
    }
    .slide_te>span{
    	line-height: 31px;
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
   .needs_template .btn{
   	  margin: 20px 0px;
   	  background: #fb9b3e;
   	  color: white;
   	  border: 0px;
   	  height: 36px;
   	  width: 100px;
   	  margin: 10px 0px;
   }
   .slide_l{
   	float: left;
    margin-right: 10px;
    margin-top: 8px;
   }
   .request_table{
   	  width: 100%;
   	  border: 1px solid #f1f1f1;
      position: absolute;
   }
   .request_table>.form-group{
      display: inline-block;
      width: 100%;
      margin-top: 15px; 

   }
   .request_table>.form-group>.form-group{
     width: 49.5%;
     display: inline-block;
   }
   .request_table>.form-group:nth-child(7)>.form-group,.request_table>.form-group:nth-child(8)>.form-group{
       width: 92.5%;
   }
   .request_table>.form-group>.form-group .btn{
      height: 34px;
   }
   .request_table>.form-group:nth-child(8)>.form-group textarea{
      height: 90px;
   }
   .request_table>.form-group:last-child{
      width: 100%;
      margin-bottom: 20px;

   }
   .request_table>.form-group:last-child>.btn{
       width: 100px;
       margin: 0px 3px;
       border-color: #fa8919;
    color: #fa8919;
    background: white; 
   }
   .request_table>.form-group:last-child>.btn:first-child{
      margin-left: 10.5%;
   }
   .request_table>.form-group:last-child>.btn:last-child{
      border-color: #b0b0b0;
      color: #b0b0b0;
   }
   .request_table>.form-group>.form-group input,textarea{
     border-radius: 0px;
     font-size: 12px;
   }
   .request_table>.form-group label{
      display: inline-block;
      width: 100px;
      line-height: 34px;
      float: left;
      margin-right: 8px;
      text-align:right;
      /*width: 0px;*/
   }
   .form-inline>.form-group>.form-group .inp{
      width: 63%;
   }
   .explain{
      width: 100%;
   }
   .explain>.form-group {
    width: 100%;
   }

   .explain>.form-group textarea{
       width: 88%;
       height: 60px;
        resize: none
   }
   .request_table input,textarea{
      box-shadow: none;
      -webkit-box-shadow:none;
      -ms-box-shadow:none;
      -moz-box-shadow:none;
      background:#fcfcfc;
      border-color: #f1f1f1;
   }
   .request_table .btn{
       border-color: #f1f1f1;
       background: #f5f5f5;
   }
   .form-inline>.form-group>.form-group .input-group{
      width: 69%;
   }
   textarea:focus,.request_table input:focus{
      outline:none;
       border: 1px solid #fa8919;
       box-shadow: none;
    }
    .mony{
        display: inline-block;
        margin: 0px 3px;
    }
	
</style>