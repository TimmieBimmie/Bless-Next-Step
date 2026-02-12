<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.animate', {
    y: 30,
    opacity: 0,
    ease: 'sine',
    duration: 0.7,
    delay: 0.4,
    stagger: 0.2
  });

  gsap.from('.description', {
    opacity: 0,
    ease: 'power4.in',
    duration: 0.7,
    delay: 1.2
  });

  gsap.from('.animate-button', {
    y: 16,
    opacity: 0,
    ease: 'power4.in',
    duration: 0.6,
    delay: 1.3
  })
})
</script>

<template>
  <section class="w-full h-[100dvh] flex flex-col justify-center" id="hero">
    <div class="flex flex-col w-full md:items-start items-center px-3 translate-y-10">
      <h1 class="md:ms-0 py-2 w-fit block">
        <span class="animate inline-block">TAKE</span> <span class="animate inline-block">YOUR</span>
        <br>
        <span class="animate inline-block">NEXT</span> <span class="animate inline-block">STEP</span>
      </h1>
      <p class="description max-w-sm text-dark opacity-90 md:text-left text-center">Lorem ipsum dolor sit amet,
        consetetur
        sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore</p>
      <button class="animate-button mt-8 text-lg my-auto flex w-fit bg-[var(--primary)] text-lite rounded-md px-4 py-2 gap-2 hover:scale-[1.01] cursor-pointer">
        <p class="font-medium">Mehr dazu</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="size-6 my-auto translate-y-[1px]">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>

h1 {
  font-size: clamp(3.3rem, 14vw, 6rem);
  line-height: 1;
  word-spacing: 4px;
  width: fit-content;
}

</style>