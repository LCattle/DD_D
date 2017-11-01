<template>
  <div class="all">
  	<table class="table table_bordereds">
  		<thead>
  			<tr>
  				<th v-for="th in tableTitle">{{th}}</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="(listContent,index) in tableBody" v-if="index<6">
  				  <td v-for="listContent in listContent.PATHS">{{listContent}}</td>

            <td>{{listContent.BUDGETTYPE}}</td>
            <td>{{listContent.COST_CODE}}</td>
            
            <td>{{listContent.AMOUNT}}</td>
            <td>{{listContent.EXPOCT}}</td>

            <td>{{listContent.CREATEDATEFORMAT}}</td>

            <td >{{listContent.STATUS}}</td>
            <td>
               <div class="tableBtnList" :status="listContent.ID">
                  <input type="button" @click="budgetseeData" class="btn" v-if="listContent.STATUS==='审核中'|| listContent.STATUS==='已审核'|| listContent.STATUS==='已发布' || listContent.STATUS==='待发布'" value="查看"></input>
                   <input type="button" @click="budgetseeData" class="btn" v-else-if="listContent.STATUS==='已驳回'|| listContent.STATUS === '已撤销'"  v-for="BHoperationBtn in BHoperationBtn" :value="BHoperationBtn" ></button>
                   <input type="button" @click="budgetseeData" class="btn" v-else v-for="DFoperationBtn in DFoperationBtn" :value="DFoperationBtn"></input>
               </div>
            </td>
  			</tr>
  		</tbody>
  	</table>
  </div>
</template>
<script>
   import api from "../api/apis.js"
   export default {
        data(){
           return{
              DFoperationBtn:["查看","撤销"],
              SHZoperationBtn:["查看"],
              BHoperationBtn:["查看","修改","删除"],
              
           }
        },
        methods:{
           budgetseeData(e){ 
               if($(e.target).val() == this.$data.SHZoperationBtn[0]){
                      var status=$(e.target).parent().attr("status")
                      this.$router.push("/budget/budgetList/seeData")
                      api.setting.getBudgetDetail({id:status}).then((response) => {
                           this.$store.state.budgetSeeData=response.body.data
                      });
                      api.setting.getBudgetCode({businessCode:32}).then((response) => {
                            this.$store.state.searchDataPation=response.body.executeideasList

                            console.log(response)

                      })
               }

           }
        },
        props:["tableTitle","tableBody"],
        
        mounted:function(){
            
            var _this=this.$store.state.budgetSeeData;
            var _then=this.$router;
        
        
      }
}
   
</script>

<style>
  input:focus,textarea:focus{  
      outline: none;   
      box-shadow: 0; 
      -webkit-box-shadow:0;
      -moz-box-shadow:0;
      -ms-box-shadow:0;
      border-radius: 0px;
      border-color: #fa8919;  
    }
   .all{
      width: 100%;
      margin-left:0px;
   }
   .tables_block{
      display: block
   }
   .nav>li>a:focus{
      background-color: white;
   }
	.table_bordereds .btn{
       padding: 2px 11px;
       margin: 0px 4px;
   }
   .table_bordereds .btn{
      color: white;
      float: left;
   }
   .table_bordereds .btn:hover{
     background: #fa8919;
     color: white;
   }
   .table_bordereds {
   	   text-align: center;
   }
   .table_bordereds tbody>tr:nth-child(odd){
      background: #fcfcfc;
   }
   .table_bordereds tbody tr td{
      height: 40px;
      color: #636363;
   }

   .table_bordereds {
   	margin-top: 2px;
    
   }
   .table_bordereds,.table_bordereds>thead>tr>th,.table_bordereds>tbody>tr>td{
      border-color: #f1f1f1;
      color: #636363;
      border: 1px solid #f1f1f1;
      font-size: 12px;
   }
   .table_bordereds>thead>tr{
   	   text-align: center;
         border: 1px solid #f1f1f1;
   }
   .table_bordereds>thead>tr>th{
      border: 1px solid #f1f1f1;
   	border-bottom-width:2px; 
      font-size: 12px;
      height: 40px;
      text-align: center;
   }
    .pagination>li>a.active{
        border-color:#f1f1f1;
        background: white;
        color:#fa8919;
    }
    .table_bordereds .btn:nth-child(3){
       background:#f25d44;
    }
    .table_bordereds .btn:nth-child(3):hover{
       background:#e54426;
    } 
     .table_bordereds .btn:first-child{
       background: #ff9332;
    }
    .table_bordereds .btn:first-child:hover{
       background: #ff8000;
    }
    .table_bordereds .btn:nth-child(2):hover{
        background: #00b363;
    }
     .table_bordereds .btn:nth-child(2){
       background: #00c57d;
    }
    .tableBtnList{
       width: 96%;
       margin: auto;
    }
    .tableBtnList>input{
        height: 23px;
    }
    .table_bordereds>tbody>tr>td:last-child{
       widows: 200px;
    }
    .year_content>form>div:nth-child(2) div input{
       height: 23px;
    }

</style>