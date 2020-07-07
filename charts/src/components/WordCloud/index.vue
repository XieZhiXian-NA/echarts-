<template>
  <ve-wordcloud :data="chartData"
   :settings="chartSettings"
   height="100%"/>
</template>

<script>

  export default {
    data(){
      return {
        chartData:{
          columns:['name','value'],
          rows:[
            {
              name:'vue',
              value:100*Math.random()
            },
            {
              name:'react',
              value:100*Math.random()
            },
            {
              name:'javascript',
              value:100*Math.random()
            },
            {
              name:'typescript',
              value:100*Math.random()
            },
            {
              name:'canvas',
              value:100*Math.random()
            },
            {
              name:'echarts',
              value:100*Math.random()
            },
            {
              name:'BMap',
              value:100*Math.random()
            },
            {
              name:'webpack',
              value:100*Math.random()
            },
            {
              name:'node',
              value:100*Math.random()
            },
            {
              name:'nginx',
              value:100*Math.random()
            },
            {
              name:'docker',
              value:100*Math.random()
            },



          ]
        },
        chartSettings:{}
      }},
      mounted() {
        this.chartSettings = {
          //color:['rgba(97,216,0,.7)','rgba(204,178,26,.7)','rgba(245,116)']
        }

      },
}

</script>

<style lang="scss" scoped>

</style>
