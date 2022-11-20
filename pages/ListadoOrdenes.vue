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

      <div class="contenedorElementos">
        <div class="fila1">
          <span class="columna1">Rut</span>
          <span class="columna1">Nombre Paciente</span>
          <span class="columna1">Fono</span>
          <span class="columna1">Lote</span>
        </div>

        <div class="fila1" v-for="(orden, index) in listaOrdenes" :key="index">
          <span class="columna1"> {{ orden.rut }} </span>
          <span class="columna1"> {{ orden.nombre }} </span>
          <span class="columna1"> {{ orden.fono }} </span>
          <span class="columna1"> {{ orden.lote }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authHeader from '../services/auth-header'

export default {
  name: 'ListadoOrdenes',
  head: {
    title: 'exported project',
  },

  data: function () {
    return {
      listaOrdenes: [],
    }
  },

  methods: {
    getData: async function () {
      try {
        let response = await this.$axios.get('/orden', {
          headers: authHeader(),
        })
        this.listaOrdenes = response.data
      } catch (error) {
        console.log('Error al obtener las ordenes', error)
      }
    },
  },

  created: function () {
    this.getData()
  },
}
</script>

<style scoped>
.contenedorElementos {
  top: 320px;
  left: 10px;
  position: relative;
}
.columna1 {
  display: table-cell;
  float: left;
  min-width: 10px;
  margin: 10px 110px 10px 25px; /*arriba derecha abajo izquierda*/
}

.fila1 {
  width: auto;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  flex-shrink: 0;
  border-color: var(--dl-color-default-defaultstroke);
  /*border-style: solid;*/
  border-width: 1px;
  border-radius: 15px;
  background-color: var(--dl-color-default-formbackground);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  flex-wrap: wrap;
  justify-content: left; /*Donde justificar todo el contenido del div*/
  margin: 10px 350px 10px 0px;
}
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
