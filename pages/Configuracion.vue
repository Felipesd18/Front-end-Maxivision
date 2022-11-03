<template>
  <div>
    <h1>Configuracion</h1>
    <sidebar-menu />
  </div>
</template>

<script>
import sidebarMenu from '../components/sidebar-menu.vue'
export default {
  components: { sidebarMenu },
  computed: {
    currentUser() {
      return this.$store.state.auth.usuario.status.loggedIn
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>