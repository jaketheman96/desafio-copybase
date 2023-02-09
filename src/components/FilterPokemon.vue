<template>
  <div>
    <form v-on:submit="handleSubmit">
      <p>Find your pokemon!</p>
      <input v-model="pokemonName" placeholder="Ex: Pikachu" />
      <button type="submit" v-on:click="handleSubmit">Find</button>
      <p v-if="loading">Loading...</p>
      <p v-if="error">Not Found!</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '@/store/pokemonStore'
import { storeToRefs } from 'pinia'

const { error, loading } = storeToRefs(usePokemonStore())
const { getPokemon } = usePokemonStore()
const pokemonName = ref('')

async function handleSubmit(event) {
  event.preventDefault()
  getPokemon(pokemonName.value.toLowerCase())
}

</script>