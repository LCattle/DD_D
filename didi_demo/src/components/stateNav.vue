<template>
	<div>
		<nav class="nav navbar stateNav">
		    <span class="zhedie_one" @click="slidebar"></span> 
		    <div class="collapse navbar-collapse pull-right">
	            <ul class="nav navbar-nav navbar-right">
			        <li><img src=".././assets/image/top_nav_ggtz.png"/></li>
			        <li><img src=".././assets/image/top_nav_set.png"/></li>
			        <li class="dropdown">
			        	<div class="user_icon"></div>
			        	<div class="user">
			        		<p>江一年</p>
			        		<p>滴滴项目部</p>
			        	</div>
			            <div class="down_icon" @click="userSlide"><span class="down"></span></div>
			            <ul class="dropdown-menu down_list" >
				            <li data-toggle="modal" data-target="#navModal" v-toggle><div></div>切换角色</li>
				            <li v-toggle><div></div>修改个人资料</li>
				            <li v-toggle><div></div>注销</li>
			          </ul>	  
	               </li>
	            </ul>
	            
		  </div>
		</nav>
		 <!-- Modal -->

		<div class="modal fade" id="navModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog modal-sm" role="document" >
			    <div class="modal-content">
			      <div class="modal-body">
			      	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			      	  <ul class="model_ul">
			      	  	  <li>
			      	  	  	  <div></div>
			      	  	  	  <div>
			      	  	  	  	 <p>JIANGYINAIN</p>
			      	  	  	  	 <p>didifuzeren</p>
			      	  	  	  </div>
			      	  	  	  <div></div>
			      	  	  </li>
			      	  </ul>
			      </div>
			    </div>
			</div>
		</div>
	    <!-- EndModal -->
	</div>

</template>

<script>
	export default {
		data(){
			return{
			    userInfo:{
			    	name:'王志杰',
			    	total:'滴滴部门负责人',
			    },
                flag:true,

			}
		},
        methods:{
            userSlide:function(){
               $('.down_list').slideToggle()
            },
			slidebar:function(e){
                $(e.target).toggleClass('zhedie_two');
                $(".sidebar-nav>.logo").toggleClass('smallLogo');
				
				$('#slide_nav').toggleClass('stateNav_changeSty')
				$('.stateNav').toggleClass('bigstate_nav');
				
				if(this.$data.flag){
					$('.leftnav_list').children('ul').addClass('active');
				}else{
					$('.leftnav_list').children('ul').removeClass('active');
				}
                
                this.$data.flag=!this.$data.flag
                $('.contents').width($(window).outerWidth(true)-$('#slide_nav').width()-($(window).outerWidth(true)-$(window).width()))
                $('.stateNav').width($(window).outerWidth(true)-$('#slide_nav').width()-($(window).outerWidth(true)-$(window).width())-2)
            }

        },
        directives: {
			toggle: {
			    // toggle icon
			    inserted: function (el) {
			    	$(el).click(function(event) {
			    		$(el).children('div').toggleClass('active').parent().siblings().children('div').removeClass('active');;
			    	});
			       
			    }
			}
		},
        mounted(){
		    $('#myModal').on('shown.bs.modal', function () {
		        $('#myInput').focus()
		    })

        	contentWidth()
        	 function contentWidth(){
		         $('.stateNav').css({"width":$(window).outerWidth(true)-$("#slide_nav").width()-($(window).outerWidth(true)-$(window).width())})
		      };

        	$(window).resize(function(){
        		 contentWidth()
        	});
            
            $(".model_ul").delegate('li', 'click', function(event) {
            	$(this).children('div:last-child').toggleClass('active');
            });
        },
	}
</script>
<style>
    .stateNav{
    	  background: white;
    	  position: fixed;
    	  float: right;
    	  right: 0px;
    	  border-radius: 0px;
    }
    .stateNav,.dropdown span.down,.user,.down_icon,.user_icon,.down_list>li>div, #navModal .modal-body ul li div{
    	display: inline-block;
    }
    .stateNav,.navbar{
      border-radius: 0px;
    }
    .bigstate_nav{
    	width: 96%;
    }
    .stateNav_changeSty{
    	 width: 50px;
    	 overflow: hidden;
    }
    .navbar{
    	z-index: 11;
    	border-radius: 0px;
    }
	.navbar-header{
		width: 180px;
		height: 4.167rem;
		background: #3c3d45;
	}
	.zhedie_one{
		background-image: url(.././assets/image/top_nav_zhedie.png);
		position: absolute;
		top: 12px;
		width: 20px;
		height: 20px;
		margin-left: 10px;
	}
	.zhedie_two{
		background-image: url(.././assets/image/top_nav_zhedie2.png);

	}
	.hiden{
		display: none;
	}
	.container-fluid{
		padding-left: 0;
	}
	.navbar>.container-fluid .navbar-brand{
		margin-left: 0px;
	}
	.dropdown span{
		width: 11px;
		height: 11px;
	}
	.dropdown span.down{
		background-image: url(.././assets/image/nav_arrow_down.png);

	}
	.navbar-right li{
		height: 50px;
		border-left: 1px solid #edeef1;
		padding: 0px 20px;
		line-height: 50px;
	}
	.user{
		height: 50px;
		position: relative;
		left: 4px;
		bottom: 6px;
	}
	.down_icon{
		position: relative;
		width: 50px;
		height: 50px;
		text-align: center;
		bottom: 16px;
	}
	.user p:first-child{
		  font-size: 14px;
		  color: #fa8919;
	}
	.user p{
		line-height: 12px;
		font-size: 12px;

	}
	p{
		margin: 0;
	}

	.user_icon{
		background-image: url(.././assets/image/top_nav_photo.png);
		width: 47px;
		height: 46px;
		position: relative;
		top: 2px;
		
	}
	.stateNav>.down_list{
		background: white;
		width: 182px;
		height: 140px;
		border-radius: 0px;
		margin-right: 22px;
		-webkit-box-shadow:0 1px 5px rgba(0,0,0,.175);
		-moz-box-shadow:0 1px 5px rgba(0,0,0,.175);
		-ms-box-shadow:0 1px 5px rgba(0,0,0,.175);
		box-shadow: 0 1px 5px rgba(0,0,0,.175);
	}
	.stateNav>.dropdown-menu li{
		border-left:0px;
		font-size: 12px;
		color: #3a3a3a;
		width: 100%;
	}


	/*下拉框样式*/
	 .down_list>li{
	 	text-align: center;
        width: 100%;
        padding: 0px;
        height: 40px;
        line-height: 40px;
        text-align: left;
        text-indent: 2.6em;
        font-size: 12px;
	 }
	 .down_list>li>div{
	 	width: 30px;
	 	height: 14px;
		position: relative;
		top: 2px;
	 	background-repeat: no-repeat;
	 }
	 .down_list>li:first-child>div{
	 	background-image: url("../assets/image/top_nav_qiehuan1.png");

	 }
	 .down_list>li:first-child>div.active{
	 	background-image: url("../assets/image/top_nav_qiehuan2.png");
	 }
	 .down_list>li:nth-child(2)>div{
	 	background-image: url("../assets/image/top_nav_me1.png");

	 }
	 .down_list>li:nth-child(2)>div.active{
	 	background-image: url("../assets/image/top_nav_me2.png");
	 }
	 .down_list>li:last-child>div{
	 	background-image: url("../assets/image/top_nav_exit1.png");

	 }
	 .down_list>li:last-child>div.active{
	 	background-image: url("../assets/image/top_nav_exit2.png");

	 }
	 .down_list>li:hover{
	 	color: #fa8919;

	 }
     #navModal .modal-body ul{
     	width: 80px;
     	background:white;
     	padding: 0px;
     	border-radius: 6px;
     }
     #navModal .modal-sm{
     	margin:20% auto;
     }
      #navModal .modal-body{
      	padding: 0px;
      }
     #navModal .modal-body ul li{
     	 width: 298px;
     	 line-height: 30px;
     	 border-radius: 6px;
     }
    #navModal .modal-body ul li div p{
    	line-height: 30px;
    	font-size: 12px;

    }
    #navModal .modal-body ul li div p:first-child{
    	color: #fa8919;
    	font-size: 14px;
    }
    #navModal .modal-body ul li div:first-child{
    	width: 29%;
    	background-image: url("../assets/image/top_nav_photo.png");
    	background-position:center center;
    	position: relative;
        top: 8px;
    }
     #navModal .modal-body ul li div:first-child,#navModal .modal-body ul li div:last-child{
     	background-repeat: no-repeat;
    	height: 60px;
    	position: relative;
        top: 7px;

     }
    #navModal .modal-body ul li div:last-child{
    	width: 20%;
    	background-image: url("../assets/image/top_nav_chioce1.png");
    	background-position: 54px 0px;
    	float: right;
    	;
    }
    #navModal .modal-body ul li div.active{
    	 background-image: url("../assets/image/top_nav_chioce2.png"); 
    }
    #navModal .modal-body ul li:hover{
    	background: #ededed;
    }

    #navModal .modal-body .close{
    	position: absolute;
	    right: -24px;
	    bottom: 51px;
	    zoom: 1.4;
	    color: white;
    }
    #navModal .modal-body .close:hover{
    	color: white;
    }
</style>