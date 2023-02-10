<template>
  <article>
    <form v-on:submit="handleSubmit">
      <p>Find your pokemon!</p>
      <input v-model="pokemonName" placeholder="Ex: Pikachu" />
      <button type="submit" v-on:click="handleSubmit">Find</button>
      <p v-if="pokemonStore.error">Not Found!</p>
      <p>{{ missingInput }}</p>
    </form>
  </article>
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
  if (!pokemonName.value) return missingInput.value = 'Type a pokemon!'
  await getPokemonDetails(pokemonName.value.toLowerCase())
  await getPokemonSpecies()
  await getPokemonEvolution()
  await getPokemonsEvolvedInfos()
}

</script>

<style lang="scss" scoped>
$fontcolor: rgb(255, 242, 242);
$fontweight: 800;
$fontsize: 25px;
$heigth: 2em;
$radius: 6px;

article {
  width: 80vw;
  margin: auto;

  input {
    border-radius: $radius;
    border: 0;
    height: $heigth;
    padding: 0 10px;
  }
  
  button {
    border-radius: $radius;
    margin-left: 1em;
    border: 0;
    font-weight: $fontweight;
    color: $fontcolor;
    cursor: pointer;
    width: 5em;
    height: $heigth;
    background-color: rgb(63, 31, 31);
  }

  button:hover {
    background-color: $fontcolor;
    color: rgb(63, 31, 31);
  }

  p {
    margin: 30px 0;
    color: $fontcolor;
    font-weight: $fontweight;
    font-size: $fontsize;
  }
}
</style>