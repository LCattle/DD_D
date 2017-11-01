<template>
  <div class="all">
  	<table class="table table_bordered">
  		<thead>
  			<tr>
  				<th v-for="th in tableTitle">{{th}}</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="(td,index) in tableBody">
  				  <td>{{index+1}}</td>
            <td>{{td.department_Id}}</td>
            <td>{{td.dept21}}</td>
            <td>{{td.description}}</td>
            <td></td>
            <td>{{td.years}}</td>
            <td>{{td.expoct}}</td>
  			</tr>
  		</tbody>
  	</table>
  </div>
</template>
<script>
   export default {
        props:["tableTitle","tableBody"],
        data(){
           return{
              DFoperationBtn:["查看","撤销"],
              SHZoperationBtn:["查看"],
              BHoperationBtn:["查看","删除","修改"],

           }
        },
        methods:{
           seeDa(e){
                let Id=$(e.target).attr("status")
                let searId=$(e.target).attr("searId")
               
           }
        },
        mounted(){
              console.log()
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
      display: block
   }
   .nav>li>a:focus{
      background-color: white;
   }
	.table_bordered .btn{
       padding: 2px 11px;
       margin: 0px 4px;
   }
   .table_bordered .btn:first-child{
       background: white;
      border-color: #fa8919;
      color: #fa8919;
   }
   .table_bordered .btn:first-child:hover{
     background: #fa8919;
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
   	  background: #c4c4c6;
   	  color:white;
      font-size: 12px;
    }
    .table_bordered>tbody>tr>td .btn.operation,.pagination>li>a.active{
        border-color:#f1f1f1;
        background: white;
        color:#fa8919;
    }

</style>