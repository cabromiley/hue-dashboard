<template>
  <div class="home">
    <div class="container mx-auto" v-if="!hasError">
      <Panel title="Lights">
        <Light v-for="(light, $key) in hue.data.lights" :key="light.modelid" :light="light" :id="$key" />
      </Panel>
    </div>
    <div v-else>
      <span>Oops unable to find hub</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Light from '@/components/Light'
import Panel from '@/components/Panel.vue'

export default {
  name: 'Home',
  components: {
    Light,
    Panel
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
