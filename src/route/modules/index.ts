const Login = () => import('@/views/SignIn/Login.vue')
const Main = () => import('@/views/Main.vue')
const Home = () => import('@/views/Home/Home.vue')
const BuildLink = () => import('@/views/Home/BuildLink.vue')

const Test = () => import('@/views/Home/Test.vue')

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/Main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: { title: "主页" }
            },
            {
                path: '/loan-before-info',
                name: 'loan-before-info',
                component: () => import('@/views/Loan/LoanBeforeInfo.vue'),
                meta: { title: "贷前信息" }
            },
            {
                path: '/loan-before-table',
                name: 'loan-before-table',
                component: () => import('@/views/Loan/LoanBeforeTable.vue'),
                meta: { title: "贷前列表" }
            },
            {
                path: '/apply-loan-form',
                name: 'apply-loan-form',
                component: () => import('@/views/Loan/ApplyLoanForm.vue'),
                meta: { title: "客户申请" }
            },
            {
                path: '/apply-loan-table',
                name: 'apply-loan-table',
                component: () => import('@/views/Loan/ApplyLoanTable.vue'),
                meta: { title: "申请列表" }
            },
            {
                path: '/basic-information',
                name: 'basic-information',
                component: () => import('@/views/Loan/BasicInformation.vue'),
                meta: { title: "申请环节" }
            },
            {
                path: '/business-report',
                name: 'business-reporte',
                component: () => import('@/views/Report/BusinessReport.vue'),
                meta: { title: "营业报告" }
            },
            {
                path: '/inventory-report',
                name: 'inventory-reporte',
                component: () => import('@/views/Report/InventoryReport.vue'),
                meta: { title: "库存报告" }
            },
            {
                path: '/orders',
                name: 'orders',
                component: () => import('@/views/Report/Orders.vue'),
                meta: { title: "订单" }
            },
            {
                path: '/test',
                name: 'test',
                component: Test,
                meta: { title: "代码测试" },
            },
            {
                path: '/build-link',
                name: 'build-link',
                component: BuildLink,
                meta: { title: "建立连接" }
            },


            {
                path: '/cost-analysis',
                name: 'cost-analysis',
                component: () => import('@/views/Work/CostAnalysis.vue'),
                meta: { title: "成本分析" }
            },
            {
                path: '/rate',
                name: 'rate',
                component: () => import('@/views/Work/Rate.vue'),
                meta: { title: "账户效率" }
            },
        ]
    },
]

export default routes