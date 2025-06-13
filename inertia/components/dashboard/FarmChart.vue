<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { Chart, ArcElement, Tooltip, Legend,  PieController } from 'chart.js'
import useColorGenerator from "../../support/useColorGenerator.js"
Chart.register(ArcElement, PieController, Tooltip, Legend)

const props = defineProps({ data: Object })

let chart = null
const chartEle = ref(null)
const colorGenerator = useColorGenerator()

onMounted(init)

function getChartDataConfigs() {
  return {
    labels: props.data.map(item => item.state) ?? [],
    datasets: [
      {
        data: props.data.map(item => item.total),
        backgroundColor: props.data.map(item => colorGenerator()),
        borderWidth: 0,
      },
    ],
  }
}

function init() {
  chart = new Chart(chartEle.value, {
    type: 'pie',
    data: getChartDataConfigs(),
  })
}
</script>
<template>
  <div>
    <canvas ref="chartEle"></canvas>
  </div>
</template>
