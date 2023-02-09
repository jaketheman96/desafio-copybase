<template>
  <div class="home">
    <FilterPokemon />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterPokemon from '@/components/FilterPokemon.vue'

export default {
  name: 'HomeView',
  components: {
    FilterPokemon
  }
}
</script>
