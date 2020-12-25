<template>
    <div>
        <span>{{ light.name }} - {{ light.productname }}</span>
        <span :class="{ 'p-1 rounded mx-1': true, 'bg-green-500' : light.state.on, 'bg-red-500' : !light.state.on }">{{ light.state.on ? 'On' : 'Off' }}</span>
        <button class="p-1 rounded pointer hover:bg-indigo-500 bg-indigo-400 text-white" @click="onToggle">Toggle on/off</button>
    </div>
</template>

<script>
export default {
  props: {
    light: { type: Object, default: () => ({}) },
    id: { type: String, required: true }
  },
  methods: {
    async onToggle () {
      await this.$hue.lights.state.setOn(this.id, !this.light.state.on)
      this.light.state.on = !this.light.state.on
    }
  }
}
</script>
