<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      :default-sort="{prop: 'id', order: 'descending'}"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" prop="id" width="110" />
      <el-table-column align="center" label="time" width="200">
        <template slot-scope="{row}">
          {{ renderTime(row.time) }}
        </template>
      </el-table-column>
      <el-table-column label="Title" prop="title" />
      <el-table-column label="status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ statusNameFilter(scope.row.status) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Operate" align="center" width="185">
        <template slot-scope="{row}">
          <el-button v-if="row.status==1" size="mini" type="primary" @click="handleDownload(row.path)">
            Download
          </el-button>
          <el-button v-if="row.status==2" size="mini" type="danger" @click="handleShutdown(row)">
            Shutdown
          </el-button>
          <el-button size="mini" @click="handleCheck(row)">
            View
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="36%">
      <line-chart v-if="dialogVisible" :chart-data="lineChartData" />
    </el-dialog>
  </div>
</template>

<script>
import { basename } from 'path'
import { downloadFile, getList, shutdown, check } from '@/api/oasis'
import LineChart from './components/LineChart'

export default {
  name: 'History',
  components: { LineChart },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'gray',
        0: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: true,
      dialogVisible: false,
      dialogTitle: '',
      lineChartData: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    renderTime(time) {
      const dateee = new Date(time).toJSON()
      return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
    statusNameFilter(status) {
      const statusMap = {
        1: 'succeed',
        2: 'running',
        0: 'failed'
      }
      return statusMap[status]
    },
    async handleDownload(path) {
      const { data } = await downloadFile({ path })
      const blob = new Blob([data])
      const blobUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.download = basename(path)
      a.href = blobUrl
      a.click()
      window.URL.revokeObjectURL(blobUrl)
    },
    handleShutdown(row) {
      this.$confirm(`Confirm shutdown job: ${row.title}?`, 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        await shutdown({ id: row.id })
        this.$message({
          type: 'success',
          message: 'Shutdown Success!'
        })
        this.fetchData()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Cancelled'
        })
      })
    },
    async handleCheck(row) {
      this.dialogTitle = row.title
      const res = await check({ id: row.id, title: row.title })
      this.lineChartData = res.data
      this.dialogVisible = true
    }
  }
}
</script>
