<script setup lang="ts">

</script>

<template>
  <div class="h-80 flex flex-col w-full mt-28 background z-0 relative justify-center">
    <div class="flex flex-col w-full -translate-y-3 gap-7">
      <h1>DEIN NÄCHSTER SCHRITT</h1>
      <RouterLink to="/form" class="mx-auto">
        <button class="bg-[var(--secondary)] w-fit px-6 py-2 rounded-lg familjen-grotesk text-lg font-bold">Zum
          Formular
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

.background {
  background-color: var(--dark);
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  color: var(--lite);
  padding: 3rem 2rem;
}

h1 {
  color: var(--lite);
  font-size: 2.5rem;
  line-height: 2.7rem;
  text-align: center;
}

.background::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
      135deg,
      rgba(100, 155, 231, 0.17),
      rgba(251, 117, 45, 0.09)
  );
  pointer-events: none;
}

</style>