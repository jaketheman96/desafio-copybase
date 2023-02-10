<template>
  <div>
    <form v-on:submit="handleSubmit">
      <p>Find your pokemon!</p>
      <input v-model="pokemonName" placeholder="Ex: Pikachu" />
      <button type="submit" v-on:click="handleSubmit">Find</button>
      <p v-if="pokemonStore.error">Not Found!</p>
      <p>{{ missingInput }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '@/store/pokemonStore'

const pokemonStore = usePokemonStore()

const {
  getPokemonDetails,
  getPokemonSpecies,
  getPokemonEvolution,
  getPokemonsEvolvedInfos,
} = pokemonStore
const pokemonName = ref('')
const missingInput = ref('')

async function handleSubmit(event) {
  event.preventDefault()
  pokemonStore.$reset()
  missingInput.value = ''
  if(!pokemonName.value) return missingInput.value = 'Type a pokemon!'
  await getPokemonDetails(pokemonName.value.toLowerCase())
  await getPokemonSpecies()
  await getPokemonEvolution()
  await getPokemonsEvolvedInfos()
}

</script>