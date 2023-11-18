import { defineStore } from 'pinia'
import type { IDocument } from '@models/index'

import { getDocuments as fetchGetDocuments } from '@api/documents'
import { useUIStore } from './UIStore'

export const useDocumentsStore = defineStore('documents', {
  state: () => ({
    documents: [] as IDocument[],
    isDocumentsLoading: false,
    documentsLoadingError: null as null | Error
  }),

  actions: {
    async getDocuments(search: string | null) {
      const UIStore = useUIStore()
      try {
        this.isDocumentsLoading = true

        const result = await fetchGetDocuments(search)
        this.documents.splice(0, this.documents.length, ...result)
      } catch (err) {
        this.documentsLoadingError = new Error(err as string)
        UIStore.showError(err as string)
      } finally {
        this.isDocumentsLoading = false
      }
    }
  }
})
