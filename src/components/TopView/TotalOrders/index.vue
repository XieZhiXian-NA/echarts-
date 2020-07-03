<template>
  <div>
  <common-card
    title="累计订单量"
    value="1,157,420"
  >
  <template>
    <div id="total-orders-chart" :style="{width:'100%',height:'100%'}"></div>
  </template>
  <template v-slot:footer>
    <span>昨日订单量</span>
    <span class="emphasis">￥ 32,039,165</span>
  </template>
  </common-card>
  </div>
</template>

<script>
import CommonCard from '@/utils/mixins/commonCardMixin.js'
export default {
  mixins: [CommonCard],
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      series: [
        {
          name: '',
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
