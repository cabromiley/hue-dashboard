import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let nofitificationID = 0

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isAuthChecked: false,
    user: {},
    notifications: []
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
    },
    setAuthCheckedTrue (state) {
      state.isAuthChecked = true
    },
    appendNotification (state, notification) {
      nofitificationID++
      notification.uuid = nofitificationID

      state.notifications = { ...state.notifications, notification }
    },
    removeNotification (state, uuid) {
      state.notifications = { ...state.notifications.filter(n => n.uuid !== uuid) }
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
    },
    AUTH_CHECKED ({ commit }) {
      commit('setAuthCheckedTrue')
    },
    ADD_NOTIFICATION ({ commit }, notification) {
      commit('appendNotification', notification)
    },
    REMOVE_NOTIFICATION ({ commit }, uuid) {
      commit('removeNotification', uuid)
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.isLoggedIn
    },
    isAuthChecked (state) {
      return state.isAuthChecked
    }
  }
})
