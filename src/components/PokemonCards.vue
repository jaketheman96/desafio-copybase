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
    <div v-if="firstPokemonEvolved">
      <router-link :to="{ name: 'pokemon-details', params: { name: firstPokemonEvolved.name } }">
        <div>
          <p>
            {{ capitalizeFirstLetter(firstPokemonEvolved.name) }}
          </p>
          <img v-bind:src="firstPokemonEvolved.sprites.front_default" />
        </div>
      </router-link>
    </div>
    <div v-if="secondPokemonEvolved">
      <router-link :to="{ name: 'pokemon-details', params: { name: secondPokemonEvolved.name } }">
        <div>
          <p>
            {{ capitalizeFirstLetter(secondPokemonEvolved.name) }}
          </p>
          <img v-bind:src="secondPokemonEvolved.sprites.front_default" />
        </div>
      </router-link>
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