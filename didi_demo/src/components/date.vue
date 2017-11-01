<template>
	<div>
		<div>
			<label>申请日期</label>
			<input type="text" name="" disabled="disabled" class="start">
            <i class="glyphicon glyphicon-calendar" @click="date_endT"></i>
			<span class="dateTex">至</span>
			<input type="text" name="" disabled="disabled" class="end">
			<i class="glyphicon glyphicon-calendar" @click="date_end"></i>
		</div>
		<div id="calendar">
			  <div class="month">
			  	   <!--日期显示头部-->
				    <ul>
				    	<!--prev-->
					   <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
					   <!--date-->
					   <li class="year-month">
						   <span class="choose-year">{{ currentYear }}年</span>
						   <span class="choose-month">{{ currentMonth }}月</span>
				   		</li>
				   		<!--next-->
				   		<li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
				    </ul>
			  </div>
			  <ul class="weekdays">
				    <li>一</li>
				    <li>二</li>
				    <li>三</li>
				    <li>四</li>
				    <li>五</li>
				    <li style="color:red">六</li>
				    <li style="color:red">日</li>
			  </ul>
			  <ul class="days">
					<li @click="pick(day)" v-for="day in days">
					   <!--今天-->
					   <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{day.getDate() }}</span>
					   <span v-else>
					   <!--今天-->
						   <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
						   <span v-else>{{ day.getDate() }}</span>
					   </span>
					</li>
			  </ul>
	    </div>
	    <div id="calendarT">
			  <div class="month">
			  	   <!--日期显示头部-->
				    <ul>
				    	<!--prev-->
					   <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
					   <!--date-->
					   <li class="year-month">
						   <span class="choose-year">{{ currentYear }}年</span>
						   <span class="choose-month">{{ currentMonth }}月</span>
				   		</li>
				   		<!--next-->
				   		<li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
				    </ul>
			  </div>
			  <ul class="weekdays">
				    <li>一</li>
				    <li>二</li>
				    <li>三</li>
				    <li>四</li>
				    <li>五</li>
				    <li style="color:red">六</li>
				    <li style="color:red">日</li>
			  </ul>
			  <ul class="days">
					<li @click="pick1(day)" v-for="day in days">
					   <!--今天-->
					   <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{day.getDate() }}</span>
					   <span v-else>
					   <!--今天-->
						   <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
						   <span v-else>{{ day.getDate() }}</span>
					   </span>
					</li>
			  </ul>
	    </div>
    </div>
</template>

<script>
	export default {
        data(){
        	return{
        		  currentDay: 1,
				   currentMonth: 1,
				   currentYear: 1970,
				   currentWeek: 1,
				   days: [],
        	}
        },
        created: function() {
		   this.initData(null);
		},
		methods: {
		   date_end(e){
		   	   var flag=true;
		   	      if(flag){
		   	      	 $(e.target).parent().next().css({"display":"block"})
		   	      }else{
		   	      	 $(e.target).parent().next().css({"display":"none"})
		   	      }
		   	    flag=!flag
               
		   },
		   date_endT(e){
		   	  console.log($("#calendarT"))
		   	    $("#calendarT").css({"display":"block"})
		   	      
		   },
		   //获取详细时间公共方法
		   initData(cur){
			    var date;
			    cur?date = new Date(cur):date = new Date();
			    this.currentDay = date.getDate();
			    this.currentYear = date.getFullYear();
			    this.currentMonth = date.getMonth() + 1;
			    this.currentWeek = date.getDay(); // 1...6,0
			    if (this.currentWeek == 0) {
			        this.currentWeek = 7;
			    }
			   var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
			   this.days.length = 0;
			    // 今天是周日，放在第一行第7个位置，前面6个
			    for (var i = this.currentWeek - 1; i >= 0; i--){
				    var d = new Date(str);
				    d.setDate(d.getDate() - i);
				    this.days.push(d);
			    }
			    for (var i = 1; i <= 35 - this.currentWeek; i++) {
			        var d = new Date(str);
			        d.setDate(d.getDate() + i);
		            this.days.push(d);
		        }
		    },
		    pick: function(date) {
		    	$('.end').val(this.formatDate( date.getFullYear() , date.getMonth() + 1, date.getDate()))
		        $('#calendar').hide()
		    },
		    pick1: function(date) {
		    	$('.start').val(this.formatDate( date.getFullYear() , date.getMonth() + 1, date.getDate()))
		        $('#calendarT').hide()
		    },
		    pickPre: function(year, month) {
		   // setDate(0); 上月最后一天
		   // setDate(-1); 上月倒数第二天
		   // setDate(dx) 参数dx为 上月最后一天的前后dx天
		        var d = new Date(this.formatDate(year , month , 1));
		        d.setDate(0);
		        this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
		    },
		    pickNext: function(year, month) {
		        var d = new Date(this.formatDate(year , month , 1));
			    d.setDate(35);
			    this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
		    },
		    
		   // 返回 类似 2016-01-02 格式的字符串
		    formatDate: function(year,month,day){
			   var y = year;
			   var m = month;
			    if(m<10) m = "0" + m;
			        var d = day;
			   if(d<10) d = "0" + d;
			        return y+"-"+m+"-"+d
			    },
		  },
	}
</script>

<style>
	i{
		position: relative;
		right: 20px;
	}
	#calendar,#calendarT{
	  width:200px;
	  height: 189px;
	  margin: 0 auto;
	  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
	  background:white;
	  display: none;
	  position: absolute;
      margin-top: 2px;
      z-index: 20;
      margin-left: 13%;
	  }
	#calendarT{
		margin-left: 1%;
		display: none

	}
	  .month {
	  width: 100%;
	  background: #fa8919;
	  border-radius: 4px 4px 0px 0px;
	  }
	   
	  .month ul {
	  margin: 0;
	  padding: 0;
	  display: flex;
	  justify-content: space-between;
	  }
	  span{
	  	font-size: 12px;
	  }
	  .year-month {
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	  }
	   
	  .year-month:hover {
	  background: rgba(150, 2, 12, 0.1);
	  }
	   
	  .choose-year {
	  padding-right: 10px;
	  }
	   
	  .choose-month {
	  text-align: center;
	  font-size: 12px;
	  }
	   
	  .arrow {
	  padding: 12px;
	  }
	   
	  .arrow:hover {
	  background: rgba(100, 2, 12, 0.1);
	  }
	   
	  .month ul li {
	  color: white;
	  font-size: 12px;
	  text-transform: uppercase;
	  }
	   
	  .weekdays {
	  margin: 0;
	  padding: 10px 0;
	  background-color: #f5f5f4;
	  display: flex;
	  flex-wrap: wrap;
	  color: #63625d;
	  justify-content: space-around;
	  }
	   
	  .weekdays li {
	  display: inline-block;
	  width: 13.6%;
	  text-align: center;
	  }
	   
	  .days {
	  padding: 0;
	  background: #FFFFFF;
	  margin: 0;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	  }
	   
	  .days li {
	  list-style-type: none;
	  display: inline-block;
	  width: 28px;
	  text-align: center;
	  padding-top: 3px;
	  font-size: 12px;
	  color: #63625d;
	  }
	   
	  .days li .active {
	  padding: 2px 8.4px;
	 
	  background: #ff9332;
	  color: #fff;
	  }
	   
	  .days li .other-month {
	    color: gainsboro;
	  }
	   
	  .days li:hover {
	   background: #e1e1e1;
	  }
	  .dateTex{
	  	 margin-right: 12px;
	  }
</style>