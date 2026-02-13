<script setup>

import { ref, useTemplateRef, watch } from 'vue'
import { gsap } from 'gsap'

let navOpen = ref(false)
let navWrapper = useTemplateRef('navWrapper')
let outerNavWrapper = useTemplateRef('outerNavWrapper')

function navAction() {
  navOpen.value = !navOpen.value
}

function closeNav($event) {
  if(navOpen.value) {
    navOpen.value = false;
  }
}

watch(navOpen, (open) => {
  navWrapper.value?.removeAttribute('inert');
  outerNavWrapper.value?.removeAttribute('inert');
  if (open) {
    document.body.style.overflowY = 'clip';
    document.querySelector("body").style.overflowY = 'hidden !important';
    gsap.to(navWrapper.value, {
      width: '100%',
      height: '100%',
      duration: 0.9,
      delay: 0.3,
      ease: 'power3.out'
    })
  } else {
    document.body.style.overflowY = 'auto';
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
          class="fixed top-5 left-5 z-20 w-[100px] h-12 bg-white rounded-md familjen-grotesk font-bold cursor-pointer text-sm"
          :class="{'delay-500 drop-shadow-xl': !navOpen, 'delay-0 drop-shadow-none': navOpen}">
    <span class="flex flex-col overflow-hidden h-5 gap-2">
      <span class="transition duration-400 delay-150" :class="{'-translate-y-10': navOpen, 'translate-y-0': !navOpen}">MENÜ</span>
      <span class="transition duration-400 delay-150" :class="{'-translate-y-7': navOpen, 'translate-y-0': !navOpen}">SCHLIESSEN</span>
    </span>
  </button>

    <div class="fixed top-0 left-0 w-full h-full p-5 ease-in duration-200 z-[19]" inert ref="outerNavWrapper" @click="closeNav($event)"
       :class="{'bg-active pointer-events-auto' : navOpen, 'bg-no-active pointer-events-none': !navOpen}">
    <nav class="transition max-w-[450px] max-h-[750px] w-0 h-0 ease-in-out duration-700 origin-top-left bg-white rounded-md" @click.stop inert
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
  backdrop-filter: blur(5px);
}


</style>