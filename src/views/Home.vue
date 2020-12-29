<template>
  <div class="home">
    <div class="container mx-auto" v-if="!hasError">
      <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Lights</h2>
      <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
        <Light v-for="(light, $key) in hue.data.lights" :key="light.modelid" :light="light" :id="$key" />
      </ul>
    </div>
    <div v-else>
      <span>Oops unable to find hub</span>
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
      },
      error: {},
      hasError: false
    }
  },
  methods: {
    async discover () {
      try {
        this.hue = await this.$hue.discover()
      } catch (e) {
        this.error = e
        this.hasError = true
      }
    }
  },
  async mounted () {
    await this.discover()
  }
}
</script>
