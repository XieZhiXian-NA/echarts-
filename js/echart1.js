{
    /*echart1 - 折线图*/
    /*数据源*/
    const source=[
        ['年','2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        ['青年人',820, 932, 901, 934, 1290, 1330, 1520],
        ['老年人',200, 632, 601, 634, 850, 1000, 1100]
    ];

    /*实例化echarts*/
    const chart = echarts.init(document.getElementById('echart1'),'walden');
    /*配置项
    *   title
    *       text '西虹市人民收入增长情况'
    *   dataset 数据集
    *       source 数据源
    *   xAxis
    *       type
    *           category 类目轴
    *       boundaryGap 边界间隙
    *   yAxis
    *       type
    *           value 数值轴
    *   series 系列集合
    *       type 系列类型，如line
    *       seriesLayoutBy 行列映射
    *           column 应到 dataset 的列，默认
    *           row 应到 dataset 的行
    *
    * */
    const option = {
        title:{
            text:'西虹市人民收入增长情况',
            /*textStyle:{
                color:'#fff'
            }*/
        },
        dataset:{source},
        xAxis:{
            type:'category'
        },
        yAxis:{
            type:'value'
        },
        series:[
            {
                type:'line',
                seriesLayoutBy:'row'
            },
            {
                type:'line',
                seriesLayoutBy:'row'
            },
        ]
    };

    /*显示图表*/
    chart.setOption(option);
}
