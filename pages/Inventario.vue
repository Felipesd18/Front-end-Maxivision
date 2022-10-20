<template>
  <div class="inventario-container">
    <sidebar-menu />
    <div class="inventario-inventario">
      <div class="inventario-text">
        <div class="logo">
        <img src="../assets/logo-01.png" 
        alt="logo-maxisvision"
        width="100">
      </div>
        Inventario
      </div>
      <div class="inventario-frame6">
        <div class="inventario-text02">
          <div class="logo"> 
          <img src="../assets/logo-marco.png"
          width="150">
        </div>
            Marcos
        </div>
        <div class="inventario-visualizar">
          <nuxt-link to="/InventarioMarco">
            <span class="inventario-text09"><span>Visualizar</span></span>
          </nuxt-link>
        </div>
      </div>
      <div class="inventario-frame7">
        <div class="inventario-text11">
          <div class="logo"> 
          <img src="../assets/logo-lentes.png"
          width="150">
        </div>
          Cristales
        </div>
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
  overflow-x: auto;
  overflow-y: auto;
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
  top: 0px;
  left: 0px;
  width: 2000px;
  color: white;
  background-color: var(--d1-color-texts);
  height: 70px;
  position: absolute;
  font-size: 64px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 100%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.inventario-frame6 {
  top: 100px;
  left: 20px;
  width: 500px;
  height: 450px;
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
  top: 40px;
  left: 70px;
  color: var(--d1-color-texts);
  height: auto;
  font-size: 55px;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.inventario-visualizar {
  top: 300px;
  left: 150px;
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
  top: 100px;
  left: 550px;
  width: 500px;
  height: 450px;
  
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
  top: 100px;
  left: 70px;
  color: var(--d1-color-texts);
  height: auto;
  font-size: 55px;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.inventario-visualizar1 {
  top: 300px;
  left: 150px;
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
.logo{
  display:block;
}
</style>
