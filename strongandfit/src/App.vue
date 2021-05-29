<template>
  <div id="app">
    <Header :publicCurrentUser="currentUserData"/>
      <router-view :key="$route.fullPath" @userConnected="setUserConnected"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {

  data () {
    return {
      currentUserData: false
    }
  },

  name: 'App',
  components: {
    Header
  },

  methods: {
    setUserConnected: function(userData) {
      // changement de la data currentUserData
      this.currentUserData = userData;
    }
  }
}
</script>

<style>
</style>
