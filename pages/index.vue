<template>
  <div>
    <sidebar-menu />
    <h1 class="titulo">Bienvenido a Administracion Maxivision</h1>
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
  left: center;
  color: var(--d1-color-texts);
  width: 497px;
  height: auto;
  position: relative;
  font-size: 64px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
</style>
