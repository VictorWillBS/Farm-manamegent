<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import FarmChart from '~/components/dashboard/FarmChart.vue'
import AreaChart from '~/components/dashboard/AreaChart.vue'
import CropChart from '~/components/dashboard/CropChart.vue'

const props = defineProps({
  data: Object,
})
console.log(props)
</script>

<template>
  <Head title="Dashboard" />
  <div
    class="grow text-xl p-4 bg-gradient-to-b from-blue-950 to-blue-900 flex justify-center items-center bg-blue-900 text-white"
  >
    DASHBOARD
  </div>
  <div class="flex flex-col gap-10">
    <div class="flex gap-8 px-10 p-4">
      <div class="text-xl font-semibold bg-gray-100 rounded-lg shadow-lg p-8">
        Numero de Fazendas Cadastradas: <span class="font-bold">{{ data?.total_farms }}</span>
      </div>
      <div class="text-xl font-semibold bg-gray-100 rounded-lg shadow-lg p-8">
        Total de Hectares Registrados : <span class="font-bold">{{ data?.total_area }} ha</span>
      </div>
    </div>
    <div class="flex justify-between w-full px-10">
      <div class="w-80 flex flex-col justify-center">
        <div class="font-bold text-center">Distribuição de Fazenda por Estado</div>
        <FarmChart :data="data?.analysis.farms_per_states" />
      </div>
      <div class="w-80 flex flex-col justify-center">
        <div class="font-bold text-center">Distribuição de Produto por Cultura plantada</div>
        <CropChart :data="data?.analysis.product_per_crop" />
      </div>
      <div class="w-80 flex flex-col justify-center">
        <div class="font-bold text-center">Distribuição por Uso do Solo</div>
        <AreaChart :data="data?.analysis.farm_usage" />
      </div>
    </div>
  </div>
</template>
