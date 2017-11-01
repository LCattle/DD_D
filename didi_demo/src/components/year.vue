<template>
	<div>
		<div id="budget_year">
			<div class="catelog">
				<img src="../../assets/image/title_home.png"/>
				<router-link :to="{path:'/budget/year'}" v-for="details in catalog">{{details}}<span>/</span></router-link>
			</div>
	    	<div class="year_content">
  		         <form>
                    <div class="form-group form_heard">
                        <img src="../../assets/image/title_address.png">
                        <span  >{{title}}</span>
                        <button type="button" class="btn btn-default pull-right" @click="applied">年度预算申请</button>
                    </div>
              
              
              <!-- 年度预算 -->
               <yearBudget></yearBudget> 
              <!-- 年度预算申请 -->
              <request></request> 
  				</form> 
	    	</div>
	    </div>
	    <slideNav></slideNav>
	</div>
</template>
<script>
    import slideNav from '../nav/slideNav.vue'
    import tables from './tables.vue'
    import request from './request.vue'
    import yearBudget from './yearBudget.vue'
    export default {
    	data(){
    		return {
                catalog:["首页","预算管理","年度预算"],
                title:"年度预算",
                monetaryUnit:'人民币',
                classification:[
                  {listOne:['']}
                ],
            }
    	},

    	methods:{
        
    		applied(){
            this.$router.push("/budget/year/request")
    		},
        changeCurrency(e){
              this.$data.monetaryUnit=$(e.target)[0].innerText
        }
    	},
    	mounted(){
    		$("#budget_year").width($(window).width()-$('#slide_nav').width())
    		$("#budget_year").height($(window).height()-$(".stateNav").height())
    		$("#budget_year").css("margin-left",$('#slide_nav').width())
    	},
		components:{
			slideNav,
      tables,
      request,
      yearBudget,
		},
	}
</script>

<style>
  body,html{
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }
  .nav_search{
    margin-bottom: 0;
  }
   #budget_year{
   	background: #edeef1;
   	color: black;
   	position: absolute;
   	top: 50px;

   }
   #budget_year .catelog{
   	width: 97%;
   	margin: auto;
   	line-height: 38px;
   }
   #budget_year .year_content{
   	width: 97%;
   	height: 100%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;
   }
    #budget_yea,.form-group,.btn,.catelog{
    	font-size: 12px;
    }
    /*年度预算内容隐藏 class*/
    .budget{
    	display: none;
    }
    
    .catelog a{
    	color:#a8acb0;
    }
    .catelog span{
    	color: #d3d5d8;
    	display: inline-block;
    	margin:0px 5px;
    }
    .catelog a:last-child span{
        color:#edeef1;
    }
    .catelog a:last-child{
    	color: black;
    }
    .hiden{
    	display: none;
    }
    
    .form-control{
    	text-align: center;
    	display: inline-block;
    	width: 28%;
    	height: 34px;
    	font-size: 12px;
    	margin: 0 3px;
    	box-shadow:0;
    	margin-left: 10px;
    	border-radius: 0;
    	background:#e2e3e5;
    }
   #budget_year .year_content form{
   	margin:0px 20px;
   }
   .form_heard{
   	height:46px;
   	line-height: 46px;
   	border-bottom:2px solid #edeef1;
   }
   .btn,.form-group select,.nav-tabs>li>a{
	    border-radius: 0;
   }
   .form_heard span{
   	  font-size: 14px;
   }
   .form_heard .btn{
   	  background: #fa8919;
   	  border:0;
   	  top: 5px;
   	  padding:8.5px 15px;
   	  color:white;
	  height: 34px;

   }
   


    
       
</style>