<script setup lang="ts">

defineProps({
  data: JSON
})

</script>

<template>
  <div class="w-auto rounded-xl flex gap-4 p-3 max-w-[750px] justify-self-center animate-main" style="background-color: rgba(255, 132, 38, 0.4)">
    <div class="h-full aspect-square bg-dark rounded-xl p-2">
      <img :src="data.icon" class="h-14 w-14 object-contain"
           alt="Icon"/>
    </div>
    <div class="flex flex-col flex-1">
      <h1 class="text-md tracking-wider">{{ data.title }}</h1>
      <p class="opacity-75">{{ data.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>