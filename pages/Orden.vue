<template>
  <div>
    <h1>Orden de paciente</h1>
    <sidebar-menu />
    <form> 
      <div>
        <p>Rut:</p>
        <input class = "formulario" type = "text" v-model="message" placeholder="123456789-0">
      </div>
      <div>
        <p>Nombre:</p>
        <input class = "formulario" type = "text" v-model="message" placeholder="Escriba el nombre">
      </div>
      <div>
        <p>Edad:</p>
        <input class = "formulario" type = "numeric" v-model="message" placeholder="Escriba la edad del paciente">
      </div>
      <div>
        <p>Total:</p>
        <input class = "formulario" type = "numeric" v-model="message" placeholder="Ingrese el monto total">
      </div>
      <div>
        <p>Abono:</p>
        <input class = "formulario" type = "numeric" v-model="message" placeholder="Ingrese el abono">
      </div>
      <div>
        <p>Saldo:</p>
        <input class = "formulario" type = "numeric" v-model="message" placeholder="Ingrese el saldo">
      </div>
      <div>
        <p>Observaciones:</p>
        <textarea class = "formulario" type = "text" v-model="message" placeholder="Escriba sus observaciones"></textarea>
      </div>
      <div>
        <p>Telefono:</p>
        <input class = "formulario" type = "numeric" v-model="message" placeholder="Ingrese el teléfono">
      </div>
      <div>
        <p>Fecha de recepción:</p>
        <input  type = "date" v-model="message" placeholder="Ingrese la fecha de recepción">
      </div>
      <div>
        <p>Fecha de entrega:</p>
        <input  type = "date" v-model="message" placeholder="Ingrese la fecha de entrega">
      </div>
      <div>
        <p>Profesional encarargado:</p>
        <input class = "formulario" v-model="message" placeholder="Ingrese el nombre del profesional">
      </div>
      
      
    </form>
  </div>
</template>

<script>
import sidebarMenu from '../components/sidebar-menu.vue'
export default {
  components: { sidebarMenu },
  data() {
    return {}
  },
}
</script>

<style>
  p {
display: inline-block;
align-items: right;
height:30px;
}

.formulario{
  width: 500px;
  border: 1px solid black;
}

</style>