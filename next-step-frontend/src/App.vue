<script setup lang="ts">

import Header from '@/components/Header.vue'
import Hero from "@/components/Hero.vue";
</script>

<template>
  <Header></Header>
  <Hero></Hero>
  <main class="w-full min-h-full h-full px-5 relative pb-20 flex flex-col z-[1] max-w-[1350px]">
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
