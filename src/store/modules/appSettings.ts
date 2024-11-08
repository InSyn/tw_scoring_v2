import { defineStore } from 'pinia';

interface IAppSettings {
  language: string;
}

export const useAppSettingsStore = defineStore('appSettings', {
  state: (): IAppSettings => ({
    language: 'ru',
  }),
  getters: {
    getLanguage(state): string {
      return state.language;
    },
  },
  actions: {
    setLanguage(language: string) {
      this.language = language;
    },
  },
});
