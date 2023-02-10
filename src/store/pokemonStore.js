import { defineStore } from "pinia"

export const usePokemonStore = defineStore({
  id: 'PokemonStore',
  state: () => ({
    pokemonDetails: null,
    pokemonSpecie: null,
    pokemonEvolution: null,
    error: '',
  }),
  getters: {},
  actions: {

    async getPokemonDetails(name) {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => this.pokemonDetails = data)
        .catch((error) => this.error = error.message)
    },

    async getPokemonSpecies() {
      await fetch(this.pokemonDetails.species.url)
        .then((response) => response.json())
        .then((data) => this.pokemonSpecie = data)
        .catch((error) => this.error = error.message)
    },

    async getPokemonEvolution() {
      await fetch(this.pokemonSpecie.evolution_chain.url)
        .then((response) => response.json())
        .then((data) => this.pokemonEvolution = data)
        .catch((error) => this.error = error.message)
    }
  },
})
