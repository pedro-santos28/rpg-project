import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { ICharacter } from '@/types/types'

export const useCharacterStore = defineStore('character', () => {
  const characters = reactive<ICharacter[]>([])

  function initializeOrUpdateCharacters() {
    const characterData = localStorage.getItem('characters')
    if (characterData) {
      const characterDataJson = JSON.parse(characterData)
      characters.splice(0, characters.length, ...characterDataJson)
    }
  }

  console.log(characters)

  return { characters, initializeOrUpdateCharacters }
})
