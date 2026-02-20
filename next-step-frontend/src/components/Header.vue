<script setup>

import {onMounted, ref, useTemplateRef, watch} from 'vue'
import {gsap} from 'gsap'
import {scrollToElement} from "@/services/scroll-service.js";
import router from "@/router/index.ts";

let navOpen = ref(false)
let navWrapper = useTemplateRef('navWrapper')
let outerNavWrapper = useTemplateRef('outerNavWrapper')

onMounted(() => {
  document.body.addEventListener("keydown", (e) => {
    if (e.key === 'Escape' && navOpen.value) {
      navOpen.value = false;
    }
  })
})

function navAction() {
  navOpen.value = !navOpen.value
}

function closeNav($event) {
  if (navOpen.value) {
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
      padding: '64px 20px 0 20px',
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
      padding: '0',
      ease: 'power3.inOut'
    })
  }
})

async function navigate(target) {
  navOpen.value = false;
  let behaviour = "smooth";
  if (router.currentRoute.value.fullPath !== "/") {
    await router.push("/");
    behaviour = "instant"
  }
  scrollToElement(target, behaviour);
}

function routeToForm() {
  router.push('/form');
  navOpen.value = false;
}

</script>

<template>
  <button @click="navAction"
          class="fixed top-7 left-7 z-20 w-[100px] h-12 bg-white rounded-xl familjen-grotesk font-bold cursor-pointer text-sm"
          :class="{'delay-500 drop-shadow-xl': !navOpen, 'delay-0 drop-shadow-none': navOpen}">
    <span class="flex flex-col overflow-hidden h-5 gap-2">
      <span class="transition duration-400 delay-150" :class="{'-translate-y-10': navOpen, 'translate-y-0': !navOpen}">MENÜ</span>
      <span class="transition duration-400 delay-150" :class="{'-translate-y-7': navOpen, 'translate-y-0': !navOpen}">SCHLIESSEN</span>
    </span>
  </button>

  <div class="fixed top-0 left-0 w-full h-full p-7 ease-in duration-200 z-[19]" inert ref="outerNavWrapper"
       @click="closeNav($event)"
       :class="{'bg-active pointer-events-auto' : navOpen, 'bg-no-active pointer-events-none': !navOpen}">
    <nav
        class="transition max-w-[450px] max-h-[750px] w-0 h-0 ease-in-out duration-700 overflow-y-auto origin-top-left bg-white rounded-xl gap-2 flex flex-col shrink-0"
        @click.stop inert
        ref="navWrapper">
      <div class="w-full grid grid-cols-2 gap-x-2">
        <button class="w-full rounded-xl h-28 bg-[var(--primary)] flex items-center justify-center shrink-0"
                @click="navigate('home')">
          <h1>HOME</h1>
        </button>
        <button class="w-full rounded-xl h-28 bg-[var(--primary)] flex items-center justify-center shrink-0"
                @click="navigate('our-vision')">
          <h1>VISION</h1>
        </button>
      </div>
      <div class="w-full grid grid-cols-2 gap-x-2">
        <button class="w-full rounded-xl h-28 bg-[var(--primary)] flex items-center justify-center shrink-0"
                @click="navigate('next-steps')">
          <h1>STEPS</h1>
        </button>
        <button class="w-full rounded-xl h-28 bg-[var(--primary)] flex items-center justify-center shrink-0"
                @click="navigate('about-us')">
          <h1>ABOUT</h1>
        </button>
      </div>
      <button class="w-full rounded-xl h-28 bg-[var(--primary)] flex items-center justify-center shrink-0"
              @click="routeToForm()">
        <h1>FORMULAR</h1>
      </button>
      <div class="flex flex-col h-full gap-3">
        <button class="mt-8 bg-gray-200 rounded-lg py-3 shrink-0">
          <h1 style="color: var(--dark)">KONTAKT</h1>
        </button>
        <button class="bg-gray-200 rounded-lg py-3 shrink-0">
          <h1 style="color: var(--dark)">KONTAKT</h1>
        </button>
      </div>
      <a class="my-5 text-center text-lg familjen-grotesk" href="https://github.com/TimmieBimmie">made by <span
          class="underline underline-offset-1">Tim</span></a>
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

h1 {
  font-size: 2rem;
  color: var(--lite);
}

</style>