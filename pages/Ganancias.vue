<template>
  <div>
    <sidebar-menu />
    <div class="contenedor-pagina">
      <h1 class="titulo">Prueba Graficos</h1>
      <div class="chart-div">
        <LineChart
          :chartData="chartData"
          :options="chartOptions"
          class="line-chart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sidebarMenu from '../components/sidebar-menu.vue'
import authHeader from '../services/auth-header'
export default {
  components: { sidebarMenu },
  middleware: ['authenticated'],
  data: function () {
    return {
      chartData: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
          {
            label: 'Numbers',
            borderColor: '#ea05f2',
            borderWidth: 4,
            data: [100, 150, 300, 200],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
      },
      listadoOrdenes: [],
    }
  },
  methods: {
    getData: async function () {
      try {
        let response = await this.$axios.get('/orden', {
          headers: authHeader(),
        })

        this.listadoOrdenes = response.data
      } catch (error) {
        console.log('Error al obtener datos ordenes', error)
      }
    },
  },
  created: function () {
    this.getData()
  },
}
</script>

<style>
.titulo {
  color: tomato;
}
.line-chart {
  width: 60vw;
  height: 50vh;
}
</style>
