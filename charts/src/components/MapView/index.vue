<template>
  <div class="map-view">
    <div class="left">
      <bmap-scatter/>
    </div>
    <div class="right">
       <el-card shadow="hover">
         <template v-slot:header>
           <div class="title">用户月同比增长</div>
         </template>
         <template>
           <div class="chart-wrapper">
             <liquid-fill></liquid-fill>
           </div>
         </template>
       </el-card>
       <el-card shadow="hover">
          <template v-slot:header>
           <div class="title">热门搜索</div>
         </template>
         <template>
           <div class="chart-wrapper">
             <word-cloud/>
           </div>
         </template>
       </el-card>
    </div>
  </div>
</template>

<script>
import BmapScatter from '../BmapScatter'
import LiquidFill from '../LiquidFill'
import WordCloud from '../WordCloud'
export default {
  name: 'TopView',
  components:{
    BmapScatter,
    LiquidFill,
    WordCloud
  }
}
</script>

<style scoped lang="scss">
.map-view{
  display: flex;
  margin-top: 20px;
  .left{
    flex: 0 0 80%;
    //width: 80%;
    height: 600px;
  }
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title{
      display: flex;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
    .chart-wrapper{
      width: 100%;
      height: 190px;
    }
  }
}
</style>
