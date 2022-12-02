<template>
  <div>
    <sidebar-menu />
    <div class="contenedor-pagina">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Configuración</div>
      </div>

      <div class="contenedor-grupos">
        <div class="contenedor-limite-stock">
          <label class="label-titulo">Ajustar limite de stock para alertas</label>
          <div>
            <input type="number" class="input" />
            <button class="boton">
              <span class="label-boton">Actualizar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import sidebarMenu from '../components/sidebar-menu.vue'
export default {
  components: { sidebarMenu },
  middleware: ['authenticated'],
  data() {
    return {
      
    }
  },
}
</script>

<style>
.contenedor-grupos {
  width: auto;
  height: auto;
  position: relative;
  padding: 20px 20px 20px 20px;
}

.contenedor-limite-stock {
  padding: 20px 0px 20px 0px;
}

.boton {
  width: 200px;
  height: 48px;
}

.label-boton {
  font-size: 24px;
}

.label-titulo {
  font-size: 32px;
}

.input {
  width: 225px;
  padding-right: 20px;
}
</style>
