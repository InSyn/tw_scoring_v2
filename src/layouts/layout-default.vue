<script setup lang="ts">
import AppHeader from '../components/layout/app-header.vue';
import AppFooter from '../components/layout/app-footer.vue';
import SideBar from '../components/layout/side-bar.vue';
</script>

<template>
  <div class="appLayout__wrapper">
    <app-header></app-header>
    <side-bar></side-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<style scoped>
.appLayout__wrapper {
  height: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
}
</style>
