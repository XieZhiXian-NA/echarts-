<template>
  <div>
  <common-card
    title="累计用户数"
    value="1,087,503"
  >
   <template>
    <div id="total-users-chart" :style="{width:'100%',height:'100%'}"></div>
  </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">35.91%</span>
        <div class="decrease"></div>
      </div>
  </template>
  </common-card>
  </div>
</template>

<script>
import CommonCard from '@/utils/mixins/commonCardMixin.js'
export default {
  mixins: [CommonCard],
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [{
        type: 'bar',
        stack: '总量',
        data: [200],
        barWidth: 10,
        itemStyle: {
          color: '#45c946'
        }
      },
      {
        type: 'bar',
        data: [250],
        stack: '总量',
        itemStyle: {
          color: '#eee'
        }
      },
      {
        type: 'custom',
        data: [200],
        stack: '总量',
        renderItem: (params, api) => {
          const value = api.value(0) // data中的第一个元素
          const endPoint = api.coord([value, 0])
          return {
            type: 'group',
            position: endPoint,
            children: [
              {
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996Z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }

              },
              {
                type: 'path',
                shape: {
                  d: 'm0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }

              }
            ]

          }
        }
      }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer{
  display: flex;
  align-items: center;
  .month{
    margin-left: 10px;
  }
}

</style>
