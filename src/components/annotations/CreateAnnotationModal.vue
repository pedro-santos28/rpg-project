<template>
  <div
    class="modal fade"
    id="annotationModal"
    tabindex="-1"
    aria-labelledby="annotationModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="annotationModalLabel">Criar nova anotação</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label for="player" class="form-label">Jogador</label>
            <select id="player" class="form-select" aria-label="Default select example">
              <option v-for="(player, index) in players" :key="index" :value="player.name">
                {{ player.name }}
              </option>
            </select>
          </div>

          <div class="mb-2">
            <label for="message" class="form-label">Texto</label>
            <input
              type="text"
              class="form-control"
              id="message"
              placeholder="Mensagem importante aqui"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            id="close-annotation-modal-btn"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
          <button @click="handleCreateAnnotation" type="button" class="btn btn-primary">
            Criar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../../stores/player'
import { useAnnotationStore } from '../../stores/annotation'

const { players } = usePlayerStore()
const { initializeOrUpdateAnnotations, annotations } = useAnnotationStore()

function closeModal() {
  const modalCloseButton = document.getElementById('close-annotation-modal-btn') as HTMLElement
  modalCloseButton.click()
}

function handleCreateAnnotation() {
  debugger
  const player = document.querySelector('#player') as HTMLInputElement
  const message = document.querySelector('#message') as HTMLInputElement

  const storedAnnotations = localStorage.getItem('annotations') || '[]'
  const storedAnnotationsJson = JSON.parse(storedAnnotations)
  const newAnnotation = { id: annotations.length + 1, player: player.value, message: message.value }
  storedAnnotationsJson.push(newAnnotation)
  localStorage.setItem('annotations', JSON.stringify(storedAnnotationsJson))
  initializeOrUpdateAnnotations()
  closeModal()
}
</script>
