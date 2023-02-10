<template>
  <div v-if="pokemonEvolution">
    <div class="pokemon-card">
      <p>
        {{ capitalizeFirstLetter(pokemonDetails.name) }}
      </p>
      <img v-bind:src="pokemonDetails.sprites.front_default" />
    </div>
    <div v-if="firstPokemonEvolved">
      <p>
        {{ capitalizeFirstLetter(firstPokemonEvolved.name) }}
      </p>
      <img v-bind:src="firstPokemonEvolved.sprites.front_default" />
    </div>
    <div v-if="secondPokemonEvolved">
      <p>
        {{ capitalizeFirstLetter(secondPokemonEvolved.name) }}
      </p>
      <img v-bind:src="secondPokemonEvolved.sprites.front_default" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@/store/pokemonStore';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'

const pokemonStore = usePokemonStore()

const {
  pokemonDetails,
  pokemonEvolution,
  firstPokemonEvolved,
  secondPokemonEvolved,
} = storeToRefs(pokemonStore)

</script>