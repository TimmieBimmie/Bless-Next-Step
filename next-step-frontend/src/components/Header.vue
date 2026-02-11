<script setup lang="ts">

import { ref, useTemplateRef, watch } from 'vue'
import { gsap } from 'gsap'

let navOpen = ref(true)
let navWrapper = useTemplateRef('navWrapper')

function navAction() {
  navOpen.value = !navOpen.value
}

watch(navOpen, (open) => {
  navWrapper.value.setAttribute('inert', open)
  if (open) {
    gsap.to(navWrapper.value, {
      width: '100%',
      height: '100%',
      duration: 0.7,
      delay: 0.2,
      ease: 'power3.out'
    })
  } else {
    gsap.to(navWrapper.value, {
      width: '100px',
      height: '48px',
      duration: 0.7,
      ease: 'power3.inOut'
    })
  }
})

</script>

<template>
  <button @click="navAction"
          class="absolute top-5 left-5 z-20 w-[100px] h-12 bg-white rounded-md familjen-grotesk font-bold cursor-pointer text-sm"
          :class="{'delay-500 drop-shadow-xl': !navOpen, 'delay-0 drop-shadow-none': navOpen}">
    <span class="flex flex-col overflow-hidden h-5 gap-2">
      <span class="transition duration-400 delay-150" :class="{'-translate-y-10': navOpen, 'translate-y-0': !navOpen}">MENÜ</span>
      <span class="transition duration-400 delay-150" :class="{'-translate-y-7': navOpen, 'translate-y-0': !navOpen}">SCHLIESSEN</span>
    </span>
  </button>

  <div class="absolute top-0 left-0 w-full h-full backdrop-blur-xl p-5 ease-in duration-200" inert
       :class="{'bg-active' : navOpen, 'bg-no-active': !navOpen}">
    <nav class="transition max-w-[450px] max-h-[750px] ease-in-out duration-700 w-full h-full origin-top-left bg-white rounded-md" inert
         ref="navWrapper">
    </nav>
  </div>

</template>

<style scoped>

.bg-no-active {
  background-color: transparent;
}

.bg-active {
  background-color: rgba(16, 16, 14, 0.2);
}


</style>