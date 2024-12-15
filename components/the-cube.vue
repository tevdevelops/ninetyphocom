<template>
  <NuxtLink :to="to" class="cube" :target="target">
    <div class="face front">{{ title }}</div>
    <div class="face back"></div>
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="face top"></div>
    <div class="face bottom"></div>
  </NuxtLink>
</template>

<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'

interface Props {
  to: string
  title: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}

function introCubeAnimation() {
  anime({
    targets: '.cube',
    top: 0,
    delay: anime.stagger(250),
    duration: 2000,
    easing: 'spring(0.75, 80, 10, 10)',
  })
}

function hoverCubeAnimation(event: Event) {
  anime({
    targets: event.currentTarget,
    top: [0, -25],
    duration: 100,
    easing: 'spring(0.75, 80, 10, 10)',
    direction: 'alternate',
  })
}

onMounted(() => {
  introCubeAnimation()
})

defineProps<Props>()
</script>
<style scoped>
.cube {
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 250ms ease-in;
  cursor: pointer;
  top: -1000px;
}

.cube--music {
  transform: rotateX(232deg) rotateY(178deg) rotateZ(218deg);
  z-index: 10;
}

.cube--music .front {
  background-color: #636363;
  color: white;
}

.cube--merch {
  transform: rotateX(216deg) rotateY(131deg) rotateZ(182deg);
  margin-top: 80px;
  z-index: 20;
}

.cube--merch .front {
  background-color: #898989;
  color: white;
}

.cube--visuals {
  transform: rotateX(150deg) rotateY(140deg) rotateZ(180deg);
  margin-top: 160px;
  z-index: 30;
}

.cube--visuals .front {
  background-color: #d2d2d2;
  color: black;
  font-size: 18px;
}

.cube--contact {
  transform: rotateX(152deg) rotateY(151deg) rotateZ(189deg);
  margin-top: 264px;
  z-index: 40;
}

.cube--contact .front {
  background-color: #f4f4f4;
  color: black;
  font-size: 18px;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #000;
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  text-transform: uppercase;
}

.front {
  transform: translateZ(50px);
}

.back {
  transform: rotateY(180deg) translateZ(50px);
}

.left {
  transform: rotateY(-90deg) translateZ(50px);
}

.right {
  transform: rotateY(90deg) translateZ(50px);
}

.top {
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
