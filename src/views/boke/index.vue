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
            <span class="sum-type-num">浏览{{ viewNum }}</span>
          </el-col>
          <el-col :span="7">
            <a class="my-card" :style="{ color: visitedColor }" @click="support">
              <svg-icon icon-class="support" />
              <span class="sum-type-num">点赞{{ supportNum }}</span>
            </a>
          </el-col>
          <el-col :span="7">
            <svg-icon icon-class="remark" />
            <span class="sum-type-num">评论{{ remarkNum }}</span>
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
            <el-button type="info" @click="save">留言</el-button>
          </el-col>
        </el-row>
      </div>
      <!--读评论-->
      <div v-for="(data, index) in datas" :key="index" style="margin-top: 30px;text-align: left">
        <el-row>
          <svg-icon icon-class="boy" style="font-size: 48px" />
          <span style="margin-left: 10px;font-weight: bold">{{ data.userName }}</span>
          <span style="margin-left: 10px;color: #999999;">{{ data.date }}</span>
        </el-row>
        <el-row style="margin-top: 10px">
          <span style="margin-left: 58px;">{{ data.content }}</span>
        </el-row>
      </div>
      <div style="margin-top: 10px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="remarkNum"
          @current-change="currentChange"
          @prev-click="currentChange"
          @next-click="currentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { queryPage, save, supportSave, supportQueryCount, viewQueryCount } from '@/api/boke'

const title = 'Boke'
export default {
  name: 'Boke',
  data() {
    return {
      viewNum: 0, // 浏览数量
      remarkNum: 0, // 评论数量
      supportNum: 0, // 点赞数量
      userName: '', // 写评论昵称
      content: '', // 写留言内容
      datas: [], // 查询的留言数据
      current: 1, // 当前页
      visitedColor: this.getCookie('support') ? '#4A9FF9' : '' // 点赞动态颜色
    }
  },
  mounted() {
    this.queryPage()
    this.supportQueryCount()
    this.viewQueryCount()
  },
  methods: {
    // 跳转链接
    herf(url) {
      location.href = url
    },
    // 浏览数量
    async viewQueryCount() {
      debugger
      const query = [{
        column: 'request_url',
        expression: 'eq',
        val: '/dcims/boke/message/queryPage'
      }]
      const res = await viewQueryCount(JSON.stringify(query))
      this.viewNum = res.data
    },
    // 点赞
    async support() {
      if (!this.getCookie('support')) { // 点赞过的,记录cookie,不允许再点击
        const data = {
          page: title,
          date: new Date()
        }
        supportSave(data)
        this.supportNum += 1
        document.cookie = 'support=1'
      }
    },
    getCookie(cname) {
      var name = cname + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim()
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
      }
      return ''
    },
    async supportQueryCount() {
      const query = [{
        column: 'page',
        expression: 'eq',
        val: title
      }]
      const res = await supportQueryCount(JSON.stringify(query))
      this.supportNum = res.data
    },
    // 查询留言
    async queryPage() {
      const data = {
        'size': 10,
        'current': this.current,
        'orders': [{ 'column': 'date', 'asc': false }]
      }
      const res = await queryPage(data)
      this.datas = res.data.records
      this.remarkNum = res.data.total
    },
    // 保存留言
    async save() {
      const data = {
        userName: this.userName || '匿名',
        content: this.content,
        date: new Date()
      }
      await save(data)
      this.queryPage()
      // 清空留言
      this.userName = ''
      this.content = ''
    },
    // 当前页改变
    currentChange(el) {
      this.current = el
      this.queryPage()
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
  .my-card:hover{
    color: #4A9FF9;
    cursor:pointer;
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
