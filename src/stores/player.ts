import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IPlayer } from '@/types/types'

export const usePlayerStore = defineStore('player', () => {
  const players = reactive<IPlayer[]>([])

  function initializeOrUpdatePlayers() {
    const playerData = localStorage.getItem('players')
    if (playerData) {
      const playerDataJson = JSON.parse(playerData)
      players.splice(0, players.length, ...playerDataJson)
    }
  }

  console.log(players)

  return { players, initializeOrUpdatePlayers }
})
