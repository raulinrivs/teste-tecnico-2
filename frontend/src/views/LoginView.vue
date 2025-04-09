<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div class="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-gray-600 mb-1" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label class="block text-gray-600 mb-1" for="password">Senha</label>
            <input
              v-model="password"
              type="password"
              id="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  function handleLogin() {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email.value)
    console.log('Senha:', password.value)
  }
  </script>