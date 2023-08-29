import request from '@/utils/request'

// 获取员工列表
export function getAdminList(data) {
  return request({
    url: '/admin/role/role_admin_user_list',
    method: 'post',
    data
  })
}
// 获取员工信息详情
export function getAdminInfo(data) {
  return request({
    url: '/admin/role/role_admin_user_detail',
    method: 'post',
    data
  })
}

// 更新员工权限
export function updateAdminInfo(data) {
  return request({
    url: '/admin/role/role_admin_user_update',
    method: 'post',
    data
  })
}

// 新增人员
export function addAccountInfo(data) {
  return request({
    url: '/admin/role/role_add_admin_user',
    method: 'post',
    data
  })
}
