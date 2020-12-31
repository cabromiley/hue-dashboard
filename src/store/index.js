import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {}
  },
  mutations: {
    setIsLoggedIn (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
    setUser (state, user) {
      state.user = user
    },
    setLoginFailed (state, value) {
      state.hasLoginFailed = value
    }
  },
  actions: {
    UPDATE_USER ({ commit }, user) {
      commit('setUser', user)
    },
    SET_LOGGED_IN ({ commit }, value) {
      commit('setIsLoggedIn', value)
    },
    LOGOUT ({ commit }) {
      commit('setIsLoggedIn', false)
      commit('setUser', {})
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.isLoggedIn
    }
  },
  modules: {
  }
})
