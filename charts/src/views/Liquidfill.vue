<template>
  <div id="container">

  </div>
</template>

<script>
import 'echarts-liquidfill'
  export default {
    mounted() {
      const data = [0.68,{
        value:0.5,
        direction:'left'
      },0.4]
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
         series:[{
           type:'liquidFill',
           color:['red','blue','green'],
           data,
           itemStyle:{
             opacity:0.6
           },
           emphasis:{
             itemStyle:{
               opacity:0.9
             }
           },
           //amplitude:1,
           backgroundStyle:{
             color:'purple',
             borderWidth: 5,
            borderColor: 'pink',
           },
           outline:{
             show:true,
             borderDistance:10,
             itemStyle:{
                borderWidth:2,
                borderColor:'purple',
             }
           },
           shape:'diamond'
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
