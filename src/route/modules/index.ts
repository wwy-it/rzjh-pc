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
                path: '/cost-category',
                name: 'cost-category',
                component: () => import('@/views/Work/CostCategory.vue'),
                meta: { title: "成本类别" }
            },
            {
                path: '/rate',
                name: 'rate',
                component: () => import('@/views/Work/Rate.vue'),
                meta: { title: "账户效率" }
            },
            {
                path: '/accounts',
                name: 'accounts',
                component: () => import('@/views/Work/Accounts.vue'),
                meta: { title: "账户排名" }
            },
            {
                path: '/spend',
                name: 'spend',
                component: () => import('@/views/Work/Spend.vue'),
                meta: { title: "支出分析" }
            },
            {
                path: '/trend',
                name: 'trend',
                component: () => import('@/views/Work/Trend.vue'),
                meta: { title: "Trend & Notification" }
            },
            {
                path: '/optimization',
                name: 'optimization',
                component: () => import('@/views/Analyzer/Optimization.vue'),
                meta: { title: "optimization" },
                children: [
                    {
                        path: '/optimization/compute',
                        name: 'compute',
                        component: () => import('@/views/Analyzer/Compute.vue'),
                        meta: { title: "计算概述" },
                    },
                    {
                        path: '/optimization/containers',
                        name: 'containers',
                        component: () => import('@/views/Analyzer/Containers.vue'),
                        meta: { title: "容器" },
                    },
                    {
                        path: '/optimization/elastic',
                        name: 'elastic',
                        component: () => import('@/views/Analyzer/Elastic.vue'),
                        meta: { title: "弹性应用" },
                    },
                    {
                        path: '/optimization/reservation',
                        name: 'reservation',
                        component: () => import('@/views/Analyzer/Reservation.vue'),
                        meta: { title: "预订" },
                    },
                ]
            },
            {
                path: '/test',
                name: 'test',
                component: Test,
                meta: { title: "代码测试" },
            },
        ]
    },
]

export default routes