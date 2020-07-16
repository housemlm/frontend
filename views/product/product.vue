<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.pk }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.fields.name }}
        </template>
      </el-table-column>
      <el-table-column label="Brand" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.fields.brand }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Genre" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.fields.genre }}
        </template>
      </el-table-column>
      <el-table-column label="Size" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.fields.size }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { showList } from '@/api/product'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      showList().then(response => {
        this.list = response['list']
        this.listLoading = false
      })
    }
  }
}
</script>
