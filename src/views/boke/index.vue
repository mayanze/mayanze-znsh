<template>
  <div class="body">
    <el-row class="head">
      <span>马艳泽的博客</span>
    </el-row>
    <el-row>
      <el-col :span="10" class="des">
        <span>
          2014年3月正式加入码农行业，现已经度过了6个春秋
        </span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="card" style="margin-right: 20px;">
        <div class="el-card is-hover-shadow" @click="herf('https://blog.csdn.net/weixin_40789566?spm=1001.2101.3001.5343')">
          <div class="el-card__body">
            <img src="@/assets/boke_images/csdn.png" class="image">
            <div style="padding: 14px 0px;">
              <span>记录了一些自己关于技术的记录和心得，有兴趣的可以看看
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="card" style="margin-right: 20px;">
        <div class="el-card is-hover-shadow" @click="herf('https://github.com/mayanze')">
          <div class="el-card__body">
            <img src="@/assets/boke_images/github.png" class="image">
            <div style="padding: 14px 0px;">
              <span>记录了一些自己关于技术的记录和心得，有兴趣的可以看看
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="card">
        <div class="el-card is-hover-shadow" @click="herf('http://mayanze.com/zhsh')">
          <div class="el-card__body">
            <img src="@/assets/boke_images/web.png" class="image">
            <div style="padding: 14px 0px;">
              <span>记录了一些自己关于技术的记录和心得，有兴趣的可以看看
              </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="sum">
      <i class="el-icon-view" />
      <span>浏览100</span>
    </div>
  </div>
</template>
<style>
  .body{
    font-family: '微软雅黑';
    text-align: center;
    margin: 0 auto;
    width: 652px;
  }
  .head{
    text-align: left;
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
  }
  .des{
    text-align: left;
    margin-bottom: 60px;
  }
  .card{
    height: 250px;
    width: 204px;
    text-align: center;
  }
  .el-card{
    height: 250px;
    width: 204px;
    text-align: center;
  }
  .el-card:hover{
    cursor: pointer;
    background: aliceblue;
  }
  .sum{
    width: 652px;
    height: 48px;
    line-height: 48px !important;
    background: #00cc99;
    font-size: 18px;
    font-weight: 700;
    margin-top: 18px;
    text-align: left;
    padding-left: 20px;
  }

  .sum i{
    font-size: 24px;
    vertical-align: middle;
  }
</style>

<script>
export default {
  name: 'Boke',
  methods: {
    herf(url) {
      location.href = url
    }
  }
}
</script>
