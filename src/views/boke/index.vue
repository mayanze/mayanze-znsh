<!--博客-->
<template>
  <div>
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
      <!--统计区-->
      <div class="sum">
        <el-row>
          <el-col :span="7">
            <i class="el-icon-view" />
            <span class="sum-type-num">浏览100</span>
          </el-col>
          <el-col :span="7">
            <svg-icon icon-class="support" />
            <span class="sum-type-num">点赞20</span>
          </el-col>
          <el-col :span="7">
            <svg-icon icon-class="remark" />
            <span class="sum-type-num">评论10</span>
          </el-col>
        </el-row>
      </div>
      <!--写评论-->
      <div style="margin-top: 30px;text-align: left">
        <el-row>
          <el-col :span="2">
            <svg-icon icon-class="head" style="font-size: 48px" />
          </el-col>
          <el-col :span="6">
            <el-input v-model="userName" placeholder="输入你的昵称" maxlength="10" style="margin-left: 10px; line-height: 48px;" />
          </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
          <el-col :span="20">
            <el-input
              v-model="content"
              type="textarea"
              :rows="3"
              resize="none"
              placeholder="给出你的建议"
              maxlength="255"
              style="height: 75px"
            />
          </el-col>
          <el-col :span="4" style="text-align: right;margin-top: 39px">
            <el-button type="info">留言</el-button>
          </el-col>
        </el-row>
      </div>
      <!--读评论-->
      <div v-for="data in datas" :key="data.userName" style="margin-top: 30px;text-align: left">
        <el-row>
          <svg-icon icon-class="boy" style="font-size: 48px" />
          <span style="margin-left: 10px;font-weight: bold">{{ data.userName }}</span>
          <span style="margin-left: 10px;color: #999999;">{{ data.date }}</span>
        </el-row>
        <el-row style="margin-top: 10px">
          <span style="margin-left: 58px;">{{ data.content }}</span>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Boke',
  data() {
    return {
      userName: '', // 写评论昵称
      content: '', // 写留言内容
      datas: [{ // 读评论数据
        userName: '奔跑的小马', // 评论昵称
        date: '2021-1-14 17:30:20', // 评论日期
        content: '大佬写的不错，能否带带我！嘿嘿' // 评论内容
      },
      {
        userName: '小飞', // 评论昵称
        date: '2021-1-14 17:30:20', // 评论日期
        content: '样子还可以更完美，可以参考翁天信博客' // 评论内容
      }]
    }
  },
  mounted() {

  },
  methods: {
    herf(url) {
      location.href = url
    }
  }
}
</script>
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
  .sum svg{
    font-size: 24px;
    vertical-align: middle;
  }
  .sum-type-num{
    margin-left: 10px;
  }
</style>
