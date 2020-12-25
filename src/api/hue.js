export default api => ({
  auth: {
    newUser () {
      return api.post('', {
        devicetype: `hue-dashboard#webapp ${process.env.HUE_USERNAME}`
      })
    }
  },
  lights: {
    setState (id, state) {
      return api.put(`/lights/${id}/state`, state)
    },
    state: {
      setOn (id, state) {
        return api.put(`/lights/${id}/state`, {
          on: state
        })
      },
      setBrightness (id, bri) {
        return api.put(`/lights/${id}/state`, {
          bri
        })
      }
    }
  },
  discover () {
    return api.get('')
  }
})
