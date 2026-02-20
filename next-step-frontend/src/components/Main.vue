<script setup>

import {nextTick, onMounted, ref, useTemplateRef} from 'vue'
import {gsap} from 'gsap'
import Card from "@/components/Card.vue";

let blob = import.meta.env.VITE_R2_DEV_URL;
let churchDetailWrapper = useTemplateRef("churchDetailWrapper");
let innerChurchDetail = useTemplateRef("innerChurchDetail");
let videoPlaying = ref(false);
let steps = [{
  title: "Titel",
  description: "Eine Beschreibung über den Schritt und was das bedeutet",
  icon: "/icons/write.svg"
}, {
  title: "Titel",
  description: "Eine Beschreibung über den Schritt und was das bedeutet",
  icon: "/icons/write.svg"
}, {title: "Titel", description: "Eine Beschreibung über den Schritt und was das bedeutet", icon: "/icons/write.svg"}];

let activeChurch = ref(null);

const churchList = [
  {
    imgSrc: "https://www.icf-baselland.ch/wp-content/uploads/sites/83/2024/12/2024-12-16-17.04.24.jpg",
    title: "Youth",
    description: {
      text: "Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre",
      times: "Fr. 19:00 - 20:00",
      place: "https://maps.app.goo.gl/WWM2dkki77xW2y22A",
      contact: {name: "Yannick Schmid", mail: "yannick.schmid@icf-basel.ch"}
    },
    descImgSrc: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
    website: "https://icf-basel.ch",
  },
  {
    imgSrc: "https://www.icf-baselland.ch/wp-content/uploads/sites/83/2024/12/2024-12-16-17.04.24.jpg",
    title: "Youth",
    description: {
      text: "Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre",
      times: "Fr. 19:00 - 20:00",
      place: "https://maps.app.goo.gl/WWM2dkki77xW2y22A",
      contact: {name: "Yannick Schmid", mail: "yannick.schmid@icf-basel.ch"}
    },
    descImgSrc: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
    website: "https://icf-basel.ch",
  },
  {
    imgSrc: "https://www.icf-baselland.ch/wp-content/uploads/sites/83/2024/12/2024-12-16-17.04.24.jpg",
    title: "Youth",
    description: {
      text: "Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre",
      times: "Fr. 19:00 - 20:00",
      place: "https://maps.app.goo.gl/WWM2dkki77xW2y22A",
      contact: {name: "Yannick Schmid", mail: "yannick.schmid@icf-basel.ch"}
    },
    descImgSrc: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
    website: "https://icf-basel.ch",
  },
  {
    imgSrc: "https://www.icf-baselland.ch/wp-content/uploads/sites/83/2024/12/2024-12-16-17.04.24.jpg",
    title: "Youth",
    description: {
      text: "Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre.Eine Beschreibung über die Kirche, das Programm und die Atmosphäre",
      times: "Fr. 19:00 - 20:00",
      place: "https://maps.app.goo.gl/WWM2dkki77xW2y22A",
      contact: {name: "Yannick Schmid", mail: "yannick.schmid@icf-basel.ch"}
    },
    descImgSrc: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
    website: "https://icf-basel.ch",
  },
]

onMounted(() => {
  gsap.to(['#verseWrapper', '#heroImg'], {
    width: '100%',
    filter: 'blur(0px)',
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: '#verseWrapper',
      start: 'top 87%',
      end: 'top 23%',
      scrub: true
    }
  })
  document.querySelectorAll(".animate-main").forEach(el => {
    gsap.from(el, {
      y: 30,
      scale: 0.96,
      opacity: 0,
      ease: 'power3.in',
      duration: 0.6,
      scrollTrigger: {
        trigger: el,
        start: 'top 94%'
      }
    })
  })

  document.querySelectorAll(".animate-partner").forEach((el, idx) => {
    gsap.from(el, {
      y: 38,
      scale: 0.98,
      opacity: 0,
      ease: 'power3.in',
      duration: 0.6,
      delay: idx * 0.05,
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

async function activateChurchDetail(church) {
  activeChurch.value = church;
  await nextTick();
  document.body.style.overflowY = 'hidden';
  gsap.to(churchDetailWrapper.value, {
    opacity: 1,
    duration: 0.3,
    ease: 'power4.in'
  })
  gsap.to(innerChurchDetail.value, {
    width: '100%',
    height: '100%',
    opacity: 1,
    filter: 'blur(0px)',
    duration: 0.4,
    delay: 0.1,
    ease: 'power4.in',
  })
  churchDetailWrapper.value.classList.add("bg-active")
  churchDetailWrapper.value.removeAttribute("inert");
}

async function deactivateChurchDetail() {
  document.body.style.overflowY = 'auto';
  gsap.to(innerChurchDetail.value, {
    width: '75%',
    height: '75%',
    opacity: 0,
    duration: 0.4,
    ease: 'power4.out',
  })
  gsap.to(churchDetailWrapper.value, {
    opacity: 0,
    duration: 0.2,
  })
  setTimeout(async () => {
    activeChurch.value = null;
    await nextTick();
    churchDetailWrapper.value.classList.remove("bg-active");
    churchDetailWrapper.value.inert = true;
  }, 300)

}

</script>

<template>
  <div class="flex flex-col justify-center w-full xl:gap-44 lg:gap-32 md:gap-24 gap-24">
    <div class="min-w-[85%] mx-auto h-64 ms-auto rounded-xl aspect-square flex justify-center items-center"
         id="verseWrapper"
         style="background: #649BE7; background: linear-gradient(209deg, rgba(100, 155, 231, 1) 0%, rgba(181, 213, 255, 1) 73%, rgba(228, 231, 237, 1) 100%);">
      <img src="/hero-img.png" class="blur-[5px] w-full h-full object-contain select-none" id="heroImg">
    </div>
    <div class="w-full flex flex-col" id="our-vision">
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
    <div class="w-full flex flex-col" id="next-steps">
      <h1 class="animate-main mb-10">NEXT STEPS</h1>
      <div class="flex gap-5 flex-col md:flex-row flex-wrap w-full justify-center">
        <Card v-for="step of steps" :data="step"></Card>
      </div>
    </div>

    <div class="w-full flex flex-col" id="about-us">
      <div v-show="activeChurch"
           class="fixed p-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100dvh] z-50 opacity-0 flex justify-center items-center"
           inert ref="churchDetailWrapper" @click="deactivateChurchDetail()">

        <div @click.stop
             class="bg-white rounded-xl relative p-3 px-5 flex flex-col w-3/4 h-3/4 blur-xs max-w-[1350px] max-h-[800px] overflow-y-auto"
             ref="innerChurchDetail">
          <button aria-description="close"
                  class="border-[1px] border-gray-300 p-2 w-fit ms-auto rounded-full hover:bg-[var(--secondary)] group cursor-pointer mb:5"
                  @click="deactivateChurchDetail">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6 stroke-gray-600 group-hover:stroke-white transition-colors">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="flex flex-col max-w-[750px] mx-auto mt-5 h-full overflow-y-auto">
            <img :src="activeChurch?.descImgSrc"
                 class="w-full max-h-[350px] object-cover aspect-video object-center rounded-xl"/>
            <p class="w-full text-lg text-gray-700 mt-7 hyphens-auto break-inside-auto">
              {{ activeChurch?.description.text }}</p>
            <div class="flex flex-col h-full justify-center">
              <div class="flex gap-5 mt-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" class="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <p class="font-medium text-lg">{{ activeChurch?.description.times }}</p>
              </div>
              <div class="flex gap-5 mt-2 mb-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" class="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                </svg>
                <a class="font-medium text-lg underline underline-offset-2" :href="activeChurch?.description.place">Google
                  Maps</a>
              </div>
            </div>
          </div>
          <a class="mt-auto w-full max-w-[750px] mx-auto" :href="activeChurch?.website" target="_self">
            <button
                class="cursor-pointer w-full bg-[var(--secondary)] py-[10px] rounded-lg text-[var(--lite)] familjen-grotesk text-lg font-medium">
              Zur Website
            </button>
          </a>
        </div>

      </div>

      <h1 class="animate-main mb-10">ÜBER UNS</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3">
        <button
            class="h-[75px] w-full animate-partner bg-gray-50 border-[1px] border-gray-400 rounded-xl cursor-pointer overflow-hidden hover:border-gray-700"
            v-for="church of churchList"
            @click="activateChurchDetail(church)">
          <img :src="church.imgSrc" class="h-full w-full object-contain rounded-xl">
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


.bg-active {
  background-color: rgba(16, 16, 14, 0.2);
  backdrop-filter: blur(5px);
}


</style>