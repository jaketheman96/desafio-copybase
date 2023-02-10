import { defineStore } from "pinia"
import fetchPokemonByName from "@/utils/fetchPokemon";

export const usePokemonStore = defineStore({
  id: 'PokemonStore',
  state: () => ({
    pokemonDetails: null,
    pokemonSpecie: null,
    pokemonEvolution: null,
    firstPokemonEvolved: null,
    secondPokemonEvolved: null,
    error: '',
  }),
  getters: {
    getEvolutionChainNames() {
      if (this.pokemonEvolution) {
        const { chain } = this.pokemonEvolution;
        const { name } = this.pokemonDetails
        return [
          chain.species.name !== name && chain.species.name,
          chain.evolves_to[0].species.name !== name && chain.evolves_to[0].species.name,
          chain.evolves_to[0].evolves_to[0].species.name !== name
          && chain.evolves_to[0].evolves_to[0].species.name,
        ]
      }
    },
  },
  actions: {
    async getPokemonDetails(name) {
      try {
        const pokemonDetails = await fetchPokemonByName(name)
        return this.pokemonDetails = pokemonDetails;
      } catch (error) {
        return this.error = error
      }
    },

    async getPokemonSpecies() {
      await fetch(this.pokemonDetails.species.url)
        .then((response) => response.json())
        .then((data) => this.pokemonSpecie = data)
        .catch((error) => this.error = error)
    },

    async getPokemonEvolution() {
      await fetch(this.pokemonSpecie.evolution_chain.url)
        .then((response) => response.json())
        .then((data) => this.pokemonEvolution = data)
        .catch((error) => this.error = error)
    },

    async getPokemonsEvolvedInfos() {
      if (this.pokemonEvolution && this.pokemonEvolution.chain.evolves_to !== []) {
        const evolutionChain = this.getEvolutionChainNames
          .filter((pokemon) => pokemon !== false)
        const firstPokemon = await fetchPokemonByName(evolutionChain[0])
        const secondPokemon = await fetchPokemonByName(evolutionChain[1])
        this.firstPokemonEvolved = firstPokemon
        return this.secondPokemonEvolved = secondPokemon
      }
    }
  },
})
