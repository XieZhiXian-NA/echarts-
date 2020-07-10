{
   var myColor = ['#1089E7','#f57474','#56D0E3','#f8b448','#8b7bf6']
   let option= {
    grid: {
        left: '15%',
            top: '10%',
                bottom: '10%',
                    //containLabel: true
    },
    xAxis: {
        show:false
    },
    yAxis: [
        {
            type: 'category',
            inverse:true,
            data: ['HTML', 'CSS3', 'javascript', 'VUE', 'NODE'],
            axisLabel:{
                color:'white'
            },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
        },
        {
            type: 'category',
            inverse:true,
            data: [702,  350, 610, 793, 664],
            axisLabel:{
                color:'white'
            },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
        },
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            yAxisIndex:0,
            data: [70, 34, 60,78,69],
            barCategoryGap:50,
            barWidth:10,
            itemStyle:{
                barBorderRadius:20,
                color:function(param){
                    return myColor[param.dataIndex]
                }
            },
            label:{
                show:true,
                position:'inside',
                formatter:"{c}%"
            }
        },
        {
            name: '框',
            type: 'bar',
            data: [100,100,100,100,100],
            barCategoryGap:50,
            barWidth:15,
            itemStyle:{
                color:"none",
                borderColor:'#00c1de',
                borderWidth:3,
                barBorderRadius:15
            },
            yAxisIndex:1,
        }
    ]
   }
   const chart = echarts.init(document.getElementById('echart2'));
   chart.setOption(option)

}