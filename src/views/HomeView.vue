<template>
  <div class="home">
    <FilterPokemon />
    <PokemonCards />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterPokemon from '@/components/FilterPokemon.vue'
import PokemonCards from '@/components/PokemonCards.vue'

export default {
  name: 'HomeView',
  components: {
    FilterPokemon,
    PokemonCards,
  }
}
</script>
