<template>
  <div class="inventario-cristales-container">
    <sidebar-menu />
    <div class="inventario-cristales-inventario-cristales">
      <span class="inventario-cristales-text">
        <span>Inventario Cristales</span>
      </span>
      <div class="inventario-cristales-visualizar">
        <nuxt-link to="/Inventario">
          <span class="inventario-cristales-text02"><span>Volver</span></span>
        </nuxt-link>
      </div>
      <div class="inventario-cristales-ingresar-cristal">
        <nuxt-link to="/AgregarCristal">
          <span class="inventario-cristales-text04">
            <span>Ingresar Nuevo Cristal</span>
          </span>
        </nuxt-link>
      </div>
      <div class="inventario-cristales-descargar">
        <span class="inventario-cristales-text06">
          <span>Descargar inventario para proovedores</span>
        </span>
      </div>
      <span class="inventario-cristales-text08"><span>Listado</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventarioCristales',
  head: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.inventario-cristales-container {
  min-height: 100vh;
}
.inventario-cristales-inventario-cristales {
  width: 100%;
  height: 1080px;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 0px 0px 0px 0px;
  background-color: rgba(255, 255, 255, 1);
}
.inventario-cristales-text {
  top: 14px;
  left: 20px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
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
.inventario-cristales-visualizar {
  top: 170px;
  left: 20px;
  width: 218px;
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
.inventario-cristales-text02 {
  top: 18px;
  left: 59px;
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
.inventario-cristales-ingresar-cristal {
  top: 170px;
  left: 320px;
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
.inventario-cristales-text04 {
  top: 18px;
  left: 24px;
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
.inventario-cristales-descargar {
  top: 181px;
  left: 1121px;
  width: 679px;
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
.inventario-cristales-text06 {
  top: 18px;
  left: 23px;
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
.inventario-cristales-text08 {
  top: 335px;
  left: 20px;
  color: rgba(0, 0, 0, 1);
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
