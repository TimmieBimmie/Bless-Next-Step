<script setup lang="ts">

import Header from '@/components/Header.vue'
</script>

<template>
  <Header></Header>
    <main class="w-full relative flex flex-col">
      <RouterView></RouterView>
    </main>
</template>

<style scoped></style>
