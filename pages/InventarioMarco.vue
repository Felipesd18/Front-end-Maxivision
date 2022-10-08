<template>
  <div class="inventario-marco-container">
    <sidebar-menu />
    <div class="inventario-marco-inventario-marco">
      <span class="inventario-marco-text"><span>Inventario Marcos</span></span>
      <nuxt-link to="/Inventario">
        <div class="inventario-marco-visualizar">
          <span class="inventario-marco-text02"><span>Volver</span></span>
        </div>
      </nuxt-link>
      <nuxt-link to="/AgregarMarco">
        <div class="inventario-marco-ingresar-marco">
          <span class="inventario-marco-text04">
            <span>Ingresar Nuevo Marco</span>
          </span>
        </div>
      </nuxt-link>
      <span class="inventario-marco-text06"><span>Listado</span></span>
      <div class="inventario-marco-descargar">
        <span class="inventario-marco-text08">
          <span>Descargar inventario para proovedores</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventarioMarco',
  head: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.inventario-marco-container {
  min-height: 100vh;
}
.inventario-marco-inventario-marco {
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
.inventario-marco-text {
  top: 14px;
  left: 20px;
  color: var(--d1-color-texts);
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
.inventario-marco-visualizar {
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
.inventario-marco-text02 {
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
.inventario-marco-ingresar-marco {
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
.inventario-marco-text04 {
  top: 18px;
  left: 25px;
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
.inventario-marco-text06 {
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
.inventario-marco-descargar {
  top: 170px;
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
.inventario-marco-text08 {
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
</style>
