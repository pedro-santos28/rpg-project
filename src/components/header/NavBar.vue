<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img class="navbar-brand logo" src="../../../src//assets/dice-logo.svg" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Mesa</RouterLink>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Participante
              </button>

              <ul class="dropdown-menu">
                <li>
                  <button
                    type="button"
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Criar
                  </button>
                </li>
              </ul>
              <CreatePlayerModal />
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Anotação
              </button>

              <ul class="dropdown-menu">
                <li>
                  <button
                    type="button"
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#annotationModal"
                  >
                    Criar
                  </button>
                </li>
              </ul>
              <CreateAnnotationModal />
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Personagens
              </button>

              <ul class="dropdown-menu">
                <li>
                  <button
                    type="button"
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#characterModal"
                  >
                    Criar
                  </button>
                </li>

                <li>
                  <RouterLink class="dropdown-item" to="characters"> Listar </RouterLink>
                </li>
              </ul>
              <CreateCharacterModal />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import CreatePlayerModal from '../../components/player/CreatePlayerModal.vue'
import CreateAnnotationModal from '../annotations/CreateAnnotationModal.vue'
import CreateCharacterModal from '../character/CreateCharacterModal.vue'
</script>

<style lang="css" scoped>
.logo {
  width: 50px;
}

.navbar {
  background-color: rgb(66, 154, 212) !important;
  font-weight: 500;
}
</style>
