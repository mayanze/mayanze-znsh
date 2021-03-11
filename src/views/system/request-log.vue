<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.requestUrl" placeholder="请求路径" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="序号" type="index" :index="indexMethod" prop="id" sortable="custom" align="center" width="50" />
      <el-table-column label="请求路径" width="280px">
        <template slot-scope="{row}">
          <span>{{ row.requestUrl }}</span>
        </template>
      </el-table-column>
      <el-table-column label="请求方式" width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.requestMethod }}</span>
        </template>
      </el-table-column>
      <el-table-column label="请求参数" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.requestParmater }}</span>
        </template>
      </el-table-column>
      <el-table-column label="效应内容" align="center" width="400">
        <template slot-scope="{row}">
          <span>{{ row.responseMsg }}</span>
        </template>
      </el-table-column>
      <el-table-column label="耗时(毫秒)" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <span>{{ row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.requestTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建人" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.requestCreator }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.current" :limit.sync="listQuery.size" @pagination="getList" />
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination'
import { queryPage } from '@/api/request-log' // secondary package based on el-pagination
export default {
  name: 'RequestLog',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        current: 1,
        size: 20,
        requestUrl: '',
        orders: [{ 'column': 'request_time', 'asc': false }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      var condition = [{
        column: 'request_url',
        expression: 'like',
        val: this.listQuery.requestUrl
      }]
      this.listQuery['condition'] = condition
      queryPage(this.listQuery).then(response => {
        debugger
        this.listLoading = false
        this.list = response.data.records
        this.total = response.data.total
      })
    },
    handleFilter() {
      this.listQuery.current = 1
      this.getList()
    },
    // index默认从0开始，所以加了1
    indexMethod(index) {
      return (index + 1) + ((this.listQuery.current - 1) * this.listQuery.size)
    }
  }
}
</script>
