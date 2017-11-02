import Vue from 'vue'
import Router from 'vue-router'

const login = resolve => require(['@/views/login.vue'],resolve)
const home = resolve => require(['@/views/home.vue'],resolve)
const budget_year = resolve => require(['@/views/budget.vue'],resolve)
const budget_search = resolve => require(['@/views/budgetSearch.vue'],resolve)
const budget_approval = resolve => require(['@/views/budgetApprovala.vue'],resolve)
const budgetYearRequest = resolve => require(['@/components/request.vue'],resolve)
const needsSearch = resolve => require(['@/views/needsSearch.vue'],resolve)
const needsRequest  = resolve => require(['@/views/needsRequest.vue'],resolve)

const needsRelease  = resolve => require(['@/views/needsRelease.vue'],resolve)
const needsSearchRequest  = resolve => require(['@/views/needsSearchRequest.vue'],resolve)
const InterviewScreening  = resolve => require(['@/views/InterviewScreening.vue'],resolve)
const InterviewResumeDatabase  = resolve => require(['@/views/InterviewResumeDatabase.vue'],resolve)

const InterviewResumeDetails  = resolve => require(['@/views/InterviewResumeDetails.vue'],resolve)

const seeData  = resolve => require(['@/components/seeData.vue'],resolve)
const resumeDetailsInfo  = resolve => require(['@/components/resumeDetailsInfo.vue'],resolve)
const resumeDetailsdetails  = resolve => require(['@/components/resumeDetailsdetails.vue'],resolve)
const viewForm  = resolve => require(['@/components/viewForm.vue'],resolve)
const needSeeData  = resolve => require(['@/components/needSeeData.vue'],resolve)

//import Test from './../views/test.vue'

const Test  = resolve => require(['@/views/test.vue'],resolve)



Vue.use(Router)

export default new Router({
   mode:"history",
  routes: [
    {
      path: '/login',
      component: login,
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/home',
      name: 'home',
      meta:{
          requireAuth:true,
      },
      component: home,
    },
    {
      path: '/budget/budgetList',
      component:budget_year,
    },
    {
       path:"/budget/budgetList/seeData",
       component:seeData
    },
     {
      path: '/budget/selectBudgetLowerDept',
      component:budget_approval,
    },
    {
      path: '/budget/budgetList/require',
      component:budgetYearRequest,
    },
    {
      path: '/budget/budgetSummaryQuery',
      component:budget_search,
      
    },
    // {
    //   path: '/budget/approval',
    //   component:budget_approval,
    // },
    {
      path: '/needs/findObjects',
      component:needsSearch,
    },
    {
      path: '/needs/findObjects/request',
       component:viewForm
    },
    {
      path: '/needs/findCheckList',
      component:needsRequest,
    },
    {
      path: '/needs/listUpNeeds',
      component:needsRelease,
    },
    // {
    //   path: '/needs/release',
    //   component:needsRelease,
    // },
    {
      path: '/needs/request/requrstList',
      component:seeData,
    },
    {
      path: '/needs/request/needSeeData',
      component:needSeeData,
    },
    {
      path: '/cvdb/listCvdbScreening',
      component:InterviewScreening,
    },
    // {
    //   path: '/interview/InterviewResumeDatabase',
    //   component:InterviewResumeDatabase,
    // },
    {
      path: '/interview/InterviewResumeDetails',
      component:InterviewResumeDetails,
    },
    // {
    //   path: '/interview/InterviewResumeDetails',
    //   component:InterviewResumeDetails,
    //   children:[
    //           {
    //             path:"info",
    //             component:resumeDetailsInfo
    //           },
    //           {
    //             path:"bulis",
    //             component:resumeDetailsdetails
    //           },
    //           {
    //             path:"*",
    //             redirect:"/interview/InterviewResumeDetails/info"
    //           },
    //        ]
    // },
    // {
    //   path:'*',
    //   redirect:"/home",
    // }
  ]
})
