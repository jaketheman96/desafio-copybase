import { defineStore } from "pinia"

export const usePokemonsStore = defineStore({
  id: 'PokemonsStore',
  state: () => ({ allPokemons: [] }),
  getters: {},
  actions: {

  },
})
