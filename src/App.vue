<template>
  <div id="app">
    <nav id="nav" class="bg-indigo-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
            <div class="flex-shrink-0">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow">
            </div>
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-indigo-700 text-white", Default: "" -->
                  <router-link to="/" class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium" exact-active-class="bg-indigo-700 text-white" >Home</router-link>
                </div>
            </div>
            </div>
            <div class="hidden md:block">
            <div v-if="isAuthenticated" class="ml-4 flex items-center md:ml-6">
                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                <div>
                    <button @click="onProfileClick" class="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" id="user-menu" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </button>
                </div>
                <!--
                    Profile dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div v-if="isProfileOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <button @click="onLogout" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
                </div>
                </div>
            </div>
            </div>
            <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button  @click="onProfileClick" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <svg :class="[{block: !isProfileOpen, hidden: isProfileOpen}, 'h-6 w-6']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg :class="[{block: isProfileOpen, hidden: !isProfileOpen}, 'h-6 w-6']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
        </div>
        </div>

        <div :class="[{hidden : !isProfileOpen, block: isProfileOpen}, 'md:hidden']">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
            <router-link to="/" class="bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium" exact-active-class="bg-indigo-700 text-white" >Home</router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-700">
            <div class="flex items-center px-5">
            <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
                <div class="text-base font-medium text-white">{{ user.name }}</div>
                <div class="text-sm font-medium text-indigo-300">{{ user.email }}</div>
            </div>
            </div>
            <div class="mt-3 px-2 space-y-1">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Your Profile</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Settings</a>

            <button @click="onLogout" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Sign out</button>
            </div>
        </div>
        </div>
    </nav>

    <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div v-if="isAuthChecked" class="px-4 py-4 sm:px-0">
            <router-view />
        </div>
        <div class="container" v-else>
          <Loader class="mx-auto" />
        </div>
        <!-- /End replace -->
        </div>
    </main>
    <notification-mananger />
    </div>
</template>

<script>
import Loader from './components/Loader.vue'
import NotificationMananger from './components/NotificationMananger.vue'
export default {
  name: 'App',
  components: { Loader, NotificationMananger },
  data () {
    return {
      isProfileOpen: false,
      loginChecked: false
    }
  },
  methods: {
    onProfileClick () {
      this.isProfileOpen = !this.isProfileOpen
    },
    async onLogout () {
      await this.$api.logout()
      this.$store.dispatch('LOGOUT')
      this.$router.push({ name: 'Login' })
      this.isProfileOpen = false
    },
    async checkLoggedIn () {
      try {
        const response = await this.$api.user()
        this.$store.dispatch('UPDATE_USER', response.data)
        this.$store.dispatch('SET_LOGGED_IN', true)
        if (this.$route.name !== 'Home') {
          this.$router.push({ name: 'Home' })
        }
      } catch (e) {
        if (this.$route.name !== 'Login') {
          this.$router.push({ name: 'Login' })
        }
      } finally {
        this.$store.dispatch('AUTH_CHECKED')
      }
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    isAuthChecked () {
      return this.$store.getters.isAuthChecked
    },
    user () {
      return this.$store.state.user || {}
    }
  },
  created () {
    this.checkLoggedIn()
  }
}
</script>
``
