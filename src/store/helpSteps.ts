/**
 * 用户演示教程数据
 */
interface Card {
    title: string,
    content: string,
    model: number,
    index: number,
}

const helpCard: Card[] = [
    {
        title: "欢迎来到成本分析",
        content: "成本分析是对日常使用的费用成本进行分析并进行 可视化展示。",
        model: 1,
        index: 1,
    }, {
        title: "成本分析数据可视化展示",
        content: "通过折线图看出每个月成本信息",
        model: 1,
        index: 2
    }
]

export default helpCard