<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Criar novo participante</h1>
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
            <input type="text" class="form-control" id="name" placeholder="Bink gostosão" />
          </div>

          <div class="mb-2">
            <label for="img" class="form-label">Imagem</label>
            <input type="file" class="form-control" id="img" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            id="close-player-modal-btn"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
          <button @click="handleCreatePlayer" type="button" class="btn btn-primary">Criar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../../stores/player'

const { players, initializeOrUpdatePlayers } = usePlayerStore()

function closeModal() {
  const modalCloseButton = document.getElementById('close-player-modal-btn') as HTMLElement
  modalCloseButton?.click()
}

function handleCreatePlayer() {
  const imageInput = document.getElementById('img') as HTMLInputElement
  const nameInput = document.getElementById('name') as HTMLInputElement
  const file = imageInput.files && imageInput.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.readAsDataURL(file)

  reader.onload = () => {
    const url = reader.result as string

    const storedPlayers = localStorage.getItem('players')
    const playersJson = storedPlayers ? JSON.parse(storedPlayers) : []
    const newPlayer = { id: players.length + 1, name: nameInput.value, img: url, handsUp: false }
    playersJson.push(newPlayer)
    localStorage.setItem('players', JSON.stringify(playersJson))
    initializeOrUpdatePlayers()
    closeModal()
  }
}
</script>
