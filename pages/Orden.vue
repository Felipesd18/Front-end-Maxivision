<template>
  <div>
    <sidebar-menu />
    <div>
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Ordenes</div>
      </div>
    </div>

    <table class="tablaDatos">
      <tr>
        <td>
          <div>
            <h1>Nombre de Paciente</h1>
            <input v-model="message" placeholder="Nombre" />
          </div>
        </td>

        <td>
          <div>
            <h1>Rut</h1>
            <input v-model="message" placeholder="Rut" />
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div>
            <h1>Fono</h1>
            <input v-model="message" placeholder="Fono" />
          </div>
        </td>
        <td>
          <div>
            <h1>Fecha de Recepcion</h1>
            <input v-model="message" placeholder="Ingrese Fecha" type="date" />
          </div>
        </td>
      </tr>
    </table>

    <h1 class="titulo">Cerca</h1>

    <table class="tablaCercaLejos">
      <tr>
        <th></th>
        <th>Esfera</th>
        <th>Cilindro</th>
        <th>Eje</th>
        <th>DP</th>
        <th>CR o MIN</th>
        <th>Foto o AR</th>
      </tr>

      <tr>
        <th>OD</th>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>
      </tr>

      <tr>
        <th>OI</th>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>

        <td>
          <div>
             <input v-model="message" placeholder="Input" type="number"/>
          </div>
        </td>
      </tr>
    </table>

    <!-- Tabla ADD-->
    <table class="tablaCercaLejos">
      <tr>
        <th>ADD</th>

        <td>
          <div>
            <input v-model="message" placeholder="Input" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" />
          </div>
        </td>
      </tr>
    </table>

    <h1 class="titulo">Lejos</h1>

    <table class="tablaCercaLejos">
      <tr>
        <th></th>
        <th>Esfera</th>
        <th>Cilindro</th>
        <th>Eje</th>
        <th>DP</th>
        <th>CR o MIN</th>
        <th>Foto o AR</th>
      </tr>

      <tr>
        <th>OD</th>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>
      </tr>

      <tr>
        <th>OI</th>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" type="number" />
          </div>
        </td>
      </tr>
    </table>

    <!-- Tabla ADD-->
    <table class="tablaCercaLejos">
      <tr>
        <th>ADD</th>

        <td>
          <div>
            <input v-model="message" placeholder="Input" />
          </div>
        </td>

        <td>
          <div>
            <input v-model="message" placeholder="Input" />
          </div>
        </td>
      </tr>
    </table>

    <!-- OBSERVACIONES -->
    <table class="tablaObs">
      <tr>
        <td>
          <div>
            <h1 class="titulo"> Observaciones</h1>
            <input class="Obs" v-model="message" placeholder="Observaciones" />
          </div>
        </td>

        <td>

          <tr>
            <div >
              <h1>Total</h1>
              <input class="money" v-model="message" placeholder="Ingrese Total" />
            </div>
          </tr>

          <tr>
            <div >
              <h1>Abono</h1>
              <input class="money" v-model="message" placeholder="Ingrese Abono" />
            </div>
          </tr>

          <tr>
            <div >
              <h1>Saldo</h1>
              <input class="money" v-model="message" placeholder="Ingrese Saldo" />
            </div>
          </tr>

        </td>
        
      </tr>

      
    </table>
  </div>
</template>

<script>
export default {
  name: 'Orden',

  head: {
    title: 'exported project',
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
}
</script>

<style scoped>
.encabezado {
  height: max-content; /* para que abarque todo */
}

.titulo {
  text-align: center;
  width: 90%;
}


.tablaCercaLejos {
  border-collapse: collapse;
  width: 90%;
  padding: 25px;
  margin: 2%;
}

.tablaCercaLejos tr td {
  border: solid;
  border-color: black;
  border-width: thin;
  border-radius: 10px;
}

.tablaCercaLejos tr th {
  padding: 25px;
  border: solid;
  border-color: black;
  border-width: thin;
  border-radius: 10px;
}

.tablaCercaLejos tr td div input {
  text-align: center;
  width: 100%;
  height: 70px;
}

.tablaDatos {
  width: 100%;
}

.tablaDatos tr td div {
  padding: 20px;
}


.tablaDatos tr td div input {
  border: solid;
  border-color: gray;
  border-radius: 10px;
  border-width: thin;
  width: 600px;
  height: 35px;
}

.tablaObs {
  width: 100%;
}

.tablaObs tr td div {
  padding: 2px;
}

.tablaObs tr td div input {
  border: solid;
  border-color: gray;
  border-radius: 10px;
  border-width: thin;
  width: 600px;
}

.Obs {
  border: solid;
  border-color: gray;
  border-radius: 10px;
  border-width: thin;
  width: 600px;
  height: 150px;
  text-align: center;
}

.money{
  height: 35px;
}

</style>
