<template>
  <div class="bg-white p-4 rounded-xl shadow max-w-md w-full">
    <h2 class="text-xl font-semibold mb-4">Realizar Check-in</h2>
    <form @submit.prevent="fazerReserva" class="space-y-4">
      <div>
        <label class="block text-sm text-gray-600 mb-1">Ambiente</label>
        <select
          v-model="ambienteId"
          required
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>Selecione um ambiente</option>
          <option v-for="amb in ambientes" :key="amb.id" :value="amb.id">
            {{ amb.nome }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  ambientes: {
    type: Array,
    required: true
  }
})

const nome = ref('')

function cadastrar() {
  if (nome.value.trim()) {
    emit('adicionar', {
      id: Date.now(), // ID fictício
      nome: nome.value.trim()
    })
    nome.value = ''
  }
}
</script>