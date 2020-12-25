<template>
  <div class="home">
    <Light v-for="(light, $key) in hue.data.lights" :key="light.modelid" :light="light" :id="$key" />
  </div>
</template>

<script>
// @ is an alias to /src
import Light from '@/components/Light'

export default {
  name: 'Home',
  components: {
    Light
  },
  data () {
    return {
      hue: {
        data: {
          lights: []
        }
      }
    }
  },
  async mounted () {
    this.hue = await this.$hue.discover()
  }
}
</script>
