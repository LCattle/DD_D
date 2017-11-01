<template>
			<div class="home_content">
				<div class="form-group">
					<div v-for='num in homeData'>
						<div class="homeData_title">
							<p>{{num.total}}</p>
							<p>{{num.list}}</p>
						</div>
						<div>
							<img :src="num.image"/>
						</div>
					</div>
				</div>
				<div class="form-group ">
						<div v-for='tip in untreatedData' class="home_interview" >
                <div class="home_tip">
                  <div>
                    <div></div>
  									<p>{{tip.total}}</p>
  									<p>{{tip.list}}</p>
  								</div>
  								<div>
                      <div>
  									      <img :src="tip.image"/>
                      </div>
  								</div>
                </div>
                <div class="home_list">
                    <p class="list_title">
                      <span>带审批的外包</span>
                      <span>(<span>123</span>)</span>
                    </p>
                    <p>
                       <span>java高级工程师</span>
                       <span>2017/10/10</span>
                    </p>
                </div>
						 </div>
				</div>
				<div class="form-group">
					<div v-for=' index in [1,2]'>
						<table>
							<thead>
								<tr>
									<td>公告</td>
									<td>更多</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td>2017/09/21</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
		    </div>
</template>

<script>
    export default {
        data(){
        	return{
                homeData:[
                   {
	                   	total:2312,
	                   	list:"需求发布",
	                   	image:require('../assets/image/home_icon_xqfb.png'),
                   },
	               {    total:6543899,
	                   	list:"简历库",
	                   	image:require('../assets/image/nav_icon_jlk.png'),
                   },
	               {    total:76578,
	                   	list:"工时审核",
	                   	image:require('../assets/image/home_icon_gssh.png'),
                   },
	               {    total:98765,
	                   	list:"外包人员",
	                   	image:require('../assets/image/home_icom_ryrc.png'), 
                   }
                ],
                untreatedData:[
                   {
	                   	total:23,
	                   	list:"需求发布",
	                   	image:require('../assets/image/home_dpsdwbxq.png'),
                   },
	               {    total:65,
	                   	list:"简历库",
                      image:require('../assets/image/home_dapdms.png'),
	                   	
                   },
	                {    total:76,
	                   	list:"工时审核",
                      image:require('../assets/image/home_dfkdms.png'),
	                    
                   },
	                 {    total:98,
	                   	list:"费用报表",
                      image:require('../assets/image/home_dsxdjl.png'),
                   },
                   {
	                   	total:23,
	                   	list:"需求发布",
	                   	 image:require('../assets/image/home_dspdgs.png'),
                   },
	               {    total:65,
	                   	list:"简历库",
                      image:require('../assets/image/home_dqrdms.png'),
	                   	
                   },
	               {    total:76,
	                   	list:"工时审核",
                      image:require('../assets/image/home_jjdqdry.png'),
                      
	                   	
                   }
                ]
        	}
        },
        created(){
            $(".contents").css({"display":"block"})
        },
        mounted(){
               $('.home_interview').hover(function() {
                  $(this).children('.home_list').css({'display':'block'});
                  $(this).find('.home_tip').css({'display':'none'})
               }, function() {
                  $('.home_list').css({'display':'none'});
                  $(this).find('.home_tip').css({'display':'block'})
               });
        },
	}
</script>

<style>
   .home_content{
   	    width: 97%;
   	    background: #edeef1;
        position: absolute;
        margin:20px 20px 0px 20px;

   }
   .home_content>.form-group:first-child>div{
   	  width: 23%;
   	  height: 86px;
   	  margin-right: 2.65%;
   	  display: inline-block;
      color: white;
    }
    .home_content>.form-group:first-child>div>div:first-child>p:first-child{
         font-size: 20px;
         line-height: 50px;
    }
    .home_content>.form-group:first-child>div:first-child{
    	background: #f49c44;
    }
    .home_content>.form-group:first-child>div:first-child>div:first-child{
       background: #fa8919;
    }
    .home_content>.form-group:first-child>div:first-child>div:first-child:hover{
        background: #f49c44;
    }
    .home_content>.form-group:first-child>div:nth-child(2){
    	background:#29c4b0;
    }
    .home_content>.form-group:first-child>div:nth-child(2)>div:first-child{
       background: #1fbba6;
    }
    .home_content>.form-group:first-child>div:nth-child(2)>div:first-child:hover{
       background:#29c4b0;
    }
    .home_content>.form-group:first-child>div:nth-child(3){
    	background:#eb7554;
    	margin-left: 0;
    }
    .home_content>.form-group:first-child>div:nth-child(3)>div:first-child{
        background: #e16948;
    }
    .home_content>.form-group:first-child>div:nth-child(3)>div:first-child:hover{
       background:#eb7554;
    }
    .home_content>.form-group:first-child>div:nth-child(4){
    	background:#7c76b5;
    	margin-right: 0;
    }
    .home_content>.form-group:first-child>div:nth-child(4)>div:first-child{
        background: #7363b1;
    }
    .home_content>.form-group:first-child>div:nth-child(4)>div:first-child:hover{
       background:#7c76b5;
    }
    .home_content>.form-group:first-child>div>div{
    	display: inline-block;
    }
    .home_content>.form-group:first-child>div>div:first-child{
    	width: 68%;
    	height: 100%;
    	text-align: center;
    }
    .home_content>.form-group:first-child>div>div:nth-child(2){
    	width: 29%;
    	height: 100%;
    	text-align: center;
      float: right;
      line-height: 86px;

    }
    .home_content>.form-group:nth-child(2){
    	width: 100%;
      height: 290px;
    	background: white;
    	margin-top: 10px;
    }
    .home_content>.form-group:nth-child(2)>div{
    	   width: 22.4%;
        height: 106px;
        display: inline-block;
        background: #f9fbfd;
        margin: 20px 0px 20px 20px;
    }
    .home_content>.form-group:nth-child(2)>div>div:first-child>div:first-child{
         display: inline-block;
         width: 60%;
         height: 100%;
    }
    .home_content>.form-group:nth-child(2)>div>div:first-child>div:first-child>p:nth-of-type(1){
        font-size: 30px;
        color: #636363;
        line-height: 62px;
    }
    .home_content>.form-group:nth-child(2)>div>div:first-child>div:first-child>div{
           width: 24px;
          height: 106px;
          float: left;
    }
    .home_content>.form-group:nth-child(2)>div>div:first-child>div:nth-child(2){
         display: inline-block;
         width: 35%;
         height: 100%;
         float: right;
    }
    .home_content>.form-group:nth-child(2)>div>div:first-child>div:nth-child(2)>div{
        width: 70px;
        height: 70px;
        border-radius: 4px;
        text-align: center;
        line-height: 65px;
        margin-top: 18px;
    }
    .home_interview{
      float: left;
    }
    .home_content>.form-group:nth-child(2)>div:first-child>div:nth-of-type(1)>div:last-child>div{
        background: #ee977c;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(2)>div:nth-of-type(1)>div:last-child>div{
        background: #b994dc;
    }
   .home_content>.form-group:nth-child(2)>div:nth-child(3)>div:nth-of-type(1)>div:last-child>div{
        background: #a1e27c;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(4)>div:nth-of-type(1)>div:last-child>div{
        background: #69d2c5;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(5)>div:nth-of-type(1)>div:last-child>div{
        background: #73aee6;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(6)>div:nth-of-type(1)>div:last-child>div{
        background: #ecab54;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(7)>div:nth-of-type(1)>div:last-child>div{
        background: #e69898;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(4){
        height: 252px;
        margin: 20px 20px 0px 20px;
        display: inline-block;
        float: right;
        float: right;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(4)>div:nth-of-type(1)>div:nth-child(2){
       margin-top: 30%;
    }
    .home_content>.form-group:nth-child(2)>div:nth-child(4)>div:nth-of-type(1)>div:first-child>div{
        height: 252px;
    }
     .home_content>.form-group:nth-child(2)>div:nth-child(4)>div:nth-of-type(1)>div:first-child>p:nth-of-type(1){
         margin-top: 72px;
     }
    .home_content>.form-group:nth-child(3){
    	width: 100%;
    }
    .home_content>.form-group:nth-child(3)>div{
    	width: 49%;
    	height: 100%;
    	display: inline-block;
    	background: white;
    }
    .home_content>.form-group:nth-child(3)>div:first-child{
    	margin-right: 20px;
    }
    .list_title{
      width: 100%;
      line-height:30px;
      font-weight: bold;
      background: white;
    }
    .list_title>span:last-child,.home_list>p>span:nth-of-type(even){
       float: right;
    }
    .home_list{
      width:100%;
    }
    .home_list>p span{
      font-size: 12px;
      color: #3a3a3a;
    }
    .home_list>p:first-child>span{
      font-weight: bold;
    }
    .home_list>p:first-child>span:last-child>span,.home_list>p:first-child>span:last-child{
       color: #fa8919;
    }
    .home_list>p:last-child{
        line-height: 30px;
        width: 94%;
        margin: auto;
    }
    .home_content>.form-group:nth-child(2)>div>div:last-child{
       display: none;
    }

</style>