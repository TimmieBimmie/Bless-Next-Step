<script setup lang="ts">

import Hero from "@/components/Hero.vue";
import Main from "@/components/Main.vue";
import CTA from "@/components/CTA.vue";
</script>

<template>
    <Hero></Hero>
  <div class="w-full h-full flex flex-col px-6 max-w-[1350px] mx-auto">
    <Main></Main>
  </div>
  <CTA></CTA>
</template>

<style scoped>

</style>