import request from '@/utils/request'

// 获取列表
export function getRoleList(data) {
  return request({
    url: '/admin/role/role_role_list',
    method: 'post',
    data
  })
}
// 获取详情
export function getRoleInfo(data) {
  return request({
    url: '/admin/role/role_role_detail',
    method: 'post',
    data
  })
}

// 更新角色
export function updateRoleInfo(data) {
  return request({
    url: '/admin/role/role_role_update',
    method: 'post',
    data
  })
}

