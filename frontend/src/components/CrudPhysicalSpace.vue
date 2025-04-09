<template>
    <div class="bg-white p-4 rounded-xl shadow max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4">Cadastrar Novo Ambiente</h2>
      <form @submit.prevent="cadastrar">
        <div class="mb-4">
          <label for="nome" class="block text-sm text-gray-600 mb-1">Nome do Ambiente</label>
          <input
            v-model="nome"
            id="nome"
            type="text"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['adicionar'])
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