import {
  login,
  getMenu
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  resetRouter
} from '@/router'
import Layout from '@/layout'

const getDefaultState = () => {
  return {
    token: getToken(),
    menu: [],
    avatar: ''
  }
}

const router = {
  role_admin_user_list: () => import('@/views/admin/index'),
  role_role_list: () => import('@/views/role/index'),
  site_notice_list: () => import('@/views/notice/index')
}

const handleRouter = (node, index) => {
  // debugger
  const _index = index
  const arr = node.map(item => {
    let obj = {}
    const children = Object.keys(item.list || {}).map(i => ({ ...item.list[i], path: i }))
    if (_index === 1) {
      const name = item.key.replace(/_/g, '')
      obj = {
        path: item.path,
        name: name[0].toUpperCase() + name.slice(1),
        component: Layout,
        meta: { title: item.menu_title, icon: 'el-icon-s-help', activeMenu: `${item.path}/${children[0].path}` }
      }
      if (children.length) {
        const i = _index + 1
        obj.redirect = `${item.path}/${children[0].path}`
        obj.children = handleRouter(children, i)
      }
    } else {
      const name = item.path.replace(/_/g, '')
      if (!router[item.path]) {
        return null
      }
      obj = {
        name: name[0].toUpperCase() + name.slice(1),
        path: item.path,
        component: router[item.path],
        meta: { title: item.menu_title, icon: 'el-icon-s-help' }
      }
    }
    return obj
  }).filter(Boolean)
  return arr
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_MENU: (state, menu) => {
    state.menu = menu
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      email,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        email: email.trim(),
        password: password
      }).then(response => {
        const {
          data
        } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve(data.user)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getMenu({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getMenu().then(res => {
        const menu = Object.keys(res.data).map(i => ({ ...res.data[i], path: `/${i}_index`, key: i + '_index' }))
        const routes = handleRouter(menu, 1)
        commit('SET_MENU', routes)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
