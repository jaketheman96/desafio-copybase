<template>
  <div v-if="pokemonDetailsInfos" class="pokemon-details">
    <h1>{{ capitalizeFirstLetter(pokemonDetailsInfos.name) }}</h1>
    <img v-bind:src="pokemonDetailsInfos.sprites.front_default" :alt="pokemonDetailsInfos.name" />
    <img v-bind:src="pokemonDetailsInfos.sprites.back_default" :alt="pokemonDetailsInfos.name" />
    <p>Weight: {{ pokemonDetailsInfos.weight }}</p>
    <p>Height: {{ pokemonDetailsInfos.height }}</p>
    <ul>
      <div>
      </div>
      <div>
        <span>Attributes:</span>
        <li v-for="stats in pokemonDetailsInfos.stats" v-bind:key="stats.stat.name">
          {{ capitalizeFirstLetter(stats.stat.name) }}: {{ stats.base_stat }}
        </li>
      </div>
      <div>
        <span>Abilities:</span>
        <li v-for="ability in pokemonDetailsInfos.abilities" v-bind:key="ability.ability.name">
          {{ capitalizeFirstLetter(ability.ability.name) }}: {{ ability.slot }} charges
        </li>
      </div>
      <div>
        <span>Type(s):</span>
        <li v-for="pokemonType in pokemonDetailsInfos.types" v-bind:key="pokemonType.type.name">
          {{ capitalizeFirstLetter(pokemonType.type.name) }}
        </li>
      </div>
    </ul>
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script setup>
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
</script >

<script>
import fetchPokemonByName from '@/utils/fetchPokemon';
import { useRoute } from 'vue-router';

export default {
  name: 'PokemonDetailsCard',
  data() {
    return {
      pokemonDetailsInfos: null,
    }
  },
  async mounted() {
    const route = useRoute()
    const pokemonName = route.params.name
    const pokemonInfos = await fetchPokemonByName(pokemonName)
    this.pokemonDetailsInfos = pokemonInfos
  }
}
</script>
