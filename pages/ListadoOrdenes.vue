<template>
  <div class="listado-ordenes-container">
    <sidebar-menu />
    <div class="contenedor-pagina">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Listado de ordenes</div>
      </div>
      <div class="listado-ordenes-ingresar-marco">
        <nuxt-link to="/Orden">
          <span class="listado-ordenes-text2">
            <span>Ingresar Nueva Orden</span>
          </span>
        </nuxt-link>
      </div>

      <span class="listado-ordenes-text4"><span>Listado</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListadoOrdenes',
  head: {
    title: 'exported project',
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

<style scoped>
.listado-ordenes-container {
  min-height: 100vh;
}

.listado-ordenes-ingresar-marco {
  top: 170px;
  left: 20px;
  width: 402px;
  height: 83px;
  display: flex;
  overflow: hidden;
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
.listado-ordenes-text2 {
  top: 18px;
  left: 26px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.listado-ordenes-text4 {
  top: 335px;
  left: 20px;
  color: var(--d1-color-texts);
  height: auto;
  position: absolute;
  font-size: 24px;
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
