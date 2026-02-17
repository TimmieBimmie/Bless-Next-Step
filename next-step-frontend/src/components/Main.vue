<script setup>

import {onMounted, ref} from 'vue'
import {gsap} from 'gsap'
import Card from "@/components/Card.vue";

let blob = import.meta.env.VITE_R2_DEV_URL;
let videoPlaying = ref(false);
let steps = [{
  title: "Titel",
  description: "Eine Beschreibung über den Schritt und was das bedeutet",
  icon: "/icons/write.svg"
}, {
  title: "Titel",
  description: "Eine Beschreibung über den Schritt und was das bedeutet",
  icon: "/icons/write.svg"
}, {title: "Titel", description: "Eine Beschreibung über den Schritt und was das bedeutet", icon: "/icons/write.svg"}]

onMounted(() => {
  gsap.to(['#verseWrapper', '#heroImg'], {
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
  document.querySelectorAll(".animate-main").forEach(el => {
  gsap.from(el, {
    y: 38,
    scale: 0.98,
    opacity: 0,
    ease: 'power3.in',
    duration: 0.6,
    scrollTrigger: {
      trigger: el,
      start: 'top 94%'
    }
  })
  })

})

function videoAction() {
  console.log(videoPlaying);
  videoPlaying.value = !videoPlaying.value;
  if (videoPlaying.value) {
    document.getElementById('video').play();
  } else {
    document.getElementById('video').pause();
  }
}

</script>

<template>
  <div class="flex flex-col justify-center w-full xl:gap-44 lg:gap-32 md:gap-24 gap-24">
    <div class="min-w-[85%] mx-auto h-64 ms-auto rounded-xl aspect-square flex justify-center items-center"
         id="verseWrapper"
         style="background: #649BE7; background: linear-gradient(209deg, rgba(100, 155, 231, 1) 0%, rgba(181, 213, 255, 1) 73%, rgba(228, 231, 237, 1) 100%);">
      <img src="/hero-img.png" class="blur-[5px] w-full h-full object-contain select-none" id="heroImg">
    </div>
    <div class="w-full flex flex-col ">
      <h1 class="animate-main mb-10">UNSERE VISION</h1>
      <div class="bg-[#c6dcf8] rounded-xl flex flex-col animate-main max-w-[750px] mx-auto">
        <div class="relative flex justify-center w-full aspect-video">
          <video class="rounded-xl" id="video" @click="videoAction()">
            <source :src="`${blob}/videos/example.mp4`">
          </video>
          <button
              class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-lite cursor-pointer transition ease-in duration-300 flex items-center justify-center"
              :class="{'hidden': videoPlaying}" @click="videoAction()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 class="size-7 fill-[var(--dark)] translate-x-[1px]">
              <path fill-rule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
        <div class="w-full rounded-b-xl p-2">
          <p class="text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col ">
      <h1 class="animate-main mb-10">NEXT STEPS</h1>
      <div class="flex gap-5 flex-col md:flex-row flex-wrap w-full justify-center">
        <Card v-for="step of steps" :data="step"></Card>
      </div>
    </div>

    <div class="w-full flex flex-col">
      <h1 class="animate-main mb-10">ÜBER UNS</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-3 justify-center">
        <div class="h-20 w-full bg-gray-100 border-[1px] border-gray-400 rounded-md">
            <img src="" class="w-full h-full object-cover">
        </div>

        <div class="h-20 w-full bg-gray-100 border-[1px] border-gray-400 rounded-md">
          <img src="" class="w-full h-full object-cover">
        </div>

        <div class="h-20 w-full bg-gray-100 border-[1px] border-gray-400 rounded-md">
          <img src="" class="w-full h-full object-cover">
        </div>

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