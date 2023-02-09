<template>
  <div class="filter-pokemon">
    <form v-on:submit="handleSubmit">
      <p>Find your pokemon!</p>
      <input v-model="pokemonName" placeholder="Ex: Pikachu" />
      <button type="submit" v-on:click="handleSubmit">Find</button>
    </form>
  </div>
</template>

<script>
export default {
  el: '.filter-pokemon',
  data() {
    return {
      pokemonName: ''
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      console.log(this.pokemonName)
    },
  }
}
</script>