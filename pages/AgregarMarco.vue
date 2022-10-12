<template>
  <div class="agregar-marco-container">
    <sidebar-menu />
    <div class="agregar-marco-agregar-marco">
      <form @submit.prevent="handleSubmitForm" id="formulario">
        <span class="agregar-marco-text"><span>Agregar Marco</span></span>
        <span class="agregar-marco-text02"><span>Modelo</span></span>
        <select
          class="custom-select"
          id="modeloSelecionado"
          v-model="newMarco.modelo"
          required
        >
          <option disabled>Selecione un modelo</option>
          <option>Modelo 1</option>
          <option>Modelo 2</option>
        </select>
        <span class="marco-sucursal"><span>Sucursal</span></span>
        <select class="custom-select3" v-model="newMarco.id_sucursal" required>
          <option disabled>Selecione una Sucursal</option>
          <option
            v-for="(sucursal, index) in sucursales"
            :key="index"
            :value="sucursal.id"
          >
            {{ sucursal.nombre }}
          </option>
        </select>
        <span class="agregar-marco-text04"><span>Codigo del Color</span></span>
        <select
          class="custom-select2"
          id="codigoSelecionado"
          v-model="newMarco.codigo_color"
          required
        >
          <option disabled>Seleccione codigo Color</option>
          <option>Color 1</option>
          <option>Color 2</option>
        </select>
        <div class="agregar-marco-group2">
          <span class="agregar-marco-text06"><span>Alias del Color</span></span>
          <div class="agregar-marco-frame5">
            <input
              class="agregar-marco-text08"
              id="aliasColor"
              v-model="newMarco.alias_color"
              placeholder="Ingrese alias color"
              required
            />
          </div>
        </div>
        <nuxt-link to="/InventarioMarco">
          <div class="agregar-marco-cancelar">
            <span class="agregar-marco-text10"><span>Cancelar</span></span>
          </div>
        </nuxt-link>
        <div class="agregar-marco-ingresar">
          <button type="submit" class="agregar-marco-text12">
            <span>Ingresar</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgregarMarco',
  head: {
    title: 'exported project',
  },
  data: function () {
    return {
      modeloSeleccionado: '',
      codigoSeleccionado: '',
      aliasColor: '',
      respuesta: '',
      sucursales: [],
      newMarco: {
        modelo: 'Selecione un Modelo',
        codigo_color: '',
        alias_color: '',
        estado_de_marco: 'En inventario',
        id_sucursal: '',
        id_orden: '',
      },
    }
  },
  methods: {
    handleSubmitForm() {
      this.$axios
        .post('/marco', this.newMarco) //Se realiza post con el objeto newMarco como parametro asimilando el formato json
        .then((res) => {
          this.respuesta = 'Se ha agregado correctamente el Marco'
          window.location.reload()
          alert(this.respuesta)
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    },
    getData: async function () {
      try {
        let response = await this.$axios.get('/sucursal')
        this.sucursales = response.data
        // console.log(response) // muestra en consola la data
      } catch (error) {
        console.log('Error al obtener las sucursales', error)
      }
    },
  },
  created: function () {
    //Inicia las funciones al cargar la pagina
    this.getData()
  },
}
</script>

<style scoped>
.agregar-marco-container {
  min-height: 100vh;
}
.agregar-marco-agregar-marco {
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
.agregar-marco-text {
  top: 14px;
  left: 19px;
  color: var(--d1-color-texts);
  width: 497px;
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
.agregar-marco-text02 {
  top: 120px;
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
.marco-sucursal {
  top: 120px;
  left: 470px;
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
/*Estilo Selector */
.custom-select {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  top: 156px;
  left: 20px;
  color: var(--dl-color-default-defaultstroke);
  width: 360px;
  height: 40px;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  text-align: left;
  font-family: Poppins;
  font-style: Thin;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.custom-select2 {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  top: 306px;
  left: 20px;
  color: var(--dl-color-default-defaultstroke);
  width: 360px;
  height: 40px;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  text-align: left;
  font-family: Poppins;
  font-style: Thin;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.custom-select3 {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  top: 156px;
  left: 470px;
  color: var(--dl-color-default-defaultstroke);
  width: 360px;
  height: 40px;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  text-align: left;
  font-family: Poppins;
  font-style: Thin;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.custom-select select {
  display: none;
}

.select-selected {
  background-color: var(--dl-color-default-defaultstroke);
}

.select-selected:after {
  position: absolute;
  content: '';
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}
.select-items {
  position: absolute;
  background-color: var(--dl-color-default-defaultstroke);
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
.select-hide {
  display: none;
}
.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}

.agregar-marco-text04 {
  top: 270px;
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
.agregar-marco-group2 {
  top: 270px;
  left: 470px;
  width: 420px;
  height: 66px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.agregar-marco-text06 {
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
  text-decoration: none;
}
.agregar-marco-frame5 {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  color: var(--dl-color-default-defaultstroke);
  top: 36px;
  left: 0px;
  width: 360px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: var(--dl-color-default-defaultstroke);
  border-style: solid;
  background-color: var(--dl-color-default-formbackground);
}
.agregar-marco-text08 {
  border-width: 1px;
  border-radius: 15px;
  top: 0px;
  left: 0px;
  color: var(--dl-color-default-defaultstroke);
  width: 360px;
  height: 40;
  font-size: 24px;
  font-style: Thin;
  text-align: left;
  font-family: Poppins;
  font-weight: 100;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-marco-cancelar {
  top: 430px;
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
  background-color: var(--d1-color-cancel-button);
}
.agregar-marco-text10 {
  top: 18px;
  left: 35px;
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
.agregar-marco-ingresar {
  top: 430px;
  left: 1582px;
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
.agregar-marco-text12 {
  top: 18px;
  left: 43px;
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
