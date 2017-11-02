<template>
  <div>
      <puliceCatalog :scataLog="needsSearch"></puliceCatalog>
      <div class="needs_search"> 
         <div class="search_content">
           <div class="form-group nav_searcha">
                <div class="form-group form_heard">
                    <img :src="catalogIcon">
                    <span>{{title}}</span>
                    <button class="btn btn-default needsBtn"><router-link :to="{path:'/needs/findObjects/request'}">需求申请</router-link></button>
                </div>
                <needsTitle  :tbActive="tbActive" :postCo="postCode"></needsTitle>
                <ul class="nav nav-tabs needsAllList">
                    <li v-for="(tab,Index) in tabs" :class="{active:Index==0}" ><a href="javascript:void(0)"   :sign="tab">{{tab}}</a></li>
                </ul>
              </div>
              <tables :tableTitle="tableTitle" :tableBody="tableBodyData"  ></tables>
          </div>
      </div>
  </div>
	 
	
</template>

<script>
   import puliceCatalog from "../components/puliceCatalog.vue"
   import tables from '../components/tables.vue'
   import seeData from '../components/seeData.vue'
   import needsTitle from '../components/needsTitle.vue'
    //import api from '../api/apis.js'
   export default{
    data(){
        return{
            tabs:["全部","待审批","审核中","驳回","已审核","已撤销" ],
            tableTitle:["需求单号","一级部门","二级部门","三级部门","岗位名称","需求人员","申请时间","状态","操作"],
            needsSearch:[
                    {title:"首页",path:"/home"},
                    {title:"需求管理",path:"/needs/search"},
                    {title:"需求查询",path:"/needs/search"}
            ],
            catalogIcon:require("../assets/image/title_address.png"),
            title:"需求查询",
            isActive:false,
            tbActive:true,
            Status:["待审批","审核中","已驳回","已撤销","待发布","已发布","待审核","已审核","已删除","已上传"]
        }
    },
    computed:{
         tableBodyData:function(){
              return this.$store.state.NeedsSearch
         },
         postCode:function(){
            return this.$store.state.requestData
         }

    },
    mounted(){
        const than=this.$data
        const _this=this
        $('.all').find('.btn').click(function(event) {
            if ($(this)[0].innerText==="查看") {
                  than.isActive=than.tbActive;
                  than.tbActive=false;
            }
        });

        $(".nav-tabs").delegate('li', 'click', function(event) {
            $(this).addClass('active').siblings().removeClass('active')
        });


        $(".needsAllList").delegate('li', 'click', function(e) {
            var state;
             if($(this).children()[0].innerText==than.tabs[1]){
                  state=0;
             }else if($(this).children()[0].innerText==than.tabs[2]){
                  state=1;
             }else if($(this).children()[0].innerText==than.tabs[3]){
                  state=2;
             }else if($(this).children()[0].innerText==than.tabs[4]){
                  state=4,5;
             }else if($(this).children()[0].innerText==than.tabs[5]){
                  state=3;
             }

             if($(this).children()[0].innerText==than.tabs[0]){
                /*api.login.indexUserList("/cvdb/listCvdbScreening").then((response) => {
                    $.each(response.body.data.list,function(index, el) {
                    el.STATUS=than.Status[el.STATUS]
                    this.PATHS=el.PATHS.split('>')
                      if(this.PATHS.length===1){
                          this.PATHS.push("","")
                      }else if(this.PATHS.length===2){
                          this.PATHS.push("")
                      }
                });
                      _this.$store.state.NeedsSearch=response.body.data.list 
                })*/

             }
             
              var stat={stat:state}
             /* api.setting.getNeedsTitleList(stat).then( (response) => {
                  $.each(response.body.data.list,function(index, el) {
                    el.STATUS=than.Status[el.STATUS]
                    this.PATHS=el.PATHS.split('>')
                      if(this.PATHS.length===1){
                          this.PATHS.push("","")
                      }else if(this.PATHS.length===2){
                          this.PATHS.push("")
                      }

                });
                  console.log(response)
                 _this.$store.state.NeedsSearch=response.body.data.list 

                 // console.log( _this.$store.state.NeedsSearch) 

              })*/
        });
    },
    components:{
         tables,
         seeData,
         needsTitle,
         puliceCatalog,
    }
}
	
</script>

<style>
  .needs_search{
   	width: 97%;
   	height: 91%;
   	background: white;
    position: absolute;
    margin-left: 1.5%;

   }
   .search_content{
    width: 96%;
      margin: auto;
   }
   .nav_searcha{
    margin-bottom: 0px;
   }
   .nav-tabs>li{
     width: 70px;
     text-align: center;
   }
   .nav-tabs>li.active{
      color: #fa8919;
      border-bottom: 2px solid #fa8919;
    }
    .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover{
      border: 0px;
    }

    .nav-tabs{
        border: 0px;
    }
    .nav-tabs>li>a{
        color: #3a3a3a;
         font-size: 12px;
    }
    .nav-tabs>li>a:hover{
         background: none;
         color: #fa8919;
         border: 0px;

    }
    .table_bordered{
        width: 100%;
        margin: auto;
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
   .needsBtn{
     float: right;
      background: #fa8919;
      border: 0;
      position: relative;
      top: 5px;
      height: 34px; 
      

   }
    .needsBtn>a{
      font-size: 12px;
      color: white;
       padding: 8px 15px;
    }
    .needsBtn:hover{
        background: #fa8919;
    }
    .needsBtn>a:hover{
        border: 0px;
        color: white;
        text-decoration:none;

    }
</style>