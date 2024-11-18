<template>
  <div class="card">
    <div>
      <h5 class="card-title">{{ character.name || 'Sem nome' }}</h5>
    </div>
    <div>
      <div class="card-body">
        <img :src="character.img" alt="character's image" class="card-img-top" />
        <p class="card-text">
          {{ character.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ICharacter } from '@/types/types'

const props = defineProps<{
  character: ICharacter
}>()

console.log(props.character)
</script>

<style lang="css" scoped>
.card {
  padding: 5px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  overflow-y: scroll;
  width: 15rem;
  margin-top: 15px;
}

.card:hover {
  transform: scale(1.03);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.card > h5 {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 0.875rem;
  color: #555;
  align-self: center;
}

.card-title {
  margin-bottom: 10px;
  align-self: center;
  text-align: center;
}
</style>
