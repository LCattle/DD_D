<template>
	<div class="login">
		<article>
			<header><img :src="login"/></header>
			<section>
				<div class="login-input">
					<label>用户名：</label>
					<input type="text" />
				</div>
				<div class="login-input">
					<label>密码：</label>
					<input type="password" maxlength="20" />
				</div>
				<div class="login-btn">
					<div class="login-btn1"></div>
					<div class="login-btn2" @click="callApi"></div>
				</div>
			</section>
		</article>
	</div>
</template>

<script>
   export default{
   	 data(){
   	 	 return{
   	 	 	 login:require(".././assets/image/logo.png")
   	 	 }
   	 },
   	 methods:{
        callApi: function() {
        	let username=$('input[type=text]').val()
        	let posswld=$('input[type=password]').val()

            console.log(username)
            console.log(posswld)

   	 		  		 this.$http.get("http://10.39.137.105:8080/didiopms/confirmUser.do?username="+username+"&userpwd="+posswld+"").then(response => {
                                console.log(response)

                                this.$router.push('/home')
   	 		  		 	        $('.contents').prev().css('display', 'block');

                                this.$http.get("http://10.39.137.105:8080/didiopms/indexUserList.do",{credentials:true})
                                .then(function(response){
                              	       // this.$store.state.slideNavList=response.body.data.menuList
                              	       console.log(response)
                                }, function(response){
                              	    console.log(response)

                                })
				    }, response => {

						console.log(response)
					});
			    }
	       // }

   	 },
   	 created(){
   	 	$(".contents").prev().css({"display":"none"});
   	 }
        
}
	
</script>

<style>
   body.html{width: 100%;height: 100%}
   body{
	    background:url(../assets/image/login-bg1.png);
	}
.login{
	  background:url(../assets/image/login-bg1.png);
	  width: 100%;
	  height: 100%;
}
.login article{
	width:386px;
	height:230px;
	position: fixed;
	left: 50%;
	top:50%;
	margin-left: -205px;
	margin-top: -115px;
	z-index: 20;
	}
.login article header{
	margin-bottom: 40px;
	text-align: center;
	}
.login-input{
	overflow: hidden;
	margin-bottom: 10px;
	width:380px;
	}
.login-input label{
	float: left;
	width: 57px;
	text-align: right;
	font-size: 14px;
	color: #b5b5b5;
	line-height: 40px;
	text-shadow: 0 1px 1px #000000;
	}
.login-input input{
	float:left;
	width: 308px;
	height:40px;
	border-radius: 5px;
	background: rgba(36,35,35,.5);
	/*box-shadow: inset 0px 1px 10px rgba(0,0,0,0.6);*/
	border-top: none;
	border-left: none;
	border-right: none;
    border-bottom: 1px solid #474747;
    outline: none;
    text-indent: 10px;
    color: #ffffff;
    font-size: 14px;
    background: url(../assets/image/input-bg.png);
    }
    
.login section{
	position: relative;
	width:410px;
	height:120px;
	}  
    
.login-btn{
	width: 66px;
	height:66px;
	position: absolute;
	right:10px;
	top:13px;
	background: url(../assets/image/login-btn-bg.png) no-repeat;
	}   

.login-btn div{
	position: absolute;
	left: 0;
	top: 0;
	cursor: pointer;
	width: 66px;
	height:66px;
	-webkit-transition: all 0.10s ease-in-out;
    -moz-transition: all 0.10s ease-in-out;
    -ms-transition: all 0.10s ease-in-out;
    transition: all 0.10s ease-in-out;}
.login-btn .login-btn1{
	opacity: 1;
	background:url(../assets/image/login-btn1.png);
	}      
.login-btn .login-btn2{
	opacity: 0;
	background:url(../assets/image/login-btn2.png);
	}  

.login-btn:hover .login-btn2{
	opacity: 1;
	}        
.login section h5{
	color:#fdac28;
	font-size:12px;
	font-weight: normal;
	text-shadow: 0 1px 1px #000000;
	cursor: pointer;
	position: absolute;
	left: 56px;
	bottom: 0px;
}    
.login section h5:hover{
	color:#ef8700;
}   

	
</style>