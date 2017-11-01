<template>
	<div>
		<nav id="slide_nav">
		   <ul class="nav sidebar-nav">
		   	    <div class="logo">
		   	    </div>
	   	        <ul class="leftnav">
	   	     	    <li v-for="(nav,index) in navData" class="leftnav_list">
	   	     		    <img :src="nav.image"/>
	   	     		    <a href="javascript:void(0)" class>{{nav.title}} 
	   	     		    	<span class="nav_arrow_left" v-if="index>0"></span>
	   	     		    </a>
	   	     		    <ul>
	   	     				<li v-for="childs in nav.list" class="slideList">
	   	     					<router-link  :to="{path:childs.path}" >
	   	     						{{childs.chil}}
	   	     					</router-link>
	   	     				</li>
	   	     		    </ul>
	   	     	   </li>
	   	        </ul>
		    </ul>
	    </nav>
	    <stateNav></stateNav>
	</div>
</template>
<script>
	import stateNav from './stateNav.vue'
	import api from '../api/apis.js'
	export default {
		data(){
			return{
                navData:[
				    {
                        title:"首页",
                        image:require(".././assets/image/nav_icon_sy1.png"),
				    },
				    {
						title: "预算管理",
						list: [
							      {chil:"年度预算",path:'/budget/budgetList'},
							      {chil:"预算查询",path:'/budget/budgetSummaryQuery'},
							      {chil:"预算审批",path:'/budget/selectBudgetLowerDept'},
						      ],
						image:require(".././assets/image/nav_icon_ysgl1.png"),
					},
					{
						title: "需求管理",
						list: [
						        {chil:"需求查询",path:'/needs/findObjects'},
						        {chil:"需求审核",path:'/needs/findCheckList'},
						        {chil:"需求发布",path:'/needs/listUpNeeds'},
						       ],
						image:require(".././assets/image/nav_icon_xqgl1.png"),

					},
					{
						title: "面试管理",
						list: [
						        {chil:"简历筛选",path:'/cvdb/listCvdbScreening'},
						        {chil:"历史简历库",path:'/interview/InterviewResumeDatabase'},
						        {chil:"面试安排",path:'/interview/arrange'},
						        {chil:"面试反馈",path:'/interview/feedback'},
						        {chil:"报价审批",path:'/interview/offer'},
						      ],
						image:require(".././assets/image/nav_icon_msyq1.png"),
					},
					{
						title: "外包人员管理",
						list: [
						        {chil:"入场受理",path:'/personnel/admission',requestPath:""},
						        {chil:"请假管理",path:'/personnel/leave',requestPath:""},
						        {chil:"人员信息管理",path:'/personnel/information',requestPath:""},
						        {chil:"人员离场管理",path:'/personnel/departure',requestPath:""},
						      ],
						image:require('.././assets/image/nav_icon_rygl1.png'),
					},
					{
						title: "成本管理",
						list: [
						        {chil:"费用管理",path:'/cost/expense',requestPath:""},
						        {chil:"工时管理",path:'/cost/hours',requestPath:""},
						      ],
						image:require('.././assets/image/nav_icon_cbgl1.png'),
					},
					{
						title: "报表中心",
						list: [
						        {chil:"需求满足率",path:'/report/satisfied',requestPath:""},
						        {chil:"面试通过率",path:'/report/pass',requestPath:""},
						        {chil:"简历库汇总",path:'/report/summary',requestPath:""},
						        {chil:"人员花名册",path:'/report/personnel',requestPath:""},
						        {chil:"费用报表",path:'/report/expenses',requestPath:""}
						      ],
						image:require('.././assets/image/nav_icon_bbzx1.png'),
					},
					{
						title: "个人中心",
						list: [{chil:"个人信息",path:'/personal/information',requestPath:""}],
						image:require('.././assets/image/nav_icon_grzx1.png'),
					},
					{
						title: "系统管理",
						list: [
						        {chil:"公告配置",path:'/system/Notice',requestPath:""},
						        {chil:"供应商管理",path:'/system/supplier',requestPath:""}
						      ],
						image:require('.././assets/image/nav_icon_xtgl1.png'),
					},
				],
				Status:["待审批","审核中","已驳回","已撤销","待发布","已发布","待审核","已审核","已删除","已上传"]
			}
		},
		components: {
			stateNav,
		},
		mounted() {
            var _then=this.$store
			var than=this.$router
			var _this=this.$data
			//设置导航的高度
			$('#slide_nav').height($(window).height());
			
			//设置点击效果
			$(".leftnav_list").click(function(){
				$(this).children('a').css({"color":"#fa8919"}).parent().siblings('li').children('a').css({"color":"white"})
                
                //侧边栏slideDown
                $(this).children('ul').slideDown().parent().siblings().children('ul').slideUp()
				

				$(".nav_arrow_left").eq($(this).index()-1).toggleClass('nav_arrow_down');
			});
			
			//设置首页路径
			$(".leftnav>li:first-child").click(function(){
				 than.push('/home')
			})
			
            //根据窗口变动调整样式高度
			$(window).resize(function(event) {
				$('#slide_nav').height($(window).height());
			});
             //点击修改a标签样式
			$('.slideList').click(function() {
				var href=$(this).children()[0].href

				 // console.log(href)
				 // console.log(href.indexOf("0/")+2)
				// var beseUrl=href.substr(href.indexOf("0/")+2,href.le)
                
				


				href=href.substr(href.indexOf("/")+2,href.length)

				var beseUrl=href.substr(href.indexOf("/"),href.length)

				
				than.push(beseUrl)

				$(this).children().css({'color':"#fa8919"}).parent().siblings().children().css('color', 'white');
                /*侧边栏请求*/

                
                api.login.indexUserList(beseUrl).then((response) => {
                	 console.log(response.data)
         
                	$.each(response.body.data.list,function(index, el) {
				            el.STATUS=_this.Status[el.STATUS]
                            
                            if(this.PATHS){
                            	this.PATHS=el.PATHS.split('>')
				                if(this.PATHS.length == 1){
				                    this.PATHS.push("","")
				                }else if(this.PATHS.length == 2){
				                    this.PATHS.push("")
				                }
                            }
				            

			                if(el.COST_CODE == "costC_0301"){
                            this.COST_CODE="研发外包项目"
	                        }else if(el.COST_CODE == "costC_0302"){
	                             this.COST_CODE="研发外包员工"
	                        }else if(el.COST_CODE == "costC_0303"){
	                             this.COST_CODE="服务外包项目"
	                        }else{
	                            this.COST_CODE="服务外包员工"
	                        }
				    });

                    
                    if($(this)[0].innerText === _this.navData[1].list[0].chil){
                   	    _then.state.BudgetYear=response.body.data.list    
                    }else if($(this)[0].innerText === _this.navData[2].list[0].chil){
                    	_then.state.NeedsSearch=response.body.data.list
                    }else if($(this)[0].innerText === _this.navData[1].list[1].chil){
                        _then.state.BudgetSearch=response.body.data
                    }else if($(this)[0].innerText === _this.navData[2].list[1].chil){
                    	_then.state.NeedsRequest=response.body.data.list
                    }else if($(this)[0].innerText === _this.navData[2].list[2].chil){
                    	_then.state.NeedsRelease=response.body.data.list

                    }else if($(this)[0].innerText === _this.navData[3].list[0].chil){
                    	  _then.state.InterviewResume=response.body.data.list

                    	  console.log( _then.state.InterviewResume)

                    }

                    console.log(response)

	            }, (err) => {
	           	    console.log(err)
	            }

		    )
		})
	}
}
</script>

<style>
	@import '../assets/css/slideNav.css'
	
</style>