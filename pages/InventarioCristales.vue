<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<template>
  <div class="inventario-cristales-container">
    <sidebar-menu />
    <div class="contenedor-pagina">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Inventario cristales</div>
      </div>
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
      
      <span class="inventario-cristales-text08">
        <span>Listado</span>
        <v-btn
            color="primary"
            class="boton-descarga"
            dark
            @click="descargarExcel()"
          >
            Descargar inventario</v-btn
          >
      </span>

      <span class="inventario-cristales-text08">
        <span>Listado</span>
        <v-btn
          color="primary"
          class="boton-descarga"
          dark
          @click="descargarExcel()"
        >
          Descargar inventario</v-btn
        >
      </span>

      <div class="Contenedor">
        
        <div class="Columnas">
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
        <div
          class="Columnas"
          v-for="(cristal, index) in listadoCristales"
          :key="index"
        >
          <span class="Columna1">{{ cristal.tipo }}</span>
          <span class="Columna2">{{ cristal.esferico }}</span>
          <span class="Columna3">{{ cristal.cilindro }}</span>
          <span class="Columna4">{{ cristal.eje }}</span>
          <span class="Columna5">{{ cristal.dp }}</span>
          <span class="Columna6">{{ cristal.cr_min }}</span>
          <span class="Columna7">{{ cristal.foto_ar }}</span>
          <span class="Columna8">{{ cristal.add }}</span>
          <span class="Columna9">{{ cristal.estado_proceso }}</span>
          <span
            class="Columna10"
            v-for="(sucursal, indice) in listadoSucursales"
            :key="indice"
          >
            <span v-if="sucursal.id == cristal.id_sucursal">{{
              sucursal.nombre
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authHeader from '../services/auth-header'
import exportXlsFile from 'export-from-json'
export default {
  name: 'InventarioCristales',
  head: {
    title: 'exported project',
  },

  data: function () {
    return {
      listadoCristales: [],
      listadoSucursales: [],
      listadoCristalesExcel: [],
    }
  },

  methods: {
    getData: async function () {
      try {
        let response = await this.$axios.get('/cristal', {
          headers: authHeader(),
        })
        this.listadoCristales = response.data

        let sucursales = await this.$axios.get('/sucursal', {
          headers: authHeader(),
        })
        this.listadoSucursales = sucursales.data
      } catch (error) {
        console.log('Error al obtener listado cristales', error)
      }
    },
    descargarExcel() {
      for (let i in this.listadoCristales) {
          let cristal = {
            tipo :'',
            esferico : '',
            cilindro:'',
            eje:'',
            dp:'',
            cr_min:'',
            foto_ar:'',
            add:'',
            estado:'',
            sucursal:'',
          }
          cristal.tipo = this.listadoCristales.at(i).tipo
          cristal.esferico= this.listadoCristales.at(i).esferico
          cristal.cilindro = this.listadoCristales.at(i).cilindro
          cristal.eje = this.listadoCristales.at(i).eje
          cristal.dp = this.listadoCristales.at(i).dp
          cristal.cr_min= this.listadoCristales.at(i).cr_min
          cristal.foto_ar = this.listadoCristales.at(i).foto_ar
          cristal.add = this.listadoCristales.at(i).add
          cristal.estado = this.listadoCristales.at(i).estado
          cristal.sucursal = this.listadoSucursales
            .filter(
              (sucursal) => sucursal.id == this.listadoCristales.at(i).id_sucursal
            )
            .at(0).nombre
    
          this.listadoCristalesExcel.push(cristal)
      }
      
      const data = this.listadoCristalesExcel;
      const fileName = 'Cristales'
      const exportType = exportXlsFile.types.xls
      exportXlsFile({ data, fileName, exportType })
      this.listadoCristalesExcel = [];
    },
  },

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

  created: function () {
    this.getData()
  },
}
</script>

<style scoped>
.inventario-cristales-container {
  min-height: 100vh;
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
.boton-descarga {
  top: 20%;
  left: 75%;
  
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
  left: 150px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna3 {
  position: absolute;
  left: 250px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna4 {
  position: absolute;
  left: 380px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna5 {
  position: absolute;
  left: 450px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna6 {
  position: absolute;
  left: 540px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna7 {
  position: absolute;
  left: 650px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna8 {
  position: absolute;
  left: 770px;
  top: 10px;
  width: auto;
  height: auto;
  font-size: 20px;
  font-style: Bold;
}
.Columna9 {
  position: absolute;
  left: 870px;
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
