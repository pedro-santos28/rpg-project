<template>
  <div class="player">
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="section-title">Personagens</h1>
        </div>
      </div>
      <div class="row g-3">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="character in characters"
          :key="character.id"
        >
          <div class="card-container">
            <CharacterCard :character="character" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '../stores/character'
import CharacterCard from '@/components/character/CharacterCard.vue'

const { characters, initializeOrUpdateCharacters } = useCharacterStore()

initializeOrUpdateCharacters()
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}

.card-container:hover {
  transform: scale(1.05);
}

@media (max-width: 576px) {
  .card-container {
    max-width: 100%;
    margin-bottom: 20px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .card-container {
    max-width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .card-container {
    max-width: 80%;
  }
}

@media (min-width: 992px) {
  .card-container {
    max-width: 75%;
  }
}
</style>
