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

      <div class= "Contenedor">

        <div class= "Columnas">
          <span class="Columna1">Tipo</span>
          <span class="Columna2">Esferico</span>
          <span class="Columna3">Cilindro</span>
          <span class="Columna4">Eje</span>
          <span class="Columna5">DP</span>
          <span class="Columna6">CR/MIN</span>
          <span class="Columna7">Foto/Ar</span>
          <span class="Columna8">ADD</span>
          <span class="Columna9">Estado</span>
          <span class="Columna10">Sucursal</span>
        </div>
          <div class= "Columnas" v-for= "(cristal,index) in listadoCristales" :key="index">
            <span class="Columna1">{{cristal.tipo}}</span>
            <span class="Columna2">{{cristal.esferico}}</span>
            <span class="Columna3">{{cristal.cilindro}}</span>
            <span class="Columna4">{{cristal.eje}}</span>
            <span class="Columna5">{{cristal.dp}}</span>
            <span class="Columna6">{{cristal.cr_min}}</span>
            <span class="Columna7">{{cristal.foto_ar}}</span>
            <span class="Columna8">{{cristal.add}}</span>
            <span class="Columna9">{{cristal.estado_proceso}}</span>
            <span class="Columna10" v-for="(sucursal, indice) in listadoSucursales" :key="indice">
              <span v-if="sucursal.id == cristal.id_sucursal">{{sucursal.nombre}}</span>
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InventarioCristales',
  head: {
    title: 'exported project',
  },

  data: function () {
    return {
      listadoCristales: [],
      listadoSucursales: [],
    }
  },

  methods: {
    getData: async function () {
      try {

        let response = await this.$axios.get('/cristal')
        this.listadoCristales = response.data

        let sucursales = await this.$axios.get('/sucursal')
        this.listadoSucursales = sucursales.data


      } catch (error) {
        console.log('Error al obtener listado cristales',error)
      }
    },
  },

  created: function () {
    this.getData()
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
.inventario-cristales-text {
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

.Contenedor {
  top: 400px;
  left: 20px;
  position: absolute;
  width: auto;
  height: auto;
}

.Columnas {
  width: 1200px;
  height: 50px;
  display: flex;
  overflow: hidden;
  position: relative;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: var(--dl-color-default-defaultstroke);
  /*border-style: solid;*/
  border-width: 1px;
  margin-right: 0;
  border-radius: 15px;
  margin-bottom: 0;
  background-color: var(--dl-color-default-formbackground);
  text-align: left;
  font-family: Poppins;
  flex-direction: column;
  margin: 10px;
}

.Columna1 {
  position: absolute;
  left: 30px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
  
}
.Columna2 {
  position: absolute;
  left: 100px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna3 {
  position: absolute;
  left: 200px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna4 {
  position: absolute;
  left: 300px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna5 {
  position: absolute;
  left: 400px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna6 {
  position: absolute;
  left: 500px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna7 {
  position: absolute;
  left: 600px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna8 {
  position: absolute;
  left: 700px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna9 {
  position: absolute;
  left: 800px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna10 {
  position: absolute;
  left: 1070px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}

</style>
