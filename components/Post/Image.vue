<script lang="ts" setup>
import { useDoubleClick } from '@@/composables'
import { useTimeLineStore } from '@@/store'

interface IProps {
  src: string
  idPost: string
}

const props = defineProps<IProps>()

const timelineStore = useTimeLineStore()
const imageRef = ref<HTMLImageElement | null>(null)

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

useDoubleClick(imageRef, () => {}, toggleLike)
</script>

<template>
  <div class="min-w-full">
    <img
      ref="imageRef"
      class="max-h-[60vh] min-h-full min-w-full bg-c2 object-contain"
      draggable="false"
      :src="src"
      alt=""
    />
  </div>
</template>
