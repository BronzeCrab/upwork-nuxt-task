export const state = () => ({
  isLogged: false,
  userToken: null
})

export const actions = {
  login({ commit }, vm) {
    // pretend that here is an api login request that
    // return token
    commit('auth_success')
    vm.$router.push('/admin')
  },
  logout({ commit }, vm) {
    commit('logout')
    vm.$router.push('/')
  }
}

export const mutations = {
  auth_success(state) {
    state.isLogged = true
    // TODO 1 - how can i store token persisted?
    // Maybe use localStorage? or use some third-party
    // packages?
    state.userToken = 'some random value'
  },
  logout(state) {
    state.isLogged = false
    state.userToken = null
  }
}

export const getters = {
  isLoggedIn: state => state.isLogged,
}
