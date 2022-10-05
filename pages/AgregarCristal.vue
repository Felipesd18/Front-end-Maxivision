<template>
  <div class="agregar-cristal-container">
    <sidebar-menu />
    <div class="agregar-cristal-agregar-cristal">
      <form @submit.prevent="handleSubmitForm">
        <span class="agregar-cristal-text">
          <span>Ingreso Cristal a Inventario</span>
        </span>
        <span class="agregar-cristal-text02"><span>Tipo</span></span>
        <select class="custom-select" v-model="newCristal.tipo" required>
          <option disabled>Seleccione un tipo de Cristal</option>
          <option>Lejos</option>
          <option>Cerca</option>
        </select>
        <!-- Seccion correspondiente a tabla ADD-->
        <div class="agregar-cristal-tabla-a-d-d">
          <img
            src="/playground_assets/rectangle234623-a8od-200h.png"
            alt="Rectangle234623"
            class="agregar-cristal-volver"
          />
          <img
            src="/playground_assets/rectangle244623-u2fs-200h.png"
            alt="Rectangle244623"
            class="agregar-cristal-rectangulo1-24"
          />

          <span class="agregar-cristal-text04"><span>ADD</span></span>
          <input
            class="agregar-cristal-text06"
            type="number"
            placeholder="Ingrese"
            v-model="newCristal.add"
          />
          <!-- Fin tabla ADD-->

          <!-- Inicio de tabla OD junto a columnas -->
        </div>
        <div class="agregar-cristal-tabla">
          <img
            src="/playground_assets/rectangle224613-dj7-200h.png"
            alt="Rectangle224613"
            class="agregar-cristal-rectangulo1-1"
          />
          <img
            src="/playground_assets/rectangle24628-s5ln-200h.png"
            alt="Rectangle24628"
            class="agregar-cristal-rectangulo1-2"
          />
          <img
            src="/playground_assets/rectangle34634-0e2b-200h.png"
            alt="Rectangle34634"
            class="agregar-cristal-rectangulo1-3"
          />
          <img
            src="/playground_assets/rectangle44635-of8m-200h.png"
            alt="Rectangle44635"
            class="agregar-cristal-rectangulo1-4"
          />
          <img
            src="/playground_assets/rectangle54636-0166-200h.png"
            alt="Rectangle54636"
            class="agregar-cristal-rectangulo1-5"
          />
          <img
            src="/playground_assets/rectangle64637-gxb0j-200h.png"
            alt="Rectangle64637"
            class="agregar-cristal-rectangulo1-6"
          />
          <img
            src="/playground_assets/rectangle74638-770y-200h.png"
            alt="Rectangle74638"
            class="agregar-cristal-rectangulo1-7"
          />
          <img
            src="/playground_assets/rectangle84639-qbwc-200h.png"
            alt="Rectangle84639"
            class="agregar-cristal-rectangulo2-1"
          />
          <img
            src="/playground_assets/rectangle104641-8t6-200h.png"
            alt="Rectangle104641"
            class="agregar-cristal-rectangulo2-2"
          />
          <img
            src="/playground_assets/rectangle124643-omhj-200h.png"
            alt="Rectangle124643"
            class="agregar-cristal-rectangulo2-3"
          />
          <img
            src="/playground_assets/rectangle144645-0fyi-200h.png"
            alt="Rectangle144645"
            class="agregar-cristal-rectangulo2-4"
          />
          <img
            src="/playground_assets/rectangle164648-6rqn-200h.png"
            alt="Rectangle164648"
            class="agregar-cristal-rectangulo2-5"
          />
          <img
            src="/playground_assets/rectangle184650-stjg-200h.png"
            alt="Rectangle184650"
            class="agregar-cristal-rectangulo2-6"
          />
          <img
            src="/playground_assets/rectangle204652-91jy-200h.png"
            alt="Rectangle204652"
            class="agregar-cristal-rectangulo2-7"
          />
          <span class="agregar-esfera"><span>Esfera</span></span>
          <span class="agregar-cilindro"><span>Cilindro</span></span>
          <span class="agregar-eje"><span>Eje</span></span>
          <span class="agregar-dp"><span>DP</span></span>
          <span class="agregar-cr-min"><span>CR/MIN</span></span>
          <span class="agregar-foto-ar"><span>FOTO/AR</span></span>
          <span class="agregar-od"><span>Cristal</span></span>
          <input
            class="valor-esfera"
            type="number"
            placeholder="0"
            v-model="newCristal.esferico"
            required
          />
          <input
            class="valor-cilindro"
            type="number"
            placeholder="0"
            v-model="newCristal.cilindro"
            required
          />
          <input
            class="valor-eje"
            type="number"
            placeholder="0"
            v-model="newCristal.eje"
            required
          />
          <input
            class="valor-dp"
            type="number"
            placeholder="0"
            v-model="newCristal.dp"
            required
          />
          <input
            class="valor-cr-min"
            style="text-transform: uppercase"
            type="text"
            placeholder="CR/MIN"
            v-model="newCristal.cr_min"
          />
          <input
            class="valor-foto-ar"
            style="text-transform: uppercase"
            type="text"
            placeholder="FOTO/AR"
            v-model="newCristal.foto_ar"
            required
          />
        </div>
        <!-- Fin columna 1 y 2-->
        <nuxt-link to="/InventarioCristales">
          <div class="agregar-cristal-cancelar">
            <span class="cancelar-cristal"><span>Cancelar</span></span>
          </div>
        </nuxt-link>
        <div class="agregar-cristal-ingresar">
          <button class="ingresar-cristal" type="submit">
            <span>Ingresar</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AgregarCristal',
  head: {
    title: 'exported project',
  },
  data: function () {
    return {
      newCristal: {
        tipo: '',
        esferico: null,
        cilindro: null,
        eje: null,
        dp: null,
        cr_min: '',
        foto_ar: '',
        ojo_d_i: '',
        add: null,
        tipo_lejos_cerca: '',
        estado_proceso: 'En inventario',
        lote: null,
      },
    }
  },
  methods: {
    handleSubmitForm() {
      let apiURL = 'http://localhost:8080/cristal'
      axios
        .post(apiURL, this.newCristal) //Se realiza post con el objeto newCristal como parametro asimilando el formato json
        .then((res) => {
          this.respuesta = 'Se ha agregado correctamente el Cristal'
          window.location.reload()
          alert(this.respuesta)
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.agregar-cristal-container {
  min-height: 100vh;
}
.agregar-cristal-agregar-cristal {
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
.agregar-cristal-text {
  top: 14px;
  left: 20px;
  color: rgba(0, 0, 0, 1);
  width: 900px;
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
.agregar-cristal-text02 {
  top: 152px;
  left: 20px;
  color: rgba(0, 0, 0, 1);
  width: 60px;
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
  top: 200px;
  left: 20px;
  color: rgba(0, 0, 0, 1);
  width: 360px;
  height: 40px;
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
.custom-select select {
  left: 10px;
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

.agregar-cristal-tabla-a-d-d {
  top: 537px;
  left: 10px;
  width: 1203px;
  height: 77px;
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
.agregar-cristal-volver {
  top: 0px;
  left: 0px;
  width: 192px;
  height: 77px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px 0 0 15px;
}
.agregar-cristal-rectangulo1-24 {
  top: 0px;
  left: 191px;
  width: 763px;
  height: 77px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo1-25 {
  top: 0px;
  left: 953px;
  width: 250px;
  height: 77px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 15px 15px 0;
}
.agregar-cristal-text04 {
  top: 1px;
  left: 1px;
  color: rgba(0, 0, 0, 1);
  width: 150px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-cristal-text06 {
  top: 1px;
  left: 192px;
  color: rgba(0, 0, 0, 1);
  width: 761px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-cristal-text08 {
  top: 1px;
  left: 954px;
  color: rgba(0, 0, 0, 1);
  width: 248px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-cristal-tabla {
  top: 362px;
  left: 10px;
  width: 1680px;
  height: 136px;
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

.agregar-cristal-rectangulo1-1 {
  top: 0px;
  left: 0px;
  width: 150px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px 0 0;
}
.agregar-cristal-rectangulo2-1 {
  top: 58px;
  left: 0px;
  width: 150px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 0 0 15px;
}

.agregar-cristal-rectangulo1-2 {
  top: 0px;
  left: 150px;
  width: 170px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo2-2 {
  top: 58px;
  left: 150px;
  width: 170px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo1-3 {
  top: 0px;
  left: 320px;
  width: 170px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}

.agregar-cristal-rectangulo2-3 {
  top: 58px;
  left: 320px;
  width: 170px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo1-4 {
  top: 0px;
  left: 490px;
  width: 100px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo2-4 {
  top: 58px;
  left: 490px;
  width: 100px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo1-5 {
  top: 0px;
  left: 590px;
  width: 100px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo2-5 {
  top: 58px;
  left: 590px;
  width: 100px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo1-6 {
  top: 0px;
  left: 690px;
  width: 200px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}

.agregar-cristal-rectangulo2-6 {
  top: 58px;
  left: 690px;
  width: 200px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangulo1-7 {
  top: 0px;
  left: 890px;
  width: 190px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 15px 0 0;
}

.agregar-cristal-rectangulo2-7 {
  top: 58px;
  left: 890px;
  width: 190px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 0 15px;
}
.agregar-esfera {
  top: 1px;
  left: 110px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
  bottom: 77px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-cilindro {
  top: 1px;
  left: 280px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
  bottom: 77px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-eje {
  top: 1px;
  left: 420px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
  bottom: 77px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-dp {
  top: 1px;
  left: 515px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
  bottom: 77px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-cr-min {
  top: 1px;
  left: 660px;
  color: rgba(0, 0, 0, 1);
  width: 252px;
  bottom: 77px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-foto-ar {
  top: 1px;
  left: 870px;
  color: rgba(0, 0, 0, 1);
  width: 220px;
  bottom: 77px;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.agregar-od {
  top: 59px;
  left: -15px;
  color: rgba(0, 0, 0, 1);
  width: 188px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 30px;
  align-self: auto;
  font-style: ExtraLight;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.valor-esfera {
  top: 59px;
  left: 150px;
  color: rgba(0, 0, 0, 1);
  width: 170px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.valor-cilindro {
  top: 59px;
  left: 320px;
  color: rgba(0, 0, 0, 1);
  width: 170px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.valor-eje {
  top: 59px;
  left: 490px;
  color: rgba(0, 0, 0, 1);
  width: 100px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.valor-dp {
  top: 59px;
  left: 590px;
  color: rgba(0, 0, 0, 1);
  width: 100px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.valor-cr-min {
  top: 59px;
  left: 690px;
  color: rgba(0, 0, 0, 1);
  width: 200px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
}
.valor-foto-ar {
  top: 59px;
  left: 890px;
  color: rgba(0, 0, 0, 1);
  width: 190px;
  bottom: 1px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: Thin;
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  line-height: 2;
  font-stretch: normal;
  text-decoration: none;
  border-radius: 0 0 15px;
}
.agregar-cristal-cancelar {
  top: 658px;
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
  background-color: red;
}
.cancelar-cristal {
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
.agregar-cristal-ingresar {
  top: 658px;
  left: 1000px;
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
  background-color: green;
}
.ingresar-cristal {
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
