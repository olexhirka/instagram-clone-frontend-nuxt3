<script lang="ts" setup>
import { useFps, useNetwork } from '@vueuse/core'
import { useThemeStore } from '@@/store'

const themeStore = useThemeStore()
const fps = useFps()
</script>

<template>
  <div class="fixed bottom-0 left-0 bg-c2 text-[0.75rem] text-c1">
    <div class="hidden py-[5px] px-[10px] xl:flex">
      <div>FPS :</div>
      <div>{{ fps }}</div>
    </div>
    <div class="flex items-center justify-center"></div>
  </div>
</template>
