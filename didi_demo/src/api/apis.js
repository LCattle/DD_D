    import Vue from "vue";
    import vueResource from 'vue-resource';
    import Store from 'store'
    Vue.use(vueResource);


    const serverUrl = "http://10.39.137.104:8080/";
    // const serverUrl = "";

    var randomTime = "";

    Vue.http.options = {
        before: function(request) {
            if (Store.get("Access-Token")) { 
               request.headers.set('Access-Token', Store.get("Access-Token")); 
            }
        }  
    }

    Vue.http.options.headers = {
        "Content-Type": "application/json"
    }

    Vue.http.interceptors.push((request, next) => {
        next()
    });

    const request = (method, url, data) => {
        var _ = new Date().getTime();
        if (method == "post") {
            return Vue.http.post(url ,{}, data)
        } else {
            return Vue.http.get(url, {params:data})
        }
    }

export default {
    baseApisUrl: serverUrl,
    login: {
        confirmUser: function(data) {//登录
            return request("get", serverUrl + "didiopms/confirmUser.do", data)
        },
        tableList: function(data) {//年度预算列表
            return request("get", serverUrl + "didiopms/budget/selectBudgetStatus.do",data)
        },
        indexUserList: function(Path) {//获取用户信息
            return request("post", serverUrl + "didiopms"+Path+".do")
        },
    },
    common: {
        // getRegionById: function(data) { //省市区下拉
        //     return request("post", serverUrl + "system/getRegionById", data)
        // },
        // updateUser: function(data) { //修改账户资料
        //     return request("post", serverUrl + "customer/updateUser", data)
        // },
        // getEnumType: function(data) { //根据名称获取类型对应的所有元素
        //     return request("post", serverUrl + "system/getEnumType", data)
        //         //type:'paymentType' 支付方式
        //         //type:'orderStatusVender' 订单状态
        // }
    },
    setting: {

        // //仓库管理
        // getDepotPageList: function(data) { //查询仓库分页列表
        //     return request("post", serverUrl + "depot/getDepotPageList", data)
        // },
        // saveOrUpdateDepot: function(data) { //新增编辑仓库
        //     return request("post", serverUrl + "depot/saveOrUpdateDepot", data)
        // },
        // operateDepot: function(data) { //停用启用
        //     return request("post", serverUrl + "depot/operateDepot", data)
        // },
        // getManagerListByDepot: function(data) { //根据仓库查询仓库主管、货主列表
        //     return request("post", serverUrl + "depot/getManagerListByDepot", data)
        // },
        // getDepotDetail: function(data) { //查询仓库详情
        //     return request("post", serverUrl + "depot/getDepotDetail", data)
        // },
        // //仓库主管管理/货主管理
        // getUserPageList: function(data) { //查询用户分页列表
        //     return request("post", serverUrl + "customer/getUserPageList", data)
        // },
        // saveOrUpdateManger: function(data) { //新增或修改管理员
        //     return request("post", serverUrl + "manager/saveOrUpdateManger", data)
        // },
        getInterviewDatails:function(data) { //新增或修改管理员
            return request("get", serverUrl + "didiopms/cvdb/listNeedsCvdbDetails.do", data)
        },
        getNeedsTitleList: function(data) { //新增或修改管理员
            return request("get", serverUrl + "didiopms/needs/findObjects.do", data)
        },
        getUserDetail: function(data) { //获取详情
            return request("get", serverUrl + "didiopms/customer/getUserDetail.do", data)
        },
        getBudgetDetail:function(data){
            return request("get",serverUrl + "didiopms/budget/selectBudgetDetails.do" , data)
        },
        getBudgetCode:function(data){//审核进度
            return request("get",serverUrl + "didiopms/system/getNodesAndExecuteidea.do",data)
        }
        // operateUser: function(data) { //重置密码、停用、启用、删除
        //     return request("post", serverUrl + "customer/operateUser", data)
        // },
        // bulidDepotRelation: function(data) { //入驻仓库
        //     return request("post", serverUrl + "manager/bulidDepotRelation", data)
        // },
        // getAllDepotList: function(data) { //获取所有仓库数据
        //     return request("post", serverUrl + "depot/getAllDepotList", data)
        // },
        // getRolePageList: function(data) { //角色分页列表
        //     return request("post", serverUrl + "role/getRolePageList", data)
        // },
        // saveOrUpdateUser: function(data) { //新增或修改普通用户
        //     return request("post", serverUrl + "customer/saveOrUpdateUser", data)
        // },
        // getRoleList: function(data) { //所有角色列表
        //     return request("post", serverUrl + "role/getRoleList", data)
        // },
        // getRoleDetail: function(data) { //获取指定角色详情
        //     return request("post", serverUrl + "role/getRoleDetail", data)
        // },
        // operateRole: function(data) { //参数：roleId status（2:启用;3:停用）
        //     return request("post", serverUrl + "role/operateRole", data)
        // },
        // saveOrUpdateRole: function(data) { //新增或修改角色
        //     return request("post", serverUrl + "role/saveOrUpdateRole", data)
        // }
    }
}