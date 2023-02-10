<template>
  <div v-if="pokemonDetails && pokemonSpecie && pokemonEvolution">
    <p>
      {{
        pokemonDetails.name
          .charAt(0)
          .toUpperCase() + pokemonDetails.name.slice(1)
      }}
    </p>
    <img v-bind:src="pokemonDetails.sprites.front_default" />
  </div>
</template>

<script setup>
import { usePokemonStore } from '@/store/pokemonStore'
import { storeToRefs } from 'pinia'

const {
  pokemonDetails,
  pokemonSpecie,
  pokemonEvolution,
} = storeToRefs(usePokemonStore())

</script>