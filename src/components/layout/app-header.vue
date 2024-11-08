<script setup lang="ts">
import { computed } from 'vue';
import { useAppSettingsStore } from '../../store/modules/appSettings';

const appSettings = useAppSettingsStore();

const appLang = computed(() => appSettings.getLanguage);

const changeLang = () => {
  const currentLang = appLang.value;
  appSettings.setLanguage(currentLang === 'ru' ? 'en' : 'ru');
};
</script>

<template>
  <header>
    HEADER
    <button type="button" @click="changeLang">{{ appLang }}</button>
  </header>
</template>

<style scoped>
header {
  grid-area: header;
}
</style>
