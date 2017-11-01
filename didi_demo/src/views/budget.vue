<template>
	<div>
			  <puliceCatalog :scataLog="budgetRequest"></puliceCatalog>
	    	<div class="year_content">
  		         <form>
                    <div class="form-group form_heard">
                        <img :src="catalogIcon">
                        <span>{{title}}</span>
                        <button type="button" class="btn btn-default pull-right" @click="applied">年度预算申请</button>
                    </div>
              
              
              <!-- 年度预算 -->
               <yearBudget></yearBudget>
  				</form> 
	    	</div>
	</div>
</template>
<script>
    import tables from '../components/tables.vue'
    import yearBudget from '../components/yearBudget.vue'
    import puliceCatalog from '../components/puliceCatalog.vue'
    export default {
    	data(){
    		return {
                catalogDudget:["首页","预算管理","年度预算"],
                title:"年度预算",
                catalogIcon:require("../assets/image/title_address.png"),
                classification:[
                  {listOne:['']}
                ],
                 budgetRequest:[
                     {title:"首页",path:"/home"},
                     {title:"预算管理",path:"/budget/budgetList"},
                     {title:"年度预算管理",path:"/budget/budgetList"}
                  ],


            }
    	},

    	methods:{
        
    		applied(e){
            this.$router.push("/budget/budgetList/require")
    		},
        changeCurrency(e){
              this.$data.monetaryUnit=$(e.target)[0].innerText
        }
    	},
		components:{
      tables,
      yearBudget,
      puliceCatalog,
		},
	}
</script>

<style scope>
  body,html{
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }
  .nav_search{
    margin-bottom: 0;
  }
   .catelog{
   	width: 97%;
   	margin: auto;
   	line-height: 38px;
   }
   .year_content{
   	width: 97%;
   	min-height: 92%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;
    margin-bottom: 1%;
   }
   .year_content>form{
     margin: 0px 20px 0px 20px;
   }
    .form-group,.btn,.catelog{
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