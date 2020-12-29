<template>
    <li class="col-span-1 flex shadow-sm rounded-md">
      <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
        {{ acronym }}
      </div>
      <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div class="flex-1 px-4 py-2 text-sm truncate">
          <a href="#" class="text-gray-900 font-medium hover:text-gray-600">{{ light.name }}</a>
          <p class="text-gray-500">{{ light.productname }}</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button @click="onToggle" :class="['w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', { 'bg-green-500' : light.state.on, 'bg-red-500' : !light.state.on }]">
            <span class="sr-only">Toggle On/Off</span>
            <span class="text-sm text-white">{{ light.state.on ? 'On' : 'Off' }}</span>
          </button>
        </div>
      </div>
    </li>
</template>

<script>
export default {
  props: {
    light: { type: Object, default: () => ({}) },
    id: { type: [String, Number], required: true }
  },
  methods: {
    async onToggle () {
      await this.$hue.lights.state.setOn(this.id, !this.light.state.on)
      this.light.state.on = !this.light.state.on
    }
  },
  computed: {
    acronym () {
      return this.light.name.split(' ').map((word) => word.charAt(0).toUpperCase()).join('')
    }
  }
}
</script>
