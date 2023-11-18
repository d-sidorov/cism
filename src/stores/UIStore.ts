import { defineStore } from 'pinia'

export const useUIStore = defineStore('UI', {
  state: () => ({
    error: null as string | null,
    isShowError: false
  }),

  actions: {
    showError(errorMsg: string) {
      this.error = errorMsg
      this.isShowError = true
      setTimeout(() => {
        this.isShowError = false
      }, 2000)
    }
  }
})
