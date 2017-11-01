<template>
		<div>
			<div class="search_log">
				<img src="../assets/image/title_home.png"/>
				<router-link :to="'/budget/year'" v-for="details in scataLog" :key="details.id">{{details}}<span>/</span></router-link>
			</div>
	    	<div class="year_content">   
  		         <form>
                    <div class="form-group form_header">
                        <img :src="catalogIcon">
                        <span>预算查询</span>
                        <button type="button" class="btn btn-default pull-right" @click="addData" >新增预算</button>
                    </div>
                        <div class="form-group">
                           <div>
                                <label>部门:</label>
                                <select>
                                  <option>AAA运营管理</option>
                                  <option>BB部</option>
                                  <option>流程制度中心</option>
                                </select>
                           </div>
                           <div>
                              <label>费用分类:</label>
                              <select>
                                  <option></option>
                                </select>
                           </div>
                           <div>
                              <label>年度:</label>
                              <select>
                                  <option>2017</option>
                                </select>
                           </div>
                            <button type="button" class="btn btn-default search">查询</button> 
                     </div>
                     <div class="form-group">
                        <button type="button" class="btn btn-default pull-right export">导出</button>
                     </div>
                      <!--table-->
                      <table class="budgetSear">
                        <thead>
                            <tr>
                               <td>序号</td>
                               <td>部门</td>
                               <td>总预算(元)</td>
                               <td>已使用(元)</td>
                               <td>剩余(元)</td>
                               <td>年度</td>
                               <td>外包人员数量(人)</td>
                             </tr> 
                        </thead>
                        <tbody>
                             <tr v-for="(budgetSearData,index) in budgetSerTable">
                               <td>{{index+1}}</td>
                               <td class="budgetSearList" align="left">
                                  <i v-if="budgetSearData.t3list"  class="glyphicon glyphicon-menu-down"></i>
                                   {{budgetSearData.NAME}}
                                </td>
                               <td>{{budgetSearData.AMOUNTS}}</td>
                               <td>{{budgetSearData.USEDS}}</td>
                               <td>{{budgetSearData.REMAININGS}}</td>
                               <td>{{budgetSearData.YEARS}}</td>
                               <td>{{budgetSearData.EXPOCTS}}</td>
                             </tr> 
                        </tbody>
                      </table>
                      
                      
                      <!--page-->
                     <page></page>
                      

  				</form> 
	    	</div>
	    </div>
	
</template>

<script>
    import page from '../components/page.vue'
	export default{
		data(){
   	    	return{
                scataLog:["首页","预算管理","预算查询"],
                tableTitle:["序号","部门","总预算","已使用","剩余","年度","外包人员人数"],
                flag:true,
                searchActive:true,
   	    	}
   	    },
        computed:{
            changetbBth:function(){
                return this.$data.tbBtn
            },
            budgetSerTable:function(){
                return this.$store.state.BudgetSearch

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
               $('.slide_tex').find('span:first-child').html($(e.target)[0].innerText)
               
           },
           addData(){
               this.$router.push("/budget/budgetList/require")
           }
     
   	    },
        mounted(){
            var flag=true;
            var _this=this;
            $('.budgetSearList').click(function(event) {

                $(this).children('i').toggleClass('glyphicon glyphicon-menu-up');
                var html="";
                if(flag){
                   $.each(_this.budgetSerTable,function(index, el) {
                      $.each(el.t3list,function(index, el) {
                         html="<tr><td></td><td>"+el.NAME+"</td><td>"+el.AMOUNTS+"</td><td>"+el.USEDS+"</td><td>"+el.REMAININGS+"</td><td>"+el.YEARS+"</td><td>"+el.EXPOCTS+"</td></tr>"
                    });
                    console.log(el.t3list)
                  });
                   $(this).parent().after(html)

                }else{
                    $(this).parent().next().slideUp()
                }
                flag=!flag
               
                



            });

        },
    		components:{
          page,
    		}
	}
</script>

<style>
	.search_log{
   	width: 97%;
   	margin: auto;
   	line-height: 38px;
    font-size: 12px;
    
   }
   .search_log span{
      color: #d3d5d8;
      display: inline-block;
      margin:0px 5px;
    }
   .search_log a{
     color: #a8acb0;
   }
   .search_log>a:last-child span{
        color:#edeef1;
    }
    .search_log a:last-child{
      color: black;
    }
   .chang_hiden{
      display: inline-block;
   }
   .nav-tabs>li.active>a{
    border: 0px;
   }
   .change_block{
      display: none;
   }
   .year_content{
   	width: 97%;
   	height: 92%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;
    margin-bottom: 1%;
   }
   .year_content>form{
     margin: 0px 20px 0px 20px;
   }
   .form_header{
   	height: 46px;
    line-height: 46px;
    border-bottom: 2px solid #edeef1;
   

   }
   .form_header>span{
     font-size: 14px;
   }
   .year_content>form>div:nth-child(2){
   	border-bottom: 1px solid #edeef1;
   	padding:15px 0px;
   }
   .year_content>form>div:nth-child(2) div{
      display: inline-block;
   }
   .year_content>form>div:nth-child(2)>div:first-child>span{
      width: 154px;
      height: 34px;
      display: inline-block;
      border:1px solid #edeef1;
   } 
   .year_content>form>div:nth-child(2)>div:first-child>span>span:nth-child(1){
      display: inline-block;
      width: 130px;
      line-height: 34px;
   }
   .year_content>form>div:nth-child(2)>div:first-child>span>span:nth-child(2){
        width: 21px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        position: absolute;
        display: inline-block;
   }
   .year_content>form>div:nth-child(2)>div:first-child>span>ul{
    position: absolute;
    top: 97px;
    left: 83px;
    display: inline-block;
     width: 154px;
     max-height: 100px;
     background: white;
     padding:0px;
     border:1px solid #edeef1;

     
   }
   .year_content>form>div:nth-child(2)>div:first-child>span>ul li{
      text-align: left;
      width: 100%;
      list-style: none;
   }
   
   /*.year_content>form>div:nth-child(2) div input{
      height: 34px;
   }*/
   .year_content>form>div:nth-child(2) div:nth-child(2){
      margin: 0px 10px;
   }
   .search{
     border-color: #fa8919;
     height: 34px;
     padding:0px 15px;
      bottom: 1px;
     background: white;
     color: #fa8919; 
     margin-left: 10px;
   }
   .search:hover{
   	  background: #fa8919;
   	  border-color: #fa8919;
   	  color: white;
   	  -webkit-box-shadow:0;
   }
   .search,.form_header .btn{
      position: relative;
   }
   .year_content select{
   	width: 190px;
   	border:0;
    height: 34px;
    border:1px solid #e2e3e4;
   }
   .form_header .btn{
   	  background: #fa8919;
   	  border:0;
   	  top: 5px;
   	  padding:8.5px 15px;
   	  color:white;
	    height: 34px;

   }
   .export{
     border:0px;
     height:36px;
     padding: 0px 24px;
     background:#1cd8c0;
     color: white;
     margin: 8px 0px 8px 0px;
     font-size: 12px;
   }
   .form-group{
    margin-bottom: 0px;
   }
   .table_bordered>thead>tr{
     border-top: 2px solid #f1f1f1
   }
   .btn{
     font-size: 12px;
   }
   .down_hiden>li.active{
        background: #fa8919;
    }
   .slide_tex>ul.down_hiden{
       display:none;
   }
   .down_hiden>li:hover{
     background:#fa8919;
     color: white;
   }
   select{
      width: 190px;
      height: 34px;
      /*changeselect*/
       padding-right: 14px;
       text-indent: 0.5em;

    }
     select:focus {
        outline:none;
    }
    .budgetSear{
       width: 100%;
    }
    .budgetSear td{
       border: 1px solid #f1f1f1;
       padding: 10px;
       font-size: 12px;
       text-align: center;

    }
     .budgetSearList>i{
        width: 20%;
        float: left;
        position: relative;
        left: 20px;
     }
     .budgetSearList{
        text-align: left;

     }
</style>