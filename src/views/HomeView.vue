<template>
  <section class="home">
    <FilterPokemon />
    <PokemonCards />
  </section>
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

<style lang="scss">
section {
  min-height: 100vh;
  overflow: hidden;
}
</style>