<script setup lang="ts">
import { useAnnotationStore } from '../stores/annotation'
import { usePlayerStore } from '../stores/player'
import { DiceRollerBootstrap } from '@dice-roller/vue'

const { players, initializeOrUpdatePlayers } = usePlayerStore()
const { annotations, initializeOrUpdateAnnotations } = useAnnotationStore()

initializeOrUpdatePlayers()
initializeOrUpdateAnnotations()

const toggleHandsUp = (player: { name: string; img: string; handsUp: boolean }) => {
  const audio = new Audio('/alert.mp3')
  player.handsUp = !player.handsUp
  if (player.handsUp) {
    audio.play()
  }
}

const handleDeleteAnnotation = (annotationId: string) => {
  const storedAnnotations = localStorage.getItem('annotations') || '[]'
  const annotations = JSON.parse(storedAnnotations)

  const updatedAnnotations = annotations.filter(
    (annotation: { id: string }) => annotation.id !== annotationId,
  )

  localStorage.setItem('annotations', JSON.stringify(updatedAnnotations))
  initializeOrUpdateAnnotations()
}
</script>

<template>
  <div class="container">
    <main class="main">
      <div class="players">
        <div v-for="player in players" :key="player.name" class="player-card">
          <span
            v-if="player.handsUp"
            class="hands-up-icon badge rounded-circle"
            role="img"
            aria-label="Hands up"
          >
            <i class="bi bi-person-raised-hand"></i>
          </span>

          <img
            :src="player.img"
            class="img img-thumbnail rounded-circle"
            alt="Profile Icon"
            @click="toggleHandsUp(player)"
          />

          <p class="player-name">{{ player.name }}</p>
        </div>
      </div>

      <div class="annotations">
        <ul class="list-group list-group-vertical list-unstyled">
          <li v-for="(annotation, index) in annotations" :key="index">
            <div class="list-group-item mt-1 annotation">
              <p>
                <span class="fw-bold">{{ annotation.player }}:</span> {{ annotation.message }}
              </p>

              <i
                @click="handleDeleteAnnotation(annotation.id)"
                class="bi bi-x-circle delete-annotation-button"
              ></i>
            </div>
          </li>
        </ul>
      </div>
    </main>

    <div class="dice-container">
      <div class="dice">
        <DiceRollerBootstrap />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dice-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.dice {
  max-width: 300px;
}

.main {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  gap: 0 20px;
}

.players {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  flex-wrap: wrap;
  max-width: 70%;
  overflow-y: auto;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 2px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  width: 100%;
}

.player-card {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.player-card:hover {
  transform: scale(1.05);
}

.img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.hands-up-icon {
  position: absolute;
  top: -11px;
  right: -11px;
  background-color: #000000;
  color: white;
  font-size: 1.2rem;
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  animation: bounce 1s infinite;
}

.hands-up-icon:hover {
  transform: scale(1.1);
}

.player-name {
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}

.annotations {
  overflow-y: auto;
  max-width: 30%;
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 2px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.annotations:hover {
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 4px 18px rgba(0, 0, 0, 0.1); /* Efeito de sombra ao passar o mouse */
}

.annotation {
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-annotation-button {
  color: rgb(238, 39, 39);
  font-size: 1.3rem;
}

.delete-annotation-button:hover {
  cursor: pointer;
  color: rgb(131, 4, 4);
  font-weight: 600;
  font-size: 1.5rem;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
