import { defineStore } from "pinia"

export const usePokemonStore = defineStore({
  id: 'PokemonStore',
  state: () => ({
    pokemonDetails: {},
    error: '',
    loading: false
  }),
  getters: {},
  actions: {
    async getPokemon(name) {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      this.error = ''
      this.loading = true
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.pokemonDetails = data)
        .catch((error) => this.error = error.message)
        .finally(() => this.loading = false)
    }
  },
})
