<template>
  <div>
    <sidebar-menu />
    <div class="contenedor-pagina">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Iniciar Operativo</div>
      </div>

      <div class="contenedor-fecha-inicio">
        <label class="label-contenedor">Fecha Inicio</label>
        <input class="input-fecha" type="date" />
      </div>

      <div class="contenedor-fecha-final">
        <label class="label-contenedor">Fecha Final</label>
        <input class="input-fecha" type="date" />
      </div>

      <div class="contenedor-nombre-operativo">
        <label class="label-contenedor">Nombre del Operativo</label>
        <input
          class="input-text"
          type="text"
          placeholder="Ingrese nombre Operativo"
        />
      </div>

      <div class="contenedor-descripcion-operativo">
        <label class="label-contenedor">Descripción del Operativo</label>
        <div class="div-rize">
          <input
            class="input-text-resize"
            type="text"
            placeholder="Ingrese descripción del Operativo"
          />
        </div>
      </div>

      <div class="contenedor-boton-cancelar">
        <nuxt-link to="/Operativo">
          <label class="label-boton">Cancelar</label>
        </nuxt-link>
      </div>

      <div class="contenedor-boton-ingresar">
        <label class="label-boton">Ingresar</label>
      </div>
    </div>
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
.contenedor-fecha-inicio {
  top: 120px;
  left: 20px;
  position: absolute;
}

.contenedor-fecha-final {
  top: 120px;
  left: 400px;
  position: absolute;
}

.contenedor-nombre-operativo {
  top: 250px;
  left: 20px;
  position: absolute;
}

.contenedor-descripcion-operativo {
  top: 380px;
  left: 20px;
  position: absolute;
}

.contenedor-boton-cancelar {
  top: 600px;
  left: 20px;
  position: absolute;
  width: 350px;
  height: 83px;
  display: flex;
  overflow: hidden;
  float: none;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  margin-right: 0;
  border-radius: 15px;
  margin-bottom: 0;
  background-color: var(--d1-color-cancel-button);
}

.contenedor-boton-ingresar {
  top: 600px;
  right: 20px;
  position: absolute;
  width: 350px;
  height: 83px;
  display: flex;
  overflow: hidden;
  float: none;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  margin-right: 0;
  border-radius: 15px;
  margin-bottom: 0;
  background-color: var(--dl-color-default-defaultstroke);
}

.div-rize {
  top: 10px;
  width: 750px;
  height: auto;
  display: flex;
  position: relative;
  overflow: auto;
  resize: both;
}

.input-text-resize {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: var(--dl-color-default-defaultstroke);
  font-family: Poppins;
}

.input-text {
  top: 10px;
  width: 360px;
  text-align: center;
  position: relative;
  display: flex;
  font-size: 24px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: var(--dl-color-default-defaultstroke);
  font-family: Poppins;
}

.label-contenedor {
  order: -1;
  color: var(--d1-color-texts);
  height: auto;
  position: relative;
  font-size: 24px;
  align-self: auto;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.input-fecha {
  top: 10px;
  width: 360px;
  text-align: center;
  position: relative;
  display: flex;
  font-size: 24px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: var(--dl-color-default-defaultstroke);
  font-family: Poppins;
}
</style>