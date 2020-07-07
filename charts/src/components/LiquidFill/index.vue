<template>
 <ve-liquidfill
 :data="chartData"
 height="100%"
 :settings="chartSettings"
  />
</template>

<script>
function getColor(value){
  return value>0 && value<=0.5 ? 'rgba(97,216,0,.7)':
         value>0.5 && value<=0.8 ? 'rgba(204,178,26,.7)':
         value>0.8 ? 'rgba(241,47,28,.7)':'#c7c7cb'
}
  export default {
   data(){
     return {
       chartData:{
         columns:['title','percent'],//title value
         rows:[{title:'rate',percent:0.49}]
       },
      chartSettings:{}
     }
   },
   mounted() {
     this.chartSettings = {
         //配置样式
         seriesMap:{
           rate:{
             radius:'80%',
             label:{
                 formatter:(v)=>{
                   return `${Math.floor(v.data.value*100)}%`
                 },
                 textStyle:{
                    fontSize:36,
                    color:'#999',
                    fontWeight:'normal'
                  },
                  position:['50%','50%'],
                  //insideColor:'red' 当水球和文字重叠时 文字的颜色

             },
             outline:{
               itemStyle:{
                 borderColor:'#aaa4a4',
                 borderWidth:1,
                 color:'none',
                 shadowBlur:0,
                 shadowColor:'#fff'
               },
               borderDistance:0
             },
             backgroundStyle:{
               color:'#fff'
             },
             itemStyle:{
               shadowBlur:0,
               shadowColor:'#FFF'
             },
             amplitude:8,
             color:[getColor(this.chartData.rows[0].percent)]
           }
         }
       }
   },
  }
</script>

<style lang="scss" scoped>

</style>
