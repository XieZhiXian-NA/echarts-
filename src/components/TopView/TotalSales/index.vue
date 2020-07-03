<template>
  <div>
  <common-card
    title="累计销售额"
    value="￥ 32,039,165"
  >
  <template>
    <div class="compare-wrapper">
      <div class="compare-chart">
        <span>日同比:</span>
        <span class="emphasis">7.33%</span>
        <div class="increase"></div>
    </div>
    <div class="compare-chart">
        <span>月同比:</span>
        <span class="emphasis">30.79%</span>
          <div class="decrease"></div>
    </div>
    </div>

  </template>
  <template v-slot:footer>
    <span>昨日销售额</span>
    <span class="emphasis">￥ 32,039,165</span>
  </template>
  </common-card>
  </div>
</template>

<script>
import CommonCard from '@/utils/mixins/commonCardMixin.js'
export default {
  mixins: [CommonCard]
}
</script>

<style lang="scss" scoped>
.compare-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare-chart{
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 12px;
    color: #666;
  }
}
</style>
