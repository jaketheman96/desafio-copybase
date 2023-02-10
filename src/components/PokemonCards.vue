<template>
  <div v-if="pokemonEvolution">
    <router-link :to="{ name: 'pokemon-details', params: { name: pokemonDetails.name } }">
      <div class="pokemon-card">
        <p>
          {{ capitalizeFirstLetter(pokemonDetails.name) }}
        </p>
        <img v-bind:src="pokemonDetails.sprites.front_default" />
      </div>
    </router-link>
    <router-link :to="{ name: 'pokemon-details', params: { name: firstPokemonEvolved.name } }">
      <div v-if="firstPokemonEvolved">
        <p>
          {{ capitalizeFirstLetter(firstPokemonEvolved.name) }}
        </p>
        <img v-bind:src="firstPokemonEvolved.sprites.front_default" />
      </div>
    </router-link>
    <router-link :to="{ name: 'pokemon-details', params: { name: secondPokemonEvolved.name } }">
      <div v-if="secondPokemonEvolved">
        <p>
          {{ capitalizeFirstLetter(secondPokemonEvolved.name) }}
        </p>
        <img v-bind:src="secondPokemonEvolved.sprites.front_default" />
      </div>
    </router-link>
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