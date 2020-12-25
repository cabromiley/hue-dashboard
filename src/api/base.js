export default (fetch, env) => ({
  async get(path) {
    const response = await fetch(
      env.HUE_HOST + "/api/" + env.HUE_USER_TOKEN + path,
      {
        headers: {
          Accept: "application/json"
        }
      }
    );
    const data = await response.json();

    return {
      data,
      response
    };
  },
  async post(path) {
    const response = await fetch(
      env.HUE_HOST + "/api/" + env.HUE_USER_TOKEN + path,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.encode(body)
      }
    );
    const data = await response.json();

    return {
      data,
      response
    };
  }
});
