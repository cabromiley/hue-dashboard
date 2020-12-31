export default axios => ({
  async csrf () {
    await axios.get('/sanctum/csrf-cookie')
  },
  login ({ email, password, remember }) {
    return axios.post('/api/login', {
      email,
      password,
      remember
    })
  },
  lights: {
    all () {
      return axios.get('/api/lights')
    },
    find (id) {
      return axios.get(`/api/lights/${id}`)
    },
    update (id, state) {
      return axios.put(`/api/light/${id}`, state)
    },
    turnOnOff (id, isOn) {
      return axios.put(`/api/light/${id}`, {
        on: isOn
      })
    }
  }
})
