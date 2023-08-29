<template>
  <div class="home">
    <!-- <div class="search-bar">
      <el-form
        ref="form"
        size="small"
        :model="search"
        inline
        label-width="120px"
        @submit.native.prevent
      >
        <el-form-item label="活动名称">
          <el-input v-model="search.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getTableData">查询</el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <div class="table">
      <el-table
        :data="tableData"
        :loading="loading"
        style="width: 100%"
        height="100%"
        border
      >
        <el-table-column type="index" :label="$t('role.table.index')" width="130" align="center" />
        <el-table-column prop="name" :label="$t('role.table.name')" />
        <el-table-column prop="title" :label="$t('role.table.title')" />
        <el-table-column prop="created_at" :label="$t('role.table.created_at')" />
        <el-table-column prop="updated_at" :label="$t('role.table.updated_at')" />
        <el-table-column
          :label="$t('role.table.btnHandle')"
          width="90"
          align="center"
        >
          <template slot-scope="{ row }">
            <el-button
              size="small"
              type="text"
              @click="handleUpdateInfo(row)"
            >{{ $t('role.table.btnUpdate') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="pagination">
      <el-pagination
        background
        :current-page="page.current"
        :page-sizes="[10, 30, 50, 100]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div> -->

    <el-dialog :title="$t('role.dialog.title')" :visible.sync="dialog.visible" width="600px">
      <el-form
        ref="form"
        :model="dialog.row"
        :rules="rules"
        label-position="right"
        label-width="100px"
      >
        <el-form-item :label="$t('role.dialog.form.title')" prop="title">
          <el-input v-model="dialog.row.title" readonly />
        </el-form-item>
        <el-form-item :label="$t('role.dialog.form.permissions')" prop="permissions">
          <el-select v-model="dialog.row.permissions" multiple style="width: 100%">
            <el-option
              v-for="item in roleList"
              :key="item.name"
              :label="item.title"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialog.visible = false">{{ $t('role.btnCancel') }}</el-button>
        <el-button
          size="small"
          type="primary"
          @click="handleSaveUpdate"
        >{{ $t('role.btnConfirme') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRoleList, getRoleInfo, updateRoleInfo } from '@/api/role'
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      search: {},
      tableData: [],
      roleList: [],
      page: {
        current: 1,
        size: 30,
        total: 0
      },
      dialog: {
        visible: false,
        row: {}
      },
      rules: {
        permissions: [{ required: true, message: '请选择职位', trigger: 'blur' }]
      }
    }
  },
  created() {
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      this.loading = true
      getRoleList()
        .then((res) => {
          this.loading = false
          this.tableData = Object.keys(res.data.role_list || {}).map(
            (i) => res.data.role_list[i]
          )
        })
        .catch(() => {
          this.loading = false
        })
    },
    // 页数
    handleCurrentChange(current) {
      this.page.current = current
    },
    // 分页
    handleSizeChange(size) {
      this.page.size = size
      this.page.current = 1
      this.getTableData()
    },
    handleUpdateInfo(row) {
      this.$nextTick(() => {
        this.$refs.form && this.$refs.form.clearValidate()
      })
      this.dialog.visible = true
      getRoleInfo({ role_id: row.id }).then((res) => {
        this.roleList = res.data.permissions
        this.dialog.row = {
          permissions: res.data.role_permissions.map((i) => i.name),
          role_id: row.id,
          name: row.name,
          title: row.title
        }
      })
    },
    handleSaveUpdate() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          updateRoleInfo(this.dialog.row).then(res => {
            this.dialog.visible = false
            this.dialog.row = {}
            this.$message.success('更新成功')
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search-bar {
  }
  .table {
    flex: 1;
    overflow: hidden;
  }
  .pagination {
    text-align: right;
    padding-top: 10px;
  }
}
</style>
