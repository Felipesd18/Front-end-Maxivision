<template>
  <div>
    <sidebar-menu />
    <div class="contenedor-pagina">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Operativos</div>
      </div>

      <div class="contenedor-boton">
        <nuxt-link to="/IniciarOperativo">
          <label class="label-boton">Iniciar Operativo</label>
        </nuxt-link>
      </div>

      <div class="contenedor-listado">
        <label class="listado-label">Lista de Operativos</label>
      </div>
    </div>
  </div>
</template>


<script>
import sidebarMenu from '../components/sidebar-menu.vue'
export default {
  components: { sidebarMenu },
  data() {
    return {}
  },
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
}
</script>

<style>
.contenedor-boton {
  top: 140px;
  left: 20px;
  width: 350px;
  height: 83px;
  display: flex;
  overflow: hidden;
  float: none;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  margin-right: 0;
  border-radius: 15px;
  margin-bottom: 0;
  background-color: var(--dl-color-default-defaultstroke);
}

.contenedor-listado {
  top: 270px;
  left: 20px;
  position: relative;
}

.listado-label {
  font-size: 40px;
  font-weight: 700;
  color: var(--d1-color-texts);
}
</style>