<template>
  <article v-if="pokemonEvolution">
    <div class="outside-container">
      <router-link :to="{ name: 'pokemon-details', params: { name: pokemonDetails.name } }">
        <div class="pokemon-card">
          <p>
            {{ capitalizeFirstLetter(pokemonDetails.name) }}
          </p>
          <img v-bind:src="pokemonDetails.sprites.front_default" />
        </div>
      </router-link>
    </div>
    <div v-if="firstPokemonEvolved" class="outside-container">
      <router-link :to="{ name: 'pokemon-details', params: { name: firstPokemonEvolved.name } }">
        <div>
          <p>
            {{ capitalizeFirstLetter(firstPokemonEvolved.name) }}
          </p>
          <img v-bind:src="firstPokemonEvolved.sprites.front_default" />
        </div>
      </router-link>
    </div>
    <div v-if="secondPokemonEvolved" class="outside-container">
      <router-link :to="{ name: 'pokemon-details', params: { name: secondPokemonEvolved.name } }">
        <div>
          <p>
            {{ capitalizeFirstLetter(secondPokemonEvolved.name) }}
          </p>
          <img v-bind:src="secondPokemonEvolved.sprites.front_default" />
        </div>
      </router-link>
    </div>
  </article>
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

<style lang="scss" scoped>
article {
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
  flex-wrap: wrap;
  row-gap: 30px;
  margin: 50px auto 30px;

  img {
    width: 7em;
  }

  a {
    text-decoration: none;
    color: rgb(63, 31, 31);
    font-size: 18px;

    p {
      margin: 1em;
      font-weight: 700;
    }
  }

  .outside-container {
    border-radius: 10px;
    background-color: rgb(205, 162, 230);
    width: 10em;
    transition: transform 0.4s ease;
    box-shadow: 6px 6px 30px rgb(44, 44, 44);
  }

  .outside-container:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
}
</style>