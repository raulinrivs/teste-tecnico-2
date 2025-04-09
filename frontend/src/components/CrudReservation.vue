<template>
    <div class="bg-white p-4 rounded-xl shadow max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4">Nova Reserva</h2>
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
  
        <div>
          <label class="block text-sm text-gray-600 mb-1">Usuário</label>
          <input
            v-model="usuario"
            type="text"
            required
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div>
          <label class="block text-sm text-gray-600 mb-1">Data</label>
          <input
            v-model="data"
            type="date"
            required
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Reservar
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    ambientes: {
      type: Array,
      required: true
    }
  })
  
  const emit = defineEmits(['reservar'])
  
  const ambienteId = ref('')
  const usuario = ref('')
  const data = ref('')
  
  function fazerReserva() {
    if (ambienteId.value && usuario.value && data.value) {
      emit('reservar', {
        id: Date.now(), // ID fictício
        ambienteId: ambienteId.value,
        usuario: usuario.value.trim(),
        data: data.value
      })
  
      // Limpar formulário
      ambienteId.value = ''
      usuario.value = ''
      data.value = ''
    }
  }
  </script>