import Hue from '../api/hue'
import Base from '../api/base'

export default (Vue, { env }) => {
  Vue.prototype.$hue = new Hue(
    new Base(fetch, env)
  )
}
