<template>
  <div>
    <sidebar-menu />
    <div class="contenedor-pagina">
      <div class="encabezado">
        <div class="logo-header">
          <img src="../assets/logo-01.png" alt="logo-maxisvision" width="80" />
        </div>
        <div class="header-texto">Operativos</div>
      </div>

      <div class="contenedor-boton">
        <nuxt-link to="/IniciarOperativo">
          <label class="label-boton">Iniciar Operativo</label>
        </nuxt-link>
      </div>

      <div class="contenedor-listado">
        <label class="listado-label">Lista de Operativos</label>

        <div class="fila">
          <span class="columna">Nombre</span>
          <span class="columna">Fecha inicio</span>
          <span class="columna">Fecha Final</span>
          <span class="columna">Sucursal</span>
        </div>

        <div class="fila" v-for="(operativo, index) in operativos" :key="index">
          <span class="columna"> {{ operativo.nombre }} </span>
          <span class="columna">
            {{ operativo.fecha_inicio.split('T')[0] }}
          </span>
          <span class="columna">
            {{ operativo.fecha_final.split('T')[0] }}
          </span>
          <span v-for="(sucursal, indice) in sucursales" :key="indice">
            <span class="columna" v-if="sucursal.id == operativo.id_sucursal">
              {{ sucursal.nombre }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import sidebarMenu from '../components/sidebar-menu.vue'
import authHeader from '../services/auth-header'
export default {
  components: { sidebarMenu },
  data() {
    return {
      operativos: [],
      sucursales: [],
    }
  },
  methods: {
    getData: async function () {
      try {
        let response = await this.$axios.get('/sucursal', {
          headers: authHeader(),
        })
        this.sucursales = response.data
        response = await this.$axios.get('/operativo', {
          headers: authHeader(),
        })
        this.operativos = response.data
      } catch (error) {
        console.log('Error al obtener los datos', error)
      }
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

<style>
.contenedor-boton {
  top: 140px;
  left: 20px;
  width: 350px;
  height: 83px;
  display: flex;
  overflow: hidden;
  float: none;
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

.contenedor-listado {
  top: 270px;
  left: 20px;
  position: relative;
}

.listado-label {
  font-size: 40px;
  font-weight: 700;
  color: var(--d1-color-texts);
}

.columna {
  width: 350px;
}
</style>