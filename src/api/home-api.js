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
    }
  }
})
