<template>
	<div>
		<puliceCatalog :scataLog="interview_rd"></puliceCatalog>
		<div class="interview_rd">
			<div class="interview_rd_content">
				<div class="form-group form_heard">
					<img src="../assets/image/title_address.png">
					<span>历史简历库</span>
				</div>
				<div class="form-group interview_rd_btn">
					<InterviewSearch></InterviewSearch>
				</div>
				<div class="form-group interview_rd_table">
					<table class="table table-condensed">
						<thead>
							<tr>
								<td colspan="6">
									<ul class="lookTitle" @click="interviewList">
										<li class="active">全部</li>
										<li>已通过</li>
										<li>未通过</li>
									</ul>
								</td>
								<td>
									<img src="../assets/image/jl_xqdh2.png">
									<label>需求单号</label>
								</td>
								<td>
									<img src="../assets/image/jl_scsj1.png">
									<label>上传时间</label>
								</td>
								<td>
									<label>共有
										<span>10</span>份简历</label>
								</td>
							</tr>
						</thead>
						<tbody class="tbody_content">
							<tr>
								<td>需求单号</td>
								<td>姓名</td>
								<td>岗位名称</td>
								<td>供应商</td>
								<td>工作年限</td>
								<td>学历</td>
								<td>上传时间</td>
								<td>状态</td>
								<td>预览下载</td>
							</tr>
							<!-- <tr v-for="interviewrdData in interviewrdData" :needsId="interviewrdData.NEEDSCVID">
							            				<td>{{interviewrdData.NEEDS_CODE}}</td>
							            				<td>{{interviewrdData.NAME}}</td>
							            				<td>{{interviewrdData.POST_CODE}}</td>
							            				<td>{{interviewrdData.SUPNAME}}</td>
							            				<td>{{interviewrdData.WORKEXPERIENCE}}</td>
							            				<td>{{interviewrdData.EDUCATION_CODE}}</td>
							            				<td>{{interviewrdData.CREATEDATE}}</td>
						                      <td>{{interviewrdData.ISSELECTED}}</td>
							            				<td>
							            					<img src="../assets/image/jl_look1.png"/>
							            					<img src="../assets/image/jl_download1.png"/>
							            				</td>
									            	</tr> -->
						</tbody>

					</table>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import puliceCatalog from "../components/puliceCatalog.vue"
import InterviewSearch from "../components/InterviewSearch.vue"
export default {
	data() {
		return {
			interview_rd: [
				{ title: "首页", path: "/home" },
				{ title: "面试管理", path: "/interview/InterviewScreening" },
				{ title: "历史简历库", path: "/interview/InterviewResumeDatabase" }
			],
		}
	},
	computed: {
		interviewrdData: function() {
			return this.$store.state.interview
		},
	},
	methods: {
		interviewList(e) {
			$(e.target).addClass('active').siblings().removeClass('active')
		},
	},
	mounted() {
		var _this = this.$router;
		var _then = this.$store;
		$(".tbody_content").delegate('tr', 'click', function(e) {
			if ($(e.target).is('img')) {
				return
			} else {
				_then.dispatch("setAjax", "cvdb/listNeedsCvdbDetails.do?needsCvId=" + $(e.target).attr("needsId") + "")
				_this.push("/interview/InterviewResumeDetails/info")
			}
		})


	},
	components: {
		puliceCatalog,
		InterviewSearch
	}

}

</script>

<style>
.interview_rd {
	width: 97%;
	height: 94%;
	background: white;
	position: absolute;
	margin-left: 1.5%;
}

.interview_rd_content {
	width: 96%;
	margin: 0px 20px;
}

.interview_rd_btn {
	width: 100%;
	white-space: normal;
}

.form_heard span {
	font-size: 14px;
}

.form_heard {
	height: 46px;
	width: 100%;
	margin-bottom: 0px;
	line-height: 38px;
	border-bottom: 2px solid #edeef1;
}

.lookTitle {
	width: 35%;
	height: 40px;
	padding: 0px;
	margin-bottom: 0px;
}

.lookTitle li {
	float: left;
	padding: 0px 12px;
	height: 40px;
	line-height: 40px;
	margin: 0px 10px;
	color: #636363;
	font-size: 12px;
	text-align: center;
}

.lookTitle li:hover {
	color: #fa8919;
}

.lookTitle li.active {
	border-bottom: 2px solid #fa8919;
	color: #fa8919;
}

.tbody_content>tr:first-child:hover {
	background: white;
}

.tbody_content>tr:hover {
	background: #fafafa;
}

.interview_rd_table>.table-condensed>thead>tr>td {
	padding: 0px;
}

.interview_rd_table>.table-condensed>thead>tr>td:nth-child(2),
.interview_rd_table>.table-condensed>thead>tr>td:nth-child(3),
.interview_rd_table>.table-condensed>thead>tr>td:nth-child(4) {
	width: 100px;
	height: 34px;
	text-align: center;
}

.interview_rd_table>.table-condensed>tbody>tr>td {
	font-size: 12px;
	height: 40px;
	line-height: 30px;
	border: 0px;
}

.interview_rd_table>.table-condensed>tbody>tr:first-child {
	color: #b0b0b0;
	text-align: center;
}

.interview_rd_table>.table-condensed>tbody>tr:first-child>td {
	line-height: 32px;
}

.interview_rd_table>.table-condensed>thead>tr,
.interview_rd_table>.table-condensed>thead>tr>td,
.interview_rd_table>.table-condensed>tbody>tr {
	border: 1px solid #f1f1f1;
}

.interview_rd_table>.table-condensed>thead>tr {
	background: #fafafa;
}

.interview_rd_table>.table-condensed>thead>tr>td {
	line-height: 34px;
}

.interview_rd_table>.table-condensed>tbody>tr>td {
	width: 10%;
	text-align: center;
}
</style>