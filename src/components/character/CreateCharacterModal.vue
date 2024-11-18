<template>
  <div
    class="modal fade"
    id="characterModal"
    tabindex="-1"
    aria-labelledby="characterModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="characterModalLabel">Criar novo personagem</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label for="name" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              id="character_name"
              placeholder="Aurelius Dammel"
            />
          </div>

          <div class="mb-2">
            <label for="character_img" class="form-label">Imagem</label>
            <input type="file" class="form-control" name="character_img" id="character_img" />
          </div>

          <div class="mb-2">
            <label for="description" class="form-label">Descrição</label>
            <textarea
              class="form-control"
              name="description"
              id="description"
              rows="5"
              placeholder="Escreva aqui..."
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            id="close-character-modal-btn"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
          <button @click="handleCreateCharacter" type="button" class="btn btn-primary">
            Criar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '../../stores/character'

const { characters, initializeOrUpdateCharacters } = useCharacterStore()

function closeModal() {
  const modalCloseButton = document.getElementById('close-character-modal-btn') as HTMLElement
  modalCloseButton?.click()
}

function handleCreateCharacter() {
  debugger
  const imageEl = document.querySelector('#character_img') as HTMLInputElement
  const nameEl = document.querySelector('#character_name') as HTMLInputElement
  const descriptionEl = document.querySelector('#description') as HTMLInputElement

  const file = imageEl.files && imageEl.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.readAsDataURL(file)

  reader.onload = () => {
    const url = reader.result as string

    const storedCharacters = localStorage.getItem('characters')
    const charactersJson = storedCharacters ? JSON.parse(storedCharacters) : []
    const newCharacter = {
      id: characters.length + 1,
      name: nameEl.value,
      img: url,
      description: descriptionEl.value,
    }
    charactersJson.push(newCharacter)
    localStorage.setItem('characters', JSON.stringify(charactersJson))
    initializeOrUpdateCharacters()
    closeModal()
  }
}
</script>
