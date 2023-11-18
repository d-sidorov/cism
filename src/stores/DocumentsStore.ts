import { defineStore } from 'pinia'
import type { IDocument } from '@models/index'

import { getDocuments as fetchGetDocuments } from '@api/documents'
import { useUIStore } from './UIStore'

export const useDocumentsStore = defineStore('documents', {
  state: () => ({
    documents: [] as IDocument[],
    activeDocument: null as IDocument | null,
    isDocumentsLoading: false,
    documentsLoadingError: null as null | Error
  }),

  actions: {
    async getDocuments(search: string | null) {
      const UIStore = useUIStore()
      if (this.activeDocument) this.setActiveDocument(null)

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
    },

    setActiveDocument(document: IDocument | null) {
      this.activeDocument = document
    },

    deleteDocument(id: number) {
      const index = this.documents.findIndex((document) => document.id === id)
      if (index !== -1) this.documents.splice(index, 1)

      if (id === this.activeDocument?.id) this.setActiveDocument(null)
    }
  }
})
