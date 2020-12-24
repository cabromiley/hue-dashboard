export default fetch => ({
    lights: {
        list() {
            return fetch(process.env.HUE_HOST)
        }
    }
})