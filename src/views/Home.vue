<template>
  <div class="home">
    <div class="container mx-auto">
      <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Lights</h2>
      <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
        <Light v-for="(light, $key) in hue.data.lights" :key="light.modelid" :light="light" :id="$key" />
      </ul>
    </div>
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
