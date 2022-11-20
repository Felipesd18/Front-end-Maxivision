<template>
  <div>
    <div class="panel-superior">a</div>
    <sidebar-menu />
    <div class="logo">
      <img
        src="../assets/logo-maxivision.png"
        alt="logo-maxisvision"
        width="200"
      />
    </div>
    <div class="titulo">Bienvenido a Administración Maxivision</div>
  </div>
</template>

<script>
import sidebarMenu from '../components/sidebar-menu.vue'
export default {
  middleware: ['authenticated'],
  components: { sidebarMenu },
  data() {
    return {}
  },
}
</script>

<style>
.titulo {
  top: center;

  color: var(--d1-color-texts);
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 64px;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.panel-superior {
  border-color: var(--d1-color-texts);
  color: var(--d1-color-texts);
  width: 100%;
  background-color: var(--d1-color-texts);
}
.logo {
  text-align: center;
  top: 10px;
}
</style>
