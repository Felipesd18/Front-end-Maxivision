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
  middleware: ['authenticated'],
  data() {
    return {}
  },
}
</script>

<style></style>
