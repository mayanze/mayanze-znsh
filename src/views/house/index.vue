<template>
  <div style="margin: 20px">
    <el-row>房价全款：863436，逾期每日向买受人支付已交付房价款万分之1的违约金。</el-row>
    <el-row>原定于2020年2月5号复工，因疫情影响至2020年4月10日起开始全面复工，故原定于2020年9月30日交付的房屋按原定交房时间相应延迟。</el-row>
    <el-row>
      法定延期交房天数：34天
    </el-row>
    <el-row>
      法定延期交房日期：2020年11月3号
    </el-row>
    <el-row>
      今日距法定延期交房日期：<span>{{ date }}</span> 天
    </el-row>
    <el-row>
      应向买受人支付违约金：<span>{{ wyjNumber }}</span> 元
    </el-row>
    <el-divider />
    <el-row>
      大修基金,高层（7层以上）120每平方
    </el-row>
    <el-row>
      大修基金：113.61 * 120 = <span>{{ dxjjNumber }}</span> 元
    </el-row>
    <el-divider />
    <el-row>
      其他全款计算：
    </el-row>
    <el-row>
      <el-input-number v-model="qkNumber" placeholder="请输入全款金额" />
    </el-row>
    <el-row>
      应向买受人支付违约金：<span>{{ wyj2Number }}</span> 元
    </el-row>
    <el-row>
      <el-button @click="mathWyj()">计算违约金</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      date: '',
      wyjNumber: '',
      qkNumber: '',
      wyj2Number: 0,
      dxjjNumber: 113.61 * 120
    }
  },
  mounted() {
    var now = new Date()
    var jfDate = new Date()
    jfDate.setFullYear(2020, 10, 3)
    var day = Math.floor((now.getTime() - jfDate.getTime()) / (24 * 60 * 60 * 1000))
    this.date = day

    this.wyjNumber = day * (863436 * (1 / 10000))
  },
  methods: {
    mathWyj() {
      this.wyj2Number = this.date * (this.qkNumber * (1 / 10000))
    }
  }
}
</script>

<style scoped>
    .el-row{
        margin: 10px;
    }
</style>
