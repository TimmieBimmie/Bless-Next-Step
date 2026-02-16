<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

let videoPlaying = ref(false)

onMounted(() => {
  gsap.to(['#verseWrapper', 'img'], {
    width: '100%',
    filter: 'blur(0px)',
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: '#verseWrapper',
      start: 'top 87%',
      end: 'top 28%',
      scrub: true
    }
  })
  gsap.from('.animate-main', {
    y: 35,
    opacity: 0,
    ease: 'power3.in',
    duration: 0.4,
    scrollTrigger: {
      trigger: '.animate-main',
      start: 'top 97%'
    }
  })

  gsap.from('.animate-short-delay', {
    y: 35,
    opacity: 0,
    ease: 'power3.in',
    duration: 0.4,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.animate-main',
      start: 'top 97%'
    }
  })
})

function videoAction() {
  console.log(videoPlaying);
  videoPlaying.value = !videoPlaying.value;
  if(videoPlaying.value) {
    document.getElementById('video').play();
  } else {
    document.getElementById('video').pause();
  }
}

</script>

<template>
  <div class="flex flex-col justify-center w-full gap-20">
    <div class="min-w-[85%] mx-auto h-64 ms-auto rounded-xl aspect-square flex justify-center items-center"
         id="verseWrapper"
         style="background: #649BE7; background: linear-gradient(209deg, rgba(100, 155, 231, 1) 0%, rgba(181, 213, 255, 1) 73%, rgba(228, 231, 237, 1) 100%);">
      <img src="/Verse-2.png" class="blur-[5px] w-full h-full object-contain select-none">
    </div>
    <div class="w-full flex flex-col gap-5">
      <h1 class="animate-main">UNSERE VISION</h1>
      <div class="relative flex justify-center animate-short-delay">
        <video class="rounded-xl" id="video" @click="videoAction()">
          <source src="/big-buck-bunny-trailer.mp4">
        </video>
        <button class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-primary cursor-pointer transition ease-in duration-300"
                :class="{'hidden': videoPlaying}" @click="videoAction()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-7 fill-[var(--dark)]">
            <path fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>

h1 {
  position: relative;
  font-size: 2.3rem;
  line-height: 1;
  word-spacing: 4px;
  width: fit-content;
}

</style>