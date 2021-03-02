<!-- 天石业务 -->
<template>
  <div style="margin: 20px">
    <el-row>1.点击选则文件（可选多个数据文件，一个模板文件），【注意，模板文件最后一个选】</el-row>
    <el-row>2.点击上传到服务器</el-row>
    <el-row>3.请耐心等待几秒，会将数据execl处理后都汇总成新的模板excel,通过浏览器下载到你的本地</el-row>
    <!--  数量  -->
    <el-upload
      ref="dataUpload"
      style="margin-top: 20px"
      action=""
      class="upload-demo"
      :on-change="dataOnChange"
      :on-remove="dataHandleRemove"
      :http-request="uploadSectionFile"
      :file-list="dataFileList"
      :auto-upload="false"
      multiple
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    </el-upload>
    <el-row>
      <el-button size="small" type="success" style="margin-top: 20px" @click="submitUpload">上传到服务器</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      dataFileList: [],
      dataFileSize: 0,
      uploadSize: 0, // 上传到后台服务器次数记录
      form: new FormData()// FormData 对象
    }
  },
  methods: {
    init() { // 初始化
      this.loading = false
      this.dataFileList = []
      this.dataFileSize = 0
      this.uploadSize = 0
      this.form = new FormData()
    },
    /**
     * 记录文件数量，一起上传到后台
     */
    dataOnChange(file, fileList) {
      this.dataFileSize = fileList.length
    },
    /**
     * 删除文件，则同步减少文件数量
     */
    dataHandleRemove(file, fileList) {
      this.dataFileSize--
    },

    /**
     * 上传到服务器
     */
    submitUpload() {
      this.$refs.dataUpload.submit()
    },
    /**
     * 自定义上传
     * @param param
     * @param a
     */
    uploadSectionFile: function(param) {
      var $this = this
      // 加载框定义
      this.loading = this.$loading({
        lock: true,
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      this.uploadSize++
      var fileObj = param.file
      // 接收上传文件的后台地址
      var FileController = process.env.VUE_APP_BASE_API1 + '/tsyw'
      // 文件对象
      this.form.append('file', fileObj)
      if (this.uploadSize === this.dataFileSize) {
        // XMLHttpRequest 对象
        var xhr = new XMLHttpRequest()
        xhr.open('post', FileController, true)
        xhr.timeout = 30000 // 超时时间，单位是毫秒

        // 请求完成。在此进行处理。
        xhr.onload = function() {
          $this.loading.close()
          $this.$refs.dataUpload.clearFiles()
          if (xhr.status === 200) {
            location.href = process.env.VUE_APP_BASE_API1 + '/tsyw_downd'
          } else {
            alert('发生未知错误请联系管理员，错误内容：' + xhr.response)
          }
          $this.init()
        }
        // XMLHttpRequest 超时。在此做某事。
        xhr.ontimeout = function(e) {
          $this.loading.close()
          alert('请求超时，请联系管理员')
          $this.$refs.dataUpload.clearFiles()
          $this.init()
        }
        xhr.send(this.form)
      }
    }
  }
}
</script>
