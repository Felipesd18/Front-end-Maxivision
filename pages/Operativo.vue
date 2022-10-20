<template>
  <div >
    <div class="encabezado"> 
        <div class="logo-header">
        <img src="../assets/logo-01.png" 
        alt="logo-maxisvision"
        width="80">
        </div>
        <div class="header-texto">
          Operativo
        </div>
      </div>
    <sidebar-menu />
  </div>
 
</template>


<script>
import sidebarMenu from '../components/sidebar-menu.vue'
export default {
  components: { sidebarMenu },
  data() {
    return {}
    
  },
  
}
</script>

<style>
</style>