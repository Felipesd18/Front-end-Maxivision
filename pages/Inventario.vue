<template>
  <div class="inventario-container">
    <sidebar-menu />
    <div class="inventario-inventario">
      <span class="inventario-text"><span>Inventario</span></span>
      <div class="inventario-frame6">
        <span class="inventario-text02">
          <span>
            <span>Inventario</span>
            <br />
            <span>Existencias</span>
            <br />
            <span>Marcos</span>
          </span>
        </span>
        <div class="inventario-visualizar">
          <nuxt-link to="/InventarioMarco">
            <span class="inventario-text09"><span>Visualizar</span></span>
          </nuxt-link>
        </div>
      </div>
      <div class="inventario-frame7">
        <span class="inventario-text11">
          <span>
            <span>Inventario</span>
            <br />
            <span>Existencias</span>
            <br />
            <span>Cristales</span>
          </span>
        </span>
        <div class="inventario-visualizar1">
          <nuxt-link to="/InventarioCristales">
            <span class="inventario-text18"><span>Visualizar</span></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inventario',
  head: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.inventario-container {
  min-height: 100vh;
}
.inventario-inventario {
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
.inventario-text {
  top: 14px;
  left: 19px;
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
.inventario-frame6 {
  top: 213px;
  left: 314px;
  width: 571px;
  height: 654px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: var(--dl-color-default-defaultstroke);
  border-style: solid;
  border-width: 1px;
  margin-right: 0;
  border-radius: 15px;
  margin-bottom: 0;
  background-color: var(--dl-color-default-formbackground);
}
.inventario-text02 {
  top: 97px;
  left: 99px;
  color: var(--d1-color-texts);
  height: auto;
  position: absolute;
  font-size: 64px;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.inventario-visualizar {
  top: 449px;
  left: 177px;
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
.inventario-text09 {
  top: 18px;
  left: 33px;
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
.inventario-frame7 {
  top: 213px;
  left: 1034px;
  width: 571px;
  height: 654px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: var(--dl-color-default-defaultstroke);
  border-style: solid;
  border-width: 1px;
  margin-right: 0;
  border-radius: 15px;
  margin-bottom: 0;
  background-color: var(--dl-color-default-formbackground);
}
.inventario-text11 {
  top: 97px;
  left: 99px;
  color: var(--d1-color-texts);
  height: auto;
  position: absolute;
  font-size: 64px;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.inventario-visualizar1 {
  top: 449px;
  left: 177px;
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
.inventario-text18 {
  top: 18px;
  left: 33px;
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
