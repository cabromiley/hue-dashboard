// const getExistingToken = () => {
//   return document.cookie
//     .split('; ')
//     .find(row => row.startsWith('XSRF-TOKEN'))
//     ?.split('=')[1]
// }

export default axios => ({
  async csrf () {
    // const oldToken = getExistingToken()

    // if (oldToken) {
    //   axios.defaults.headers['X-XSRF-TOKEN'] = oldToken
    //   return
    // }

    await axios.get('/sanctum/csrf-cookie')

    // axios.defaults.headers['X-XSRF-TOKEN'] = getExistingToken()
  },
  login ({ email, password, remember }) {
    return axios.post('/api/login', {
      email,
      password,
      remember
    })
  }
})
