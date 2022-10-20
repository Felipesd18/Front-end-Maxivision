<template>
  <div>
    <div class="panel-superior"> a</div>
    <sidebar-menu />
    <div class="logo">
      <img src="../assets/logo-maxivision.png" 
      alt="logo-maxisvision"
      width="200">
    </div>
    <div class="titulo">Bienvenido a Administración Maxivision</div>
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
.titulo {
  top: center;
  left: 60px;
  color: var(--d1-color-texts);
  width: 1000px;
  height: 1000px;
  position: relative;
  font-size: 50px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 200;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration:none;
}
.panel-superior{
  border-color:var(--d1-color-texts);
  color: var(--d1-color-texts);
  width:1500px;
  background-color:var(--d1-color-texts);
}
.logo{
  text-align: center;
  
}




</style>
