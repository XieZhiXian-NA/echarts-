{
    let options = option = {
   
        legend: {
            top:'0%',
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            textStyle:{
                color:"rgba(255,255,255,.5)",
                fontSize:12
            }
        },
       
        grid: {
            left: '10',
            right: '10',
            bottom: '10',
            top:'30',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLabel:{
                    textStyle:{
                        color:'rgba(255,255,255,.6)',
                        fontSize:12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    textStyle:{
                        color:'rgba(255,255,255,.6)',
                        fontSize:12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210],
                smooth:true,
                lineStyle:{
                    color:'#0184d5',
                    //width:5
                },
                areaStyle:{
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"rgba(1,132,213,0.6)"
                            
                        },
                        {
                            offset:0.8,
                            color:"rgba(1,132,213,0.1)"
                        }
                    ],false), 
                    shadowColor:"rgba(0,0,0,0.1)",
                   
                },
               
                // 设置拐点大小
                symbol:'circle',
                symbolSize:8,
                itemStyle:{
                    color:'#0184d5',
                    borderColor:"rgba(221,220,107,0.1)",
                    borderWidth:12
                },
                showSymbol:false,
            },
            {
                name: '联盟广告',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310],
                smooth:true,
                lineStyle:{
                    color:'#00d887',
                    //width:5
                },
                areaStyle:{
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"rgba(0,216,135,0.6)"
                            
                        },
                        {
                            offset:0.8,
                            color:"rgba(0,216,135,0.1)"
                        }
                    ]) ,
                    
                shadowColor:"rgba(0,0,0,0.1)",
                },
                
                // 设置拐点大小
                symbol:'circle',
                symbolSize:8,
                itemStyle:{
                    color:'#00d887',
                    borderColor:"rgba(221,220,107,0.1)",
                    borderWidth:12
                },
                showSymbol:false,
            },
            
           
        ]
    };
    const chart = echarts.init(document.getElementById('echart3'));
    chart.setOption(options)
}