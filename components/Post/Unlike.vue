<script lang="ts" setup>
import UnlikeIcon_ from '@@/assets/svg/unlike_icon.svg'
import { Elastic, gsap } from 'gsap'

const unlikeRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline()
  tl.to(unlikeRef.value, {
    scale: 4,
    duration: 0.5,
    ease: Elastic.easeOut.config(1, 0.3),
  })
  tl.to(unlikeRef.value, {
    display: 'none',
    duration: 0,
  })
})
</script>

<template>
  <div ref="unlikeRef" class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
    <UnlikeIcon_ />
  </div>
</template>
