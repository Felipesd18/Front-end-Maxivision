<template>
  <div class="inventario-marco-container">
    <sidebar-menu />
    <div class="inventario-marco-inventario-marco">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Inventario Marcos</div>
      </div>
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
          v-for="(marco, index) in listadoMarcosFiltrado"
          :key="index"
        >
          <span class="Columna1"> {{ marco.marca.nombre }} </span>
          <span class="Columna2"> {{ marco.modelo.codigo }} </span>
          <span class="Columna3">
            {{ marco.color.codigo }} {{ marco.color.nombre_alias }}
          </span>
          <span class="Columna4"> {{ marco.estado_marco }} </span>
          <span class="Columna5"> {{ marco.sucursal.nombre }} </span>
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
      listadoMarcosFiltrado: [],
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

        for (let i in this.listadoMarcos) {
          let marco = {
            marca: {},
            modelo: {},
            color: {},
            estado_marco: '',
            sucursal: {},
          }

          marco.marca = this.listadoMarcas
            .filter(
              (marca) => marca.id == this.listadoMarcos.at(i).id_marca_marco
            )
            .at(0)

          marco.modelo = this.listadoModelos
            .filter(
              (modelo) => modelo.id == this.listadoMarcos.at(i).id_modelo_marca
            )
            .at(0)

          marco.color = this.listadoColores
            .filter(
              (color) => color.id == this.listadoMarcos.at(i).id_codigo_color
            )
            .at(0)

          marco.estado_marco = this.listadoMarcos.at(i).estado_de_marco

          marco.sucursal = this.listadoSucursales
            .filter(
              (sucursal) => sucursal.id == this.listadoMarcos.at(i).id_sucursal
            )
            .at(0)

          this.listadoMarcosFiltrado.push(marco)
        }
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
  left: 900px;
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
  left: 370px;
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
