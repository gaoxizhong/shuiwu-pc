import request from '@/utils/request'

// 获取列表
export function getNoticeList(data) {
  return request({
    url: '/admin/site/site_notice_list',
    method: 'post',
    data
  })
}

// 新增公告
export function addNoticeInfo(data) {
  return request({
    url: '/admin/site/site_edit_notice',
    method: 'post',
    data
  })
}

// 公告详情
export function getNoticeInfo(data) {
  return request({
    url: '/admin/site/site_notice_detail',
    method: 'post',
    data
  })
}

