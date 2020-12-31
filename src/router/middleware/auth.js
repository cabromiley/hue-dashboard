export default (router, store) => {
  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !store.getters.isAuthenticated) next({ name: 'Login' })
    else next()
  })
}
