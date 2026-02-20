<script setup lang="ts">
import {onMounted} from "vue";
import {gsap} from "gsap";
import { scrollToElement } from "../services/scroll-service";

onMounted(() => {
  gsap.from('.animate', {
    y: 20,
    opacity: 0,
    ease: 'sine',
    duration: 0.6,
    delay: 0.3,
    stagger: 0.2
  });

  gsap.from('.description', {
    opacity: 0,
    ease: 'power4.in',
    duration: 0.7,
    delay: 1.1
  });

  gsap.from('.animate-button', {
    scale: 0.8,
    opacity: 0,
    ease: 'power4.in',
    duration: 0.6,
    delay: 1.3
  })

})
</script>

<template>
  <section class="w-full min-h-[96dvh] flex flex-col justify-center z-0 inset px-5"
           style="background-image: radial-gradient(125% 125% at 50% 90%, var(--lite) 40%, var(--primary) 100%); background-size: 100% 100%;"
           id="home">
    <div class="flex flex-col w-full md:items-start items-center px-5 translate-y-10 max-w-[1350px] mx-auto">
      <h1 class="py-2 w-fit block">
        <span class="animate inline-block">TAKE</span> <span class="animate inline-block">YOUR</span>
        <br>
        <span class="animate inline-block">NEXT</span> <span class="animate inline-block">STEP</span>
      </h1>
      <p class="description max-w-sm text-dark opacity-90 md:text-left text-center mt-3">Lorem ipsum dolor sit amet,
        consetetur
        sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore</p>
        <button @click="scrollToElement('our-vision', 'smooth')"
            class="animate-button mt-8 text-lg my-auto flex w-fit bg-[var(--secondary)] text-lite rounded-xl px-4 py-2 gap-2 hover:scale-[1.01] cursor-pointer">
          <p class="font-medium">Mehr dazu</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="size-6 my-auto translate-y-[1px]">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
        </button>
    </div>
  </section>
</template>

<style scoped>

h1 {
  position: relative;
  font-size: clamp(3.3rem, 14vw, 6rem);
  line-height: 1;
  word-spacing: 4px;
  width: fit-content;
}


</style>