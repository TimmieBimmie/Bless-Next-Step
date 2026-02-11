<script setup lang="ts"></script>

onMounted(() => {
gsap.from(".box", {
y: 100,
opacity: 0,
duration: 1,
scrollTrigger: {
trigger: ".box",
start: "top 80%",
toggleActions: "play none none none"
}
})
})

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <div ></div>
</template>

<style scoped></style>
