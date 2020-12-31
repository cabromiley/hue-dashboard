<template>
    <div>
        <Notification v-for="(notification, $key) in notifications" :key="$key" />
    </div>
</template>

<script>
import Notification from './Notification'
export default {
  name: 'NotificationMananger',
  components: { Notification },
  computed: {
    notifications () {
      return this.$store.state.notifications
    }
  }
}
</script>
