export default api => ({
  auth: {
    newUser () {
      return api.post('', {
        devicetype: `hue-dashboard#webapp ${process.env.HUE_USERNAME}`
      })
    }
  },
  lights: {},
  discover () {
    return api.get('')
  }
})
