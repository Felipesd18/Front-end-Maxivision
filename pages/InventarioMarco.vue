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

      <div class="Contenedor">
        <div class="Columnas">
          <span class="Columna1">Marca</span>
          <span class="Columna2">Modelo</span>
          <span class="Columna3">Color</span>
          <span class="Columna4">Estado del marco</span>
          <span class="Columna5">Sucursal</span>
        </div>

        <div
          class="Columnas"
          v-for="(marco, index) in listadoMarcos"
          :key="index"
        >
          <span
            class="Columna1"
            v-for="(marca, indice1) in listadoMarcas"
            :key="indice1"
            ><span v-if="marca.id == marco.id_marca_marco">
              {{ marca.nombre }}</span
            ></span
          >
          <span
            class="Columna2"
            v-for="(modelo, indice2) in listadoModelos"
            :key="indice2"
            ><span v-if="modelo.id == marco.id_modelo_marca">{{
              modelo.codigo
            }}</span></span
          >
          <span
            class="Columna3"
            v-for="(color, indice3) in listadoColores"
            :key="indice3"
            ><span v-if="color.id == marco.id_codigo_color"
              >{{ color.codigo }}, {{ color.nombre_alias }}</span
            ></span
          >
          <span class="Columna4">{{ marco.estado_de_marco }}</span>
          <span
            class="Columna5"
            v-for="(sucursal, indice4) in listadoSucursales"
            :key="indice4"
          >
            <span v-if="sucursal.id == marco.id_sucursal">{{
              sucursal.nombre
            }}</span>
          </span>
        </div>
      </div>

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

  data: function () {
    return {
      listadoMarcos: [],
      listadoSucursales: [],
      listadoMarcas: [],
      listadoModelos: [],
      listadoColores: [],
    }
  },
  methods: {
    getData: async function () {
      try {
        let response = await this.$axios.get('/marco')
        this.listadoMarcos = response.data
        response = await this.$axios.get('/sucursal')
        this.listadoSucursales = response.data
        response = await this.$axios.get('/marca_marco')
        this.listadoMarcas = response.data
        response = await this.$axios.get('/modelo_marca')
        this.listadoModelos = response.data
        response = await this.$axios.get('/color_marca')
        this.listadoColores = response.data
      } catch (error) {
        console.log('Error al obtener los datos', error)
      }
    },
  },
  created: function () {
    this.getData()
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

.Contenedor {
  top: 400px;
  left: 20px;
  position: absolute;
  width: auto;
  height: auto;
}

.Columnas {
  width: 1000px;
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
  margin: 10px;
}

.Columna1 {
  position: absolute;
  left: 30px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 500;
}
.Columna2 {
  position: absolute;
  left: 200px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 500;
}
.Columna3 {
  position: absolute;
  left: 300px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 500;
}
.Columna4 {
  position: absolute;
  left: 600px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 500;
}
.Columna5 {
  position: absolute;
  left: 850px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 500;
}
</style>
