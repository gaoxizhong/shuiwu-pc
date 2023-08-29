const zh = {
  // element组件翻译
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      }
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择'
    },
    cascader: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择',
      noData: '暂无数据'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    },
    image: {
      error: '加载失败'
    },
    pageHeader: {
      title: '返回'
    }
  },
  home: {
    logout: '退出登录'
  },
  notice: {
    search: '查询',
    addNotice: '新增公告',
    table: {
      index: '序号',
      title: '公告标题',
      content: '公告内容',
      areas: '地址',
      stime: '开始日期',
      etime: '结束日期',
      btnHandle: '操作',
      btnUpdate: '修改'
    },
    dialog: {
      title: '新增公告',
      form: {
        title: '公告标题',
        content: '公告内容',
        areas: '地址',
        times: '公告时间',
        placeholder: '请输入',
        placeholderS: '请选择',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      },
      rules: {
        title: '请输入公告标题',
        content: '请输入公告内容',
        times: '请选择时间'
      },
      btnConfirme: '确定',
      btnCancel: '取消'
    }
  },
  role: {
    table: {
      index: '序号',
      name: 'id',
      title: '职位',
      created_at: '创建日期',
      updated_at: '修改日期',
      btnHandle: '操作',
      btnUpdate: '修改'
    },
    dialog: {
      title: '修改职位信息',
      form: {
        title: '职位',
        permissions: '权限'
      }
    },
    btnConfirme: '确定',
    btnCancel: '取消'
  },
  admin: {
    searchForm: {
      name: '姓名',
      email: '用户名'
    },
    searchBtn: '查询',
    addAccountBtn: '新增用户',
    table: {
      index: '序号',
      name: '姓名',
      email: '用户名',
      created_at: '创建日期',
      updated_at: '修改日期',
      btnHandle: '操作',
      btnUpdate: '修改'
    },
    dialog: {
      title: '修改权限',
      form: {
        name: '姓名',
        role_value: '职位'
      }
    },
    addDialog: {
      title: '新增用户',
      form: {
        name: '姓名',
        email: '用户名',
        password: '密码（默认密码666666）'
      }
    },
    rules: {
      role_value: '请选择职位',
      name: '请输入姓名',
      email: '请输入用户名',
      password: '请输入密码'
    },
    dialogConfirmeBtn: '确定',
    dialogCancelBtn: '取消'
  }
}
export default zh
