<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h1 class="text-3xl font-bold text-center mb-8">Sistema de Reservas</h1>

    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:h-[25rem]">
      <!-- Lista de Ambientes -->
      <div class="w-full lg:w-1/3 bg-white rounded-xl shadow p-4">
        <ul class="space-y-2 h-full overflow-y-auto">
          <li
            v-for="amb in ambientes"
            :key="amb.id"
            @click="selecionarAmbiente(amb)"
            class="cursor-pointer px-4 py-2 rounded-lg border hover:bg-blue-100"
            :class="{ 'bg-blue-200': ambienteSelecionado?.id === amb.id }"
          >
            {{ amb.nome }}
          </li>
        </ul>
      </div>

      <!-- Lista de Reservas -->
      <div class="w-full lg:w-2/3 bg-white rounded-xl shadow p-4 flex flex-col">
        <div v-if="ambienteSelecionado && reservas.length > 0" class="space-y-2 overflow-y-auto h-full">
          <div
            v-for="reserva in reservas"
            :key="reserva.id"
            class="border rounded-lg p-3 bg-gray-50"
          >
            <p class="font-medium">Usuário: {{ reserva.usuario }}</p>
            <p class="text-sm text-gray-600">Data: {{ reserva.data }}</p>
          </div>
        </div>
        <div v-else class="text-gray-500">Nenhuma reserva encontrada.</div>
      </div>
    </div>

    <!-- Área de ações -->
    <div class="w-full flex flex-col lg:flex-row bg-white rounded-xl shadow p-4 gap-4 mt-4 max-w-6xl mx-auto">
      <div class="w-full lg:w-1/3">
        <button @click="newReservation = !newReservation"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full cursor-pointer">
          Adicionar Reserva
        </button>
        <CrudReservation
          v-if="newReservation"
          :ambientes="ambientes"
          @reservar="reservas.push($event)"
          class="mt-4 border w-full mx-auto"
        />
      </div>
      <div class="w-full lg:w-1/3">
        <button @click="newPysicalSpace = !newPysicalSpace"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full cursor-pointer">
          Adicionar Ambiente
        </button>
        <CrudPhysicalSpace
          v-if="newPysicalSpace"
          @adicionar="ambientes.push($event)"
          class="mt-4 border w-full mx-auto"
        />
      </div>
      <div class="w-full lg:w-1/3">
        <button @click="newCheckIn = !newCheckIn"
          class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition w-full cursor-pointer">
          Realizar Check-In
        </button>
        <CrudCheckIn
          v-if="newCheckIn"
          :ambientes="ambientes"
          class="mt-4 border w-full mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CrudPhysicalSpace from '@/components/CrudPhysicalSpace.vue'
import CrudReservation from '@/components/CrudReservation.vue'
import CrudCheckIn from '@/components/CrudCheckIn.vue'

const newPysicalSpace = ref(false)
const newReservation = ref(false)
const newCheckIn = ref(false)

const ambientes = ref([
  { id: 1, nome: 'Sala de Reunião' },
  { id: 2, nome: 'Auditório' },
  { id: 3, nome: 'Laboratório' },
])

const reservasPorAmbiente = {
  1: [
    { id: 1, usuario: 'João', data: '2025-04-10' },
    { id: 2, usuario: 'Maria', data: '2025-04-12' },
  ],
  2: [{ id: 3, usuario: 'Carlos', data: '2025-04-11' }],
  3: []
}

const ambienteSelecionado = ref(null)
const reservas = ref([])

function selecionarAmbiente(ambiente) {
  ambienteSelecionado.value = ambiente
  reservas.value = reservasPorAmbiente[ambiente.id] || []
}
</script>