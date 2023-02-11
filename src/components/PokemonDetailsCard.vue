<template>
  <article v-if="pokemonDetailsInfos" class="pokemon-details">
    <div>
      <h1>{{ capitalizeFirstLetter(pokemonDetailsInfos.name) }}</h1>
      <img v-bind:src="pokemonDetailsInfos.sprites.front_default" :alt="pokemonDetailsInfos.name" />
      <img v-bind:src="pokemonDetailsInfos.sprites.back_default" :alt="pokemonDetailsInfos.name" />
      <div class="height-weight">
        <p>Weight: {{ pokemonDetailsInfos.weight }} pounds</p>
        <p>Height: {{ pokemonDetailsInfos.height }} feet</p>
      </div>
    </div>
    <ul>
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
  </article>
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

<style lang="scss" scoped>
$fontcolor: white;
$fontweight: 800;
$backgroundcolor: rgb(135, 63, 163);
$shadow: 1px 1px 15px rgb(44, 44, 44);

article {
  width: 70%;
  margin: 0 auto;

  .height-weight {
    width: 18vw;
    background-color: $backgroundcolor;
    box-shadow: $shadow;
    margin: 0 auto;
    padding: 2px;
    border-radius: 10px;
  }

  h1 {
    color: rgb(53, 53, 53);
    font-weight: $fontweight;
    font-size: 30px;
  }

  img {
    margin: 20px 50px;
    width: 11em;
    border-radius: 10px;
    background-color: rgb(205, 162, 230);
    box-shadow: $shadow;
  }

  p {
    color: $fontcolor;
    font-weight: $fontweight;
  }

  span {
    color: $fontcolor;
    font-weight: $fontweight;
    font-size: 20px;
  }

  li {
    color: $fontcolor;
    font-weight: $fontweight;
    margin: 9px 0;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0;

    div {
      background-color: $backgroundcolor;
      box-shadow: $shadow;
      border-radius: 10px;
      padding: 20px;
      width: 10em;
    }
  }
}

@media only screen and (max-width: 800px) {
  article {
    ul {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
}

@media only screen and (max-width: 650px) {
  .height-weight p {
    font-size: 13px;
  }
}
</style>
