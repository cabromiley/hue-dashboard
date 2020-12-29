<template>
  <div>
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      {{ title }}
    </h2>
    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
  }
}
</script>
