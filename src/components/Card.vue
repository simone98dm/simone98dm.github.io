<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--card-bg);
  color: var(--card-font-color);
  padding: 2em;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 1px 3px 12px 9px var(--shadow-color);
}
</style>
