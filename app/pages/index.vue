<template>
  <div class="wrapper flex-center">
    <div class="container">
      <the-cube
        v-for="item in headerItems"
        :key="item.title"
        :title="item.title"
        :class="`cube--${item.title.toLowerCase()}`"
        :to="item.to"
        :target="item.target"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'ninetypho – myles cream',
  meta: [
    {
      name: 'description',
      content: 'music, visuals, photography, skateboarding, croissants',
    },
  ],
})

const headerItems: Ref<
  {
    title: string
    to: string
    target: '_blank' | '_parent' | '_self' | '_top'
  }[]
> = ref([
  {
    title: 'Music',
    to: 'https://linktr.ee/mylescream',
    target: '_blank',
  },
  {
    title: 'Merch',
    to: 'https://store.ninetypho.com',
    target: '_self',
  },
  {
    title: 'Visuals',
    to: 'https://www.youtube.com/playlist?list=PLhDm9ZgO3vf-iDWtPb9dVQCw9m0XUrNVK',
    target: '_blank',
  },
  {
    title: 'Contact',
    to: '/contact',
    target: '_self',
  },
])
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1.5;
  width: 100%;
  height: 100%;
  min-width: 100vw;
}

.container {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

@media (max-width: 525px) {
  .container {
    transform: scale(0.9);
  }
}

@media (max-width: 380px) {
  .container {
    transform: scale(0.8);
  }
}
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
