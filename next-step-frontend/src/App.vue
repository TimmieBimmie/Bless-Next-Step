<script setup lang="ts">

import Header from '@/components/Header.vue'
</script>

<template>
  <Header></Header>
  <main class="w-full min-h-full h-full px-5 relative flex flex-col z-[1]">
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
