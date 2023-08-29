<template>
  <div class="notice">
    <div class="search-bar">
      <el-form
        ref="form"
        size="small"
        :model="search"
        inline
        label-width="120px"
      >
        <!-- <el-form-item label="标题">
          <el-input v-model="search.title" />
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="getTableData">{{ $t('notice.search') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn">
      <el-button
        type="primary"
        size="small"
        @click="handleOpenAddDialog()"
      >{{ $t('notice.addNotice') }}</el-button>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        :loading="loading"
        style="width: 100%"
        height="100%"
        border
      >
        <!-- 55 -->
        <el-table-column type="index" :label="$t('notice.table.index')" width="130" align="center" />
        <el-table-column prop="title" :label="$t('notice.table.title')" show-overflow-tooltip />
        <el-table-column prop="content" :label="$t('notice.table.content')" show-overflow-tooltip />
        <el-table-column prop="areas" :label="$t('notice.table.areas')" show-overflow-tooltip>
          <template slot-scope="{ row }">
            {{ getAreas(row) }}
          </template>
        </el-table-column>
        <el-table-column prop="stime" :label="$t('notice.table.stime')" min-width="120px">
          <template slot-scope="{ row }">
            {{ row.stime ? parseTime(row.stime, '{yy}-{mm}-{dd}') : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="etime" :label="$t('notice.table.etime')" min-width="120px">
          <template slot-scope="{ row }">
            {{ row.etime ? parseTime(row.etime, '{yy}-{mm}-{dd}') : '' }}
          </template>
        </el-table-column>
        <!-- 80 -->
        <el-table-column
          :label="$t('notice.table.btnHandle')"
          width="90"
          align="center"
        >
          <template slot-scope="{ row }">
            <el-button
              size="small"
              type="text"
              @click="handleOpenAddDialog(row)"
            >{{ $t('notice.table.btnUpdate') }}</el-button>
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

    <el-dialog :title="$t('notice.dialog.title')" :visible.sync="dialog.visible" width="600px">
      <el-form
        ref="form"
        label-position="right"
        label-width="170px"
        :model="dialog.form"
        :rules="rules"
        size="small"
      >
        <el-form-item :label="$t('notice.dialog.form.title')" prop="title">
          <el-input
            v-model="dialog.form.title"
            :placeholder="$t('notice.dialog.form.placeholder')"
          />
        </el-form-item>
        <el-form-item :label="$t('notice.dialog.form.content')" prop="content">
          <el-input
            v-model="dialog.form.content"
            :placeholder="$t('notice.dialog.form.placeholder')"
          />
        </el-form-item>
        <el-form-item :label="$t('notice.dialog.form.areas')" prop="areas">
          <el-cascader
            v-model="dialog.form.areas"
            style="width: 100%"
            :options="areaList"
            :props="{ label: 'name', value: 'id', children: 'areas' }"
            :placeholder="$t('notice.dialog.form.placeholderS')"
          />
        </el-form-item>
        <el-form-item :label="$t('notice.dialog.form.times')" prop="times">
          <el-date-picker
            v-model="dialog.form.times"
            style="width: 100%"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :range-separator="$t('notice.dialog.form.rangeSeparator')"
            :start-placeholder="$t('notice.dialog.form.startPlaceholder')"
            :end-placeholder="$t('notice.dialog.form.endPlaceholder')"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          size="small"
          @click="dialog.visible = false"
        >{{ $t('notice.dialog.btnCancel') }}</el-button>
        <el-button
          size="small"
          type="primary"
          @click="handleAddAcount"
        >{{ $t('notice.dialog.btnConfirme') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getNoticeList, addNoticeInfo } from '@/api/notice'
import { parseTime } from '@/utils/index'
export default {
  name: 'Auth',
  data() {
    return {
      parseTime,
      loading: false,
      search: {
        title: ''
      },
      tableData: [],
      areaList: [],
      page: {
        current: 1,
        size: 15,
        total: 0
      },

      dialog: {
        visible: false,
        form: {
          areas: [],
          times: ['', '']
        }
      },
      rules: {
        title: [{ required: true, message: this.$t('notice.dialog.rules.title'), trigger: 'blur' }],
        content: [
          { required: true, message: this.$t('notice.dialog.rules.content'), trigger: 'blur' }
        ],
        times: [
          { required: true, message: this.$t('notice.dialog.rules.times'), trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    'dialog.visible': {
      handler(newData) {
        if (!newData) {
          this.dialog.form = {
            areas: [],
            times: ['', '']
          }
        }
      }
    }
  },
  created() {},
  mounted() {
    this.getTableData()
  },
  methods: {
    getAreas(row) {
      let area = ''
      const { area1, area2, area3 } = row
      if (area1 && area2 && area3) {
        const area1Obj = this.areaList.find(i => i.id === row.area1)
        const area2Obj = area1Obj.areas.find(i => i.id === row.area2)
        const area3Obj = area2Obj.areas.find(i => i.id === row.area3)
        area += ` ${area1Obj.name} ${area2Obj.name} ${area3Obj.name} `
      }
      return area
    },
    handleAreaList(areas) {
      return areas.map(i => {
        if (!i.areas || i.areas.length === 0) {
          i.leaf = true
          delete i.areas
        } else {
          i.areas = this.handleAreaList(i.areas)
        }
        return i
      })
    },
    getTableData() {
      const params = {
        page: this.page.current,
        ...this.search
      }
      this.loading = true
      getNoticeList(params)
        .then((res) => {
          this.loading = false
          this.areaList = this.handleAreaList(res.data.area_list || [])
          this.page.total = res.data.list.total || 0
          this.tableData = res.data.list.data || []
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
    handleOpenAddDialog(row) {
      this.$nextTick(() => {
        this.$refs.form && this.$refs.form.clearValidate()
      })
      this.dialog.visible = true
      if (row) {
        const { title, content, area1, area2, area3, stime, etime, id } = row
        const params = {
          title,
          content,
          notice_id: id,
          times: [stime ? parseTime(stime, '{yy}-{mm}-{dd}') : '', etime ? parseTime(etime, '{yy}-{mm}-{dd}') : '']
        }
        if (area1 && area2 && area3) {
          params.areas = [area1, area2, area3]
        }
        this.dialog.form = params
      }
    },
    handleAddAcount() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const { title, content, areas, times, notice_id } = this.dialog.form
          const params = {
            title,
            content
          }
          notice_id && (params.notice_id = notice_id)
          if (areas && areas.length) {
            params.area1 = areas[0]
            params.area2 = areas[1]
            params.area3 = areas[2]
          }
          params.stime = times[0]
          params.etime = times[1]
          addNoticeInfo(params).then(res => {
            this.$message.success('操作成功')
            this.dialog.visible = false

            this.getTableData()
          })
        }
      })
    }
  }
}
</script>

  <style lang="scss" scoped>
.notice {
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

