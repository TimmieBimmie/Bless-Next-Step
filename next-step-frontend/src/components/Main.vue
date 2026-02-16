<script setup lang="ts">

import {onMounted} from "vue";
import {gsap} from "gsap";

onMounted(() => {
  gsap.to(".grid", {
      width: "100%",
      ease: 'power3',
      duration: 0.6,
      scrubber: true
  })
})

</script>

<template>
  <div class="w-[96%] grid h-64 ms-auto rounded-xl aspect-square" style="background: #eb3705;
background: linear-gradient(90deg, rgba(235, 55, 5, 1) 6%, rgba(255, 131, 97, 1) 79%, rgba(255, 162, 122, 1) 100%);">

  </div>

</template>

<style scoped>

</style>