<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const menuState = ref(true);

const toggleMenu = (e: KeyboardEvent): void => {
  if (e.code === 'Backquote' || e.code === 'Backquote') menuState.value = !menuState.value;

  console.log(menuState.value, e);
};

onMounted(() => {
  window.addEventListener('keyup', toggleMenu);
});
onUnmounted(() => {
  window.removeEventListener('keyup', toggleMenu);
});
</script>

<template>
  <nav class="sideBar__wrapper" :class="{ opened: menuState }">
    <div class="menu__wrapper">
      <ul class="menu__list">
        <li class="menu__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.sideBar__wrapper {
  grid-area: sidebar;
  display: grid;
  grid-template-columns: 0fr;
  transition: grid-template-columns 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &.opened {
    grid-template-columns: 1fr;
  }
  .menu__wrapper {
    overflow: hidden;
    transition: width 200ms;
  }
}
</style>
