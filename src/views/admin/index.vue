<template>
  <div class="auth">
    <div class="search-bar">
      <el-form
        ref="form"
        size="small"
        :model="search"
        inline
        label-width="120px"
      >
        <el-form-item :label="$t('admin.searchForm.name')">
          <el-input v-model="search.name" />
        </el-form-item>
        <el-form-item :label="$t('admin.searchForm.email')">
          <el-input v-model="search.email" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getTableData">{{ $t('admin.searchBtn') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn">
      <el-button
        type="primary"
        size="small"
        @click="addAccount"
      >{{ $t('admin.addAccountBtn') }}</el-button>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        :loading="loading"
        style="width: 100%"
        height="100%"
        border
      >
        <el-table-column type="index" :label="$t('admin.table.index')" width="130" align="center" />
        <el-table-column prop="name" :label="$t('admin.table.name')" />
        <el-table-column prop="email" :label="$t('admin.table.email')" />
        <el-table-column prop="created_at" :label="$t('admin.table.created_at')" />
        <el-table-column prop="updated_at" :label="$t('admin.table.updated_at')" />
        <el-table-column
          prop="updated_at"
          :label="$t('admin.table.btnHandle')"
          width="80"
          align="center"
        >
          <template slot-scope="{ row }">
            <el-button
              size="small"
              type="text"
              @click="handleUpdateInfo(row)"
            >{{ $t('admin.table.btnUpdate') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :current-page="page.current"
        :page-sizes="[10, 30, 50, 100]"
        :page-size="page.size"
        layout="total, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <el-dialog :title="$t('admin.dialog.title')" :visible.sync="dialog.visible" width="600px">
      <el-form ref="form" :model="dialog.row" :rules="rules" size="small">
        <el-form-item :label="$t('admin.dialog.form.name')" prop="name">
          <el-input v-model="dialog.row.name" readonly />
        </el-form-item>
        <el-form-item :label="$t('admin.dialog.form.role_value')" prop="role_value">
          <el-select
            v-model="dialog.row.role_value"
            multiple
            style="width: 100%"
          >
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
        <el-button size="small" @click="dialog.visible = false">{{ $t('admin.dialogCancelBtn') }}</el-button>
        <el-button
          size="small"
          type="primary"
          @click="handleSaveUpdate"
        >{{ $t('admin.dialogConfirmeBtn') }}</el-button>
      </span>
    </el-dialog>

    <el-dialog :title="$t('admin.addDialog.title')" :visible.sync="addDialog.visible" width="600px">
      <el-form
        ref="addForm"
        :model="addDialog.form"
        :rules="addRules"
        size="small"
      >
        <el-form-item :label="$t('admin.addDialog.form.name')" prop="name">
          <el-input v-model="addDialog.form.name" />
        </el-form-item>
        <el-form-item :label="$t('admin.addDialog.form.email')" prop="email">
          <el-input v-model="addDialog.form.email" />
        </el-form-item>
        <el-form-item :label="$t('admin.addDialog.form.password')" prop="password">
          <el-input v-model="addDialog.form.password" show-password type="password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="small"
          @click="addDialog.visible = false"
        >{{ $t('admin.dialogCancelBtn') }}</el-button>
        <el-button
          size="small"
          type="primary"
          @click="handleAddAcount"
        >{{ $t('admin.dialogConfirmeBtn') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAdminList, updateAdminInfo, getAdminInfo, addAccountInfo } from '@/api/personnel'
export default {
  name: 'Auth',
  data() {
    return {
      loading: false,
      search: {
        name: '',
        email: ''
      },
      tableData: [],
      roleList: [],
      page: {
        current: 1,
        size: 15,
        total: 0
      },
      dialog: {
        visible: false,
        row: {
          role_value: []
        }
      },
      addDialog: {
        visible: false,
        form: {
          password: '666666'
        }
      },
      rules: {
        role_value: [
          { required: true, message: this.$t('admin.rules.role_value'), trigger: 'change' }
        ]
      },
      addRules: {
        name: [{ required: true, message: this.$t('admin.rules.name'), trigger: 'blur' }],
        email: [{ required: true, message: this.$t('admin.rules.email'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('admin.rules.password'), trigger: 'blur' }]
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
      const params = {
        page: this.page.current,
        ...this.search
      }
      this.loading = true
      getAdminList(params)
        .then((res) => {
          this.loading = false
          this.tableData = res.data.list.data || []
          this.page.total = res.data.list.total || 0
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
      const { name, admin_id } = row
      this.$nextTick(() => {
        this.$refs.form && this.$refs.form.clearValidate()
      })
      this.dialog.visible = true
      const loading = this.$loading('加载中..')
      getAdminInfo({ admin_id })
        .then((res) => {
          loading.close()
          this.roleList = Object.keys(res.data.roles || {}).map(
            (i) => res.data.roles[i]
          )
          const role_value = (res.data.user_roles || []).map((i) => i.name)
          this.dialog.row = {
            admin_id,
            name,
            role_value
          }
        })
        .catch((res) => {
          loading.close()
        })
    },
    handleSaveUpdate() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const { admin_id, role_value } = this.dialog.row
          const parmas = {
            admin_id,
            roles: role_value
          }
          updateAdminInfo(parmas).then((res) => {
            this.dialog.visible = false
            this.$message.success('更新成功')
          })
        }
      })
    },
    addAccount() {
      this.$nextTick(() => {
        this.$refs.addForm && this.$refs.addForm.clearValidate()
      })
      this.addDialog.visible = true
      this.addDialog.form = {
        password: '666666'
      }
    },
    handleAddAcount() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          addAccountInfo(this.addDialog.form).then(res => {
            this.$message.success('新增成功')
            this.addDialog.visible = false
            this.getTableData()
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  height: 100%;
  display: flex;
  flex-direction: column;
  .btn {
    padding: 10px 0px;
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
