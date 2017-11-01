<template>
  <div>
    <puliceCatalog :scataLog="needsRequest"></puliceCatalog>
    <div class="needs_request">
      <div class="request_content">
        <div class="form-group form_heard">
          <img :src="catalogIcon">
          <span>{{title}}</span>
        </div>
        <needsTitle :postCo="postCode"></needsTitle>
        <tables :tableTitle="tableTitle" :tableBody="tableBodyData"></tables>
      </div>
    </div>
  </div>
</template>

<script >
import puliceCatalog from "../components/puliceCatalog.vue"
import needsTitle from "../components/needsTitle.vue"
import tables from '../components/tables.vue'
export default {
  data() {
    return {
      title: '需求审核',
      tabs: ["待审批"],
      tableTitle: ["需求单号", "一级部门", "二级部门", "三级部门", "岗位名称", "需求人员", "申请人", "期望入场时间", "状态", "操作"],
      needsRequest: [
        { title: "首页", path: "/home" },
        { title: "需求管理", path: "/needs/release" },
        { title: "需求审核", path: "/needs/request" }
      ],
      catalogIcon: require("../assets/image/title_address.png"),

    }
  },
  computed: {
    tableBodyData: function() {
      return this.$store.state.NeedsRequest
    },
    postCode: function() {
      return this.$store.state.requestData
    }
  },
  methods: {
    changeColor(e) {
      // this.$store.dispatch("functionalOperation",e)
    }
  },
  components: {
    needsTitle,
    tables,
    puliceCatalog,
  },
  mounted() {
    var than = this.$data
    var then = this.$router
    $("tbody>tr>td:last-child").html("<button type='button' class='btn btn-default'>查看</button>");
    $("tbody>tr>td:last-child").on("click", function() {
      then.push("request/requrstList")
    })

  }

}


</script>

<style>
.needs_request {
  width: 97%;
  height: 91%;
  background: white;
  position: absolute;
  margin-left: 1.5%;
}

.nav-tabs>li>a.tbActive {
  border-bottom: 1px solid #fa8919;
}

.table_bordered {
  width: 100%;
  margin: auto;
}

.nav-tabs {
  border: 0px;
}

.request_content {
  width: 96%;
  margin: auto;
}

.form_heard span {
  font-size: 14px;
}

.form_heard {
  height: 46px;
  margin-bottom: 0px;
  line-height: 46px;
  border-bottom: 2px solid #edeef1;
}
</style>