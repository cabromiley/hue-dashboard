export default (fetch, env) => ({
  async get (path) {
    console.log(env)
    const response = await fetch(
      env.host + '/api/' + env.userToken + path,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    )
    const data = await response.json()

    return {
      data,
      response
    }
  },
  async post (path, body) {
    const response = await fetch(
      env.host + '/api/' + env.userToken + path,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.encode(body)
      }
    )
    const data = await response.json()

    return {
      data,
      response
    }
  }
})
