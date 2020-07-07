<template>
  <div class="topView">
    <el-row :gutter="20">
      <!-- 总数是24 -->
      <el-col :span="6">
          <el-card shadow="hover">
            <total-sales/>
          </el-card>
      </el-col>
       <el-col :span="6">
          <el-card shadow="hover">
           <total-orders/>
          </el-card>
      </el-col>
       <el-col :span="6">
          <el-card shadow="hover">
           <today-user/>
          </el-card>
      </el-col>
       <el-col :span="6">
          <el-card shadow="hover">
           <total-users/>
          </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import TotalSales from './TotalSales'
import TotalOrders from './TotalOrders'
import TotalUsers from './TotalUsers'
import TodayUser from './TodayUser'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TotalOrders,
    TotalUsers,
    TodayUser

  }
}
</script>

<style scoped lang="scss">

</style>
