<template>
  <div id="container">
  </div>
</template>

<script>
import 'echarts-wordcloud'
  export default {
    mounted() {
      let data = [{
        name:'xlx',
        value:'100',
      },{
        name:"xzx",
        value:'200'
      },{
        name:"vue",
        value:'400'
      },
      {
        name:'react',
        value:'250'
      }
      ]
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
        series:[{
          type:'wordCloud',
          data,
          shape:'circle',
          textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
          }
        }]
      })
    },
  }
</script>

<style lang="scss" scoped>
#container{
  width: 100%;
  height: 100%;
}
</style>
