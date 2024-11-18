import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IAnnotation } from '@/types/types'

export const useAnnotationStore = defineStore('annotation', () => {
  const annotations = reactive<IAnnotation[]>([])

  function initializeOrUpdateAnnotations() {
    const annotationsData = localStorage.getItem('annotations')
    if (annotationsData) {
      const annotationsDataJson = JSON.parse(annotationsData)
      annotations.splice(0, annotations.length, ...annotationsDataJson)
    }
  }

  console.log(annotations)

  return { annotations, initializeOrUpdateAnnotations }
})
