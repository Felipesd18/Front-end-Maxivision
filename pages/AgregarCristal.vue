<template>
  <div class="agregar-cristal-container">
    <sidebar-menu />
    <div class="agregar-cristal-agregar-cristal">
      <span class="agregar-cristal-text">
        <span>Ingreso Cristal a Inventario</span>
      </span>
      <span class="agregar-cristal-text02"><span>Tipo</span></span>
      <select class="custom-select">
        <option value="0">Seleccione un tipo de Cristal</option>
        <option value="1">Lejos</option>
        <option value="2">Cerca</option>
      </select>
      <div class="agregar-cristal-tabla-a-d-d">
        <img
          src="/playground_assets/rectangle234623-a8od-200h.png"
          alt="Rectangle234623"
          class="agregar-cristal-rectangle23"
        />
        <img
          src="/playground_assets/rectangle244623-u2fs-200h.png"
          alt="Rectangle244623"
          class="agregar-cristal-rectangle24"
        />
        <img
          src="/playground_assets/rectangle254624-7phs-200h.png"
          alt="Rectangle254624"
          class="agregar-cristal-rectangle25"
        />
        <span class="agregar-cristal-text04"><span>ADD</span></span>
        <input
          class="agregar-cristal-text06"
          type="number"
          placeholder="Ingrese"
        />
        <input
          class="agregar-cristal-text08"
          type="number"
          placeholder="Ingrese"
        />
      </div>
      <div class="agregar-cristal-tabla">
        <img
          src="/playground_assets/rectangle24628-s5ln-200h.png"
          alt="Rectangle24628"
          class="agregar-cristal-rectangle2"
        />
        <img
          src="/playground_assets/rectangle224613-dj7-200h.png"
          alt="Rectangle224613"
          class="agregar-cristal-rectangle22"
        />
        <img
          src="/playground_assets/rectangle34634-0e2b-200h.png"
          alt="Rectangle34634"
          class="agregar-cristal-rectangle3"
        />
        <img
          src="/playground_assets/rectangle44635-of8m-200h.png"
          alt="Rectangle44635"
          class="agregar-cristal-rectangle4"
        />
        <img
          src="/playground_assets/rectangle54636-0166-200h.png"
          alt="Rectangle54636"
          class="agregar-cristal-rectangle5"
        />
        <img
          src="/playground_assets/rectangle64637-gxb0j-200h.png"
          alt="Rectangle64637"
          class="agregar-cristal-rectangle6"
        />
        <img
          src="/playground_assets/rectangle74638-770y-200h.png"
          alt="Rectangle74638"
          class="agregar-cristal-rectangle7"
        />
        <img
          src="/playground_assets/rectangle84639-qbwc-200h.png"
          alt="Rectangle84639"
          class="agregar-cristal-rectangle8"
        />
        <img
          src="/playground_assets/rectangle104641-8t6-200h.png"
          alt="Rectangle104641"
          class="agregar-cristal-rectangle10"
        />
        <img
          src="/playground_assets/rectangle124643-omhj-200h.png"
          alt="Rectangle124643"
          class="agregar-cristal-rectangle12"
        />
        <img
          src="/playground_assets/rectangle144645-0fyi-200h.png"
          alt="Rectangle144645"
          class="agregar-cristal-rectangle14"
        />
        <img
          src="/playground_assets/rectangle164648-6rqn-200h.png"
          alt="Rectangle164648"
          class="agregar-cristal-rectangle16"
        />
        <img
          src="/playground_assets/rectangle184650-stjg-200h.png"
          alt="Rectangle184650"
          class="agregar-cristal-rectangle18"
        />
        <img
          src="/playground_assets/rectangle204652-91jy-200h.png"
          alt="Rectangle204652"
          class="agregar-cristal-rectangle20"
        />
        <span class="agregar-cristal-text10"><span>Esfera</span></span>
        <span class="agregar-cristal-text12"><span>Cilindro</span></span>
        <span class="agregar-cristal-text14"><span>Eje</span></span>
        <span class="agregar-cristal-text16"><span>DP</span></span>
        <span class="agregar-cristal-text18"><span>CR o MIN</span></span>
        <span class="agregar-cristal-text20"><span>FOTO o AR</span></span>
        <span class="agregar-cristal-text22"><span>OD</span></span>
        <input
          class="agregar-cristal-text24"
          type="number"
          placeholder="Ingrese"
        />
        <input
          class="agregar-cristal-text26"
          type="number"
          placeholder="Ingrese"
        />
        <input
          class="agregar-cristal-text28"
          type="number"
          placeholder="Ingrese"
        />
        <input
          class="agregar-cristal-text30"
          type="number"
          placeholder="Ingrese"
        />
        <input
          class="agregar-cristal-text32"
          type="number"
          placeholder="Ingrese"
        />
        <input
          class="agregar-cristal-text34"
          type="number"
          placeholder="Ingrese"
        />
      </div>
      <nuxt-link to="/InventarioCristales">
        <div class="agregar-cristal-cancelar">
          <span class="agregar-cristal-text36"><span>Cancelar</span></span>
        </div>
      </nuxt-link>
      <div class="agregar-cristal-ingresar">
        <span class="agregar-cristal-text38"><span>Ingresar</span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgregarCristal',
  head: {
    title: 'exported project',
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
  left: 20px;
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
.agregar-cristal-rectangle23 {
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
.agregar-cristal-rectangle24 {
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
.agregar-cristal-rectangle25 {
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
  width: 190px;
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
  left: 20px;
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
.agregar-cristal-rectangle2 {
  top: 0px;
  left: 189px;
  width: 255px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle22 {
  top: 0px;
  left: 0px;
  width: 190px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px 0 0;
}
.agregar-cristal-rectangle3 {
  top: 0px;
  left: 443px;
  width: 255px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle4 {
  top: 0px;
  left: 697px;
  width: 255px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle5 {
  top: 0px;
  left: 951px;
  width: 255px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle6 {
  top: 0px;
  left: 1205px;
  width: 255px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle7 {
  top: 0px;
  left: 1458px;
  width: 222px;
  height: 59px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 15px 0 0;
}
.agregar-cristal-rectangle8 {
  top: 58px;
  left: 0px;
  width: 190px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(17, 16, 29, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 0 0 15px;
}
.agregar-cristal-rectangle10 {
  top: 58px;
  left: 189px;
  width: 255px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle12 {
  top: 58px;
  left: 443px;
  width: 255px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle14 {
  top: 58px;
  left: 697px;
  width: 255px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle16 {
  top: 58px;
  left: 951px;
  width: 255px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle18 {
  top: 58px;
  left: 1205px;
  width: 255px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
}
.agregar-cristal-rectangle20 {
  top: 58px;
  left: 1458px;
  width: 222px;
  height: 78px;
  position: absolute;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0 0 15px;
}
.agregar-cristal-text10 {
  top: 1px;
  left: 190px;
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
.agregar-cristal-text12 {
  top: 1px;
  left: 444px;
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
.agregar-cristal-text14 {
  top: 1px;
  left: 698px;
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
.agregar-cristal-text16 {
  top: 1px;
  left: 952px;
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
.agregar-cristal-text18 {
  top: 1px;
  left: 1206px;
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
.agregar-cristal-text20 {
  top: 1px;
  left: 1459px;
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
.agregar-cristal-text22 {
  top: 59px;
  left: 1px;
  color: rgba(0, 0, 0, 1);
  width: 188px;
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
.agregar-cristal-text24 {
  top: 59px;
  left: 190px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
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
.agregar-cristal-text26 {
  top: 59px;
  left: 444px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
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
.agregar-cristal-text28 {
  top: 59px;
  left: 698px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
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
.agregar-cristal-text30 {
  top: 59px;
  left: 952px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
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
.agregar-cristal-text32 {
  top: 59px;
  left: 1206px;
  color: rgba(0, 0, 0, 1);
  width: 253px;
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
.agregar-cristal-text34 {
  top: 59px;
  left: 1459px;
  color: rgba(0, 0, 0, 1);
  width: 220px;
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
  background-color: var(--dl-color-default-defaultstroke);
}
.agregar-cristal-text36 {
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
.agregar-cristal-text38 {
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
