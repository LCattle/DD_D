<template>
  <div class="all">
  	<table class="table table_bordered">
  		<thead>
  			<tr>
  				<th v-for="th in tableTitle">{{th}}</th>
  			</tr>
  		</thead>
  		<tbody >
  			<tr v-for="(td,index) in tableBody" class="statusTabl" v-if="index<6">
  			<td>{{td.NEEDS_CODE}}</td>
            <td v-for="paths in td.PATHS">{{paths}}</td>
            <td>{{td.POST_CODE}}</td>

            <td>{{td.NEEDSNUMBER}}</td>
            <td v-if="td.NAME">{{td.NAME}}</td>

            <td>{{td.CREATEDATE}}</td>
            <td>{{td.STATUS}}</td>

            <td>
               <div class="needSeeDataBtn">
                   <button class="btn" v-if="td.STATUS==='审核中'|| td.STATUS==='已审核'|| td.STATUS==='已发布' || td.STATUS==='待发布'" >查看</button>
                   <button class="btn" v-else-if="td.STATUS==='已驳回'|| td.STATUS==='已撤销'"  v-for="BHoperationBtn in BHoperationBtn">{{BHoperationBtn}}</button>
                   <button class="btn" v-else v-for="DFoperationBtn in DFoperationBtn" >{{DFoperationBtn}}</button>
               </div>
            </td>
  			</tr>
  		</tbody>
  	</table>
  </div>
</template>
<script>
   export default {
        data(){
           return{
              DFoperationBtn:["查看","撤销"],
              SHZoperationBtn:["查看"],
              BHoperationBtn:["查看","修改","删除"],
           }
        },
        props:["tableTitle","tableBody"],
        mounted(){
            var _this=this.$router
            $(".needSeeDataBtn").delegate('button', 'click', function(event) {
                  if($(this)[0].innerText == "查看"){
                         _this.push("/needs/request/needSeeData")

                  }
            });
        }
        
     }


   
</script>

<style>
  input:focus,textarea:focus,.btn:focus{  
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
      display:inline-block;
   }
   .nav>li>a:focus{
      background-color: white;
   }
	.table_bordered .btn{
       padding: 2px 11px;
       margin: 0px 4px;
   }
   .table_bordered .btn{
      color: white;
   }
   .table_bordered {
   	   text-align: center;
   }
   .table_bordered tbody>tr:nth-child(odd){
      background: #fcfcfc;
   }
   .table_bordered tbody tr td{
      height: 40px;
      color: #636363;
   }

   .table_bordered {
   	margin-top: 2px;
    
   }
   .table_bordered,.table_bordered>thead>tr>th,.table_bordered>tbody>tr>td{
      border-color: #f1f1f1;
      color: #636363;
      border: 1px solid #f1f1f1;
      font-size: 12px;
   }
   .table_bordered>thead>tr{
   	   text-align: center;
         border: 1px solid #f1f1f1;
   }
   .table_bordered>thead>tr>th{
      border: 1px solid #f1f1f1;
   	border-bottom-width:2px; 
      font-size: 12px;
      height: 40px;
      text-align: center;
   }
    .table_bordered>tbody>tr>td .btn{
      font-size: 12px;
    }
    .pagination>li>a.active{
        border-color:#f1f1f1;
        background: white;
        color:#fa8919;
    }
    .table_bordered .btn:nth-child(3){
       background:#f25d44;
    }
    .table_bordered .btn:nth-child(3):hover{
       background:#e54426;
    } 
     .table_bordered .btn:first-child{
       background: #ff9332;
    }
    .table_bordered .btn:first-child:hover{
       background: #ff8000;
    }
    .table_bordered .btn:nth-child(2):hover{
        background: #00b363;
    }
     .table_bordered .btn:nth-child(2){
       background: #00c57d;
    }
    .oBtn{
       max-width: 88%;
       margin: auto;
    }
    .oBtn>.btn{
       float: left;
    }

</style>