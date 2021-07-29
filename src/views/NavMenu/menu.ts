interface Item {
    path: string,
    name: string,
    title: string,
    fold?: boolean,
    children?: Item[]
}

const menu: Item[] = [
    {
        path: '/home',
        name: 'home',
        title: "主页"
    },
    {
        path: '/basic-information',
        name: 'basic-information',
        title: "申请环节"
    },
    {
        path: '/apply-loan-table',
        name: 'apply-loan-table',
        title: "申请列表"
    },
    {
        path: '/loan-before-info',
        name: 'loan-before-info',
        title: "贷前信息录入"
    },
    {
        path: '/loan-before-table',
        name: 'loan-before-table',
        title: "贷前信息列表"
    },
    {
        path: '/$node',
        name: '$node',
        title: "报告",
        children: [
            {
                path: '/business-report',
                name: 'business-report',
                title: "营业报告"
            },
            {
                path: '/inventory-report',
                name: 'inventory-report',
                title: "库存报告"
            },
            {
                path: '/orders',
                name: 'orders',
                title: "订单"
            },
        ]
    },
    {
        path: '/test',
        name: 'test',
        title: "代码测试"
    },
]

export default menu